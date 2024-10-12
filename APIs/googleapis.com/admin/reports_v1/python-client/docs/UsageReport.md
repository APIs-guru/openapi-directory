# UsageReport

JSON template for a usage report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | Output only. The date of the report request. | [optional] [readonly] 
**entity** | [**UsageReportEntity**](UsageReportEntity.md) |  | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | The type of API resource. For a usage report, the value is &#x60;admin#reports#usageReport&#x60;. | [optional] [default to 'admin#reports#usageReport']
**parameters** | [**List[UsageReportParametersInner]**](UsageReportParametersInner.md) | Output only. Parameter value pairs for various applications. For the Entity Usage Report parameters and values, see [the Entity Usage parameters reference](/admin-sdk/reports/v1/reference/usage-ref-appendix-a/entities). | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_report import UsageReport

# TODO update the JSON string below
json = "{}"
# create an instance of UsageReport from a JSON string
usage_report_instance = UsageReport.from_json(json)
# print the JSON string representation of the object
print(UsageReport.to_json())

# convert the object into a dict
usage_report_dict = usage_report_instance.to_dict()
# create an instance of UsageReport from a dict
usage_report_from_dict = UsageReport.from_dict(usage_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


