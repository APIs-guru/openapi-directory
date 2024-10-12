# InvoiceDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.invoice_describe import InvoiceDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceDescribe from a JSON string
invoice_describe_instance = InvoiceDescribe.from_json(json)
# print the JSON string representation of the object
print(InvoiceDescribe.to_json())

# convert the object into a dict
invoice_describe_dict = invoice_describe_instance.to_dict()
# create an instance of InvoiceDescribe from a dict
invoice_describe_from_dict = InvoiceDescribe.from_dict(invoice_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


