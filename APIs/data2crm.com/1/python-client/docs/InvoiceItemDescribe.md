# InvoiceItemDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.invoice_item_describe import InvoiceItemDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceItemDescribe from a JSON string
invoice_item_describe_instance = InvoiceItemDescribe.from_json(json)
# print the JSON string representation of the object
print(InvoiceItemDescribe.to_json())

# convert the object into a dict
invoice_item_describe_dict = invoice_item_describe_instance.to_dict()
# create an instance of InvoiceItemDescribe from a dict
invoice_item_describe_from_dict = InvoiceItemDescribe.from_dict(invoice_item_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


