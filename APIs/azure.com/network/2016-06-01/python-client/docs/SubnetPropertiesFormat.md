# SubnetPropertiesFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | Gets or sets Address prefix for the subnet. | [optional] 
**ip_configurations** | [**List[IPConfiguration]**](IPConfiguration.md) | Gets array of references to the network interface IP configurations using subnet | [optional] [readonly] 
**network_security_group** | [**NetworkSecurityGroup**](NetworkSecurityGroup.md) |  | [optional] 
**provisioning_state** | **str** | Gets provisioning state of the resource | [optional] 
**resource_navigation_links** | [**List[ResourceNavigationLink]**](ResourceNavigationLink.md) | Gets array of references to the external resources using subnet | [optional] 
**route_table** | [**RouteTable**](RouteTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.subnet_properties_format import SubnetPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of SubnetPropertiesFormat from a JSON string
subnet_properties_format_instance = SubnetPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(SubnetPropertiesFormat.to_json())

# convert the object into a dict
subnet_properties_format_dict = subnet_properties_format_instance.to_dict()
# create an instance of SubnetPropertiesFormat from a dict
subnet_properties_format_from_dict = SubnetPropertiesFormat.from_dict(subnet_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


