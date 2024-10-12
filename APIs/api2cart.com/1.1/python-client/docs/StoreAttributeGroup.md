# StoreAttributeGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**assigned_attribute_ids** | **List[str]** |  | [optional] 
**attribute_set_id** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**position** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.store_attribute_group import StoreAttributeGroup

# TODO update the JSON string below
json = "{}"
# create an instance of StoreAttributeGroup from a JSON string
store_attribute_group_instance = StoreAttributeGroup.from_json(json)
# print the JSON string representation of the object
print(StoreAttributeGroup.to_json())

# convert the object into a dict
store_attribute_group_dict = store_attribute_group_instance.to_dict()
# create an instance of StoreAttributeGroup from a dict
store_attribute_group_from_dict = StoreAttributeGroup.from_dict(store_attribute_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


