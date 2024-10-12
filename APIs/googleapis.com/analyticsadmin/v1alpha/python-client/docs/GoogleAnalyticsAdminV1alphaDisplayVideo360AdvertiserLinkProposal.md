# GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal

A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_personalization_enabled** | **bool** | Immutable. Enables personalized advertising features with this integration. If this field is not set on create, it will be defaulted to true. | [optional] 
**advertiser_display_name** | **str** | Output only. The display name of the Display &amp; Video Advertiser. Only populated for proposals that originated from Display &amp; Video 360. | [optional] [readonly] 
**advertiser_id** | **str** | Immutable. The Display &amp; Video 360 Advertiser&#39;s advertiser ID. | [optional] 
**campaign_data_sharing_enabled** | **bool** | Immutable. Enables the import of campaign data from Display &amp; Video 360. If this field is not set on create, it will be defaulted to true. | [optional] 
**cost_data_sharing_enabled** | **bool** | Immutable. Enables the import of cost data from Display &amp; Video 360. This can only be enabled if campaign_data_sharing_enabled is enabled. If this field is not set on create, it will be defaulted to true. | [optional] 
**link_proposal_status_details** | [**GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails**](GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails.md) |  | [optional] 
**name** | **str** | Output only. The resource name for this DisplayVideo360AdvertiserLinkProposal resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinkProposals/{proposalId} Note: proposalId is not the Display &amp; Video 360 Advertiser ID | [optional] [readonly] 
**validation_email** | **str** | Input only. On a proposal being sent to Display &amp; Video 360, this field must be set to the email address of an admin on the target advertiser. This is used to verify that the Google Analytics admin is aware of at least one admin on the Display &amp; Video 360 Advertiser. This does not restrict approval of the proposal to a single user. Any admin on the Display &amp; Video 360 Advertiser may approve the proposal. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal import GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal from a JSON string
google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal_instance = GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal_dict = google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal from a dict
google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal_from_dict = GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal.from_dict(google_analytics_admin_v1alpha_display_video360_advertiser_link_proposal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


