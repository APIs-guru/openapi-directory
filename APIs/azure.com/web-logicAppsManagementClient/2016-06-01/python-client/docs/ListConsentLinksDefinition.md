# ListConsentLinksDefinition

Request for a list of consent links

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**List[ConsentLinkParameterDefinition]**](ConsentLinkParameterDefinition.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.list_consent_links_definition import ListConsentLinksDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ListConsentLinksDefinition from a JSON string
list_consent_links_definition_instance = ListConsentLinksDefinition.from_json(json)
# print the JSON string representation of the object
print(ListConsentLinksDefinition.to_json())

# convert the object into a dict
list_consent_links_definition_dict = list_consent_links_definition_instance.to_dict()
# create an instance of ListConsentLinksDefinition from a dict
list_consent_links_definition_from_dict = ListConsentLinksDefinition.from_dict(list_consent_links_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


