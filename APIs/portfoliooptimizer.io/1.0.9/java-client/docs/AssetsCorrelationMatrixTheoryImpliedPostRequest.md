

# AssetsCorrelationMatrixTheoryImpliedPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | [**List&lt;AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner&gt;**](AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.md) |  |  |
|**assetsCorrelationMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j |  |
|**clusteringMethod** | [**ClusteringMethodEnum**](#ClusteringMethodEnum) | The hierarchical clustering method to use |  [optional] |



## Enum: ClusteringMethodEnum

| Name | Value |
|---- | -----|
| SINGLE_LINKAGE | &quot;singleLinkage&quot; |
| AVERAGE_LINKAGE | &quot;averageLinkage&quot; |
| COMPLETE_LINKAGE | &quot;completeLinkage&quot; |
| WARD_LINKAGE | &quot;wardLinkage&quot; |



