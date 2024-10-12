# ReportKey

Key used to identify a report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_id** | **str** | Output only. Query ID. | [optional] [readonly] 
**report_id** | **str** | Output only. Report ID. | [optional] [readonly] 

## Example

```python
from openapi_client.models.report_key import ReportKey

# TODO update the JSON string below
json = "{}"
# create an instance of ReportKey from a JSON string
report_key_instance = ReportKey.from_json(json)
# print the JSON string representation of the object
print(ReportKey.to_json())

# convert the object into a dict
report_key_dict = report_key_instance.to_dict()
# create an instance of ReportKey from a dict
report_key_from_dict = ReportKey.from_dict(report_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


