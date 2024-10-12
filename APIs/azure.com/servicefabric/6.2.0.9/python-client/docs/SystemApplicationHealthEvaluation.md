# SystemApplicationHealthEvaluation

Represents health evaluation for the fabric:/System application, containing information about the data and the algorithm used by health store to evaluate health. The evaluation is returned only when the aggregated health state of the cluster is either Error or Warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.system_application_health_evaluation import SystemApplicationHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of SystemApplicationHealthEvaluation from a JSON string
system_application_health_evaluation_instance = SystemApplicationHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(SystemApplicationHealthEvaluation.to_json())

# convert the object into a dict
system_application_health_evaluation_dict = system_application_health_evaluation_instance.to_dict()
# create an instance of SystemApplicationHealthEvaluation from a dict
system_application_health_evaluation_from_dict = SystemApplicationHealthEvaluation.from_dict(system_application_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


