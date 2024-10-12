# WebAppsRecoverRequest

Details about app recovery operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebAppsList200ResponseValueInnerPropertiesSnapshotInfoProperties**](WebAppsList200ResponseValueInnerPropertiesSnapshotInfoProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_recover_request import WebAppsRecoverRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsRecoverRequest from a JSON string
web_apps_recover_request_instance = WebAppsRecoverRequest.from_json(json)
# print the JSON string representation of the object
print(WebAppsRecoverRequest.to_json())

# convert the object into a dict
web_apps_recover_request_dict = web_apps_recover_request_instance.to_dict()
# create an instance of WebAppsRecoverRequest from a dict
web_apps_recover_request_from_dict = WebAppsRecoverRequest.from_dict(web_apps_recover_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


