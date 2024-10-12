# ListForwardingAddressesResponse

Response for the ListForwardingAddresses method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarding_addresses** | [**List[ForwardingAddress]**](ForwardingAddress.md) | List of addresses that may be used for forwarding. | [optional] 

## Example

```python
from openapi_client.models.list_forwarding_addresses_response import ListForwardingAddressesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListForwardingAddressesResponse from a JSON string
list_forwarding_addresses_response_instance = ListForwardingAddressesResponse.from_json(json)
# print the JSON string representation of the object
print(ListForwardingAddressesResponse.to_json())

# convert the object into a dict
list_forwarding_addresses_response_dict = list_forwarding_addresses_response_instance.to_dict()
# create an instance of ListForwardingAddressesResponse from a dict
list_forwarding_addresses_response_from_dict = ListForwardingAddressesResponse.from_dict(list_forwarding_addresses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


