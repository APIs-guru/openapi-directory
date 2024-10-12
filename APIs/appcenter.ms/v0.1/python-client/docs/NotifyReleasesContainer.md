# NotifyReleasesContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releases** | [**List[NotifyReleasesContainerReleasesInner]**](NotifyReleasesContainerReleasesInner.md) |  | 

## Example

```python
from openapi_client.models.notify_releases_container import NotifyReleasesContainer

# TODO update the JSON string below
json = "{}"
# create an instance of NotifyReleasesContainer from a JSON string
notify_releases_container_instance = NotifyReleasesContainer.from_json(json)
# print the JSON string representation of the object
print(NotifyReleasesContainer.to_json())

# convert the object into a dict
notify_releases_container_dict = notify_releases_container_instance.to_dict()
# create an instance of NotifyReleasesContainer from a dict
notify_releases_container_from_dict = NotifyReleasesContainer.from_dict(notify_releases_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


