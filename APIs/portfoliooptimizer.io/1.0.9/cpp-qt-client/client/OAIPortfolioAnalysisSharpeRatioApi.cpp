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

#include "OAIPortfolioAnalysisSharpeRatioApi.h"
#include "OAIServerConfiguration.h"
#include <QJsonArray>
#include <QJsonDocument>

namespace OpenAPI {

OAIPortfolioAnalysisSharpeRatioApi::OAIPortfolioAnalysisSharpeRatioApi(const int timeOut)
    : _timeOut(timeOut),
      _manager(nullptr),
      _isResponseCompressionEnabled(false),
      _isRequestCompressionEnabled(false) {
    initializeServerConfigs();
}

OAIPortfolioAnalysisSharpeRatioApi::~OAIPortfolioAnalysisSharpeRatioApi() {
}

void OAIPortfolioAnalysisSharpeRatioApi::initializeServerConfigs() {
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
    _serverConfigs.insert("portfolioAnalysisSharpeRatioBiasAdjustedPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisSharpeRatioBiasAdjustedPost", 0);
    _serverConfigs.insert("portfolioAnalysisSharpeRatioConfidenceIntervalPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisSharpeRatioConfidenceIntervalPost", 0);
    _serverConfigs.insert("portfolioAnalysisSharpeRatioPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisSharpeRatioPost", 0);
    _serverConfigs.insert("portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost", 0);
    _serverConfigs.insert("portfolioAnalysisSharpeRatioProbabilisticPost", defaultConf);
    _serverIndices.insert("portfolioAnalysisSharpeRatioProbabilisticPost", 0);
}

/**
* returns 0 on success and -1, -2 or -3 on failure.
* -1 when the variable does not exist and -2 if the value is not defined in the enum and -3 if the operation or server index is not found
*/
int OAIPortfolioAnalysisSharpeRatioApi::setDefaultServerValue(int serverIndex, const QString &operation, const QString &variable, const QString &value) {
    auto it = _serverConfigs.find(operation);
    if (it != _serverConfigs.end() && serverIndex < it.value().size()) {
      return _serverConfigs[operation][serverIndex].setDefaultValue(variable,value);
    }
    return -3;
}
void OAIPortfolioAnalysisSharpeRatioApi::setServerIndex(const QString &operation, int serverIndex) {
    if (_serverIndices.contains(operation) && serverIndex < _serverConfigs.find(operation).value().size()) {
        _serverIndices[operation] = serverIndex;
    }
}

void OAIPortfolioAnalysisSharpeRatioApi::setApiKey(const QString &apiKeyName, const QString &apiKey) {
    _apiKeys.insert(apiKeyName, apiKey);
}

void OAIPortfolioAnalysisSharpeRatioApi::setBearerToken(const QString &token) {
    _bearerToken = token;
}

void OAIPortfolioAnalysisSharpeRatioApi::setUsername(const QString &username) {
    _username = username;
}

void OAIPortfolioAnalysisSharpeRatioApi::setPassword(const QString &password) {
    _password = password;
}


void OAIPortfolioAnalysisSharpeRatioApi::setTimeOut(const int timeOut) {
    _timeOut = timeOut;
}

void OAIPortfolioAnalysisSharpeRatioApi::setWorkingDirectory(const QString &path) {
    _workingDirectory = path;
}

void OAIPortfolioAnalysisSharpeRatioApi::setNetworkAccessManager(QNetworkAccessManager* manager) {
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
int OAIPortfolioAnalysisSharpeRatioApi::addServerConfiguration(const QString &operation, const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
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
void OAIPortfolioAnalysisSharpeRatioApi::setNewServerForAllOperations(const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
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
void OAIPortfolioAnalysisSharpeRatioApi::setNewServer(const QString &operation, const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
    setServerIndex(operation, addServerConfiguration(operation, url, description, variables));
}

void OAIPortfolioAnalysisSharpeRatioApi::addHeaders(const QString &key, const QString &value) {
    _defaultHeaders.insert(key, value);
}

void OAIPortfolioAnalysisSharpeRatioApi::enableRequestCompression() {
    _isRequestCompressionEnabled = true;
}

void OAIPortfolioAnalysisSharpeRatioApi::enableResponseCompression() {
    _isResponseCompressionEnabled = true;
}

void OAIPortfolioAnalysisSharpeRatioApi::abortRequests() {
    Q_EMIT abortRequestsSignal();
}

QString OAIPortfolioAnalysisSharpeRatioApi::getParamStylePrefix(const QString &style) {
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

QString OAIPortfolioAnalysisSharpeRatioApi::getParamStyleSuffix(const QString &style) {
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

QString OAIPortfolioAnalysisSharpeRatioApi::getParamStyleDelimiter(const QString &style, const QString &name, bool isExplode) {

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

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioBiasAdjustedPost(const OAI_portfolio_analysis_sharpe_ratio_bias_adjusted_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisSharpeRatioBiasAdjustedPost"][_serverIndices.value("portfolioAnalysisSharpeRatioBiasAdjustedPost")].URL()+"/portfolio/analysis/sharpe-ratio/bias-adjusted");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioBiasAdjustedPostCallback);
    connect(this, &OAIPortfolioAnalysisSharpeRatioApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioBiasAdjustedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_bias_adjusted_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisSharpeRatioBiasAdjustedPostSignal(output);
        Q_EMIT portfolioAnalysisSharpeRatioBiasAdjustedPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisSharpeRatioBiasAdjustedPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioBiasAdjustedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisSharpeRatioBiasAdjustedPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioBiasAdjustedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioConfidenceIntervalPost(const OAI_portfolio_analysis_sharpe_ratio_confidence_interval_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisSharpeRatioConfidenceIntervalPost"][_serverIndices.value("portfolioAnalysisSharpeRatioConfidenceIntervalPost")].URL()+"/portfolio/analysis/sharpe-ratio/confidence-interval");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioConfidenceIntervalPostCallback);
    connect(this, &OAIPortfolioAnalysisSharpeRatioApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioConfidenceIntervalPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_confidence_interval_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisSharpeRatioConfidenceIntervalPostSignal(output);
        Q_EMIT portfolioAnalysisSharpeRatioConfidenceIntervalPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisSharpeRatioConfidenceIntervalPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioConfidenceIntervalPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisSharpeRatioConfidenceIntervalPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioConfidenceIntervalPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioPost(const OAI_portfolio_analysis_sharpe_ratio_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisSharpeRatioPost"][_serverIndices.value("portfolioAnalysisSharpeRatioPost")].URL()+"/portfolio/analysis/sharpe-ratio");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioPostCallback);
    connect(this, &OAIPortfolioAnalysisSharpeRatioApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisSharpeRatioPostSignal(output);
        Q_EMIT portfolioAnalysisSharpeRatioPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisSharpeRatioPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisSharpeRatioPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost(const OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost"][_serverIndices.value("portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost")].URL()+"/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostCallback);
    connect(this, &OAIPortfolioAnalysisSharpeRatioApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_probabilistic_minimum_track_record_length_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostSignal(output);
        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioProbabilisticPost(const OAI_portfolio_analysis_sharpe_ratio_probabilistic_post_request &body) {
    QString fullPath = QString(_serverConfigs["portfolioAnalysisSharpeRatioProbabilisticPost"][_serverIndices.value("portfolioAnalysisSharpeRatioProbabilisticPost")].URL()+"/portfolio/analysis/sharpe-ratio/probabilistic");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioProbabilisticPostCallback);
    connect(this, &OAIPortfolioAnalysisSharpeRatioApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIPortfolioAnalysisSharpeRatioApi::portfolioAnalysisSharpeRatioProbabilisticPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_portfolio_analysis_sharpe_ratio_probabilistic_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticPostSignal(output);
        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticPostSignalFull(worker, output);
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

        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticPostSignalE(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticPostSignalError(output, error_type, error_str);
        Q_EMIT portfolioAnalysisSharpeRatioProbabilisticPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIPortfolioAnalysisSharpeRatioApi::tokenAvailable(){

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
