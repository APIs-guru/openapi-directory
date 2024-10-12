# MetadataCacheStatistics

Statistics for metadata caching in BigLake tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_metadata_cache_usage** | [**List[TableMetadataCacheUsage]**](TableMetadataCacheUsage.md) | Set for the Metadata caching eligible tables referenced in the query. | [optional] 

## Example

```python
from openapi_client.models.metadata_cache_statistics import MetadataCacheStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of MetadataCacheStatistics from a JSON string
metadata_cache_statistics_instance = MetadataCacheStatistics.from_json(json)
# print the JSON string representation of the object
print(MetadataCacheStatistics.to_json())

# convert the object into a dict
metadata_cache_statistics_dict = metadata_cache_statistics_instance.to_dict()
# create an instance of MetadataCacheStatistics from a dict
metadata_cache_statistics_from_dict = MetadataCacheStatistics.from_dict(metadata_cache_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


