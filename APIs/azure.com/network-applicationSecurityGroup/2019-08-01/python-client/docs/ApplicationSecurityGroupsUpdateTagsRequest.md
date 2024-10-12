# ApplicationSecurityGroupsUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.application_security_groups_update_tags_request import ApplicationSecurityGroupsUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSecurityGroupsUpdateTagsRequest from a JSON string
application_security_groups_update_tags_request_instance = ApplicationSecurityGroupsUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(ApplicationSecurityGroupsUpdateTagsRequest.to_json())

# convert the object into a dict
application_security_groups_update_tags_request_dict = application_security_groups_update_tags_request_instance.to_dict()
# create an instance of ApplicationSecurityGroupsUpdateTagsRequest from a dict
application_security_groups_update_tags_request_from_dict = ApplicationSecurityGroupsUpdateTagsRequest.from_dict(application_security_groups_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


