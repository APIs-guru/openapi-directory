# DataFlowDebugResource

Data flow debug resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Azure Data Factory nested object which contains a flow with data movements and transformations. | 
**name** | **str** | The resource name. | [optional] 

## Example

```python
from openapi_client.models.data_flow_debug_resource import DataFlowDebugResource

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowDebugResource from a JSON string
data_flow_debug_resource_instance = DataFlowDebugResource.from_json(json)
# print the JSON string representation of the object
print(DataFlowDebugResource.to_json())

# convert the object into a dict
data_flow_debug_resource_dict = data_flow_debug_resource_instance.to_dict()
# create an instance of DataFlowDebugResource from a dict
data_flow_debug_resource_from_dict = DataFlowDebugResource.from_dict(data_flow_debug_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


