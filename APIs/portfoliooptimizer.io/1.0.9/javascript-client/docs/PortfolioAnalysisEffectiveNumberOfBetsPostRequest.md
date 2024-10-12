# PortfolioOptimizer.PortfolioAnalysisEffectiveNumberOfBetsPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** | The number of assets | 
**assetsCovarianceMatrix** | **[[Number]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**factorsExtractionMethod** | **String** | The method used to extract the uncorrelated risk factors from the asset covariance matrix | [optional] [default to &#39;exactMinimumLinearTorsion&#39;]
**portfolios** | [**[PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner]**](PortfolioAnalysisEffectiveNumberOfBetsPostRequestPortfoliosInner.md) |  | 



## Enum: FactorsExtractionMethodEnum


* `principalComponentAnalysis` (value: `"principalComponentAnalysis"`)

* `exactMinimumLinearTorsion` (value: `"exactMinimumLinearTorsion"`)

* `approximateMinimumLinearTorsion` (value: `"approximateMinimumLinearTorsion"`)




