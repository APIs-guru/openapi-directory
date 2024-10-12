# InvoiceSectionListWithCreateSubPermissionResult

Result of listing invoice section properties with create subscription permission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[InvoiceSectionWithCreateSubPermission]**](InvoiceSectionWithCreateSubPermission.md) | The list of invoice section properties with create subscription permission. | [optional] 

## Example

```python
from openapi_client.models.invoice_section_list_with_create_sub_permission_result import InvoiceSectionListWithCreateSubPermissionResult

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceSectionListWithCreateSubPermissionResult from a JSON string
invoice_section_list_with_create_sub_permission_result_instance = InvoiceSectionListWithCreateSubPermissionResult.from_json(json)
# print the JSON string representation of the object
print(InvoiceSectionListWithCreateSubPermissionResult.to_json())

# convert the object into a dict
invoice_section_list_with_create_sub_permission_result_dict = invoice_section_list_with_create_sub_permission_result_instance.to_dict()
# create an instance of InvoiceSectionListWithCreateSubPermissionResult from a dict
invoice_section_list_with_create_sub_permission_result_from_dict = InvoiceSectionListWithCreateSubPermissionResult.from_dict(invoice_section_list_with_create_sub_permission_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


