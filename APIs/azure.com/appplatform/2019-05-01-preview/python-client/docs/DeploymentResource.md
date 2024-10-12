# DeploymentResource

Deployment resource payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DeploymentResourceProperties**](DeploymentResourceProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deployment_resource import DeploymentResource

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentResource from a JSON string
deployment_resource_instance = DeploymentResource.from_json(json)
# print the JSON string representation of the object
print(DeploymentResource.to_json())

# convert the object into a dict
deployment_resource_dict = deployment_resource_instance.to_dict()
# create an instance of DeploymentResource from a dict
deployment_resource_from_dict = DeploymentResource.from_dict(deployment_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


