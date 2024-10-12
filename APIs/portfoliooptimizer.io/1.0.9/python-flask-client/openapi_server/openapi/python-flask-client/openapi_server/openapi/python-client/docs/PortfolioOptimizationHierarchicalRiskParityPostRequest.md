# PortfolioOptimizationHierarchicalRiskParityPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**clustering_method** | **str** | The hierarchical clustering method to use | [optional] [default to 'singleLinkage']
**clustering_ordering** | **str** | The order to impose on the hierarchical clustering tree leaves | [optional] [default to 'r-hclust']
**constraints** | [**PortfolioConstructionRandomPostRequestConstraints**](PortfolioConstructionRandomPostRequestConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_optimization_hierarchical_risk_parity_post_request import PortfolioOptimizationHierarchicalRiskParityPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationHierarchicalRiskParityPostRequest from a JSON string
portfolio_optimization_hierarchical_risk_parity_post_request_instance = PortfolioOptimizationHierarchicalRiskParityPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationHierarchicalRiskParityPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_hierarchical_risk_parity_post_request_dict = portfolio_optimization_hierarchical_risk_parity_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationHierarchicalRiskParityPostRequest from a dict
portfolio_optimization_hierarchical_risk_parity_post_request_from_dict = PortfolioOptimizationHierarchicalRiskParityPostRequest.from_dict(portfolio_optimization_hierarchical_risk_parity_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


