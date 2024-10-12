# TestCloudStartTestRunResult

Result of starting a test run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_devices** | **List[str]** | List with names of accepted devices | [optional] 
**rejected_devices** | **List[str]** | List with names and descriptions of rejected devices | [optional] 

## Example

```python
from openapi_client.models.test_cloud_start_test_run_result import TestCloudStartTestRunResult

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudStartTestRunResult from a JSON string
test_cloud_start_test_run_result_instance = TestCloudStartTestRunResult.from_json(json)
# print the JSON string representation of the object
print(TestCloudStartTestRunResult.to_json())

# convert the object into a dict
test_cloud_start_test_run_result_dict = test_cloud_start_test_run_result_instance.to_dict()
# create an instance of TestCloudStartTestRunResult from a dict
test_cloud_start_test_run_result_from_dict = TestCloudStartTestRunResult.from_dict(test_cloud_start_test_run_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


