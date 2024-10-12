# SasDefinitionCreateParameters

The SAS definition create parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SasDefinitionAttributes**](SasDefinitionAttributes.md) |  | [optional] 
**sas_type** | **str** | The type of SAS token the SAS definition will create. | 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**template_uri** | **str** | The SAS definition token template signed with an arbitrary key.  Tokens created according to the SAS definition will have the same properties as the template. | 
**validity_period** | **str** | The validity period of SAS tokens created according to the SAS definition. | 

## Example

```python
from openapi_client.models.sas_definition_create_parameters import SasDefinitionCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SasDefinitionCreateParameters from a JSON string
sas_definition_create_parameters_instance = SasDefinitionCreateParameters.from_json(json)
# print the JSON string representation of the object
print(SasDefinitionCreateParameters.to_json())

# convert the object into a dict
sas_definition_create_parameters_dict = sas_definition_create_parameters_instance.to_dict()
# create an instance of SasDefinitionCreateParameters from a dict
sas_definition_create_parameters_from_dict = SasDefinitionCreateParameters.from_dict(sas_definition_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


