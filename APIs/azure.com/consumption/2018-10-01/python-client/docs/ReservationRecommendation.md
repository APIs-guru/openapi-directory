# ReservationRecommendation

Reservation recommendation resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReservationRecommendationProperties**](ReservationRecommendationProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 
**location** | **str** | Resource location | [optional] [readonly] 
**sku** | **str** | Resource sku | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_recommendation import ReservationRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationRecommendation from a JSON string
reservation_recommendation_instance = ReservationRecommendation.from_json(json)
# print the JSON string representation of the object
print(ReservationRecommendation.to_json())

# convert the object into a dict
reservation_recommendation_dict = reservation_recommendation_instance.to_dict()
# create an instance of ReservationRecommendation from a dict
reservation_recommendation_from_dict = ReservationRecommendation.from_dict(reservation_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


