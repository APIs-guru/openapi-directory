# PortfolioOptimizer.AssetsCorrelationMatrixTheoryImpliedPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**[AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner]**](AssetsCorrelationMatrixTheoryImpliedPostRequestAssetsInner.md) |  | 
**assetsCorrelationMatrix** | **[[Number]]** | assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j | 
**clusteringMethod** | **String** | The hierarchical clustering method to use | [optional] [default to &#39;averageLinkage&#39;]



## Enum: ClusteringMethodEnum


* `singleLinkage` (value: `"singleLinkage"`)

* `averageLinkage` (value: `"averageLinkage"`)

* `completeLinkage` (value: `"completeLinkage"`)

* `wardLinkage` (value: `"wardLinkage"`)




