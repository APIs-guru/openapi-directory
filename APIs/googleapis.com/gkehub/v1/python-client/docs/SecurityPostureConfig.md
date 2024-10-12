# SecurityPostureConfig

SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Sets which mode to use for Security Posture features. | [optional] 
**vulnerability_mode** | **str** | Sets which mode to use for vulnerability scanning. | [optional] 

## Example

```python
from openapi_client.models.security_posture_config import SecurityPostureConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityPostureConfig from a JSON string
security_posture_config_instance = SecurityPostureConfig.from_json(json)
# print the JSON string representation of the object
print(SecurityPostureConfig.to_json())

# convert the object into a dict
security_posture_config_dict = security_posture_config_instance.to_dict()
# create an instance of SecurityPostureConfig from a dict
security_posture_config_from_dict = SecurityPostureConfig.from_dict(security_posture_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


