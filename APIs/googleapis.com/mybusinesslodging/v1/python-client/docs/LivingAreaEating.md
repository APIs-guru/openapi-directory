# LivingAreaEating

Information about eating features in the living area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coffee_maker** | **bool** | Coffee maker. An electric appliance that brews coffee by heating and forcing water through ground coffee. | [optional] 
**coffee_maker_exception** | **str** | Coffee maker exception. | [optional] 
**cookware** | **bool** | Cookware. Kitchen pots, pans and utensils used in connection with the preparation of food. | [optional] 
**cookware_exception** | **str** | Cookware exception. | [optional] 
**dishwasher** | **bool** | Dishwasher. A counter-height electrical cabinet containing racks for dirty dishware, cookware and cutlery, and a dispenser for soap built into the pull-down door. The cabinet is attached to the plumbing system to facilitate the automatic cleaning of its contents. | [optional] 
**dishwasher_exception** | **str** | Dishwasher exception. | [optional] 
**indoor_grill** | **bool** | Indoor grill. Metal grates built into an indoor cooktop on which food is cooked over an open flame or electric heat source. | [optional] 
**indoor_grill_exception** | **str** | Indoor grill exception. | [optional] 
**kettle** | **bool** | Kettle. A covered container with a handle and a spout used for boiling water. | [optional] 
**kettle_exception** | **str** | Kettle exception. | [optional] 
**kitchen_available** | **bool** | Kitchen available. An area of the guestroom designated for the preparation and storage of food via the presence of a refrigerator, cook top, oven and sink, as well as cutlery, dishes and cookware. Usually includes small appliances such a coffee maker and a microwave. May or may not include an automatic dishwasher. | [optional] 
**kitchen_available_exception** | **str** | Kitchen available exception. | [optional] 
**microwave** | **bool** | Microwave. An electric oven that quickly cooks and heats food by microwave energy. Smaller than a standing or wall mounted oven. Usually placed on a kitchen counter, a shelf or tabletop or mounted above a cooktop. | [optional] 
**microwave_exception** | **str** | Microwave exception. | [optional] 
**minibar** | **bool** | Minibar. A small refrigerated cabinet in the guestroom containing bottles/cans of soft drinks, mini bottles of alcohol, and snacks. The items are most commonly available for a fee. | [optional] 
**minibar_exception** | **str** | Minibar exception. | [optional] 
**outdoor_grill** | **bool** | Outdoor grill. Metal grates on which food is cooked over an open flame or electric heat source. Part of an outdoor apparatus that supports the grates. Also known as barbecue grill or barbecue. | [optional] 
**outdoor_grill_exception** | **str** | Outdoor grill exception. | [optional] 
**oven** | **bool** | Oven. A temperature controlled, heated metal cabinet powered by gas or electricity in which food is placed for the purpose of cooking or reheating. | [optional] 
**oven_exception** | **str** | Oven exception. | [optional] 
**refrigerator** | **bool** | Refrigerator. A large, climate-controlled electrical cabinet with vertical doors. Built for the purpose of chilling and storing perishable foods. | [optional] 
**refrigerator_exception** | **str** | Refrigerator exception. | [optional] 
**sink** | **bool** | Sink. A basin with a faucet attached to a water source and used for the purpose of washing and rinsing. | [optional] 
**sink_exception** | **str** | Sink exception. | [optional] 
**snackbar** | **bool** | Snackbar. A small cabinet in the guestroom containing snacks. The items are most commonly available for a fee. | [optional] 
**snackbar_exception** | **str** | Snackbar exception. | [optional] 
**stove** | **bool** | Stove. A kitchen appliance powered by gas or electricity for the purpose of creating a flame or hot surface on which pots of food can be cooked. Also known as cooktop or hob. | [optional] 
**stove_exception** | **str** | Stove exception. | [optional] 
**tea_station** | **bool** | Tea station. A small area with the supplies needed to heat water and make tea. | [optional] 
**tea_station_exception** | **str** | Tea station exception. | [optional] 
**toaster** | **bool** | Toaster. A small, temperature controlled electric appliance with rectangular slots at the top that are lined with heated coils for the purpose of browning slices of bread products. | [optional] 
**toaster_exception** | **str** | Toaster exception. | [optional] 

## Example

```python
from openapi_client.models.living_area_eating import LivingAreaEating

# TODO update the JSON string below
json = "{}"
# create an instance of LivingAreaEating from a JSON string
living_area_eating_instance = LivingAreaEating.from_json(json)
# print the JSON string representation of the object
print(LivingAreaEating.to_json())

# convert the object into a dict
living_area_eating_dict = living_area_eating_instance.to_dict()
# create an instance of LivingAreaEating from a dict
living_area_eating_from_dict = LivingAreaEating.from_dict(living_area_eating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


