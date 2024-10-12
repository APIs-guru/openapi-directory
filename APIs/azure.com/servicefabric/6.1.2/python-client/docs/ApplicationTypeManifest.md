# ApplicationTypeManifest

Contains the manifest describing an application type registered in a Service Fabric cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest** | **str** | The XML manifest as a string. | [optional] 

## Example

```python
from openapi_client.models.application_type_manifest import ApplicationTypeManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationTypeManifest from a JSON string
application_type_manifest_instance = ApplicationTypeManifest.from_json(json)
# print the JSON string representation of the object
print(ApplicationTypeManifest.to_json())

# convert the object into a dict
application_type_manifest_dict = application_type_manifest_instance.to_dict()
# create an instance of ApplicationTypeManifest from a dict
application_type_manifest_from_dict = ApplicationTypeManifest.from_dict(application_type_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


