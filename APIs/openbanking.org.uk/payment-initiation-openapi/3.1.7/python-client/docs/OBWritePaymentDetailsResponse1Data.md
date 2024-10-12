# OBWritePaymentDetailsResponse1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_status** | [**List[OBWritePaymentDetailsResponse1DataPaymentStatusInner]**](OBWritePaymentDetailsResponse1DataPaymentStatusInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_payment_details_response1_data import OBWritePaymentDetailsResponse1Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWritePaymentDetailsResponse1Data from a JSON string
ob_write_payment_details_response1_data_instance = OBWritePaymentDetailsResponse1Data.from_json(json)
# print the JSON string representation of the object
print(OBWritePaymentDetailsResponse1Data.to_json())

# convert the object into a dict
ob_write_payment_details_response1_data_dict = ob_write_payment_details_response1_data_instance.to_dict()
# create an instance of OBWritePaymentDetailsResponse1Data from a dict
ob_write_payment_details_response1_data_from_dict = OBWritePaymentDetailsResponse1Data.from_dict(ob_write_payment_details_response1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


