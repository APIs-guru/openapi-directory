# ApplicationHealthEvaluation

Represents health evaluation for an application, containing information about the data and the algorithm used by the health store to evaluate health.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.application_health_evaluation import ApplicationHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationHealthEvaluation from a JSON string
application_health_evaluation_instance = ApplicationHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ApplicationHealthEvaluation.to_json())

# convert the object into a dict
application_health_evaluation_dict = application_health_evaluation_instance.to_dict()
# create an instance of ApplicationHealthEvaluation from a dict
application_health_evaluation_from_dict = ApplicationHealthEvaluation.from_dict(application_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


