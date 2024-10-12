# ServiceMeshAnalysisMessage

AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **Dict[str, object]** | A UI can combine these args with a template (based on message_base.type) to produce an internationalized message. | [optional] 
**description** | **str** | A human readable description of what the error means. It is suitable for non-internationalize display purposes. | [optional] 
**message_base** | [**ServiceMeshAnalysisMessageBase**](ServiceMeshAnalysisMessageBase.md) |  | [optional] 
**resource_paths** | **List[str]** | A list of strings specifying the resource identifiers that were the cause of message generation. A \&quot;path\&quot; here may be: * MEMBERSHIP_ID if the cause is a specific member cluster * MEMBERSHIP_ID/(NAMESPACE/)?RESOURCETYPE/NAME if the cause is a resource in a cluster | [optional] 

## Example

```python
from openapi_client.models.service_mesh_analysis_message import ServiceMeshAnalysisMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshAnalysisMessage from a JSON string
service_mesh_analysis_message_instance = ServiceMeshAnalysisMessage.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshAnalysisMessage.to_json())

# convert the object into a dict
service_mesh_analysis_message_dict = service_mesh_analysis_message_instance.to_dict()
# create an instance of ServiceMeshAnalysisMessage from a dict
service_mesh_analysis_message_from_dict = ServiceMeshAnalysisMessage.from_dict(service_mesh_analysis_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


