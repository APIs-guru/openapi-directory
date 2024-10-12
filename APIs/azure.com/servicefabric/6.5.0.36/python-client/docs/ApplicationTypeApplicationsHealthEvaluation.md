# ApplicationTypeApplicationsHealthEvaluation

Represents health evaluation for applications of a particular application type. The application type applications evaluation can be returned when cluster health evaluation returns unhealthy aggregated health state, either Error or Warning. It contains health evaluations for each unhealthy application of the included application type that impacted current aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_name** | **str** | The application type name as defined in the application manifest. | [optional] 
**max_percent_unhealthy_applications** | **int** | Maximum allowed percentage of unhealthy applications for the application type, specified as an entry in ApplicationTypeHealthPolicyMap. | [optional] 
**total_count** | **int** | Total number of applications of the application type found in the health store. | [optional] 
**unhealthy_evaluations** | [**List[HealthEvaluationWrapper]**](HealthEvaluationWrapper.md) | List of health evaluations that resulted in the current aggregated health state. | [optional] 

## Example

```python
from openapi_client.models.application_type_applications_health_evaluation import ApplicationTypeApplicationsHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeApplicationsHealthEvaluation from a JSON string
application_type_applications_health_evaluation_instance = ApplicationTypeApplicationsHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeApplicationsHealthEvaluation.to_json())

# convert the object into a dict
application_type_applications_health_evaluation_dict = application_type_applications_health_evaluation_instance.to_dict()
# create an instance of ApplicationTypeApplicationsHealthEvaluation from a dict
application_type_applications_health_evaluation_from_dict = ApplicationTypeApplicationsHealthEvaluation.from_dict(application_type_applications_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


