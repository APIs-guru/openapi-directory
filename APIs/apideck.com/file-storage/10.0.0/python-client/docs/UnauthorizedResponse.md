# UnauthorizedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Contains parameter or domain specific information related to the error and why it occurred. | [optional] 
**error** | **str** | Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231) | [optional] 
**message** | **str** | A human-readable message providing more details about the error. | [optional] 
**ref** | **str** | Link to documentation of error type | [optional] 
**status_code** | **float** | HTTP status code | [optional] 
**type_name** | **str** | The type of error returned | [optional] 

## Example

```python
from openapi_client.models.unauthorized_response import UnauthorizedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UnauthorizedResponse from a JSON string
unauthorized_response_instance = UnauthorizedResponse.from_json(json)
# print the JSON string representation of the object
print(UnauthorizedResponse.to_json())

# convert the object into a dict
unauthorized_response_dict = unauthorized_response_instance.to_dict()
# create an instance of UnauthorizedResponse from a dict
unauthorized_response_from_dict = UnauthorizedResponse.from_dict(unauthorized_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


