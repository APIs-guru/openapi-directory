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

#include "OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints.h"

#include <QDebug>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>

#include "OAIHelpers.h"

namespace OpenAPI {

OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints(QString json) {
    this->initializeModel();
    this->fromJson(json);
}

OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints() {
    this->initializeModel();
}

OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::~OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints() {}

void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::initializeModel() {

    m_assets_groups_isSet = false;
    m_assets_groups_isValid = false;

    m_assets_groups_matrix_isSet = false;
    m_assets_groups_matrix_isValid = false;

    m_delta_return_isSet = false;
    m_delta_return_isValid = false;

    m_delta_volatility_isSet = false;
    m_delta_volatility_isValid = false;

    m_maximum_assets_groups_weights_isSet = false;
    m_maximum_assets_groups_weights_isValid = false;

    m_maximum_assets_weights_isSet = false;
    m_maximum_assets_weights_isValid = false;

    m_maximum_portfolio_exposure_isSet = false;
    m_maximum_portfolio_exposure_isValid = false;

    m_minimum_assets_weights_isSet = false;
    m_minimum_assets_weights_isValid = false;

    m_minimum_portfolio_exposure_isSet = false;
    m_minimum_portfolio_exposure_isValid = false;
}

void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::fromJson(QString jsonString) {
    QByteArray array(jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::fromJsonObject(QJsonObject json) {

    if(json["assetsGroups"].isArray()){
        auto arr = json["assetsGroups"].toArray();
        m_assets_groups_isValid = true;
        if(arr.count() > 0) {
            for (const QJsonValue jval : arr) {
                QList<qint32> item;
                m_assets_groups_isValid &= ::OpenAPI::fromJsonValue(item, jval);
                m_assets_groups_isSet = !jval.isNull() && m_assets_groups_isValid;
                m_assets_groups.push_back(item);
            }
        }
    }

    if(json["assetsGroupsMatrix"].isArray()){
        auto arr = json["assetsGroupsMatrix"].toArray();
        m_assets_groups_matrix_isValid = true;
        if(arr.count() > 0) {
            for (const QJsonValue jval : arr) {
                QList<double> item;
                m_assets_groups_matrix_isValid &= ::OpenAPI::fromJsonValue(item, jval);
                m_assets_groups_matrix_isSet = !jval.isNull() && m_assets_groups_matrix_isValid;
                m_assets_groups_matrix.push_back(item);
            }
        }
    }

    m_delta_return_isValid = ::OpenAPI::fromJsonValue(m_delta_return, json[QString("deltaReturn")]);
    m_delta_return_isSet = !json[QString("deltaReturn")].isNull() && m_delta_return_isValid;

    m_delta_volatility_isValid = ::OpenAPI::fromJsonValue(m_delta_volatility, json[QString("deltaVolatility")]);
    m_delta_volatility_isSet = !json[QString("deltaVolatility")].isNull() && m_delta_volatility_isValid;

    m_maximum_assets_groups_weights_isValid = ::OpenAPI::fromJsonValue(m_maximum_assets_groups_weights, json[QString("maximumAssetsGroupsWeights")]);
    m_maximum_assets_groups_weights_isSet = !json[QString("maximumAssetsGroupsWeights")].isNull() && m_maximum_assets_groups_weights_isValid;

    m_maximum_assets_weights_isValid = ::OpenAPI::fromJsonValue(m_maximum_assets_weights, json[QString("maximumAssetsWeights")]);
    m_maximum_assets_weights_isSet = !json[QString("maximumAssetsWeights")].isNull() && m_maximum_assets_weights_isValid;

    m_maximum_portfolio_exposure_isValid = ::OpenAPI::fromJsonValue(m_maximum_portfolio_exposure, json[QString("maximumPortfolioExposure")]);
    m_maximum_portfolio_exposure_isSet = !json[QString("maximumPortfolioExposure")].isNull() && m_maximum_portfolio_exposure_isValid;

    m_minimum_assets_weights_isValid = ::OpenAPI::fromJsonValue(m_minimum_assets_weights, json[QString("minimumAssetsWeights")]);
    m_minimum_assets_weights_isSet = !json[QString("minimumAssetsWeights")].isNull() && m_minimum_assets_weights_isValid;

    m_minimum_portfolio_exposure_isValid = ::OpenAPI::fromJsonValue(m_minimum_portfolio_exposure, json[QString("minimumPortfolioExposure")]);
    m_minimum_portfolio_exposure_isSet = !json[QString("minimumPortfolioExposure")].isNull() && m_minimum_portfolio_exposure_isValid;
}

QString OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::asJson() const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::asJsonObject() const {
    QJsonObject obj;
    if (m_assets_groups.size() > 0) {
        
        obj.insert(QString("assetsGroups"), toJsonValue(m_assets_groups));
    }
    if (m_assets_groups_matrix.size() > 0) {
        
        obj.insert(QString("assetsGroupsMatrix"), toJsonValue(m_assets_groups_matrix));
    }
    if (m_delta_return_isSet) {
        obj.insert(QString("deltaReturn"), ::OpenAPI::toJsonValue(m_delta_return));
    }
    if (m_delta_volatility_isSet) {
        obj.insert(QString("deltaVolatility"), ::OpenAPI::toJsonValue(m_delta_volatility));
    }
    if (m_maximum_assets_groups_weights.size() > 0) {
        obj.insert(QString("maximumAssetsGroupsWeights"), ::OpenAPI::toJsonValue(m_maximum_assets_groups_weights));
    }
    if (m_maximum_assets_weights.size() > 0) {
        obj.insert(QString("maximumAssetsWeights"), ::OpenAPI::toJsonValue(m_maximum_assets_weights));
    }
    if (m_maximum_portfolio_exposure_isSet) {
        obj.insert(QString("maximumPortfolioExposure"), ::OpenAPI::toJsonValue(m_maximum_portfolio_exposure));
    }
    if (m_minimum_assets_weights.size() > 0) {
        obj.insert(QString("minimumAssetsWeights"), ::OpenAPI::toJsonValue(m_minimum_assets_weights));
    }
    if (m_minimum_portfolio_exposure_isSet) {
        obj.insert(QString("minimumPortfolioExposure"), ::OpenAPI::toJsonValue(m_minimum_portfolio_exposure));
    }
    return obj;
}

QList<QSet<qint32>> OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getAssetsGroups() const {
    return m_assets_groups;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setAssetsGroups(const QList<QSet<qint32>> &assets_groups) {
    m_assets_groups = assets_groups;
    m_assets_groups_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_assets_groups_Set() const{
    return m_assets_groups_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_assets_groups_Valid() const{
    return m_assets_groups_isValid;
}

QList<QList<double>> OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getAssetsGroupsMatrix() const {
    return m_assets_groups_matrix;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setAssetsGroupsMatrix(const QList<QList<double>> &assets_groups_matrix) {
    m_assets_groups_matrix = assets_groups_matrix;
    m_assets_groups_matrix_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_assets_groups_matrix_Set() const{
    return m_assets_groups_matrix_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_assets_groups_matrix_Valid() const{
    return m_assets_groups_matrix_isValid;
}

double OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getDeltaReturn() const {
    return m_delta_return;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setDeltaReturn(const double &delta_return) {
    m_delta_return = delta_return;
    m_delta_return_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_delta_return_Set() const{
    return m_delta_return_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_delta_return_Valid() const{
    return m_delta_return_isValid;
}

double OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getDeltaVolatility() const {
    return m_delta_volatility;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setDeltaVolatility(const double &delta_volatility) {
    m_delta_volatility = delta_volatility;
    m_delta_volatility_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_delta_volatility_Set() const{
    return m_delta_volatility_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_delta_volatility_Valid() const{
    return m_delta_volatility_isValid;
}

QList<double> OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getMaximumAssetsGroupsWeights() const {
    return m_maximum_assets_groups_weights;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setMaximumAssetsGroupsWeights(const QList<double> &maximum_assets_groups_weights) {
    m_maximum_assets_groups_weights = maximum_assets_groups_weights;
    m_maximum_assets_groups_weights_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_maximum_assets_groups_weights_Set() const{
    return m_maximum_assets_groups_weights_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_maximum_assets_groups_weights_Valid() const{
    return m_maximum_assets_groups_weights_isValid;
}

QList<double> OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getMaximumAssetsWeights() const {
    return m_maximum_assets_weights;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setMaximumAssetsWeights(const QList<double> &maximum_assets_weights) {
    m_maximum_assets_weights = maximum_assets_weights;
    m_maximum_assets_weights_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_maximum_assets_weights_Set() const{
    return m_maximum_assets_weights_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_maximum_assets_weights_Valid() const{
    return m_maximum_assets_weights_isValid;
}

double OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getMaximumPortfolioExposure() const {
    return m_maximum_portfolio_exposure;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setMaximumPortfolioExposure(const double &maximum_portfolio_exposure) {
    m_maximum_portfolio_exposure = maximum_portfolio_exposure;
    m_maximum_portfolio_exposure_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_maximum_portfolio_exposure_Set() const{
    return m_maximum_portfolio_exposure_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_maximum_portfolio_exposure_Valid() const{
    return m_maximum_portfolio_exposure_isValid;
}

QList<double> OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getMinimumAssetsWeights() const {
    return m_minimum_assets_weights;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setMinimumAssetsWeights(const QList<double> &minimum_assets_weights) {
    m_minimum_assets_weights = minimum_assets_weights;
    m_minimum_assets_weights_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_minimum_assets_weights_Set() const{
    return m_minimum_assets_weights_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_minimum_assets_weights_Valid() const{
    return m_minimum_assets_weights_isValid;
}

double OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::getMinimumPortfolioExposure() const {
    return m_minimum_portfolio_exposure;
}
void OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::setMinimumPortfolioExposure(const double &minimum_portfolio_exposure) {
    m_minimum_portfolio_exposure = minimum_portfolio_exposure;
    m_minimum_portfolio_exposure_isSet = true;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_minimum_portfolio_exposure_Set() const{
    return m_minimum_portfolio_exposure_isSet;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::is_minimum_portfolio_exposure_Valid() const{
    return m_minimum_portfolio_exposure_isValid;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::isSet() const {
    bool isObjectUpdated = false;
    do {
        if (m_assets_groups.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_groups_matrix.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_delta_return_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_delta_volatility_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_maximum_assets_groups_weights.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_maximum_assets_weights.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_maximum_portfolio_exposure_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_minimum_assets_weights.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_minimum_portfolio_exposure_isSet) {
            isObjectUpdated = true;
            break;
        }
    } while (false);
    return isObjectUpdated;
}

bool OAI_portfolio_optimization_maximum_return_diversified_post_request_constraints::isValid() const {
    // only required properties are required for the object to be considered valid
    return true;
}

} // namespace OpenAPI
