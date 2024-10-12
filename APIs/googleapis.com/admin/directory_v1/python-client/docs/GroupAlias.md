# GroupAlias

The Directory API manages aliases, which are alternative email addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The alias email address. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | The unique ID of the group. | [optional] 
**kind** | **str** | The type of the API resource. For Alias resources, the value is &#x60;admin#directory#alias&#x60;. | [optional] 
**primary_email** | **str** | The primary email address of the group. | [optional] 

## Example

```python
from openapi_client.models.group_alias import GroupAlias

# TODO update the JSON string below
json = "{}"
# create an instance of GroupAlias from a JSON string
group_alias_instance = GroupAlias.from_json(json)
# print the JSON string representation of the object
print(GroupAlias.to_json())

# convert the object into a dict
group_alias_dict = group_alias_instance.to_dict()
# create an instance of GroupAlias from a dict
group_alias_from_dict = GroupAlias.from_dict(group_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


