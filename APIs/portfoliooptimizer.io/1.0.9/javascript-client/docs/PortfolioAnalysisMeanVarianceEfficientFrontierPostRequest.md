# PortfolioOptimizer.PortfolioAnalysisMeanVarianceEfficientFrontierPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** | The number of assets | 
**assetsCovarianceMatrix** | **[[Number]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**assetsReturns** | **[Number]** | assetsReturns[i] is the arithmetic return of asset i | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 
**portfolios** | **Number** | The number of portfolios to compute on the mean-variance efficient frontier | [optional] [default to 25]


