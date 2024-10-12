# GoogleCloudRetailV2RemoveLocalInventoriesRequest

Request message for ProductService.RemoveLocalInventories method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_missing** | **bool** | If set to true, and the Product is not found, the local inventory removal request will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. | [optional] 
**place_ids** | **List[str]** | Required. A list of place IDs to have their inventory deleted. At most 3000 place IDs are allowed per request. | [optional] 
**remove_time** | **str** | The time when the inventory deletions are issued. Used to prevent out-of-order updates and deletions on local inventory fields. If not provided, the internal system time will be used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_remove_local_inventories_request import GoogleCloudRetailV2RemoveLocalInventoriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2RemoveLocalInventoriesRequest from a JSON string
google_cloud_retail_v2_remove_local_inventories_request_instance = GoogleCloudRetailV2RemoveLocalInventoriesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2RemoveLocalInventoriesRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2_remove_local_inventories_request_dict = google_cloud_retail_v2_remove_local_inventories_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2RemoveLocalInventoriesRequest from a dict
google_cloud_retail_v2_remove_local_inventories_request_from_dict = GoogleCloudRetailV2RemoveLocalInventoriesRequest.from_dict(google_cloud_retail_v2_remove_local_inventories_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


