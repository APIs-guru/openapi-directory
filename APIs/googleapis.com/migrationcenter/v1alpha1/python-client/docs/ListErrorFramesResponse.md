# ListErrorFramesResponse

A response for listing error frames.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_frames** | [**List[ErrorFrame]**](ErrorFrame.md) | The list of error frames. | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_error_frames_response import ListErrorFramesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListErrorFramesResponse from a JSON string
list_error_frames_response_instance = ListErrorFramesResponse.from_json(json)
# print the JSON string representation of the object
print(ListErrorFramesResponse.to_json())

# convert the object into a dict
list_error_frames_response_dict = list_error_frames_response_instance.to_dict()
# create an instance of ListErrorFramesResponse from a dict
list_error_frames_response_from_dict = ListErrorFramesResponse.from_dict(list_error_frames_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


