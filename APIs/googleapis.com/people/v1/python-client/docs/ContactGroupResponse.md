# ContactGroupResponse

The response for a specific contact group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_group** | [**ContactGroup**](ContactGroup.md) |  | [optional] 
**requested_resource_name** | **str** | The original requested resource name. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.contact_group_response import ContactGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContactGroupResponse from a JSON string
contact_group_response_instance = ContactGroupResponse.from_json(json)
# print the JSON string representation of the object
print(ContactGroupResponse.to_json())

# convert the object into a dict
contact_group_response_dict = contact_group_response_instance.to_dict()
# create an instance of ContactGroupResponse from a dict
contact_group_response_from_dict = ContactGroupResponse.from_dict(contact_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


