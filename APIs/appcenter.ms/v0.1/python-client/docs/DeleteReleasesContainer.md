# DeleteReleasesContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releases** | [**List[DeleteReleasesContainerReleasesInner]**](DeleteReleasesContainerReleasesInner.md) |  | 

## Example

```python
from openapi_client.models.delete_releases_container import DeleteReleasesContainer

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteReleasesContainer from a JSON string
delete_releases_container_instance = DeleteReleasesContainer.from_json(json)
# print the JSON string representation of the object
print(DeleteReleasesContainer.to_json())

# convert the object into a dict
delete_releases_container_dict = delete_releases_container_instance.to_dict()
# create an instance of DeleteReleasesContainer from a dict
delete_releases_container_from_dict = DeleteReleasesContainer.from_dict(delete_releases_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


