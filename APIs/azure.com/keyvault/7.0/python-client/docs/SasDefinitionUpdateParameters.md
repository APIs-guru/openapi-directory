# SasDefinitionUpdateParameters

The SAS definition update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SasDefinitionAttributes**](SasDefinitionAttributes.md) |  | [optional] 
**sas_type** | **str** | The type of SAS token the SAS definition will create. | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 
**template_uri** | **str** | The SAS definition token template signed with an arbitrary key.  Tokens created according to the SAS definition will have the same properties as the template. | [optional] 
**validity_period** | **str** | The validity period of SAS tokens created according to the SAS definition. | [optional] 

## Example

```python
from openapi_client.models.sas_definition_update_parameters import SasDefinitionUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SasDefinitionUpdateParameters from a JSON string
sas_definition_update_parameters_instance = SasDefinitionUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SasDefinitionUpdateParameters.to_json())

# convert the object into a dict
sas_definition_update_parameters_dict = sas_definition_update_parameters_instance.to_dict()
# create an instance of SasDefinitionUpdateParameters from a dict
sas_definition_update_parameters_from_dict = SasDefinitionUpdateParameters.from_dict(sas_definition_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


