# UpdateDeploymentRequest

Request with deployment information to update an existing deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_config** | [**DeploymentConfig**](DeploymentConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_deployment_request import UpdateDeploymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeploymentRequest from a JSON string
update_deployment_request_instance = UpdateDeploymentRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeploymentRequest.to_json())

# convert the object into a dict
update_deployment_request_dict = update_deployment_request_instance.to_dict()
# create an instance of UpdateDeploymentRequest from a dict
update_deployment_request_from_dict = UpdateDeploymentRequest.from_dict(update_deployment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


