# MethodCallStatus

Reports method status where exception was raised.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains_generic_parameters** | **str** | Gets a value indicating whether method container generic params. | [optional] 
**is_virtual** | **str** | Gets a value indicating whether called method was virtual | [optional] 
**parameters** | **List[str]** | Gets parameter list passed to method. | [optional] 

## Example

```python
from openapi_client.models.method_call_status import MethodCallStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MethodCallStatus from a JSON string
method_call_status_instance = MethodCallStatus.from_json(json)
# print the JSON string representation of the object
print(MethodCallStatus.to_json())

# convert the object into a dict
method_call_status_dict = method_call_status_instance.to_dict()
# create an instance of MethodCallStatus from a dict
method_call_status_from_dict = MethodCallStatus.from_dict(method_call_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


