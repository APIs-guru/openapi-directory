# TestFailoverCleanupInput

Input definition for test failover cleanup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TestFailoverCleanupInputProperties**](TestFailoverCleanupInputProperties.md) |  | 

## Example

```python
from openapi_client.models.test_failover_cleanup_input import TestFailoverCleanupInput

# TODO update the JSON string below
json = "{}"
# create an instance of TestFailoverCleanupInput from a JSON string
test_failover_cleanup_input_instance = TestFailoverCleanupInput.from_json(json)
# print the JSON string representation of the object
print(TestFailoverCleanupInput.to_json())

# convert the object into a dict
test_failover_cleanup_input_dict = test_failover_cleanup_input_instance.to_dict()
# create an instance of TestFailoverCleanupInput from a dict
test_failover_cleanup_input_from_dict = TestFailoverCleanupInput.from_dict(test_failover_cleanup_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


