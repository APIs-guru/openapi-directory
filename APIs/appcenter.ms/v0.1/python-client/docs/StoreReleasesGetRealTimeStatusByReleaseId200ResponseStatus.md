# StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus

Status Data from store

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | status from store | [optional] 
**storetype** | **str** | store type | [optional] 
**track** | **str** | track information from store | [optional] 
**version** | **str** | version of the app from store | [optional] 

## Example

```python
from openapi_client.models.store_releases_get_real_time_status_by_release_id200_response_status import StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus

# TODO update the JSON string below
json = "{}"
# create an instance of StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus from a JSON string
store_releases_get_real_time_status_by_release_id200_response_status_instance = StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus.from_json(json)
# print the JSON string representation of the object
print(StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus.to_json())

# convert the object into a dict
store_releases_get_real_time_status_by_release_id200_response_status_dict = store_releases_get_real_time_status_by_release_id200_response_status_instance.to_dict()
# create an instance of StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus from a dict
store_releases_get_real_time_status_by_release_id200_response_status_from_dict = StoreReleasesGetRealTimeStatusByReleaseId200ResponseStatus.from_dict(store_releases_get_real_time_status_by_release_id200_response_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


