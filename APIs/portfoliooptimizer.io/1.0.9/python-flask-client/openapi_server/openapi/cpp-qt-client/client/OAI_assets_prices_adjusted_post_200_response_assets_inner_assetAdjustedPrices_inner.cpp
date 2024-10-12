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

#include "OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner.h"

#include <QDebug>
#include <QJsonArray>
#include <QJsonDocument>
#include <QObject>

#include "OAIHelpers.h"

namespace OpenAPI {

OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner(QString json) {
    this->initializeModel();
    this->fromJson(json);
}

OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner() {
    this->initializeModel();
}

OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::~OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner() {}

void OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::initializeModel() {

    m_date_isSet = false;
    m_date_isValid = false;

    m_dividend_adjusted_close_isSet = false;
    m_dividend_adjusted_close_isValid = false;

    m_fully_adjusted_close_isSet = false;
    m_fully_adjusted_close_isValid = false;

    m_split_adjusted_close_isSet = false;
    m_split_adjusted_close_isValid = false;
}

void OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::fromJson(QString jsonString) {
    QByteArray array(jsonString.toStdString().c_str());
    QJsonDocument doc = QJsonDocument::fromJson(array);
    QJsonObject jsonObject = doc.object();
    this->fromJsonObject(jsonObject);
}

void OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::fromJsonObject(QJsonObject json) {

    m_date_isValid = ::OpenAPI::fromJsonValue(m_date, json[QString("date")]);
    m_date_isSet = !json[QString("date")].isNull() && m_date_isValid;

    m_dividend_adjusted_close_isValid = ::OpenAPI::fromJsonValue(m_dividend_adjusted_close, json[QString("dividendAdjustedClose")]);
    m_dividend_adjusted_close_isSet = !json[QString("dividendAdjustedClose")].isNull() && m_dividend_adjusted_close_isValid;

    m_fully_adjusted_close_isValid = ::OpenAPI::fromJsonValue(m_fully_adjusted_close, json[QString("fullyAdjustedClose")]);
    m_fully_adjusted_close_isSet = !json[QString("fullyAdjustedClose")].isNull() && m_fully_adjusted_close_isValid;

    m_split_adjusted_close_isValid = ::OpenAPI::fromJsonValue(m_split_adjusted_close, json[QString("splitAdjustedClose")]);
    m_split_adjusted_close_isSet = !json[QString("splitAdjustedClose")].isNull() && m_split_adjusted_close_isValid;
}

QString OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::asJson() const {
    QJsonObject obj = this->asJsonObject();
    QJsonDocument doc(obj);
    QByteArray bytes = doc.toJson();
    return QString(bytes);
}

QJsonObject OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::asJsonObject() const {
    QJsonObject obj;
    if (m_date_isSet) {
        obj.insert(QString("date"), ::OpenAPI::toJsonValue(m_date));
    }
    if (m_dividend_adjusted_close_isSet) {
        obj.insert(QString("dividendAdjustedClose"), ::OpenAPI::toJsonValue(m_dividend_adjusted_close));
    }
    if (m_fully_adjusted_close_isSet) {
        obj.insert(QString("fullyAdjustedClose"), ::OpenAPI::toJsonValue(m_fully_adjusted_close));
    }
    if (m_split_adjusted_close_isSet) {
        obj.insert(QString("splitAdjustedClose"), ::OpenAPI::toJsonValue(m_split_adjusted_close));
    }
    return obj;
}

QString OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::getDate() const {
    return m_date;
}
void OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::setDate(const QString &date) {
    m_date = date;
    m_date_isSet = true;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::is_date_Set() const{
    return m_date_isSet;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::is_date_Valid() const{
    return m_date_isValid;
}

double OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::getDividendAdjustedClose() const {
    return m_dividend_adjusted_close;
}
void OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::setDividendAdjustedClose(const double &dividend_adjusted_close) {
    m_dividend_adjusted_close = dividend_adjusted_close;
    m_dividend_adjusted_close_isSet = true;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::is_dividend_adjusted_close_Set() const{
    return m_dividend_adjusted_close_isSet;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::is_dividend_adjusted_close_Valid() const{
    return m_dividend_adjusted_close_isValid;
}

double OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::getFullyAdjustedClose() const {
    return m_fully_adjusted_close;
}
void OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::setFullyAdjustedClose(const double &fully_adjusted_close) {
    m_fully_adjusted_close = fully_adjusted_close;
    m_fully_adjusted_close_isSet = true;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::is_fully_adjusted_close_Set() const{
    return m_fully_adjusted_close_isSet;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::is_fully_adjusted_close_Valid() const{
    return m_fully_adjusted_close_isValid;
}

double OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::getSplitAdjustedClose() const {
    return m_split_adjusted_close;
}
void OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::setSplitAdjustedClose(const double &split_adjusted_close) {
    m_split_adjusted_close = split_adjusted_close;
    m_split_adjusted_close_isSet = true;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::is_split_adjusted_close_Set() const{
    return m_split_adjusted_close_isSet;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::is_split_adjusted_close_Valid() const{
    return m_split_adjusted_close_isValid;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::isSet() const {
    bool isObjectUpdated = false;
    do {
        if (m_date_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_dividend_adjusted_close_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_fully_adjusted_close_isSet) {
            isObjectUpdated = true;
            break;
        }

        if (m_split_adjusted_close_isSet) {
            isObjectUpdated = true;
            break;
        }
    } while (false);
    return isObjectUpdated;
}

bool OAI_assets_prices_adjusted_post_200_response_assets_inner_assetAdjustedPrices_inner::isValid() const {
    // only required properties are required for the object to be considered valid
    return m_date_isValid && m_fully_adjusted_close_isValid && true;
}

} // namespace OpenAPI
