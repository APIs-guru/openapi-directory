# GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig

The configuration for continuous tests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_continuous_run** | **bool** | Whether to run test cases in TestCasesConfig.test_cases periodically. Default false. If set to true, run once a day. | [optional] 
**enable_predeployment_run** | **bool** | Whether to run test cases in TestCasesConfig.test_cases before deploying a flow version to the environment. Default false. | [optional] 
**test_cases** | **List[str]** | A list of test case names to run. They should be under the same agent. Format of each test case name: &#x60;projects//locations/ /agents//testCases/&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_environment_test_cases_config import GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig from a JSON string
google_cloud_dialogflow_cx_v3_environment_test_cases_config_instance = GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_environment_test_cases_config_dict = google_cloud_dialogflow_cx_v3_environment_test_cases_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig from a dict
google_cloud_dialogflow_cx_v3_environment_test_cases_config_from_dict = GoogleCloudDialogflowCxV3EnvironmentTestCasesConfig.from_dict(google_cloud_dialogflow_cx_v3_environment_test_cases_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


