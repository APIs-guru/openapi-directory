# SafetyCheck

Represents a safety check performed by service fabric before continuing with the operations. These checks ensure the availability of the service and the reliability of the state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**SafetyCheckKind**](SafetyCheckKind.md) |  | 

## Example

```python
from openapi_client.models.safety_check import SafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of SafetyCheck from a JSON string
safety_check_instance = SafetyCheck.from_json(json)
# print the JSON string representation of the object
print(SafetyCheck.to_json())

# convert the object into a dict
safety_check_dict = safety_check_instance.to_dict()
# create an instance of SafetyCheck from a dict
safety_check_from_dict = SafetyCheck.from_dict(safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


