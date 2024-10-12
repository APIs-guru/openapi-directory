# V3DisruptionStop


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stop_id** | **int** |  | [optional] 
**stop_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.v3_disruption_stop import V3DisruptionStop

# TODO update the JSON string below
json = "{}"
# create an instance of V3DisruptionStop from a JSON string
v3_disruption_stop_instance = V3DisruptionStop.from_json(json)
# print the JSON string representation of the object
print(V3DisruptionStop.to_json())

# convert the object into a dict
v3_disruption_stop_dict = v3_disruption_stop_instance.to_dict()
# create an instance of V3DisruptionStop from a dict
v3_disruption_stop_from_dict = V3DisruptionStop.from_dict(v3_disruption_stop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


