# GetNetworkClients200ResponseUsage

Usage, sent and received

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recv** | **float** | Usage received by the client | [optional] 
**sent** | **float** | Usage sent by the client | [optional] 

## Example

```python
from openapi_client.models.get_network_clients200_response_usage import GetNetworkClients200ResponseUsage

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkClients200ResponseUsage from a JSON string
get_network_clients200_response_usage_instance = GetNetworkClients200ResponseUsage.from_json(json)
# print the JSON string representation of the object
print(GetNetworkClients200ResponseUsage.to_json())

# convert the object into a dict
get_network_clients200_response_usage_dict = get_network_clients200_response_usage_instance.to_dict()
# create an instance of GetNetworkClients200ResponseUsage from a dict
get_network_clients200_response_usage_from_dict = GetNetworkClients200ResponseUsage.from_dict(get_network_clients200_response_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


