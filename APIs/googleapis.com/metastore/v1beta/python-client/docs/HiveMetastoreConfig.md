# HiveMetastoreConfig

Specifies configuration information specific to running Hive metastore software as the metastore service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auxiliary_versions** | [**Dict[str, AuxiliaryVersionConfig]**](AuxiliaryVersionConfig.md) | A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service&#39;s primary version. The key is the auxiliary service name and it must match the regular expression a-z?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen. | [optional] 
**config_overrides** | **Dict[str, str]** | A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version&#39;s AuxiliaryVersionConfig. | [optional] 
**endpoint_protocol** | **str** | The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT. | [optional] 
**kerberos_config** | [**KerberosConfig**](KerberosConfig.md) |  | [optional] 
**version** | **str** | Immutable. The Hive metastore schema version. | [optional] 

## Example

```python
from openapi_client.models.hive_metastore_config import HiveMetastoreConfig

# TODO update the JSON string below
json = "{}"
# create an instance of HiveMetastoreConfig from a JSON string
hive_metastore_config_instance = HiveMetastoreConfig.from_json(json)
# print the JSON string representation of the object
print(HiveMetastoreConfig.to_json())

# convert the object into a dict
hive_metastore_config_dict = hive_metastore_config_instance.to_dict()
# create an instance of HiveMetastoreConfig from a dict
hive_metastore_config_from_dict = HiveMetastoreConfig.from_dict(hive_metastore_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


