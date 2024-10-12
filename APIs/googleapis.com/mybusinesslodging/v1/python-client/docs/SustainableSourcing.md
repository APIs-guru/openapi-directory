# SustainableSourcing

Sustainable sourcing practices implemented at the hotel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eco_friendly_toiletries** | **bool** | Eco friendly toiletries. Soap, shampoo, lotion, and other toiletries provided for guests have a nationally or internationally recognized sustainability certification, such as USDA Organic, EU Organic, or cruelty-free. | [optional] 
**eco_friendly_toiletries_exception** | **str** | Eco friendly toiletries exception. | [optional] 
**locally_sourced_food_and_beverages** | **bool** | Locally sourced food and beverages. Property sources locally in order to lower the environmental footprint from reduced transportation and to stimulate the local economy. Products produced less than 62 miles from the establishment are normally considered as locally produced. | [optional] 
**locally_sourced_food_and_beverages_exception** | **str** | Locally sourced food and beverages exception. | [optional] 
**organic_cage_free_eggs** | **bool** | Organic cage free eggs. The property sources 100% certified organic and cage-free eggs (shell, liquid, and egg products). Cage-free means hens are able to walk, spread their wings and lay their eggs in nests). | [optional] 
**organic_cage_free_eggs_exception** | **str** | Organic cage free eggs exception. | [optional] 
**organic_food_and_beverages** | **bool** | Organic food and beverages. At least 25% of food and beverages, by spend, are certified organic. Organic means products that are certified to one of the organic standard listed in the IFOAM family of standards. Qualifying certifications include USDA Organic and EU Organic, among others. | [optional] 
**organic_food_and_beverages_exception** | **str** | Organic food and beverages exception. | [optional] 
**responsible_purchasing_policy** | **bool** | Responsible purchasing policy. The property has a responsible procurement policy in place. Responsible means integration of social, ethical, and/or environmental performance factors into the procurement process when selecting suppliers. | [optional] 
**responsible_purchasing_policy_exception** | **str** | Responsible purchasing policy exception. | [optional] 
**responsibly_sources_seafood** | **bool** | Responsibly sources seafood. The property does not source seafood from the Monterey Bay Aquarium Seafood Watch \&quot;avoid\&quot; list, and must sustainably source seafood listed as \&quot;good alternative,\&quot; \&quot;eco-certified,\&quot; and \&quot;best choice\&quot;. The property has a policy outlining a commitment to source Marine Stewardship Council (MSC) and/or Aquaculture Stewardship Council (ASC) Chain of Custody certified seafood. | [optional] 
**responsibly_sources_seafood_exception** | **str** | Responsibly sources seafood exception. | [optional] 
**vegan_meals** | **bool** | Vegan meals. The property provides vegan menu options for guests. Vegan food does not contain animal products or byproducts. | [optional] 
**vegan_meals_exception** | **str** | Vegan meals exception. | [optional] 
**vegetarian_meals** | **bool** | Vegetarian meals. The property provides vegetarian menu options for guests. Vegetarian food does not contain meat, poultry, fish, or seafood. | [optional] 
**vegetarian_meals_exception** | **str** | Vegetarian meals exception. | [optional] 

## Example

```python
from openapi_client.models.sustainable_sourcing import SustainableSourcing

# TODO update the JSON string below
json = "{}"
# create an instance of SustainableSourcing from a JSON string
sustainable_sourcing_instance = SustainableSourcing.from_json(json)
# print the JSON string representation of the object
print(SustainableSourcing.to_json())

# convert the object into a dict
sustainable_sourcing_dict = sustainable_sourcing_instance.to_dict()
# create an instance of SustainableSourcing from a dict
sustainable_sourcing_from_dict = SustainableSourcing.from_dict(sustainable_sourcing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


