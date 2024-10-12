# ConfigManagementBinauthzConfig

Configuration for Binauthz

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether binauthz is enabled in this cluster. | [optional] 

## Example

```python
from openapi_client.models.config_management_binauthz_config import ConfigManagementBinauthzConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementBinauthzConfig from a JSON string
config_management_binauthz_config_instance = ConfigManagementBinauthzConfig.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementBinauthzConfig.to_json())

# convert the object into a dict
config_management_binauthz_config_dict = config_management_binauthz_config_instance.to_dict()
# create an instance of ConfigManagementBinauthzConfig from a dict
config_management_binauthz_config_from_dict = ConfigManagementBinauthzConfig.from_dict(config_management_binauthz_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


