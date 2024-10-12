# TestGDPRTestRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_hash_file_id** | **str** |  | [optional] 
**app_hash_file_url** | **str** |  | [optional] 
**app_icon_url** | **str** |  | [optional] 
**dsym_hash_file_id** | **str** |  | [optional] 
**dsym_hash_file_url** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**locale** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.test_gdpr_test_run import TestGDPRTestRun

# TODO update the JSON string below
json = "{}"
# create an instance of TestGDPRTestRun from a JSON string
test_gdpr_test_run_instance = TestGDPRTestRun.from_json(json)
# print the JSON string representation of the object
print(TestGDPRTestRun.to_json())

# convert the object into a dict
test_gdpr_test_run_dict = test_gdpr_test_run_instance.to_dict()
# create an instance of TestGDPRTestRun from a dict
test_gdpr_test_run_from_dict = TestGDPRTestRun.from_dict(test_gdpr_test_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


