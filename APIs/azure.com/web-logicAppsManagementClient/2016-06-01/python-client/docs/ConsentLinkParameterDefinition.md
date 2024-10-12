# ConsentLinkParameterDefinition

Consent link definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | AAD OID (user or group) if the principal type is ActiveDirectory. MSA PUID if the principal type is MicrosoftAccount | [optional] 
**parameter_name** | **str** | Name of the parameter in the connection provider&#39;s OAuth settings | [optional] 
**redirect_url** | **str** | Name of the parameter in the connection provider&#39;s OAuth settings | [optional] 
**tenant_id** | **str** | The tenant id | [optional] 

## Example

```python
from openapi_client.models.consent_link_parameter_definition import ConsentLinkParameterDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentLinkParameterDefinition from a JSON string
consent_link_parameter_definition_instance = ConsentLinkParameterDefinition.from_json(json)
# print the JSON string representation of the object
print(ConsentLinkParameterDefinition.to_json())

# convert the object into a dict
consent_link_parameter_definition_dict = consent_link_parameter_definition_instance.to_dict()
# create an instance of ConsentLinkParameterDefinition from a dict
consent_link_parameter_definition_from_dict = ConsentLinkParameterDefinition.from_dict(consent_link_parameter_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


