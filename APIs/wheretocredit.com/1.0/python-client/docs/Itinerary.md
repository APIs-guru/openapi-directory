# Itinerary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_fare_usd** | **float** | Amount in USD that will be used to calculate revenue program mileage earning.  This amount should generally include carrier imposed surcharges but exclude other taxes. Default is 0. | [optional] 
**id** | **str** | Unique identifier for this itinerary that will be passed back to help correlate a result. | [optional] 
**segments** | [**List[Segment]**](Segment.md) | Every flight transfer or stopover should be considered a separate segment. | 
**ticketing_carrier** | **str** | Two-letter IATA carrier code for the ticketing or plating airline.  This is used for revenue programs (i.e. UA, DL, B6).  Leaving this value blank will exclude revenue programs. | [optional] 

## Example

```python
from openapi_client.models.itinerary import Itinerary

# TODO update the JSON string below
json = "{}"
# create an instance of Itinerary from a JSON string
itinerary_instance = Itinerary.from_json(json)
# print the JSON string representation of the object
print(Itinerary.to_json())

# convert the object into a dict
itinerary_dict = itinerary_instance.to_dict()
# create an instance of Itinerary from a dict
itinerary_from_dict = Itinerary.from_dict(itinerary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


