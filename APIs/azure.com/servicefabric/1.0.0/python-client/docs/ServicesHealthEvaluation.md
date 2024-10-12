# ServicesHealthEvaluation

The evaluation of the services health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_percent_unhealthy_services** | **int** |  | [optional] 
**service_type_name** | **str** |  | [optional] 
**total_count** | **int** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.services_health_evaluation import ServicesHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesHealthEvaluation from a JSON string
services_health_evaluation_instance = ServicesHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(ServicesHealthEvaluation.to_json())

# convert the object into a dict
services_health_evaluation_dict = services_health_evaluation_instance.to_dict()
# create an instance of ServicesHealthEvaluation from a dict
services_health_evaluation_from_dict = ServicesHealthEvaluation.from_dict(services_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


