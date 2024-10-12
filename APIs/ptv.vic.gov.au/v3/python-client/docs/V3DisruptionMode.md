# V3DisruptionMode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruption_mode** | **int** | Disruption mode identifier | [optional] 
**disruption_mode_name** | **str** | Name of disruption mode | [optional] 

## Example

```python
from openapi_client.models.v3_disruption_mode import V3DisruptionMode

# TODO update the JSON string below
json = "{}"
# create an instance of V3DisruptionMode from a JSON string
v3_disruption_mode_instance = V3DisruptionMode.from_json(json)
# print the JSON string representation of the object
print(V3DisruptionMode.to_json())

# convert the object into a dict
v3_disruption_mode_dict = v3_disruption_mode_instance.to_dict()
# create an instance of V3DisruptionMode from a dict
v3_disruption_mode_from_dict = V3DisruptionMode.from_dict(v3_disruption_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


