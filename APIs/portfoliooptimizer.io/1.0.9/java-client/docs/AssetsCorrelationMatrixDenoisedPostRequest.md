

# AssetsCorrelationMatrixDenoisedPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** |  |  |
|**assetsCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j |  |
|**assetsCorrelationMatrixAspectRatio** | **BigDecimal** | The aspect ratio of the asset correlation matrix, defined as the number of assets divided by the number of asset returns per asset used to compute the asset correlation matrix |  |
|**denoisingMethod** | [**DenoisingMethodEnum**](#DenoisingMethodEnum) | The method used to denoise the asset correlation matrix |  [optional] |



## Enum: DenoisingMethodEnum

| Name | Value |
|---- | -----|
| EIGENVALUES_CLIPPING | &quot;eigenvaluesClipping&quot; |



