# FilterReleasesContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releases** | [**List[DeleteReleasesContainerReleasesInner]**](DeleteReleasesContainerReleasesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.filter_releases_container import FilterReleasesContainer

# TODO update the JSON string below
json = "{}"
# create an instance of FilterReleasesContainer from a JSON string
filter_releases_container_instance = FilterReleasesContainer.from_json(json)
# print the JSON string representation of the object
print(FilterReleasesContainer.to_json())

# convert the object into a dict
filter_releases_container_dict = filter_releases_container_instance.to_dict()
# create an instance of FilterReleasesContainer from a dict
filter_releases_container_from_dict = FilterReleasesContainer.from_dict(filter_releases_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


