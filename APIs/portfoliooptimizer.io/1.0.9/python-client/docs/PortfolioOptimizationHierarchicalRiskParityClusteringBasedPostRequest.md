# PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**across_cluster_allocation_method** | **str** | The allocation method to use across clusters | [optional] [default to 'equalWeighting']
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**clustering_method** | **str** | The hierarchical clustering method to use | [optional] [default to 'wardLinkage']
**clustering_ordering** | **str** | The order to impose on the hierarchical clustering tree leaves | [optional] [default to 'r-hclust']
**clusters** | **int** | The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference | [optional] 
**constraints** | [**PortfolioConstructionRandomPostRequestConstraints**](PortfolioConstructionRandomPostRequestConstraints.md) |  | [optional] 
**within_cluster_allocation_method** | **str** | The allocation method to use within clusters | [optional] [default to 'equalWeighting']

## Example

```python
from openapi_client.models.portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request import PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest from a JSON string
portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request_instance = PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request_dict = portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest from a dict
portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request_from_dict = PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.from_dict(portfolio_optimization_hierarchical_risk_parity_clustering_based_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


