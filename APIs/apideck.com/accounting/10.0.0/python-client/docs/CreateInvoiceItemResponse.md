# CreateInvoiceItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.create_invoice_item_response import CreateInvoiceItemResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInvoiceItemResponse from a JSON string
create_invoice_item_response_instance = CreateInvoiceItemResponse.from_json(json)
# print the JSON string representation of the object
print(CreateInvoiceItemResponse.to_json())

# convert the object into a dict
create_invoice_item_response_dict = create_invoice_item_response_instance.to_dict()
# create an instance of CreateInvoiceItemResponse from a dict
create_invoice_item_response_from_dict = CreateInvoiceItemResponse.from_dict(create_invoice_item_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


