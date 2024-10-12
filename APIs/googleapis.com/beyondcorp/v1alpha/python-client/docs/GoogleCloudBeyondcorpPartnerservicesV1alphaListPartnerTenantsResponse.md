# GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse

Message for response to listing PartnerTenants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**partner_tenants** | [**List[GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant]**](GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerTenant.md) | The list of PartnerTenant objects. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_list_partner_tenants_response import GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_list_partner_tenants_response_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_list_partner_tenants_response_dict = google_cloud_beyondcorp_partnerservices_v1alpha_list_partner_tenants_response_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_list_partner_tenants_response_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaListPartnerTenantsResponse.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_list_partner_tenants_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


