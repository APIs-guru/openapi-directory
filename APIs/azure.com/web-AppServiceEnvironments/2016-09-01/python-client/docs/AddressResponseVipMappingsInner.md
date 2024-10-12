# AddressResponseVipMappingsInner

Virtual IP mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_use** | **bool** | Is virtual IP mapping in use. | [optional] 
**internal_http_port** | **int** | Internal HTTP port. | [optional] 
**internal_https_port** | **int** | Internal HTTPS port. | [optional] 
**virtual_ip** | **str** | Virtual IP address. | [optional] 

## Example

```python
from openapi_client.models.address_response_vip_mappings_inner import AddressResponseVipMappingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AddressResponseVipMappingsInner from a JSON string
address_response_vip_mappings_inner_instance = AddressResponseVipMappingsInner.from_json(json)
# print the JSON string representation of the object
print(AddressResponseVipMappingsInner.to_json())

# convert the object into a dict
address_response_vip_mappings_inner_dict = address_response_vip_mappings_inner_instance.to_dict()
# create an instance of AddressResponseVipMappingsInner from a dict
address_response_vip_mappings_inner_from_dict = AddressResponseVipMappingsInner.from_dict(address_response_vip_mappings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


