# TestCloudTestRunStartResult

Result of starting a test run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_devices** | **List[str]** | List with names of accepted devices | [optional] 
**rejected_devices** | **List[str]** | List with names and descriptions of rejected devices | [optional] 

## Example

```python
from openapi_client.models.test_cloud_test_run_start_result import TestCloudTestRunStartResult

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudTestRunStartResult from a JSON string
test_cloud_test_run_start_result_instance = TestCloudTestRunStartResult.from_json(json)
# print the JSON string representation of the object
print(TestCloudTestRunStartResult.to_json())

# convert the object into a dict
test_cloud_test_run_start_result_dict = test_cloud_test_run_start_result_instance.to_dict()
# create an instance of TestCloudTestRunStartResult from a dict
test_cloud_test_run_start_result_from_dict = TestCloudTestRunStartResult.from_dict(test_cloud_test_run_start_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


