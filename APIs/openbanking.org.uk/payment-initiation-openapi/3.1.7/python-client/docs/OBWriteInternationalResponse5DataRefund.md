# OBWriteInternationalResponse5DataRefund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**OBWriteDomesticResponse5DataRefundAccount**](OBWriteDomesticResponse5DataRefundAccount.md) |  | 
**agent** | [**OBWriteInternationalResponse5DataRefundAgent**](OBWriteInternationalResponse5DataRefundAgent.md) |  | [optional] 
**creditor** | [**OBWriteInternationalResponse5DataRefundCreditor**](OBWriteInternationalResponse5DataRefundCreditor.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_international_response5_data_refund import OBWriteInternationalResponse5DataRefund

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalResponse5DataRefund from a JSON string
ob_write_international_response5_data_refund_instance = OBWriteInternationalResponse5DataRefund.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalResponse5DataRefund.to_json())

# convert the object into a dict
ob_write_international_response5_data_refund_dict = ob_write_international_response5_data_refund_instance.to_dict()
# create an instance of OBWriteInternationalResponse5DataRefund from a dict
ob_write_international_response5_data_refund_from_dict = OBWriteInternationalResponse5DataRefund.from_dict(ob_write_international_response5_data_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


