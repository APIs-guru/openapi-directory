# PortfolioXyzModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
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
from openapi_client.models.portfolio_xyz_model import PortfolioXyzModel

# TODO update the JSON string below
json = "{}"
# create an instance of PortfolioXyzModel from a JSON string
portfolio_xyz_model_instance = PortfolioXyzModel.from_json(json)
# print the JSON string representation of the object
print(PortfolioXyzModel.to_json())

# convert the object into a dict
portfolio_xyz_model_dict = portfolio_xyz_model_instance.to_dict()
# create an instance of PortfolioXyzModel from a dict
portfolio_xyz_model_from_dict = PortfolioXyzModel.from_dict(portfolio_xyz_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


