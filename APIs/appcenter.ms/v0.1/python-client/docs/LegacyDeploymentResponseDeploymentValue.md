# LegacyDeploymentResponseDeploymentValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **int** | Time at which the deployment was created as a Unix timestamp. | [optional] 
**id** | **str** | The ID of the deployment (internal use only). | [optional] 
**key** | **str** | Deployment key (aka Deployment Id) | [optional] 
**name** | **str** | Updated deployment name | 
**package** | [**LegacyCodePushReleaseResponsePackage**](LegacyCodePushReleaseResponsePackage.md) |  | [optional] 

## Example

```python
from openapi_client.models.legacy_deployment_response_deployment_value import LegacyDeploymentResponseDeploymentValue

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyDeploymentResponseDeploymentValue from a JSON string
legacy_deployment_response_deployment_value_instance = LegacyDeploymentResponseDeploymentValue.from_json(json)
# print the JSON string representation of the object
print(LegacyDeploymentResponseDeploymentValue.to_json())

# convert the object into a dict
legacy_deployment_response_deployment_value_dict = legacy_deployment_response_deployment_value_instance.to_dict()
# create an instance of LegacyDeploymentResponseDeploymentValue from a dict
legacy_deployment_response_deployment_value_from_dict = LegacyDeploymentResponseDeploymentValue.from_dict(legacy_deployment_response_deployment_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


