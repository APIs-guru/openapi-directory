# LongTermStorageConfigurationOutput

The storage configuration provides the non-secret connection details about the customer storage account that is used to store the environment's data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The name of the storage account that will hold the environment&#39;s long term data. | 

## Example

```python
from openapi_client.models.long_term_storage_configuration_output import LongTermStorageConfigurationOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermStorageConfigurationOutput from a JSON string
long_term_storage_configuration_output_instance = LongTermStorageConfigurationOutput.from_json(json)
# print the JSON string representation of the object
print(LongTermStorageConfigurationOutput.to_json())

# convert the object into a dict
long_term_storage_configuration_output_dict = long_term_storage_configuration_output_instance.to_dict()
# create an instance of LongTermStorageConfigurationOutput from a dict
long_term_storage_configuration_output_from_dict = LongTermStorageConfigurationOutput.from_dict(long_term_storage_configuration_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


