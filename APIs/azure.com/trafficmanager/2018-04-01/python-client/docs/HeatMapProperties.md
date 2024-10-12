# HeatMapProperties

Class representing a Traffic Manager HeatMap properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The ending of the time window for this HeatMap, exclusive. | [optional] 
**endpoints** | [**List[HeatMapEndpoint]**](HeatMapEndpoint.md) | The endpoints used in this HeatMap calculation. | [optional] 
**start_time** | **datetime** | The beginning of the time window for this HeatMap, inclusive. | [optional] 
**traffic_flows** | [**List[TrafficFlow]**](TrafficFlow.md) | The traffic flows produced in this HeatMap calculation. | [optional] 

## Example

```python
from openapi_client.models.heat_map_properties import HeatMapProperties

# TODO update the JSON string below
json = "{}"
# create an instance of HeatMapProperties from a JSON string
heat_map_properties_instance = HeatMapProperties.from_json(json)
# print the JSON string representation of the object
print(HeatMapProperties.to_json())

# convert the object into a dict
heat_map_properties_dict = heat_map_properties_instance.to_dict()
# create an instance of HeatMapProperties from a dict
heat_map_properties_from_dict = HeatMapProperties.from_dict(heat_map_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


