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

#ifndef OAI_OAIPortfolioOptimizationApi_H
#define OAI_OAIPortfolioOptimizationApi_H

#include "OAIHelpers.h"
#include "OAIHttpRequest.h"
#include "OAIServerConfiguration.h"
#include "OAIOauth.h"

#include "OAI_assets_correlation_matrix_random_post_request.h"
#include "OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner.h"
#include "OAI_portfolio_optimization_equal_risk_contributions_post_request.h"
#include "OAI_portfolio_optimization_equal_sharpe_ratio_contributions_post_request.h"
#include "OAI_portfolio_optimization_equal_volatility_weighted_post_request.h"
#include "OAI_portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request.h"
#include "OAI_portfolio_optimization_hierarchical_risk_parity_post_request.h"
#include "OAI_portfolio_optimization_inverse_variance_weighted_post_request.h"
#include "OAI_portfolio_optimization_market_capitalization_weighted_post_request.h"
#include "OAI_portfolio_optimization_maximum_decorrelation_post_request.h"
#include "OAI_portfolio_optimization_maximum_ulcer_performance_index_post_request.h"
#include "OAI_portfolio_optimization_minimum_correlation_post_request.h"
#include "OAI_portfolio_optimization_minimum_ulcer_index_post_request.h"
#include "OAI_portfolio_optimization_most_diversified_post_request.h"
#include <QString>

#include <QObject>
#include <QByteArray>
#include <QStringList>
#include <QList>
#include <QNetworkAccessManager>

namespace OpenAPI {

class OAIPortfolioOptimizationApi : public QObject {
    Q_OBJECT

public:
    OAIPortfolioOptimizationApi(const int timeOut = 0);
    ~OAIPortfolioOptimizationApi();

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
    * @param[in]  body OAI_portfolio_optimization_equal_risk_contributions_post_request [required]
    */
    virtual void portfolioOptimizationEqualRiskContributionsPost(const OAI_portfolio_optimization_equal_risk_contributions_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_equal_sharpe_ratio_contributions_post_request [required]
    */
    virtual void portfolioOptimizationEqualSharpeRatioContributionsPost(const OAI_portfolio_optimization_equal_sharpe_ratio_contributions_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_equal_volatility_weighted_post_request [required]
    */
    virtual void portfolioOptimizationEqualVolatilityWeightedPost(const OAI_portfolio_optimization_equal_volatility_weighted_post_request &body);

    /**
    * @param[in]  body OAI_assets_correlation_matrix_random_post_request [required]
    */
    virtual void portfolioOptimizationEqualWeightedPost(const OAI_assets_correlation_matrix_random_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request [required]
    */
    virtual void portfolioOptimizationHierarchicalRiskParityClusteringBasedPost(const OAI_portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_hierarchical_risk_parity_post_request [required]
    */
    virtual void portfolioOptimizationHierarchicalRiskParityPost(const OAI_portfolio_optimization_hierarchical_risk_parity_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_inverse_variance_weighted_post_request [required]
    */
    virtual void portfolioOptimizationInverseVarianceWeightedPost(const OAI_portfolio_optimization_inverse_variance_weighted_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_equal_volatility_weighted_post_request [required]
    */
    virtual void portfolioOptimizationInverseVolatilityWeightedPost(const OAI_portfolio_optimization_equal_volatility_weighted_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_market_capitalization_weighted_post_request [required]
    */
    virtual void portfolioOptimizationMarketCapitalizationWeightedPost(const OAI_portfolio_optimization_market_capitalization_weighted_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_maximum_decorrelation_post_request [required]
    */
    virtual void portfolioOptimizationMaximumDecorrelationPost(const OAI_portfolio_optimization_maximum_decorrelation_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_maximum_ulcer_performance_index_post_request [required]
    */
    virtual void portfolioOptimizationMaximumUlcerPerformanceIndexPost(const OAI_portfolio_optimization_maximum_ulcer_performance_index_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_minimum_correlation_post_request [required]
    */
    virtual void portfolioOptimizationMinimumCorrelationPost(const OAI_portfolio_optimization_minimum_correlation_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_minimum_ulcer_index_post_request [required]
    */
    virtual void portfolioOptimizationMinimumUlcerIndexPost(const OAI_portfolio_optimization_minimum_ulcer_index_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_optimization_most_diversified_post_request [required]
    */
    virtual void portfolioOptimizationMostDiversifiedPost(const OAI_portfolio_optimization_most_diversified_post_request &body);


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

    void portfolioOptimizationEqualRiskContributionsPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationEqualSharpeRatioContributionsPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationEqualVolatilityWeightedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationEqualWeightedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationHierarchicalRiskParityClusteringBasedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationHierarchicalRiskParityPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationInverseVarianceWeightedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationInverseVolatilityWeightedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMarketCapitalizationWeightedPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMaximumDecorrelationPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMaximumUlcerPerformanceIndexPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMinimumCorrelationPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMinimumUlcerIndexPostCallback(OAIHttpRequestWorker *worker);
    void portfolioOptimizationMostDiversifiedPostCallback(OAIHttpRequestWorker *worker);

Q_SIGNALS:

    void portfolioOptimizationEqualRiskContributionsPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationEqualSharpeRatioContributionsPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationEqualVolatilityWeightedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationEqualWeightedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationHierarchicalRiskParityPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationInverseVarianceWeightedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationInverseVolatilityWeightedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMarketCapitalizationWeightedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumDecorrelationPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumUlcerPerformanceIndexPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumCorrelationPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumUlcerIndexPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMostDiversifiedPostSignal(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);


    void portfolioOptimizationEqualRiskContributionsPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationEqualSharpeRatioContributionsPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationEqualVolatilityWeightedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationEqualWeightedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationHierarchicalRiskParityPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationInverseVarianceWeightedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationInverseVolatilityWeightedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMarketCapitalizationWeightedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumDecorrelationPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumCorrelationPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMinimumUlcerIndexPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);
    void portfolioOptimizationMostDiversifiedPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary);

    Q_DECL_DEPRECATED_X("Use portfolioOptimizationEqualRiskContributionsPostSignalError() instead")
    void portfolioOptimizationEqualRiskContributionsPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationEqualRiskContributionsPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationEqualSharpeRatioContributionsPostSignalError() instead")
    void portfolioOptimizationEqualSharpeRatioContributionsPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationEqualSharpeRatioContributionsPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationEqualVolatilityWeightedPostSignalError() instead")
    void portfolioOptimizationEqualVolatilityWeightedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationEqualVolatilityWeightedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationEqualWeightedPostSignalError() instead")
    void portfolioOptimizationEqualWeightedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationEqualWeightedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalError() instead")
    void portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationHierarchicalRiskParityPostSignalError() instead")
    void portfolioOptimizationHierarchicalRiskParityPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationHierarchicalRiskParityPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationInverseVarianceWeightedPostSignalError() instead")
    void portfolioOptimizationInverseVarianceWeightedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationInverseVarianceWeightedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationInverseVolatilityWeightedPostSignalError() instead")
    void portfolioOptimizationInverseVolatilityWeightedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationInverseVolatilityWeightedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMarketCapitalizationWeightedPostSignalError() instead")
    void portfolioOptimizationMarketCapitalizationWeightedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMarketCapitalizationWeightedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumDecorrelationPostSignalError() instead")
    void portfolioOptimizationMaximumDecorrelationPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumDecorrelationPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalError() instead")
    void portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumCorrelationPostSignalError() instead")
    void portfolioOptimizationMinimumCorrelationPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumCorrelationPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumUlcerIndexPostSignalError() instead")
    void portfolioOptimizationMinimumUlcerIndexPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumUlcerIndexPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMostDiversifiedPostSignalError() instead")
    void portfolioOptimizationMostDiversifiedPostSignalE(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMostDiversifiedPostSignalError(OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_portfolios_inner summary, QNetworkReply::NetworkError error_type, const QString &error_str);

    Q_DECL_DEPRECATED_X("Use portfolioOptimizationEqualRiskContributionsPostSignalErrorFull() instead")
    void portfolioOptimizationEqualRiskContributionsPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationEqualRiskContributionsPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationEqualSharpeRatioContributionsPostSignalErrorFull() instead")
    void portfolioOptimizationEqualSharpeRatioContributionsPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationEqualSharpeRatioContributionsPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationEqualVolatilityWeightedPostSignalErrorFull() instead")
    void portfolioOptimizationEqualVolatilityWeightedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationEqualVolatilityWeightedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationEqualWeightedPostSignalErrorFull() instead")
    void portfolioOptimizationEqualWeightedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationEqualWeightedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalErrorFull() instead")
    void portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationHierarchicalRiskParityClusteringBasedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationHierarchicalRiskParityPostSignalErrorFull() instead")
    void portfolioOptimizationHierarchicalRiskParityPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationHierarchicalRiskParityPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationInverseVarianceWeightedPostSignalErrorFull() instead")
    void portfolioOptimizationInverseVarianceWeightedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationInverseVarianceWeightedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationInverseVolatilityWeightedPostSignalErrorFull() instead")
    void portfolioOptimizationInverseVolatilityWeightedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationInverseVolatilityWeightedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMarketCapitalizationWeightedPostSignalErrorFull() instead")
    void portfolioOptimizationMarketCapitalizationWeightedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMarketCapitalizationWeightedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumDecorrelationPostSignalErrorFull() instead")
    void portfolioOptimizationMaximumDecorrelationPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumDecorrelationPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalErrorFull() instead")
    void portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMaximumUlcerPerformanceIndexPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumCorrelationPostSignalErrorFull() instead")
    void portfolioOptimizationMinimumCorrelationPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumCorrelationPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMinimumUlcerIndexPostSignalErrorFull() instead")
    void portfolioOptimizationMinimumUlcerIndexPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMinimumUlcerIndexPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioOptimizationMostDiversifiedPostSignalErrorFull() instead")
    void portfolioOptimizationMostDiversifiedPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioOptimizationMostDiversifiedPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);

    void abortRequestsSignal();
    void allPendingRequestsCompleted();

public Q_SLOTS:
    void tokenAvailable();
};

} // namespace OpenAPI
#endif
