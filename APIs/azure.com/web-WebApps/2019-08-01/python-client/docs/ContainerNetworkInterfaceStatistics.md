# ContainerNetworkInterfaceStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rx_bytes** | **int** |  | [optional] 
**rx_dropped** | **int** |  | [optional] 
**rx_errors** | **int** |  | [optional] 
**rx_packets** | **int** |  | [optional] 
**tx_bytes** | **int** |  | [optional] 
**tx_dropped** | **int** |  | [optional] 
**tx_errors** | **int** |  | [optional] 
**tx_packets** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.container_network_interface_statistics import ContainerNetworkInterfaceStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerNetworkInterfaceStatistics from a JSON string
container_network_interface_statistics_instance = ContainerNetworkInterfaceStatistics.from_json(json)
# print the JSON string representation of the object
print(ContainerNetworkInterfaceStatistics.to_json())

# convert the object into a dict
container_network_interface_statistics_dict = container_network_interface_statistics_instance.to_dict()
# create an instance of ContainerNetworkInterfaceStatistics from a dict
container_network_interface_statistics_from_dict = ContainerNetworkInterfaceStatistics.from_dict(container_network_interface_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


