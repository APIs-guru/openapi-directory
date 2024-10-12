# GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting

Message to capture settings for a BrowserDlpRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Required. Immutable. The type of the Setting. . | [optional] 
**value** | **Dict[str, object]** | Required. The value of the Setting. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_partnerservices_v1alpha_rule_setting import GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting from a JSON string
google_cloud_beyondcorp_partnerservices_v1alpha_rule_setting_instance = GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting.to_json())

# convert the object into a dict
google_cloud_beyondcorp_partnerservices_v1alpha_rule_setting_dict = google_cloud_beyondcorp_partnerservices_v1alpha_rule_setting_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting from a dict
google_cloud_beyondcorp_partnerservices_v1alpha_rule_setting_from_dict = GoogleCloudBeyondcorpPartnerservicesV1alphaRuleSetting.from_dict(google_cloud_beyondcorp_partnerservices_v1alpha_rule_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


