# ScaleCapacity

The number of instances that can be used during this profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **str** | the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default. | 
**maximum** | **str** | the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription. | 
**minimum** | **str** | the minimum number of instances for the resource. | 

## Example

```python
from openapi_client.models.scale_capacity import ScaleCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleCapacity from a JSON string
scale_capacity_instance = ScaleCapacity.from_json(json)
# print the JSON string representation of the object
print(ScaleCapacity.to_json())

# convert the object into a dict
scale_capacity_dict = scale_capacity_instance.to_dict()
# create an instance of ScaleCapacity from a dict
scale_capacity_from_dict = ScaleCapacity.from_dict(scale_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


