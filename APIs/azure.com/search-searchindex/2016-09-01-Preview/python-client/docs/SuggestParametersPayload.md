# SuggestParametersPayload

Parameters for filtering, sorting, fuzzy matching, and other suggestions query behaviors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | The OData $filter expression to apply to the suggestions query. | [optional] 
**fuzzy** | **bool** | A value indicating whether to use fuzzy matching for the suggestion query. Default is false. when set to true, the query will find suggestions even if there&#39;s a substituted or missing character in the search text. While this provides a better experience in some scenarios it comes at a performance cost as fuzzy suggestion searches are slower and consume more resources. | [optional] 
**highlight_post_tag** | **str** | A string tag that is appended to hit highlights. Must be set with HighlightPreTag. If omitted, hit highlighting of suggestions is disabled. | [optional] 
**highlight_pre_tag** | **str** | A string tag that is prepended to hit highlights. Must be set with HighlightPostTag. If omitted, hit highlighting of suggestions is disabled. | [optional] 
**minimum_coverage** | **float** | A number between 0 and 100 indicating the percentage of the index that must be covered by a suggestion query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 80. | [optional] 
**orderby** | **str** | The comma-separated list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to the geo.distance() function. Each expression can be followed by asc to indicate ascending, and desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no OrderBy is specified, the default sort order is descending by document match score. There can be at most 32 Orderby clauses. | [optional] 
**search** | **str** | The search text on which to base suggestions. | [optional] 
**search_fields** | **str** | The comma-separated list of field names to consider when querying for suggestions. | [optional] 
**select** | **str** | The comma-separated list of fields to retrieve. If unspecified, all fields marked as retrievable in the schema are included. | [optional] 
**suggester_name** | **str** | The name of the suggester as specified in the suggesters collection that&#39;s part of the index definition. | [optional] 
**top** | **int** | The number of suggestions to retrieve. This must be a value between 1 and 100. The default is to 5. | [optional] 

## Example

```python
from openapi_client.models.suggest_parameters_payload import SuggestParametersPayload

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestParametersPayload from a JSON string
suggest_parameters_payload_instance = SuggestParametersPayload.from_json(json)
# print the JSON string representation of the object
print(SuggestParametersPayload.to_json())

# convert the object into a dict
suggest_parameters_payload_dict = suggest_parameters_payload_instance.to_dict()
# create an instance of SuggestParametersPayload from a dict
suggest_parameters_payload_from_dict = SuggestParametersPayload.from_dict(suggest_parameters_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


