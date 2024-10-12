# GoogleCloudRetailV2GetDefaultBranchResponse

Response message of CatalogService.GetDefaultBranch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | Full resource name of the branch id currently set as default branch. | [optional] 
**note** | **str** | This corresponds to SetDefaultBranchRequest.note field, when this branch was set as default. | [optional] 
**set_time** | **str** | The time when this branch is set to default. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_get_default_branch_response import GoogleCloudRetailV2GetDefaultBranchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2GetDefaultBranchResponse from a JSON string
google_cloud_retail_v2_get_default_branch_response_instance = GoogleCloudRetailV2GetDefaultBranchResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2GetDefaultBranchResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2_get_default_branch_response_dict = google_cloud_retail_v2_get_default_branch_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2GetDefaultBranchResponse from a dict
google_cloud_retail_v2_get_default_branch_response_from_dict = GoogleCloudRetailV2GetDefaultBranchResponse.from_dict(google_cloud_retail_v2_get_default_branch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


