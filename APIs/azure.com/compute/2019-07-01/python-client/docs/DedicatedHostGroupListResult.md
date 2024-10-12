# DedicatedHostGroupListResult

The List Dedicated Host Group with resource group response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of Dedicated Host Groups. Call ListNext() with this URI to fetch the next page of Dedicated Host Groups. | [optional] 
**value** | [**List[DedicatedHostGroup]**](DedicatedHostGroup.md) | The list of dedicated host groups | 

## Example

```python
from openapi_client.models.dedicated_host_group_list_result import DedicatedHostGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostGroupListResult from a JSON string
dedicated_host_group_list_result_instance = DedicatedHostGroupListResult.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostGroupListResult.to_json())

# convert the object into a dict
dedicated_host_group_list_result_dict = dedicated_host_group_list_result_instance.to_dict()
# create an instance of DedicatedHostGroupListResult from a dict
dedicated_host_group_list_result_from_dict = DedicatedHostGroupListResult.from_dict(dedicated_host_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


