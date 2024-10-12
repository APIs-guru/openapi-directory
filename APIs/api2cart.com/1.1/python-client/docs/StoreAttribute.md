# StoreAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**default_values** | **List[str]** |  | [optional] 
**id** | **str** |  | [optional] 
**lang_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**position** | **int** |  | [optional] 
**required** | **bool** |  | [optional] 
**store_id** | **str** |  | [optional] 
**system** | **bool** |  | [optional] 
**type** | **str** |  | [optional] 
**values** | **List[str]** |  | [optional] 
**visible** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.store_attribute import StoreAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of StoreAttribute from a JSON string
store_attribute_instance = StoreAttribute.from_json(json)
# print the JSON string representation of the object
print(StoreAttribute.to_json())

# convert the object into a dict
store_attribute_dict = store_attribute_instance.to_dict()
# create an instance of StoreAttribute from a dict
store_attribute_from_dict = StoreAttribute.from_dict(store_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


