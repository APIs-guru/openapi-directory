# SearchApplication

SearchApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_restrictions** | [**List[DataSourceRestriction]**](DataSourceRestriction.md) | Retrictions applied to the configurations. The maximum number of elements is 10. | [optional] 
**default_facet_options** | [**List[FacetOptions]**](FacetOptions.md) | The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above. | [optional] 
**default_sort_options** | [**SortOptions**](SortOptions.md) |  | [optional] 
**display_name** | **str** | Display name of the Search Application. The maximum length is 300 characters. | [optional] 
**enable_audit_log** | **bool** | Indicates whether audit logging is on/off for requests made for the search application in query APIs. | [optional] 
**name** | **str** | The name of the Search Application. Format: searchapplications/{application_id}. | [optional] 
**operation_ids** | **List[str]** | Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field. | [optional] [readonly] 
**query_interpretation_config** | [**QueryInterpretationConfig**](QueryInterpretationConfig.md) |  | [optional] 
**return_result_thumbnail_urls** | **bool** | With each result we should return the URI for its thumbnail (when applicable) | [optional] 
**scoring_config** | [**ScoringConfig**](ScoringConfig.md) |  | [optional] 
**source_config** | [**List[SourceConfig]**](SourceConfig.md) | Configuration for a sources specified in data_source_restrictions. | [optional] 

## Example

```python
from openapi_client.models.search_application import SearchApplication

# TODO update the JSON string below
json = "{}"
# create an instance of SearchApplication from a JSON string
search_application_instance = SearchApplication.from_json(json)
# print the JSON string representation of the object
print(SearchApplication.to_json())

# convert the object into a dict
search_application_dict = search_application_instance.to_dict()
# create an instance of SearchApplication from a dict
search_application_from_dict = SearchApplication.from_dict(search_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


