# PortfolioActivations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_id** | **str** |  | [optional] 
**end** | **datetime** |  | [optional] 
**id** | **str** |  | [optional] 
**info** | **str** |  | [optional] 
**learners_count** | **float** | number of learners in the offering, excluding facilitators and coaches | [optional] 
**metadata** | [**ActivationResponseMetadata**](ActivationResponseMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 
**start** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_activations import PortfolioActivations

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioActivations from a JSON string
portfolio_activations_instance = PortfolioActivations.from_json(json)
# print the JSON string representation of the object
print(PortfolioActivations.to_json())

# convert the object into a dict
portfolio_activations_dict = portfolio_activations_instance.to_dict()
# create an instance of PortfolioActivations from a dict
portfolio_activations_from_dict = PortfolioActivations.from_dict(portfolio_activations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


