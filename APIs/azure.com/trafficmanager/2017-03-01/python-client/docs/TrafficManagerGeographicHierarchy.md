# TrafficManagerGeographicHierarchy

Class representing the Geographic hierarchy used with the Geographic traffic routing method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GeographicHierarchyProperties**](GeographicHierarchyProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.traffic_manager_geographic_hierarchy import TrafficManagerGeographicHierarchy

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficManagerGeographicHierarchy from a JSON string
traffic_manager_geographic_hierarchy_instance = TrafficManagerGeographicHierarchy.from_json(json)
# print the JSON string representation of the object
print(TrafficManagerGeographicHierarchy.to_json())

# convert the object into a dict
traffic_manager_geographic_hierarchy_dict = traffic_manager_geographic_hierarchy_instance.to_dict()
# create an instance of TrafficManagerGeographicHierarchy from a dict
traffic_manager_geographic_hierarchy_from_dict = TrafficManagerGeographicHierarchy.from_dict(traffic_manager_geographic_hierarchy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


