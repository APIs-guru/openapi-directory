

# AssetsCorrelationMatrixDistancePostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** |  |  |
|**assetsCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j |  |
|**distanceMetric** | [**DistanceMetricEnum**](#DistanceMetricEnum) | The distance metric to use to compute the distance between the asset correlation matrix and the reference correlation matrix |  [optional] |
|**referenceCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | referenceCorrelationMatrix[i][j] is the reference correlation between the asset i and the asset j |  |



## Enum: DistanceMetricEnum

| Name | Value |
|---- | -----|
| EUCLIDEAN | &quot;euclidean&quot; |
| CORRELATION_MATRIX | &quot;correlationMatrix&quot; |
| BURES | &quot;bures&quot; |



