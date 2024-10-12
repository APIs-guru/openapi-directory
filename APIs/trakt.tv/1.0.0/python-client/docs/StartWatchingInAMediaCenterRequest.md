# StartWatchingInAMediaCenterRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_date** | **str** |  | [optional] 
**app_version** | **str** |  | [optional] 
**movie** | [**CheckIntoAnItemRequestMovie**](CheckIntoAnItemRequestMovie.md) |  | [optional] 
**progress** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.start_watching_in_a_media_center_request import StartWatchingInAMediaCenterRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartWatchingInAMediaCenterRequest from a JSON string
start_watching_in_a_media_center_request_instance = StartWatchingInAMediaCenterRequest.from_json(json)
# print the JSON string representation of the object
print(StartWatchingInAMediaCenterRequest.to_json())

# convert the object into a dict
start_watching_in_a_media_center_request_dict = start_watching_in_a_media_center_request_instance.to_dict()
# create an instance of StartWatchingInAMediaCenterRequest from a dict
start_watching_in_a_media_center_request_from_dict = StartWatchingInAMediaCenterRequest.from_dict(start_watching_in_a_media_center_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


