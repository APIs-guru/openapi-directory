# GuestUnitFeatures

Features and available amenities in the guest unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bungalow_or_villa** | **bool** | Bungalow or villa. An independent structure that is part of a hotel or resort that is rented to one party for a vacation stay. The hotel or resort may be completely comprised of bungalows or villas, or they may be one of several guestroom options. Guests in the bungalows or villas most often have the same, if not more, amenities and services offered to guests in other guestroom types. | [optional] 
**bungalow_or_villa_exception** | **str** | Bungalow or villa exception. | [optional] 
**connecting_unit_available** | **bool** | Connecting unit available. A guestroom type that features access to an adjacent guestroom for the purpose of booking both rooms. Most often used by families who need more than one room to accommodate the number of people in their group. | [optional] 
**connecting_unit_available_exception** | **str** | Connecting unit available exception. | [optional] 
**executive_floor** | **bool** | Executive floor. A floor of the hotel where the guestrooms are only bookable by members of the hotel&#39;s frequent guest membership program. Benefits of this room class include access to a designated lounge which may or may not feature free breakfast, cocktails or other perks specific to members of the program. | [optional] 
**executive_floor_exception** | **str** | Executive floor exception. | [optional] 
**max_adult_occupants_count** | **int** | Max adult occupants count. The total number of adult guests allowed to stay overnight in the guestroom. | [optional] 
**max_adult_occupants_count_exception** | **str** | Max adult occupants count exception. | [optional] 
**max_child_occupants_count** | **int** | Max child occupants count. The total number of children allowed to stay overnight in the room. | [optional] 
**max_child_occupants_count_exception** | **str** | Max child occupants count exception. | [optional] 
**max_occupants_count** | **int** | Max occupants count. The total number of guests allowed to stay overnight in the guestroom. | [optional] 
**max_occupants_count_exception** | **str** | Max occupants count exception. | [optional] 
**private_home** | **bool** | Private home. A privately owned home (house, townhouse, apartment, cabin, bungalow etc) that may or not serve as the owner&#39;s residence, but is rented out in its entirety or by the room(s) to paying guest(s) for vacation stays. Not for lease-based, long-term residency. | [optional] 
**private_home_exception** | **str** | Private home exception. | [optional] 
**suite** | **bool** | Suite. A guestroom category that implies both a bedroom area and a separate living area. There may or may not be full walls and doors separating the two areas, but regardless, they are very distinct. Does not mean a couch or chair in a bedroom. | [optional] 
**suite_exception** | **str** | Suite exception. | [optional] 
**tier** | **str** | Tier. Classification of the unit based on available features/amenities. A non-standard tier is only permitted if at least one other unit type falls under the standard tier. | [optional] 
**tier_exception** | **str** | Tier exception. | [optional] 
**total_living_areas** | [**LivingArea**](LivingArea.md) |  | [optional] 
**views** | [**ViewsFromUnit**](ViewsFromUnit.md) |  | [optional] 

## Example

```python
from openapi_client.models.guest_unit_features import GuestUnitFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of GuestUnitFeatures from a JSON string
guest_unit_features_instance = GuestUnitFeatures.from_json(json)
# print the JSON string representation of the object
print(GuestUnitFeatures.to_json())

# convert the object into a dict
guest_unit_features_dict = guest_unit_features_instance.to_dict()
# create an instance of GuestUnitFeatures from a dict
guest_unit_features_from_dict = GuestUnitFeatures.from_dict(guest_unit_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


