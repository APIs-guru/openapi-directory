# ARMException

ARM inner exception class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets HTTP status code for the error. | [optional] 
**details** | [**List[ARMExceptionDetails]**](ARMExceptionDetails.md) | Gets service based error details. | [optional] 
**innererror** | [**ARMInnerError**](ARMInnerError.md) |  | [optional] 
**message** | **str** | Gets exception message. | [optional] 
**target** | **str** | Gets exception target. | [optional] 

## Example

```python
from openapi_client.models.arm_exception import ARMException

# TODO update the JSON string below
json = "{}"
# create an instance of ARMException from a JSON string
arm_exception_instance = ARMException.from_json(json)
# print the JSON string representation of the object
print(ARMException.to_json())

# convert the object into a dict
arm_exception_dict = arm_exception_instance.to_dict()
# create an instance of ARMException from a dict
arm_exception_from_dict = ARMException.from_dict(arm_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


