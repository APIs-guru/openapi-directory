# ScopedDeployment

Deployment operation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location to store the deployment data. | 
**properties** | [**DeploymentProperties**](DeploymentProperties.md) |  | 

## Example

```python
from openapi_client.models.scoped_deployment import ScopedDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of ScopedDeployment from a JSON string
scoped_deployment_instance = ScopedDeployment.from_json(json)
# print the JSON string representation of the object
print(ScopedDeployment.to_json())

# convert the object into a dict
scoped_deployment_dict = scoped_deployment_instance.to_dict()
# create an instance of ScopedDeployment from a dict
scoped_deployment_from_dict = ScopedDeployment.from_dict(scoped_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


