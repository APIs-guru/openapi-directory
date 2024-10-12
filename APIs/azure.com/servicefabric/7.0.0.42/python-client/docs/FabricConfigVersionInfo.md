# FabricConfigVersionInfo

Information about a Service Fabric config version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_version** | **str** | The config version of Service Fabric. | [optional] 

## Example

```python
from openapi_client.models.fabric_config_version_info import FabricConfigVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FabricConfigVersionInfo from a JSON string
fabric_config_version_info_instance = FabricConfigVersionInfo.from_json(json)
# print the JSON string representation of the object
print(FabricConfigVersionInfo.to_json())

# convert the object into a dict
fabric_config_version_info_dict = fabric_config_version_info_instance.to_dict()
# create an instance of FabricConfigVersionInfo from a dict
fabric_config_version_info_from_dict = FabricConfigVersionInfo.from_dict(fabric_config_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


