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
 *
 */


import ApiClient from './ApiClient';
import AssetsAnalysisAbsorptionRatioPost200Response from './model/AssetsAnalysisAbsorptionRatioPost200Response';
import AssetsAnalysisAbsorptionRatioPostRequest from './model/AssetsAnalysisAbsorptionRatioPostRequest';
import AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors from './model/AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors';
import AssetsAnalysisTurbulenceIndexPost200Response from './model/AssetsAnalysisTurbulenceIndexPost200Response';
import AssetsAnalysisTurbulenceIndexPostRequest from './model/AssetsAnalysisTurbulenceIndexPostRequest';
import AssetsCorrelationMatrixBoundsPost200Response from './model/AssetsCorrelationMatrixBoundsPost200Response';
import AssetsCorrelationMatrixBoundsPostRequest from './model/AssetsCorrelationMatrixBoundsPostRequest';
import AssetsCorrelationMatrixDenoisedPost200Response from './model/AssetsCorrelationMatrixDenoisedPost200Response';
import AssetsCorrelationMatrixDenoisedPostRequest from './model/AssetsCorrelationMatrixDenoisedPostRequest';
import AssetsCorrelationMatrixDistancePost200Response from './model/AssetsCorrelationMatrixDistancePost200Response';
import AssetsCorrelationMatrixDistancePostRequest from './model/AssetsCorrelationMatrixDistancePostRequest';
import AssetsCorrelationMatrixEffectiveRankPost200Response from './model/AssetsCorrelationMatrixEffectiveRankPost200Response';
import AssetsCorrelationMatrixEffectiveRankPostRequest from './model/AssetsCorrelationMatrixEffectiveRankPostRequest';
import AssetsCorrelationMatrixInformativenessPost200Response from './model/AssetsCorrelationMatrixInformativenessPost200Response';
import AssetsCorrelationMatrixInformativenessPostRequest from './model/AssetsCorrelationMatrixInformativenessPostRequest';
import AssetsCorrelationMatrixNearestPostRequest from './model/AssetsCorrelationMatrixNearestPostRequest';
import AssetsCorrelationMatrixPost200Response from './model/AssetsCorrelationMatrixPost200Response';
import AssetsCorrelationMatrixPostRequest from './model/AssetsCorrelationMatrixPostRequest';
import AssetsCorrelationMatrixPostRequestOneOf from './model/AssetsCorrelationMatrixPostRequestOneOf';
import AssetsCorrelationMatrixPostRequestOneOf1 from './model/AssetsCorrelationMatrixPostRequestOneOf1';
import AssetsCorrelationMatrixPostRequestOneOfAssetsInner from './model/AssetsCorrelationMatrixPostRequestOneOfAssetsInner';
import AssetsCorrelationMatrixRandomPostRequest from './model/AssetsCorrelationMatrixRandomPostRequest';
import AssetsCorrelationMatrixShrinkagePostRequest from './model/AssetsCorrelationMatrixShrinkagePostRequest';
import AssetsCorrelationMatrixShrinkagePostRequestOneOf from './model/AssetsCorrelationMatrixShrinkagePostRequestOneOf';
import AssetsCorrelationMatrixShrinkagePostRequestOneOf1 from './model/AssetsCorrelationMatrixShrinkagePostRequestOneOf1';
import AssetsCorrelationMatrixTheoryImpliedPostRequest from './model/AssetsCorrelationMatrixTheoryImpliedPostRequest';
import AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner from './model/AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner';
import AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner from './model/AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner';
import AssetsCorrelationMatrixValidationPost200Response from './model/AssetsCorrelationMatrixValidationPost200Response';
import AssetsCorrelationMatrixValidationPostRequest from './model/AssetsCorrelationMatrixValidationPostRequest';
import AssetsCovarianceMatrixEffectiveRankPost200Response from './model/AssetsCovarianceMatrixEffectiveRankPost200Response';
import AssetsCovarianceMatrixEffectiveRankPostRequest from './model/AssetsCovarianceMatrixEffectiveRankPostRequest';
import AssetsCovarianceMatrixExponentiallyWeightedPost200Response from './model/AssetsCovarianceMatrixExponentiallyWeightedPost200Response';
import AssetsCovarianceMatrixExponentiallyWeightedPostRequest from './model/AssetsCovarianceMatrixExponentiallyWeightedPostRequest';
import AssetsCovarianceMatrixPost200Response from './model/AssetsCovarianceMatrixPost200Response';
import AssetsCovarianceMatrixPostRequest from './model/AssetsCovarianceMatrixPostRequest';
import AssetsCovarianceMatrixPostRequestOneOf from './model/AssetsCovarianceMatrixPostRequestOneOf';
import AssetsCovarianceMatrixPostRequestOneOf1 from './model/AssetsCovarianceMatrixPostRequestOneOf1';
import AssetsCovarianceMatrixValidationPost200Response from './model/AssetsCovarianceMatrixValidationPost200Response';
import AssetsKurtosisPost200Response from './model/AssetsKurtosisPost200Response';
import AssetsKurtosisPost200ResponseAssetsInner from './model/AssetsKurtosisPost200ResponseAssetsInner';
import AssetsKurtosisPostRequest from './model/AssetsKurtosisPostRequest';
import AssetsKurtosisPostRequestAssetsInner from './model/AssetsKurtosisPostRequestAssetsInner';
import AssetsPricesAdjustedPost200Response from './model/AssetsPricesAdjustedPost200Response';
import AssetsPricesAdjustedPost200ResponseAssetsInner from './model/AssetsPricesAdjustedPost200ResponseAssetsInner';
import AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner from './model/AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner';
import AssetsPricesAdjustedPostRequest from './model/AssetsPricesAdjustedPostRequest';
import AssetsPricesAdjustedPostRequestAssetsInner from './model/AssetsPricesAdjustedPostRequestAssetsInner';
import AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner from './model/AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner';
import AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner from './model/AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner';
import AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner from './model/AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner';
import AssetsReturnsAveragePost200Response from './model/AssetsReturnsAveragePost200Response';
import AssetsReturnsAveragePost200ResponseAssetsInner from './model/AssetsReturnsAveragePost200ResponseAssetsInner';
import AssetsReturnsAveragePostRequest from './model/AssetsReturnsAveragePostRequest';
import AssetsReturnsAveragePostRequestAssetsInner from './model/AssetsReturnsAveragePostRequestAssetsInner';
import AssetsReturnsLogarithmicPost200Response from './model/AssetsReturnsLogarithmicPost200Response';
import AssetsReturnsLogarithmicPost200ResponseAssetsInner from './model/AssetsReturnsLogarithmicPost200ResponseAssetsInner';
import AssetsReturnsPost200Response from './model/AssetsReturnsPost200Response';
import AssetsReturnsPost200ResponseAssetsInner from './model/AssetsReturnsPost200ResponseAssetsInner';
import AssetsReturnsPostRequest from './model/AssetsReturnsPostRequest';
import AssetsReturnsPostRequestAssetsInner from './model/AssetsReturnsPostRequestAssetsInner';
import AssetsReturnsSimulationBootstrapPost200Response from './model/AssetsReturnsSimulationBootstrapPost200Response';
import AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner from './model/AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner';
import AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner from './model/AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner';
import AssetsReturnsSimulationBootstrapPostRequest from './model/AssetsReturnsSimulationBootstrapPostRequest';
import AssetsReturnsSimulationBootstrapPostRequestAssetsInner from './model/AssetsReturnsSimulationBootstrapPostRequestAssetsInner';
import AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest from './model/AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest';
import AssetsReturnsSimulationMonteCarloCornishFisherPost200Response from './model/AssetsReturnsSimulationMonteCarloCornishFisherPost200Response';
import AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner from './model/AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner';
import AssetsReturnsSimulationMonteCarloCornishFisherPostRequest from './model/AssetsReturnsSimulationMonteCarloCornishFisherPostRequest';
import AssetsReturnsSimulationMonteCarloGaussianPostRequest from './model/AssetsReturnsSimulationMonteCarloGaussianPostRequest';
import AssetsReturnsTurbulencePartitionedPost200Response from './model/AssetsReturnsTurbulencePartitionedPost200Response';
import AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner from './model/AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner';
import AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner from './model/AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner';
import AssetsReturnsTurbulencePartitionedPostRequest from './model/AssetsReturnsTurbulencePartitionedPostRequest';
import AssetsSkewnessPost200Response from './model/AssetsSkewnessPost200Response';
import AssetsSkewnessPost200ResponseAssetsInner from './model/AssetsSkewnessPost200ResponseAssetsInner';
import AssetsSkewnessPostRequest from './model/AssetsSkewnessPostRequest';
import AssetsSkewnessPostRequestAssetsInner from './model/AssetsSkewnessPostRequestAssetsInner';
import AssetsVariancePost200Response from './model/AssetsVariancePost200Response';
import AssetsVariancePost200ResponseAssetsInner from './model/AssetsVariancePost200ResponseAssetsInner';
import AssetsVariancePostRequest from './model/AssetsVariancePostRequest';
import AssetsVariancePostRequestOneOf from './model/AssetsVariancePostRequestOneOf';
import AssetsVariancePostRequestOneOf1 from './model/AssetsVariancePostRequestOneOf1';
import AssetsVariancePostRequestOneOf1AssetsInner from './model/AssetsVariancePostRequestOneOf1AssetsInner';
import AssetsVariancePostRequestOneOfAssetsInner from './model/AssetsVariancePostRequestOneOfAssetsInner';
import AssetsVolatilityPost200Response from './model/AssetsVolatilityPost200Response';
import AssetsVolatilityPost200ResponseAssetsInner from './model/AssetsVolatilityPost200ResponseAssetsInner';
import AssetsVolatilityPostRequest from './model/AssetsVolatilityPostRequest';
import AssetsVolatilityPostRequestOneOf from './model/AssetsVolatilityPostRequestOneOf';
import AssetsVolatilityPostRequestOneOfAssetsInner from './model/AssetsVolatilityPostRequestOneOfAssetsInner';
import FactorsResidualizationPost200Response from './model/FactorsResidualizationPost200Response';
import FactorsResidualizationPostRequest from './model/FactorsResidualizationPostRequest';
import FactorsResidualizationPostRequestFactorsInner from './model/FactorsResidualizationPostRequestFactorsInner';
import PortfolioAnalysisAlphaPost200Response from './model/PortfolioAnalysisAlphaPost200Response';
import PortfolioAnalysisAlphaPost200ResponsePortfoliosInner from './model/PortfolioAnalysisAlphaPost200ResponsePortfoliosInner';
import PortfolioAnalysisAlphaPostRequest from './model/PortfolioAnalysisAlphaPostRequest';
import PortfolioAnalysisAlphaPostRequestOneOf from './model/PortfolioAnalysisAlphaPostRequestOneOf';
import PortfolioAnalysisAlphaPostRequestOneOf1 from './model/PortfolioAnalysisAlphaPostRequestOneOf1';
import PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner from './model/PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner';
import PortfolioAnalysisBetaPost200Response from './model/PortfolioAnalysisBetaPost200Response';
import PortfolioAnalysisBetaPost200ResponsePortfoliosInner from './model/PortfolioAnalysisBetaPost200ResponsePortfoliosInner';
import PortfolioAnalysisContributionsReturnPost200Response from './model/PortfolioAnalysisContributionsReturnPost200Response';
import PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner from './model/PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner';
import PortfolioAnalysisContributionsReturnPostRequest from './model/PortfolioAnalysisContributionsReturnPostRequest';
import PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner from './model/PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner';
import PortfolioAnalysisContributionsRiskPost200Response from './model/PortfolioAnalysisContributionsRiskPost200Response';
import PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner from './model/PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner';
import PortfolioAnalysisContributionsRiskPostRequest from './model/PortfolioAnalysisContributionsRiskPostRequest';
import PortfolioAnalysisCorrelationSpectrumPost200Response from './model/PortfolioAnalysisCorrelationSpectrumPost200Response';
import PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner from './model/PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner';
import PortfolioAnalysisCorrelationSpectrumPostRequest from './model/PortfolioAnalysisCorrelationSpectrumPostRequest';
import PortfolioAnalysisCorrelationSpectrumPostRequestOneOf from './model/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf';
import PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1 from './model/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1';
import PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner from './model/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner';
import PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner from './model/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner';
import PortfolioAnalysisDiversificationRatioPost200Response from './model/PortfolioAnalysisDiversificationRatioPost200Response';
import PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner from './model/PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner';
import PortfolioAnalysisDrawdownsPost200Response from './model/PortfolioAnalysisDrawdownsPost200Response';
import PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner from './model/PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner';
import PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner from './model/PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner';
import PortfolioAnalysisDrawdownsPostRequest from './model/PortfolioAnalysisDrawdownsPostRequest';
import PortfolioAnalysisDrawdownsPostRequestPortfoliosInner from './model/PortfolioAnalysisDrawdownsPostRequestPortfoliosInner';
import PortfolioAnalysisEffectiveNumberOfBetsPost200Response from './model/PortfolioAnalysisEffectiveNumberOfBetsPost200Response';
import PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner from './model/PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner';
import PortfolioAnalysisEffectiveNumberOfBetsPostRequest from './model/PortfolioAnalysisEffectiveNumberOfBetsPostRequest';
import PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner from './model/PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner';
import PortfolioAnalysisFactorsExposuresPost200Response from './model/PortfolioAnalysisFactorsExposuresPost200Response';
import PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner from './model/PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner';
import PortfolioAnalysisFactorsExposuresPostRequest from './model/PortfolioAnalysisFactorsExposuresPostRequest';
import PortfolioAnalysisFactorsExposuresPostRequestFactorsInner from './model/PortfolioAnalysisFactorsExposuresPostRequestFactorsInner';
import PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner from './model/PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner';
import PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response from './model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response';
import PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner from './model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner';
import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest from './model/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest';
import PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints from './model/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints';
import PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest from './model/PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest';
import PortfolioAnalysisReturnPost200Response from './model/PortfolioAnalysisReturnPost200Response';
import PortfolioAnalysisReturnPost200ResponsePortfoliosInner from './model/PortfolioAnalysisReturnPost200ResponsePortfoliosInner';
import PortfolioAnalysisReturnPostRequest from './model/PortfolioAnalysisReturnPostRequest';
import PortfolioAnalysisReturnPostRequestOneOf from './model/PortfolioAnalysisReturnPostRequestOneOf';
import PortfolioAnalysisReturnPostRequestOneOf1 from './model/PortfolioAnalysisReturnPostRequestOneOf1';
import PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner from './model/PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner';
import PortfolioAnalysisReturnsAveragePost200Response from './model/PortfolioAnalysisReturnsAveragePost200Response';
import PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner from './model/PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner';
import PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response from './model/PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response';
import PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner from './model/PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner';
import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest from './model/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest';
import PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner from './model/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner';
import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response from './model/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response';
import PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner from './model/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner';
import PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest from './model/PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest';
import PortfolioAnalysisSharpeRatioPost200Response from './model/PortfolioAnalysisSharpeRatioPost200Response';
import PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner from './model/PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner';
import PortfolioAnalysisSharpeRatioPostRequest from './model/PortfolioAnalysisSharpeRatioPostRequest';
import PortfolioAnalysisSharpeRatioPostRequestOneOf from './model/PortfolioAnalysisSharpeRatioPostRequestOneOf';
import PortfolioAnalysisSharpeRatioPostRequestOneOf1 from './model/PortfolioAnalysisSharpeRatioPostRequestOneOf1';
import PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner from './model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner';
import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response from './model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response';
import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner from './model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner';
import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest from './model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest';
import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf from './model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf';
import PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1 from './model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1';
import PortfolioAnalysisSharpeRatioProbabilisticPost200Response from './model/PortfolioAnalysisSharpeRatioProbabilisticPost200Response';
import PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner from './model/PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner';
import PortfolioAnalysisSharpeRatioProbabilisticPostRequest from './model/PortfolioAnalysisSharpeRatioProbabilisticPostRequest';
import PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf from './model/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf';
import PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1 from './model/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1';
import PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner from './model/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner';
import PortfolioAnalysisTrackingErrorPost200Response from './model/PortfolioAnalysisTrackingErrorPost200Response';
import PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner from './model/PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner';
import PortfolioAnalysisTrackingErrorPostRequest from './model/PortfolioAnalysisTrackingErrorPostRequest';
import PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner from './model/PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner';
import PortfolioAnalysisUlcerIndexPost200Response from './model/PortfolioAnalysisUlcerIndexPost200Response';
import PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner from './model/PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner';
import PortfolioAnalysisUlcerPerformanceIndexPost200Response from './model/PortfolioAnalysisUlcerPerformanceIndexPost200Response';
import PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner from './model/PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner';
import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response from './model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response';
import PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner from './model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner';
import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest from './model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest';
import PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner from './model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner';
import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest from './model/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest';
import PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner from './model/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner';
import PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest from './model/PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest';
import PortfolioAnalysisValueAtRiskCornishFisherPost200Response from './model/PortfolioAnalysisValueAtRiskCornishFisherPost200Response';
import PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner from './model/PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner';
import PortfolioAnalysisVolatilityPost200Response from './model/PortfolioAnalysisVolatilityPost200Response';
import PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner from './model/PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner';
import PortfolioAnalysisVolatilityPostRequest from './model/PortfolioAnalysisVolatilityPostRequest';
import PortfolioAnalysisVolatilityPostRequestOneOf from './model/PortfolioAnalysisVolatilityPostRequestOneOf';
import PortfolioConstructionInvestablePost200Response from './model/PortfolioConstructionInvestablePost200Response';
import PortfolioConstructionInvestablePostRequest from './model/PortfolioConstructionInvestablePostRequest';
import PortfolioConstructionMimickingPostRequest from './model/PortfolioConstructionMimickingPostRequest';
import PortfolioConstructionRandomPost200Response from './model/PortfolioConstructionRandomPost200Response';
import PortfolioConstructionRandomPostRequest from './model/PortfolioConstructionRandomPostRequest';
import PortfolioConstructionRandomPostRequestConstraints from './model/PortfolioConstructionRandomPostRequestConstraints';
import PortfolioOptimizationEqualRiskContributionsPostRequest from './model/PortfolioOptimizationEqualRiskContributionsPostRequest';
import PortfolioOptimizationEqualRiskContributionsPostRequestConstraints from './model/PortfolioOptimizationEqualRiskContributionsPostRequestConstraints';
import PortfolioOptimizationEqualSharpeRatioContributionsPostRequest from './model/PortfolioOptimizationEqualSharpeRatioContributionsPostRequest';
import PortfolioOptimizationEqualVolatilityWeightedPostRequest from './model/PortfolioOptimizationEqualVolatilityWeightedPostRequest';
import PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest from './model/PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest';
import PortfolioOptimizationHierarchicalRiskParityPostRequest from './model/PortfolioOptimizationHierarchicalRiskParityPostRequest';
import PortfolioOptimizationInverseVarianceWeightedPostRequest from './model/PortfolioOptimizationInverseVarianceWeightedPostRequest';
import PortfolioOptimizationMarketCapitalizationWeightedPostRequest from './model/PortfolioOptimizationMarketCapitalizationWeightedPostRequest';
import PortfolioOptimizationMaximumDecorrelationPostRequest from './model/PortfolioOptimizationMaximumDecorrelationPostRequest';
import PortfolioOptimizationMaximumReturnDiversifiedPostRequest from './model/PortfolioOptimizationMaximumReturnDiversifiedPostRequest';
import PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints from './model/PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints';
import PortfolioOptimizationMaximumReturnPostRequest from './model/PortfolioOptimizationMaximumReturnPostRequest';
import PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest from './model/PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest';
import PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest from './model/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest';
import PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints from './model/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints';
import PortfolioOptimizationMaximumSharpeRatioPostRequest from './model/PortfolioOptimizationMaximumSharpeRatioPostRequest';
import PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest from './model/PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest';
import PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest from './model/PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest';
import PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest from './model/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest';
import PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints from './model/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints';
import PortfolioOptimizationMeanVarianceEfficientPostRequest from './model/PortfolioOptimizationMeanVarianceEfficientPostRequest';
import PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints from './model/PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints';
import PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest from './model/PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest';
import PortfolioOptimizationMinimumCorrelationPostRequest from './model/PortfolioOptimizationMinimumCorrelationPostRequest';
import PortfolioOptimizationMinimumUlcerIndexPostRequest from './model/PortfolioOptimizationMinimumUlcerIndexPostRequest';
import PortfolioOptimizationMinimumVarianceDiversifiedPostRequest from './model/PortfolioOptimizationMinimumVarianceDiversifiedPostRequest';
import PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints from './model/PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints';
import PortfolioOptimizationMinimumVariancePostRequest from './model/PortfolioOptimizationMinimumVariancePostRequest';
import PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest from './model/PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest';
import PortfolioOptimizationMostDiversifiedPostRequest from './model/PortfolioOptimizationMostDiversifiedPostRequest';
import PortfolioSimulationRebalancingDriftWeightPost200Response from './model/PortfolioSimulationRebalancingDriftWeightPost200Response';
import PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner from './model/PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner';
import PortfolioSimulationRebalancingDriftWeightPostRequest from './model/PortfolioSimulationRebalancingDriftWeightPostRequest';
import PortfolioSimulationRebalancingRandomWeightPostRequest from './model/PortfolioSimulationRebalancingRandomWeightPostRequest';
import AssetsAnalysisApi from './api/AssetsAnalysisApi';
import AssetsCorrelationMatrixApi from './api/AssetsCorrelationMatrixApi';
import AssetsCovarianceMatrixApi from './api/AssetsCovarianceMatrixApi';
import AssetsKurtosisApi from './api/AssetsKurtosisApi';
import AssetsMonteCarloReturnsSimulationApi from './api/AssetsMonteCarloReturnsSimulationApi';
import AssetsPricesApi from './api/AssetsPricesApi';
import AssetsReturnsApi from './api/AssetsReturnsApi';
import AssetsReturnsSimulationApi from './api/AssetsReturnsSimulationApi';
import AssetsSkewnessApi from './api/AssetsSkewnessApi';
import AssetsVarianceApi from './api/AssetsVarianceApi';
import AssetsVolatilityApi from './api/AssetsVolatilityApi';
import FactorsApi from './api/FactorsApi';
import PortfolioAnalysisApi from './api/PortfolioAnalysisApi';
import PortfolioAnalysisConditionalValueAtRiskApi from './api/PortfolioAnalysisConditionalValueAtRiskApi';
import PortfolioAnalysisSharpeRatioApi from './api/PortfolioAnalysisSharpeRatioApi';
import PortfolioAnalysisValueAtRiskApi from './api/PortfolioAnalysisValueAtRiskApi';
import PortfolioConstructionApi from './api/PortfolioConstructionApi';
import PortfolioOptimizationApi from './api/PortfolioOptimizationApi';
import PortfolioOptimizationMeanVarianceApi from './api/PortfolioOptimizationMeanVarianceApi';
import PortfolioSimulationApi from './api/PortfolioSimulationApi';


/**
* Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (&#x60;POST&#x60;) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * &#x60;Content-type: application/json&#x60;     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * &#x60;Content-Encoding: gzip&#x60;     This header indicates that the data provided in input to the endpoint is compressed with gzip. * &#x60;X-API-Key: &lt;private API key&gt;&#x60;     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee &#x3D; one month of usage.  &lt;p&gt;&lt;a href&#x3D;\&quot;https://www.buymeacoffee.com/portfolioopt\&quot;&gt;&lt;img alt&#x3D;&#39;Buy a Coffee at buymeacoffee.com&#39; src&#x3D;\&quot;https://img.buymeacoffee.com/button-api/?text&#x3D;Buymeacoffee.com&amp;emoji&#x3D;&amp;slug&#x3D;portfolioopt&amp;button_colour&#x3D;000000&amp;font_colour&#x3D;ffffff&amp;font_family&#x3D;Cookie&amp;outline_colour&#x3D;ffffff&amp;coffee_colour&#x3D;FFDD00\&quot;&gt;&lt;/a&gt;&lt;/p&gt;   &gt; **Notes:**  &gt; * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  &gt; **Notes:**  &gt; * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. &gt; * Information on the API rate limits are provided in response messages HTTP headers &#x60;x-ratelimit-*&#x60;:   &gt;   * &#x60;x-ratelimit-limit-second&#x60;, the limit on the number of API requests per second &gt;   * &#x60;x-ratelimit-remaining-second&#x60;, the number of remaining API requests in the current second     &gt;   * &#x60;x-ratelimit-limit-minute&#x60;, the limit on the number of API requests per minute &gt;   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  &gt; **Notes:**  &gt; * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., &#x60;POST&#x60; instead of &#x60;GET&#x60;) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers &#x60;x-ratelimit-*&#x60; contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). .<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var PortfolioOptimizer = require('index'); // See note below*.
* var xxxSvc = new PortfolioOptimizer.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new PortfolioOptimizer.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new PortfolioOptimizer.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new PortfolioOptimizer.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.9
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AssetsAnalysisAbsorptionRatioPost200Response model constructor.
     * @property {module:model/AssetsAnalysisAbsorptionRatioPost200Response}
     */
    AssetsAnalysisAbsorptionRatioPost200Response,

    /**
     * The AssetsAnalysisAbsorptionRatioPostRequest model constructor.
     * @property {module:model/AssetsAnalysisAbsorptionRatioPostRequest}
     */
    AssetsAnalysisAbsorptionRatioPostRequest,

    /**
     * The AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors model constructor.
     * @property {module:model/AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors}
     */
    AssetsAnalysisAbsorptionRatioPostRequestAssetsCovarianceMatrixEigenvectors,

    /**
     * The AssetsAnalysisTurbulenceIndexPost200Response model constructor.
     * @property {module:model/AssetsAnalysisTurbulenceIndexPost200Response}
     */
    AssetsAnalysisTurbulenceIndexPost200Response,

    /**
     * The AssetsAnalysisTurbulenceIndexPostRequest model constructor.
     * @property {module:model/AssetsAnalysisTurbulenceIndexPostRequest}
     */
    AssetsAnalysisTurbulenceIndexPostRequest,

    /**
     * The AssetsCorrelationMatrixBoundsPost200Response model constructor.
     * @property {module:model/AssetsCorrelationMatrixBoundsPost200Response}
     */
    AssetsCorrelationMatrixBoundsPost200Response,

    /**
     * The AssetsCorrelationMatrixBoundsPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixBoundsPostRequest}
     */
    AssetsCorrelationMatrixBoundsPostRequest,

    /**
     * The AssetsCorrelationMatrixDenoisedPost200Response model constructor.
     * @property {module:model/AssetsCorrelationMatrixDenoisedPost200Response}
     */
    AssetsCorrelationMatrixDenoisedPost200Response,

    /**
     * The AssetsCorrelationMatrixDenoisedPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixDenoisedPostRequest}
     */
    AssetsCorrelationMatrixDenoisedPostRequest,

    /**
     * The AssetsCorrelationMatrixDistancePost200Response model constructor.
     * @property {module:model/AssetsCorrelationMatrixDistancePost200Response}
     */
    AssetsCorrelationMatrixDistancePost200Response,

    /**
     * The AssetsCorrelationMatrixDistancePostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixDistancePostRequest}
     */
    AssetsCorrelationMatrixDistancePostRequest,

    /**
     * The AssetsCorrelationMatrixEffectiveRankPost200Response model constructor.
     * @property {module:model/AssetsCorrelationMatrixEffectiveRankPost200Response}
     */
    AssetsCorrelationMatrixEffectiveRankPost200Response,

    /**
     * The AssetsCorrelationMatrixEffectiveRankPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixEffectiveRankPostRequest}
     */
    AssetsCorrelationMatrixEffectiveRankPostRequest,

    /**
     * The AssetsCorrelationMatrixInformativenessPost200Response model constructor.
     * @property {module:model/AssetsCorrelationMatrixInformativenessPost200Response}
     */
    AssetsCorrelationMatrixInformativenessPost200Response,

    /**
     * The AssetsCorrelationMatrixInformativenessPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixInformativenessPostRequest}
     */
    AssetsCorrelationMatrixInformativenessPostRequest,

    /**
     * The AssetsCorrelationMatrixNearestPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixNearestPostRequest}
     */
    AssetsCorrelationMatrixNearestPostRequest,

    /**
     * The AssetsCorrelationMatrixPost200Response model constructor.
     * @property {module:model/AssetsCorrelationMatrixPost200Response}
     */
    AssetsCorrelationMatrixPost200Response,

    /**
     * The AssetsCorrelationMatrixPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixPostRequest}
     */
    AssetsCorrelationMatrixPostRequest,

    /**
     * The AssetsCorrelationMatrixPostRequestOneOf model constructor.
     * @property {module:model/AssetsCorrelationMatrixPostRequestOneOf}
     */
    AssetsCorrelationMatrixPostRequestOneOf,

    /**
     * The AssetsCorrelationMatrixPostRequestOneOf1 model constructor.
     * @property {module:model/AssetsCorrelationMatrixPostRequestOneOf1}
     */
    AssetsCorrelationMatrixPostRequestOneOf1,

    /**
     * The AssetsCorrelationMatrixPostRequestOneOfAssetsInner model constructor.
     * @property {module:model/AssetsCorrelationMatrixPostRequestOneOfAssetsInner}
     */
    AssetsCorrelationMatrixPostRequestOneOfAssetsInner,

    /**
     * The AssetsCorrelationMatrixRandomPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixRandomPostRequest}
     */
    AssetsCorrelationMatrixRandomPostRequest,

    /**
     * The AssetsCorrelationMatrixShrinkagePostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixShrinkagePostRequest}
     */
    AssetsCorrelationMatrixShrinkagePostRequest,

    /**
     * The AssetsCorrelationMatrixShrinkagePostRequestOneOf model constructor.
     * @property {module:model/AssetsCorrelationMatrixShrinkagePostRequestOneOf}
     */
    AssetsCorrelationMatrixShrinkagePostRequestOneOf,

    /**
     * The AssetsCorrelationMatrixShrinkagePostRequestOneOf1 model constructor.
     * @property {module:model/AssetsCorrelationMatrixShrinkagePostRequestOneOf1}
     */
    AssetsCorrelationMatrixShrinkagePostRequestOneOf1,

    /**
     * The AssetsCorrelationMatrixTheoryImpliedPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixTheoryImpliedPostRequest}
     */
    AssetsCorrelationMatrixTheoryImpliedPostRequest,

    /**
     * The AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner model constructor.
     * @property {module:model/AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner}
     */
    AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner,

    /**
     * The AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner model constructor.
     * @property {module:model/AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner}
     */
    AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInnerAssetHierarchicalClassificationInner,

    /**
     * The AssetsCorrelationMatrixValidationPost200Response model constructor.
     * @property {module:model/AssetsCorrelationMatrixValidationPost200Response}
     */
    AssetsCorrelationMatrixValidationPost200Response,

    /**
     * The AssetsCorrelationMatrixValidationPostRequest model constructor.
     * @property {module:model/AssetsCorrelationMatrixValidationPostRequest}
     */
    AssetsCorrelationMatrixValidationPostRequest,

    /**
     * The AssetsCovarianceMatrixEffectiveRankPost200Response model constructor.
     * @property {module:model/AssetsCovarianceMatrixEffectiveRankPost200Response}
     */
    AssetsCovarianceMatrixEffectiveRankPost200Response,

    /**
     * The AssetsCovarianceMatrixEffectiveRankPostRequest model constructor.
     * @property {module:model/AssetsCovarianceMatrixEffectiveRankPostRequest}
     */
    AssetsCovarianceMatrixEffectiveRankPostRequest,

    /**
     * The AssetsCovarianceMatrixExponentiallyWeightedPost200Response model constructor.
     * @property {module:model/AssetsCovarianceMatrixExponentiallyWeightedPost200Response}
     */
    AssetsCovarianceMatrixExponentiallyWeightedPost200Response,

    /**
     * The AssetsCovarianceMatrixExponentiallyWeightedPostRequest model constructor.
     * @property {module:model/AssetsCovarianceMatrixExponentiallyWeightedPostRequest}
     */
    AssetsCovarianceMatrixExponentiallyWeightedPostRequest,

    /**
     * The AssetsCovarianceMatrixPost200Response model constructor.
     * @property {module:model/AssetsCovarianceMatrixPost200Response}
     */
    AssetsCovarianceMatrixPost200Response,

    /**
     * The AssetsCovarianceMatrixPostRequest model constructor.
     * @property {module:model/AssetsCovarianceMatrixPostRequest}
     */
    AssetsCovarianceMatrixPostRequest,

    /**
     * The AssetsCovarianceMatrixPostRequestOneOf model constructor.
     * @property {module:model/AssetsCovarianceMatrixPostRequestOneOf}
     */
    AssetsCovarianceMatrixPostRequestOneOf,

    /**
     * The AssetsCovarianceMatrixPostRequestOneOf1 model constructor.
     * @property {module:model/AssetsCovarianceMatrixPostRequestOneOf1}
     */
    AssetsCovarianceMatrixPostRequestOneOf1,

    /**
     * The AssetsCovarianceMatrixValidationPost200Response model constructor.
     * @property {module:model/AssetsCovarianceMatrixValidationPost200Response}
     */
    AssetsCovarianceMatrixValidationPost200Response,

    /**
     * The AssetsKurtosisPost200Response model constructor.
     * @property {module:model/AssetsKurtosisPost200Response}
     */
    AssetsKurtosisPost200Response,

    /**
     * The AssetsKurtosisPost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsKurtosisPost200ResponseAssetsInner}
     */
    AssetsKurtosisPost200ResponseAssetsInner,

    /**
     * The AssetsKurtosisPostRequest model constructor.
     * @property {module:model/AssetsKurtosisPostRequest}
     */
    AssetsKurtosisPostRequest,

    /**
     * The AssetsKurtosisPostRequestAssetsInner model constructor.
     * @property {module:model/AssetsKurtosisPostRequestAssetsInner}
     */
    AssetsKurtosisPostRequestAssetsInner,

    /**
     * The AssetsPricesAdjustedPost200Response model constructor.
     * @property {module:model/AssetsPricesAdjustedPost200Response}
     */
    AssetsPricesAdjustedPost200Response,

    /**
     * The AssetsPricesAdjustedPost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsPricesAdjustedPost200ResponseAssetsInner}
     */
    AssetsPricesAdjustedPost200ResponseAssetsInner,

    /**
     * The AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner model constructor.
     * @property {module:model/AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner}
     */
    AssetsPricesAdjustedPost200ResponseAssetsInnerAssetAdjustedPricesInner,

    /**
     * The AssetsPricesAdjustedPostRequest model constructor.
     * @property {module:model/AssetsPricesAdjustedPostRequest}
     */
    AssetsPricesAdjustedPostRequest,

    /**
     * The AssetsPricesAdjustedPostRequestAssetsInner model constructor.
     * @property {module:model/AssetsPricesAdjustedPostRequestAssetsInner}
     */
    AssetsPricesAdjustedPostRequestAssetsInner,

    /**
     * The AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner model constructor.
     * @property {module:model/AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner}
     */
    AssetsPricesAdjustedPostRequestAssetsInnerAssetDividendsInner,

    /**
     * The AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner model constructor.
     * @property {module:model/AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner}
     */
    AssetsPricesAdjustedPostRequestAssetsInnerAssetPricesInner,

    /**
     * The AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner model constructor.
     * @property {module:model/AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner}
     */
    AssetsPricesAdjustedPostRequestAssetsInnerAssetSplitsInner,

    /**
     * The AssetsReturnsAveragePost200Response model constructor.
     * @property {module:model/AssetsReturnsAveragePost200Response}
     */
    AssetsReturnsAveragePost200Response,

    /**
     * The AssetsReturnsAveragePost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsReturnsAveragePost200ResponseAssetsInner}
     */
    AssetsReturnsAveragePost200ResponseAssetsInner,

    /**
     * The AssetsReturnsAveragePostRequest model constructor.
     * @property {module:model/AssetsReturnsAveragePostRequest}
     */
    AssetsReturnsAveragePostRequest,

    /**
     * The AssetsReturnsAveragePostRequestAssetsInner model constructor.
     * @property {module:model/AssetsReturnsAveragePostRequestAssetsInner}
     */
    AssetsReturnsAveragePostRequestAssetsInner,

    /**
     * The AssetsReturnsLogarithmicPost200Response model constructor.
     * @property {module:model/AssetsReturnsLogarithmicPost200Response}
     */
    AssetsReturnsLogarithmicPost200Response,

    /**
     * The AssetsReturnsLogarithmicPost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsReturnsLogarithmicPost200ResponseAssetsInner}
     */
    AssetsReturnsLogarithmicPost200ResponseAssetsInner,

    /**
     * The AssetsReturnsPost200Response model constructor.
     * @property {module:model/AssetsReturnsPost200Response}
     */
    AssetsReturnsPost200Response,

    /**
     * The AssetsReturnsPost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsReturnsPost200ResponseAssetsInner}
     */
    AssetsReturnsPost200ResponseAssetsInner,

    /**
     * The AssetsReturnsPostRequest model constructor.
     * @property {module:model/AssetsReturnsPostRequest}
     */
    AssetsReturnsPostRequest,

    /**
     * The AssetsReturnsPostRequestAssetsInner model constructor.
     * @property {module:model/AssetsReturnsPostRequestAssetsInner}
     */
    AssetsReturnsPostRequestAssetsInner,

    /**
     * The AssetsReturnsSimulationBootstrapPost200Response model constructor.
     * @property {module:model/AssetsReturnsSimulationBootstrapPost200Response}
     */
    AssetsReturnsSimulationBootstrapPost200Response,

    /**
     * The AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner model constructor.
     * @property {module:model/AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner}
     */
    AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInner,

    /**
     * The AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner model constructor.
     * @property {module:model/AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner}
     */
    AssetsReturnsSimulationBootstrapPost200ResponseSimulationsInnerAssetsInner,

    /**
     * The AssetsReturnsSimulationBootstrapPostRequest model constructor.
     * @property {module:model/AssetsReturnsSimulationBootstrapPostRequest}
     */
    AssetsReturnsSimulationBootstrapPostRequest,

    /**
     * The AssetsReturnsSimulationBootstrapPostRequestAssetsInner model constructor.
     * @property {module:model/AssetsReturnsSimulationBootstrapPostRequestAssetsInner}
     */
    AssetsReturnsSimulationBootstrapPostRequestAssetsInner,

    /**
     * The AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest model constructor.
     * @property {module:model/AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest}
     */
    AssetsReturnsSimulationMonteCarloCornishFisherCorrectedPostRequest,

    /**
     * The AssetsReturnsSimulationMonteCarloCornishFisherPost200Response model constructor.
     * @property {module:model/AssetsReturnsSimulationMonteCarloCornishFisherPost200Response}
     */
    AssetsReturnsSimulationMonteCarloCornishFisherPost200Response,

    /**
     * The AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner model constructor.
     * @property {module:model/AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner}
     */
    AssetsReturnsSimulationMonteCarloCornishFisherPost200ResponseSimulationsInner,

    /**
     * The AssetsReturnsSimulationMonteCarloCornishFisherPostRequest model constructor.
     * @property {module:model/AssetsReturnsSimulationMonteCarloCornishFisherPostRequest}
     */
    AssetsReturnsSimulationMonteCarloCornishFisherPostRequest,

    /**
     * The AssetsReturnsSimulationMonteCarloGaussianPostRequest model constructor.
     * @property {module:model/AssetsReturnsSimulationMonteCarloGaussianPostRequest}
     */
    AssetsReturnsSimulationMonteCarloGaussianPostRequest,

    /**
     * The AssetsReturnsTurbulencePartitionedPost200Response model constructor.
     * @property {module:model/AssetsReturnsTurbulencePartitionedPost200Response}
     */
    AssetsReturnsTurbulencePartitionedPost200Response,

    /**
     * The AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner}
     */
    AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInner,

    /**
     * The AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner model constructor.
     * @property {module:model/AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner}
     */
    AssetsReturnsTurbulencePartitionedPost200ResponseAssetsInnerAssetTurbulencePartitionedReturnsInner,

    /**
     * The AssetsReturnsTurbulencePartitionedPostRequest model constructor.
     * @property {module:model/AssetsReturnsTurbulencePartitionedPostRequest}
     */
    AssetsReturnsTurbulencePartitionedPostRequest,

    /**
     * The AssetsSkewnessPost200Response model constructor.
     * @property {module:model/AssetsSkewnessPost200Response}
     */
    AssetsSkewnessPost200Response,

    /**
     * The AssetsSkewnessPost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsSkewnessPost200ResponseAssetsInner}
     */
    AssetsSkewnessPost200ResponseAssetsInner,

    /**
     * The AssetsSkewnessPostRequest model constructor.
     * @property {module:model/AssetsSkewnessPostRequest}
     */
    AssetsSkewnessPostRequest,

    /**
     * The AssetsSkewnessPostRequestAssetsInner model constructor.
     * @property {module:model/AssetsSkewnessPostRequestAssetsInner}
     */
    AssetsSkewnessPostRequestAssetsInner,

    /**
     * The AssetsVariancePost200Response model constructor.
     * @property {module:model/AssetsVariancePost200Response}
     */
    AssetsVariancePost200Response,

    /**
     * The AssetsVariancePost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsVariancePost200ResponseAssetsInner}
     */
    AssetsVariancePost200ResponseAssetsInner,

    /**
     * The AssetsVariancePostRequest model constructor.
     * @property {module:model/AssetsVariancePostRequest}
     */
    AssetsVariancePostRequest,

    /**
     * The AssetsVariancePostRequestOneOf model constructor.
     * @property {module:model/AssetsVariancePostRequestOneOf}
     */
    AssetsVariancePostRequestOneOf,

    /**
     * The AssetsVariancePostRequestOneOf1 model constructor.
     * @property {module:model/AssetsVariancePostRequestOneOf1}
     */
    AssetsVariancePostRequestOneOf1,

    /**
     * The AssetsVariancePostRequestOneOf1AssetsInner model constructor.
     * @property {module:model/AssetsVariancePostRequestOneOf1AssetsInner}
     */
    AssetsVariancePostRequestOneOf1AssetsInner,

    /**
     * The AssetsVariancePostRequestOneOfAssetsInner model constructor.
     * @property {module:model/AssetsVariancePostRequestOneOfAssetsInner}
     */
    AssetsVariancePostRequestOneOfAssetsInner,

    /**
     * The AssetsVolatilityPost200Response model constructor.
     * @property {module:model/AssetsVolatilityPost200Response}
     */
    AssetsVolatilityPost200Response,

    /**
     * The AssetsVolatilityPost200ResponseAssetsInner model constructor.
     * @property {module:model/AssetsVolatilityPost200ResponseAssetsInner}
     */
    AssetsVolatilityPost200ResponseAssetsInner,

    /**
     * The AssetsVolatilityPostRequest model constructor.
     * @property {module:model/AssetsVolatilityPostRequest}
     */
    AssetsVolatilityPostRequest,

    /**
     * The AssetsVolatilityPostRequestOneOf model constructor.
     * @property {module:model/AssetsVolatilityPostRequestOneOf}
     */
    AssetsVolatilityPostRequestOneOf,

    /**
     * The AssetsVolatilityPostRequestOneOfAssetsInner model constructor.
     * @property {module:model/AssetsVolatilityPostRequestOneOfAssetsInner}
     */
    AssetsVolatilityPostRequestOneOfAssetsInner,

    /**
     * The FactorsResidualizationPost200Response model constructor.
     * @property {module:model/FactorsResidualizationPost200Response}
     */
    FactorsResidualizationPost200Response,

    /**
     * The FactorsResidualizationPostRequest model constructor.
     * @property {module:model/FactorsResidualizationPostRequest}
     */
    FactorsResidualizationPostRequest,

    /**
     * The FactorsResidualizationPostRequestFactorsInner model constructor.
     * @property {module:model/FactorsResidualizationPostRequestFactorsInner}
     */
    FactorsResidualizationPostRequestFactorsInner,

    /**
     * The PortfolioAnalysisAlphaPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisAlphaPost200Response}
     */
    PortfolioAnalysisAlphaPost200Response,

    /**
     * The PortfolioAnalysisAlphaPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisAlphaPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisAlphaPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisAlphaPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisAlphaPostRequest}
     */
    PortfolioAnalysisAlphaPostRequest,

    /**
     * The PortfolioAnalysisAlphaPostRequestOneOf model constructor.
     * @property {module:model/PortfolioAnalysisAlphaPostRequestOneOf}
     */
    PortfolioAnalysisAlphaPostRequestOneOf,

    /**
     * The PortfolioAnalysisAlphaPostRequestOneOf1 model constructor.
     * @property {module:model/PortfolioAnalysisAlphaPostRequestOneOf1}
     */
    PortfolioAnalysisAlphaPostRequestOneOf1,

    /**
     * The PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner}
     */
    PortfolioAnalysisAlphaPostRequestOneOfPortfoliosInner,

    /**
     * The PortfolioAnalysisBetaPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisBetaPost200Response}
     */
    PortfolioAnalysisBetaPost200Response,

    /**
     * The PortfolioAnalysisBetaPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisBetaPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisBetaPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisContributionsReturnPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisContributionsReturnPost200Response}
     */
    PortfolioAnalysisContributionsReturnPost200Response,

    /**
     * The PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisContributionsReturnPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisContributionsReturnPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisContributionsReturnPostRequest}
     */
    PortfolioAnalysisContributionsReturnPostRequest,

    /**
     * The PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner}
     */
    PortfolioAnalysisContributionsReturnPostRequestPortfoliosInner,

    /**
     * The PortfolioAnalysisContributionsRiskPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisContributionsRiskPost200Response}
     */
    PortfolioAnalysisContributionsRiskPost200Response,

    /**
     * The PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisContributionsRiskPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisContributionsRiskPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisContributionsRiskPostRequest}
     */
    PortfolioAnalysisContributionsRiskPostRequest,

    /**
     * The PortfolioAnalysisCorrelationSpectrumPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisCorrelationSpectrumPost200Response}
     */
    PortfolioAnalysisCorrelationSpectrumPost200Response,

    /**
     * The PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisCorrelationSpectrumPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisCorrelationSpectrumPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisCorrelationSpectrumPostRequest}
     */
    PortfolioAnalysisCorrelationSpectrumPostRequest,

    /**
     * The PortfolioAnalysisCorrelationSpectrumPostRequestOneOf model constructor.
     * @property {module:model/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf}
     */
    PortfolioAnalysisCorrelationSpectrumPostRequestOneOf,

    /**
     * The PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1 model constructor.
     * @property {module:model/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1}
     */
    PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1,

    /**
     * The PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner model constructor.
     * @property {module:model/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner}
     */
    PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1AssetsInner,

    /**
     * The PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner}
     */
    PortfolioAnalysisCorrelationSpectrumPostRequestOneOf1PortfoliosInner,

    /**
     * The PortfolioAnalysisDiversificationRatioPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisDiversificationRatioPost200Response}
     */
    PortfolioAnalysisDiversificationRatioPost200Response,

    /**
     * The PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisDiversificationRatioPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisDrawdownsPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisDrawdownsPost200Response}
     */
    PortfolioAnalysisDrawdownsPost200Response,

    /**
     * The PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner model constructor.
     * @property {module:model/PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner}
     */
    PortfolioAnalysisDrawdownsPost200ResponsePortfoliosInnerPortfolioWorstDrawdownsInner,

    /**
     * The PortfolioAnalysisDrawdownsPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisDrawdownsPostRequest}
     */
    PortfolioAnalysisDrawdownsPostRequest,

    /**
     * The PortfolioAnalysisDrawdownsPostRequestPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisDrawdownsPostRequestPortfoliosInner}
     */
    PortfolioAnalysisDrawdownsPostRequestPortfoliosInner,

    /**
     * The PortfolioAnalysisEffectiveNumberOfBetsPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisEffectiveNumberOfBetsPost200Response}
     */
    PortfolioAnalysisEffectiveNumberOfBetsPost200Response,

    /**
     * The PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisEffectiveNumberOfBetsPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisEffectiveNumberOfBetsPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisEffectiveNumberOfBetsPostRequest}
     */
    PortfolioAnalysisEffectiveNumberOfBetsPostRequest,

    /**
     * The PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner}
     */
    PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner,

    /**
     * The PortfolioAnalysisFactorsExposuresPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisFactorsExposuresPost200Response}
     */
    PortfolioAnalysisFactorsExposuresPost200Response,

    /**
     * The PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisFactorsExposuresPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisFactorsExposuresPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisFactorsExposuresPostRequest}
     */
    PortfolioAnalysisFactorsExposuresPostRequest,

    /**
     * The PortfolioAnalysisFactorsExposuresPostRequestFactorsInner model constructor.
     * @property {module:model/PortfolioAnalysisFactorsExposuresPostRequestFactorsInner}
     */
    PortfolioAnalysisFactorsExposuresPostRequestFactorsInner,

    /**
     * The PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner}
     */
    PortfolioAnalysisFactorsExposuresPostRequestPortfoliosInner,

    /**
     * The PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response}
     */
    PortfolioAnalysisMeanVarianceEfficientFrontierPost200Response,

    /**
     * The PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisMeanVarianceEfficientFrontierPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest}
     */
    PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest,

    /**
     * The PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints model constructor.
     * @property {module:model/PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints}
     */
    PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints,

    /**
     * The PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest}
     */
    PortfolioAnalysisMeanVarianceMinimumVarianceFrontierPostRequest,

    /**
     * The PortfolioAnalysisReturnPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisReturnPost200Response}
     */
    PortfolioAnalysisReturnPost200Response,

    /**
     * The PortfolioAnalysisReturnPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisReturnPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisReturnPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisReturnPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisReturnPostRequest}
     */
    PortfolioAnalysisReturnPostRequest,

    /**
     * The PortfolioAnalysisReturnPostRequestOneOf model constructor.
     * @property {module:model/PortfolioAnalysisReturnPostRequestOneOf}
     */
    PortfolioAnalysisReturnPostRequestOneOf,

    /**
     * The PortfolioAnalysisReturnPostRequestOneOf1 model constructor.
     * @property {module:model/PortfolioAnalysisReturnPostRequestOneOf1}
     */
    PortfolioAnalysisReturnPostRequestOneOf1,

    /**
     * The PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner}
     */
    PortfolioAnalysisReturnPostRequestOneOf1PortfoliosInner,

    /**
     * The PortfolioAnalysisReturnsAveragePost200Response model constructor.
     * @property {module:model/PortfolioAnalysisReturnsAveragePost200Response}
     */
    PortfolioAnalysisReturnsAveragePost200Response,

    /**
     * The PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisReturnsAveragePost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response}
     */
    PortfolioAnalysisSharpeRatioBiasAdjustedPost200Response,

    /**
     * The PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisSharpeRatioBiasAdjustedPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest}
     */
    PortfolioAnalysisSharpeRatioBiasAdjustedPostRequest,

    /**
     * The PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner}
     */
    PortfolioAnalysisSharpeRatioBiasAdjustedPostRequestPortfoliosInner,

    /**
     * The PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response}
     */
    PortfolioAnalysisSharpeRatioConfidenceIntervalPost200Response,

    /**
     * The PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisSharpeRatioConfidenceIntervalPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest}
     */
    PortfolioAnalysisSharpeRatioConfidenceIntervalPostRequest,

    /**
     * The PortfolioAnalysisSharpeRatioPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioPost200Response}
     */
    PortfolioAnalysisSharpeRatioPost200Response,

    /**
     * The PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisSharpeRatioPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisSharpeRatioPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioPostRequest}
     */
    PortfolioAnalysisSharpeRatioPostRequest,

    /**
     * The PortfolioAnalysisSharpeRatioPostRequestOneOf model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOf}
     */
    PortfolioAnalysisSharpeRatioPostRequestOneOf,

    /**
     * The PortfolioAnalysisSharpeRatioPostRequestOneOf1 model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOf1}
     */
    PortfolioAnalysisSharpeRatioPostRequestOneOf1,

    /**
     * The PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner}
     */
    PortfolioAnalysisSharpeRatioPostRequestOneOfPortfoliosInner,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response}
     */
    PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200Response,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest}
     */
    PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequest,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf}
     */
    PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1 model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1}
     */
    PortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthPostRequestOneOf1,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticPost200Response}
     */
    PortfolioAnalysisSharpeRatioProbabilisticPost200Response,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisSharpeRatioProbabilisticPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticPostRequest}
     */
    PortfolioAnalysisSharpeRatioProbabilisticPostRequest,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf}
     */
    PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1 model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1}
     */
    PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1,

    /**
     * The PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner}
     */
    PortfolioAnalysisSharpeRatioProbabilisticPostRequestOneOf1PortfoliosInner,

    /**
     * The PortfolioAnalysisTrackingErrorPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisTrackingErrorPost200Response}
     */
    PortfolioAnalysisTrackingErrorPost200Response,

    /**
     * The PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisTrackingErrorPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisTrackingErrorPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisTrackingErrorPostRequest}
     */
    PortfolioAnalysisTrackingErrorPostRequest,

    /**
     * The PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner}
     */
    PortfolioAnalysisTrackingErrorPostRequestPortfoliosInner,

    /**
     * The PortfolioAnalysisUlcerIndexPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisUlcerIndexPost200Response}
     */
    PortfolioAnalysisUlcerIndexPost200Response,

    /**
     * The PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisUlcerIndexPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisUlcerPerformanceIndexPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisUlcerPerformanceIndexPost200Response}
     */
    PortfolioAnalysisUlcerPerformanceIndexPost200Response,

    /**
     * The PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisUlcerPerformanceIndexPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response}
     */
    PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200Response,

    /**
     * The PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisValueAtRiskConditionalCornishFisherPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest}
     */
    PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequest,

    /**
     * The PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner}
     */
    PortfolioAnalysisValueAtRiskConditionalCornishFisherPostRequestPortfoliosInner,

    /**
     * The PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest}
     */
    PortfolioAnalysisValueAtRiskConditionalGaussianPostRequest,

    /**
     * The PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner}
     */
    PortfolioAnalysisValueAtRiskConditionalGaussianPostRequestPortfoliosInner,

    /**
     * The PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest}
     */
    PortfolioAnalysisValueAtRiskConditionalHistoricalPostRequest,

    /**
     * The PortfolioAnalysisValueAtRiskCornishFisherPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskCornishFisherPost200Response}
     */
    PortfolioAnalysisValueAtRiskCornishFisherPost200Response,

    /**
     * The PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisValueAtRiskCornishFisherPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisVolatilityPost200Response model constructor.
     * @property {module:model/PortfolioAnalysisVolatilityPost200Response}
     */
    PortfolioAnalysisVolatilityPost200Response,

    /**
     * The PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner}
     */
    PortfolioAnalysisVolatilityPost200ResponsePortfoliosInner,

    /**
     * The PortfolioAnalysisVolatilityPostRequest model constructor.
     * @property {module:model/PortfolioAnalysisVolatilityPostRequest}
     */
    PortfolioAnalysisVolatilityPostRequest,

    /**
     * The PortfolioAnalysisVolatilityPostRequestOneOf model constructor.
     * @property {module:model/PortfolioAnalysisVolatilityPostRequestOneOf}
     */
    PortfolioAnalysisVolatilityPostRequestOneOf,

    /**
     * The PortfolioConstructionInvestablePost200Response model constructor.
     * @property {module:model/PortfolioConstructionInvestablePost200Response}
     */
    PortfolioConstructionInvestablePost200Response,

    /**
     * The PortfolioConstructionInvestablePostRequest model constructor.
     * @property {module:model/PortfolioConstructionInvestablePostRequest}
     */
    PortfolioConstructionInvestablePostRequest,

    /**
     * The PortfolioConstructionMimickingPostRequest model constructor.
     * @property {module:model/PortfolioConstructionMimickingPostRequest}
     */
    PortfolioConstructionMimickingPostRequest,

    /**
     * The PortfolioConstructionRandomPost200Response model constructor.
     * @property {module:model/PortfolioConstructionRandomPost200Response}
     */
    PortfolioConstructionRandomPost200Response,

    /**
     * The PortfolioConstructionRandomPostRequest model constructor.
     * @property {module:model/PortfolioConstructionRandomPostRequest}
     */
    PortfolioConstructionRandomPostRequest,

    /**
     * The PortfolioConstructionRandomPostRequestConstraints model constructor.
     * @property {module:model/PortfolioConstructionRandomPostRequestConstraints}
     */
    PortfolioConstructionRandomPostRequestConstraints,

    /**
     * The PortfolioOptimizationEqualRiskContributionsPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationEqualRiskContributionsPostRequest}
     */
    PortfolioOptimizationEqualRiskContributionsPostRequest,

    /**
     * The PortfolioOptimizationEqualRiskContributionsPostRequestConstraints model constructor.
     * @property {module:model/PortfolioOptimizationEqualRiskContributionsPostRequestConstraints}
     */
    PortfolioOptimizationEqualRiskContributionsPostRequestConstraints,

    /**
     * The PortfolioOptimizationEqualSharpeRatioContributionsPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationEqualSharpeRatioContributionsPostRequest}
     */
    PortfolioOptimizationEqualSharpeRatioContributionsPostRequest,

    /**
     * The PortfolioOptimizationEqualVolatilityWeightedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationEqualVolatilityWeightedPostRequest}
     */
    PortfolioOptimizationEqualVolatilityWeightedPostRequest,

    /**
     * The PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest}
     */
    PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest,

    /**
     * The PortfolioOptimizationHierarchicalRiskParityPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationHierarchicalRiskParityPostRequest}
     */
    PortfolioOptimizationHierarchicalRiskParityPostRequest,

    /**
     * The PortfolioOptimizationInverseVarianceWeightedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationInverseVarianceWeightedPostRequest}
     */
    PortfolioOptimizationInverseVarianceWeightedPostRequest,

    /**
     * The PortfolioOptimizationMarketCapitalizationWeightedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMarketCapitalizationWeightedPostRequest}
     */
    PortfolioOptimizationMarketCapitalizationWeightedPostRequest,

    /**
     * The PortfolioOptimizationMaximumDecorrelationPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMaximumDecorrelationPostRequest}
     */
    PortfolioOptimizationMaximumDecorrelationPostRequest,

    /**
     * The PortfolioOptimizationMaximumReturnDiversifiedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMaximumReturnDiversifiedPostRequest}
     */
    PortfolioOptimizationMaximumReturnDiversifiedPostRequest,

    /**
     * The PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints model constructor.
     * @property {module:model/PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints}
     */
    PortfolioOptimizationMaximumReturnDiversifiedPostRequestConstraints,

    /**
     * The PortfolioOptimizationMaximumReturnPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMaximumReturnPostRequest}
     */
    PortfolioOptimizationMaximumReturnPostRequest,

    /**
     * The PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest}
     */
    PortfolioOptimizationMaximumReturnSubsetResamplingBasedPostRequest,

    /**
     * The PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest}
     */
    PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequest,

    /**
     * The PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints model constructor.
     * @property {module:model/PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints}
     */
    PortfolioOptimizationMaximumSharpeRatioDiversifiedPostRequestConstraints,

    /**
     * The PortfolioOptimizationMaximumSharpeRatioPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMaximumSharpeRatioPostRequest}
     */
    PortfolioOptimizationMaximumSharpeRatioPostRequest,

    /**
     * The PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest}
     */
    PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest,

    /**
     * The PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest}
     */
    PortfolioOptimizationMaximumUlcerPerformanceIndexPostRequest,

    /**
     * The PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest}
     */
    PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequest,

    /**
     * The PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints model constructor.
     * @property {module:model/PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints}
     */
    PortfolioOptimizationMeanVarianceEfficientDiversifiedPostRequestConstraints,

    /**
     * The PortfolioOptimizationMeanVarianceEfficientPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMeanVarianceEfficientPostRequest}
     */
    PortfolioOptimizationMeanVarianceEfficientPostRequest,

    /**
     * The PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints model constructor.
     * @property {module:model/PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints}
     */
    PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints,

    /**
     * The PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest}
     */
    PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest,

    /**
     * The PortfolioOptimizationMinimumCorrelationPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMinimumCorrelationPostRequest}
     */
    PortfolioOptimizationMinimumCorrelationPostRequest,

    /**
     * The PortfolioOptimizationMinimumUlcerIndexPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMinimumUlcerIndexPostRequest}
     */
    PortfolioOptimizationMinimumUlcerIndexPostRequest,

    /**
     * The PortfolioOptimizationMinimumVarianceDiversifiedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMinimumVarianceDiversifiedPostRequest}
     */
    PortfolioOptimizationMinimumVarianceDiversifiedPostRequest,

    /**
     * The PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints model constructor.
     * @property {module:model/PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints}
     */
    PortfolioOptimizationMinimumVarianceDiversifiedPostRequestConstraints,

    /**
     * The PortfolioOptimizationMinimumVariancePostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMinimumVariancePostRequest}
     */
    PortfolioOptimizationMinimumVariancePostRequest,

    /**
     * The PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest}
     */
    PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest,

    /**
     * The PortfolioOptimizationMostDiversifiedPostRequest model constructor.
     * @property {module:model/PortfolioOptimizationMostDiversifiedPostRequest}
     */
    PortfolioOptimizationMostDiversifiedPostRequest,

    /**
     * The PortfolioSimulationRebalancingDriftWeightPost200Response model constructor.
     * @property {module:model/PortfolioSimulationRebalancingDriftWeightPost200Response}
     */
    PortfolioSimulationRebalancingDriftWeightPost200Response,

    /**
     * The PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner model constructor.
     * @property {module:model/PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner}
     */
    PortfolioSimulationRebalancingDriftWeightPost200ResponsePortfoliosInner,

    /**
     * The PortfolioSimulationRebalancingDriftWeightPostRequest model constructor.
     * @property {module:model/PortfolioSimulationRebalancingDriftWeightPostRequest}
     */
    PortfolioSimulationRebalancingDriftWeightPostRequest,

    /**
     * The PortfolioSimulationRebalancingRandomWeightPostRequest model constructor.
     * @property {module:model/PortfolioSimulationRebalancingRandomWeightPostRequest}
     */
    PortfolioSimulationRebalancingRandomWeightPostRequest,

    /**
    * The AssetsAnalysisApi service constructor.
    * @property {module:api/AssetsAnalysisApi}
    */
    AssetsAnalysisApi,

    /**
    * The AssetsCorrelationMatrixApi service constructor.
    * @property {module:api/AssetsCorrelationMatrixApi}
    */
    AssetsCorrelationMatrixApi,

    /**
    * The AssetsCovarianceMatrixApi service constructor.
    * @property {module:api/AssetsCovarianceMatrixApi}
    */
    AssetsCovarianceMatrixApi,

    /**
    * The AssetsKurtosisApi service constructor.
    * @property {module:api/AssetsKurtosisApi}
    */
    AssetsKurtosisApi,

    /**
    * The AssetsMonteCarloReturnsSimulationApi service constructor.
    * @property {module:api/AssetsMonteCarloReturnsSimulationApi}
    */
    AssetsMonteCarloReturnsSimulationApi,

    /**
    * The AssetsPricesApi service constructor.
    * @property {module:api/AssetsPricesApi}
    */
    AssetsPricesApi,

    /**
    * The AssetsReturnsApi service constructor.
    * @property {module:api/AssetsReturnsApi}
    */
    AssetsReturnsApi,

    /**
    * The AssetsReturnsSimulationApi service constructor.
    * @property {module:api/AssetsReturnsSimulationApi}
    */
    AssetsReturnsSimulationApi,

    /**
    * The AssetsSkewnessApi service constructor.
    * @property {module:api/AssetsSkewnessApi}
    */
    AssetsSkewnessApi,

    /**
    * The AssetsVarianceApi service constructor.
    * @property {module:api/AssetsVarianceApi}
    */
    AssetsVarianceApi,

    /**
    * The AssetsVolatilityApi service constructor.
    * @property {module:api/AssetsVolatilityApi}
    */
    AssetsVolatilityApi,

    /**
    * The FactorsApi service constructor.
    * @property {module:api/FactorsApi}
    */
    FactorsApi,

    /**
    * The PortfolioAnalysisApi service constructor.
    * @property {module:api/PortfolioAnalysisApi}
    */
    PortfolioAnalysisApi,

    /**
    * The PortfolioAnalysisConditionalValueAtRiskApi service constructor.
    * @property {module:api/PortfolioAnalysisConditionalValueAtRiskApi}
    */
    PortfolioAnalysisConditionalValueAtRiskApi,

    /**
    * The PortfolioAnalysisSharpeRatioApi service constructor.
    * @property {module:api/PortfolioAnalysisSharpeRatioApi}
    */
    PortfolioAnalysisSharpeRatioApi,

    /**
    * The PortfolioAnalysisValueAtRiskApi service constructor.
    * @property {module:api/PortfolioAnalysisValueAtRiskApi}
    */
    PortfolioAnalysisValueAtRiskApi,

    /**
    * The PortfolioConstructionApi service constructor.
    * @property {module:api/PortfolioConstructionApi}
    */
    PortfolioConstructionApi,

    /**
    * The PortfolioOptimizationApi service constructor.
    * @property {module:api/PortfolioOptimizationApi}
    */
    PortfolioOptimizationApi,

    /**
    * The PortfolioOptimizationMeanVarianceApi service constructor.
    * @property {module:api/PortfolioOptimizationMeanVarianceApi}
    */
    PortfolioOptimizationMeanVarianceApi,

    /**
    * The PortfolioSimulationApi service constructor.
    * @property {module:api/PortfolioSimulationApi}
    */
    PortfolioSimulationApi
};
