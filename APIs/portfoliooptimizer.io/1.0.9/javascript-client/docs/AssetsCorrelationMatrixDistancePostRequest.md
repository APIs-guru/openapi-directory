# PortfolioOptimizer.AssetsCorrelationMatrixDistancePostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** |  | 
**assetsCorrelationMatrix** | **[[Number]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**distanceMetric** | **String** | The distance metric to use to compute the distance between the asset correlation matrix and the reference correlation matrix | [optional] [default to &#39;euclidean&#39;]
**referenceCorrelationMatrix** | **[[Number]]** | referenceCorrelationMatrix[i][j] is the reference correlation between the asset i and the asset j | 



## Enum: DistanceMetricEnum


* `euclidean` (value: `"euclidean"`)

* `correlationMatrix` (value: `"correlationMatrix"`)

* `bures` (value: `"bures"`)




