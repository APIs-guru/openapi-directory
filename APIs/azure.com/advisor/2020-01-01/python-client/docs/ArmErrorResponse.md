# ArmErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ARMErrorResponseBody**](ARMErrorResponseBody.md) |  | [optional] 

## Example

```python
from openapi_client.models.arm_error_response import ArmErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ArmErrorResponse from a JSON string
arm_error_response_instance = ArmErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ArmErrorResponse.to_json())

# convert the object into a dict
arm_error_response_dict = arm_error_response_instance.to_dict()
# create an instance of ArmErrorResponse from a dict
arm_error_response_from_dict = ArmErrorResponse.from_dict(arm_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


