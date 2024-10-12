# MarketplaceRegistrationDefinitionList

List of marketplace registration definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of marketplace registration definitions. | [optional] [readonly] 
**value** | [**List[RegistrationDefinition]**](RegistrationDefinition.md) | List of marketplace registration definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.marketplace_registration_definition_list import MarketplaceRegistrationDefinitionList

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceRegistrationDefinitionList from a JSON string
marketplace_registration_definition_list_instance = MarketplaceRegistrationDefinitionList.from_json(json)
# print the JSON string representation of the object
print(MarketplaceRegistrationDefinitionList.to_json())

# convert the object into a dict
marketplace_registration_definition_list_dict = marketplace_registration_definition_list_instance.to_dict()
# create an instance of MarketplaceRegistrationDefinitionList from a dict
marketplace_registration_definition_list_from_dict = MarketplaceRegistrationDefinitionList.from_dict(marketplace_registration_definition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


