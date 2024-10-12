# StoreReleasesGetRealTimeStatusByReleaseId200Response

status of the app from store

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | app id | [optional] 
**release_id** | **str** | release id | [optional] 
**status** | [**StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus**](StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.store_releases_get_real_time_status_by_release_id200_response import StoreReleasesGetRealTimeStatusByReleaseId200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StoreReleasesGetRealTimeStatusByReleaseId200Response from a JSON string
store_releases_get_real_time_status_by_release_id200_response_instance = StoreReleasesGetRealTimeStatusByReleaseId200Response.from_json(json)
# print the JSON string representation of the object
print(StoreReleasesGetRealTimeStatusByReleaseId200Response.to_json())

# convert the object into a dict
store_releases_get_real_time_status_by_release_id200_response_dict = store_releases_get_real_time_status_by_release_id200_response_instance.to_dict()
# create an instance of StoreReleasesGetRealTimeStatusByReleaseId200Response from a dict
store_releases_get_real_time_status_by_release_id200_response_from_dict = StoreReleasesGetRealTimeStatusByReleaseId200Response.from_dict(store_releases_get_real_time_status_by_release_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


