# MarketingRecommendation

A complex type that contains information about how a seller can improve their listing configurations. The AD object contains Promoted Listings recommendations and information, which the seller can use to improve buyer conversions. The response can also contain an optional message about the returned data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad** | [**Ad**](Ad.md) |  | [optional] 
**message** | **str** | A message that can conditionally accompany the listing information. | [optional] 

## Example

```python
from openapi_client.models.marketing_recommendation import MarketingRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of MarketingRecommendation from a JSON string
marketing_recommendation_instance = MarketingRecommendation.from_json(json)
# print the JSON string representation of the object
print(MarketingRecommendation.to_json())

# convert the object into a dict
marketing_recommendation_dict = marketing_recommendation_instance.to_dict()
# create an instance of MarketingRecommendation from a dict
marketing_recommendation_from_dict = MarketingRecommendation.from_dict(marketing_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


