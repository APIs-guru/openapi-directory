# TestFailoverInput

Input definition for planned failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TestFailoverInputProperties**](TestFailoverInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_failover_input import TestFailoverInput

# TODO update the JSON string below
json = "{}"
# create an instance of TestFailoverInput from a JSON string
test_failover_input_instance = TestFailoverInput.from_json(json)
# print the JSON string representation of the object
print(TestFailoverInput.to_json())

# convert the object into a dict
test_failover_input_dict = test_failover_input_instance.to_dict()
# create an instance of TestFailoverInput from a dict
test_failover_input_from_dict = TestFailoverInput.from_dict(test_failover_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


