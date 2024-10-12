

# PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** | The number of assets |  |
|**assetsCovarianceMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j |  |
|**assetsReturns** | **List&lt;BigDecimal&gt;** | assetsReturns[i] is the arithmetic return of asset i |  |
|**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  |  [optional] |
|**portfolios** | **Integer** | The number of portfolios to compute on the mean-variance efficient frontier |  [optional] |



