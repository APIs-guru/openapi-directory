# PortfolioOptimizer.PortfolioOptimizationMinimumVarianceSubsetResamplingBasedPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** | The number of assets | 
**assetsCovarianceMatrix** | **[[Number]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assetsReturns** | **[Number]** | assetsReturns[i] is the arithmetic return of asset i | [optional] 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 
**subsetPortfolios** | **Number** | The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling | [optional] [default to 128]
**subsetPortfoliosAggregationMethod** | **String** | The method to aggregate the subset portfolios | [optional] [default to &#39;average&#39;]
**subsetPortfoliosEnumerationMethod** | **String** | The method to enumerate the subset portfolios | [optional] [default to &#39;randomSampling&#39;]
**subsetSize** | **Number** | The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets | [optional] 



## Enum: SubsetPortfoliosAggregationMethodEnum


* `average` (value: `"average"`)

* `median` (value: `"median"`)





## Enum: SubsetPortfoliosEnumerationMethodEnum


* `complete` (value: `"complete"`)

* `randomSampling` (value: `"randomSampling"`)




