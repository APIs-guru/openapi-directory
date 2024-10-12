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

#include "OAI_portfolio_optimization_minimum_variance_post_request.h"

#include <QDebug>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>

#include "OAIHelpers.h"

namespace OpenAPI {

OAI_portfolio_optimization_minimum_variance_post_request::OAI_portfolio_optimization_minimum_variance_post_request(QString json) {
    this->initializeModel();
    this->fromJson(json);
}

OAI_portfolio_optimization_minimum_variance_post_request::OAI_portfolio_optimization_minimum_variance_post_request() {
    this->initializeModel();
}

OAI_portfolio_optimization_minimum_variance_post_request::~OAI_portfolio_optimization_minimum_variance_post_request() {}

void OAI_portfolio_optimization_minimum_variance_post_request::initializeModel() {

    m_assets_isSet = false;
    m_assets_isValid = false;

    m_assets_covariance_matrix_isSet = false;
    m_assets_covariance_matrix_isValid = false;

    m_assets_returns_isSet = false;
    m_assets_returns_isValid = false;

    m_constraints_isSet = false;
    m_constraints_isValid = false;
}

void OAI_portfolio_optimization_minimum_variance_post_request::fromJson(QString jsonString) {
    QByteArray array(jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void OAI_portfolio_optimization_minimum_variance_post_request::fromJsonObject(QJsonObject json) {

    m_assets_isValid = ::OpenAPI::fromJsonValue(m_assets, json[QString("assets")]);
    m_assets_isSet = !json[QString("assets")].isNull() && m_assets_isValid;

    if(json["assetsCovarianceMatrix"].isArray()){
        auto arr = json["assetsCovarianceMatrix"].toArray();
        m_assets_covariance_matrix_isValid = true;
        if(arr.count() > 0) {
            for (const QJsonValue jval : arr) {
                QList<double> item;
                m_assets_covariance_matrix_isValid &= ::OpenAPI::fromJsonValue(item, jval);
                m_assets_covariance_matrix_isSet = !jval.isNull() && m_assets_covariance_matrix_isValid;
                m_assets_covariance_matrix.push_back(item);
            }
        }
    }

    m_assets_returns_isValid = ::OpenAPI::fromJsonValue(m_assets_returns, json[QString("assetsReturns")]);
    m_assets_returns_isSet = !json[QString("assetsReturns")].isNull() && m_assets_returns_isValid;

    m_constraints_isValid = ::OpenAPI::fromJsonValue(m_constraints, json[QString("constraints")]);
    m_constraints_isSet = !json[QString("constraints")].isNull() && m_constraints_isValid;
}

QString OAI_portfolio_optimization_minimum_variance_post_request::asJson() const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject OAI_portfolio_optimization_minimum_variance_post_request::asJsonObject() const {
    QJsonObject obj;
    if (m_assets_isSet) {
        obj.insert(QString("assets"), ::OpenAPI::toJsonValue(m_assets));
    }
    if (m_assets_covariance_matrix.size() > 0) {
        
        obj.insert(QString("assetsCovarianceMatrix"), toJsonValue(m_assets_covariance_matrix));
    }
    if (m_assets_returns.size() > 0) {
        obj.insert(QString("assetsReturns"), ::OpenAPI::toJsonValue(m_assets_returns));
    }
    if (m_constraints.isSet()) {
        obj.insert(QString("constraints"), ::OpenAPI::toJsonValue(m_constraints));
    }
    return obj;
}

qint32 OAI_portfolio_optimization_minimum_variance_post_request::getAssets() const {
    return m_assets;
}
void OAI_portfolio_optimization_minimum_variance_post_request::setAssets(const qint32 &assets) {
    m_assets = assets;
    m_assets_isSet = true;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::is_assets_Set() const{
    return m_assets_isSet;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::is_assets_Valid() const{
    return m_assets_isValid;
}

QList<QList<double>> OAI_portfolio_optimization_minimum_variance_post_request::getAssetsCovarianceMatrix() const {
    return m_assets_covariance_matrix;
}
void OAI_portfolio_optimization_minimum_variance_post_request::setAssetsCovarianceMatrix(const QList<QList<double>> &assets_covariance_matrix) {
    m_assets_covariance_matrix = assets_covariance_matrix;
    m_assets_covariance_matrix_isSet = true;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::is_assets_covariance_matrix_Set() const{
    return m_assets_covariance_matrix_isSet;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::is_assets_covariance_matrix_Valid() const{
    return m_assets_covariance_matrix_isValid;
}

QList<double> OAI_portfolio_optimization_minimum_variance_post_request::getAssetsReturns() const {
    return m_assets_returns;
}
void OAI_portfolio_optimization_minimum_variance_post_request::setAssetsReturns(const QList<double> &assets_returns) {
    m_assets_returns = assets_returns;
    m_assets_returns_isSet = true;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::is_assets_returns_Set() const{
    return m_assets_returns_isSet;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::is_assets_returns_Valid() const{
    return m_assets_returns_isValid;
}

OAI_portfolio_analysis_mean_variance_efficient_frontier_post_request_constraints OAI_portfolio_optimization_minimum_variance_post_request::getConstraints() const {
    return m_constraints;
}
void OAI_portfolio_optimization_minimum_variance_post_request::setConstraints(const OAI_portfolio_analysis_mean_variance_efficient_frontier_post_request_constraints &constraints) {
    m_constraints = constraints;
    m_constraints_isSet = true;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::is_constraints_Set() const{
    return m_constraints_isSet;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::is_constraints_Valid() const{
    return m_constraints_isValid;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::isSet() const {
    bool isObjectUpdated = false;
    do {
        if (m_assets_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_covariance_matrix.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_returns.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_constraints.isSet()) {
            isObjectUpdated = true;
            break;
        }
    } while (false);
    return isObjectUpdated;
}

bool OAI_portfolio_optimization_minimum_variance_post_request::isValid() const {
    // only required properties are required for the object to be considered valid
    return m_assets_isValid && m_assets_covariance_matrix_isValid && true;
}

} // namespace OpenAPI
