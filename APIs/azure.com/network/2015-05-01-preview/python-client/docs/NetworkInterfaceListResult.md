# NetworkInterfaceListResult

Response for ListNetworkInterface Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[NetworkInterface]**](NetworkInterface.md) | Gets or sets list of NetworkInterfaces in a resource group | [optional] 

## Example

```python
from openapi_client.models.network_interface_list_result import NetworkInterfaceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInterfaceListResult from a JSON string
network_interface_list_result_instance = NetworkInterfaceListResult.from_json(json)
# print the JSON string representation of the object
print(NetworkInterfaceListResult.to_json())

# convert the object into a dict
network_interface_list_result_dict = network_interface_list_result_instance.to_dict()
# create an instance of NetworkInterfaceListResult from a dict
network_interface_list_result_from_dict = NetworkInterfaceListResult.from_dict(network_interface_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


