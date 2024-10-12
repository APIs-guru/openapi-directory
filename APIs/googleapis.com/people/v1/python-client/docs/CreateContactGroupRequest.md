# CreateContactGroupRequest

A request to create a new contact group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_group** | [**ContactGroup**](ContactGroup.md) |  | [optional] 
**read_group_fields** | **str** | Optional. A field mask to restrict which fields on the group are returned. Defaults to &#x60;metadata&#x60;, &#x60;groupType&#x60;, and &#x60;name&#x60; if not set or set to empty. Valid fields are: * clientData * groupType * metadata * name | [optional] 

## Example

```python
from openapi_client.models.create_contact_group_request import CreateContactGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateContactGroupRequest from a JSON string
create_contact_group_request_instance = CreateContactGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CreateContactGroupRequest.to_json())

# convert the object into a dict
create_contact_group_request_dict = create_contact_group_request_instance.to_dict()
# create an instance of CreateContactGroupRequest from a dict
create_contact_group_request_from_dict = CreateContactGroupRequest.from_dict(create_contact_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


