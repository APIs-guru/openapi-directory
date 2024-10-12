# ServiceHealthEvaluation

The evaluation of the service health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_health_evaluation import ServiceHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthEvaluation from a JSON string
service_health_evaluation_instance = ServiceHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthEvaluation.to_json())

# convert the object into a dict
service_health_evaluation_dict = service_health_evaluation_instance.to_dict()
# create an instance of ServiceHealthEvaluation from a dict
service_health_evaluation_from_dict = ServiceHealthEvaluation.from_dict(service_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


