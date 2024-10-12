# OBWriteInternationalStandingOrderResponse7DataRefund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**OBWriteDomesticResponse5DataRefundAccount**](OBWriteDomesticResponse5DataRefundAccount.md) |  | 
**agent** | [**OBWriteInternationalResponse5DataRefundAgent**](OBWriteInternationalResponse5DataRefundAgent.md) |  | [optional] 
**creditor** | [**OBWriteInternationalStandingOrderResponse7DataRefundCreditor**](OBWriteInternationalStandingOrderResponse7DataRefundCreditor.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_international_standing_order_response7_data_refund import OBWriteInternationalStandingOrderResponse7DataRefund

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalStandingOrderResponse7DataRefund from a JSON string
ob_write_international_standing_order_response7_data_refund_instance = OBWriteInternationalStandingOrderResponse7DataRefund.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalStandingOrderResponse7DataRefund.to_json())

# convert the object into a dict
ob_write_international_standing_order_response7_data_refund_dict = ob_write_international_standing_order_response7_data_refund_instance.to_dict()
# create an instance of OBWriteInternationalStandingOrderResponse7DataRefund from a dict
ob_write_international_standing_order_response7_data_refund_from_dict = OBWriteInternationalStandingOrderResponse7DataRefund.from_dict(ob_write_international_standing_order_response7_data_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


