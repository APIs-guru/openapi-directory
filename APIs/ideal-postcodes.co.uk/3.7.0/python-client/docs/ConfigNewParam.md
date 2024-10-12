# ConfigNewParam

Required configuration object parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A unique name to identify the configuration payload | 
**payload** | **str** | A serialised payload of up to &#x60;4096&#x60; characters | 

## Example

```python
from openapi_client.models.config_new_param import ConfigNewParam

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigNewParam from a JSON string
config_new_param_instance = ConfigNewParam.from_json(json)
# print the JSON string representation of the object
print(ConfigNewParam.to_json())

# convert the object into a dict
config_new_param_dict = config_new_param_instance.to_dict()
# create an instance of ConfigNewParam from a dict
config_new_param_from_dict = ConfigNewParam.from_dict(config_new_param_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


