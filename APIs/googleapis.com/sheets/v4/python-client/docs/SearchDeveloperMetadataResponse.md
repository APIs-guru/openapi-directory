# SearchDeveloperMetadataResponse

A reply to a developer metadata search request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_developer_metadata** | [**List[MatchedDeveloperMetadata]**](MatchedDeveloperMetadata.md) | The metadata matching the criteria of the search request. | [optional] 

## Example

```python
from openapi_client.models.search_developer_metadata_response import SearchDeveloperMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchDeveloperMetadataResponse from a JSON string
search_developer_metadata_response_instance = SearchDeveloperMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(SearchDeveloperMetadataResponse.to_json())

# convert the object into a dict
search_developer_metadata_response_dict = search_developer_metadata_response_instance.to_dict()
# create an instance of SearchDeveloperMetadataResponse from a dict
search_developer_metadata_response_from_dict = SearchDeveloperMetadataResponse.from_dict(search_developer_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


