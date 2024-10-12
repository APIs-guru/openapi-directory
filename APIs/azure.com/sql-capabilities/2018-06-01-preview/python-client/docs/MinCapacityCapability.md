# MinCapacityCapability

The min capacity capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**value** | **float** | Min capacity value | [optional] [readonly] 

## Example

```python
from openapi_client.models.min_capacity_capability import MinCapacityCapability

# TODO update the JSON string below
json = "{}"
# create an instance of MinCapacityCapability from a JSON string
min_capacity_capability_instance = MinCapacityCapability.from_json(json)
# print the JSON string representation of the object
print(MinCapacityCapability.to_json())

# convert the object into a dict
min_capacity_capability_dict = min_capacity_capability_instance.to_dict()
# create an instance of MinCapacityCapability from a dict
min_capacity_capability_from_dict = MinCapacityCapability.from_dict(min_capacity_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


