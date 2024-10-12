# GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule

Browser DLP Rule for a PartnerTenant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaGroup**](GoogleCloudBeyondcorpPartnerservicesV1alphaGroup.md) |  | [optional] 
**name** | **str** | Output only. Unique resource name. The name is ignored when creating BrowserDlpRule. | [optional] [readonly] 
**rule_setting** | [**GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting**](GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule import GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule_dict = google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_browser_dlp_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


