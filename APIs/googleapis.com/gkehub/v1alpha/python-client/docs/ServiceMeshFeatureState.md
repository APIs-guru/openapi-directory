# ServiceMeshFeatureState

**Service Mesh**: State for the whole Hub, as analyzed by the Service Mesh Hub Controller.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_messages** | [**List[ServiceMeshAnalysisMessage]**](ServiceMeshAnalysisMessage.md) | Output only. Results of running Service Mesh analyzers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_mesh_feature_state import ServiceMeshFeatureState

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshFeatureState from a JSON string
service_mesh_feature_state_instance = ServiceMeshFeatureState.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshFeatureState.to_json())

# convert the object into a dict
service_mesh_feature_state_dict = service_mesh_feature_state_instance.to_dict()
# create an instance of ServiceMeshFeatureState from a dict
service_mesh_feature_state_from_dict = ServiceMeshFeatureState.from_dict(service_mesh_feature_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


