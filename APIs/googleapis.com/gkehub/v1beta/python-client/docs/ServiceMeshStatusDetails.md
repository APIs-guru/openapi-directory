# ServiceMeshStatusDetails

Structured and human-readable details for a status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A machine-readable code that further describes a broad status. | [optional] 
**details** | **str** | Human-readable explanation of code. | [optional] 

## Example

```python
from openapi_client.models.service_mesh_status_details import ServiceMeshStatusDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMeshStatusDetails from a JSON string
service_mesh_status_details_instance = ServiceMeshStatusDetails.from_json(json)
# print the JSON string representation of the object
print(ServiceMeshStatusDetails.to_json())

# convert the object into a dict
service_mesh_status_details_dict = service_mesh_status_details_instance.to_dict()
# create an instance of ServiceMeshStatusDetails from a dict
service_mesh_status_details_from_dict = ServiceMeshStatusDetails.from_dict(service_mesh_status_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


