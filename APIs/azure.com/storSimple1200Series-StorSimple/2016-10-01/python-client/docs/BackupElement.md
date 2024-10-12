# BackupElement

Class represents BackupElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackupElementProperties**](BackupElementProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

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


