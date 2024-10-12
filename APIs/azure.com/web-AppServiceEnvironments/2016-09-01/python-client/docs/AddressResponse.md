# AddressResponse

Describes main public IP address and any extra virtual IPs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**internal_ip_address** | **str** | Virtual Network internal IP address of the App Service Environment if it is in internal load-balancing mode. | [optional] 
**outbound_ip_addresses** | **List[str]** | IP addresses appearing on outbound connections. | [optional] 
**service_ip_address** | **str** | Main public virtual IP. | [optional] 
**vip_mappings** | [**List[AddressResponseVipMappingsInner]**](AddressResponseVipMappingsInner.md) | Additional virtual IPs. | [optional] 

## Example

```python
from openapi_client.models.address_response import AddressResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddressResponse from a JSON string
address_response_instance = AddressResponse.from_json(json)
# print the JSON string representation of the object
print(AddressResponse.to_json())

# convert the object into a dict
address_response_dict = address_response_instance.to_dict()
# create an instance of AddressResponse from a dict
address_response_from_dict = AddressResponse.from_dict(address_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


