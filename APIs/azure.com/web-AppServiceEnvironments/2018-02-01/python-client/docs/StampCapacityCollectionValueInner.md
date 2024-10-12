# StampCapacityCollectionValueInner

Stamp capacity information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_capacity** | **int** | Available capacity (# of machines, bytes of storage etc...). | [optional] 
**compute_mode** | **str** | Shared/dedicated workers. | [optional] 
**exclude_from_capacity_allocation** | **bool** | If &lt;code&gt;true&lt;/code&gt;, it includes basic apps. Basic apps are not used for capacity allocation. | [optional] 
**is_applicable_for_all_compute_modes** | **bool** | &lt;code&gt;true&lt;/code&gt; if capacity is applicable for all apps; otherwise, &lt;code&gt;false&lt;/code&gt;. | [optional] 
**is_linux** | **bool** | Is this a linux stamp capacity | [optional] 
**name** | **str** | Name of the stamp. | [optional] 
**site_mode** | **str** | Shared or Dedicated. | [optional] 
**total_capacity** | **int** | Total capacity (# of machines, bytes of storage etc...). | [optional] 
**unit** | **str** | Name of the unit. | [optional] 
**worker_size** | **str** | Size of the machines. | [optional] 
**worker_size_id** | **int** | Size ID of machines:  0 - Small 1 - Medium 2 - Large | [optional] 

## Example

```python
from openapi_client.models.stamp_capacity_collection_value_inner import StampCapacityCollectionValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of StampCapacityCollectionValueInner from a JSON string
stamp_capacity_collection_value_inner_instance = StampCapacityCollectionValueInner.from_json(json)
# print the JSON string representation of the object
print(StampCapacityCollectionValueInner.to_json())

# convert the object into a dict
stamp_capacity_collection_value_inner_dict = stamp_capacity_collection_value_inner_instance.to_dict()
# create an instance of StampCapacityCollectionValueInner from a dict
stamp_capacity_collection_value_inner_from_dict = StampCapacityCollectionValueInner.from_dict(stamp_capacity_collection_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


