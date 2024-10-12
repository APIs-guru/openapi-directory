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

#include "OAIPortfolioOptimizationApi.h"
#include "OAIServerConfiguration.h"
#include <QJsonArray>
#include <QJsonDocument>

namespace OpenAPI {

OAIPortfolioOptimizationApi::OAIPortfolioOptimizationApi(const int timeOut)
    : _timeOut(timeOut),
      _manager(nullptr),
      _isResponseCompressionEnabled(false),
      _isRequestCompressionEnabled(false) {
    initializeServerConfigs();
}

OAIPortfolioOptimizationApi::~OAIPortfolioOptimizationApi() {
}

void OAIPortfolioOptimizationApi::initializeServerConfigs() {
    //Default server
    QList<OAIServerConfiguration> defaultConf = QList<OAIServerConfiguration>();
    //varying endpoint server
    defaultConf.append(OAIServerConfiguration(
    QUrl("https://api.portfoliooptimizer.io/v1"),
    "No description provided",
    QMap<QString, OAIServerVariable>()));
    defaultConf.append(OAIServerConfiguration(
    QUrl("https://eu-west-1.api.portfoliooptimizer.io/v1"),
    "No description provided",
    QMap<QString, OAIServerVariable>()));
    _serverConfigs.insert("portfolioOptimizationEqualRiskContributionsPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationEqualRiskContributionsPost", 0);
    _serverConfigs.insert("portfolioOptimizationEqualSharpeRatioContributionsPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationEqualSharpeRatioContributionsPost", 0);
    _serverConfigs.insert("portfolioOptimizationEqualVolatilityWeightedPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationEqualVolatilityWeightedPost", 0);
    _serverConfigs.insert("portfolioOptimizationEqualWeightedPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationEqualWeightedPost", 0);
    _serverConfigs.insert("portfolioOptimizationHierarchicalRiskParityClusteringBasedPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationHierarchicalRiskParityClusteringBasedPost", 0);
    _serverConfigs.insert("portfolioOptimizationHierarchicalRiskParityPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationHierarchicalRiskParityPost", 0);
    _serverConfigs.insert("portfolioOptimizationInverseVarianceWeightedPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationInverseVarianceWeightedPost", 0);
    _serverConfigs.insert("portfolioOptimizationInverseVolatilityWeightedPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationInverseVolatilityWeightedPost", 0);
    _serverConfigs.insert("portfolioOptimizationMarketCapitalizationWeightedPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationMarketCapitalizationWeightedPost", 0);
    _serverConfigs.insert("portfolioOptimizationMaximumDecorrelationPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationMaximumDecorrelationPost", 0);
    _serverConfigs.insert("portfolioOptimizationMaximumUlcerPerformanceIndexPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationMaximumUlcerPerformanceIndexPost", 0);
    _serverConfigs.insert("portfolioOptimizationMinimumCorrelationPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationMinimumCorrelationPost", 0);
    _serverConfigs.insert("portfolioOptimizationMinimumUlcerIndexPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationMinimumUlcerIndexPost", 0);
    _serverConfigs.insert("portfolioOptimizationMostDiversifiedPost", defaultConf);
    _serverIndices.insert("portfolioOptimizationMostDiversifiedPost", 0);
}

/**
* returns 0 on success and -1, -2 or -3 on failure.
* -1 when the variable does not exist and -2 if the value is not defined in the enum and -3 if the operation or server index is not found
*/
int OAIPortfolioOptimizationApi::setDefaultServerValue(int serverIndex, const QString &operation, const QString &variable, const QString &value) {
    auto it = _serverConfigs.find(operation);
    if (it != _serverConfigs.end() && serverIndex < it.value().size()) {
      return _serverConfigs[operation][serverIndex].setDefaultValue(variable,value);
    }
    return -3;
}
void OAIPortfolioOptimizationApi::setServerIndex(const QString &operation, int serverIndex) {
    if (_serverIndices.contains(operation) && serverIndex < _serverConfigs.find(operation).value().size()) {
        _serverIndices[operation] = serverIndex;
    }
}

void OAIPortfolioOptimizationApi::setApiKey(const QString &apiKeyName, const QString &apiKey) {
    _apiKeys.insert(apiKeyName, apiKey);
}

void OAIPortfolioOptimizationApi::setBearerToken(const QString &token) {
    _bearerToken = token;
}

void OAIPortfolioOptimizationApi::setUsername(const QString &username) {
    _username = username;
}

void OAIPortfolioOptimizationApi::setPassword(const QString &password) {
    _password = password;
}


void OAIPortfolioOptimizationApi::setTimeOut(const int timeOut) {
    _timeOut = timeOut;
}

void OAIPortfolioOptimizationApi::setWorkingDirectory(const QString &path) {
    _workingDirectory = path;
}

void OAIPortfolioOptimizationApi::setNetworkAccessManager(QNetworkAccessManager* manager) {
    _manager = manager;
}

/**
    * Appends a new ServerConfiguration to the config map for a specific operation.
    * @param operation The id to the target operation.
    * @param url A string that contains the URL of the server
    * @param description A String that describes the server
    * @param variables A map between a variable name and its value. The value is used for substitution in the server's URL template.
    * returns the index of the new server config on success and -1 if the operation is not found
    */
int OAIPortfolioOptimizationApi::addServerConfiguration(const QString &operation, const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
    if (_serverConfigs.contains(operation)) {
        _serverConfigs[operation].append(OAIServerConfiguration(
                    url,
                    description,
                    variables));
        return _serverConfigs[operation].size()-1;
    } else {
        return -1;
    }
}

/**
    * Appends a new ServerConfiguration to the config map for a all operations and sets the index to that server.
    * @param url A string that contains the URL of the server
    * @param description A String that describes the server
    * @param variables A map between a variable name and its value. The value is used for substitution in the server's URL template.
    */
void OAIPortfolioOptimizationApi::setNewServerForAllOperations(const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
    for (auto keyIt = _serverIndices.keyBegin(); keyIt != _serverIndices.keyEnd(); keyIt++) {
        setServerIndex(*keyIt, addServerConfiguration(*keyIt, url, description, variables));
    }
}

/**
    * Appends a new ServerConfiguration to the config map for an operations and sets the index to that server.
    * @param URL A string that contains the URL of the server
    * @param description A String that describes the server
    * @param variables A map between a variable name and its value. The value is used for substitution in the server's URL template.
    */
void OAIPortfolioOptimizationApi::setNewServer(const QString &operation, const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
    setServerIndex(operation, addServerConfiguration(operation, url, description, variables));
}

void OAIPortfolioOptimizationApi::addHeaders(const QString &key, const QString &value) {
    _defaultHeaders.insert(key, value);
}

void OAIPortfolioOptimizationApi::enableRequestCompression() {
    _isRequestCompressionEnabled = true;
}

void OAIPortfolioOptimizationApi::enableResponseCompression() {
    _isResponseCompressionEnabled = true;
}

void OAIPortfolioOptimizationApi::abortRequests() {
    Q_EMIT abortRequestsSignal();
}

QString OAIPortfolioOptimizationApi::getParamStylePrefix(const QString &style) {
    if (style == "matrix") {
        return ";";
    } else if (style == "label") {
        return ".";
    } else if (style == "form") {
        return "&";
    } else if (style == "simple") {
        return "";
    } else if (style == "spaceDelimited") {
        return "&";
    } else if (style == "pipeDelimited") {
        return "&";
    } else {
        return "none";
    }
}

QString OAIPortfolioOptimizationApi::getParamStyleSuffix(const QString &style) {
    if (style == "matrix") {
        return "=";
    } else if (style == "label") {
        return "";
    } else if (style == "form") {
        return "=";
    } else if (style == "simple") {
        return "";
    } else if (style == "spaceDelimited") {
        return "=";
    } else if (style == "pipeDelimited") {
        return "=";
    } else {
        return "none";
    }
}

QString OAIPortfolioOptimizationApi::getParamStyleDelimiter(const QString &style, const QString &name, bool isExplode) {

    if (style == "matrix") {
        return (isExplode) ? ";" + name + "=" : ",";

    } else if (style == "label") {
        return (isExplode) ? "." : ",";

    } else if (style == "form") {
        return (isExplode) ? "&" + name + "=" : ",";

    } else if (style == "simple") {
        return ",";
    } else if (style == "spaceDelimited") {
        return (isExplode) ? "&" + name + "=" : " ";

    } else if (style == "pipeDelimited") {
        return (isExplode) ? "&" + name + "=" : "|";

    } else if (style == "deepObject") {
        return (isExplode) ? "&" : "none";

    } else {
        return "none";
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationEqualRiskContributionsPost(const OAI_portfolio_optimization_equal_risk_contributions_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationEqualRiskContributionsPost"][_serverIndices.value("portfolioOptimizationEqualRiskContributionsPost")].URL()+"/portfolio/optimization/equal-risk-contributions");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationEqualRiskContributionsPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationEqualRiskContributionsPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationEqualRiskContributionsPostSignal(output);
        Q_EMIT portfolioOptimizationEqualRiskContributionsPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationEqualRiskContributionsPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationEqualRiskContributionsPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationEqualRiskContributionsPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationEqualRiskContributionsPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationEqualSharpeRatioContributionsPost(const OAI_portfolio_optimization_equal_sharpe_ratio_contributions_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationEqualSharpeRatioContributionsPost"][_serverIndices.value("portfolioOptimizationEqualSharpeRatioContributionsPost")].URL()+"/portfolio/optimization/equal-sharpe-ratio-contributions");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationEqualSharpeRatioContributionsPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationEqualSharpeRatioContributionsPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationEqualSharpeRatioContributionsPostSignal(output);
        Q_EMIT portfolioOptimizationEqualSharpeRatioContributionsPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationEqualSharpeRatioContributionsPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationEqualSharpeRatioContributionsPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationEqualSharpeRatioContributionsPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationEqualSharpeRatioContributionsPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationEqualVolatilityWeightedPost(const OAI_portfolio_optimization_equal_volatility_weighted_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationEqualVolatilityWeightedPost"][_serverIndices.value("portfolioOptimizationEqualVolatilityWeightedPost")].URL()+"/portfolio/optimization/equal-volatility-weighted");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationEqualVolatilityWeightedPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationEqualVolatilityWeightedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationEqualVolatilityWeightedPostSignal(output);
        Q_EMIT portfolioOptimizationEqualVolatilityWeightedPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationEqualVolatilityWeightedPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationEqualVolatilityWeightedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationEqualVolatilityWeightedPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationEqualVolatilityWeightedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationEqualWeightedPost(const OAI_assets_correlation_matrix_random_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationEqualWeightedPost"][_serverIndices.value("portfolioOptimizationEqualWeightedPost")].URL()+"/portfolio/optimization/equal-weighted");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationEqualWeightedPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationEqualWeightedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationEqualWeightedPostSignal(output);
        Q_EMIT portfolioOptimizationEqualWeightedPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationEqualWeightedPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationEqualWeightedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationEqualWeightedPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationEqualWeightedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationHierarchicalRiskParityClusteringBasedPost(const OAI_portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationHierarchicalRiskParityClusteringBasedPost"][_serverIndices.value("portfolioOptimizationHierarchicalRiskParityClusteringBasedPost")].URL()+"/portfolio/optimization/hierarchical-risk-parity/clustering-based");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationHierarchicalRiskParityClusteringBasedPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationHierarchicalRiskParityClusteringBasedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignal(output);
        Q_EMIT portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationHierarchicalRiskParityPost(const OAI_portfolio_optimization_hierarchical_risk_parity_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationHierarchicalRiskParityPost"][_serverIndices.value("portfolioOptimizationHierarchicalRiskParityPost")].URL()+"/portfolio/optimization/hierarchical-risk-parity");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationHierarchicalRiskParityPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationHierarchicalRiskParityPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationHierarchicalRiskParityPostSignal(output);
        Q_EMIT portfolioOptimizationHierarchicalRiskParityPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationHierarchicalRiskParityPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationHierarchicalRiskParityPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationHierarchicalRiskParityPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationHierarchicalRiskParityPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationInverseVarianceWeightedPost(const OAI_portfolio_optimization_inverse_variance_weighted_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationInverseVarianceWeightedPost"][_serverIndices.value("portfolioOptimizationInverseVarianceWeightedPost")].URL()+"/portfolio/optimization/inverse-variance-weighted");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationInverseVarianceWeightedPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationInverseVarianceWeightedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationInverseVarianceWeightedPostSignal(output);
        Q_EMIT portfolioOptimizationInverseVarianceWeightedPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationInverseVarianceWeightedPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationInverseVarianceWeightedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationInverseVarianceWeightedPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationInverseVarianceWeightedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationInverseVolatilityWeightedPost(const OAI_portfolio_optimization_equal_volatility_weighted_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationInverseVolatilityWeightedPost"][_serverIndices.value("portfolioOptimizationInverseVolatilityWeightedPost")].URL()+"/portfolio/optimization/inverse-volatility-weighted");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationInverseVolatilityWeightedPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationInverseVolatilityWeightedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationInverseVolatilityWeightedPostSignal(output);
        Q_EMIT portfolioOptimizationInverseVolatilityWeightedPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationInverseVolatilityWeightedPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationInverseVolatilityWeightedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationInverseVolatilityWeightedPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationInverseVolatilityWeightedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMarketCapitalizationWeightedPost(const OAI_portfolio_optimization_market_capitalization_weighted_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationMarketCapitalizationWeightedPost"][_serverIndices.value("portfolioOptimizationMarketCapitalizationWeightedPost")].URL()+"/portfolio/optimization/market-capitalization-weighted");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationMarketCapitalizationWeightedPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMarketCapitalizationWeightedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationMarketCapitalizationWeightedPostSignal(output);
        Q_EMIT portfolioOptimizationMarketCapitalizationWeightedPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationMarketCapitalizationWeightedPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMarketCapitalizationWeightedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationMarketCapitalizationWeightedPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMarketCapitalizationWeightedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMaximumDecorrelationPost(const OAI_portfolio_optimization_maximum_decorrelation_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationMaximumDecorrelationPost"][_serverIndices.value("portfolioOptimizationMaximumDecorrelationPost")].URL()+"/portfolio/optimization/maximum-decorrelation");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationMaximumDecorrelationPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMaximumDecorrelationPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationMaximumDecorrelationPostSignal(output);
        Q_EMIT portfolioOptimizationMaximumDecorrelationPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationMaximumDecorrelationPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMaximumDecorrelationPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationMaximumDecorrelationPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMaximumDecorrelationPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMaximumUlcerPerformanceIndexPost(const OAI_portfolio_optimization_maximum_ulcer_performance_index_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationMaximumUlcerPerformanceIndexPost"][_serverIndices.value("portfolioOptimizationMaximumUlcerPerformanceIndexPost")].URL()+"/portfolio/optimization/maximum-ulcer-performance-index");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationMaximumUlcerPerformanceIndexPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMaximumUlcerPerformanceIndexPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationMaximumUlcerPerformanceIndexPostSignal(output);
        Q_EMIT portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMinimumCorrelationPost(const OAI_portfolio_optimization_minimum_correlation_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationMinimumCorrelationPost"][_serverIndices.value("portfolioOptimizationMinimumCorrelationPost")].URL()+"/portfolio/optimization/minimum-correlation");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationMinimumCorrelationPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMinimumCorrelationPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationMinimumCorrelationPostSignal(output);
        Q_EMIT portfolioOptimizationMinimumCorrelationPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationMinimumCorrelationPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMinimumCorrelationPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationMinimumCorrelationPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMinimumCorrelationPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMinimumUlcerIndexPost(const OAI_portfolio_optimization_minimum_ulcer_index_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationMinimumUlcerIndexPost"][_serverIndices.value("portfolioOptimizationMinimumUlcerIndexPost")].URL()+"/portfolio/optimization/minimum-ulcer-index");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationMinimumUlcerIndexPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMinimumUlcerIndexPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationMinimumUlcerIndexPostSignal(output);
        Q_EMIT portfolioOptimizationMinimumUlcerIndexPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationMinimumUlcerIndexPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMinimumUlcerIndexPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationMinimumUlcerIndexPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMinimumUlcerIndexPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMostDiversifiedPost(const OAI_portfolio_optimization_most_diversified_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioOptimizationMostDiversifiedPost"][_serverIndices.value("portfolioOptimizationMostDiversifiedPost")].URL()+"/portfolio/optimization/most-diversified");
    
    if (_apiKeys.contains("ApiKeyAuth")) {
        addHeaders("ApiKeyAuth",_apiKeys.find("ApiKeyAuth").value());
    }
    
    OAIHttpRequestWorker *worker = new OAIHttpRequestWorker(this, _manager);
    worker->setTimeOut(_timeOut);
    worker->setWorkingDirectory(_workingDirectory);
    OAIHttpRequestInput input(fullPath, "POST");

    {

        
        QByteArray output = body.asJson().toUtf8();
        input.request_body.append(output);
    }
    for (auto keyValueIt = _defaultHeaders.keyValueBegin(); keyValueIt != _defaultHeaders.keyValueEnd(); keyValueIt++) {
        input.headers.insert(keyValueIt->first, keyValueIt->second);
    }


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioOptimizationApi::portfolioOptimizationMostDiversifiedPostCallback);
    connect(this, &OAIPortfolioOptimizationApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioOptimizationApi::portfolioOptimizationMostDiversifiedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioOptimizationMostDiversifiedPostSignal(output);
        Q_EMIT portfolioOptimizationMostDiversifiedPostSignalFull(worker, output);
    } else {

#if defined(_MSC_VER)
// For MSVC
#pragma warning(push)
#pragma warning(disable : 4996)
#elif defined(__clang__)
// For Clang
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#elif defined(__GNUC__)
// For GCC
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wdeprecated-declarations"
#endif

        Q_EMIT portfolioOptimizationMostDiversifiedPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMostDiversifiedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioOptimizationMostDiversifiedPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioOptimizationMostDiversifiedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioOptimizationApi::tokenAvailable(){

    oauthToken token;
    switch (_OauthMethod) {
    case 1: //implicit flow
        token = _implicitFlow.getToken(_latestScope.join(" "));
        if(token.isValid()){
            _latestInput.headers.insert("Authorization", "Bearer " + token.getToken());
            _latestWorker->execute(&_latestInput);
        }else{
            _implicitFlow.removeToken(_latestScope.join(" "));
            qDebug() << "Could not retrieve a valid token";
        }
        break;
    case 2: //authorization flow
        token = _authFlow.getToken(_latestScope.join(" "));
        if(token.isValid()){
            _latestInput.headers.insert("Authorization", "Bearer " + token.getToken());
            _latestWorker->execute(&_latestInput);
        }else{
            _authFlow.removeToken(_latestScope.join(" "));
            qDebug() << "Could not retrieve a valid token";
        }
        break;
    case 3: //client credentials flow
        token = _credentialFlow.getToken(_latestScope.join(" "));
        if(token.isValid()){
            _latestInput.headers.insert("Authorization", "Bearer " + token.getToken());
            _latestWorker->execute(&_latestInput);
        }else{
            _credentialFlow.removeToken(_latestScope.join(" "));
            qDebug() << "Could not retrieve a valid token";
        }
        break;
    case 4: //resource owner password flow
        token = _passwordFlow.getToken(_latestScope.join(" "));
        if(token.isValid()){
            _latestInput.headers.insert("Authorization", "Bearer " + token.getToken());
            _latestWorker->execute(&_latestInput);
        }else{
            _credentialFlow.removeToken(_latestScope.join(" "));
            qDebug() << "Could not retrieve a valid token";
        }
        break;
    default:
        qDebug() << "No Oauth method set!";
        break;
    }
}
} // namespace OpenAPI
