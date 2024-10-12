# ReleaseRealTimeStatusResponse

status of the app from store

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | app id | [optional] 
**release_id** | **str** | release id | [optional] 
**status** | [**StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus**](StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.release_real_time_status_response import ReleaseRealTimeStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseRealTimeStatusResponse from a JSON string
release_real_time_status_response_instance = ReleaseRealTimeStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ReleaseRealTimeStatusResponse.to_json())

# convert the object into a dict
release_real_time_status_response_dict = release_real_time_status_response_instance.to_dict()
# create an instance of ReleaseRealTimeStatusResponse from a dict
release_real_time_status_response_from_dict = ReleaseRealTimeStatusResponse.from_dict(release_real_time_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


