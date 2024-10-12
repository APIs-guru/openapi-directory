# PortfolioOptimizer.PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acrossClusterAllocationMethod** | **String** | The allocation method to use across clusters | [optional] [default to &#39;equalWeighting&#39;]
**assets** | **Number** | The number of assets | 
**assetsCovarianceMatrix** | **[[Number]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**clusteringMethod** | **String** | The hierarchical clustering method to use | [optional] [default to &#39;wardLinkage&#39;]
**clusteringOrdering** | **String** | The order to impose on the hierarchical clustering tree leaves | [optional] [default to &#39;r-hclust&#39;]
**clusters** | **Number** | The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference | [optional] 
**constraints** | [**PortfolioConstructionRandomPostRequestConstraints**](PortfolioConstructionRandomPostRequestConstraints.md) |  | [optional] 
**withinClusterAllocationMethod** | **String** | The allocation method to use within clusters | [optional] [default to &#39;equalWeighting&#39;]



## Enum: AcrossClusterAllocationMethodEnum


* `equalWeighting` (value: `"equalWeighting"`)

* `inverseVolatility` (value: `"inverseVolatility"`)

* `inverseVariance` (value: `"inverseVariance"`)





## Enum: ClusteringMethodEnum


* `singleLinkage` (value: `"singleLinkage"`)

* `averageLinkage` (value: `"averageLinkage"`)

* `completeLinkage` (value: `"completeLinkage"`)

* `wardLinkage` (value: `"wardLinkage"`)





## Enum: ClusteringOrderingEnum


* `r-hclust` (value: `"r-hclust"`)

* `optimal` (value: `"optimal"`)





## Enum: WithinClusterAllocationMethodEnum


* `equalWeighting` (value: `"equalWeighting"`)

* `inverseVolatility` (value: `"inverseVolatility"`)

* `inverseVariance` (value: `"inverseVariance"`)




