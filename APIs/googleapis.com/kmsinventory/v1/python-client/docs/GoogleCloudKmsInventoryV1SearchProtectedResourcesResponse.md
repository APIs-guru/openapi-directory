# GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse

Response message for KeyTrackingService.SearchProtectedResources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**protected_resources** | [**List[GoogleCloudKmsInventoryV1ProtectedResource]**](GoogleCloudKmsInventoryV1ProtectedResource.md) | Protected resources for this page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_inventory_v1_search_protected_resources_response import GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse from a JSON string
google_cloud_kms_inventory_v1_search_protected_resources_response_instance = GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse.to_json())

# convert the object into a dict
google_cloud_kms_inventory_v1_search_protected_resources_response_dict = google_cloud_kms_inventory_v1_search_protected_resources_response_instance.to_dict()
# create an instance of GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse from a dict
google_cloud_kms_inventory_v1_search_protected_resources_response_from_dict = GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse.from_dict(google_cloud_kms_inventory_v1_search_protected_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


