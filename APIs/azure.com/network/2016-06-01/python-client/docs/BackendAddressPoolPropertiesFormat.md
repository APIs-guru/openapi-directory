# BackendAddressPoolPropertiesFormat

Properties of BackendAddressPool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_ip_configurations** | [**List[NetworkInterfaceIPConfiguration]**](NetworkInterfaceIPConfiguration.md) | Gets collection of references to IPs defined in NICs | [optional] [readonly] 
**load_balancing_rules** | [**List[SubResource]**](SubResource.md) | Gets Load Balancing rules that use this Backend Address Pool | [optional] [readonly] 
**outbound_nat_rule** | [**SubResource**](SubResource.md) |  | [optional] 
**provisioning_state** | **str** | Get provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.backend_address_pool_properties_format import BackendAddressPoolPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of BackendAddressPoolPropertiesFormat from a JSON string
backend_address_pool_properties_format_instance = BackendAddressPoolPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(BackendAddressPoolPropertiesFormat.to_json())

# convert the object into a dict
backend_address_pool_properties_format_dict = backend_address_pool_properties_format_instance.to_dict()
# create an instance of BackendAddressPoolPropertiesFormat from a dict
backend_address_pool_properties_format_from_dict = BackendAddressPoolPropertiesFormat.from_dict(backend_address_pool_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


