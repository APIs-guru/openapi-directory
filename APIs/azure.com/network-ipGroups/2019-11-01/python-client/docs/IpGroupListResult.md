# IpGroupListResult

Response for the ListIpGroups API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[IpGroup]**](IpGroup.md) | The list of IpGroups information resources. | [optional] 

## Example

```python
from openapi_client.models.ip_group_list_result import IpGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IpGroupListResult from a JSON string
ip_group_list_result_instance = IpGroupListResult.from_json(json)
# print the JSON string representation of the object
print(IpGroupListResult.to_json())

# convert the object into a dict
ip_group_list_result_dict = ip_group_list_result_instance.to_dict()
# create an instance of IpGroupListResult from a dict
ip_group_list_result_from_dict = IpGroupListResult.from_dict(ip_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


