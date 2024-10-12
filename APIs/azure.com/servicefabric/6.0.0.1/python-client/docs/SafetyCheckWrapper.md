# SafetyCheckWrapper

A wrapper for the safety check object. Safety checks are performed by service fabric before continuing with the operations. These checks ensure the availability of the service and the reliability of the state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**safety_check** | [**SafetyCheck**](SafetyCheck.md) |  | [optional] 

## Example

```python
from openapi_client.models.safety_check_wrapper import SafetyCheckWrapper

# TODO update the JSON string below
json = "{}"
# create an instance of SafetyCheckWrapper from a JSON string
safety_check_wrapper_instance = SafetyCheckWrapper.from_json(json)
# print the JSON string representation of the object
print(SafetyCheckWrapper.to_json())

# convert the object into a dict
safety_check_wrapper_dict = safety_check_wrapper_instance.to_dict()
# create an instance of SafetyCheckWrapper from a dict
safety_check_wrapper_from_dict = SafetyCheckWrapper.from_dict(safety_check_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


