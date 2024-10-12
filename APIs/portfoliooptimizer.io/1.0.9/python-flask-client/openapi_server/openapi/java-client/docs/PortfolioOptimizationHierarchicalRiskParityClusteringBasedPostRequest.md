

# PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**acrossClusterAllocationMethod** | [**AcrossClusterAllocationMethodEnum**](#AcrossClusterAllocationMethodEnum) | The allocation method to use across clusters |  [optional] |
|**assets** | **Integer** | The number of assets |  |
|**assetsCovarianceMatrix** | **List&lt;List&lt;BigDecimal&gt;&gt;** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j |  |
|**clusteringMethod** | [**ClusteringMethodEnum**](#ClusteringMethodEnum) | The hierarchical clustering method to use |  [optional] |
|**clusteringOrdering** | [**ClusteringOrderingEnum**](#ClusteringOrderingEnum) | The order to impose on the hierarchical clustering tree leaves |  [optional] |
|**clusters** | **Integer** | The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference |  [optional] |
|**constraints** | [**PortfolioConstructionRandomPostRequestConstraints**](PortfolioConstructionRandomPostRequestConstraints.md) |  |  [optional] |
|**withinClusterAllocationMethod** | [**WithinClusterAllocationMethodEnum**](#WithinClusterAllocationMethodEnum) | The allocation method to use within clusters |  [optional] |



## Enum: AcrossClusterAllocationMethodEnum

| Name | Value |
|---- | -----|
| EQUAL_WEIGHTING | &quot;equalWeighting&quot; |
| INVERSE_VOLATILITY | &quot;inverseVolatility&quot; |
| INVERSE_VARIANCE | &quot;inverseVariance&quot; |



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



## Enum: WithinClusterAllocationMethodEnum

| Name | Value |
|---- | -----|
| EQUAL_WEIGHTING | &quot;equalWeighting&quot; |
| INVERSE_VOLATILITY | &quot;inverseVolatility&quot; |
| INVERSE_VARIANCE | &quot;inverseVariance&quot; |



