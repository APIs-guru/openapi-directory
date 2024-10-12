# HealthStateChange

Model for health state change

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | **str** | Health state of monitor instance. | [optional] [readonly] 
**health_state_change_time** | **datetime** | Time at which this Health state was reached. | [optional] [readonly] 

## Example

```python
from openapi_client.models.health_state_change import HealthStateChange

# TODO update the JSON string below
json = "{}"
# create an instance of HealthStateChange from a JSON string
health_state_change_instance = HealthStateChange.from_json(json)
# print the JSON string representation of the object
print(HealthStateChange.to_json())

# convert the object into a dict
health_state_change_dict = health_state_change_instance.to_dict()
# create an instance of HealthStateChange from a dict
health_state_change_from_dict = HealthStateChange.from_dict(health_state_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


