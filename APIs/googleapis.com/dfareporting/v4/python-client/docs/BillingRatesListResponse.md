# BillingRatesListResponse

Billing Rate List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_rates** | [**List[BillingRate]**](BillingRate.md) | Billing rates collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#billingRatesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.billing_rates_list_response import BillingRatesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRatesListResponse from a JSON string
billing_rates_list_response_instance = BillingRatesListResponse.from_json(json)
# print the JSON string representation of the object
print(BillingRatesListResponse.to_json())

# convert the object into a dict
billing_rates_list_response_dict = billing_rates_list_response_instance.to_dict()
# create an instance of BillingRatesListResponse from a dict
billing_rates_list_response_from_dict = BillingRatesListResponse.from_dict(billing_rates_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


