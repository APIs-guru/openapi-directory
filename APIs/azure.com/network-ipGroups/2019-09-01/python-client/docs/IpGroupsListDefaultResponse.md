# IpGroupsListDefaultResponse

Common error representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**details** | [**List[IpGroupsListDefaultResponseDetailsInner]**](IpGroupsListDefaultResponseDetailsInner.md) | Error details. | [optional] 
**inner_error** | **str** | Inner error message. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.ip_groups_list_default_response import IpGroupsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IpGroupsListDefaultResponse from a JSON string
ip_groups_list_default_response_instance = IpGroupsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(IpGroupsListDefaultResponse.to_json())

# convert the object into a dict
ip_groups_list_default_response_dict = ip_groups_list_default_response_instance.to_dict()
# create an instance of IpGroupsListDefaultResponse from a dict
ip_groups_list_default_response_from_dict = IpGroupsListDefaultResponse.from_dict(ip_groups_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


