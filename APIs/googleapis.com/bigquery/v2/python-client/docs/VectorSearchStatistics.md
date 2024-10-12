# VectorSearchStatistics

Statistics for a vector search query. Populated as part of JobStatistics2.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index_unused_reasons** | [**List[IndexUnusedReason]**](IndexUnusedReason.md) | When &#x60;indexUsageMode&#x60; is &#x60;UNUSED&#x60; or &#x60;PARTIALLY_USED&#x60;, this field explains why indexes were not used in all or part of the vector search query. If &#x60;indexUsageMode&#x60; is &#x60;FULLY_USED&#x60;, this field is not populated. | [optional] 
**index_usage_mode** | **str** | Specifies the index usage mode for the query. | [optional] 

## Example

```python
from openapi_client.models.vector_search_statistics import VectorSearchStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of VectorSearchStatistics from a JSON string
vector_search_statistics_instance = VectorSearchStatistics.from_json(json)
# print the JSON string representation of the object
print(VectorSearchStatistics.to_json())

# convert the object into a dict
vector_search_statistics_dict = vector_search_statistics_instance.to_dict()
# create an instance of VectorSearchStatistics from a dict
vector_search_statistics_from_dict = VectorSearchStatistics.from_dict(vector_search_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


