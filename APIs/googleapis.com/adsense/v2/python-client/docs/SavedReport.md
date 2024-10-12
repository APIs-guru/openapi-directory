# SavedReport

Representation of a saved report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the report. Format: accounts/{account}/reports/{report} | [optional] [readonly] 
**title** | **str** | Report title as specified by publisher. | [optional] 

## Example

```python
from openapi_client.models.saved_report import SavedReport

# TODO update the JSON string below
json = "{}"
# create an instance of SavedReport from a JSON string
saved_report_instance = SavedReport.from_json(json)
# print the JSON string representation of the object
print(SavedReport.to_json())

# convert the object into a dict
saved_report_dict = saved_report_instance.to_dict()
# create an instance of SavedReport from a dict
saved_report_from_dict = SavedReport.from_dict(saved_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


