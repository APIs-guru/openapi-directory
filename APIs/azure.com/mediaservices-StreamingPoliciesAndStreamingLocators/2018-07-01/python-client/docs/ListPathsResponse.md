# ListPathsResponse

Class of response for listPaths action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_paths** | **List[str]** | Download Paths supported by current Streaming Locator | [optional] 
**streaming_paths** | [**List[StreamingPath]**](StreamingPath.md) | Streaming Paths supported by current Streaming Locator | [optional] 

## Example

```python
from openapi_client.models.list_paths_response import ListPathsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPathsResponse from a JSON string
list_paths_response_instance = ListPathsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPathsResponse.to_json())

# convert the object into a dict
list_paths_response_dict = list_paths_response_instance.to_dict()
# create an instance of ListPathsResponse from a dict
list_paths_response_from_dict = ListPathsResponse.from_dict(list_paths_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


