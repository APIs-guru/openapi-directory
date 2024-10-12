

# PortfolioOptimizationHierarchicalRiskParityPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**assets** | **Integer** | The number of assets |  |
|**assetsCovarianceMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j |  |
|**clusteringMethod** | [**ClusteringMethodEnum**](#ClusteringMethodEnum) | The hierarchical clustering method to use |  [optional] |
|**clusteringOrdering** | [**ClusteringOrderingEnum**](#ClusteringOrderingEnum) | The order to impose on the hierarchical clustering tree leaves |  [optional] |
|**constraints** | [**PortfolioConstructionRandomPostRequestConstraints**](PortfolioConstructionRandomPostRequestConstraints.md) |  |  [optional] |



## Enum: ClusteringMethodEnum

| Name | Value |
|---- | -----|
| SINGLE_LINKAGE | &quot;singleLinkage&quot; |
| AVERAGE_LINKAGE | &quot;averageLinkage&quot; |
| COMPLETE_LINKAGE | &quot;completeLinkage&quot; |
| WARD_LINKAGE | &quot;wardLinkage&quot; |



## Enum: ClusteringOrderingEnum

| Name | Value |
|---- | -----|
| R_HCLUST | &quot;r-hclust&quot; |
| OPTIMAL | &quot;optimal&quot; |



