# DeploymentOperation

Deployment operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Full deployment operation ID. | [optional] [readonly] 
**operation_id** | **str** | Deployment operation ID. | [optional] [readonly] 
**properties** | [**DeploymentOperationProperties**](DeploymentOperationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment_operation import DeploymentOperation

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentOperation from a JSON string
deployment_operation_instance = DeploymentOperation.from_json(json)
# print the JSON string representation of the object
print(DeploymentOperation.to_json())

# convert the object into a dict
deployment_operation_dict = deployment_operation_instance.to_dict()
# create an instance of DeploymentOperation from a dict
deployment_operation_from_dict = DeploymentOperation.from_dict(deployment_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


