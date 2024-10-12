# ApplicationHealthEvaluation

The evaluation of the application health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

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


