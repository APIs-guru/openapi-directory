# PatchReleaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest_publish_id** | **str** | Destination Publish Id | [optional] 
**error_context_id** | **str** | contextId for failed error message | [optional] 
**error_details** | **str** | failure error details from store | [optional] 
**is_wrapper_request** | **bool** | request is for wrapping or not | [optional] 
**status** | **str** | updated status of release | [optional] 
**wrap_package_url** | **str** | package url for wrapping request | [optional] 

## Example

```python
from openapi_client.models.patch_release_request import PatchReleaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchReleaseRequest from a JSON string
patch_release_request_instance = PatchReleaseRequest.from_json(json)
# print the JSON string representation of the object
print(PatchReleaseRequest.to_json())

# convert the object into a dict
patch_release_request_dict = patch_release_request_instance.to_dict()
# create an instance of PatchReleaseRequest from a dict
patch_release_request_from_dict = PatchReleaseRequest.from_dict(patch_release_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


