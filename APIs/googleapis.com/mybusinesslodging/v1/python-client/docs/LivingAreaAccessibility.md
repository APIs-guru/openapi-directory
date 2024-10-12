# LivingAreaAccessibility

Accessibility features of the living area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ada_compliant_unit** | **bool** | ADA compliant unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues, as determined by legislative policy. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged. | [optional] 
**ada_compliant_unit_exception** | **str** | ADA compliant unit exception. | [optional] 
**hearing_accessible_doorbell** | **bool** | Hearing-accessible doorbell. A visual indicator(s) of a knock or ring at the door. | [optional] 
**hearing_accessible_doorbell_exception** | **str** | Hearing-accessible doorbell exception. | [optional] 
**hearing_accessible_fire_alarm** | **bool** | Hearing-accessible fire alarm. A device that gives warning of a fire through flashing lights. | [optional] 
**hearing_accessible_fire_alarm_exception** | **str** | Hearing-accessible fire alarm exception. | [optional] 
**hearing_accessible_unit** | **bool** | Hearing-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with auditory issues. | [optional] 
**hearing_accessible_unit_exception** | **str** | Hearing-accessible unit exception. | [optional] 
**mobility_accessible_bathtub** | **bool** | Mobility-accessible bathtub. A bathtub that accomodates the physically challenged with additional railings or hand grips, a transfer seat or lift, and/or a door to enable walking into the tub. | [optional] 
**mobility_accessible_bathtub_exception** | **str** | Mobility-accessible bathtub exception. | [optional] 
**mobility_accessible_shower** | **bool** | Mobility-accessible shower. A shower with an enlarged door or access point to accommodate a wheelchair or a waterproof seat for the physically challenged. | [optional] 
**mobility_accessible_shower_exception** | **str** | Mobility-accessible shower exception. | [optional] 
**mobility_accessible_toilet** | **bool** | Mobility-accessible toilet. A toilet with a higher seat, grab bars, and/or a larger area around it to accommodate the physically challenged. | [optional] 
**mobility_accessible_toilet_exception** | **str** | Mobility-accessible toilet exception. | [optional] 
**mobility_accessible_unit** | **bool** | Mobility-accessible unit. A guestroom designed to accommodate the physical challenges of a guest with mobility and/or auditory and/or visual issues. Usually features enlarged doorways, roll-in showers with seats, bathroom grab bars, and communication equipment for the hearing and sight challenged. | [optional] 
**mobility_accessible_unit_exception** | **str** | Mobility-accessible unit exception. | [optional] 

## Example

```python
from openapi_client.models.living_area_accessibility import LivingAreaAccessibility

# TODO update the JSON string below
json = "{}"
# create an instance of LivingAreaAccessibility from a JSON string
living_area_accessibility_instance = LivingAreaAccessibility.from_json(json)
# print the JSON string representation of the object
print(LivingAreaAccessibility.to_json())

# convert the object into a dict
living_area_accessibility_dict = living_area_accessibility_instance.to_dict()
# create an instance of LivingAreaAccessibility from a dict
living_area_accessibility_from_dict = LivingAreaAccessibility.from_dict(living_area_accessibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


