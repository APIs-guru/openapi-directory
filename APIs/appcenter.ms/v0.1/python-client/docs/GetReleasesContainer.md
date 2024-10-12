# GetReleasesContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releases** | [**List[AnalyticsDistributionReleaseCountsRequestReleasesInner]**](AnalyticsDistributionReleaseCountsRequestReleasesInner.md) |  | 

## Example

```python
from openapi_client.models.get_releases_container import GetReleasesContainer

# TODO update the JSON string below
json = "{}"
# create an instance of GetReleasesContainer from a JSON string
get_releases_container_instance = GetReleasesContainer.from_json(json)
# print the JSON string representation of the object
print(GetReleasesContainer.to_json())

# convert the object into a dict
get_releases_container_dict = get_releases_container_instance.to_dict()
# create an instance of GetReleasesContainer from a dict
get_releases_container_from_dict = GetReleasesContainer.from_dict(get_releases_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


