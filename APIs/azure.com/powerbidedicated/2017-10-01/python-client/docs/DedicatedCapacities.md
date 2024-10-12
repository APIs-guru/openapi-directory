# DedicatedCapacities

An array of Dedicated capacities resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DedicatedCapacity]**](DedicatedCapacity.md) | An array of Dedicated capacities resources. | 

## Example

```python
from openapi_client.models.dedicated_capacities import DedicatedCapacities

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCapacities from a JSON string
dedicated_capacities_instance = DedicatedCapacities.from_json(json)
# print the JSON string representation of the object
print(DedicatedCapacities.to_json())

# convert the object into a dict
dedicated_capacities_dict = dedicated_capacities_instance.to_dict()
# create an instance of DedicatedCapacities from a dict
dedicated_capacities_from_dict = DedicatedCapacities.from_dict(dedicated_capacities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


