# InvoiceRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**InvoiceEntityRelation**](InvoiceEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.invoice_relation import InvoiceRelation

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceRelation from a JSON string
invoice_relation_instance = InvoiceRelation.from_json(json)
# print the JSON string representation of the object
print(InvoiceRelation.to_json())

# convert the object into a dict
invoice_relation_dict = invoice_relation_instance.to_dict()
# create an instance of InvoiceRelation from a dict
invoice_relation_from_dict = InvoiceRelation.from_dict(invoice_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


