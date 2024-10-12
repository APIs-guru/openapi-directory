# ListStreamObjectsResponse

Response containing the objects for a stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. | [optional] 
**stream_objects** | [**List[StreamObject]**](StreamObject.md) | List of stream objects. | [optional] 

## Example

```python
from openapi_client.models.list_stream_objects_response import ListStreamObjectsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStreamObjectsResponse from a JSON string
list_stream_objects_response_instance = ListStreamObjectsResponse.from_json(json)
# print the JSON string representation of the object
print(ListStreamObjectsResponse.to_json())

# convert the object into a dict
list_stream_objects_response_dict = list_stream_objects_response_instance.to_dict()
# create an instance of ListStreamObjectsResponse from a dict
list_stream_objects_response_from_dict = ListStreamObjectsResponse.from_dict(list_stream_objects_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


