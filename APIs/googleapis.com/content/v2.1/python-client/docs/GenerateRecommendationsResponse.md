# GenerateRecommendationsResponse

Response containing generated recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendations** | [**List[Recommendation]**](Recommendation.md) | Recommendations generated for a request. | [optional] 
**response_token** | **str** | Output only. Response token is a string created for each &#x60;GenerateRecommendationsResponse&#x60;. This token doesn&#39;t expire, and is globally unique. This token must be used when reporting interactions for recommendations. | [optional] [readonly] 

## Example

```python
from openapi_client.models.generate_recommendations_response import GenerateRecommendationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateRecommendationsResponse from a JSON string
generate_recommendations_response_instance = GenerateRecommendationsResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateRecommendationsResponse.to_json())

# convert the object into a dict
generate_recommendations_response_dict = generate_recommendations_response_instance.to_dict()
# create an instance of GenerateRecommendationsResponse from a dict
generate_recommendations_response_from_dict = GenerateRecommendationsResponse.from_dict(generate_recommendations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


