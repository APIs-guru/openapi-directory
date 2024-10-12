# ConfigManagementBinauthzVersion

The version of binauthz.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_version** | **str** | The version of the binauthz webhook. | [optional] 

## Example

```python
from openapi_client.models.config_management_binauthz_version import ConfigManagementBinauthzVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigManagementBinauthzVersion from a JSON string
config_management_binauthz_version_instance = ConfigManagementBinauthzVersion.from_json(json)
# print the JSON string representation of the object
print(ConfigManagementBinauthzVersion.to_json())

# convert the object into a dict
config_management_binauthz_version_dict = config_management_binauthz_version_instance.to_dict()
# create an instance of ConfigManagementBinauthzVersion from a dict
config_management_binauthz_version_from_dict = ConfigManagementBinauthzVersion.from_dict(config_management_binauthz_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


