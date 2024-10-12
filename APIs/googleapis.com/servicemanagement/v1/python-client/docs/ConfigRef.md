# ConfigRef

Represents a service configuration with its name and id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name of a service config. It must have the following format: \&quot;services/{service name}/configs/{config id}\&quot;. | [optional] 

## Example

```python
from openapi_client.models.config_ref import ConfigRef

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigRef from a JSON string
config_ref_instance = ConfigRef.from_json(json)
# print the JSON string representation of the object
print(ConfigRef.to_json())

# convert the object into a dict
config_ref_dict = config_ref_instance.to_dict()
# create an instance of ConfigRef from a dict
config_ref_from_dict = ConfigRef.from_dict(config_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


