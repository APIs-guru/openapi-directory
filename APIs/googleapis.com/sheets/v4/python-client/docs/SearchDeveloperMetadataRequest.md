# SearchDeveloperMetadataRequest

A request to retrieve all developer metadata matching the set of specified criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filters** | [**List[DataFilter]**](DataFilter.md) | The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response. | [optional] 

## Example

```python
from openapi_client.models.search_developer_metadata_request import SearchDeveloperMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchDeveloperMetadataRequest from a JSON string
search_developer_metadata_request_instance = SearchDeveloperMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(SearchDeveloperMetadataRequest.to_json())

# convert the object into a dict
search_developer_metadata_request_dict = search_developer_metadata_request_instance.to_dict()
# create an instance of SearchDeveloperMetadataRequest from a dict
search_developer_metadata_request_from_dict = SearchDeveloperMetadataRequest.from_dict(search_developer_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


