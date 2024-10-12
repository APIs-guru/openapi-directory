# DeploymentOperationProperties

Deployment operation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The state of the provisioning. | [optional] [readonly] 
**request** | [**HttpMessage**](HttpMessage.md) |  | [optional] 
**response** | [**HttpMessage**](HttpMessage.md) |  | [optional] 
**service_request_id** | **str** | Deployment operation service request id. | [optional] [readonly] 
**status_code** | **str** | Operation status code. | [optional] [readonly] 
**status_message** | **object** | Operation status message. | [optional] [readonly] 
**target_resource** | [**TargetResource**](TargetResource.md) |  | [optional] 
**timestamp** | **datetime** | The date and time of the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deployment_operation_properties import DeploymentOperationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentOperationProperties from a JSON string
deployment_operation_properties_instance = DeploymentOperationProperties.from_json(json)
# print the JSON string representation of the object
print(DeploymentOperationProperties.to_json())

# convert the object into a dict
deployment_operation_properties_dict = deployment_operation_properties_instance.to_dict()
# create an instance of DeploymentOperationProperties from a dict
deployment_operation_properties_from_dict = DeploymentOperationProperties.from_dict(deployment_operation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


