

# AssetsCorrelationMatrixNearestPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** | The number of assets |  |
|**assetsApproximateCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsApproximateCorrelationMatrix[i][i] is the approximate correlation between the asset i and the asset j |  |
|**assetsFixedCorrelations** | **List&lt;List&lt;Integer&gt;&gt;** | assetsFixedCorrelations[k] is the couple of indices (i,j) of the assets i and j for which to keep the approximate correlation assetsApproximateCorrelationMatrix[i][j] fixed |  [optional] |



