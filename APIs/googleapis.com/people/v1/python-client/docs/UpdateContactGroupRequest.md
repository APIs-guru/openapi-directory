# UpdateContactGroupRequest

A request to update an existing user contact group. All updated fields will be replaced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_group** | [**ContactGroup**](ContactGroup.md) |  | [optional] 
**read_group_fields** | **str** | Optional. A field mask to restrict which fields on the group are returned. Defaults to &#x60;metadata&#x60;, &#x60;groupType&#x60;, and &#x60;name&#x60; if not set or set to empty. Valid fields are: * clientData * groupType * memberCount * metadata * name | [optional] 
**update_group_fields** | **str** | Optional. A field mask to restrict which fields on the group are updated. Multiple fields can be specified by separating them with commas. Defaults to &#x60;name&#x60; if not set or set to empty. Updated fields are replaced. Valid values are: * clientData * name | [optional] 

## Example

```python
from openapi_client.models.update_contact_group_request import UpdateContactGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateContactGroupRequest from a JSON string
update_contact_group_request_instance = UpdateContactGroupRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateContactGroupRequest.to_json())

# convert the object into a dict
update_contact_group_request_dict = update_contact_group_request_instance.to_dict()
# create an instance of UpdateContactGroupRequest from a dict
update_contact_group_request_from_dict = UpdateContactGroupRequest.from_dict(update_contact_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


