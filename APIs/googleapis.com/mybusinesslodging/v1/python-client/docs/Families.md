# Families

Services and amenities for families and young guests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**babysitting** | **bool** | Babysitting. Child care that is offered by hotel staffers or coordinated by hotel staffers with local child care professionals. Can be free or for a fee. | [optional] 
**babysitting_exception** | **str** | Babysitting exception. | [optional] 
**kids_activities** | **bool** | Kids activities. Recreational options such as sports, films, crafts and games designed for the enjoyment of children and offered at the hotel. May or may not be supervised. May or may not be at a designated time or place. Cab be free or for a fee. | [optional] 
**kids_activities_exception** | **str** | Kids activities exception. | [optional] 
**kids_club** | **bool** | Kids club. An organized program of group activities held at the hotel and designed for the enjoyment of children. Facilitated by hotel staff (or staff procured by the hotel) in an area(s) designated for the purpose of entertaining children without their parents. May include games, outings, water sports, team sports, arts and crafts, and films. Usually has set hours. Can be free or for a fee. Also known as Kids Camp or Kids program. | [optional] 
**kids_club_exception** | **str** | Kids club exception. | [optional] 
**kids_friendly** | **bool** | Kids friendly. The hotel has one or more special features for families with children, such as reduced rates, child-sized beds, kids&#39; club, babysitting service, or suitable place to play on premises. | [optional] 
**kids_friendly_exception** | **str** | Kids friendly exception. | [optional] 

## Example

```python
from openapi_client.models.families import Families

# TODO update the JSON string below
json = "{}"
# create an instance of Families from a JSON string
families_instance = Families.from_json(json)
# print the JSON string representation of the object
print(Families.to_json())

# convert the object into a dict
families_dict = families_instance.to_dict()
# create an instance of Families from a dict
families_from_dict = Families.from_dict(families_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


