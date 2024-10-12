# NewMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | HTTP response body. If the response body contains binary data that cannot be included directly in the JSON, you should encode the content with Base64.  | [optional] 
**body_encoding** | **str** | If the request body was encoded with Base64, this field should be present and set to  \&quot;base64\&quot;. If not specified, defaults to \&quot;plaintext\&quot;  | [optional] 
**headers** | **str** | JSON object of header keys and values -- with values as a string or an array of strings. | [optional] 
**reason** | **str** | Textual description of HTTP status code. This will be set automatically if not  provided in the API call. For example, if the status code is 404, this will be  set to \&quot;Not Found\&quot; unless you explicitly specify a different reason.  | [optional] 
**response_time** | **float** | Length of time it took to receive the response, in seconds. | [optional] 
**status** | **int** | HTTP status code returned in the response. | [optional] 
**timestamp** | **float** | Unix timestamp indicating when the request was made. | [optional] 

## Example

```python
from openapi_client.models.new_message_response import NewMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NewMessageResponse from a JSON string
new_message_response_instance = NewMessageResponse.from_json(json)
# print the JSON string representation of the object
print(NewMessageResponse.to_json())

# convert the object into a dict
new_message_response_dict = new_message_response_instance.to_dict()
# create an instance of NewMessageResponse from a dict
new_message_response_from_dict = NewMessageResponse.from_dict(new_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


