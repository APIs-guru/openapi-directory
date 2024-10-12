# ServiceMeshAnalysisMessageBase

AnalysisMessageBase describes some common information that is needed for all messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentation_url** | **str** | A url pointing to the Service Mesh or Istio documentation for this specific error type. | [optional] 
**level** | **str** | Represents how severe a message is. | [optional] 
**type** | [**ServiceMeshType**](ServiceMeshType.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_mesh_analysis_message_base import ServiceMeshAnalysisMessageBase

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshAnalysisMessageBase from a JSON string
service_mesh_analysis_message_base_instance = ServiceMeshAnalysisMessageBase.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshAnalysisMessageBase.to_json())

# convert the object into a dict
service_mesh_analysis_message_base_dict = service_mesh_analysis_message_base_instance.to_dict()
# create an instance of ServiceMeshAnalysisMessageBase from a dict
service_mesh_analysis_message_base_from_dict = ServiceMeshAnalysisMessageBase.from_dict(service_mesh_analysis_message_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


