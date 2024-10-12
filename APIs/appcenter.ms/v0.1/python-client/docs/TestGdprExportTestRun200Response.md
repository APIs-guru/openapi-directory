# TestGdprExportTestRun200Response


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
from openapi_client.models.test_gdpr_export_test_run200_response import TestGdprExportTestRun200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TestGdprExportTestRun200Response from a JSON string
test_gdpr_export_test_run200_response_instance = TestGdprExportTestRun200Response.from_json(json)
# print the JSON string representation of the object
print(TestGdprExportTestRun200Response.to_json())

# convert the object into a dict
test_gdpr_export_test_run200_response_dict = test_gdpr_export_test_run200_response_instance.to_dict()
# create an instance of TestGdprExportTestRun200Response from a dict
test_gdpr_export_test_run200_response_from_dict = TestGdprExportTestRun200Response.from_dict(test_gdpr_export_test_run200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


