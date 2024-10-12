# GcfsConfig

GcfsConfig contains configurations of Google Container File System (image streaming).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to use GCFS. | [optional] 

## Example

```python
from openapi_client.models.gcfs_config import GcfsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GcfsConfig from a JSON string
gcfs_config_instance = GcfsConfig.from_json(json)
# print the JSON string representation of the object
print(GcfsConfig.to_json())

# convert the object into a dict
gcfs_config_dict = gcfs_config_instance.to_dict()
# create an instance of GcfsConfig from a dict
gcfs_config_from_dict = GcfsConfig.from_dict(gcfs_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


