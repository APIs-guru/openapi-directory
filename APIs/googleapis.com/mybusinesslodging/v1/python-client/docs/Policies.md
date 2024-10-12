# Policies

Property rules that impact guests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_inclusive_available** | **bool** | All inclusive available. The hotel offers a rate option that includes the cost of the room, meals, activities, and other amenities that might otherwise be charged separately. | [optional] 
**all_inclusive_available_exception** | **str** | All inclusive available exception. | [optional] 
**all_inclusive_only** | **bool** | All inclusive only. The only rate option offered by the hotel is a rate that includes the cost of the room, meals, activities and other amenities that might otherwise be charged separately. | [optional] 
**all_inclusive_only_exception** | **str** | All inclusive only exception. | [optional] 
**checkin_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**checkin_time_exception** | **str** | Check-in time exception. | [optional] 
**checkout_time** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**checkout_time_exception** | **str** | Check-out time exception. | [optional] 
**kids_stay_free** | **bool** | Kids stay free. The children of guests are allowed to stay in the room/suite of a parent or adult without an additional fee. The policy may or may not stipulate a limit of the child&#39;s age or the overall number of children allowed. | [optional] 
**kids_stay_free_exception** | **str** | Kids stay free exception. | [optional] 
**max_child_age** | **int** | Max child age. The hotel allows children up to a certain age to stay in the room/suite of a parent or adult without an additional fee. | [optional] 
**max_child_age_exception** | **str** | Max child age exception. | [optional] 
**max_kids_stay_free_count** | **int** | Max kids stay free count. The hotel allows a specific, defined number of children to stay in the room/suite of a parent or adult without an additional fee. | [optional] 
**max_kids_stay_free_count_exception** | **str** | Max kids stay free count exception. | [optional] 
**payment_options** | [**PaymentOptions**](PaymentOptions.md) |  | [optional] 
**smoke_free_property** | **bool** | Smoke free property. Smoking is not allowed inside the building, on balconies, or in outside spaces. Hotels that offer a designated area for guests to smoke are not considered smoke-free properties. | [optional] 
**smoke_free_property_exception** | **str** | Smoke free property exception. | [optional] 

## Example

```python
from openapi_client.models.policies import Policies

# TODO update the JSON string below
json = "{}"
# create an instance of Policies from a JSON string
policies_instance = Policies.from_json(json)
# print the JSON string representation of the object
print(Policies.to_json())

# convert the object into a dict
policies_dict = policies_instance.to_dict()
# create an instance of Policies from a dict
policies_from_dict = Policies.from_dict(policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


