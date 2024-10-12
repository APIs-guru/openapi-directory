# GoogleCloudRetailV2alphaSetDefaultBranchRequest

Request message to set a specified branch as new default_branch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_id** | **str** | The final component of the resource name of a branch. This field must be one of \&quot;0\&quot;, \&quot;1\&quot; or \&quot;2\&quot;. Otherwise, an INVALID_ARGUMENT error is returned. If there are no sufficient active products in the targeted branch and force is not set, a FAILED_PRECONDITION error is returned. | [optional] 
**force** | **bool** | If set to true, it permits switching to a branch with branch_id even if it has no sufficient active products. | [optional] 
**note** | **str** | Some note on this request, this can be retrieved by CatalogService.GetDefaultBranch before next valid default branch set occurs. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_set_default_branch_request import GoogleCloudRetailV2alphaSetDefaultBranchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaSetDefaultBranchRequest from a JSON string
google_cloud_retail_v2alpha_set_default_branch_request_instance = GoogleCloudRetailV2alphaSetDefaultBranchRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaSetDefaultBranchRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_set_default_branch_request_dict = google_cloud_retail_v2alpha_set_default_branch_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaSetDefaultBranchRequest from a dict
google_cloud_retail_v2alpha_set_default_branch_request_from_dict = GoogleCloudRetailV2alphaSetDefaultBranchRequest.from_dict(google_cloud_retail_v2alpha_set_default_branch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


