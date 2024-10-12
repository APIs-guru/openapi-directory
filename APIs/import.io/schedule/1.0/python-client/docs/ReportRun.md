# ReportRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_publish** | **bool** |  | [optional] 
**guid** | **str** |  | [optional] 
**latest_config_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.report_run import ReportRun

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRun from a JSON string
report_run_instance = ReportRun.from_json(json)
# print the JSON string representation of the object
print(ReportRun.to_json())

# convert the object into a dict
report_run_dict = report_run_instance.to_dict()
# create an instance of ReportRun from a dict
report_run_from_dict = ReportRun.from_dict(report_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


