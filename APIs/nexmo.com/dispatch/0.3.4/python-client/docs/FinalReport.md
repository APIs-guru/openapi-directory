# FinalReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**FinalReportLinks**](FinalReportLinks.md) |  | [optional] 
**dispatch_uuid** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**template** | **str** |  | [optional] 
**timestamp** | **str** | The datetime of when the event occurred. | [optional] 
**usage** | [**FinalReportUsage**](FinalReportUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.final_report import FinalReport

# TODO update the JSON string below
json = "{}"
# create an instance of FinalReport from a JSON string
final_report_instance = FinalReport.from_json(json)
# print the JSON string representation of the object
print(FinalReport.to_json())

# convert the object into a dict
final_report_dict = final_report_instance.to_dict()
# create an instance of FinalReport from a dict
final_report_from_dict = FinalReport.from_dict(final_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


