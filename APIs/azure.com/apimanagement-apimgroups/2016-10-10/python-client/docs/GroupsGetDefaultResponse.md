# GroupsGetDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[GroupsGetDefaultResponseDetailsInner]**](GroupsGetDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.groups_get_default_response import GroupsGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupsGetDefaultResponse from a JSON string
groups_get_default_response_instance = GroupsGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(GroupsGetDefaultResponse.to_json())

# convert the object into a dict
groups_get_default_response_dict = groups_get_default_response_instance.to_dict()
# create an instance of GroupsGetDefaultResponse from a dict
groups_get_default_response_from_dict = GroupsGetDefaultResponse.from_dict(groups_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


