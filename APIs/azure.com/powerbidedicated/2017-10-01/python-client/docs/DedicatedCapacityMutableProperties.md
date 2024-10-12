# DedicatedCapacityMutableProperties

An object that represents a set of mutable Dedicated capacity resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administration** | [**DedicatedCapacityAdministrators**](DedicatedCapacityAdministrators.md) |  | [optional] 

## Example

```python
from openapi_client.models.dedicated_capacity_mutable_properties import DedicatedCapacityMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCapacityMutableProperties from a JSON string
dedicated_capacity_mutable_properties_instance = DedicatedCapacityMutableProperties.from_json(json)
# print the JSON string representation of the object
print(DedicatedCapacityMutableProperties.to_json())

# convert the object into a dict
dedicated_capacity_mutable_properties_dict = dedicated_capacity_mutable_properties_instance.to_dict()
# create an instance of DedicatedCapacityMutableProperties from a dict
dedicated_capacity_mutable_properties_from_dict = DedicatedCapacityMutableProperties.from_dict(dedicated_capacity_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


