# RuntimeNetworkInfo

Runtime networking information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**NetworkConnectionList**](NetworkConnectionList.md) |  | [optional] 
**netstat** | **str** | Netstat (raw, OS-agnostic). | [optional] 
**netstat_time** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.runtime_network_info import RuntimeNetworkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeNetworkInfo from a JSON string
runtime_network_info_instance = RuntimeNetworkInfo.from_json(json)
# print the JSON string representation of the object
print(RuntimeNetworkInfo.to_json())

# convert the object into a dict
runtime_network_info_dict = runtime_network_info_instance.to_dict()
# create an instance of RuntimeNetworkInfo from a dict
runtime_network_info_from_dict = RuntimeNetworkInfo.from_dict(runtime_network_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


