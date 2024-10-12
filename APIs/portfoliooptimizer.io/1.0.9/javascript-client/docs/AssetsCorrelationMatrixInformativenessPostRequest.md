# PortfolioOptimizer.AssetsCorrelationMatrixInformativenessPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** |  | 
**assetsCorrelationMatrix** | **[[Number]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**distanceMetric** | **String** | The distance metric to use to compute the informativeness of the asset correlation matrix | [optional] [default to &#39;euclidean&#39;]



## Enum: DistanceMetricEnum


* `euclidean` (value: `"euclidean"`)

* `correlationMatrix` (value: `"correlationMatrix"`)

* `bures` (value: `"bures"`)




