# LegacyDeploymentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | [**Dict[str, LegacyDeploymentResponseDeploymentValue]**](LegacyDeploymentResponseDeploymentValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.legacy_deployment_response import LegacyDeploymentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyDeploymentResponse from a JSON string
legacy_deployment_response_instance = LegacyDeploymentResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyDeploymentResponse.to_json())

# convert the object into a dict
legacy_deployment_response_dict = legacy_deployment_response_instance.to_dict()
# create an instance of LegacyDeploymentResponse from a dict
legacy_deployment_response_from_dict = LegacyDeploymentResponse.from_dict(legacy_deployment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


