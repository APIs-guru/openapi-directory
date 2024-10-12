# ReportDeliveryInfo

The delivery information associated with a report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**ReportDeliveryDestination**](ReportDeliveryDestination.md) |  | 

## Example

```python
from openapi_client.models.report_delivery_info import ReportDeliveryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReportDeliveryInfo from a JSON string
report_delivery_info_instance = ReportDeliveryInfo.from_json(json)
# print the JSON string representation of the object
print(ReportDeliveryInfo.to_json())

# convert the object into a dict
report_delivery_info_dict = report_delivery_info_instance.to_dict()
# create an instance of ReportDeliveryInfo from a dict
report_delivery_info_from_dict = ReportDeliveryInfo.from_dict(report_delivery_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


