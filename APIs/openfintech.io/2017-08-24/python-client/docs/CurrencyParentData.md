# CurrencyParentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Parent currency ID | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.currency_parent_data import CurrencyParentData

# TODO update the JSON string below
json = "{}"
# create an instance of CurrencyParentData from a JSON string
currency_parent_data_instance = CurrencyParentData.from_json(json)
# print the JSON string representation of the object
print(CurrencyParentData.to_json())

# convert the object into a dict
currency_parent_data_dict = currency_parent_data_instance.to_dict()
# create an instance of CurrencyParentData from a dict
currency_parent_data_from_dict = CurrencyParentData.from_dict(currency_parent_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


