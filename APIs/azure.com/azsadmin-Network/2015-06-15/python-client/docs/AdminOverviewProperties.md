# AdminOverviewProperties

Admin overview properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_ip_usage** | [**AdminOverviewResourceUsage**](AdminOverviewResourceUsage.md) |  | [optional] 
**load_balancer_mux_health** | [**AdminOverviewResourceHealth**](AdminOverviewResourceHealth.md) |  | [optional] 
**mac_address_usage** | [**AdminOverviewResourceUsage**](AdminOverviewResourceUsage.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 
**public_ip_address_usage** | [**AdminOverviewResourceUsage**](AdminOverviewResourceUsage.md) |  | [optional] 
**virtual_gateway_health** | [**AdminOverviewResourceHealth**](AdminOverviewResourceHealth.md) |  | [optional] 
**virtual_network_health** | [**AdminOverviewResourceHealth**](AdminOverviewResourceHealth.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_overview_properties import AdminOverviewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AdminOverviewProperties from a JSON string
admin_overview_properties_instance = AdminOverviewProperties.from_json(json)
# print the JSON string representation of the object
print(AdminOverviewProperties.to_json())

# convert the object into a dict
admin_overview_properties_dict = admin_overview_properties_instance.to_dict()
# create an instance of AdminOverviewProperties from a dict
admin_overview_properties_from_dict = AdminOverviewProperties.from_dict(admin_overview_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


