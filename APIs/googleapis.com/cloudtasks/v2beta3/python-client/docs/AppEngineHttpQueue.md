# AppEngineHttpQueue

App Engine HTTP queue. The task will be delivered to the App Engine application hostname specified by its AppEngineHttpQueue and AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains how the task's host URL is constructed. Using AppEngineHttpQueue requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform`

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_routing_override** | [**AppEngineRouting**](AppEngineRouting.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_engine_http_queue import AppEngineHttpQueue

# TODO update the JSON string below
json = "{}"
# create an instance of AppEngineHttpQueue from a JSON string
app_engine_http_queue_instance = AppEngineHttpQueue.from_json(json)
# print the JSON string representation of the object
print(AppEngineHttpQueue.to_json())

# convert the object into a dict
app_engine_http_queue_dict = app_engine_http_queue_instance.to_dict()
# create an instance of AppEngineHttpQueue from a dict
app_engine_http_queue_from_dict = AppEngineHttpQueue.from_dict(app_engine_http_queue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


