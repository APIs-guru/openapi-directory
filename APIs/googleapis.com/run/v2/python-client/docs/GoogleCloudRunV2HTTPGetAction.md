# GoogleCloudRunV2HTTPGetAction

HTTPGetAction describes an action based on HTTP Get requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_headers** | [**List[GoogleCloudRunV2HTTPHeader]**](GoogleCloudRunV2HTTPHeader.md) | Custom headers to set in the request. HTTP allows repeated headers. | [optional] 
**path** | **str** | Path to access on the HTTP server. Defaults to &#39;/&#39;. | [optional] 
**port** | **int** | Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_http_get_action import GoogleCloudRunV2HTTPGetAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2HTTPGetAction from a JSON string
google_cloud_run_v2_http_get_action_instance = GoogleCloudRunV2HTTPGetAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2HTTPGetAction.to_json())

# convert the object into a dict
google_cloud_run_v2_http_get_action_dict = google_cloud_run_v2_http_get_action_instance.to_dict()
# create an instance of GoogleCloudRunV2HTTPGetAction from a dict
google_cloud_run_v2_http_get_action_from_dict = GoogleCloudRunV2HTTPGetAction.from_dict(google_cloud_run_v2_http_get_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


