

# PortfolioOptimizationMaximumDecorrelationPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** | The number of assets |  |
|**assetsCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j |  |
|**assetsReturns** | **List&lt;BigDecimal&gt;** | assetsReturns[i] is the arithmetic return of asset i |  [optional] |
|**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  |  [optional] |



