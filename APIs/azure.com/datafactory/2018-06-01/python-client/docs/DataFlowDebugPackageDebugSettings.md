# DataFlowDebugPackageDebugSettings

Data flow debug settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_parameters** | **object** | Parameters for dataset. | [optional] 
**parameters** | **Dict[str, object]** | An object mapping parameter names to argument values. | [optional] 
**source_settings** | [**List[DataFlowSourceSetting]**](DataFlowSourceSetting.md) | Source setting for data flow debug. | [optional] 

## Example

```python
from openapi_client.models.data_flow_debug_package_debug_settings import DataFlowDebugPackageDebugSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowDebugPackageDebugSettings from a JSON string
data_flow_debug_package_debug_settings_instance = DataFlowDebugPackageDebugSettings.from_json(json)
# print the JSON string representation of the object
print(DataFlowDebugPackageDebugSettings.to_json())

# convert the object into a dict
data_flow_debug_package_debug_settings_dict = data_flow_debug_package_debug_settings_instance.to_dict()
# create an instance of DataFlowDebugPackageDebugSettings from a dict
data_flow_debug_package_debug_settings_from_dict = DataFlowDebugPackageDebugSettings.from_dict(data_flow_debug_package_debug_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


