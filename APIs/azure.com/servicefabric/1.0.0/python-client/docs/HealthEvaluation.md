# HealthEvaluation

The evauation of the health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**description** | **str** |  | [optional] 
**kind** | **str** |  | 

## Example

```python
from openapi_client.models.health_evaluation import HealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of HealthEvaluation from a JSON string
health_evaluation_instance = HealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(HealthEvaluation.to_json())

# convert the object into a dict
health_evaluation_dict = health_evaluation_instance.to_dict()
# create an instance of HealthEvaluation from a dict
health_evaluation_from_dict = HealthEvaluation.from_dict(health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


