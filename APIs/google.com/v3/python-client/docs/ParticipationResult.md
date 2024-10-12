# ParticipationResult

Represents a result from querying for participation stats for an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**Key**](Key.md) |  | [optional] 
**missed_participation_count** | **str** | The total number of opportunities **not** eligible for the Google Ads auction process. Comprised of the following: * Landing page missing * Price missing * Price problem * Price unavailable * Other | [optional] 
**missed_participation_count_details** | [**MissedParticipationCountDetails**](MissedParticipationCountDetails.md) |  | [optional] 
**opportunity_count** | **str** | For a specific hotel, the total number of opportunities that were available. Opportunities are the total number of instances when a hotel ad could have been displayed to a user. | [optional] 
**participation_count** | **str** | The total number of opportunities for which you were eligible to enter in the Google Ads auction process. | [optional] 
**participation_percent** | **float** | The percentage rate of participation where the number of successfully participated opportunities is divided by the total number of opportunities. For example, if a property was eligible to enter the Google Ads auction 90 times out of 100 opportunities, the participation rate is 90%. | [optional] 
**partner_hotel_display_name** | **str** | Partner&#39;s hotel display name. This field is only populated when the result is aggregated by &#x60;partnerHotelId&#x60;. | [optional] 

## Example

```python
from openapi_client.models.participation_result import ParticipationResult

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipationResult from a JSON string
participation_result_instance = ParticipationResult.from_json(json)
# print the JSON string representation of the object
print(ParticipationResult.to_json())

# convert the object into a dict
participation_result_dict = participation_result_instance.to_dict()
# create an instance of ParticipationResult from a dict
participation_result_from_dict = ParticipationResult.from_dict(participation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


