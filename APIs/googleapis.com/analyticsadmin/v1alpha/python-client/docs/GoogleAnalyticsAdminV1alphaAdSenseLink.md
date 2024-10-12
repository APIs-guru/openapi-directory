# GoogleAnalyticsAdminV1alphaAdSenseLink

A link between a GA4 Property and an AdSense for Content ad client.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_client_code** | **str** | Immutable. The AdSense ad client code that the GA4 property is linked to. Example format: \&quot;ca-pub-1234567890\&quot; | [optional] 
**name** | **str** | Output only. The resource name for this AdSense Link resource. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/6789 | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_ad_sense_link import GoogleAnalyticsAdminV1alphaAdSenseLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAdSenseLink from a JSON string
google_analytics_admin_v1alpha_ad_sense_link_instance = GoogleAnalyticsAdminV1alphaAdSenseLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAdSenseLink.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_ad_sense_link_dict = google_analytics_admin_v1alpha_ad_sense_link_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAdSenseLink from a dict
google_analytics_admin_v1alpha_ad_sense_link_from_dict = GoogleAnalyticsAdminV1alphaAdSenseLink.from_dict(google_analytics_admin_v1alpha_ad_sense_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


