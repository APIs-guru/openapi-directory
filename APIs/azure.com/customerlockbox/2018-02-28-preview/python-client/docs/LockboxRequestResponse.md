# LockboxRequestResponse

A Lockbox request response object, containing all information associated with the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Arm resource id of the Lockbox request. | [optional] [readonly] 
**name** | **str** | The name of the Lockbox request. | [optional] [readonly] 
**properties** | [**LockboxRequestResponseProperties**](LockboxRequestResponseProperties.md) |  | [optional] 
**type** | **str** | The type of the Lockbox request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lockbox_request_response import LockboxRequestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LockboxRequestResponse from a JSON string
lockbox_request_response_instance = LockboxRequestResponse.from_json(json)
# print the JSON string representation of the object
print(LockboxRequestResponse.to_json())

# convert the object into a dict
lockbox_request_response_dict = lockbox_request_response_instance.to_dict()
# create an instance of LockboxRequestResponse from a dict
lockbox_request_response_from_dict = LockboxRequestResponse.from_dict(lockbox_request_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


