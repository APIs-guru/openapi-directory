# DeployedApplicationHealthEvaluation

The evaluation of the deployed application health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** |  | [optional] 
**node_name** | **str** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployed_application_health_evaluation import DeployedApplicationHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedApplicationHealthEvaluation from a JSON string
deployed_application_health_evaluation_instance = DeployedApplicationHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(DeployedApplicationHealthEvaluation.to_json())

# convert the object into a dict
deployed_application_health_evaluation_dict = deployed_application_health_evaluation_instance.to_dict()
# create an instance of DeployedApplicationHealthEvaluation from a dict
deployed_application_health_evaluation_from_dict = DeployedApplicationHealthEvaluation.from_dict(deployed_application_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


