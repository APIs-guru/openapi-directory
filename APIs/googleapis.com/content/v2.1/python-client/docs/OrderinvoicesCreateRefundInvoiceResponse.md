# OrderinvoicesCreateRefundInvoiceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#orderinvoicesCreateRefundInvoiceResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orderinvoices_create_refund_invoice_response import OrderinvoicesCreateRefundInvoiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderinvoicesCreateRefundInvoiceResponse from a JSON string
orderinvoices_create_refund_invoice_response_instance = OrderinvoicesCreateRefundInvoiceResponse.from_json(json)
# print the JSON string representation of the object
print(OrderinvoicesCreateRefundInvoiceResponse.to_json())

# convert the object into a dict
orderinvoices_create_refund_invoice_response_dict = orderinvoices_create_refund_invoice_response_instance.to_dict()
# create an instance of OrderinvoicesCreateRefundInvoiceResponse from a dict
orderinvoices_create_refund_invoice_response_from_dict = OrderinvoicesCreateRefundInvoiceResponse.from_dict(orderinvoices_create_refund_invoice_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


