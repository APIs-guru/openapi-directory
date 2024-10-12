# DedicatedHostListResult

The list dedicated host operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of dedicated hosts. Call ListNext() with this URI to fetch the next page of dedicated hosts. | [optional] 
**value** | [**List[DedicatedHost]**](DedicatedHost.md) | The list of dedicated hosts | 

## Example

```python
from openapi_client.models.dedicated_host_list_result import DedicatedHostListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostListResult from a JSON string
dedicated_host_list_result_instance = DedicatedHostListResult.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostListResult.to_json())

# convert the object into a dict
dedicated_host_list_result_dict = dedicated_host_list_result_instance.to_dict()
# create an instance of DedicatedHostListResult from a dict
dedicated_host_list_result_from_dict = DedicatedHostListResult.from_dict(dedicated_host_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


