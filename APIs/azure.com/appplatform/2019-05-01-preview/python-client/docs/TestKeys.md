# TestKeys

Test keys payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates whether the test endpoint feature enabled or not | [optional] 
**primary_key** | **str** | Primary key | [optional] 
**primary_test_endpoint** | **str** | Primary test endpoint | [optional] 
**secondary_key** | **str** | Secondary key | [optional] 
**secondary_test_endpoint** | **str** | Secondary test endpoint | [optional] 

## Example

```python
from openapi_client.models.test_keys import TestKeys

# TODO update the JSON string below
json = "{}"
# create an instance of TestKeys from a JSON string
test_keys_instance = TestKeys.from_json(json)
# print the JSON string representation of the object
print(TestKeys.to_json())

# convert the object into a dict
test_keys_dict = test_keys_instance.to_dict()
# create an instance of TestKeys from a dict
test_keys_from_dict = TestKeys.from_dict(test_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


