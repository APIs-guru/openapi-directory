# FabricCodeVersionInfo

Information about a Service Fabric code version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_version** | **str** | The product version of Service Fabric. | [optional] 

## Example

```python
from openapi_client.models.fabric_code_version_info import FabricCodeVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FabricCodeVersionInfo from a JSON string
fabric_code_version_info_instance = FabricCodeVersionInfo.from_json(json)
# print the JSON string representation of the object
print(FabricCodeVersionInfo.to_json())

# convert the object into a dict
fabric_code_version_info_dict = fabric_code_version_info_instance.to_dict()
# create an instance of FabricCodeVersionInfo from a dict
fabric_code_version_info_from_dict = FabricCodeVersionInfo.from_dict(fabric_code_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


