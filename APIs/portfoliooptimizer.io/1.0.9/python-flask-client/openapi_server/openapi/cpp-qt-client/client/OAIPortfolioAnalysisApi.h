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

#ifndef OAI_OAIPortfolioAnalysisApi_H
#define OAI_OAIPortfolioAnalysisApi_H

#include "OAIHelpers.h"
#include "OAIHttpRequest.h"
#include "OAIServerConfiguration.h"
#include "OAIOauth.h"

#include "OAI_portfolio_analysis_alpha_post_200_response.h"
#include "OAI_portfolio_analysis_alpha_post_request.h"
#include "OAI_portfolio_analysis_beta_post_200_response.h"
#include "OAI_portfolio_analysis_contributions_return_post_200_response.h"
#include "OAI_portfolio_analysis_contributions_return_post_request.h"
#include "OAI_portfolio_analysis_contributions_risk_post_200_response.h"
#include "OAI_portfolio_analysis_contributions_risk_post_request.h"
#include "OAI_portfolio_analysis_correlation_spectrum_post_200_response.h"
#include "OAI_portfolio_analysis_correlation_spectrum_post_request.h"
#include "OAI_portfolio_analysis_diversification_ratio_post_200_response.h"
#include "OAI_portfolio_analysis_drawdowns_post_200_response.h"
#include "OAI_portfolio_analysis_drawdowns_post_request.h"
#include "OAI_portfolio_analysis_effective_number_of_bets_post_200_response.h"
#include "OAI_portfolio_analysis_effective_number_of_bets_post_request.h"
#include "OAI_portfolio_analysis_factors_exposures_post_200_response.h"
#include "OAI_portfolio_analysis_factors_exposures_post_request.h"
#include "OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response.h"
#include "OAI_portfolio_analysis_mean_variance_efficient_frontier_post_request.h"
#include "OAI_portfolio_analysis_mean_variance_minimum_variance_frontier_post_request.h"
#include "OAI_portfolio_analysis_return_post_200_response.h"
#include "OAI_portfolio_analysis_return_post_request.h"
#include "OAI_portfolio_analysis_returns_average_post_200_response.h"
#include "OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_1.h"
#include "OAI_portfolio_analysis_tracking_error_post_200_response.h"
#include "OAI_portfolio_analysis_tracking_error_post_request.h"
#include "OAI_portfolio_analysis_ulcer_index_post_200_response.h"
#include "OAI_portfolio_analysis_ulcer_performance_index_post_200_response.h"
#include "OAI_portfolio_analysis_volatility_post_200_response.h"
#include "OAI_portfolio_analysis_volatility_post_request.h"
#include <QString>

#include <QObject>
#include <QByteArray>
#include <QStringList>
#include <QList>
#include <QNetworkAccessManager>

namespace OpenAPI {

class OAIPortfolioAnalysisApi : public QObject {
    Q_OBJECT

public:
    OAIPortfolioAnalysisApi(const int timeOut = 0);
    ~OAIPortfolioAnalysisApi();

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
    * @param[in]  body OAI_portfolio_analysis_alpha_post_request [required]
    */
    virtual void portfolioAnalysisAlphaPost(const OAI_portfolio_analysis_alpha_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_alpha_post_request [required]
    */
    virtual void portfolioAnalysisBetaPost(const OAI_portfolio_analysis_alpha_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_contributions_return_post_request [required]
    */
    virtual void portfolioAnalysisContributionsReturnPost(const OAI_portfolio_analysis_contributions_return_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_contributions_risk_post_request [required]
    */
    virtual void portfolioAnalysisContributionsRiskPost(const OAI_portfolio_analysis_contributions_risk_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_correlation_spectrum_post_request [required]
    */
    virtual void portfolioAnalysisCorrelationSpectrumPost(const OAI_portfolio_analysis_correlation_spectrum_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_correlation_spectrum_post_request [required]
    */
    virtual void portfolioAnalysisDiversificationRatioPost(const OAI_portfolio_analysis_correlation_spectrum_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_drawdowns_post_request [required]
    */
    virtual void portfolioAnalysisDrawdownsPost(const OAI_portfolio_analysis_drawdowns_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_effective_number_of_bets_post_request [required]
    */
    virtual void portfolioAnalysisEffectiveNumberOfBetsPost(const OAI_portfolio_analysis_effective_number_of_bets_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_factors_exposures_post_request [required]
    */
    virtual void portfolioAnalysisFactorsExposuresPost(const OAI_portfolio_analysis_factors_exposures_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_mean_variance_efficient_frontier_post_request [required]
    */
    virtual void portfolioAnalysisMeanVarianceEfficientFrontierPost(const OAI_portfolio_analysis_mean_variance_efficient_frontier_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_mean_variance_minimum_variance_frontier_post_request [required]
    */
    virtual void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPost(const OAI_portfolio_analysis_mean_variance_minimum_variance_frontier_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_return_post_request [required]
    */
    virtual void portfolioAnalysisReturnPost(const OAI_portfolio_analysis_return_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_drawdowns_post_request [required]
    */
    virtual void portfolioAnalysisReturnsAveragePost(const OAI_portfolio_analysis_drawdowns_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_tracking_error_post_request [required]
    */
    virtual void portfolioAnalysisTrackingErrorPost(const OAI_portfolio_analysis_tracking_error_post_request &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_1 [required]
    */
    virtual void portfolioAnalysisUlcerIndexPost(const OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_1 &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_1 [required]
    */
    virtual void portfolioAnalysisUlcerPerformanceIndexPost(const OAI_portfolio_analysis_sharpe_ratio_post_request_oneOf_1 &body);

    /**
    * @param[in]  body OAI_portfolio_analysis_volatility_post_request [required]
    */
    virtual void portfolioAnalysisVolatilityPost(const OAI_portfolio_analysis_volatility_post_request &body);


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

    void portfolioAnalysisAlphaPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisBetaPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisContributionsReturnPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisContributionsRiskPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisCorrelationSpectrumPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisDiversificationRatioPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisDrawdownsPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisEffectiveNumberOfBetsPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisFactorsExposuresPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisMeanVarianceEfficientFrontierPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisReturnPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisReturnsAveragePostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisTrackingErrorPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisUlcerIndexPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisUlcerPerformanceIndexPostCallback(OAIHttpRequestWorker *worker);
    void portfolioAnalysisVolatilityPostCallback(OAIHttpRequestWorker *worker);

Q_SIGNALS:

    void portfolioAnalysisAlphaPostSignal(OAI_portfolio_analysis_alpha_post_200_response summary);
    void portfolioAnalysisBetaPostSignal(OAI_portfolio_analysis_beta_post_200_response summary);
    void portfolioAnalysisContributionsReturnPostSignal(OAI_portfolio_analysis_contributions_return_post_200_response summary);
    void portfolioAnalysisContributionsRiskPostSignal(OAI_portfolio_analysis_contributions_risk_post_200_response summary);
    void portfolioAnalysisCorrelationSpectrumPostSignal(OAI_portfolio_analysis_correlation_spectrum_post_200_response summary);
    void portfolioAnalysisDiversificationRatioPostSignal(OAI_portfolio_analysis_diversification_ratio_post_200_response summary);
    void portfolioAnalysisDrawdownsPostSignal(OAI_portfolio_analysis_drawdowns_post_200_response summary);
    void portfolioAnalysisEffectiveNumberOfBetsPostSignal(OAI_portfolio_analysis_effective_number_of_bets_post_200_response summary);
    void portfolioAnalysisFactorsExposuresPostSignal(OAI_portfolio_analysis_factors_exposures_post_200_response summary);
    void portfolioAnalysisMeanVarianceEfficientFrontierPostSignal(OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response summary);
    void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignal(OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response summary);
    void portfolioAnalysisReturnPostSignal(OAI_portfolio_analysis_return_post_200_response summary);
    void portfolioAnalysisReturnsAveragePostSignal(OAI_portfolio_analysis_returns_average_post_200_response summary);
    void portfolioAnalysisTrackingErrorPostSignal(OAI_portfolio_analysis_tracking_error_post_200_response summary);
    void portfolioAnalysisUlcerIndexPostSignal(OAI_portfolio_analysis_ulcer_index_post_200_response summary);
    void portfolioAnalysisUlcerPerformanceIndexPostSignal(OAI_portfolio_analysis_ulcer_performance_index_post_200_response summary);
    void portfolioAnalysisVolatilityPostSignal(OAI_portfolio_analysis_volatility_post_200_response summary);


    void portfolioAnalysisAlphaPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_alpha_post_200_response summary);
    void portfolioAnalysisBetaPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_beta_post_200_response summary);
    void portfolioAnalysisContributionsReturnPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_contributions_return_post_200_response summary);
    void portfolioAnalysisContributionsRiskPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_contributions_risk_post_200_response summary);
    void portfolioAnalysisCorrelationSpectrumPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_correlation_spectrum_post_200_response summary);
    void portfolioAnalysisDiversificationRatioPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_diversification_ratio_post_200_response summary);
    void portfolioAnalysisDrawdownsPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_drawdowns_post_200_response summary);
    void portfolioAnalysisEffectiveNumberOfBetsPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_effective_number_of_bets_post_200_response summary);
    void portfolioAnalysisFactorsExposuresPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_factors_exposures_post_200_response summary);
    void portfolioAnalysisMeanVarianceEfficientFrontierPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response summary);
    void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response summary);
    void portfolioAnalysisReturnPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_return_post_200_response summary);
    void portfolioAnalysisReturnsAveragePostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_returns_average_post_200_response summary);
    void portfolioAnalysisTrackingErrorPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_tracking_error_post_200_response summary);
    void portfolioAnalysisUlcerIndexPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_ulcer_index_post_200_response summary);
    void portfolioAnalysisUlcerPerformanceIndexPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_ulcer_performance_index_post_200_response summary);
    void portfolioAnalysisVolatilityPostSignalFull(OAIHttpRequestWorker *worker, OAI_portfolio_analysis_volatility_post_200_response summary);

    Q_DECL_DEPRECATED_X("Use portfolioAnalysisAlphaPostSignalError() instead")
    void portfolioAnalysisAlphaPostSignalE(OAI_portfolio_analysis_alpha_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisAlphaPostSignalError(OAI_portfolio_analysis_alpha_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisBetaPostSignalError() instead")
    void portfolioAnalysisBetaPostSignalE(OAI_portfolio_analysis_beta_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisBetaPostSignalError(OAI_portfolio_analysis_beta_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisContributionsReturnPostSignalError() instead")
    void portfolioAnalysisContributionsReturnPostSignalE(OAI_portfolio_analysis_contributions_return_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisContributionsReturnPostSignalError(OAI_portfolio_analysis_contributions_return_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisContributionsRiskPostSignalError() instead")
    void portfolioAnalysisContributionsRiskPostSignalE(OAI_portfolio_analysis_contributions_risk_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisContributionsRiskPostSignalError(OAI_portfolio_analysis_contributions_risk_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisCorrelationSpectrumPostSignalError() instead")
    void portfolioAnalysisCorrelationSpectrumPostSignalE(OAI_portfolio_analysis_correlation_spectrum_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisCorrelationSpectrumPostSignalError(OAI_portfolio_analysis_correlation_spectrum_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisDiversificationRatioPostSignalError() instead")
    void portfolioAnalysisDiversificationRatioPostSignalE(OAI_portfolio_analysis_diversification_ratio_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisDiversificationRatioPostSignalError(OAI_portfolio_analysis_diversification_ratio_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisDrawdownsPostSignalError() instead")
    void portfolioAnalysisDrawdownsPostSignalE(OAI_portfolio_analysis_drawdowns_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisDrawdownsPostSignalError(OAI_portfolio_analysis_drawdowns_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisEffectiveNumberOfBetsPostSignalError() instead")
    void portfolioAnalysisEffectiveNumberOfBetsPostSignalE(OAI_portfolio_analysis_effective_number_of_bets_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisEffectiveNumberOfBetsPostSignalError(OAI_portfolio_analysis_effective_number_of_bets_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisFactorsExposuresPostSignalError() instead")
    void portfolioAnalysisFactorsExposuresPostSignalE(OAI_portfolio_analysis_factors_exposures_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisFactorsExposuresPostSignalError(OAI_portfolio_analysis_factors_exposures_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisMeanVarianceEfficientFrontierPostSignalError() instead")
    void portfolioAnalysisMeanVarianceEfficientFrontierPostSignalE(OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisMeanVarianceEfficientFrontierPostSignalError(OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalError() instead")
    void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalE(OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalError(OAI_portfolio_analysis_mean_variance_efficient_frontier_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisReturnPostSignalError() instead")
    void portfolioAnalysisReturnPostSignalE(OAI_portfolio_analysis_return_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisReturnPostSignalError(OAI_portfolio_analysis_return_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisReturnsAveragePostSignalError() instead")
    void portfolioAnalysisReturnsAveragePostSignalE(OAI_portfolio_analysis_returns_average_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisReturnsAveragePostSignalError(OAI_portfolio_analysis_returns_average_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisTrackingErrorPostSignalError() instead")
    void portfolioAnalysisTrackingErrorPostSignalE(OAI_portfolio_analysis_tracking_error_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisTrackingErrorPostSignalError(OAI_portfolio_analysis_tracking_error_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisUlcerIndexPostSignalError() instead")
    void portfolioAnalysisUlcerIndexPostSignalE(OAI_portfolio_analysis_ulcer_index_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisUlcerIndexPostSignalError(OAI_portfolio_analysis_ulcer_index_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisUlcerPerformanceIndexPostSignalError() instead")
    void portfolioAnalysisUlcerPerformanceIndexPostSignalE(OAI_portfolio_analysis_ulcer_performance_index_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisUlcerPerformanceIndexPostSignalError(OAI_portfolio_analysis_ulcer_performance_index_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisVolatilityPostSignalError() instead")
    void portfolioAnalysisVolatilityPostSignalE(OAI_portfolio_analysis_volatility_post_200_response summary, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisVolatilityPostSignalError(OAI_portfolio_analysis_volatility_post_200_response summary, QNetworkReply::NetworkError error_type, const QString &error_str);

    Q_DECL_DEPRECATED_X("Use portfolioAnalysisAlphaPostSignalErrorFull() instead")
    void portfolioAnalysisAlphaPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisAlphaPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisBetaPostSignalErrorFull() instead")
    void portfolioAnalysisBetaPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisBetaPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisContributionsReturnPostSignalErrorFull() instead")
    void portfolioAnalysisContributionsReturnPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisContributionsReturnPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisContributionsRiskPostSignalErrorFull() instead")
    void portfolioAnalysisContributionsRiskPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisContributionsRiskPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisCorrelationSpectrumPostSignalErrorFull() instead")
    void portfolioAnalysisCorrelationSpectrumPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisCorrelationSpectrumPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisDiversificationRatioPostSignalErrorFull() instead")
    void portfolioAnalysisDiversificationRatioPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisDiversificationRatioPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisDrawdownsPostSignalErrorFull() instead")
    void portfolioAnalysisDrawdownsPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisDrawdownsPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisEffectiveNumberOfBetsPostSignalErrorFull() instead")
    void portfolioAnalysisEffectiveNumberOfBetsPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisEffectiveNumberOfBetsPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisFactorsExposuresPostSignalErrorFull() instead")
    void portfolioAnalysisFactorsExposuresPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisFactorsExposuresPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisMeanVarianceEfficientFrontierPostSignalErrorFull() instead")
    void portfolioAnalysisMeanVarianceEfficientFrontierPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisMeanVarianceEfficientFrontierPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalErrorFull() instead")
    void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisMeanVarianceMinimumVarianceFrontierPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisReturnPostSignalErrorFull() instead")
    void portfolioAnalysisReturnPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisReturnPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisReturnsAveragePostSignalErrorFull() instead")
    void portfolioAnalysisReturnsAveragePostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisReturnsAveragePostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisTrackingErrorPostSignalErrorFull() instead")
    void portfolioAnalysisTrackingErrorPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisTrackingErrorPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisUlcerIndexPostSignalErrorFull() instead")
    void portfolioAnalysisUlcerIndexPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisUlcerIndexPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisUlcerPerformanceIndexPostSignalErrorFull() instead")
    void portfolioAnalysisUlcerPerformanceIndexPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisUlcerPerformanceIndexPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);
    Q_DECL_DEPRECATED_X("Use portfolioAnalysisVolatilityPostSignalErrorFull() instead")
    void portfolioAnalysisVolatilityPostSignalEFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, QString error_str);
    void portfolioAnalysisVolatilityPostSignalErrorFull(OAIHttpRequestWorker *worker, QNetworkReply::NetworkError error_type, const QString &error_str);

    void abortRequestsSignal();
    void allPendingRequestsCompleted();

public Q_SLOTS:
    void tokenAvailable();
};

} // namespace OpenAPI
#endif
