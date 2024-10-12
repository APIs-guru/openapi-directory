# SearchMetadata

Metadata for search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_grouping_fields** | **str** | The aggregated grouping fields. | [optional] 
**aggregated_value_field** | **str** | The aggregated value field. | [optional] 
**core_summaries** | [**List[CoreSummary]**](CoreSummary.md) | The core summaries. | [optional] 
**e_tag** | **str** | The ETag of the search results. | [optional] 
**id** | **str** | The id of the search results request. | [optional] 
**last_updated** | **datetime** | The time of last update. | [optional] 
**max** | **int** | The max of all aggregates returned in the result set. | [optional] 
**request_id** | **str** | The request id of the search. | [optional] 
**request_time** | **int** | The request time. | [optional] 
**result_type** | **str** | The search result type. | [optional] 
**var_schema** | [**SearchMetadataSchema**](SearchMetadataSchema.md) |  | [optional] 
**sort** | [**List[SearchSort]**](SearchSort.md) | How the results are sorted. | [optional] 
**start_time** | **datetime** | The start time for the search. | [optional] 
**status** | **str** | The status of the search results. | [optional] 
**sum** | **int** | The sum of all aggregates returned in the result set. | [optional] 
**top** | **int** | The number of top search results. | [optional] 
**total** | **int** | The total number of search results. | [optional] 

## Example

```python
from openapi_client.models.search_metadata import SearchMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SearchMetadata from a JSON string
search_metadata_instance = SearchMetadata.from_json(json)
# print the JSON string representation of the object
print(SearchMetadata.to_json())

# convert the object into a dict
search_metadata_dict = search_metadata_instance.to_dict()
# create an instance of SearchMetadata from a dict
search_metadata_from_dict = SearchMetadata.from_dict(search_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


