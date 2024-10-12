# WasteReduction

Waste reduction practices implemented at the hotel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compostable_food_containers_and_cutlery** | **bool** | Compostable food containers and cutlery. 100% of food service containers and to-go cutlery are compostable, and reusable utensils are offered wherever possible. Compostable materials are capable of undergoing biological decomposition in a compost site, such that material is not visually distinguishable and breaks down into carbon dioxide, water, inorganic compounds, and biomass. | [optional] 
**compostable_food_containers_and_cutlery_exception** | **str** | Compostable food containers and cutlery exception. | [optional] 
**composts_excess_food** | **bool** | Composts excess food. The property has a program and/or policy for diverting waste from landfill by composting food and yard waste, either through compost collection and off-site processing or on-site compost processing. | [optional] 
**composts_excess_food_exception** | **str** | Composts excess food exception. | [optional] 
**donates_excess_food** | **bool** | Donates excess food. The property has a program and/or policy for diverting waste from landfill that may include efforts to donate for human consumption or divert food for animal feed. | [optional] 
**donates_excess_food_exception** | **str** | Donates excess food exception. | [optional] 
**food_waste_reduction_program** | **bool** | Food waste reduction program. The property has established a food waste reduction and donation program, aiming to reduce food waste by half. These programs typically use tools such as the Hotel Kitchen Toolkit and others to track waste and measure progress. | [optional] 
**food_waste_reduction_program_exception** | **str** | Food waste reduction program exception. | [optional] 
**no_single_use_plastic_straws** | **bool** | No single use plastic straws. The property bans single-use plastic straws. | [optional] 
**no_single_use_plastic_straws_exception** | **str** | No single use plastic straws exception. | [optional] 
**no_single_use_plastic_water_bottles** | **bool** | No single use plastic water bottles. The property bans single-use plastic water bottles. | [optional] 
**no_single_use_plastic_water_bottles_exception** | **str** | No single use plastic water bottles exception. | [optional] 
**no_styrofoam_food_containers** | **bool** | No styrofoam food containers. The property eliminates the use of Styrofoam in disposable food service items. | [optional] 
**no_styrofoam_food_containers_exception** | **str** | No styrofoam food containers exception. | [optional] 
**recycling_program** | **bool** | Recycling program. The property has a recycling program, aligned with LEED waste requirements, and a policy outlining efforts to send less than 50% of waste to landfill. The recycling program includes storage locations for recyclable materials, including mixed paper, corrugated cardboard, glass, plastics, and metals. | [optional] 
**recycling_program_exception** | **str** | Recycling program exception. | [optional] 
**refillable_toiletry_containers** | **bool** | Refillable toiletry containers. The property has replaced miniature individual containers with refillable amenity dispensers for shampoo, conditioner, soap, and lotion. | [optional] 
**refillable_toiletry_containers_exception** | **str** | Refillable toiletry containers exception. | [optional] 
**safely_disposes_batteries** | **bool** | Safely disposes batteries. The property safely stores and disposes batteries. | [optional] 
**safely_disposes_batteries_exception** | **str** | Safely disposes batteries exception. | [optional] 
**safely_disposes_electronics** | **bool** | Safely disposes electronics. The property has a reputable recycling program that keeps hazardous electronic parts and chemical compounds out of landfills, dumps and other unauthorized abandonment sites, and recycles/reuses applicable materials. (e.g. certified electronics recyclers). | [optional] 
**safely_disposes_electronics_exception** | **str** | Safely disposes electronics exception. | [optional] 
**safely_disposes_lightbulbs** | **bool** | Safely disposes lightbulbs. The property safely stores and disposes lightbulbs. | [optional] 
**safely_disposes_lightbulbs_exception** | **str** | Safely disposes lightbulbs exception. | [optional] 
**safely_handles_hazardous_substances** | **bool** | Safely handles hazardous substances. The property has a hazardous waste management program aligned wit GreenSeal and LEED requirements, and meets all regulatory requirements for hazardous waste disposal and recycling. Hazardous means substances that are classified as \&quot;hazardous\&quot; by an authoritative body (such as OSHA or DOT), are labeled with signal words such as \&quot;Danger,\&quot; \&quot;Caution,\&quot; \&quot;Warning,\&quot; or are flammable, corrosive, or ignitable. Requirements include: - The property shall maintain records of the efforts it has made to replace the hazardous substances it uses with less hazardous alternatives. - An inventory of the hazardous materials stored on-site. - Products intended for cleaning, dishwashing, laundry, and pool maintenance shall be stored in clearly labeled containers. These containers shall be checked regularly for leaks, and replaced a necessary. - Spill containment devices shall be installed to collect spills, drips, or leaching of chemicals. | [optional] 
**safely_handles_hazardous_substances_exception** | **str** | Safely handles hazardous substances exception. | [optional] 
**soap_donation_program** | **bool** | Soap donation program. The property participates in a soap donation program such as Clean the World or something similar. | [optional] 
**soap_donation_program_exception** | **str** | Soap donation program exception. | [optional] 
**toiletry_donation_program** | **bool** | Toiletry donation program. The property participates in a toiletry donation program such as Clean the World or something similar. | [optional] 
**toiletry_donation_program_exception** | **str** | Toiletry donation program exception. | [optional] 
**water_bottle_filling_stations** | **bool** | Water bottle filling stations. The property offers water stations throughout the building for guest use. | [optional] 
**water_bottle_filling_stations_exception** | **str** | Water bottle filling stations exception. | [optional] 

## Example

```python
from openapi_client.models.waste_reduction import WasteReduction

# TODO update the JSON string below
json = "{}"
# create an instance of WasteReduction from a JSON string
waste_reduction_instance = WasteReduction.from_json(json)
# print the JSON string representation of the object
print(WasteReduction.to_json())

# convert the object into a dict
waste_reduction_dict = waste_reduction_instance.to_dict()
# create an instance of WasteReduction from a dict
waste_reduction_from_dict = WasteReduction.from_dict(waste_reduction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


