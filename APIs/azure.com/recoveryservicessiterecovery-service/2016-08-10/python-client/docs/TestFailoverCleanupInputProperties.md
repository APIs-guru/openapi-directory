# TestFailoverCleanupInputProperties

Input definition for test failover cleanup input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Test failover cleanup comments. | [optional] 

## Example

```python
from openapi_client.models.test_failover_cleanup_input_properties import TestFailoverCleanupInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TestFailoverCleanupInputProperties from a JSON string
test_failover_cleanup_input_properties_instance = TestFailoverCleanupInputProperties.from_json(json)
# print the JSON string representation of the object
print(TestFailoverCleanupInputProperties.to_json())

# convert the object into a dict
test_failover_cleanup_input_properties_dict = test_failover_cleanup_input_properties_instance.to_dict()
# create an instance of TestFailoverCleanupInputProperties from a dict
test_failover_cleanup_input_properties_from_dict = TestFailoverCleanupInputProperties.from_dict(test_failover_cleanup_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


