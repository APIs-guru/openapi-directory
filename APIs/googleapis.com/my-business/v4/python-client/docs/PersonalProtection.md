# PersonalProtection

Personal protection measures implemented by the hotel during COVID-19.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_areas_offer_sanitizing_items** | **bool** | Hand-sanitizer and/or sanitizing wipes are offered in common areas. | [optional] 
**common_areas_offer_sanitizing_items_exception** | **str** | Common areas offer sanitizing items exception. | [optional] 
**face_mask_required** | **bool** | Masks required on the property. | [optional] 
**face_mask_required_exception** | **str** | Face mask required exception. | [optional] 
**guest_room_hygiene_kits_available** | **bool** | In-room hygiene kits with masks, hand sanitizer, and/or antibacterial wipes. | [optional] 
**guest_room_hygiene_kits_available_exception** | **str** | Guest room hygiene kits available exception. | [optional] 
**protective_equipment_available** | **bool** | Masks and/or gloves available for guests. | [optional] 
**protective_equipment_available_exception** | **str** | Protective equipment available exception. | [optional] 

## Example

```python
from openapi_client.models.personal_protection import PersonalProtection

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalProtection from a JSON string
personal_protection_instance = PersonalProtection.from_json(json)
# print the JSON string representation of the object
print(PersonalProtection.to_json())

# convert the object into a dict
personal_protection_dict = personal_protection_instance.to_dict()
# create an instance of PersonalProtection from a dict
personal_protection_from_dict = PersonalProtection.from_dict(personal_protection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


