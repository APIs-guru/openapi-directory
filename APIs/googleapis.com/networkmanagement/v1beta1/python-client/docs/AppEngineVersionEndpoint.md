# AppEngineVersionEndpoint

Wrapper for the App Engine service version attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) name. | [optional] 

## Example

```python
from openapi_client.models.app_engine_version_endpoint import AppEngineVersionEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of AppEngineVersionEndpoint from a JSON string
app_engine_version_endpoint_instance = AppEngineVersionEndpoint.from_json(json)
# print the JSON string representation of the object
print(AppEngineVersionEndpoint.to_json())

# convert the object into a dict
app_engine_version_endpoint_dict = app_engine_version_endpoint_instance.to_dict()
# create an instance of AppEngineVersionEndpoint from a dict
app_engine_version_endpoint_from_dict = AppEngineVersionEndpoint.from_dict(app_engine_version_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


