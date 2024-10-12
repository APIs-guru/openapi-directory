# Currency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**avail** | **bool** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**default** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**iso3** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 
**symbol_left** | **str** |  | [optional] 
**symbol_right** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.currency import Currency

# TODO update the JSON string below
json = "{}"
# create an instance of Currency from a JSON string
currency_instance = Currency.from_json(json)
# print the JSON string representation of the object
print(Currency.to_json())

# convert the object into a dict
currency_dict = currency_instance.to_dict()
# create an instance of Currency from a dict
currency_from_dict = Currency.from_dict(currency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


