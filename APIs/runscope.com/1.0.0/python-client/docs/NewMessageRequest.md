# NewMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | HTTP request body (most commonly used for POST and PUT requests). If the request body contains binary data that cannot be included directly in the  JSON, encode the content with Base64 and include the body_encoding attribute accordingly.  | [optional] 
**body_encoding** | **str** | If the request body was encoded with Base64, this field should be present and set to  \&quot;base64\&quot;. If not specified, defaults to \&quot;plaintext\&quot;  | [optional] 
**form** | **str** | JSON object of set of form fields included in a POST request.  Values can either be represented as a string or as an array of strings.  | [optional] 
**headers** | **str** | JSON object of header keys and values -- with values as a string or an array of strings. | [optional] 
**method** | **str** | HTTP method name (GET, POST, PUT, HEAD, OPTIONS, PATCH, DELETE, etc.) | [optional] 
**timestamp** | **float** | Unix timestamp indicating when the request was made. | [optional] 
**url** | **str** | Full URL of the request, including URL querystring parameters. | [optional] 

## Example

```python
from openapi_client.models.new_message_request import NewMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NewMessageRequest from a JSON string
new_message_request_instance = NewMessageRequest.from_json(json)
# print the JSON string representation of the object
print(NewMessageRequest.to_json())

# convert the object into a dict
new_message_request_dict = new_message_request_instance.to_dict()
# create an instance of NewMessageRequest from a dict
new_message_request_from_dict = NewMessageRequest.from_dict(new_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


