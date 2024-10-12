# NetworkUtilization

Target scaling by network usage. Only applicable in the App Engine flexible environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_received_bytes_per_second** | **int** | Target bytes received per second. | [optional] 
**target_received_packets_per_second** | **int** | Target packets received per second. | [optional] 
**target_sent_bytes_per_second** | **int** | Target bytes sent per second. | [optional] 
**target_sent_packets_per_second** | **int** | Target packets sent per second. | [optional] 

## Example

```python
from openapi_client.models.network_utilization import NetworkUtilization

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkUtilization from a JSON string
network_utilization_instance = NetworkUtilization.from_json(json)
# print the JSON string representation of the object
print(NetworkUtilization.to_json())

# convert the object into a dict
network_utilization_dict = network_utilization_instance.to_dict()
# create an instance of NetworkUtilization from a dict
network_utilization_from_dict = NetworkUtilization.from_dict(network_utilization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


