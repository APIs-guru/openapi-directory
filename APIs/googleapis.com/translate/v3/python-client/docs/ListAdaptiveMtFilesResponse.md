# ListAdaptiveMtFilesResponse

The response for listing all AdaptiveMt files under a given dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptive_mt_files** | [**List[AdaptiveMtFile]**](AdaptiveMtFile.md) | Output only. The Adaptive MT files. | [optional] [readonly] 
**next_page_token** | **str** | Optional. A token to retrieve a page of results. Pass this value in the ListAdaptiveMtFilesRequest.page_token field in the subsequent call to &#x60;ListAdaptiveMtFiles&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_adaptive_mt_files_response import ListAdaptiveMtFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdaptiveMtFilesResponse from a JSON string
list_adaptive_mt_files_response_instance = ListAdaptiveMtFilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdaptiveMtFilesResponse.to_json())

# convert the object into a dict
list_adaptive_mt_files_response_dict = list_adaptive_mt_files_response_instance.to_dict()
# create an instance of ListAdaptiveMtFilesResponse from a dict
list_adaptive_mt_files_response_from_dict = ListAdaptiveMtFilesResponse.from_dict(list_adaptive_mt_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


