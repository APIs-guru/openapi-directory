# ReportConfigDeliveryInfo

The delivery information associated with a report config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**ReportConfigDeliveryDestination**](ReportConfigDeliveryDestination.md) |  | 

## Example

```python
from openapi_client.models.report_config_delivery_info import ReportConfigDeliveryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigDeliveryInfo from a JSON string
report_config_delivery_info_instance = ReportConfigDeliveryInfo.from_json(json)
# print the JSON string representation of the object
print(ReportConfigDeliveryInfo.to_json())

# convert the object into a dict
report_config_delivery_info_dict = report_config_delivery_info_instance.to_dict()
# create an instance of ReportConfigDeliveryInfo from a dict
report_config_delivery_info_from_dict = ReportConfigDeliveryInfo.from_dict(report_config_delivery_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


