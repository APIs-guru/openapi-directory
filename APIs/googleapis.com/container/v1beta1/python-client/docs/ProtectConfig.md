# ProtectConfig

ProtectConfig defines the flags needed to enable/disable features for the Protect API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workload_config** | [**WorkloadConfig**](WorkloadConfig.md) |  | [optional] 
**workload_vulnerability_mode** | **str** | Sets which mode to use for Protect workload vulnerability scanning feature. | [optional] 

## Example

```python
from openapi_client.models.protect_config import ProtectConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectConfig from a JSON string
protect_config_instance = ProtectConfig.from_json(json)
# print the JSON string representation of the object
print(ProtectConfig.to_json())

# convert the object into a dict
protect_config_dict = protect_config_instance.to_dict()
# create an instance of ProtectConfig from a dict
protect_config_from_dict = ProtectConfig.from_dict(protect_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


