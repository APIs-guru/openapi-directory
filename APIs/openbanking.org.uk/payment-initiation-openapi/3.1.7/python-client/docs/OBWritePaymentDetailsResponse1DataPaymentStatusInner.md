# OBWritePaymentDetailsResponse1DataPaymentStatusInner

Payment status details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_transaction_id** | **str** | Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable. | 
**status** | **str** | Status of a transfe, as assigned by the transaction administrator. | 
**status_detail** | [**OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail**](OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail.md) |  | [optional] 
**status_update_date_time** | **datetime** | Date and time at which the status was assigned to the transfer.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 

## Example

```python
from openapi_client.models.ob_write_payment_details_response1_data_payment_status_inner import OBWritePaymentDetailsResponse1DataPaymentStatusInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBWritePaymentDetailsResponse1DataPaymentStatusInner from a JSON string
ob_write_payment_details_response1_data_payment_status_inner_instance = OBWritePaymentDetailsResponse1DataPaymentStatusInner.from_json(json)
# print the JSON string representation of the object
print(OBWritePaymentDetailsResponse1DataPaymentStatusInner.to_json())

# convert the object into a dict
ob_write_payment_details_response1_data_payment_status_inner_dict = ob_write_payment_details_response1_data_payment_status_inner_instance.to_dict()
# create an instance of OBWritePaymentDetailsResponse1DataPaymentStatusInner from a dict
ob_write_payment_details_response1_data_payment_status_inner_from_dict = OBWritePaymentDetailsResponse1DataPaymentStatusInner.from_dict(ob_write_payment_details_response1_data_payment_status_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


