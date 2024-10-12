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

#include "OAI_portfolio_construction_investable_post_request.h"

#include <QDebug>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>

#include "OAIHelpers.h"

namespace OpenAPI {

OAI_portfolio_construction_investable_post_request::OAI_portfolio_construction_investable_post_request(QString json) {
    this->initializeModel();
    this->fromJson(json);
}

OAI_portfolio_construction_investable_post_request::OAI_portfolio_construction_investable_post_request() {
    this->initializeModel();
}

OAI_portfolio_construction_investable_post_request::~OAI_portfolio_construction_investable_post_request() {}

void OAI_portfolio_construction_investable_post_request::initializeModel() {

    m_assets_isSet = false;
    m_assets_isValid = false;

    m_assets_groups_isSet = false;
    m_assets_groups_isValid = false;

    m_assets_groups_weights_isSet = false;
    m_assets_groups_weights_isValid = false;

    m_assets_minimum_notional_values_isSet = false;
    m_assets_minimum_notional_values_isValid = false;

    m_assets_minimum_positions_isSet = false;
    m_assets_minimum_positions_isValid = false;

    m_assets_prices_isSet = false;
    m_assets_prices_isValid = false;

    m_assets_size_lots_isSet = false;
    m_assets_size_lots_isValid = false;

    m_assets_weights_isSet = false;
    m_assets_weights_isValid = false;

    m_maximum_assets_groups_weights_isSet = false;
    m_maximum_assets_groups_weights_isValid = false;

    m_portfolio_value_isSet = false;
    m_portfolio_value_isValid = false;
}

void OAI_portfolio_construction_investable_post_request::fromJson(QString jsonString) {
    QByteArray array(jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void OAI_portfolio_construction_investable_post_request::fromJsonObject(QJsonObject json) {

    m_assets_isValid = ::OpenAPI::fromJsonValue(m_assets, json[QString("assets")]);
    m_assets_isSet = !json[QString("assets")].isNull() && m_assets_isValid;

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

    m_assets_groups_weights_isValid = ::OpenAPI::fromJsonValue(m_assets_groups_weights, json[QString("assetsGroupsWeights")]);
    m_assets_groups_weights_isSet = !json[QString("assetsGroupsWeights")].isNull() && m_assets_groups_weights_isValid;

    m_assets_minimum_notional_values_isValid = ::OpenAPI::fromJsonValue(m_assets_minimum_notional_values, json[QString("assetsMinimumNotionalValues")]);
    m_assets_minimum_notional_values_isSet = !json[QString("assetsMinimumNotionalValues")].isNull() && m_assets_minimum_notional_values_isValid;

    m_assets_minimum_positions_isValid = ::OpenAPI::fromJsonValue(m_assets_minimum_positions, json[QString("assetsMinimumPositions")]);
    m_assets_minimum_positions_isSet = !json[QString("assetsMinimumPositions")].isNull() && m_assets_minimum_positions_isValid;

    m_assets_prices_isValid = ::OpenAPI::fromJsonValue(m_assets_prices, json[QString("assetsPrices")]);
    m_assets_prices_isSet = !json[QString("assetsPrices")].isNull() && m_assets_prices_isValid;

    m_assets_size_lots_isValid = ::OpenAPI::fromJsonValue(m_assets_size_lots, json[QString("assetsSizeLots")]);
    m_assets_size_lots_isSet = !json[QString("assetsSizeLots")].isNull() && m_assets_size_lots_isValid;

    m_assets_weights_isValid = ::OpenAPI::fromJsonValue(m_assets_weights, json[QString("assetsWeights")]);
    m_assets_weights_isSet = !json[QString("assetsWeights")].isNull() && m_assets_weights_isValid;

    m_maximum_assets_groups_weights_isValid = ::OpenAPI::fromJsonValue(m_maximum_assets_groups_weights, json[QString("maximumAssetsGroupsWeights")]);
    m_maximum_assets_groups_weights_isSet = !json[QString("maximumAssetsGroupsWeights")].isNull() && m_maximum_assets_groups_weights_isValid;

    m_portfolio_value_isValid = ::OpenAPI::fromJsonValue(m_portfolio_value, json[QString("portfolioValue")]);
    m_portfolio_value_isSet = !json[QString("portfolioValue")].isNull() && m_portfolio_value_isValid;
}

QString OAI_portfolio_construction_investable_post_request::asJson() const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject OAI_portfolio_construction_investable_post_request::asJsonObject() const {
    QJsonObject obj;
    if (m_assets_isSet) {
        obj.insert(QString("assets"), ::OpenAPI::toJsonValue(m_assets));
    }
    if (m_assets_groups.size() > 0) {
        
        obj.insert(QString("assetsGroups"), toJsonValue(m_assets_groups));
    }
    if (m_assets_groups_weights.size() > 0) {
        obj.insert(QString("assetsGroupsWeights"), ::OpenAPI::toJsonValue(m_assets_groups_weights));
    }
    if (m_assets_minimum_notional_values.size() > 0) {
        obj.insert(QString("assetsMinimumNotionalValues"), ::OpenAPI::toJsonValue(m_assets_minimum_notional_values));
    }
    if (m_assets_minimum_positions.size() > 0) {
        obj.insert(QString("assetsMinimumPositions"), ::OpenAPI::toJsonValue(m_assets_minimum_positions));
    }
    if (m_assets_prices.size() > 0) {
        obj.insert(QString("assetsPrices"), ::OpenAPI::toJsonValue(m_assets_prices));
    }
    if (m_assets_size_lots.size() > 0) {
        obj.insert(QString("assetsSizeLots"), ::OpenAPI::toJsonValue(m_assets_size_lots));
    }
    if (m_assets_weights.size() > 0) {
        obj.insert(QString("assetsWeights"), ::OpenAPI::toJsonValue(m_assets_weights));
    }
    if (m_maximum_assets_groups_weights.size() > 0) {
        obj.insert(QString("maximumAssetsGroupsWeights"), ::OpenAPI::toJsonValue(m_maximum_assets_groups_weights));
    }
    if (m_portfolio_value_isSet) {
        obj.insert(QString("portfolioValue"), ::OpenAPI::toJsonValue(m_portfolio_value));
    }
    return obj;
}

qint32 OAI_portfolio_construction_investable_post_request::getAssets() const {
    return m_assets;
}
void OAI_portfolio_construction_investable_post_request::setAssets(const qint32 &assets) {
    m_assets = assets;
    m_assets_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_Set() const{
    return m_assets_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_Valid() const{
    return m_assets_isValid;
}

QList<QSet<qint32>> OAI_portfolio_construction_investable_post_request::getAssetsGroups() const {
    return m_assets_groups;
}
void OAI_portfolio_construction_investable_post_request::setAssetsGroups(const QList<QSet<qint32>> &assets_groups) {
    m_assets_groups = assets_groups;
    m_assets_groups_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_groups_Set() const{
    return m_assets_groups_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_groups_Valid() const{
    return m_assets_groups_isValid;
}

QList<double> OAI_portfolio_construction_investable_post_request::getAssetsGroupsWeights() const {
    return m_assets_groups_weights;
}
void OAI_portfolio_construction_investable_post_request::setAssetsGroupsWeights(const QList<double> &assets_groups_weights) {
    m_assets_groups_weights = assets_groups_weights;
    m_assets_groups_weights_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_groups_weights_Set() const{
    return m_assets_groups_weights_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_groups_weights_Valid() const{
    return m_assets_groups_weights_isValid;
}

QList<double> OAI_portfolio_construction_investable_post_request::getAssetsMinimumNotionalValues() const {
    return m_assets_minimum_notional_values;
}
void OAI_portfolio_construction_investable_post_request::setAssetsMinimumNotionalValues(const QList<double> &assets_minimum_notional_values) {
    m_assets_minimum_notional_values = assets_minimum_notional_values;
    m_assets_minimum_notional_values_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_minimum_notional_values_Set() const{
    return m_assets_minimum_notional_values_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_minimum_notional_values_Valid() const{
    return m_assets_minimum_notional_values_isValid;
}

QList<double> OAI_portfolio_construction_investable_post_request::getAssetsMinimumPositions() const {
    return m_assets_minimum_positions;
}
void OAI_portfolio_construction_investable_post_request::setAssetsMinimumPositions(const QList<double> &assets_minimum_positions) {
    m_assets_minimum_positions = assets_minimum_positions;
    m_assets_minimum_positions_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_minimum_positions_Set() const{
    return m_assets_minimum_positions_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_minimum_positions_Valid() const{
    return m_assets_minimum_positions_isValid;
}

QList<double> OAI_portfolio_construction_investable_post_request::getAssetsPrices() const {
    return m_assets_prices;
}
void OAI_portfolio_construction_investable_post_request::setAssetsPrices(const QList<double> &assets_prices) {
    m_assets_prices = assets_prices;
    m_assets_prices_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_prices_Set() const{
    return m_assets_prices_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_prices_Valid() const{
    return m_assets_prices_isValid;
}

QList<double> OAI_portfolio_construction_investable_post_request::getAssetsSizeLots() const {
    return m_assets_size_lots;
}
void OAI_portfolio_construction_investable_post_request::setAssetsSizeLots(const QList<double> &assets_size_lots) {
    m_assets_size_lots = assets_size_lots;
    m_assets_size_lots_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_size_lots_Set() const{
    return m_assets_size_lots_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_size_lots_Valid() const{
    return m_assets_size_lots_isValid;
}

QList<double> OAI_portfolio_construction_investable_post_request::getAssetsWeights() const {
    return m_assets_weights;
}
void OAI_portfolio_construction_investable_post_request::setAssetsWeights(const QList<double> &assets_weights) {
    m_assets_weights = assets_weights;
    m_assets_weights_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_weights_Set() const{
    return m_assets_weights_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_assets_weights_Valid() const{
    return m_assets_weights_isValid;
}

QList<double> OAI_portfolio_construction_investable_post_request::getMaximumAssetsGroupsWeights() const {
    return m_maximum_assets_groups_weights;
}
void OAI_portfolio_construction_investable_post_request::setMaximumAssetsGroupsWeights(const QList<double> &maximum_assets_groups_weights) {
    m_maximum_assets_groups_weights = maximum_assets_groups_weights;
    m_maximum_assets_groups_weights_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_maximum_assets_groups_weights_Set() const{
    return m_maximum_assets_groups_weights_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_maximum_assets_groups_weights_Valid() const{
    return m_maximum_assets_groups_weights_isValid;
}

double OAI_portfolio_construction_investable_post_request::getPortfolioValue() const {
    return m_portfolio_value;
}
void OAI_portfolio_construction_investable_post_request::setPortfolioValue(const double &portfolio_value) {
    m_portfolio_value = portfolio_value;
    m_portfolio_value_isSet = true;
}

bool OAI_portfolio_construction_investable_post_request::is_portfolio_value_Set() const{
    return m_portfolio_value_isSet;
}

bool OAI_portfolio_construction_investable_post_request::is_portfolio_value_Valid() const{
    return m_portfolio_value_isValid;
}

bool OAI_portfolio_construction_investable_post_request::isSet() const {
    bool isObjectUpdated = false;
    do {
        if (m_assets_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_groups.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_groups_weights.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_minimum_notional_values.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_minimum_positions.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_prices.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_size_lots.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_assets_weights.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_maximum_assets_groups_weights.size() > 0) {
            isObjectUpdated = true;
            break;
        }

        if (m_portfolio_value_isSet) {
            isObjectUpdated = true;
            break;
        }
    } while (false);
    return isObjectUpdated;
}

bool OAI_portfolio_construction_investable_post_request::isValid() const {
    // only required properties are required for the object to be considered valid
    return m_assets_isValid && m_assets_prices_isValid && m_portfolio_value_isValid && true;
}

} // namespace OpenAPI
