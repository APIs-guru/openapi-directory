# OrderReportDisbursement

Order disbursement. All methods require the payment analyst role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disbursement_amount** | [**Price**](Price.md) |  | [optional] 
**disbursement_creation_date** | **str** | The disbursement date, in ISO 8601 format. | [optional] 
**disbursement_date** | **str** | The date the disbursement was initiated, in ISO 8601 format. | [optional] 
**disbursement_id** | **str** | The ID of the disbursement. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 

## Example

```python
from openapi_client.models.order_report_disbursement import OrderReportDisbursement

# TODO update the JSON string below
json = "{}"
# create an instance of OrderReportDisbursement from a JSON string
order_report_disbursement_instance = OrderReportDisbursement.from_json(json)
# print the JSON string representation of the object
print(OrderReportDisbursement.to_json())

# convert the object into a dict
order_report_disbursement_dict = order_report_disbursement_instance.to_dict()
# create an instance of OrderReportDisbursement from a dict
order_report_disbursement_from_dict = OrderReportDisbursement.from_dict(order_report_disbursement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


