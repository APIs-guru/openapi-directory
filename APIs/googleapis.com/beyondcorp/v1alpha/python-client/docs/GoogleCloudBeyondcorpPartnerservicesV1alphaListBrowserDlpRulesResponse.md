# GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse

Message for response to listing BrowserDlpRules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browser_dlp_rules** | [**List[GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule]**](GoogleCloudBeyondcorpPartnerservicesV1alphaBrowserDlpRule.md) | The list of BrowserDlpRule objects. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_list_browser_dlp_rules_response import GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_list_browser_dlp_rules_response_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_list_browser_dlp_rules_response_dict = google_cloud_beyondcorp_partnerservices_v1alpha_list_browser_dlp_rules_response_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_list_browser_dlp_rules_response_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaListBrowserDlpRulesResponse.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_list_browser_dlp_rules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


