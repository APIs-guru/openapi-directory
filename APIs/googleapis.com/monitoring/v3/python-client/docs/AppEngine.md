# AppEngine

App Engine service. Learn more at https://cloud.google.com/appengine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**module_id** | **str** | The ID of the App Engine module underlying this service. Corresponds to the module_id resource label in the gae_app monitored resource (https://cloud.google.com/monitoring/api/resources#tag_gae_app). | [optional] 

## Example

```python
from openapi_client.models.app_engine import AppEngine

# TODO update the JSON string below
json = "{}"
# create an instance of AppEngine from a JSON string
app_engine_instance = AppEngine.from_json(json)
# print the JSON string representation of the object
print(AppEngine.to_json())

# convert the object into a dict
app_engine_dict = app_engine_instance.to_dict()
# create an instance of AppEngine from a dict
app_engine_from_dict = AppEngine.from_dict(app_engine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


