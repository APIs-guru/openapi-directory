

# PortfolioAnalysisEffectiveNumberOfBetsPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** | The number of assets |  |
|**assetsCovarianceMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j |  |
|**factorsExtractionMethod** | [**FactorsExtractionMethodEnum**](#FactorsExtractionMethodEnum) | The method used to extract the uncorrelated risk factors from the asset covariance matrix |  [optional] |
|**portfolios** | [**List&lt;PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner&gt;**](PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner.md) |  |  |



## Enum: FactorsExtractionMethodEnum

| Name | Value |
|---- | -----|
| PRINCIPAL_COMPONENT_ANALYSIS | &quot;principalComponentAnalysis&quot; |
| EXACT_MINIMUM_LINEAR_TORSION | &quot;exactMinimumLinearTorsion&quot; |
| APPROXIMATE_MINIMUM_LINEAR_TORSION | &quot;approximateMinimumLinearTorsion&quot; |



