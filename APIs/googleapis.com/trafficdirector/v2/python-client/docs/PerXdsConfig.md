# PerXdsConfig

Detailed config (per xDS) with status. [#next-free-field: 6]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_config** | [**ClustersConfigDump**](ClustersConfigDump.md) |  | [optional] 
**listener_config** | [**ListenersConfigDump**](ListenersConfigDump.md) |  | [optional] 
**route_config** | [**RoutesConfigDump**](RoutesConfigDump.md) |  | [optional] 
**scoped_route_config** | [**ScopedRoutesConfigDump**](ScopedRoutesConfigDump.md) |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.per_xds_config import PerXdsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PerXdsConfig from a JSON string
per_xds_config_instance = PerXdsConfig.from_json(json)
# print the JSON string representation of the object
print(PerXdsConfig.to_json())

# convert the object into a dict
per_xds_config_dict = per_xds_config_instance.to_dict()
# create an instance of PerXdsConfig from a dict
per_xds_config_from_dict = PerXdsConfig.from_dict(per_xds_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


