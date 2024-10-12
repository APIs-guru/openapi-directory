# CartMetaData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**namespace** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cart_meta_data import CartMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of CartMetaData from a JSON string
cart_meta_data_instance = CartMetaData.from_json(json)
# print the JSON string representation of the object
print(CartMetaData.to_json())

# convert the object into a dict
cart_meta_data_dict = cart_meta_data_instance.to_dict()
# create an instance of CartMetaData from a dict
cart_meta_data_from_dict = CartMetaData.from_dict(cart_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


