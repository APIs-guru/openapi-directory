# GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse

Response message for ListBillingAccountServices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_services** | [**List[GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService]**](GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService.md) | The returned billing account services. | [optional] 
**next_page_token** | **str** | Token that can be sent as &#x60;page_token&#x60; in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountservices_v1beta_list_billing_account_services_response import GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse from a JSON string
google_cloud_billing_billingaccountservices_v1beta_list_billing_account_services_response_instance = GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountservices_v1beta_list_billing_account_services_response_dict = google_cloud_billing_billingaccountservices_v1beta_list_billing_account_services_response_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse from a dict
google_cloud_billing_billingaccountservices_v1beta_list_billing_account_services_response_from_dict = GoogleCloudBillingBillingaccountservicesV1betaListBillingAccountServicesResponse.from_dict(google_cloud_billing_billingaccountservices_v1beta_list_billing_account_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


