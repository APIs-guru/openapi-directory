# UpdateNetworkNetflowRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collector_ip** | **str** | The IPv4 address of the NetFlow collector. | [optional] 
**collector_port** | **int** | The port that the NetFlow collector will be listening on. | [optional] 
**eta_dst_port** | **int** | The port that the Encrypted Traffic Analytics collector will be listening on. | [optional] 
**eta_enabled** | **bool** | Boolean indicating whether Encrypted Traffic Analytics is enabled (true) or disabled (false). | [optional] 
**reporting_enabled** | **bool** | Boolean indicating whether NetFlow traffic reporting is enabled (true) or disabled (false). | [optional] 

## Example

```python
from openapi_client.models.update_network_netflow_request import UpdateNetworkNetflowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkNetflowRequest from a JSON string
update_network_netflow_request_instance = UpdateNetworkNetflowRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkNetflowRequest.to_json())

# convert the object into a dict
update_network_netflow_request_dict = update_network_netflow_request_instance.to_dict()
# create an instance of UpdateNetworkNetflowRequest from a dict
update_network_netflow_request_from_dict = UpdateNetworkNetflowRequest.from_dict(update_network_netflow_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


