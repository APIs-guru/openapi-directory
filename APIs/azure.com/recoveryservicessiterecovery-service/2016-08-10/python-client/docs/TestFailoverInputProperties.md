# TestFailoverInputProperties

Input definition for planned failover input properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_direction** | **str** | Failover direction. | [optional] 
**network_id** | **str** | The id of the network to be used for test failover | [optional] 
**network_type** | **str** | Network type to be used for test failover. | [optional] 
**provider_specific_details** | [**ProviderSpecificFailoverInput**](ProviderSpecificFailoverInput.md) |  | [optional] 
**skip_test_failover_cleanup** | **str** | A value indicating whether the test failover cleanup is to be skipped. | [optional] 

## Example

```python
from openapi_client.models.test_failover_input_properties import TestFailoverInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TestFailoverInputProperties from a JSON string
test_failover_input_properties_instance = TestFailoverInputProperties.from_json(json)
# print the JSON string representation of the object
print(TestFailoverInputProperties.to_json())

# convert the object into a dict
test_failover_input_properties_dict = test_failover_input_properties_instance.to_dict()
# create an instance of TestFailoverInputProperties from a dict
test_failover_input_properties_from_dict = TestFailoverInputProperties.from_dict(test_failover_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


