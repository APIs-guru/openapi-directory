# IpGroupsUpdateGroupsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.ip_groups_update_groups_request import IpGroupsUpdateGroupsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IpGroupsUpdateGroupsRequest from a JSON string
ip_groups_update_groups_request_instance = IpGroupsUpdateGroupsRequest.from_json(json)
# print the JSON string representation of the object
print(IpGroupsUpdateGroupsRequest.to_json())

# convert the object into a dict
ip_groups_update_groups_request_dict = ip_groups_update_groups_request_instance.to_dict()
# create an instance of IpGroupsUpdateGroupsRequest from a dict
ip_groups_update_groups_request_from_dict = IpGroupsUpdateGroupsRequest.from_dict(ip_groups_update_groups_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


