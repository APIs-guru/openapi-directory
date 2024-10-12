# ApplicationManifest

The manifest of the application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_manifest import ApplicationManifest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationManifest from a JSON string
application_manifest_instance = ApplicationManifest.from_json(json)
# print the JSON string representation of the object
print(ApplicationManifest.to_json())

# convert the object into a dict
application_manifest_dict = application_manifest_instance.to_dict()
# create an instance of ApplicationManifest from a dict
application_manifest_from_dict = ApplicationManifest.from_dict(application_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


