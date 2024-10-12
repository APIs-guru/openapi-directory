# TestMatrix

TestMatrix captures all details about a test. It contains the environment configuration, test specification, test executions and overall state and outcome.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_info** | [**ClientInfo**](ClientInfo.md) |  | [optional] 
**environment_matrix** | [**EnvironmentMatrix**](EnvironmentMatrix.md) |  | [optional] 
**extended_invalid_matrix_details** | [**List[MatrixErrorDetail]**](MatrixErrorDetail.md) | Output only. Details about why a matrix was deemed invalid. If multiple checks can be safely performed, they will be reported but no assumptions should be made about the length of this list. | [optional] [readonly] 
**fail_fast** | **bool** | If true, only a single attempt at most will be made to run each execution/shard in the matrix. Flaky test attempts are not affected. Normally, 2 or more attempts are made if a potential infrastructure issue is detected. This feature is for latency sensitive workloads. The incidence of execution failures may be significantly greater for fail-fast matrices and support is more limited because of that expectation. | [optional] 
**flaky_test_attempts** | **int** | The number of times a TestExecution should be re-attempted if one or more of its test cases fail for any reason. The maximum number of reruns allowed is 10. Default is 0, which implies no reruns. | [optional] 
**invalid_matrix_details** | **str** | Output only. Describes why the matrix is considered invalid. Only useful for matrices in the INVALID state. | [optional] 
**outcome_summary** | **str** | Output Only. The overall outcome of the test. Only set when the test matrix state is FINISHED. | [optional] 
**project_id** | **str** | The cloud project that owns the test matrix. | [optional] 
**result_storage** | [**ResultStorage**](ResultStorage.md) |  | [optional] 
**state** | **str** | Output only. Indicates the current progress of the test matrix. | [optional] 
**test_executions** | [**List[TestExecution]**](TestExecution.md) | Output only. The list of test executions that the service creates for this matrix. | [optional] 
**test_matrix_id** | **str** | Output only. Unique id set by the service. | [optional] 
**test_specification** | [**TestSpecification**](TestSpecification.md) |  | [optional] 
**timestamp** | **str** | Output only. The time this test matrix was initially created. | [optional] 

## Example

```python
from openapi_client.models.test_matrix import TestMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of TestMatrix from a JSON string
test_matrix_instance = TestMatrix.from_json(json)
# print the JSON string representation of the object
print(TestMatrix.to_json())

# convert the object into a dict
test_matrix_dict = test_matrix_instance.to_dict()
# create an instance of TestMatrix from a dict
test_matrix_from_dict = TestMatrix.from_dict(test_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


