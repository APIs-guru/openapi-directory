# InstanceConfig

Message storing the instance configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_size** | **str** | The instance size of this the instance configuration. | [optional] 

## Example

```python
from openapi_client.models.instance_config import InstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceConfig from a JSON string
instance_config_instance = InstanceConfig.from_json(json)
# print the JSON string representation of the object
print(InstanceConfig.to_json())

# convert the object into a dict
instance_config_dict = instance_config_instance.to_dict()
# create an instance of InstanceConfig from a dict
instance_config_from_dict = InstanceConfig.from_dict(instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


