# FoodAndDrink

Meals, snacks, and beverages available at the property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bar** | **bool** | Bar. A designated room, lounge or area of an on-site restaurant with seating at a counter behind which a hotel staffer takes the guest&#39;s order and provides the requested alcoholic drink. Can be indoors or outdoors. Also known as Pub. | [optional] 
**bar_exception** | **str** | Bar exception. | [optional] 
**breakfast_available** | **bool** | Breakfast available. The morning meal is offered to all guests. Can be free or for a fee. | [optional] 
**breakfast_available_exception** | **str** | Breakfast available exception. | [optional] 
**breakfast_buffet** | **bool** | Breakfast buffet. Breakfast meal service where guests serve themselves from a variety of dishes/foods that are put out on a table. | [optional] 
**breakfast_buffet_exception** | **str** | Breakfast buffet exception. | [optional] 
**buffet** | **bool** | Buffet. A type of meal where guests serve themselves from a variety of dishes/foods that are put out on a table. Includes lunch and/or dinner meals. A breakfast-only buffet is not sufficient. | [optional] 
**buffet_exception** | **str** | Buffet exception. | [optional] 
**dinner_buffet** | **bool** | Dinner buffet. Dinner meal service where guests serve themselves from a variety of dishes/foods that are put out on a table. | [optional] 
**dinner_buffet_exception** | **str** | Dinner buffet exception. | [optional] 
**free_breakfast** | **bool** | Free breakfast. Breakfast is offered for free to all guests. Does not apply if limited to certain room packages. | [optional] 
**free_breakfast_exception** | **str** | Free breakfast exception. | [optional] 
**restaurant** | **bool** | Restaurant. A business onsite at the hotel that is open to the public as well as guests, and offers meals and beverages to consume at tables or counters. May or may not include table service. Also known as cafe, buffet, eatery. A \&quot;breakfast room\&quot; where the hotel serves breakfast only to guests (not the general public) does not count as a restaurant. | [optional] 
**restaurant_exception** | **str** | Restaurant exception. | [optional] 
**restaurants_count** | **int** | Restaurants count. The number of restaurants at the hotel. | [optional] 
**restaurants_count_exception** | **str** | Restaurants count exception. | [optional] 
**room_service** | **bool** | Room service. A hotel staffer delivers meals prepared onsite to a guest&#39;s room as per their request. May or may not be available during specific hours. Services should be available to all guests (not based on rate/room booked/reward program, etc). | [optional] 
**room_service_exception** | **str** | Room service exception. | [optional] 
**table_service** | **bool** | Table service. A restaurant in which a staff member is assigned to a guest&#39;s table to take their order, deliver and clear away food, and deliver the bill, if applicable. Also known as sit-down restaurant. | [optional] 
**table_service_exception** | **str** | Table service exception. | [optional] 
**twenty_four_hour_room_service** | **bool** | 24hr room service. Room service is available 24 hours a day. | [optional] 
**twenty_four_hour_room_service_exception** | **str** | 24hr room service exception. | [optional] 
**vending_machine** | **bool** | Vending machine. A glass-fronted mechanized cabinet displaying and dispensing snacks and beverages for purchase by coins, paper money and/or credit cards. | [optional] 
**vending_machine_exception** | **str** | Vending machine exception. | [optional] 

## Example

```python
from openapi_client.models.food_and_drink import FoodAndDrink

# TODO update the JSON string below
json = "{}"
# create an instance of FoodAndDrink from a JSON string
food_and_drink_instance = FoodAndDrink.from_json(json)
# print the JSON string representation of the object
print(FoodAndDrink.to_json())

# convert the object into a dict
food_and_drink_dict = food_and_drink_instance.to_dict()
# create an instance of FoodAndDrink from a dict
food_and_drink_from_dict = FoodAndDrink.from_dict(food_and_drink_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


