# RetrievedResponseObject

When sent a notification or alert, you'll call the /retrive/response/{requestId} function  This will return the original response 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orig_htt_pstatus** | **int** | This will be the HTTP response code that was returned originally (200, 404, etc).   In the case where you&#39;re requesting the result of a callback (previously backgrounded call), then this is the response that would have been sent, had you waited for the call to finish.  | [optional] 
**payload** | **Dict[str, object]** | This is a placeholder field. It will actually be a JSON object that is the payload that would have been returned (or was returned) in the original request. You&#39;ll need to process this as if it were the original response, and act accordingly.  | [optional] 

## Example

```python
from openapi_client.models.retrieved_response_object import RetrievedResponseObject

# TODO update the JSON string below
json = "{}"
# create an instance of RetrievedResponseObject from a JSON string
retrieved_response_object_instance = RetrievedResponseObject.from_json(json)
# print the JSON string representation of the object
print(RetrievedResponseObject.to_json())

# convert the object into a dict
retrieved_response_object_dict = retrieved_response_object_instance.to_dict()
# create an instance of RetrievedResponseObject from a dict
retrieved_response_object_from_dict = RetrievedResponseObject.from_dict(retrieved_response_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


