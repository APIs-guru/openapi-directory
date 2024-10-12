# IpAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | IPv4 or IPv6 Address in the following format: - IPv4: [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation) - IPv6: hexadecimal colon separated notation  | 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**fqdn** | **str** |  | [optional] 
**id** | **str** |  | 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | 
**prefix_length** | **int** | The CIDR ip prefix length  | 
**valid_not_after** | **datetime** |  | [optional] 
**valid_not_before** | **datetime** |  | [optional] 
**version** | **int** | The version of the internet protocol.  | 

## Example

```python
from openapi_client.models.ip_address import IpAddress

# TODO update the JSON string below
json = "{}"
# create an instance of IpAddress from a JSON string
ip_address_instance = IpAddress.from_json(json)
# print the JSON string representation of the object
print(IpAddress.to_json())

# convert the object into a dict
ip_address_dict = ip_address_instance.to_dict()
# create an instance of IpAddress from a dict
ip_address_from_dict = IpAddress.from_dict(ip_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


