# PortfolioModel


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
**threshold_x** | **float** |  | [optional] 
**threshold_y** | **float** |  | [optional] 
**threshold_z** | **float** |  | [optional] 
**xyz12** | **str** |  | [optional] 
**xyz12_value** | **float** |  | [optional] 
**xyz6** | **str** |  | [optional] 
**xyz6_value** | **float** |  | [optional] 
**xyz9** | **str** |  | [optional] 
**xyz9_value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.portfolio_model import PortfolioModel

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioModel from a JSON string
portfolio_model_instance = PortfolioModel.from_json(json)
# print the JSON string representation of the object
print(PortfolioModel.to_json())

# convert the object into a dict
portfolio_model_dict = portfolio_model_instance.to_dict()
# create an instance of PortfolioModel from a dict
portfolio_model_from_dict = PortfolioModel.from_dict(portfolio_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


