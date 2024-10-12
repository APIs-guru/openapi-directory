# OBWriteDomesticResponse5DataRefund

Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**OBWriteDomesticResponse5DataRefundAccount**](OBWriteDomesticResponse5DataRefundAccount.md) |  | 

## Example

```python
from openapi_client.models.ob_write_domestic_response5_data_refund import OBWriteDomesticResponse5DataRefund

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticResponse5DataRefund from a JSON string
ob_write_domestic_response5_data_refund_instance = OBWriteDomesticResponse5DataRefund.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticResponse5DataRefund.to_json())

# convert the object into a dict
ob_write_domestic_response5_data_refund_dict = ob_write_domestic_response5_data_refund_instance.to_dict()
# create an instance of OBWriteDomesticResponse5DataRefund from a dict
ob_write_domestic_response5_data_refund_from_dict = OBWriteDomesticResponse5DataRefund.from_dict(ob_write_domestic_response5_data_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


