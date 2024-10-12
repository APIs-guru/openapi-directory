# ConfigurationCollectionSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_mentions_limit** | **int** | Limits the number of mentions of attribute responded from the server. Default: 0 | 
**concept_topics_limit** | **int** | Limits the number of concept topics responded from the service. Default: 5 | 
**facet_atts_limit** | **int** | Limits the number of facets which will be responded from the server. Default: 5 | 
**facet_mentions_limit** | **int** | Limits the number of mentions of facet responded from the server. Default: 0 | 
**facets_limit** | **int** | Limits the number of facets which will be responded from the server.  Default: 15 | 
**named_entities_limit** | **int** | Limits the number of named entities responded from the service. Default: 5 | 
**named_mentions_limit** | **int** | Limits the number of mentions of theme responded from the server. Default: 0 | 
**query_topics_limit** | **int** | Limits the number of query topics responded from the service. Default: 5 | 
**theme_mentions_limit** | **int** | Limits the number of entity mentions responded from the server. Default: 0 | 
**themes_limit** | **int** | Limits the number of themes responded from the service. Default: 5 | 
**user_entities_limit** | **int** | Limits the number of user entities the service responds. Default: 15 | 
**user_mentions_limit** | **int** | Limits the number of user entity mentions the service responds. Default: 0 | 

## Example

```python
from openapi_client.models.configuration_collection_section import ConfigurationCollectionSection

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationCollectionSection from a JSON string
configuration_collection_section_instance = ConfigurationCollectionSection.from_json(json)
# print the JSON string representation of the object
print(ConfigurationCollectionSection.to_json())

# convert the object into a dict
configuration_collection_section_dict = configuration_collection_section_instance.to_dict()
# create an instance of ConfigurationCollectionSection from a dict
configuration_collection_section_from_dict = ConfigurationCollectionSection.from_dict(configuration_collection_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


