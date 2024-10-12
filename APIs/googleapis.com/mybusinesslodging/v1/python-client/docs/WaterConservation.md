# WaterConservation

Water conservation practices implemented at the hotel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**independent_organization_audits_water_use** | **bool** | Independent organization audits water use. The property conducts a water conservation audit every 5 years, the results of which are either verified by a third-party and/or published in external communications. A water conservation audit is a detailed assessment of the facility, providing recommendations to existing operations and procedures to improve water efficiency, available incentives or rebates, and opportunities for improvements through renovations or upgrades. Examples of organizations who conduct credible third party audits include: Engie Impact, and local utility providers (they often provide energy and water audits). | [optional] 
**independent_organization_audits_water_use_exception** | **str** | Independent organization audits water use exception. | [optional] 
**linen_reuse_program** | **bool** | Linen reuse program. The property offers a linen reuse program. | [optional] 
**linen_reuse_program_exception** | **str** | Linen reuse program exception. | [optional] 
**towel_reuse_program** | **bool** | Towel reuse program. The property offers a towel reuse program. | [optional] 
**towel_reuse_program_exception** | **str** | Towel reuse program exception. | [optional] 
**water_saving_showers** | **bool** | Water saving showers. All of the property&#39;s guest rooms have shower heads that use no more than 2.0 gallons per minute (gpm). | [optional] 
**water_saving_showers_exception** | **str** | Water saving showers exception. | [optional] 
**water_saving_sinks** | **bool** | Water saving sinks. All of the property&#39;s guest rooms have bathroom faucets that use a maximum of 1.5 gallons per minute (gpm), public restroom faucets do not exceed 0.5 gpm, and kitchen faucets (excluding faucets used exclusively for filling operations) do not exceed 2.2 gpm. | [optional] 
**water_saving_sinks_exception** | **str** | Water saving sinks exception. | [optional] 
**water_saving_toilets** | **bool** | Water saving toilets. All of the property&#39;s toilets use 1.6 gallons per flush, or less. | [optional] 
**water_saving_toilets_exception** | **str** | Water saving toilets exception. | [optional] 

## Example

```python
from openapi_client.models.water_conservation import WaterConservation

# TODO update the JSON string below
json = "{}"
# create an instance of WaterConservation from a JSON string
water_conservation_instance = WaterConservation.from_json(json)
# print the JSON string representation of the object
print(WaterConservation.to_json())

# convert the object into a dict
water_conservation_dict = water_conservation_instance.to_dict()
# create an instance of WaterConservation from a dict
water_conservation_from_dict = WaterConservation.from_dict(water_conservation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


