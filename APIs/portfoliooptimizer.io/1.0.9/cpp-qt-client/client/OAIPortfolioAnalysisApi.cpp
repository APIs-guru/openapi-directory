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

#include "OAIPortfolioAnalysisApi.h"
#include "OAIServerConfiguration.h"
#include <QJsonArray>
#include <QJsonDocument>

namespace OpenAPI {

OAIPortfolioAnalysisApi::OAIPortfolioAnalysisApi(const int timeOut)
    : _timeOut(timeOut),
      _manager(nullptr),
      _isResponseCompressionEnabled(false),
      _isRequestCompressionEnabled(false) {
    initializeServerConfigs();
}

OAIPortfolioAnalysisApi::~OAIPortfolioAnalysisApi() {
}

void OAIPortfolioAnalysisApi::initializeServerConfigs() {
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
    _serverConfigs.insert("portfolioAnalysisAlphaPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisAlphaPost", 0);
    _serverConfigs.insert("portfolioAnalysisBetaPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisBetaPost", 0);
    _serverConfigs.insert("portfolioAnalysisContributionsReturnPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisContributionsReturnPost", 0);
    _serverConfigs.insert("portfolioAnalysisContributionsRiskPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisContributionsRiskPost", 0);
    _serverConfigs.insert("portfolioAnalysisCorrelationSpectrumPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisCorrelationSpectrumPost", 0);
    _serverConfigs.insert("portfolioAnalysisDiversificationRatioPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisDiversificationRatioPost", 0);
    _serverConfigs.insert("portfolioAnalysisDrawdownsPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisDrawdownsPost", 0);
    _serverConfigs.insert("portfolioAnalysisEffectiveNumberOfBetsPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisEffectiveNumberOfBetsPost", 0);
    _serverConfigs.insert("portfolioAnalysisFactorsExposuresPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisFactorsExposuresPost", 0);
    _serverConfigs.insert("portfolioAnalysisMeanVarianceEfficientFrontierPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisMeanVarianceEfficientFrontierPost", 0);
    _serverConfigs.insert("portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost", 0);
    _serverConfigs.insert("portfolioAnalysisReturnPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisReturnPost", 0);
    _serverConfigs.insert("portfolioAnalysisReturnsAveragePost", defaultConf);
    _serverIndices.insert("portfolioAnalysisReturnsAveragePost", 0);
    _serverConfigs.insert("portfolioAnalysisTrackingErrorPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisTrackingErrorPost", 0);
    _serverConfigs.insert("portfolioAnalysisUlcerIndexPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisUlcerIndexPost", 0);
    _serverConfigs.insert("portfolioAnalysisUlcerPerformanceIndexPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisUlcerPerformanceIndexPost", 0);
    _serverConfigs.insert("portfolioAnalysisVolatilityPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisVolatilityPost", 0);
}

/**
* returns 0 on success and -1, -2 or -3 on failure.
* -1 when the variable does not exist and -2 if the value is not defined in the enum and -3 if the operation or server index is not found
*/
int OAIPortfolioAnalysisApi::setDefaultServerValue(int serverIndex, const QString &operation, const QString &variable, const QString &value) {
    auto it = _serverConfigs.find(operation);
    if (it != _serverConfigs.end() && serverIndex < it.value().size()) {
      return _serverConfigs[operation][serverIndex].setDefaultValue(variable,value);
    }
    return -3;
}
void OAIPortfolioAnalysisApi::setServerIndex(const QString &operation, int serverIndex) {
    if (_serverIndices.contains(operation) && serverIndex < _serverConfigs.find(operation).value().size()) {
        _serverIndices[operation] = serverIndex;
    }
}

void OAIPortfolioAnalysisApi::setApiKey(const QString &apiKeyName, const QString &apiKey) {
    _apiKeys.insert(apiKeyName, apiKey);
}

void OAIPortfolioAnalysisApi::setBearerToken(const QString &token) {
    _bearerToken = token;
}

void OAIPortfolioAnalysisApi::setUsername(const QString &username) {
    _username = username;
}

void OAIPortfolioAnalysisApi::setPassword(const QString &password) {
    _password = password;
}


void OAIPortfolioAnalysisApi::setTimeOut(const int timeOut) {
    _timeOut = timeOut;
}

void OAIPortfolioAnalysisApi::setWorkingDirectory(const QString &path) {
    _workingDirectory = path;
}

void OAIPortfolioAnalysisApi::setNetworkAccessManager(QNetworkAccessManager* manager) {
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
int OAIPortfolioAnalysisApi::addServerConfiguration(const QString &operation, const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
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
void OAIPortfolioAnalysisApi::setNewServerForAllOperations(const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
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
void OAIPortfolioAnalysisApi::setNewServer(const QString &operation, const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
    setServerIndex(operation, addServerConfiguration(operation, url, description, variables));
}

void OAIPortfolioAnalysisApi::addHeaders(const QString &key, const QString &value) {
    _defaultHeaders.insert(key, value);
}

void OAIPortfolioAnalysisApi::enableRequestCompression() {
    _isRequestCompressionEnabled = true;
}

void OAIPortfolioAnalysisApi::enableResponseCompression() {
    _isResponseCompressionEnabled = true;
}

void OAIPortfolioAnalysisApi::abortRequests() {
    Q_EMIT abortRequestsSignal();
}

QString OAIPortfolioAnalysisApi::getParamStylePrefix(const QString &style) {
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

QString OAIPortfolioAnalysisApi::getParamStyleSuffix(const QString &style) {
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

QString OAIPortfolioAnalysisApi::getParamStyleDelimiter(const QString &style, const QString &name, bool isExplode) {

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

void OAIPortfolioAnalysisApi::portfolioAnalysisAlphaPost(const OAI_portfolio_analysis_alpha_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisAlphaPost"][_serverIndices.value("portfolioAnalysisAlphaPost")].URL()+"/portfolio/analysis/alpha");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisAlphaPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisAlphaPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_alpha_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisAlphaPostSignal(output);
        Q_EMIT portfolioAnalysisAlphaPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisAlphaPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisAlphaPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisAlphaPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisAlphaPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisBetaPost(const OAI_portfolio_analysis_alpha_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisBetaPost"][_serverIndices.value("portfolioAnalysisBetaPost")].URL()+"/portfolio/analysis/beta");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisBetaPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisBetaPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_beta_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisBetaPostSignal(output);
        Q_EMIT portfolioAnalysisBetaPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisBetaPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisBetaPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisBetaPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisBetaPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisContributionsReturnPost(const OAI_portfolio_analysis_contributions_return_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisContributionsReturnPost"][_serverIndices.value("portfolioAnalysisContributionsReturnPost")].URL()+"/portfolio/analysis/contributions/return");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisContributionsReturnPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisContributionsReturnPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_contributions_return_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisContributionsReturnPostSignal(output);
        Q_EMIT portfolioAnalysisContributionsReturnPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisContributionsReturnPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisContributionsReturnPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisContributionsReturnPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisContributionsReturnPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisContributionsRiskPost(const OAI_portfolio_analysis_contributions_risk_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisContributionsRiskPost"][_serverIndices.value("portfolioAnalysisContributionsRiskPost")].URL()+"/portfolio/analysis/contributions/risk");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisContributionsRiskPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisContributionsRiskPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_contributions_risk_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisContributionsRiskPostSignal(output);
        Q_EMIT portfolioAnalysisContributionsRiskPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisContributionsRiskPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisContributionsRiskPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisContributionsRiskPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisContributionsRiskPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisCorrelationSpectrumPost(const OAI_portfolio_analysis_correlation_spectrum_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisCorrelationSpectrumPost"][_serverIndices.value("portfolioAnalysisCorrelationSpectrumPost")].URL()+"/portfolio/analysis/correlation-spectrum");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisCorrelationSpectrumPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisCorrelationSpectrumPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_correlation_spectrum_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisCorrelationSpectrumPostSignal(output);
        Q_EMIT portfolioAnalysisCorrelationSpectrumPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisCorrelationSpectrumPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisCorrelationSpectrumPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisCorrelationSpectrumPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisCorrelationSpectrumPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisDiversificationRatioPost(const OAI_portfolio_analysis_correlation_spectrum_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisDiversificationRatioPost"][_serverIndices.value("portfolioAnalysisDiversificationRatioPost")].URL()+"/portfolio/analysis/diversification-ratio");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisDiversificationRatioPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisDiversificationRatioPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_diversification_ratio_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisDiversificationRatioPostSignal(output);
        Q_EMIT portfolioAnalysisDiversificationRatioPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisDiversificationRatioPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisDiversificationRatioPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisDiversificationRatioPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisDiversificationRatioPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisDrawdownsPost(const OAI_portfolio_analysis_drawdowns_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisDrawdownsPost"][_serverIndices.value("portfolioAnalysisDrawdownsPost")].URL()+"/portfolio/analysis/drawdowns");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisDrawdownsPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisDrawdownsPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_drawdowns_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisDrawdownsPostSignal(output);
        Q_EMIT portfolioAnalysisDrawdownsPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisDrawdownsPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisDrawdownsPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisDrawdownsPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisDrawdownsPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisEffectiveNumberOfBetsPost(const OAI_portfolio_analysis_effective_number_of_bets_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisEffectiveNumberOfBetsPost"][_serverIndices.value("portfolioAnalysisEffectiveNumberOfBetsPost")].URL()+"/portfolio/analysis/effective-number-of-bets");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisEffectiveNumberOfBetsPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisEffectiveNumberOfBetsPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_effective_number_of_bets_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisEffectiveNumberOfBetsPostSignal(output);
        Q_EMIT portfolioAnalysisEffectiveNumberOfBetsPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisEffectiveNumberOfBetsPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisEffectiveNumberOfBetsPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisEffectiveNumberOfBetsPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisEffectiveNumberOfBetsPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisFactorsExposuresPost(const OAI_portfolio_analysis_factors_exposures_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisFactorsExposuresPost"][_serverIndices.value("portfolioAnalysisFactorsExposuresPost")].URL()+"/portfolio/analysis/factors/exposures");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisFactorsExposuresPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisFactorsExposuresPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_factors_exposures_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisFactorsExposuresPostSignal(output);
        Q_EMIT portfolioAnalysisFactorsExposuresPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisFactorsExposuresPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisFactorsExposuresPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisFactorsExposuresPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisFactorsExposuresPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisMeanVarianceEfficientFrontierPost(const OAI_portfolio_analysis_mean_variance_efficient_frontier_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisMeanVarianceEfficientFrontierPost"][_serverIndices.value("portfolioAnalysisMeanVarianceEfficientFrontierPost")].URL()+"/portfolio/analysis/mean-variance/efficient-frontier");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisMeanVarianceEfficientFrontierPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisMeanVarianceEfficientFrontierPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisMeanVarianceEfficientFrontierPostSignal(output);
        Q_EMIT portfolioAnalysisMeanVarianceEfficientFrontierPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisMeanVarianceEfficientFrontierPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisMeanVarianceEfficientFrontierPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisMeanVarianceEfficientFrontierPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisMeanVarianceEfficientFrontierPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost(const OAI_portfolio_analysis_mean_variance_minimum_variance_frontier_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost"][_serverIndices.value("portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost")].URL()+"/portfolio/analysis/mean-variance/minimum-variance-frontier");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignal(output);
        Q_EMIT portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisReturnPost(const OAI_portfolio_analysis_return_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisReturnPost"][_serverIndices.value("portfolioAnalysisReturnPost")].URL()+"/portfolio/analysis/return");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisReturnPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisReturnPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_return_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisReturnPostSignal(output);
        Q_EMIT portfolioAnalysisReturnPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisReturnPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisReturnPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisReturnPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisReturnPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisReturnsAveragePost(const OAI_portfolio_analysis_drawdowns_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisReturnsAveragePost"][_serverIndices.value("portfolioAnalysisReturnsAveragePost")].URL()+"/portfolio/analysis/returns/average");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisReturnsAveragePostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisReturnsAveragePostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_returns_average_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisReturnsAveragePostSignal(output);
        Q_EMIT portfolioAnalysisReturnsAveragePostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisReturnsAveragePostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisReturnsAveragePostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisReturnsAveragePostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisReturnsAveragePostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisTrackingErrorPost(const OAI_portfolio_analysis_tracking_error_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisTrackingErrorPost"][_serverIndices.value("portfolioAnalysisTrackingErrorPost")].URL()+"/portfolio/analysis/tracking-error");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisTrackingErrorPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisTrackingErrorPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_tracking_error_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisTrackingErrorPostSignal(output);
        Q_EMIT portfolioAnalysisTrackingErrorPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisTrackingErrorPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisTrackingErrorPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisTrackingErrorPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisTrackingErrorPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisUlcerIndexPost(const OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_1 &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisUlcerIndexPost"][_serverIndices.value("portfolioAnalysisUlcerIndexPost")].URL()+"/portfolio/analysis/ulcer-index");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisUlcerIndexPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisUlcerIndexPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_ulcer_index_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisUlcerIndexPostSignal(output);
        Q_EMIT portfolioAnalysisUlcerIndexPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisUlcerIndexPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisUlcerIndexPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisUlcerIndexPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisUlcerIndexPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisUlcerPerformanceIndexPost(const OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_1 &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisUlcerPerformanceIndexPost"][_serverIndices.value("portfolioAnalysisUlcerPerformanceIndexPost")].URL()+"/portfolio/analysis/ulcer-performance-index");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisUlcerPerformanceIndexPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisUlcerPerformanceIndexPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_ulcer_performance_index_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisUlcerPerformanceIndexPostSignal(output);
        Q_EMIT portfolioAnalysisUlcerPerformanceIndexPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisUlcerPerformanceIndexPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisUlcerPerformanceIndexPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisUlcerPerformanceIndexPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisUlcerPerformanceIndexPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::portfolioAnalysisVolatilityPost(const OAI_portfolio_analysis_volatility_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisVolatilityPost"][_serverIndices.value("portfolioAnalysisVolatilityPost")].URL()+"/portfolio/analysis/volatility");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisApi::portfolioAnalysisVolatilityPostCallback);
    connect(this, &OAIPortfolioAnalysisApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisApi::portfolioAnalysisVolatilityPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_volatility_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisVolatilityPostSignal(output);
        Q_EMIT portfolioAnalysisVolatilityPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisVolatilityPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisVolatilityPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisVolatilityPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisVolatilityPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisApi::tokenAvailable(){

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
