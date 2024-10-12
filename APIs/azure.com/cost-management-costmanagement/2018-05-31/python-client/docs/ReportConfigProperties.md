# ReportConfigProperties

The properties of the report config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | [**ReportConfigDefinition**](ReportConfigDefinition.md) |  | 
**delivery_info** | [**ReportConfigDeliveryInfo**](ReportConfigDeliveryInfo.md) |  | 
**format** | **str** | The format of the report being delivered. | [optional] 
**schedule** | [**ReportConfigSchedule**](ReportConfigSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_config_properties import ReportConfigProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigProperties from a JSON string
report_config_properties_instance = ReportConfigProperties.from_json(json)
# print the JSON string representation of the object
print(ReportConfigProperties.to_json())

# convert the object into a dict
report_config_properties_dict = report_config_properties_instance.to_dict()
# create an instance of ReportConfigProperties from a dict
report_config_properties_from_dict = ReportConfigProperties.from_dict(report_config_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


