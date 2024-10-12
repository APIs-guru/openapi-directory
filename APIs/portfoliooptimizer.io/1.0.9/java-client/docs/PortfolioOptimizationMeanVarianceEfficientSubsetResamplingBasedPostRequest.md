

# PortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** | The number of assets |  |
|**assetsCovarianceMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j |  |
|**assetsReturns** | **List&lt;BigDecimal&gt;** | assetsReturns[i] is the arithmetic return of asset i |  |
|**constraints** | [**PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints**](PortfolioOptimizationMeanVarianceEfficientPostRequestConstraints.md) |  |  |
|**subsetPortfolios** | **Integer** | The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling |  [optional] |
|**subsetPortfoliosAggregationMethod** | [**SubsetPortfoliosAggregationMethodEnum**](#SubsetPortfoliosAggregationMethodEnum) | The method to aggregate the subset portfolios |  [optional] |
|**subsetPortfoliosEnumerationMethod** | [**SubsetPortfoliosEnumerationMethodEnum**](#SubsetPortfoliosEnumerationMethodEnum) | The method to enumerate the subset portfolios |  [optional] |
|**subsetSize** | **Integer** | The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets |  [optional] |



## Enum: SubsetPortfoliosAggregationMethodEnum

| Name | Value |
|---- | -----|
| AVERAGE | &quot;average&quot; |
| MEDIAN | &quot;median&quot; |



## Enum: SubsetPortfoliosEnumerationMethodEnum

| Name | Value |
|---- | -----|
| COMPLETE | &quot;complete&quot; |
| RANDOM_SAMPLING | &quot;randomSampling&quot; |



