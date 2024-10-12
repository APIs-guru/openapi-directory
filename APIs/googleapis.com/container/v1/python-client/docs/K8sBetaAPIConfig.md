# K8sBetaAPIConfig

K8sBetaAPIConfig , configuration for beta APIs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_apis** | **List[str]** | Enabled k8s beta APIs. | [optional] 

## Example

```python
from openapi_client.models.k8s_beta_api_config import K8sBetaAPIConfig

# TODO update the JSON string below
json = "{}"
# create an instance of K8sBetaAPIConfig from a JSON string
k8s_beta_api_config_instance = K8sBetaAPIConfig.from_json(json)
# print the JSON string representation of the object
print(K8sBetaAPIConfig.to_json())

# convert the object into a dict
k8s_beta_api_config_dict = k8s_beta_api_config_instance.to_dict()
# create an instance of K8sBetaAPIConfig from a dict
k8s_beta_api_config_from_dict = K8sBetaAPIConfig.from_dict(k8s_beta_api_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


