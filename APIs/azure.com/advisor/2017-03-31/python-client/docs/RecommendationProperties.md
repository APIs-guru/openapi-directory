# RecommendationProperties

The properties of the recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the recommendation. | [optional] 
**impact** | **str** | The business impact of the recommendation. | [optional] 
**impacted_field** | **str** | The resource type identified by Advisor. | [optional] 
**impacted_value** | **str** | The resource identified by Advisor. | [optional] 
**last_updated** | **datetime** | The most recent time that Advisor checked the validity of the recommendation. | [optional] 
**metadata** | **Dict[str, object]** | The recommendation metadata. | [optional] 
**recommendation_type_id** | **str** | The recommendation-type GUID. | [optional] 
**risk** | **str** | The potential risk of not implementing the recommendation. | [optional] 
**short_description** | [**ShortDescription**](ShortDescription.md) |  | [optional] 
**suppression_ids** | **List[str]** | The list of snoozed and dismissed rules for the recommendation. | [optional] 

## Example

```python
from openapi_client.models.recommendation_properties import RecommendationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecommendationProperties from a JSON string
recommendation_properties_instance = RecommendationProperties.from_json(json)
# print the JSON string representation of the object
print(RecommendationProperties.to_json())

# convert the object into a dict
recommendation_properties_dict = recommendation_properties_instance.to_dict()
# create an instance of RecommendationProperties from a dict
recommendation_properties_from_dict = RecommendationProperties.from_dict(recommendation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


