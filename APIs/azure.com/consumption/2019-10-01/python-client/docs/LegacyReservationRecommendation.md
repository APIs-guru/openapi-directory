# LegacyReservationRecommendation

Legacy reservation recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LegacyReservationRecommendationProperties**](LegacyReservationRecommendationProperties.md) |  | 
**kind** | **str** | Specifies the kind of reservation recommendation. | 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 
**location** | **str** | Resource location | [optional] [readonly] 
**sku** | **str** | Resource sku | [optional] [readonly] 

## Example

```python
from openapi_client.models.legacy_reservation_recommendation import LegacyReservationRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyReservationRecommendation from a JSON string
legacy_reservation_recommendation_instance = LegacyReservationRecommendation.from_json(json)
# print the JSON string representation of the object
print(LegacyReservationRecommendation.to_json())

# convert the object into a dict
legacy_reservation_recommendation_dict = legacy_reservation_recommendation_instance.to_dict()
# create an instance of LegacyReservationRecommendation from a dict
legacy_reservation_recommendation_from_dict = LegacyReservationRecommendation.from_dict(legacy_reservation_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


