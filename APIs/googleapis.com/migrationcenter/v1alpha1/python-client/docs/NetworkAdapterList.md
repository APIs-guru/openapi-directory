# NetworkAdapterList

List of network adapters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_adapters** | [**List[NetworkAdapterDetails]**](NetworkAdapterDetails.md) | Network adapter descriptions. | [optional] 

## Example

```python
from openapi_client.models.network_adapter_list import NetworkAdapterList

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAdapterList from a JSON string
network_adapter_list_instance = NetworkAdapterList.from_json(json)
# print the JSON string representation of the object
print(NetworkAdapterList.to_json())

# convert the object into a dict
network_adapter_list_dict = network_adapter_list_instance.to_dict()
# create an instance of NetworkAdapterList from a dict
network_adapter_list_from_dict = NetworkAdapterList.from_dict(network_adapter_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


