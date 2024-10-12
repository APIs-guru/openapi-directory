# NetworkAdapterDetails

Details of network adapter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapter_type** | **str** | Network adapter type (e.g. VMXNET3). | [optional] 
**addresses** | [**NetworkAddressList**](NetworkAddressList.md) |  | [optional] 
**mac_address** | **str** | MAC address. | [optional] 

## Example

```python
from openapi_client.models.network_adapter_details import NetworkAdapterDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAdapterDetails from a JSON string
network_adapter_details_instance = NetworkAdapterDetails.from_json(json)
# print the JSON string representation of the object
print(NetworkAdapterDetails.to_json())

# convert the object into a dict
network_adapter_details_dict = network_adapter_details_instance.to_dict()
# create an instance of NetworkAdapterDetails from a dict
network_adapter_details_from_dict = NetworkAdapterDetails.from_dict(network_adapter_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


