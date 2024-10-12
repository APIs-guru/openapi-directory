# SasDefinitionBundle

A SAS definition bundle consists of key vault SAS definition details plus its attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SasDefinitionAttributes**](SasDefinitionAttributes.md) |  | [optional] 
**id** | **str** | The SAS definition id. | [optional] [readonly] 
**sas_type** | **str** | The type of SAS token the SAS definition will create. | [optional] [readonly] 
**sid** | **str** | Storage account SAS definition secret id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs | [optional] [readonly] 
**template_uri** | **str** | The SAS definition token template signed with an arbitrary key.  Tokens created according to the SAS definition will have the same properties as the template. | [optional] [readonly] 
**validity_period** | **str** | The validity period of SAS tokens created according to the SAS definition. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sas_definition_bundle import SasDefinitionBundle

# TODO update the JSON string below
json = "{}"
# create an instance of SasDefinitionBundle from a JSON string
sas_definition_bundle_instance = SasDefinitionBundle.from_json(json)
# print the JSON string representation of the object
print(SasDefinitionBundle.to_json())

# convert the object into a dict
sas_definition_bundle_dict = sas_definition_bundle_instance.to_dict()
# create an instance of SasDefinitionBundle from a dict
sas_definition_bundle_from_dict = SasDefinitionBundle.from_dict(sas_definition_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


