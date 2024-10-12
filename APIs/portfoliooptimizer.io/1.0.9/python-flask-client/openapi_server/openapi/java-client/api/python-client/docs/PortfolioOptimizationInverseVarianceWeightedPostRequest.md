# PortfolioOptimizationInverseVarianceWeightedPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **int** | The number of assets | 
**assets_variances** | **List[float]** | assetsVariances[i] is the variance of the asset i | 

## Example

```python
from openapi_client.models.portfolio_optimization_inverse_variance_weighted_post_request import PortfolioOptimizationInverseVarianceWeightedPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioOptimizationInverseVarianceWeightedPostRequest from a JSON string
portfolio_optimization_inverse_variance_weighted_post_request_instance = PortfolioOptimizationInverseVarianceWeightedPostRequest.from_json(json)
# print the JSON string representation of the object
print(PortfolioOptimizationInverseVarianceWeightedPostRequest.to_json())

# convert the object into a dict
portfolio_optimization_inverse_variance_weighted_post_request_dict = portfolio_optimization_inverse_variance_weighted_post_request_instance.to_dict()
# create an instance of PortfolioOptimizationInverseVarianceWeightedPostRequest from a dict
portfolio_optimization_inverse_variance_weighted_post_request_from_dict = PortfolioOptimizationInverseVarianceWeightedPostRequest.from_dict(portfolio_optimization_inverse_variance_weighted_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


