# ConfigUpdateParam

Config object update parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **str** | A serialised payload of up to &#x60;4096&#x60; characters | [optional] 

## Example

```python
from openapi_client.models.config_update_param import ConfigUpdateParam

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigUpdateParam from a JSON string
config_update_param_instance = ConfigUpdateParam.from_json(json)
# print the JSON string representation of the object
print(ConfigUpdateParam.to_json())

# convert the object into a dict
config_update_param_dict = config_update_param_instance.to_dict()
# create an instance of ConfigUpdateParam from a dict
config_update_param_from_dict = ConfigUpdateParam.from_dict(config_update_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


