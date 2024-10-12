# StopOrFinishWatchingInAMediaCenterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_date** | **str** |  | [optional] 
**app_version** | **str** |  | [optional] 
**movie** | [**CheckIntoAnItemRequestMovie**](CheckIntoAnItemRequestMovie.md) |  | [optional] 
**progress** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.stop_or_finish_watching_in_a_media_center_request import StopOrFinishWatchingInAMediaCenterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StopOrFinishWatchingInAMediaCenterRequest from a JSON string
stop_or_finish_watching_in_a_media_center_request_instance = StopOrFinishWatchingInAMediaCenterRequest.from_json(json)
# print the JSON string representation of the object
print(StopOrFinishWatchingInAMediaCenterRequest.to_json())

# convert the object into a dict
stop_or_finish_watching_in_a_media_center_request_dict = stop_or_finish_watching_in_a_media_center_request_instance.to_dict()
# create an instance of StopOrFinishWatchingInAMediaCenterRequest from a dict
stop_or_finish_watching_in_a_media_center_request_from_dict = StopOrFinishWatchingInAMediaCenterRequest.from_dict(stop_or_finish_watching_in_a_media_center_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


