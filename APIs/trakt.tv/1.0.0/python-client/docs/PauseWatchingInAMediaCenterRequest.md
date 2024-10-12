# PauseWatchingInAMediaCenterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_date** | **str** |  | [optional] 
**app_version** | **str** |  | [optional] 
**movie** | [**CheckIntoAnItemRequestMovie**](CheckIntoAnItemRequestMovie.md) |  | [optional] 
**progress** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.pause_watching_in_a_media_center_request import PauseWatchingInAMediaCenterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PauseWatchingInAMediaCenterRequest from a JSON string
pause_watching_in_a_media_center_request_instance = PauseWatchingInAMediaCenterRequest.from_json(json)
# print the JSON string representation of the object
print(PauseWatchingInAMediaCenterRequest.to_json())

# convert the object into a dict
pause_watching_in_a_media_center_request_dict = pause_watching_in_a_media_center_request_instance.to_dict()
# create an instance of PauseWatchingInAMediaCenterRequest from a dict
pause_watching_in_a_media_center_request_from_dict = PauseWatchingInAMediaCenterRequest.from_dict(pause_watching_in_a_media_center_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


