# UserRecommendation

Represents a user that is recommended to be allowed for a certain rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendation_action** | [**RecommendationAction**](RecommendationAction.md) |  | [optional] 
**username** | **str** | Represents a user that is recommended to be allowed for a certain rule | [optional] 

## Example

```python
from openapi_client.models.user_recommendation import UserRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of UserRecommendation from a JSON string
user_recommendation_instance = UserRecommendation.from_json(json)
# print the JSON string representation of the object
print(UserRecommendation.to_json())

# convert the object into a dict
user_recommendation_dict = user_recommendation_instance.to_dict()
# create an instance of UserRecommendation from a dict
user_recommendation_from_dict = UserRecommendation.from_dict(user_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


