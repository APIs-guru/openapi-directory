# GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService

Encapsulates a Google Cloud service visible to a billing account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Description of the BillingAccountService. Example: \&quot;BigQuery\&quot;, \&quot;Compute Engine\&quot;. | [optional] 
**name** | **str** | Resource name for the BillingAccountService. Example: \&quot;billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397\&quot;. | [optional] 
**service_id** | **str** | Identifier for the service. It is the string after the collection identifier \&quot;services/\&quot;. Example: \&quot;DA34-426B-A397\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountservices_v1beta_billing_account_service import GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService from a JSON string
google_cloud_billing_billingaccountservices_v1beta_billing_account_service_instance = GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountservices_v1beta_billing_account_service_dict = google_cloud_billing_billingaccountservices_v1beta_billing_account_service_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService from a dict
google_cloud_billing_billingaccountservices_v1beta_billing_account_service_from_dict = GoogleCloudBillingBillingaccountservicesV1betaBillingAccountService.from_dict(google_cloud_billing_billingaccountservices_v1beta_billing_account_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


