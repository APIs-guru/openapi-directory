# GetInvoiceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Invoice**](Invoice.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_invoice_response import GetInvoiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetInvoiceResponse from a JSON string
get_invoice_response_instance = GetInvoiceResponse.from_json(json)
# print the JSON string representation of the object
print(GetInvoiceResponse.to_json())

# convert the object into a dict
get_invoice_response_dict = get_invoice_response_instance.to_dict()
# create an instance of GetInvoiceResponse from a dict
get_invoice_response_from_dict = GetInvoiceResponse.from_dict(get_invoice_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


