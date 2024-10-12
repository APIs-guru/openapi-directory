# NotifyReleasesContainerReleasesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | Unique user Id.  Will generate a new user Id if not provided.  | [optional] 
**distribution_group** | **str** | Distribution group Id.  | [optional] 
**release** | **str** | Release Id.  | 

## Example

```python
from openapi_client.models.notify_releases_container_releases_inner import NotifyReleasesContainerReleasesInner

# TODO update the JSON string below
json = "{}"
# create an instance of NotifyReleasesContainerReleasesInner from a JSON string
notify_releases_container_releases_inner_instance = NotifyReleasesContainerReleasesInner.from_json(json)
# print the JSON string representation of the object
print(NotifyReleasesContainerReleasesInner.to_json())

# convert the object into a dict
notify_releases_container_releases_inner_dict = notify_releases_container_releases_inner_instance.to_dict()
# create an instance of NotifyReleasesContainerReleasesInner from a dict
notify_releases_container_releases_inner_from_dict = NotifyReleasesContainerReleasesInner.from_dict(notify_releases_container_releases_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


