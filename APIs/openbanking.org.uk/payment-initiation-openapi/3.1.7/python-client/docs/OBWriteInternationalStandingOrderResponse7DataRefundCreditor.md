# OBWriteInternationalStandingOrderResponse7DataRefundCreditor

Set of elements used to identify a person or an organisation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name by which a party is known and which is usually used to identify that party. | [optional] 
**postal_address** | [**OBPostalAddress6**](OBPostalAddress6.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_international_standing_order_response7_data_refund_creditor import OBWriteInternationalStandingOrderResponse7DataRefundCreditor

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalStandingOrderResponse7DataRefundCreditor from a JSON string
ob_write_international_standing_order_response7_data_refund_creditor_instance = OBWriteInternationalStandingOrderResponse7DataRefundCreditor.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalStandingOrderResponse7DataRefundCreditor.to_json())

# convert the object into a dict
ob_write_international_standing_order_response7_data_refund_creditor_dict = ob_write_international_standing_order_response7_data_refund_creditor_instance.to_dict()
# create an instance of OBWriteInternationalStandingOrderResponse7DataRefundCreditor from a dict
ob_write_international_standing_order_response7_data_refund_creditor_from_dict = OBWriteInternationalStandingOrderResponse7DataRefundCreditor.from_dict(ob_write_international_standing_order_response7_data_refund_creditor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


