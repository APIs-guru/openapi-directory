# V3DisruptionDirection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_id** | **int** | Direction of travel identifier | [optional] 
**direction_name** | **str** | Name of direction of travel | [optional] 
**route_direction_id** | **int** | Route and direction of travel combination identifier | [optional] 
**service_time** | **str** | Time of service to which disruption applies, in 24 hour clock format (HH:MM:SS) AEDT/AEST; returns null if disruption applies to multiple (or no) services | [optional] 

## Example

```python
from openapi_client.models.v3_disruption_direction import V3DisruptionDirection

# TODO update the JSON string below
json = "{}"
# create an instance of V3DisruptionDirection from a JSON string
v3_disruption_direction_instance = V3DisruptionDirection.from_json(json)
# print the JSON string representation of the object
print(V3DisruptionDirection.to_json())

# convert the object into a dict
v3_disruption_direction_dict = v3_disruption_direction_instance.to_dict()
# create an instance of V3DisruptionDirection from a dict
v3_disruption_direction_from_dict = V3DisruptionDirection.from_dict(v3_disruption_direction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


