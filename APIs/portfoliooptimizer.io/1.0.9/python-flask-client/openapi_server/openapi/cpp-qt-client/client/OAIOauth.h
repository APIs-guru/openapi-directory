/**
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Providing a Oauth2 Class and a ReplyServer for the Oauth2 authorization code flow. 
 */
#ifndef OAI_OAUTH2_H
#define OAI_OAUTH2_H

#include <QObject>
#include <QtCore>
#include <QtNetwork>
#include <QDesktopServices>
#include <QNetworkRequest>
#include <QNetworkReply>
#include <QNetworkAccessManager>
#include <QtDebug>
#include <QTcpServer>
#include <QTcpSocket>
#include <QByteArray>
#include <QString>
#include <QMap>
#include <QUrl>
#include <QUrlQuery>
#include <QDateTime>
#include <time.h>

namespace OpenAPI {

class oauthToken
{
public:
    oauthToken(QString token, int expiresIn, QString scope, QString tokenType) : m_token(token), m_scope(scope), m_type(tokenType){
        m_validUntil = time(nullptr) + expiresIn;
    }
    oauthToken(){
        m_validUntil = time(nullptr) - 1;
    }
    QString getToken(){return m_token;};
    QString getScope(){return m_scope;};
    QString getType(){return m_type;};
    bool isValid(){return time(nullptr) < m_validUntil;};

private:
    QString m_token;
    time_t m_validUntil;
    QString m_scope;
    QString m_type;
};

class ReplyServer : public QTcpServer
{
    Q_OBJECT
public:
    explicit ReplyServer(QObject *parent = nullptr);
    void setReply(QByteArray reply){m_reply = reply;};
    void run();
private:
    QByteArray m_reply;

Q_SIGNALS:
    void dataReceived(QMap<QString, QString>);

public Q_SLOTS:
    void onConnected();
    void read();
    void start();
    void stop();
};

//Base class
class OauthBase : public QObject
{
    Q_OBJECT
public: 
    OauthBase(QObject* parent = nullptr) : QObject(parent) {};
    oauthToken getToken(QString scope);
    void addToken(oauthToken token);
    void removeToken(QString scope);
    bool linked(){return m_linked;};
    virtual void link()=0;
    virtual void unlink()=0;

protected:
    QMap<QString, oauthToken> m_oauthTokenMap;
    QUrl m_authUrl;
    QUrl m_tokenUrl;
    QString m_scope, m_accessType, m_state, m_redirectUri, m_clientId, m_clientSecret;
    bool m_linked;

public Q_SLOTS:
    virtual void authenticationNeededCallback()=0;
    void onFinish(QNetworkReply *rep);

Q_SIGNALS:
    void authenticationNeeded();
    void tokenReceived();
};

// Authorization code flow
class OauthCode : public OauthBase
{
    Q_OBJECT
public:
    OauthCode(QObject *parent = nullptr);
    void link() override;
    void unlink() override;
    void setVariables(QString authUrl, QString tokenUrl, QString scope, QString state, QString redirectUri, QString clientId, QString clientSecret, QString accessType = "");

private:
    ReplyServer m_server;

public Q_SLOTS:
    void authenticationNeededCallback() override;
    void onVerificationReceived(const QMap<QString, QString> response);

};

// Implicit flow
class OauthImplicit : public OauthBase
{
    Q_OBJECT
public:
    OauthImplicit(QObject *parent = nullptr);
    void link() override;
    void unlink() override;
    void setVariables(QString authUrl, QString scope, QString state, QString redirectUri, QString clientId, QString accessType = "");

private:
    ReplyServer m_server;

public Q_SLOTS:
    void authenticationNeededCallback() override;
    void ImplicitTokenReceived(const QMap<QString, QString> response);
};

//client credentials flow
class OauthCredentials : public OauthBase
{
    Q_OBJECT
public:
    OauthCredentials(QObject *parent = nullptr);
    void link() override;
    void unlink() override;
    void setVariables(QString tokenUrl, QString scope, QString clientId, QString clientSecret);

public Q_SLOTS:
    void authenticationNeededCallback() override;

};

//resource owner password flow
class OauthPassword : public OauthBase
{
    Q_OBJECT
public:
    OauthPassword(QObject *parent = nullptr);
    void link() override;
    void unlink() override;
    void setVariables(QString tokenUrl, QString scope, QString clientId, QString clientSecret, QString username, QString password);

private:
    QString m_username, m_password;

public Q_SLOTS:
    void authenticationNeededCallback() override;

};


} // namespace OpenAPI
#endif // OAI_OAUTH2_H
