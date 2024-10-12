# PortfolioOptimizer.PortfolioOptimizationHierarchicalRiskParityPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **Number** | The number of assets | 
**assetsCovarianceMatrix** | **[[Number]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**clusteringMethod** | **String** | The hierarchical clustering method to use | [optional] [default to &#39;singleLinkage&#39;]
**clusteringOrdering** | **String** | The order to impose on the hierarchical clustering tree leaves | [optional] [default to &#39;r-hclust&#39;]
**constraints** | [**PortfolioConstructionRandomPostRequestConstraints**](PortfolioConstructionRandomPostRequestConstraints.md) |  | [optional] 



## Enum: ClusteringMethodEnum


* `singleLinkage` (value: `"singleLinkage"`)

* `averageLinkage` (value: `"averageLinkage"`)

* `completeLinkage` (value: `"completeLinkage"`)

* `wardLinkage` (value: `"wardLinkage"`)





## Enum: ClusteringOrderingEnum


* `r-hclust` (value: `"r-hclust"`)

* `optimal` (value: `"optimal"`)




