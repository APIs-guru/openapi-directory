# NetworkAddressList

List of allocated/assigned network addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[NetworkAddress]**](NetworkAddress.md) | Network address entries. | [optional] 

## Example

```python
from openapi_client.models.network_address_list import NetworkAddressList

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkAddressList from a JSON string
network_address_list_instance = NetworkAddressList.from_json(json)
# print the JSON string representation of the object
print(NetworkAddressList.to_json())

# convert the object into a dict
network_address_list_dict = network_address_list_instance.to_dict()
# create an instance of NetworkAddressList from a dict
network_address_list_from_dict = NetworkAddressList.from_dict(network_address_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


