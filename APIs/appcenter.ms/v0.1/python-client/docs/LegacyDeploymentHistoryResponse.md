# LegacyDeploymentHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history** | [**List[LegacyDeploymentHistoryResponseHistoryInner]**](LegacyDeploymentHistoryResponseHistoryInner.md) | Array containing the deployment&#39;s package history. | [optional] 

## Example

```python
from openapi_client.models.legacy_deployment_history_response import LegacyDeploymentHistoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyDeploymentHistoryResponse from a JSON string
legacy_deployment_history_response_instance = LegacyDeploymentHistoryResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyDeploymentHistoryResponse.to_json())

# convert the object into a dict
legacy_deployment_history_response_dict = legacy_deployment_history_response_instance.to_dict()
# create an instance of LegacyDeploymentHistoryResponse from a dict
legacy_deployment_history_response_from_dict = LegacyDeploymentHistoryResponse.from_dict(legacy_deployment_history_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


