# OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail

Payment status details as per underlying Payment Rail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_instrument** | **str** | User community specific instrument. Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level. | [optional] 
**status** | **str** | Status of a transfer, as assigned by the transaction administrator. | 
**status_reason** | **str** | Reason Code provided for the status of a transfer. | [optional] 
**status_reason_description** | **str** | Reason provided for the status of a transfer. | [optional] 

## Example

```python
from openapi_client.models.ob_write_payment_details_response1_data_payment_status_inner_status_detail import OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail

# TODO update the JSON string below
json = "{}"
# create an instance of OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail from a JSON string
ob_write_payment_details_response1_data_payment_status_inner_status_detail_instance = OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail.from_json(json)
# print the JSON string representation of the object
print(OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail.to_json())

# convert the object into a dict
ob_write_payment_details_response1_data_payment_status_inner_status_detail_dict = ob_write_payment_details_response1_data_payment_status_inner_status_detail_instance.to_dict()
# create an instance of OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail from a dict
ob_write_payment_details_response1_data_payment_status_inner_status_detail_from_dict = OBWritePaymentDetailsResponse1DataPaymentStatusInnerStatusDetail.from_dict(ob_write_payment_details_response1_data_payment_status_inner_status_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


