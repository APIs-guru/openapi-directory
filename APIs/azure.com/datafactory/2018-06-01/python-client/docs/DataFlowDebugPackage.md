# DataFlowDebugPackage

Request body structure for starting data flow debug session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_flow** | [**DataFlowDebugResource**](DataFlowDebugResource.md) |  | [optional] 
**datasets** | [**List[DatasetDebugResource]**](DatasetDebugResource.md) | List of datasets. | [optional] 
**debug_settings** | [**DataFlowDebugPackageDebugSettings**](DataFlowDebugPackageDebugSettings.md) |  | [optional] 
**linked_services** | [**List[LinkedServiceDebugResource]**](LinkedServiceDebugResource.md) | List of linked services. | [optional] 
**session_id** | **str** | The ID of data flow debug session. | [optional] 
**staging** | [**DataFlowStagingInfo**](DataFlowStagingInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_flow_debug_package import DataFlowDebugPackage

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowDebugPackage from a JSON string
data_flow_debug_package_instance = DataFlowDebugPackage.from_json(json)
# print the JSON string representation of the object
print(DataFlowDebugPackage.to_json())

# convert the object into a dict
data_flow_debug_package_dict = data_flow_debug_package_instance.to_dict()
# create an instance of DataFlowDebugPackage from a dict
data_flow_debug_package_from_dict = DataFlowDebugPackage.from_dict(data_flow_debug_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


