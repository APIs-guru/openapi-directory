# TrafficFlow

Class representing a Traffic Manager HeatMap traffic flow properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**latitude** | **float** | The approximate latitude that these queries originated from. | [optional] 
**longitude** | **float** | The approximate longitude that these queries originated from. | [optional] 
**query_experiences** | [**List[QueryExperience]**](QueryExperience.md) | The query experiences produced in this HeatMap calculation. | [optional] 
**source_ip** | **str** | The IP address that this query experience originated from. | [optional] 

## Example

```python
from openapi_client.models.traffic_flow import TrafficFlow

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficFlow from a JSON string
traffic_flow_instance = TrafficFlow.from_json(json)
# print the JSON string representation of the object
print(TrafficFlow.to_json())

# convert the object into a dict
traffic_flow_dict = traffic_flow_instance.to_dict()
# create an instance of TrafficFlow from a dict
traffic_flow_from_dict = TrafficFlow.from_dict(traffic_flow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


