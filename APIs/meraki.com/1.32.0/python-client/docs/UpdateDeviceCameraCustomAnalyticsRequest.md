# UpdateDeviceCameraCustomAnalyticsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | The ID of the custom analytics artifact | [optional] 
**enabled** | **bool** | Enable custom analytics | [optional] 
**parameters** | [**List[UpdateDeviceCameraCustomAnalyticsRequestParametersInner]**](UpdateDeviceCameraCustomAnalyticsRequestParametersInner.md) | Parameters for the custom analytics workload | [optional] 

## Example

```python
from openapi_client.models.update_device_camera_custom_analytics_request import UpdateDeviceCameraCustomAnalyticsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCameraCustomAnalyticsRequest from a JSON string
update_device_camera_custom_analytics_request_instance = UpdateDeviceCameraCustomAnalyticsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCameraCustomAnalyticsRequest.to_json())

# convert the object into a dict
update_device_camera_custom_analytics_request_dict = update_device_camera_custom_analytics_request_instance.to_dict()
# create an instance of UpdateDeviceCameraCustomAnalyticsRequest from a dict
update_device_camera_custom_analytics_request_from_dict = UpdateDeviceCameraCustomAnalyticsRequest.from_dict(update_device_camera_custom_analytics_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


