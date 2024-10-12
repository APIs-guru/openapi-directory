# UpdateActivityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**Constraints**](Constraints.md) |  | [optional] 
**now_playing** | [**PlayerContext**](PlayerContext.md) |  | [optional] 
**previously_playing** | [**PlayerContext**](PlayerContext.md) |  | [optional] 
**report** | [**QueueActivityReportEvent**](QueueActivityReportEvent.md) |  | 
**timestamp** | **datetime** |  | 
**user_activity** | [**UserActivity**](UserActivity.md) |  | 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.update_activity_request import UpdateActivityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateActivityRequest from a JSON string
update_activity_request_instance = UpdateActivityRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateActivityRequest.to_json())

# convert the object into a dict
update_activity_request_dict = update_activity_request_instance.to_dict()
# create an instance of UpdateActivityRequest from a dict
update_activity_request_from_dict = UpdateActivityRequest.from_dict(update_activity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


