# ScalingConfig

Represents the scaling configuration of a metastore service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_size** | **str** | An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL &#x3D; scaling_factor(0.1)) | [optional] 
**scaling_factor** | **float** | Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0. | [optional] 

## Example

```python
from openapi_client.models.scaling_config import ScalingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ScalingConfig from a JSON string
scaling_config_instance = ScalingConfig.from_json(json)
# print the JSON string representation of the object
print(ScalingConfig.to_json())

# convert the object into a dict
scaling_config_dict = scaling_config_instance.to_dict()
# create an instance of ScalingConfig from a dict
scaling_config_from_dict = ScalingConfig.from_dict(scaling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


