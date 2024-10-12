# ResourceRecommendationBase

Advisor Recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified recommendation ID, for example /subscriptions/subscriptionId/resourceGroups/resourceGroup1/providers/Microsoft.ClassicCompute/virtualMachines/vm1/providers/Microsoft.Advisor/recommendations/recommendationGUID. | [optional] 
**name** | **str** | The name of recommendation. | [optional] 
**properties** | [**RecommendationProperties**](RecommendationProperties.md) |  | [optional] 
**suppression_ids** | **List[str]** | The list of snoozed and dismissed rules for the recommendation. | [optional] 
**type** | **str** | The recommendation type: Microsoft.Advisor/recommendations. | [optional] 

## Example

```python
from openapi_client.models.resource_recommendation_base import ResourceRecommendationBase

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRecommendationBase from a JSON string
resource_recommendation_base_instance = ResourceRecommendationBase.from_json(json)
# print the JSON string representation of the object
print(ResourceRecommendationBase.to_json())

# convert the object into a dict
resource_recommendation_base_dict = resource_recommendation_base_instance.to_dict()
# create an instance of ResourceRecommendationBase from a dict
resource_recommendation_base_from_dict = ResourceRecommendationBase.from_dict(resource_recommendation_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


