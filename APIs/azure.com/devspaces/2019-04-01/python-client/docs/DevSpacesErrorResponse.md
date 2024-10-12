# DevSpacesErrorResponse

Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ErrorDetails**](ErrorDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.dev_spaces_error_response import DevSpacesErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DevSpacesErrorResponse from a JSON string
dev_spaces_error_response_instance = DevSpacesErrorResponse.from_json(json)
# print the JSON string representation of the object
print(DevSpacesErrorResponse.to_json())

# convert the object into a dict
dev_spaces_error_response_dict = dev_spaces_error_response_instance.to_dict()
# create an instance of DevSpacesErrorResponse from a dict
dev_spaces_error_response_from_dict = DevSpacesErrorResponse.from_dict(dev_spaces_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


