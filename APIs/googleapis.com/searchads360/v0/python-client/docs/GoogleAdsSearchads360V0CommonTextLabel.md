# GoogleAdsSearchads360V0CommonTextLabel

A type of label displaying text on a colored background.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** | Background color of the label in RGB format. This string must match the regular expression &#39;^\\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$&#39;. Note: The background color may not be visible for manager accounts. | [optional] 
**description** | **str** | A short description of the label. The length must be no more than 200 characters. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_text_label import GoogleAdsSearchads360V0CommonTextLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonTextLabel from a JSON string
google_ads_searchads360_v0_common_text_label_instance = GoogleAdsSearchads360V0CommonTextLabel.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonTextLabel.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_text_label_dict = google_ads_searchads360_v0_common_text_label_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonTextLabel from a dict
google_ads_searchads360_v0_common_text_label_from_dict = GoogleAdsSearchads360V0CommonTextLabel.from_dict(google_ads_searchads360_v0_common_text_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


