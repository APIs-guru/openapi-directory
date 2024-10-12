# API2ModelsAccounting



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_balance** | **int** |  | [optional] 
**member_since** | **datetime** |  | [optional] 
**premium_expiry_date** | **datetime** |  | [optional] 
**user_level** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api2_models_accounting import API2ModelsAccounting

# TODO update the JSON string below
json = "{}"
# create an instance of API2ModelsAccounting from a JSON string
api2_models_accounting_instance = API2ModelsAccounting.from_json(json)
# print the JSON string representation of the object
print(API2ModelsAccounting.to_json())

# convert the object into a dict
api2_models_accounting_dict = api2_models_accounting_instance.to_dict()
# create an instance of API2ModelsAccounting from a dict
api2_models_accounting_from_dict = API2ModelsAccounting.from_dict(api2_models_accounting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


