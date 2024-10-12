# Error

All error responses, whether `4xx` or `5xx` will include one of these as the response body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Full details about the error.  This might contain a server stack trace, for example. | [optional] 
**error_code** | **int** | The server-side error code. | [optional] 
**message** | **str** | The short error message. | [optional] 

## Example

```python
from openapi_client.models.error import Error

# TODO update the JSON string below
json = "{}"
# create an instance of Error from a JSON string
error_instance = Error.from_json(json)
# print the JSON string representation of the object
print(Error.to_json())

# convert the object into a dict
error_dict = error_instance.to_dict()
# create an instance of Error from a dict
error_from_dict = Error.from_dict(error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


