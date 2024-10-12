# PodSecurityPolicyConfig

Configuration for the PodSecurityPolicy feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created. | [optional] 

## Example

```python
from openapi_client.models.pod_security_policy_config import PodSecurityPolicyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PodSecurityPolicyConfig from a JSON string
pod_security_policy_config_instance = PodSecurityPolicyConfig.from_json(json)
# print the JSON string representation of the object
print(PodSecurityPolicyConfig.to_json())

# convert the object into a dict
pod_security_policy_config_dict = pod_security_policy_config_instance.to_dict()
# create an instance of PodSecurityPolicyConfig from a dict
pod_security_policy_config_from_dict = PodSecurityPolicyConfig.from_dict(pod_security_policy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


