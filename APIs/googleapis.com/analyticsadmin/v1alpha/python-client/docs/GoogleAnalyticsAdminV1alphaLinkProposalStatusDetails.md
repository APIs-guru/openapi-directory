# GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails

Status information for a link proposal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_proposal_initiating_product** | **str** | Output only. The source of this proposal. | [optional] [readonly] 
**link_proposal_state** | **str** | Output only. The state of this proposal. | [optional] [readonly] 
**requestor_email** | **str** | Output only. The email address of the user that proposed this linkage. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_link_proposal_status_details import GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails from a JSON string
google_analytics_admin_v1alpha_link_proposal_status_details_instance = GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_link_proposal_status_details_dict = google_analytics_admin_v1alpha_link_proposal_status_details_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails from a dict
google_analytics_admin_v1alpha_link_proposal_status_details_from_dict = GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails.from_dict(google_analytics_admin_v1alpha_link_proposal_status_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


