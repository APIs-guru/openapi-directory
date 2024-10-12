# UsageReportParametersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Output only. Boolean value of the parameter. | [optional] [readonly] 
**datetime_value** | **datetime** | The RFC 3339 formatted value of the parameter, for example 2010-10-28T10:26:35.000Z. | [optional] [readonly] 
**int_value** | **str** | Output only. Integer value of the parameter. | [optional] [readonly] 
**msg_value** | **List[Dict[str, object]]** | Output only. Nested message value of the parameter. | [optional] [readonly] 
**name** | **str** | The name of the parameter. For the User Usage Report parameter names, see the User Usage parameters reference. | [optional] 
**string_value** | **str** | Output only. String value of the parameter. | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_report_parameters_inner import UsageReportParametersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UsageReportParametersInner from a JSON string
usage_report_parameters_inner_instance = UsageReportParametersInner.from_json(json)
# print the JSON string representation of the object
print(UsageReportParametersInner.to_json())

# convert the object into a dict
usage_report_parameters_inner_dict = usage_report_parameters_inner_instance.to_dict()
# create an instance of UsageReportParametersInner from a dict
usage_report_parameters_inner_from_dict = UsageReportParametersInner.from_dict(usage_report_parameters_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


