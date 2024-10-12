# DeploymentValidateResult

Information from validate template deployment response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ResourceManagementErrorWithDetails**](ResourceManagementErrorWithDetails.md) |  | [optional] 
**properties** | [**DeploymentPropertiesExtended**](DeploymentPropertiesExtended.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment_validate_result import DeploymentValidateResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentValidateResult from a JSON string
deployment_validate_result_instance = DeploymentValidateResult.from_json(json)
# print the JSON string representation of the object
print(DeploymentValidateResult.to_json())

# convert the object into a dict
deployment_validate_result_dict = deployment_validate_result_instance.to_dict()
# create an instance of DeploymentValidateResult from a dict
deployment_validate_result_from_dict = DeploymentValidateResult.from_dict(deployment_validate_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


