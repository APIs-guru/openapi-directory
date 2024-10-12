# Recommendation

Recommendations are suggested ways to improve your merchant account's performance. For example, to engage with a feature, or start using a new Google product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_call_to_action** | [**List[RecommendationCallToAction]**](RecommendationCallToAction.md) | Output only. CTAs of this recommendation. Repeated. | [optional] [readonly] 
**additional_descriptions** | [**List[RecommendationDescription]**](RecommendationDescription.md) | Output only. List of additional localized descriptions for a recommendation. Localication uses the &#x60;languageCode&#x60; field in &#x60;GenerateRecommendations&#x60; requests. Not all description types are guaranteed to be present and we recommend to rely on default description. | [optional] [readonly] 
**creative** | [**List[RecommendationCreative]**](RecommendationCreative.md) | Output only. Any creatives attached to the recommendation. Repeated. | [optional] [readonly] 
**default_call_to_action** | [**RecommendationCallToAction**](RecommendationCallToAction.md) |  | [optional] 
**default_description** | **str** | Optional. Localized recommendation description. The localization the {@link &#x60;GenerateRecommendationsRequest.language_code&#x60;} field in {@link &#x60;GenerateRecommendationsRequest&#x60;} requests. | [optional] 
**numerical_impact** | **int** | Optional. A numerical score of the impact from the recommendation&#39;s description. For example, a recommendation might suggest an upward trend in sales for a certain product. Higher number means larger impact. | [optional] 
**paid** | **bool** | Optional. Indicates whether a user needs to pay when they complete the user journey suggested by the recommendation. | [optional] 
**recommendation_name** | **str** | Optional. Localized recommendation name. The localization uses the {@link &#x60;GenerateRecommendationsRequest.language_code&#x60;} field in {@link &#x60;GenerateRecommendationsRequest&#x60;} requests. | [optional] 
**sub_type** | **str** | Optional. Subtype of the recommendations. Only applicable when multiple recommendations can be generated per type, and is used as an identifier of recommendation under the same recommendation type. | [optional] 
**title** | **str** | Optional. Localized Recommendation Title. Localization uses the {@link &#x60;GenerateRecommendationsRequest.language_code&#x60;} field in {@link &#x60;GenerateRecommendationsRequest&#x60;} requests. | [optional] 
**type** | **str** | Output only. Type of the recommendation. List of currently available recommendation types: - OPPORTUNITY_CREATE_NEW_COLLECTION - OPPORTUNITY_CREATE_EMAIL_CAMPAIGN | [optional] [readonly] 

## Example

```python
from openapi_client.models.recommendation import Recommendation

# TODO update the JSON string below
json = "{}"
# create an instance of Recommendation from a JSON string
recommendation_instance = Recommendation.from_json(json)
# print the JSON string representation of the object
print(Recommendation.to_json())

# convert the object into a dict
recommendation_dict = recommendation_instance.to_dict()
# create an instance of Recommendation from a dict
recommendation_from_dict = Recommendation.from_dict(recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


