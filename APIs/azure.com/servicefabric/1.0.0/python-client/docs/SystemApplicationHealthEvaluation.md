# SystemApplicationHealthEvaluation

The evaluation of the system application health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

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


