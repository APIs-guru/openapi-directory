# GoogleAdsSearchads360V0ServicesListAccessibleCustomersResponse

Response message for CustomerService.ListAccessibleCustomers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_names** | **List[str]** | Resource name of customers directly accessible by the user authenticating the call. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_services_list_accessible_customers_response import GoogleAdsSearchads360V0ServicesListAccessibleCustomersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ServicesListAccessibleCustomersResponse from a JSON string
google_ads_searchads360_v0_services_list_accessible_customers_response_instance = GoogleAdsSearchads360V0ServicesListAccessibleCustomersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ServicesListAccessibleCustomersResponse.to_json())

# convert the object into a dict
google_ads_searchads360_v0_services_list_accessible_customers_response_dict = google_ads_searchads360_v0_services_list_accessible_customers_response_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ServicesListAccessibleCustomersResponse from a dict
google_ads_searchads360_v0_services_list_accessible_customers_response_from_dict = GoogleAdsSearchads360V0ServicesListAccessibleCustomersResponse.from_dict(google_ads_searchads360_v0_services_list_accessible_customers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


