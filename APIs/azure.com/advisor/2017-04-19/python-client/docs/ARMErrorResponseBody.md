# ARMErrorResponseBody

ARM error response body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets or sets the string that can be used to programmatically identify the error. | [optional] 
**message** | **str** | Gets or sets the string that describes the error in detail and provides debugging information. | [optional] 

## Example

```python
from openapi_client.models.arm_error_response_body import ARMErrorResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ARMErrorResponseBody from a JSON string
arm_error_response_body_instance = ARMErrorResponseBody.from_json(json)
# print the JSON string representation of the object
print(ARMErrorResponseBody.to_json())

# convert the object into a dict
arm_error_response_body_dict = arm_error_response_body_instance.to_dict()
# create an instance of ARMErrorResponseBody from a dict
arm_error_response_body_from_dict = ARMErrorResponseBody.from_dict(arm_error_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


