# ListManifestsResponseBody

A list manifests response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PaginationLink**](PaginationLink.md) | Helpful links to other pages of results | [readonly] 
**manifests** | [**List[Manifest]**](Manifest.md) | The list of available manifests | [readonly] [default to []]
**page** | **int** | Current page of the list manifests results | [readonly] 
**pages** | **int** | Total number of pages for list manifests results | [readonly] 
**total** | **int** | The total number of manifests returned | [readonly] 

## Example

```python
from openapi_client.models.list_manifests_response_body import ListManifestsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListManifestsResponseBody from a JSON string
list_manifests_response_body_instance = ListManifestsResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListManifestsResponseBody.to_json())

# convert the object into a dict
list_manifests_response_body_dict = list_manifests_response_body_instance.to_dict()
# create an instance of ListManifestsResponseBody from a dict
list_manifests_response_body_from_dict = ListManifestsResponseBody.from_dict(list_manifests_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


