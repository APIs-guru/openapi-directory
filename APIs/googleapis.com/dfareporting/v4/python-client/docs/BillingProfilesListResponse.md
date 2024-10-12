# BillingProfilesListResponse

Billing profile List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profiles** | [**List[BillingProfile]**](BillingProfile.md) | Billing profiles collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#billingProfilesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.billing_profiles_list_response import BillingProfilesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BillingProfilesListResponse from a JSON string
billing_profiles_list_response_instance = BillingProfilesListResponse.from_json(json)
# print the JSON string representation of the object
print(BillingProfilesListResponse.to_json())

# convert the object into a dict
billing_profiles_list_response_dict = billing_profiles_list_response_instance.to_dict()
# create an instance of BillingProfilesListResponse from a dict
billing_profiles_list_response_from_dict = BillingProfilesListResponse.from_dict(billing_profiles_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


