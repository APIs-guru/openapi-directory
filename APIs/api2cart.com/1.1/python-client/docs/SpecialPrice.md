# SpecialPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**avail** | **bool** |  | [optional] 
**created_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**expired_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**modified_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.special_price import SpecialPrice

# TODO update the JSON string below
json = "{}"
# create an instance of SpecialPrice from a JSON string
special_price_instance = SpecialPrice.from_json(json)
# print the JSON string representation of the object
print(SpecialPrice.to_json())

# convert the object into a dict
special_price_dict = special_price_instance.to_dict()
# create an instance of SpecialPrice from a dict
special_price_from_dict = SpecialPrice.from_dict(special_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


