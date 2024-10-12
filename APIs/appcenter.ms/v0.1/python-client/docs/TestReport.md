# TestReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_upload_id** | **str** |  | 
**var_date** | **str** |  | 
**date_finished** | **str** |  | 
**device_logs** | [**List[TestGetTestReport200ResponseDeviceLogsInner]**](TestGetTestReport200ResponseDeviceLogsInner.md) |  | 
**error_message** | **str** |  | [optional] 
**features** | [**List[TestGetTestReport200ResponseFeaturesInner]**](TestGetTestReport200ResponseFeaturesInner.md) |  | 
**finished_device_snapshots** | **List[str]** |  | 
**id** | **str** |  | 
**platform** | **str** |  | 
**revision** | **float** |  | 
**schema_version** | **float** |  | 
**snapshot_fatal_errors** | [**List[TestGetTestReport200ResponseSnapshotFatalErrorsInner]**](TestGetTestReport200ResponseSnapshotFatalErrorsInner.md) |  | [optional] 
**stats** | [**TestGetTestReport200ResponseStats**](TestGetTestReport200ResponseStats.md) |  | 
**test_type** | **str** |  | 

## Example

```python
from openapi_client.models.test_report import TestReport

# TODO update the JSON string below
json = "{}"
# create an instance of TestReport from a JSON string
test_report_instance = TestReport.from_json(json)
# print the JSON string representation of the object
print(TestReport.to_json())

# convert the object into a dict
test_report_dict = test_report_instance.to_dict()
# create an instance of TestReport from a dict
test_report_from_dict = TestReport.from_dict(test_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


