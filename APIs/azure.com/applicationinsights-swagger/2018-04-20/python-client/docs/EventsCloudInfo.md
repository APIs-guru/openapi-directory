# EventsCloudInfo

Cloud info for an event result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**role_instance** | **str** | Role instance of the cloud | [optional] 
**role_name** | **str** | Role name of the cloud | [optional] 

## Example

```python
from openapi_client.models.events_cloud_info import EventsCloudInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EventsCloudInfo from a JSON string
events_cloud_info_instance = EventsCloudInfo.from_json(json)
# print the JSON string representation of the object
print(EventsCloudInfo.to_json())

# convert the object into a dict
events_cloud_info_dict = events_cloud_info_instance.to_dict()
# create an instance of EventsCloudInfo from a dict
events_cloud_info_from_dict = EventsCloudInfo.from_dict(events_cloud_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


