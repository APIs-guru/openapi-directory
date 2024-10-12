# NotImplementedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | [**NotImplementedResponseDetail**](NotImplementedResponseDetail.md) |  | [optional] 
**error** | **str** | Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) | [optional] 
**message** | **str** | A human-readable message providing more details about the error. | [optional] 
**ref** | **str** | Link to documentation of error type | [optional] 
**status_code** | **float** | HTTP status code | [optional] 
**type_name** | **str** | The type of error returned | [optional] 

## Example

```python
from openapi_client.models.not_implemented_response import NotImplementedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotImplementedResponse from a JSON string
not_implemented_response_instance = NotImplementedResponse.from_json(json)
# print the JSON string representation of the object
print(NotImplementedResponse.to_json())

# convert the object into a dict
not_implemented_response_dict = not_implemented_response_instance.to_dict()
# create an instance of NotImplementedResponse from a dict
not_implemented_response_from_dict = NotImplementedResponse.from_dict(not_implemented_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


