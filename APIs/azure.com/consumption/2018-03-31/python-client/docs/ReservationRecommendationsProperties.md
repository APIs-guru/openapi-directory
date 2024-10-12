# ReservationRecommendationsProperties

The properties of the reservation recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_with_no_reserved_instances** | **float** | The total amount of cost without reserved instances. | [optional] [readonly] 
**first_usage_date** | **datetime** | The usage date for looking back. | [optional] [readonly] 
**look_back_period** | **str** | The number of days of usage to look back for recommendations. | [optional] [readonly] 
**meter_id** | **str** | The meter id (GUID) | [optional] [readonly] 
**net_savings** | **float** | Total estimated savings with reserved instances. | [optional] [readonly] 
**recommended_quantity** | **float** | Recommended quality for reserved instances. | [optional] [readonly] 
**scope** | **str** | Shared or single recommendation. | [optional] [readonly] 
**term** | **str** | RI recommendations in one or three year terms. | [optional] [readonly] 
**total_cost_with_reserved_instances** | **float** | The total amount of cost with reserved instances. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_recommendations_properties import ReservationRecommendationsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationRecommendationsProperties from a JSON string
reservation_recommendations_properties_instance = ReservationRecommendationsProperties.from_json(json)
# print the JSON string representation of the object
print(ReservationRecommendationsProperties.to_json())

# convert the object into a dict
reservation_recommendations_properties_dict = reservation_recommendations_properties_instance.to_dict()
# create an instance of ReservationRecommendationsProperties from a dict
reservation_recommendations_properties_from_dict = ReservationRecommendationsProperties.from_dict(reservation_recommendations_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


