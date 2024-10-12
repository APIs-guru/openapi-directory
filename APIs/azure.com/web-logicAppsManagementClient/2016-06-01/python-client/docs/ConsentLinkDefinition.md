# ConsentLinkDefinition

A consent link

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the parameter in the connection provider&#39;s OAuth settings | [optional] 
**first_party_login_uri** | **str** | URI for first party login | [optional] 
**link** | **str** | URI for the consent link | [optional] 
**status** | **str** | Status of the link | [optional] 

## Example

```python
from openapi_client.models.consent_link_definition import ConsentLinkDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentLinkDefinition from a JSON string
consent_link_definition_instance = ConsentLinkDefinition.from_json(json)
# print the JSON string representation of the object
print(ConsentLinkDefinition.to_json())

# convert the object into a dict
consent_link_definition_dict = consent_link_definition_instance.to_dict()
# create an instance of ConsentLinkDefinition from a dict
consent_link_definition_from_dict = ConsentLinkDefinition.from_dict(consent_link_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


