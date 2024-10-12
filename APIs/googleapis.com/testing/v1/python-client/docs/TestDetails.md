# TestDetails

Additional details about the progress of the running test.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Output only. If the TestState is ERROR, then this string will contain human-readable details about the error. | [optional] 
**progress_messages** | **List[str]** | Output only. Human-readable, detailed descriptions of the test&#39;s progress. For example: \&quot;Provisioning a device\&quot;, \&quot;Starting Test\&quot;. During the course of execution new data may be appended to the end of progress_messages. | [optional] 

## Example

```python
from openapi_client.models.test_details import TestDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TestDetails from a JSON string
test_details_instance = TestDetails.from_json(json)
# print the JSON string representation of the object
print(TestDetails.to_json())

# convert the object into a dict
test_details_dict = test_details_instance.to_dict()
# create an instance of TestDetails from a dict
test_details_from_dict = TestDetails.from_dict(test_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


