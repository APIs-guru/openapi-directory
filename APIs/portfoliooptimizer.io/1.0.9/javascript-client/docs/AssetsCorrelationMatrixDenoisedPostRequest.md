# PortfolioOptimizer.AssetsCorrelationMatrixDenoisedPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** |  | 
**assetsCorrelationMatrix** | **[[Number]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**assetsCorrelationMatrixAspectRatio** | **Number** | The aspect ratio of the asset correlation matrix, defined as the number of assets divided by the number of asset returns per asset used to compute the asset correlation matrix | 
**denoisingMethod** | **String** | The method used to denoise the asset correlation matrix | [optional] [default to &#39;eigenvaluesClipping&#39;]



## Enum: DenoisingMethodEnum


* `eigenvaluesClipping` (value: `"eigenvaluesClipping"`)




