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

#include "OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1.h"

#include <QDebug>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>

#include "OAIHelpers.h"

namespace OpenAPI {

OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1(QString json) {
    this->initializeModel();
    this->fromJson(json);
}

OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1() {
    this->initializeModel();
}

OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::~OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1() {}

void OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::initializeModel() {

    m_benchmark_values_isSet = false;
    m_benchmark_values_isValid = false;

    m_confidence_level_isSet = false;
    m_confidence_level_isValid = false;

    m_portfolios_isSet = false;
    m_portfolios_isValid = false;

    m_risk_free_rate_isSet = false;
    m_risk_free_rate_isValid = false;
}

void OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::fromJson(QString jsonString) {
    QByteArray array(jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::fromJsonObject(QJsonObject json) {

    m_benchmark_values_isValid = ::OpenAPI::fromJsonValue(m_benchmark_values, json[QString("benchmarkValues")]);
    m_benchmark_values_isSet = !json[QString("benchmarkValues")].isNull() && m_benchmark_values_isValid;

    m_confidence_level_isValid = ::OpenAPI::fromJsonValue(m_confidence_level, json[QString("confidenceLevel")]);
    m_confidence_level_isSet = !json[QString("confidenceLevel")].isNull() && m_confidence_level_isValid;

    m_portfolios_isValid = ::OpenAPI::fromJsonValue(m_portfolios, json[QString("portfolios")]);
    m_portfolios_isSet = !json[QString("portfolios")].isNull() && m_portfolios_isValid;

    m_risk_free_rate_isValid = ::OpenAPI::fromJsonValue(m_risk_free_rate, json[QString("riskFreeRate")]);
    m_risk_free_rate_isSet = !json[QString("riskFreeRate")].isNull() && m_risk_free_rate_isValid;
}

QString OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::asJson() const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::asJsonObject() const {
    QJsonObject obj;
    if (m_benchmark_values.size() > 0) {
        obj.insert(QString("benchmarkValues"), ::OpenAPI::toJsonValue(m_benchmark_values));
    }
    if (m_confidence_level_isSet) {
        obj.insert(QString("confidenceLevel"), ::OpenAPI::toJsonValue(m_confidence_level));
    }
    if (m_portfolios.size() > 0) {
        obj.insert(QString("portfolios"), ::OpenAPI::toJsonValue(m_portfolios));
    }
    if (m_risk_free_rate_isSet) {
        obj.insert(QString("riskFreeRate"), ::OpenAPI::toJsonValue(m_risk_free_rate));
    }
    return obj;
}

QList<double> OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::getBenchmarkValues() const {
    return m_benchmark_values;
}
void OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::setBenchmarkValues(const QList<double> &benchmark_values) {
    m_benchmark_values = benchmark_values;
    m_benchmark_values_isSet = true;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::is_benchmark_values_Set() const{
    return m_benchmark_values_isSet;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::is_benchmark_values_Valid() const{
    return m_benchmark_values_isValid;
}

double OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::getConfidenceLevel() const {
    return m_confidence_level;
}
void OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::setConfidenceLevel(const double &confidence_level) {
    m_confidence_level = confidence_level;
    m_confidence_level_isSet = true;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::is_confidence_level_Set() const{
    return m_confidence_level_isSet;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::is_confidence_level_Valid() const{
    return m_confidence_level_isValid;
}

QList<OAI_portfolio_analysis_sharpe_ratio_bias_adjusted_post_request_portfolios_inner> OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::getPortfolios() const {
    return m_portfolios;
}
void OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::setPortfolios(const QList<OAI_portfolio_analysis_sharpe_ratio_bias_adjusted_post_request_portfolios_inner> &portfolios) {
    m_portfolios = portfolios;
    m_portfolios_isSet = true;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::is_portfolios_Set() const{
    return m_portfolios_isSet;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::is_portfolios_Valid() const{
    return m_portfolios_isValid;
}

double OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::getRiskFreeRate() const {
    return m_risk_free_rate;
}
void OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::setRiskFreeRate(const double &risk_free_rate) {
    m_risk_free_rate = risk_free_rate;
    m_risk_free_rate_isSet = true;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::is_risk_free_rate_Set() const{
    return m_risk_free_rate_isSet;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::is_risk_free_rate_Valid() const{
    return m_risk_free_rate_isValid;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::isSet() const {
    bool isObjectUpdated = false;
    do {
        if (m_benchmark_values.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_confidence_level_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_portfolios.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_risk_free_rate_isSet) {
            isObjectUpdated = true;
            break;
        }
    } while (false);
    return isObjectUpdated;
}

bool OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request_oneOf_1::isValid() const {
    // only required properties are required for the object to be considered valid
    return m_portfolios_isValid && m_risk_free_rate_isValid && true;
}

} // namespace OpenAPI
