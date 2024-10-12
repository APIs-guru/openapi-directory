# InvoicesListResult

Result of listing invoices. It contains a list of available invoices in reverse chronological order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Invoice]**](Invoice.md) | The list of invoices. | [optional] [readonly] 

## Example

```python
from openapi_client.models.invoices_list_result import InvoicesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of InvoicesListResult from a JSON string
invoices_list_result_instance = InvoicesListResult.from_json(json)
# print the JSON string representation of the object
print(InvoicesListResult.to_json())

# convert the object into a dict
invoices_list_result_dict = invoices_list_result_instance.to_dict()
# create an instance of InvoicesListResult from a dict
invoices_list_result_from_dict = InvoicesListResult.from_dict(invoices_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


