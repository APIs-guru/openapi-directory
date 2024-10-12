# IpGroupsListDefaultResponseDetailsInner

Common error details representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.ip_groups_list_default_response_details_inner import IpGroupsListDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IpGroupsListDefaultResponseDetailsInner from a JSON string
ip_groups_list_default_response_details_inner_instance = IpGroupsListDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(IpGroupsListDefaultResponseDetailsInner.to_json())

# convert the object into a dict
ip_groups_list_default_response_details_inner_dict = ip_groups_list_default_response_details_inner_instance.to_dict()
# create an instance of IpGroupsListDefaultResponseDetailsInner from a dict
ip_groups_list_default_response_details_inner_from_dict = IpGroupsListDefaultResponseDetailsInner.from_dict(ip_groups_list_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


