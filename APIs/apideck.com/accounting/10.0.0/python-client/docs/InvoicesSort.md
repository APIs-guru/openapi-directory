# InvoicesSort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by** | **str** | The field on which to sort the Invoices | [optional] 
**direction** | [**SortDirection**](SortDirection.md) |  | [optional] [default to SortDirection.ASC]

## Example

```python
from openapi_client.models.invoices_sort import InvoicesSort

# TODO update the JSON string below
json = "{}"
# create an instance of InvoicesSort from a JSON string
invoices_sort_instance = InvoicesSort.from_json(json)
# print the JSON string representation of the object
print(InvoicesSort.to_json())

# convert the object into a dict
invoices_sort_dict = invoices_sort_instance.to_dict()
# create an instance of InvoicesSort from a dict
invoices_sort_from_dict = InvoicesSort.from_dict(invoices_sort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


