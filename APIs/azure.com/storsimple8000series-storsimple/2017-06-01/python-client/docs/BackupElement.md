# BackupElement

The backup element.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element_id** | **str** | The path ID that uniquely identifies the backup element. | 
**element_name** | **str** | The name of the backup element. | 
**element_type** | **str** | The hierarchical type of the backup element. | 
**size_in_bytes** | **int** | The size in bytes. | 
**volume_container_id** | **str** | The path ID of the volume container. | 
**volume_name** | **str** | The name of the volume. | 
**volume_type** | **str** | The volume type. | [optional] 

## Example

```python
from openapi_client.models.backup_element import BackupElement

# TODO update the JSON string below
json = "{}"
# create an instance of BackupElement from a JSON string
backup_element_instance = BackupElement.from_json(json)
# print the JSON string representation of the object
print(BackupElement.to_json())

# convert the object into a dict
backup_element_dict = backup_element_instance.to_dict()
# create an instance of BackupElement from a dict
backup_element_from_dict = BackupElement.from_dict(backup_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


