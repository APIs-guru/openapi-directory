# ContactRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.contact_role import ContactRole

# TODO update the JSON string below
json = "{}"
# create an instance of ContactRole from a JSON string
contact_role_instance = ContactRole.from_json(json)
# print the JSON string representation of the object
print(ContactRole.to_json())

# convert the object into a dict
contact_role_dict = contact_role_instance.to_dict()
# create an instance of ContactRole from a dict
contact_role_from_dict = ContactRole.from_dict(contact_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


