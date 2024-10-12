# IpAddressUpdatePartial

IP-Address Update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IPv4 or IPv6 Address in the following format: - IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation) - IPv6: hexadecimal colon separated notation  | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**fqdn** | **str** |  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**prefix_length** | **int** | The CIDR ip prefix length  | [optional] 
**valid_not_after** | **datetime** |  | [optional] 
**valid_not_before** | **datetime** |  | [optional] 
**version** | **int** | The version of the internet protocol.  | [optional] 

## Example

```python
from openapi_client.models.ip_address_update_partial import IpAddressUpdatePartial

# TODO update the JSON string below
json = "{}"
# create an instance of IpAddressUpdatePartial from a JSON string
ip_address_update_partial_instance = IpAddressUpdatePartial.from_json(json)
# print the JSON string representation of the object
print(IpAddressUpdatePartial.to_json())

# convert the object into a dict
ip_address_update_partial_dict = ip_address_update_partial_instance.to_dict()
# create an instance of IpAddressUpdatePartial from a dict
ip_address_update_partial_from_dict = IpAddressUpdatePartial.from_dict(ip_address_update_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


