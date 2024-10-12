# StorageConfig

The configuration for data storage in the environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Optional. The name of the Cloud Storage bucket used by the environment. No &#x60;gs://&#x60; prefix. | [optional] 

## Example

```python
from openapi_client.models.storage_config import StorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StorageConfig from a JSON string
storage_config_instance = StorageConfig.from_json(json)
# print the JSON string representation of the object
print(StorageConfig.to_json())

# convert the object into a dict
storage_config_dict = storage_config_instance.to_dict()
# create an instance of StorageConfig from a dict
storage_config_from_dict = StorageConfig.from_dict(storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


