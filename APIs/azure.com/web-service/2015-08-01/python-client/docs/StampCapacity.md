# StampCapacity

Class containing stamp capacity information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_capacity** | **int** | Available capacity (# of machines, bytes of storage etc...) | [optional] 
**compute_mode** | **str** | Shared/Dedicated workers | [optional] 
**exclude_from_capacity_allocation** | **bool** | If true it includes basic sites              Basic sites are not used for capacity allocation. | [optional] 
**is_applicable_for_all_compute_modes** | **bool** | Is capacity applicable for all sites? | [optional] 
**name** | **str** | Name of the stamp | [optional] 
**site_mode** | **str** | Shared or Dedicated | [optional] 
**total_capacity** | **int** | Total capacity (# of machines, bytes of storage etc...) | [optional] 
**unit** | **str** | Name of the unit | [optional] 
**worker_size** | **str** | Size of the machines | [optional] 
**worker_size_id** | **int** | Size Id of machines:               0 - Small              1 - Medium              2 - Large | [optional] 

## Example

```python
from openapi_client.models.stamp_capacity import StampCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of StampCapacity from a JSON string
stamp_capacity_instance = StampCapacity.from_json(json)
# print the JSON string representation of the object
print(StampCapacity.to_json())

# convert the object into a dict
stamp_capacity_dict = stamp_capacity_instance.to_dict()
# create an instance of StampCapacity from a dict
stamp_capacity_from_dict = StampCapacity.from_dict(stamp_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


