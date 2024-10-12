# ServiceMeshType

A unique identifier for the type of message. Display_name is intended to be human-readable, code is intended to be machine readable. There should be a one-to-one mapping between display_name and code. (i.e. do not re-use display_names or codes between message types.) See istio.analysis.v1alpha1.AnalysisMessageBase.Type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A 7 character code matching &#x60;^IST[0-9]{4}$&#x60; or &#x60;^ASM[0-9]{4}$&#x60;, intended to uniquely identify the message type. (e.g. \&quot;IST0001\&quot; is mapped to the \&quot;InternalError\&quot; message type.) | [optional] 
**display_name** | **str** | A human-readable name for the message type. e.g. \&quot;InternalError\&quot;, \&quot;PodMissingProxy\&quot;. This should be the same for all messages of the same type. (This corresponds to the &#x60;name&#x60; field in open-source Istio.) | [optional] 

## Example

```python
from openapi_client.models.service_mesh_type import ServiceMeshType

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshType from a JSON string
service_mesh_type_instance = ServiceMeshType.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshType.to_json())

# convert the object into a dict
service_mesh_type_dict = service_mesh_type_instance.to_dict()
# create an instance of ServiceMeshType from a dict
service_mesh_type_from_dict = ServiceMeshType.from_dict(service_mesh_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


