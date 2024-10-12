# ServiceManifest

The manifest of the service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_manifest import ServiceManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceManifest from a JSON string
service_manifest_instance = ServiceManifest.from_json(json)
# print the JSON string representation of the object
print(ServiceManifest.to_json())

# convert the object into a dict
service_manifest_dict = service_manifest_instance.to_dict()
# create an instance of ServiceManifest from a dict
service_manifest_from_dict = ServiceManifest.from_dict(service_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


