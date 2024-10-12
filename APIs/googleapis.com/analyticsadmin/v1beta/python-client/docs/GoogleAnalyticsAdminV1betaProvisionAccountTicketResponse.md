# GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse

Response message for ProvisionAccountTicket RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ticket_id** | **str** | The param to be passed in the ToS link. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_provision_account_ticket_response import GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse from a JSON string
google_analytics_admin_v1beta_provision_account_ticket_response_instance = GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_provision_account_ticket_response_dict = google_analytics_admin_v1beta_provision_account_ticket_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse from a dict
google_analytics_admin_v1beta_provision_account_ticket_response_from_dict = GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse.from_dict(google_analytics_admin_v1beta_provision_account_ticket_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


