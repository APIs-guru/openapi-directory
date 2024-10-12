# AuxiliaryVersionConfig

Configuration information for the auxiliary service versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_overrides** | **Dict[str, str]** | A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version&#39;s overrides. If keys are present in both the auxiliary version&#39;s overrides and the primary version&#39;s overrides, the value from the auxiliary version&#39;s overrides takes precedence. | [optional] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**version** | **str** | The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service&#39;s version. | [optional] 

## Example

```python
from openapi_client.models.auxiliary_version_config import AuxiliaryVersionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AuxiliaryVersionConfig from a JSON string
auxiliary_version_config_instance = AuxiliaryVersionConfig.from_json(json)
# print the JSON string representation of the object
print(AuxiliaryVersionConfig.to_json())

# convert the object into a dict
auxiliary_version_config_dict = auxiliary_version_config_instance.to_dict()
# create an instance of AuxiliaryVersionConfig from a dict
auxiliary_version_config_from_dict = AuxiliaryVersionConfig.from_dict(auxiliary_version_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


