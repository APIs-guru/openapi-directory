# ListReleasesResponse

The response for FirebaseRulesService.ListReleases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The pagination token to retrieve the next page of results. If the value is empty, no further results remain. | [optional] 
**releases** | [**List[Release]**](Release.md) | List of &#x60;Release&#x60; instances. | [optional] 

## Example

```python
from openapi_client.models.list_releases_response import ListReleasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReleasesResponse from a JSON string
list_releases_response_instance = ListReleasesResponse.from_json(json)
# print the JSON string representation of the object
print(ListReleasesResponse.to_json())

# convert the object into a dict
list_releases_response_dict = list_releases_response_instance.to_dict()
# create an instance of ListReleasesResponse from a dict
list_releases_response_from_dict = ListReleasesResponse.from_dict(list_releases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


