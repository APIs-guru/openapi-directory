# HealthStateCount

Represents information about how many health entities are in Ok, Warning and Error health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** | The number of health entities with aggregated health state Error. | [optional] 
**ok_count** | **int** | The number of health entities with aggregated health state Ok. | [optional] 
**warning_count** | **int** | The number of health entities with aggregated health state Warning. | [optional] 

## Example

```python
from openapi_client.models.health_state_count import HealthStateCount

# TODO update the JSON string below
json = "{}"
# create an instance of HealthStateCount from a JSON string
health_state_count_instance = HealthStateCount.from_json(json)
# print the JSON string representation of the object
print(HealthStateCount.to_json())

# convert the object into a dict
health_state_count_dict = health_state_count_instance.to_dict()
# create an instance of HealthStateCount from a dict
health_state_count_from_dict = HealthStateCount.from_dict(health_state_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


