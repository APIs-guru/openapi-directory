# WritableContactGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**depth** | **int** |  | [optional] [readonly] 
**contact_count** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**parent** | **int** |  | [optional] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_contact_group import WritableContactGroup

# TODO update the JSON string below
json = "{}"
# create an instance of WritableContactGroup from a JSON string
writable_contact_group_instance = WritableContactGroup.from_json(json)
# print the JSON string representation of the object
print(WritableContactGroup.to_json())

# convert the object into a dict
writable_contact_group_dict = writable_contact_group_instance.to_dict()
# create an instance of WritableContactGroup from a dict
writable_contact_group_from_dict = WritableContactGroup.from_dict(writable_contact_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


