# SuggestRequest

Request of suggest API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_restrictions** | [**List[DataSourceRestriction]**](DataSourceRestriction.md) | The sources to use for suggestions. If not specified, the data sources are taken from the current search application. NOTE: Suggestions are only supported for the following sources: * Third-party data sources * PredefinedSource.PERSON * PredefinedSource.GOOGLE_DRIVE | [optional] 
**query** | **str** | Partial query for which autocomplete suggestions will be shown. For example, if the query is \&quot;sea\&quot;, then the server might return \&quot;season\&quot;, \&quot;search\&quot;, \&quot;seagull\&quot; and so on. | [optional] 
**request_options** | [**RequestOptions**](RequestOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggest_request import SuggestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestRequest from a JSON string
suggest_request_instance = SuggestRequest.from_json(json)
# print the JSON string representation of the object
print(SuggestRequest.to_json())

# convert the object into a dict
suggest_request_dict = suggest_request_instance.to_dict()
# create an instance of SuggestRequest from a dict
suggest_request_from_dict = SuggestRequest.from_dict(suggest_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


