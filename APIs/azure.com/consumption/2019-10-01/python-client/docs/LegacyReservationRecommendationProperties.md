# LegacyReservationRecommendationProperties

The properties of the reservation recommendation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_with_no_reserved_instances** | **float** | The total amount of cost without reserved instances. | [optional] [readonly] 
**first_usage_date** | **datetime** | The usage date for looking back. | [optional] [readonly] 
**instance_flexibility_group** | **str** | The instance Flexibility Group. | [optional] [readonly] 
**instance_flexibility_ratio** | **int** | The instance Flexibility Ratio. | [optional] [readonly] 
**look_back_period** | **str** | The number of days of usage to look back for recommendation. | [optional] [readonly] 
**meter_id** | **str** | The meter id (GUID) | [optional] [readonly] 
**net_savings** | **float** | Total estimated savings with reserved instances. | [optional] [readonly] 
**normalized_size** | **str** | The normalized Size. | [optional] [readonly] 
**recommended_quantity** | **float** | Recommended quality for reserved instances. | [optional] [readonly] 
**recommended_quantity_normalized** | **float** | The recommended Quantity Normalized. | [optional] [readonly] 
**scope** | **str** | Shared or single recommendation. | [optional] [readonly] 
**sku_properties** | [**List[SkuProperty]**](SkuProperty.md) | List of sku properties | [optional] [readonly] 
**term** | **str** | RI recommendations in one or three year terms. | [optional] [readonly] 
**total_cost_with_reserved_instances** | **float** | The total amount of cost with reserved instances. | [optional] [readonly] 

## Example

```python
from openapi_client.models.legacy_reservation_recommendation_properties import LegacyReservationRecommendationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyReservationRecommendationProperties from a JSON string
legacy_reservation_recommendation_properties_instance = LegacyReservationRecommendationProperties.from_json(json)
# print the JSON string representation of the object
print(LegacyReservationRecommendationProperties.to_json())

# convert the object into a dict
legacy_reservation_recommendation_properties_dict = legacy_reservation_recommendation_properties_instance.to_dict()
# create an instance of LegacyReservationRecommendationProperties from a dict
legacy_reservation_recommendation_properties_from_dict = LegacyReservationRecommendationProperties.from_dict(legacy_reservation_recommendation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


