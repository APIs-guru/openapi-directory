# LinkedInvoiceItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | User defined item code | [optional] 
**id** | **str** | ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item | [optional] 
**name** | **str** | User defined item name | [optional] 

## Example

```python
from openapi_client.models.linked_invoice_item import LinkedInvoiceItem

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedInvoiceItem from a JSON string
linked_invoice_item_instance = LinkedInvoiceItem.from_json(json)
# print the JSON string representation of the object
print(LinkedInvoiceItem.to_json())

# convert the object into a dict
linked_invoice_item_dict = linked_invoice_item_instance.to_dict()
# create an instance of LinkedInvoiceItem from a dict
linked_invoice_item_from_dict = LinkedInvoiceItem.from_dict(linked_invoice_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


