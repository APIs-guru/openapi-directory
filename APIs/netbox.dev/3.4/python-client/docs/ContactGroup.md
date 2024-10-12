# ContactGroup


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
**parent** | [**NestedContactGroup**](NestedContactGroup.md) |  | [optional] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.contact_group import ContactGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ContactGroup from a JSON string
contact_group_instance = ContactGroup.from_json(json)
# print the JSON string representation of the object
print(ContactGroup.to_json())

# convert the object into a dict
contact_group_dict = contact_group_instance.to_dict()
# create an instance of ContactGroup from a dict
contact_group_from_dict = ContactGroup.from_dict(contact_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


