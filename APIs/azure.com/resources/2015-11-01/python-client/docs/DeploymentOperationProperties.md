# DeploymentOperationProperties

Deployment operation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Gets or sets the state of the provisioning. | [optional] 
**status_code** | **str** | Gets or sets operation status code. | [optional] 
**status_message** | **object** | Gets or sets operation status message. | [optional] 
**target_resource** | [**TargetResource**](TargetResource.md) |  | [optional] 
**timestamp** | **datetime** | Gets or sets the date and time of the operation. | [optional] 

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


