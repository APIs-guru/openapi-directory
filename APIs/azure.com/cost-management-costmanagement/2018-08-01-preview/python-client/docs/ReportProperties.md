# ReportProperties

The properties of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**ReportSchedule**](ReportSchedule.md) |  | [optional] 
**definition** | [**ReportDefinition**](ReportDefinition.md) |  | 
**delivery_info** | [**ReportDeliveryInfo**](ReportDeliveryInfo.md) |  | 
**format** | **str** | The format of the report being delivered. | [optional] 

## Example

```python
from openapi_client.models.report_properties import ReportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReportProperties from a JSON string
report_properties_instance = ReportProperties.from_json(json)
# print the JSON string representation of the object
print(ReportProperties.to_json())

# convert the object into a dict
report_properties_dict = report_properties_instance.to_dict()
# create an instance of ReportProperties from a dict
report_properties_from_dict = ReportProperties.from_dict(report_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


