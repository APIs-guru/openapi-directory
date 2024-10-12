# ServiceTypeManifest

Contains the manifest describing a service type registered as part of an application in a Service Fabric cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest** | **str** | The XML manifest as a string. | [optional] 

## Example

```python
from openapi_client.models.service_type_manifest import ServiceTypeManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTypeManifest from a JSON string
service_type_manifest_instance = ServiceTypeManifest.from_json(json)
# print the JSON string representation of the object
print(ServiceTypeManifest.to_json())

# convert the object into a dict
service_type_manifest_dict = service_type_manifest_instance.to_dict()
# create an instance of ServiceTypeManifest from a dict
service_type_manifest_from_dict = ServiceTypeManifest.from_dict(service_type_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


