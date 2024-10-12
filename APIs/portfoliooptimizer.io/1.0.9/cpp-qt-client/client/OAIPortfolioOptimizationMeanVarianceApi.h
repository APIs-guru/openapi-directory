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

#ifndef OAI_OAIPortfolioOptimizationMeanVarianceApi_H
#define OAI_OAIPortfolioOptimizationMeanVarianceApi_H

#include "OAIHelpers.h"
#include "OAIHttpRequest.h"
#include "OAIServerConfiguration.h"
#include "OAIOauth.h"

#include "OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner.h"
#include "OAI_portfolio_optimization_maximum_return_diversified_post_request.h"
#include "OAI_portfolio_optimization_maximum_return_post_request.h"
#include "OAI_portfolio_optimization_maximum_return_subset_resampling_based_post_request.h"
#include "OAI_portfolio_optimization_maximum_sharpe_ratio_diversified_post_request.h"
#include "OAI_portfolio_optimization_maximum_sharpe_ratio_post_request.h"
#include "OAI_portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request.h"
#include "OAI_portfolio_optimization_mean_variance_efficient_diversified_post_request.h"
#include "OAI_portfolio_optimization_mean_variance_efficient_post_request.h"
#include "OAI_portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request.h"
#include "OAI_portfolio_optimization_minimum_variance_diversified_post_request.h"
#include "OAI_portfolio_optimization_minimum_variance_post_request.h"
#include "OAI_portfolio_optimization_minimum_variance_subset_resampling_based_post_request.h"
#include <QString>

#include <QObject>
#include <QByteArray>
#include <QStringList>
#include <QList>
#include <QNetworkAccessManager>

namespace OpenAPI {

class OAIPortfolioOptimizationMeanVarianceApi : public QObject {
    Q_OBJECT

public:
    OAIPortfolioOptimizationMeanVarianceApi(const int timeOut = 0);
    ~OAIPortfolioOptimizationMeanVarianceApi();

    void initializeServerConfigs();
    int setDefaultServerValue(int serverIndex,const QString &operation, const QString &variable,const QString &val);
    void setServerIndex(const QString &operation, int serverIndex);
    void setApiKey(const QString &apiKeyName, const QString &apiKey);
    void setBearerToken(const QString &token);
    void setUsername(const QString &username);
    void setPassword(const QString &password);
    void setTimeOut(const int timeOut);
    void setWorkingDirectory(const QString &path);
    void setNetworkAccessManager(QNetworkAccessManager* manager);
    int addServerConfiguration(const QString &operation, const QUrl &url, const QString &description = "", const QMap<QString, OAIServerVariable> &variables = QMap<QString, OAIServerVariable>());
    void setNewServerForAllOperations(const QUrl &url, const QString &description = "", const QMap<QString, OAIServerVariable> &variables =  QMap<QString, OAIServerVariable>());
    void setNewServer(const QString &operation, const QUrl &url, const QString &description = "", const QMap<QString, OAIServerVariable> &variables =  QMap<QString, OAIServerVariable>());
    void addHeaders(const QString &key, const QString &value);
    void enableRequestCompression();
    void enableResponseCompression();
    void abortRequests();
    QString getParamStylePrefix(const QString &style);
    QString getParamStyleSuffix(const QString &style);
    QString getParamStyleDelimiter(const QString &style, const QString &name, bool isExplode);

    /**
    * @param[in]  body OAI_portfolio_optimization_maximum_return_diversified_post_request [required]
    */
    virtual void portfolioOptimizationMaximumReturnDiversifiedPost(const OAI_portfolio_optimization_maximum_return_diversified_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_maximum_return_post_request [required]
    */
    virtual void portfolioOptimizationMaximumReturnPost(const OAI_portfolio_optimization_maximum_return_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_maximum_return_subset_resampling_based_post_request [required]
    */
    virtual void portfolioOptimizationMaximumReturnSubsetResamplingBasedPost(const OAI_portfolio_optimization_maximum_return_subset_resampling_based_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_maximum_sharpe_ratio_diversified_post_request [required]
    */
    virtual void portfolioOptimizationMaximumSharpeRatioDiversifiedPost(const OAI_portfolio_optimization_maximum_sharpe_ratio_diversified_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_maximum_sharpe_ratio_post_request [required]
    */
    virtual void portfolioOptimizationMaximumSharpeRatioPost(const OAI_portfolio_optimization_maximum_sharpe_ratio_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request [required]
    */
    virtual void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPost(const OAI_portfolio_optimization_maximum_sharpe_ratio_subset_resampling_based_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_mean_variance_efficient_diversified_post_request [required]
    */
    virtual void portfolioOptimizationMeanVarianceEfficientDiversifiedPost(const OAI_portfolio_optimization_mean_variance_efficient_diversified_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_mean_variance_efficient_post_request [required]
    */
    virtual void portfolioOptimizationMeanVarianceEfficientPost(const OAI_portfolio_optimization_mean_variance_efficient_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request [required]
    */
    virtual void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPost(const OAI_portfolio_optimization_mean_variance_efficient_subset_resampling_based_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_minimum_variance_diversified_post_request [required]
    */
    virtual void portfolioOptimizationMinimumVarianceDiversifiedPost(const OAI_portfolio_optimization_minimum_variance_diversified_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_minimum_variance_post_request [required]
    */
    virtual void portfolioOptimizationMinimumVariancePost(const OAI_portfolio_optimization_minimum_variance_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_minimum_variance_subset_resampling_based_post_request [required]
    */
    virtual void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPost(const OAI_portfolio_optimization_minimum_variance_subset_resampling_based_post_request &body);


private:
    QMap<QString,int> _serverIndices;
    QMap<QString,QList<OAIServerConfiguration>> _serverConfigs;
    QMap<QString, QString> _apiKeys;
    QString _bearerToken;
    QString _username;
    QString _password;
    int _timeOut;
    QString _workingDirectory;
    QNetworkAccessManager* _manager;
    QMap<QString, QString> _defaultHeaders;
    bool _isResponseCompressionEnabled;
    bool _isRequestCompressionEnabled;
    OAIHttpRequestInput _latestInput;
    OAIHttpRequestWorker *_latestWorker;
    QStringList _latestScope;
    OauthCode _authFlow;
    OauthImplicit _implicitFlow;
    OauthCredentials _credentialFlow;
    OauthPassword _passwordFlow;
    int _OauthMethod = 0;

    void portfolioOptimizationMaximumReturnDiversifiedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMaximumReturnPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMaximumReturnSubsetResamplingBasedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMaximumSharpeRatioDiversifiedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMaximumSharpeRatioPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMeanVarianceEfficientDiversifiedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMeanVarianceEfficientPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMinimumVarianceDiversifiedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMinimumVariancePostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostCallback(OAIHttpRequestWorker *worker);

Q_SIGNALS:

    void portfolioOptimizationMaximumReturnDiversifiedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumReturnPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumReturnSubsetResamplingBasedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumSharpeRatioDiversifiedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumSharpeRatioPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMeanVarianceEfficientDiversifiedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMeanVarianceEfficientPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumVarianceDiversifiedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumVariancePostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);


    void portfolioOptimizationMaximumReturnDiversifiedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumReturnPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumReturnSubsetResamplingBasedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumSharpeRatioDiversifiedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumSharpeRatioPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMeanVarianceEfficientDiversifiedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMeanVarianceEfficientPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumVarianceDiversifiedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumVariancePostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);

    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumReturnDiversifiedPostSignalError() instead")
    void portfolioOptimizationMaximumReturnDiversifiedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumReturnDiversifiedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumReturnPostSignalError() instead")
    void portfolioOptimizationMaximumReturnPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumReturnPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumReturnSubsetResamplingBasedPostSignalError() instead")
    void portfolioOptimizationMaximumReturnSubsetResamplingBasedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumReturnSubsetResamplingBasedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumSharpeRatioDiversifiedPostSignalError() instead")
    void portfolioOptimizationMaximumSharpeRatioDiversifiedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumSharpeRatioDiversifiedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumSharpeRatioPostSignalError() instead")
    void portfolioOptimizationMaximumSharpeRatioPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumSharpeRatioPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostSignalError() instead")
    void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMeanVarianceEfficientDiversifiedPostSignalError() instead")
    void portfolioOptimizationMeanVarianceEfficientDiversifiedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMeanVarianceEfficientDiversifiedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMeanVarianceEfficientPostSignalError() instead")
    void portfolioOptimizationMeanVarianceEfficientPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMeanVarianceEfficientPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostSignalError() instead")
    void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumVarianceDiversifiedPostSignalError() instead")
    void portfolioOptimizationMinimumVarianceDiversifiedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumVarianceDiversifiedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumVariancePostSignalError() instead")
    void portfolioOptimizationMinimumVariancePostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumVariancePostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostSignalError() instead")
    void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);

    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumReturnDiversifiedPostSignalErrorFull() instead")
    void portfolioOptimizationMaximumReturnDiversifiedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumReturnDiversifiedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumReturnPostSignalErrorFull() instead")
    void portfolioOptimizationMaximumReturnPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumReturnPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumReturnSubsetResamplingBasedPostSignalErrorFull() instead")
    void portfolioOptimizationMaximumReturnSubsetResamplingBasedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumReturnSubsetResamplingBasedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumSharpeRatioDiversifiedPostSignalErrorFull() instead")
    void portfolioOptimizationMaximumSharpeRatioDiversifiedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumSharpeRatioDiversifiedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumSharpeRatioPostSignalErrorFull() instead")
    void portfolioOptimizationMaximumSharpeRatioPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumSharpeRatioPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostSignalErrorFull() instead")
    void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMeanVarianceEfficientDiversifiedPostSignalErrorFull() instead")
    void portfolioOptimizationMeanVarianceEfficientDiversifiedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMeanVarianceEfficientDiversifiedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMeanVarianceEfficientPostSignalErrorFull() instead")
    void portfolioOptimizationMeanVarianceEfficientPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMeanVarianceEfficientPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostSignalErrorFull() instead")
    void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumVarianceDiversifiedPostSignalErrorFull() instead")
    void portfolioOptimizationMinimumVarianceDiversifiedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumVarianceDiversifiedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumVariancePostSignalErrorFull() instead")
    void portfolioOptimizationMinimumVariancePostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumVariancePostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostSignalErrorFull() instead")
    void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumVarianceSubsetResamplingBasedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);

    void abortRequestsSignal();
    void allPendingRequestsCompleted();

public Q_SLOTS:
    void tokenAvailable();
};

} // namespace OpenAPI
#endif
