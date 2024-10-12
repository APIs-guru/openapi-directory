# DeletedSasDefinitionBundle

A deleted SAS definition bundle consisting of its previous id, attributes and its tags, as well as information on when it will be purged.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_date** | **int** | The time when the SAS definition was deleted, in UTC | [optional] [readonly] 
**recovery_id** | **str** | The url of the recovery object, used to identify and recover the deleted SAS definition. | [optional] 
**scheduled_purge_date** | **int** | The time when the SAS definition is scheduled to be purged, in UTC | [optional] [readonly] 
**attributes** | [**SasDefinitionAttributes**](SasDefinitionAttributes.md) |  | [optional] 
**id** | **str** | The SAS definition id. | [optional] [readonly] 
**sas_type** | **str** | The type of SAS token the SAS definition will create. | [optional] [readonly] 
**sid** | **str** | Storage account SAS definition secret id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs | [optional] [readonly] 
**template_uri** | **str** | The SAS definition token template signed with an arbitrary key.  Tokens created according to the SAS definition will have the same properties as the template. | [optional] [readonly] 
**validity_period** | **str** | The validity period of SAS tokens created according to the SAS definition. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_sas_definition_bundle import DeletedSasDefinitionBundle

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedSasDefinitionBundle from a JSON string
deleted_sas_definition_bundle_instance = DeletedSasDefinitionBundle.from_json(json)
# print the JSON string representation of the object
print(DeletedSasDefinitionBundle.to_json())

# convert the object into a dict
deleted_sas_definition_bundle_dict = deleted_sas_definition_bundle_instance.to_dict()
# create an instance of DeletedSasDefinitionBundle from a dict
deleted_sas_definition_bundle_from_dict = DeletedSasDefinitionBundle.from_dict(deleted_sas_definition_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


