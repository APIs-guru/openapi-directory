# BastionHostListResult

Response for ListBastionHosts API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[BastionHost]**](BastionHost.md) | List of Bastion Hosts in a resource group. | [optional] 

## Example

```python
from openapi_client.models.bastion_host_list_result import BastionHostListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BastionHostListResult from a JSON string
bastion_host_list_result_instance = BastionHostListResult.from_json(json)
# print the JSON string representation of the object
print(BastionHostListResult.to_json())

# convert the object into a dict
bastion_host_list_result_dict = bastion_host_list_result_instance.to_dict()
# create an instance of BastionHostListResult from a dict
bastion_host_list_result_from_dict = BastionHostListResult.from_dict(bastion_host_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


