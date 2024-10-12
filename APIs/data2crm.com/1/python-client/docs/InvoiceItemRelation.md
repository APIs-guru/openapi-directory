# InvoiceItemRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**InvoiceItemEntityRelation**](InvoiceItemEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.invoice_item_relation import InvoiceItemRelation

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceItemRelation from a JSON string
invoice_item_relation_instance = InvoiceItemRelation.from_json(json)
# print the JSON string representation of the object
print(InvoiceItemRelation.to_json())

# convert the object into a dict
invoice_item_relation_dict = invoice_item_relation_instance.to_dict()
# create an instance of InvoiceItemRelation from a dict
invoice_item_relation_from_dict = InvoiceItemRelation.from_dict(invoice_item_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


