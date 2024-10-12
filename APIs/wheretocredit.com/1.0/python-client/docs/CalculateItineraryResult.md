# CalculateItineraryResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier provided for this itinerary. | [optional] 
**totals** | [**List[CalculateItineraryProgramResult]**](CalculateItineraryProgramResult.md) | Total miles earned for each frequent flyer program. | [optional] 

## Example

```python
from openapi_client.models.calculate_itinerary_result import CalculateItineraryResult

# TODO update the JSON string below
json = "{}"
# create an instance of CalculateItineraryResult from a JSON string
calculate_itinerary_result_instance = CalculateItineraryResult.from_json(json)
# print the JSON string representation of the object
print(CalculateItineraryResult.to_json())

# convert the object into a dict
calculate_itinerary_result_dict = calculate_itinerary_result_instance.to_dict()
# create an instance of CalculateItineraryResult from a dict
calculate_itinerary_result_from_dict = CalculateItineraryResult.from_dict(calculate_itinerary_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


