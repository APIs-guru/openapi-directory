# PortfolioOptimizationMostDiversifiedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_covariance_matrix** | **List[List[float]]** | assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j | 
**constraints** | [**PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints**](PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_optimization_most_diversified_post_request import PortfolioOptimizationMostDiversifiedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationMostDiversifiedPostRequest from a JSON string
portfolio_optimization_most_diversified_post_request_instance = PortfolioOptimizationMostDiversifiedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationMostDiversifiedPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_most_diversified_post_request_dict = portfolio_optimization_most_diversified_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationMostDiversifiedPostRequest from a dict
portfolio_optimization_most_diversified_post_request_from_dict = PortfolioOptimizationMostDiversifiedPostRequest.from_dict(portfolio_optimization_most_diversified_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


