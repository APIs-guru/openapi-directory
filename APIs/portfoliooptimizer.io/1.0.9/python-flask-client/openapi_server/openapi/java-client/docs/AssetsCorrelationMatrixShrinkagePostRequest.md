

# AssetsCorrelationMatrixShrinkagePostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** |  |  |
|**assetsCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j |  |
|**shrinkageFactor** | **BigDecimal** |  |  |
|**targetEquicorrelationMatrix** | [**TargetEquicorrelationMatrixEnum**](#TargetEquicorrelationMatrixEnum) | The shrinkage target correlation matrix |  |
|**targetCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | targetCorrelationMatrix[i][j] is the target correlation between the asset i and the asset j |  |



## Enum: TargetEquicorrelationMatrixEnum

| Name | Value |
|---- | -----|
| MINIMUM_EQUICORRELATION_MATRIX | &quot;minimumEquicorrelationMatrix&quot; |
| ZERO_EQUICORRELATION_MATRIX | &quot;zeroEquicorrelationMatrix&quot; |
| MAXIMUM_EQUICORRELATION_MATRIX | &quot;maximumEquicorrelationMatrix&quot; |



