# PreReleaseVersionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PrereleaseVersion]**](PrereleaseVersion.md) |  | 
**included** | [**List[PreReleaseVersionsResponseIncludedInner]**](PreReleaseVersionsResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.pre_release_versions_response import PreReleaseVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PreReleaseVersionsResponse from a JSON string
pre_release_versions_response_instance = PreReleaseVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(PreReleaseVersionsResponse.to_json())

# convert the object into a dict
pre_release_versions_response_dict = pre_release_versions_response_instance.to_dict()
# create an instance of PreReleaseVersionsResponse from a dict
pre_release_versions_response_from_dict = PreReleaseVersionsResponse.from_dict(pre_release_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


