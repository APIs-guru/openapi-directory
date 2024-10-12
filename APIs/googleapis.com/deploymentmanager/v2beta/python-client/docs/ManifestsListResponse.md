# ManifestsListResponse

A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifests** | [**List[Manifest]**](Manifest.md) | Output only. Manifests contained in this list response. | [optional] 
**next_page_token** | **str** | Output only. A token used to continue a truncated list request. | [optional] 

## Example

```python
from openapi_client.models.manifests_list_response import ManifestsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ManifestsListResponse from a JSON string
manifests_list_response_instance = ManifestsListResponse.from_json(json)
# print the JSON string representation of the object
print(ManifestsListResponse.to_json())

# convert the object into a dict
manifests_list_response_dict = manifests_list_response_instance.to_dict()
# create an instance of ManifestsListResponse from a dict
manifests_list_response_from_dict = ManifestsListResponse.from_dict(manifests_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


