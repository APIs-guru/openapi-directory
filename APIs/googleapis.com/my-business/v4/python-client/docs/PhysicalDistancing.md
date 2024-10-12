# PhysicalDistancing

Physical distancing measures implemented by the hotel during COVID-19.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_areas_physical_distancing_arranged** | **bool** | Common areas arranged to maintain physical distancing. | [optional] 
**common_areas_physical_distancing_arranged_exception** | **str** | Common areas physical distancing arranged exception. | [optional] 
**physical_distancing_required** | **bool** | Physical distancing required. | [optional] 
**physical_distancing_required_exception** | **str** | Physical distancing required exception. | [optional] 
**safety_dividers** | **bool** | Safety dividers at front desk and other locations. | [optional] 
**safety_dividers_exception** | **str** | Safety dividers exception. | [optional] 
**shared_areas_limited_occupancy** | **bool** | Guest occupancy limited within shared facilities. | [optional] 
**shared_areas_limited_occupancy_exception** | **str** | Shared areas limited occupancy exception. | [optional] 
**wellness_areas_have_private_spaces** | **bool** | Private spaces designated in spa and wellness areas. | [optional] 
**wellness_areas_have_private_spaces_exception** | **str** | Wellness areas have private spaces exception. | [optional] 

## Example

```python
from openapi_client.models.physical_distancing import PhysicalDistancing

# TODO update the JSON string below
json = "{}"
# create an instance of PhysicalDistancing from a JSON string
physical_distancing_instance = PhysicalDistancing.from_json(json)
# print the JSON string representation of the object
print(PhysicalDistancing.to_json())

# convert the object into a dict
physical_distancing_dict = physical_distancing_instance.to_dict()
# create an instance of PhysicalDistancing from a dict
physical_distancing_from_dict = PhysicalDistancing.from_dict(physical_distancing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


