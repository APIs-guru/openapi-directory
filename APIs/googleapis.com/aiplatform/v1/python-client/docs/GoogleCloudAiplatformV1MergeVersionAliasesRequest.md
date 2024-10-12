# GoogleCloudAiplatformV1MergeVersionAliasesRequest

Request message for ModelService.MergeVersionAliases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version_aliases** | **List[str]** | Required. The set of version aliases to merge. The alias should be at most 128 characters, and match &#x60;a-z{0,126}[a-z-0-9]&#x60;. Add the &#x60;-&#x60; prefix to an alias means removing that alias from the version. &#x60;-&#x60; is NOT counted in the 128 characters. Example: &#x60;-golden&#x60; means removing the &#x60;golden&#x60; alias from the version. There is NO ordering in aliases, which means 1) The aliases returned from GetModel API might not have the exactly same order from this MergeVersionAliases API. 2) Adding and deleting the same alias in the request is not recommended, and the 2 operations will be cancelled out. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_merge_version_aliases_request import GoogleCloudAiplatformV1MergeVersionAliasesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1MergeVersionAliasesRequest from a JSON string
google_cloud_aiplatform_v1_merge_version_aliases_request_instance = GoogleCloudAiplatformV1MergeVersionAliasesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1MergeVersionAliasesRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_merge_version_aliases_request_dict = google_cloud_aiplatform_v1_merge_version_aliases_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1MergeVersionAliasesRequest from a dict
google_cloud_aiplatform_v1_merge_version_aliases_request_from_dict = GoogleCloudAiplatformV1MergeVersionAliasesRequest.from_dict(google_cloud_aiplatform_v1_merge_version_aliases_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


