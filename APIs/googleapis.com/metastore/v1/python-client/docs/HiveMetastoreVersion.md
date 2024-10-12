# HiveMetastoreVersion

A specification of a supported version of the Hive Metastore software.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_default** | **bool** | Whether version will be chosen by the server if a metastore service is created with a HiveMetastoreConfig that omits the version. | [optional] 
**version** | **str** | The semantic version of the Hive Metastore software. | [optional] 

## Example

```python
from openapi_client.models.hive_metastore_version import HiveMetastoreVersion

# TODO update the JSON string below
json = "{}"
# create an instance of HiveMetastoreVersion from a JSON string
hive_metastore_version_instance = HiveMetastoreVersion.from_json(json)
# print the JSON string representation of the object
print(HiveMetastoreVersion.to_json())

# convert the object into a dict
hive_metastore_version_dict = hive_metastore_version_instance.to_dict()
# create an instance of HiveMetastoreVersion from a dict
hive_metastore_version_from_dict = HiveMetastoreVersion.from_dict(hive_metastore_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


