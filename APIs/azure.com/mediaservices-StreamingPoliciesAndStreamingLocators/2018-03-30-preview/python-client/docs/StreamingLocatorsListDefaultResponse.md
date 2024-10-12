# StreamingLocatorsListDefaultResponse

The API error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**StreamingLocatorsListDefaultResponseError**](StreamingLocatorsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.streaming_locators_list_default_response import StreamingLocatorsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingLocatorsListDefaultResponse from a JSON string
streaming_locators_list_default_response_instance = StreamingLocatorsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(StreamingLocatorsListDefaultResponse.to_json())

# convert the object into a dict
streaming_locators_list_default_response_dict = streaming_locators_list_default_response_instance.to_dict()
# create an instance of StreamingLocatorsListDefaultResponse from a dict
streaming_locators_list_default_response_from_dict = StreamingLocatorsListDefaultResponse.from_dict(streaming_locators_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


