# LegacyDeploymentsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployments** | [**List[LegacyDeploymentResponseDeploymentValue]**](LegacyDeploymentResponseDeploymentValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.legacy_deployments_response import LegacyDeploymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyDeploymentsResponse from a JSON string
legacy_deployments_response_instance = LegacyDeploymentsResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyDeploymentsResponse.to_json())

# convert the object into a dict
legacy_deployments_response_dict = legacy_deployments_response_instance.to_dict()
# create an instance of LegacyDeploymentsResponse from a dict
legacy_deployments_response_from_dict = LegacyDeploymentsResponse.from_dict(legacy_deployments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


