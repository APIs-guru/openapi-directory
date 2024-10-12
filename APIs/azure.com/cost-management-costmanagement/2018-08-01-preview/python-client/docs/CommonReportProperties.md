# CommonReportProperties

The common properties of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | [**ReportDefinition**](ReportDefinition.md) |  | 
**delivery_info** | [**ReportDeliveryInfo**](ReportDeliveryInfo.md) |  | 
**format** | **str** | The format of the report being delivered. | [optional] 

## Example

```python
from openapi_client.models.common_report_properties import CommonReportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CommonReportProperties from a JSON string
common_report_properties_instance = CommonReportProperties.from_json(json)
# print the JSON string representation of the object
print(CommonReportProperties.to_json())

# convert the object into a dict
common_report_properties_dict = common_report_properties_instance.to_dict()
# create an instance of CommonReportProperties from a dict
common_report_properties_from_dict = CommonReportProperties.from_dict(common_report_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


