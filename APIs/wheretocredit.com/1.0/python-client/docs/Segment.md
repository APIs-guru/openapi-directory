# Segment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**booking_class** | **str** | Single-letter booking class used to determine the earning rate for the flight segment. | 
**carrier** | **str** | Two-letter IATA carrier code for the marketing airline.  This is used to determine which earnings chart will be applied for this segment.  NOTE: Frequent flyer programs based on operating carrier, including but not limited to Star Alliance carriers, cannot be reliably mapped to a booking class and will not be accurately reflected in this API. | 
**departure** | **datetime** | The date on the flight will depart from the origin to go to the destination.  This is used to determine which earnings chart will be in effect at time of departure. | [optional] 
**destination** | **str** | Three-letter IATA airport code to which the flight is going. | 
**distance** | **float** | The number of miles for this flight segment.  Otherwise, distance is calculated using the great-circle distance between the origin and destination and may not match other data sources exactly. | [optional] 
**flight_number** | **int** | The airline identifier for the flight segment, most commonly (but not always) a number and is used for earning charts that are restricted to specific flight numbers. | [optional] 
**operating_carrier** | **str** | Two-letter IATA carrier code for the operating airline.  This value is only used when earning is based on marketing carrier but restricted to a specific operating carrier.  Leaving this value blank will assume the flight is operated by the marketing carrier. | [optional] 
**origin** | **str** | Three-letter IATA airport code from which the flight will depart. | 

## Example

```python
from openapi_client.models.segment import Segment

# TODO update the JSON string below
json = "{}"
# create an instance of Segment from a JSON string
segment_instance = Segment.from_json(json)
# print the JSON string representation of the object
print(Segment.to_json())

# convert the object into a dict
segment_dict = segment_instance.to_dict()
# create an instance of Segment from a dict
segment_from_dict = Segment.from_dict(segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


