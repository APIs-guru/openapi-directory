# ReportFilesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_count** | **str** | The size of this report file in bytes. | [optional] 
**url** | **str** | Use this url to download the report file. | [optional] 

## Example

```python
from openapi_client.models.report_files_inner import ReportFilesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReportFilesInner from a JSON string
report_files_inner_instance = ReportFilesInner.from_json(json)
# print the JSON string representation of the object
print(ReportFilesInner.to_json())

# convert the object into a dict
report_files_inner_dict = report_files_inner_instance.to_dict()
# create an instance of ReportFilesInner from a dict
report_files_inner_from_dict = ReportFilesInner.from_dict(report_files_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


