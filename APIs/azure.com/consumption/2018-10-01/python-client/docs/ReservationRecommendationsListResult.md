# ReservationRecommendationsListResult

Result of listing reservation recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[ReservationRecommendation]**](ReservationRecommendation.md) | The list of reservation recommendations. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reservation_recommendations_list_result import ReservationRecommendationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationRecommendationsListResult from a JSON string
reservation_recommendations_list_result_instance = ReservationRecommendationsListResult.from_json(json)
# print the JSON string representation of the object
print(ReservationRecommendationsListResult.to_json())

# convert the object into a dict
reservation_recommendations_list_result_dict = reservation_recommendations_list_result_instance.to_dict()
# create an instance of ReservationRecommendationsListResult from a dict
reservation_recommendations_list_result_from_dict = ReservationRecommendationsListResult.from_dict(reservation_recommendations_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


