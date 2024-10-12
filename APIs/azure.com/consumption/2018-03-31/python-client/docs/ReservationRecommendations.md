# ReservationRecommendations

Reservation recommendations resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReservationRecommendationsProperties**](ReservationRecommendationsProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 
**location** | **str** | Resource location | [optional] [readonly] 
**sku** | **str** | Resource sku | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_recommendations import ReservationRecommendations

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationRecommendations from a JSON string
reservation_recommendations_instance = ReservationRecommendations.from_json(json)
# print the JSON string representation of the object
print(ReservationRecommendations.to_json())

# convert the object into a dict
reservation_recommendations_dict = reservation_recommendations_instance.to_dict()
# create an instance of ReservationRecommendations from a dict
reservation_recommendations_from_dict = ReservationRecommendations.from_dict(reservation_recommendations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


