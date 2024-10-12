# EnergyEfficiency

Energy efficiency practices implemented at the hotel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carbon_free_energy_sources** | **bool** | Carbon free energy sources. Property sources carbon-free electricity via at least one of the following methods: on-site clean energy generation, power purchase agreement(s) with clean energy generators, green power provided by electricity supplier, or purchases of Energy Attribute Certificates (such as Renewable Energy Certificates or Guarantees of Origin). | [optional] 
**carbon_free_energy_sources_exception** | **str** | Carbon free energy sources exception. | [optional] 
**energy_conservation_program** | **bool** | Energy conservation program. The property tracks corporate-level Scope 1 and 2 GHG emissions, and Scope 3 emissions if available. The property has a commitment to implement initiatives that reduce GHG emissions year over year. The property has shown an absolute reduction in emissions for at least 2 years. Emissions are either verfied by a third-party and/or published in external communications. | [optional] 
**energy_conservation_program_exception** | **str** | Energy conservation program exception. | [optional] 
**energy_efficient_heating_and_cooling_systems** | **bool** | Energy efficient heating and cooling systems. The property doesn&#39;t use chlorofluorocarbon (CFC)-based refrigerants in heating, ventilating, and air-conditioning systems unless a third-party audit shows it&#39;s not economically feasible. The CFC-based refrigerants which are used should have a Global Warming Potential (GWP) ≤ 10. The property uses occupancy sensors on HVAC systems in back-of-house spaces, meeting rooms, and other low-traffic areas. | [optional] 
**energy_efficient_heating_and_cooling_systems_exception** | **str** | Energy efficient heating and cooling systems exception. | [optional] 
**energy_efficient_lighting** | **bool** | Energy efficient lighting. At least 75% of the property&#39;s lighting is energy efficient, using lighting that is more than 45 lumens per watt – typically LED or CFL lightbulbs. | [optional] 
**energy_efficient_lighting_exception** | **str** | Energy efficient lighting exception. | [optional] 
**energy_saving_thermostats** | **bool** | Energy saving thermostats. The property installed energy-saving thermostats throughout the building to conserve energy when rooms or areas are not in use. Energy-saving thermostats are devices that control heating/cooling in the building by learning temperature preferences and automatically adjusting to energy-saving temperatures as the default. The thermostats are automatically set to a temperature between 68-78 degrees F (20-26 °C), depending on seasonality. In the winter, set the thermostat to 68°F (20°C) when the room is occupied, lowering room temperature when unoccupied. In the summer, set the thermostat to 78°F (26°C) when the room is occupied. | [optional] 
**energy_saving_thermostats_exception** | **str** | Energy saving thermostats exception. | [optional] 
**green_building_design** | **bool** | Output only. Green building design. True if the property has been awarded a relevant certification. | [optional] [readonly] 
**green_building_design_exception** | **str** | Output only. Green building design exception. | [optional] [readonly] 
**independent_organization_audits_energy_use** | **bool** | Independent organization audits energy use. The property conducts an energy audit at least every 5 years, the results of which are either verified by a third-party and/or published in external communications. An energy audit is a detailed assessment of the facility which provides recommendations to existing operations and procedures to improve energy efficiency, available incentives or rebates,and opportunities for improvements through renovations or upgrades. Examples of organizations that conduct credible third party audits include: Engie Impact, DNV GL (EU), Dexma, and local utility providers (they often provide energy and water audits). | [optional] 
**independent_organization_audits_energy_use_exception** | **str** | Independent organization audits energy use exception. | [optional] 

## Example

```python
from openapi_client.models.energy_efficiency import EnergyEfficiency

# TODO update the JSON string below
json = "{}"
# create an instance of EnergyEfficiency from a JSON string
energy_efficiency_instance = EnergyEfficiency.from_json(json)
# print the JSON string representation of the object
print(EnergyEfficiency.to_json())

# convert the object into a dict
energy_efficiency_dict = energy_efficiency_instance.to_dict()
# create an instance of EnergyEfficiency from a dict
energy_efficiency_from_dict = EnergyEfficiency.from_dict(energy_efficiency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


