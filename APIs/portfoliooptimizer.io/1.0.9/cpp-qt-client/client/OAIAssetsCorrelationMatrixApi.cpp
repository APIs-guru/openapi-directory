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

#include "OAIAssetsCorrelationMatrixApi.h"
#include "OAIServerConfiguration.h"
#include <QJsonArray>
#include <QJsonDocument>

namespace OpenAPI {

OAIAssetsCorrelationMatrixApi::OAIAssetsCorrelationMatrixApi(const int timeOut)
    : _timeOut(timeOut),
      _manager(nullptr),
      _isResponseCompressionEnabled(false),
      _isRequestCompressionEnabled(false) {
    initializeServerConfigs();
}

OAIAssetsCorrelationMatrixApi::~OAIAssetsCorrelationMatrixApi() {
}

void OAIAssetsCorrelationMatrixApi::initializeServerConfigs() {
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
    _serverConfigs.insert("assetsCorrelationMatrixBoundsPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixBoundsPost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixDenoisedPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixDenoisedPost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixDistancePost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixDistancePost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixEffectiveRankPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixEffectiveRankPost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixInformativenessPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixInformativenessPost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixNearestPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixNearestPost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixPost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixRandomPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixRandomPost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixShrinkagePost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixShrinkagePost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixTheoryImpliedPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixTheoryImpliedPost", 0);
    _serverConfigs.insert("assetsCorrelationMatrixValidationPost", defaultConf);
    _serverIndices.insert("assetsCorrelationMatrixValidationPost", 0);
}

/**
* returns 0 on success and -1, -2 or -3 on failure.
* -1 when the variable does not exist and -2 if the value is not defined in the enum and -3 if the operation or server index is not found
*/
int OAIAssetsCorrelationMatrixApi::setDefaultServerValue(int serverIndex, const QString &operation, const QString &variable, const QString &value) {
    auto it = _serverConfigs.find(operation);
    if (it != _serverConfigs.end() && serverIndex < it.value().size()) {
      return _serverConfigs[operation][serverIndex].setDefaultValue(variable,value);
    }
    return -3;
}
void OAIAssetsCorrelationMatrixApi::setServerIndex(const QString &operation, int serverIndex) {
    if (_serverIndices.contains(operation) && serverIndex < _serverConfigs.find(operation).value().size()) {
        _serverIndices[operation] = serverIndex;
    }
}

void OAIAssetsCorrelationMatrixApi::setApiKey(const QString &apiKeyName, const QString &apiKey) {
    _apiKeys.insert(apiKeyName, apiKey);
}

void OAIAssetsCorrelationMatrixApi::setBearerToken(const QString &token) {
    _bearerToken = token;
}

void OAIAssetsCorrelationMatrixApi::setUsername(const QString &username) {
    _username = username;
}

void OAIAssetsCorrelationMatrixApi::setPassword(const QString &password) {
    _password = password;
}


void OAIAssetsCorrelationMatrixApi::setTimeOut(const int timeOut) {
    _timeOut = timeOut;
}

void OAIAssetsCorrelationMatrixApi::setWorkingDirectory(const QString &path) {
    _workingDirectory = path;
}

void OAIAssetsCorrelationMatrixApi::setNetworkAccessManager(QNetworkAccessManager* manager) {
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
int OAIAssetsCorrelationMatrixApi::addServerConfiguration(const QString &operation, const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
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
void OAIAssetsCorrelationMatrixApi::setNewServerForAllOperations(const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
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
void OAIAssetsCorrelationMatrixApi::setNewServer(const QString &operation, const QUrl &url, const QString &description, const QMap<QString, OAIServerVariable> &variables) {
    setServerIndex(operation, addServerConfiguration(operation, url, description, variables));
}

void OAIAssetsCorrelationMatrixApi::addHeaders(const QString &key, const QString &value) {
    _defaultHeaders.insert(key, value);
}

void OAIAssetsCorrelationMatrixApi::enableRequestCompression() {
    _isRequestCompressionEnabled = true;
}

void OAIAssetsCorrelationMatrixApi::enableResponseCompression() {
    _isResponseCompressionEnabled = true;
}

void OAIAssetsCorrelationMatrixApi::abortRequests() {
    Q_EMIT abortRequestsSignal();
}

QString OAIAssetsCorrelationMatrixApi::getParamStylePrefix(const QString &style) {
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

QString OAIAssetsCorrelationMatrixApi::getParamStyleSuffix(const QString &style) {
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

QString OAIAssetsCorrelationMatrixApi::getParamStyleDelimiter(const QString &style, const QString &name, bool isExplode) {

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

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixBoundsPost(const OAI_assets_correlation_matrix_bounds_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixBoundsPost"][_serverIndices.value("assetsCorrelationMatrixBoundsPost")].URL()+"/assets/correlation/matrix/bounds");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixBoundsPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixBoundsPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_bounds_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixBoundsPostSignal(output);
        Q_EMIT assetsCorrelationMatrixBoundsPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixBoundsPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixBoundsPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixBoundsPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixBoundsPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixDenoisedPost(const OAI_assets_correlation_matrix_denoised_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixDenoisedPost"][_serverIndices.value("assetsCorrelationMatrixDenoisedPost")].URL()+"/assets/correlation/matrix/denoised");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixDenoisedPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixDenoisedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_denoised_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixDenoisedPostSignal(output);
        Q_EMIT assetsCorrelationMatrixDenoisedPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixDenoisedPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixDenoisedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixDenoisedPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixDenoisedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixDistancePost(const OAI_assets_correlation_matrix_distance_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixDistancePost"][_serverIndices.value("assetsCorrelationMatrixDistancePost")].URL()+"/assets/correlation/matrix/distance");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixDistancePostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixDistancePostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_distance_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixDistancePostSignal(output);
        Q_EMIT assetsCorrelationMatrixDistancePostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixDistancePostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixDistancePostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixDistancePostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixDistancePostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixEffectiveRankPost(const OAI_assets_correlation_matrix_effective_rank_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixEffectiveRankPost"][_serverIndices.value("assetsCorrelationMatrixEffectiveRankPost")].URL()+"/assets/correlation/matrix/effective-rank");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixEffectiveRankPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixEffectiveRankPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_effective_rank_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixEffectiveRankPostSignal(output);
        Q_EMIT assetsCorrelationMatrixEffectiveRankPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixEffectiveRankPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixEffectiveRankPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixEffectiveRankPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixEffectiveRankPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixInformativenessPost(const OAI_assets_correlation_matrix_informativeness_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixInformativenessPost"][_serverIndices.value("assetsCorrelationMatrixInformativenessPost")].URL()+"/assets/correlation/matrix/informativeness");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixInformativenessPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixInformativenessPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_informativeness_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixInformativenessPostSignal(output);
        Q_EMIT assetsCorrelationMatrixInformativenessPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixInformativenessPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixInformativenessPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixInformativenessPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixInformativenessPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixNearestPost(const OAI_assets_correlation_matrix_nearest_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixNearestPost"][_serverIndices.value("assetsCorrelationMatrixNearestPost")].URL()+"/assets/correlation/matrix/nearest");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixNearestPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixNearestPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixNearestPostSignal(output);
        Q_EMIT assetsCorrelationMatrixNearestPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixNearestPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixNearestPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixNearestPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixNearestPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixPost(const OAI_assets_correlation_matrix_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixPost"][_serverIndices.value("assetsCorrelationMatrixPost")].URL()+"/assets/correlation/matrix");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixPostSignal(output);
        Q_EMIT assetsCorrelationMatrixPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixRandomPost(const OAI_assets_correlation_matrix_random_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixRandomPost"][_serverIndices.value("assetsCorrelationMatrixRandomPost")].URL()+"/assets/correlation/matrix/random");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixRandomPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixRandomPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixRandomPostSignal(output);
        Q_EMIT assetsCorrelationMatrixRandomPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixRandomPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixRandomPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixRandomPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixRandomPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixShrinkagePost(const OAI_assets_correlation_matrix_shrinkage_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixShrinkagePost"][_serverIndices.value("assetsCorrelationMatrixShrinkagePost")].URL()+"/assets/correlation/matrix/shrinkage");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixShrinkagePostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixShrinkagePostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixShrinkagePostSignal(output);
        Q_EMIT assetsCorrelationMatrixShrinkagePostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixShrinkagePostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixShrinkagePostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixShrinkagePostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixShrinkagePostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixTheoryImpliedPost(const OAI_assets_correlation_matrix_theory_implied_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixTheoryImpliedPost"][_serverIndices.value("assetsCorrelationMatrixTheoryImpliedPost")].URL()+"/assets/correlation/matrix/theory-implied");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixTheoryImpliedPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixTheoryImpliedPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixTheoryImpliedPostSignal(output);
        Q_EMIT assetsCorrelationMatrixTheoryImpliedPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixTheoryImpliedPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixTheoryImpliedPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixTheoryImpliedPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixTheoryImpliedPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixValidationPost(const OAI_assets_correlation_matrix_validation_post_request &body) {
    QString fullPath = QString(_serverConfigs["assetsCorrelationMatrixValidationPost"][_serverIndices.value("assetsCorrelationMatrixValidationPost")].URL()+"/assets/correlation/matrix/validation");
    
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


    connect(worker, &OAIHttpRequestWorker::on_execution_finished, this, &OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixValidationPostCallback);
    connect(this, &OAIAssetsCorrelationMatrixApi::abortRequestsSignal, worker, &QObject::deleteLater);
    connect(worker, &QObject::destroyed, this, [this]() {
        if (findChildren<OAIHttpRequestWorker*>().count() == 0) {
            Q_EMIT allPendingRequestsCompleted();
        }
    });

    worker->execute(&input);
}

void OAIAssetsCorrelationMatrixApi::assetsCorrelationMatrixValidationPostCallback(OAIHttpRequestWorker *worker) {
    QString error_str = worker->error_str;
    QNetworkReply::NetworkError error_type = worker->error_type;

    if (worker->error_type != QNetworkReply::NoError) {
        error_str = QString("%1, %2").arg(worker->error_str, QString(worker->response));
    }
    OAI_assets_correlation_matrix_validation_post_200_response output(QString(worker->response));
    worker->deleteLater();

    if (worker->error_type == QNetworkReply::NoError) {
        Q_EMIT assetsCorrelationMatrixValidationPostSignal(output);
        Q_EMIT assetsCorrelationMatrixValidationPostSignalFull(worker, output);
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

        Q_EMIT assetsCorrelationMatrixValidationPostSignalE(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixValidationPostSignalEFull(worker, error_type, error_str);

#if defined(_MSC_VER)
#pragma warning(pop)
#elif defined(__clang__)
#pragma clang diagnostic pop
#elif defined(__GNUC__)
#pragma GCC diagnostic pop
#endif

        Q_EMIT assetsCorrelationMatrixValidationPostSignalError(output, error_type, error_str);
        Q_EMIT assetsCorrelationMatrixValidationPostSignalErrorFull(worker, error_type, error_str);
    }
}

void OAIAssetsCorrelationMatrixApi::tokenAvailable(){

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
