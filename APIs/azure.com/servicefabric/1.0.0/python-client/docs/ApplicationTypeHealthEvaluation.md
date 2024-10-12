# ApplicationTypeHealthEvaluation

The evaluation of the application type health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_name** | **str** |  | [optional] 
**max_percent_unhealthy_applications** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_type_health_evaluation import ApplicationTypeHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeHealthEvaluation from a JSON string
application_type_health_evaluation_instance = ApplicationTypeHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeHealthEvaluation.to_json())

# convert the object into a dict
application_type_health_evaluation_dict = application_type_health_evaluation_instance.to_dict()
# create an instance of ApplicationTypeHealthEvaluation from a dict
application_type_health_evaluation_from_dict = ApplicationTypeHealthEvaluation.from_dict(application_type_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


