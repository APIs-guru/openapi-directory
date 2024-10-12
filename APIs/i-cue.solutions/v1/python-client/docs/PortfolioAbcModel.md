# PortfolioAbcModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abc12** | **str** |  | [optional] 
**abc12_value** | **float** |  | [optional] 
**abc6** | **str** |  | [optional] 
**abc6_value** | **float** |  | [optional] 
**abc9** | **str** |  | [optional] 
**abc9_value** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**threshold_a** | **float** |  | [optional] 
**threshold_b** | **float** |  | [optional] 
**threshold_c** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_abc_model import PortfolioAbcModel

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioAbcModel from a JSON string
portfolio_abc_model_instance = PortfolioAbcModel.from_json(json)
# print the JSON string representation of the object
print(PortfolioAbcModel.to_json())

# convert the object into a dict
portfolio_abc_model_dict = portfolio_abc_model_instance.to_dict()
# create an instance of PortfolioAbcModel from a dict
portfolio_abc_model_from_dict = PortfolioAbcModel.from_dict(portfolio_abc_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


