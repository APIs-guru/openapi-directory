# PartialRefund

A partial refund of a transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund_id** | **str** | Required. A unique id distinguishing this partial refund. If the refund is successful, subsequent refunds with the same id will fail. Must be unique across refunds for one individual transaction. | [optional] 
**refund_pre_tax_amount** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.partial_refund import PartialRefund

# TODO update the JSON string below
json = "{}"
# create an instance of PartialRefund from a JSON string
partial_refund_instance = PartialRefund.from_json(json)
# print the JSON string representation of the object
print(PartialRefund.to_json())

# convert the object into a dict
partial_refund_dict = partial_refund_instance.to_dict()
# create an instance of PartialRefund from a dict
partial_refund_from_dict = PartialRefund.from_dict(partial_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


