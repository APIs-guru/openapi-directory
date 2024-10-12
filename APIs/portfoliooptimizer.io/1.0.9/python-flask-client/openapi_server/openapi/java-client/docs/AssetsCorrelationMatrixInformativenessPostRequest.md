

# AssetsCorrelationMatrixInformativenessPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** |  |  |
|**assetsCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j |  |
|**distanceMetric** | [**DistanceMetricEnum**](#DistanceMetricEnum) | The distance metric to use to compute the informativeness of the asset correlation matrix |  [optional] |



## Enum: DistanceMetricEnum

| Name | Value |
|---- | -----|
| EUCLIDEAN | &quot;euclidean&quot; |
| CORRELATION_MATRIX | &quot;correlationMatrix&quot; |
| BURES | &quot;bures&quot; |



