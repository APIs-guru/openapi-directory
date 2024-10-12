# AppEngineHttpTarget

App Engine HTTP target. The task will be delivered to the App Engine application hostname specified by its AppEngineHttpTarget and AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains how the task's host URL is constructed. Using AppEngineHttpTarget requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_routing_override** | [**AppEngineRouting**](AppEngineRouting.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_engine_http_target import AppEngineHttpTarget

# TODO update the JSON string below
json = "{}"
# create an instance of AppEngineHttpTarget from a JSON string
app_engine_http_target_instance = AppEngineHttpTarget.from_json(json)
# print the JSON string representation of the object
print(AppEngineHttpTarget.to_json())

# convert the object into a dict
app_engine_http_target_dict = app_engine_http_target_instance.to_dict()
# create an instance of AppEngineHttpTarget from a dict
app_engine_http_target_from_dict = AppEngineHttpTarget.from_dict(app_engine_http_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


