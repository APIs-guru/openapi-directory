# HyperDriveErrorResponse

Response in case of an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Error response code. | 
**message** | **str** | Error message. | 

## Example

```python
from openapi_client.models.hyper_drive_error_response import HyperDriveErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HyperDriveErrorResponse from a JSON string
hyper_drive_error_response_instance = HyperDriveErrorResponse.from_json(json)
# print the JSON string representation of the object
print(HyperDriveErrorResponse.to_json())

# convert the object into a dict
hyper_drive_error_response_dict = hyper_drive_error_response_instance.to_dict()
# create an instance of HyperDriveErrorResponse from a dict
hyper_drive_error_response_from_dict = HyperDriveErrorResponse.from_dict(hyper_drive_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


