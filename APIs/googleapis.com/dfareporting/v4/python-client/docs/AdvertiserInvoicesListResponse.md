# AdvertiserInvoicesListResponse

Invoice List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoices** | [**List[Invoice]**](Invoice.md) | Invoice collection | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#advertiserInvoicesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.advertiser_invoices_list_response import AdvertiserInvoicesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserInvoicesListResponse from a JSON string
advertiser_invoices_list_response_instance = AdvertiserInvoicesListResponse.from_json(json)
# print the JSON string representation of the object
print(AdvertiserInvoicesListResponse.to_json())

# convert the object into a dict
advertiser_invoices_list_response_dict = advertiser_invoices_list_response_instance.to_dict()
# create an instance of AdvertiserInvoicesListResponse from a dict
advertiser_invoices_list_response_from_dict = AdvertiserInvoicesListResponse.from_dict(advertiser_invoices_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


