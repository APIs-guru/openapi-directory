

# PortfolioOptimizationMinimumCorrelationPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** |  |  |
|**assetsCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; required if assetsReturns is not provided |  |
|**assetsVolatilities** | **List&lt;BigDecimal&gt;** | assetsVariances[i] is the volatility of the asset i; required if assetsCorrelationMatrix is provided and assetsVariances is not provided |  |



