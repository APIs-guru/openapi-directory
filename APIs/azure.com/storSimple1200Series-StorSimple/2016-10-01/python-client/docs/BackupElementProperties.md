# BackupElementProperties

The backup element properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_policy** | **str** | The data policy of backed up endpoint. | 
**endpoint_name** | **str** | The name of the endpoint. | 
**size_in_bytes** | **int** | The size in bytes. | 

## Example

```python
from openapi_client.models.backup_element_properties import BackupElementProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackupElementProperties from a JSON string
backup_element_properties_instance = BackupElementProperties.from_json(json)
# print the JSON string representation of the object
print(BackupElementProperties.to_json())

# convert the object into a dict
backup_element_properties_dict = backup_element_properties_instance.to_dict()
# create an instance of BackupElementProperties from a dict
backup_element_properties_from_dict = BackupElementProperties.from_dict(backup_element_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


