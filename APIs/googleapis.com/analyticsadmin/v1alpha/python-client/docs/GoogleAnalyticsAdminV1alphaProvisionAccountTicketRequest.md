# GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest

Request message for ProvisionAccountTicket RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**GoogleAnalyticsAdminV1alphaAccount**](GoogleAnalyticsAdminV1alphaAccount.md) |  | [optional] 
**redirect_uri** | **str** | Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_provision_account_ticket_request import GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest from a JSON string
google_analytics_admin_v1alpha_provision_account_ticket_request_instance = GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_provision_account_ticket_request_dict = google_analytics_admin_v1alpha_provision_account_ticket_request_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest from a dict
google_analytics_admin_v1alpha_provision_account_ticket_request_from_dict = GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest.from_dict(google_analytics_admin_v1alpha_provision_account_ticket_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


