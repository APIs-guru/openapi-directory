# ProvisionNetworkClientsRequestClientsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mac** | **str** | The MAC address of the client. Required. | 
**name** | **str** | The display name for the client. Optional. Limited to 255 bytes. | [optional] 

## Example

```python
from openapi_client.models.provision_network_clients_request_clients_inner import ProvisionNetworkClientsRequestClientsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionNetworkClientsRequestClientsInner from a JSON string
provision_network_clients_request_clients_inner_instance = ProvisionNetworkClientsRequestClientsInner.from_json(json)
# print the JSON string representation of the object
print(ProvisionNetworkClientsRequestClientsInner.to_json())

# convert the object into a dict
provision_network_clients_request_clients_inner_dict = provision_network_clients_request_clients_inner_instance.to_dict()
# create an instance of ProvisionNetworkClientsRequestClientsInner from a dict
provision_network_clients_request_clients_inner_from_dict = ProvisionNetworkClientsRequestClientsInner.from_dict(provision_network_clients_request_clients_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


