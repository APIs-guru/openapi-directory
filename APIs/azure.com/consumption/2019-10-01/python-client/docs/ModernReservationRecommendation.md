# ModernReservationRecommendation

Modern reservation recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ModernReservationRecommendationProperties**](ModernReservationRecommendationProperties.md) |  | 
**kind** | **str** | Specifies the kind of reservation recommendation. | 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 
**location** | **str** | Resource location | [optional] [readonly] 
**sku** | **str** | Resource sku | [optional] [readonly] 

## Example

```python
from openapi_client.models.modern_reservation_recommendation import ModernReservationRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of ModernReservationRecommendation from a JSON string
modern_reservation_recommendation_instance = ModernReservationRecommendation.from_json(json)
# print the JSON string representation of the object
print(ModernReservationRecommendation.to_json())

# convert the object into a dict
modern_reservation_recommendation_dict = modern_reservation_recommendation_instance.to_dict()
# create an instance of ModernReservationRecommendation from a dict
modern_reservation_recommendation_from_dict = ModernReservationRecommendation.from_dict(modern_reservation_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


