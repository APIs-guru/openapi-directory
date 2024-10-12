# SearchQualityMetadata

Additional search quality metadata of the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quality** | **float** | An indication of the quality of the item, used to influence search quality. Value should be between 0.0 (lowest quality) and 1.0 (highest quality). The default value is 0.0. | [optional] 

## Example

```python
from openapi_client.models.search_quality_metadata import SearchQualityMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SearchQualityMetadata from a JSON string
search_quality_metadata_instance = SearchQualityMetadata.from_json(json)
# print the JSON string representation of the object
print(SearchQualityMetadata.to_json())

# convert the object into a dict
search_quality_metadata_dict = search_quality_metadata_instance.to_dict()
# create an instance of SearchQualityMetadata from a dict
search_quality_metadata_from_dict = SearchQualityMetadata.from_dict(search_quality_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


