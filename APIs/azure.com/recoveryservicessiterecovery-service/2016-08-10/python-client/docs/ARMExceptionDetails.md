# ARMExceptionDetails

Service based exception details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **str** | Gets the activity Id for the session. | [optional] 
**client_request_id** | **str** | Gets the client request Id for the session. | [optional] 
**code** | **str** | Gets service error code. | [optional] 
**message** | **str** | Gets error message. | [optional] 
**possible_causes** | **str** | Gets possible cause for error. | [optional] 
**recommended_action** | **str** | Gets recommended action for the error. | [optional] 
**target** | **str** | Gets exception target. | [optional] 

## Example

```python
from openapi_client.models.arm_exception_details import ARMExceptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ARMExceptionDetails from a JSON string
arm_exception_details_instance = ARMExceptionDetails.from_json(json)
# print the JSON string representation of the object
print(ARMExceptionDetails.to_json())

# convert the object into a dict
arm_exception_details_dict = arm_exception_details_instance.to_dict()
# create an instance of ARMExceptionDetails from a dict
arm_exception_details_from_dict = ARMExceptionDetails.from_dict(arm_exception_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


