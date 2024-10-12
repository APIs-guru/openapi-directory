# IntegralAdScience

Details of Integral Ad Science settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_segment_id** | **List[str]** | The custom segment ID provided by Integral Ad Science. The ID must be between &#x60;1000001&#x60; and &#x60;1999999&#x60;, inclusive. | [optional] 
**display_viewability** | **str** | Display Viewability section (applicable to display line items only). | [optional] 
**exclude_unrateable** | **bool** | Brand Safety - **Unrateable**. | [optional] 
**excluded_ad_fraud_risk** | **str** | Ad Fraud settings. | [optional] 
**excluded_adult_risk** | **str** | Brand Safety - **Adult content**. | [optional] 
**excluded_alcohol_risk** | **str** | Brand Safety - **Alcohol**. | [optional] 
**excluded_drugs_risk** | **str** | Brand Safety - **Drugs**. | [optional] 
**excluded_gambling_risk** | **str** | Brand Safety - **Gambling**. | [optional] 
**excluded_hate_speech_risk** | **str** | Brand Safety - **Hate speech**. | [optional] 
**excluded_illegal_downloads_risk** | **str** | Brand Safety - **Illegal downloads**. | [optional] 
**excluded_offensive_language_risk** | **str** | Brand Safety - **Offensive language**. | [optional] 
**excluded_violence_risk** | **str** | Brand Safety - **Violence**. | [optional] 
**traq_score_option** | **str** | True advertising quality (applicable to Display line items only). | [optional] 
**video_viewability** | **str** | Video Viewability Section (applicable to video line items only). | [optional] 

## Example

```python
from openapi_client.models.integral_ad_science import IntegralAdScience

# TODO update the JSON string below
json = "{}"
# create an instance of IntegralAdScience from a JSON string
integral_ad_science_instance = IntegralAdScience.from_json(json)
# print the JSON string representation of the object
print(IntegralAdScience.to_json())

# convert the object into a dict
integral_ad_science_dict = integral_ad_science_instance.to_dict()
# create an instance of IntegralAdScience from a dict
integral_ad_science_from_dict = IntegralAdScience.from_dict(integral_ad_science_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


