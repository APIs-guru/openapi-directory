# NetworkStatusContract

Network Status details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectivity_status** | [**List[ConnectivityStatusContract]**](ConnectivityStatusContract.md) | Gets the list of Connectivity Status to the Resources on which the service depends upon. | 
**dns_servers** | **List[str]** | Gets the list of DNS servers IPV4 addresses. | 

## Example

```python
from openapi_client.models.network_status_contract import NetworkStatusContract

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkStatusContract from a JSON string
network_status_contract_instance = NetworkStatusContract.from_json(json)
# print the JSON string representation of the object
print(NetworkStatusContract.to_json())

# convert the object into a dict
network_status_contract_dict = network_status_contract_instance.to_dict()
# create an instance of NetworkStatusContract from a dict
network_status_contract_from_dict = NetworkStatusContract.from_dict(network_status_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


