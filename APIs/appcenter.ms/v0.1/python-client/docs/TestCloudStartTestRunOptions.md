# TestCloudStartTestRunOptions

Options required to start the test run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_selection** | **str** | Device selection string. | 
**language** | **str** | Language that should be used to run tests. | [optional] 
**locale** | **str** | Locale that should be used to run tests. | [optional] 
**test_framework** | **str** | Test framework used by tests. | 
**test_parameters** | **object** | A JSON dictionary with additional test parameters | [optional] 
**test_series** | **str** | Name of the test series. | [optional] 

## Example

```python
from openapi_client.models.test_cloud_start_test_run_options import TestCloudStartTestRunOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TestCloudStartTestRunOptions from a JSON string
test_cloud_start_test_run_options_instance = TestCloudStartTestRunOptions.from_json(json)
# print the JSON string representation of the object
print(TestCloudStartTestRunOptions.to_json())

# convert the object into a dict
test_cloud_start_test_run_options_dict = test_cloud_start_test_run_options_instance.to_dict()
# create an instance of TestCloudStartTestRunOptions from a dict
test_cloud_start_test_run_options_from_dict = TestCloudStartTestRunOptions.from_dict(test_cloud_start_test_run_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


