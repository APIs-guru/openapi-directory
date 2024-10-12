# ReportDelivery

The report's email delivery settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_owner** | **bool** | Whether the report should be emailed to the report owner. | [optional] 
**email_owner_delivery_type** | **str** | The type of delivery for the owner to receive, if enabled. | [optional] 
**message** | **str** | The message to be sent with each email. | [optional] 
**recipients** | [**List[Recipient]**](Recipient.md) | The list of recipients to which to email the report. | [optional] 

## Example

```python
from openapi_client.models.report_delivery import ReportDelivery

# TODO update the JSON string below
json = "{}"
# create an instance of ReportDelivery from a JSON string
report_delivery_instance = ReportDelivery.from_json(json)
# print the JSON string representation of the object
print(ReportDelivery.to_json())

# convert the object into a dict
report_delivery_dict = report_delivery_instance.to_dict()
# create an instance of ReportDelivery from a dict
report_delivery_from_dict = ReportDelivery.from_dict(report_delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


