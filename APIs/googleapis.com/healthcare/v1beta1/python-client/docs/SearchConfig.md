# SearchConfig

Contains the configuration for FHIR search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_parameters** | [**List[SearchParameter]**](SearchParameter.md) | A list of search parameters in this FHIR store that are used to configure this FHIR store. | [optional] 

## Example

```python
from openapi_client.models.search_config import SearchConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SearchConfig from a JSON string
search_config_instance = SearchConfig.from_json(json)
# print the JSON string representation of the object
print(SearchConfig.to_json())

# convert the object into a dict
search_config_dict = search_config_instance.to_dict()
# create an instance of SearchConfig from a dict
search_config_from_dict = SearchConfig.from_dict(search_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


