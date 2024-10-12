# NetworkEndpoint

A network endpoint over which a TPU worker can be reached.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_config** | [**AccessConfig**](AccessConfig.md) |  | [optional] 
**ip_address** | **str** | The internal IP address of this network endpoint. | [optional] 
**port** | **int** | The port of this network endpoint. | [optional] 

## Example

```python
from openapi_client.models.network_endpoint import NetworkEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkEndpoint from a JSON string
network_endpoint_instance = NetworkEndpoint.from_json(json)
# print the JSON string representation of the object
print(NetworkEndpoint.to_json())

# convert the object into a dict
network_endpoint_dict = network_endpoint_instance.to_dict()
# create an instance of NetworkEndpoint from a dict
network_endpoint_from_dict = NetworkEndpoint.from_dict(network_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


