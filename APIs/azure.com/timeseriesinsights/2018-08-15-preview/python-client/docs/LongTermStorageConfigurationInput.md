# LongTermStorageConfigurationInput

The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The name of the storage account that will hold the environment&#39;s long term data. | 
**management_key** | **str** | The value of the management key that grants the Time Series Insights service write access to the storage account. This property is not shown in environment responses. | 

## Example

```python
from openapi_client.models.long_term_storage_configuration_input import LongTermStorageConfigurationInput

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermStorageConfigurationInput from a JSON string
long_term_storage_configuration_input_instance = LongTermStorageConfigurationInput.from_json(json)
# print the JSON string representation of the object
print(LongTermStorageConfigurationInput.to_json())

# convert the object into a dict
long_term_storage_configuration_input_dict = long_term_storage_configuration_input_instance.to_dict()
# create an instance of LongTermStorageConfigurationInput from a dict
long_term_storage_configuration_input_from_dict = LongTermStorageConfigurationInput.from_dict(long_term_storage_configuration_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


