# SuggestParameters

Parameters for filtering, sorting, fuzzy matching, and other suggestions query behaviors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Gets or sets the OData $filter expression to apply to the suggestions query. | [optional] 
**highlight_post_tag** | **str** | Gets or sets a string tag that is appended to hit highlights. Must be set with HighlightPreTag. If omitted, hit highlighting of suggestions is disabled. | [optional] 
**highlight_pre_tag** | **str** | Gets or sets a string tag that is prepended to hit highlights. Must be set with HighlightPostTag. If omitted, hit highlighting of suggestions is disabled. | [optional] 
**minimum_coverage** | **float** | Gets or sets a number between 0 and 100 indicating the percentage of the index that must be covered by a suggestion query in order for the query to be reported as a success. This parameter can be useful for ensuring search availability even for services with only one replica. The default is 80. | [optional] 
**order_by** | **List[str]** | Gets or sets the list of OData $orderby expressions by which to sort the results. Each expression can be either a field name or a call to the geo.distance() function. Each expression can be followed by asc to indicate ascending, and desc to indicate descending. The default is ascending order. Ties will be broken by the match scores of documents. If no OrderBy is specified, the default sort order is descending by document match score. There can be at most 32 Orderby clauses. | [optional] 
**search_fields** | **List[str]** | Gets or sets the list of field names to consider when querying for suggestions. | [optional] 
**select** | **List[str]** | Gets or sets the list of fields to retrieve. If unspecified, all fields marked as retrievable in the schema are included. | [optional] 
**top** | **int** | Gets or sets the number of suggestions to retrieve. This must be a value between 1 and 100. The default is to 5. | [optional] 
**use_fuzzy_matching** | **bool** | Gets or sets a value indicating whether to use fuzzy matching for the suggestion query. Default is false. when set to true, the query will find suggestions even if there&#39;s a substituted or missing character in the search text. While this provides a better experience in some scenarios it comes at a performance cost as fuzzy suggestion searches are slower and consume more resources. | [optional] 

## Example

```python
from openapi_client.models.suggest_parameters import SuggestParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestParameters from a JSON string
suggest_parameters_instance = SuggestParameters.from_json(json)
# print the JSON string representation of the object
print(SuggestParameters.to_json())

# convert the object into a dict
suggest_parameters_dict = suggest_parameters_instance.to_dict()
# create an instance of SuggestParameters from a dict
suggest_parameters_from_dict = SuggestParameters.from_dict(suggest_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


