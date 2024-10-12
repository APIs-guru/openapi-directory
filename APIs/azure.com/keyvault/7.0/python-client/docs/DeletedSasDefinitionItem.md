# DeletedSasDefinitionItem

The deleted SAS definition item containing metadata about the deleted SAS definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the SAS definition was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted SAS definition. | [optional] 
**scheduled_purge_date** | **int** | The time when the SAS definition is scheduled to be purged, in UTC | [optional] [readonly] 
**attributes** | [**SasDefinitionAttributes**](SasDefinitionAttributes.md) |  | [optional] 
**id** | **str** | The storage SAS identifier. | [optional] [readonly] 
**sid** | **str** | The storage account SAS definition secret id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_sas_definition_item import DeletedSasDefinitionItem

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedSasDefinitionItem from a JSON string
deleted_sas_definition_item_instance = DeletedSasDefinitionItem.from_json(json)
# print the JSON string representation of the object
print(DeletedSasDefinitionItem.to_json())

# convert the object into a dict
deleted_sas_definition_item_dict = deleted_sas_definition_item_instance.to_dict()
# create an instance of DeletedSasDefinitionItem from a dict
deleted_sas_definition_item_from_dict = DeletedSasDefinitionItem.from_dict(deleted_sas_definition_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


