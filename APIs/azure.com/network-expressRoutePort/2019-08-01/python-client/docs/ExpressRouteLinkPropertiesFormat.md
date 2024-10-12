# ExpressRouteLinkPropertiesFormat

Properties specific to ExpressRouteLink resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_state** | **str** | Administrative state of the physical port. | [optional] 
**connector_type** | **str** | Physical fiber port type. | [optional] [readonly] 
**interface_name** | **str** | Name of Azure router interface. | [optional] [readonly] 
**mac_sec_config** | [**ExpressRouteLinkMacSecConfig**](ExpressRouteLinkMacSecConfig.md) |  | [optional] 
**patch_panel_id** | **str** | Mapping between physical port to patch panel port. | [optional] [readonly] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**rack_id** | **str** | Mapping of physical patch panel to rack. | [optional] [readonly] 
**router_name** | **str** | Name of Azure router associated with physical port. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_link_properties_format import ExpressRouteLinkPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteLinkPropertiesFormat from a JSON string
express_route_link_properties_format_instance = ExpressRouteLinkPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteLinkPropertiesFormat.to_json())

# convert the object into a dict
express_route_link_properties_format_dict = express_route_link_properties_format_instance.to_dict()
# create an instance of ExpressRouteLinkPropertiesFormat from a dict
express_route_link_properties_format_from_dict = ExpressRouteLinkPropertiesFormat.from_dict(express_route_link_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


