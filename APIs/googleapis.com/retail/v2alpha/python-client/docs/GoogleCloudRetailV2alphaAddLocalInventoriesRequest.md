# GoogleCloudRetailV2alphaAddLocalInventoriesRequest

Request message for ProductService.AddLocalInventories method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_mask** | **str** | Indicates which inventory fields in the provided list of LocalInventory to update. The field is updated to the provided value. If a field is set while the place does not have a previous local inventory, the local inventory at that store is created. If a field is set while the value of that field is not provided, the original field value, if it exists, is deleted. If the mask is not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored. | [optional] 
**add_time** | **str** | The time when the inventory updates are issued. Used to prevent out-of-order updates on local inventory fields. If not provided, the internal system time will be used. | [optional] 
**allow_missing** | **bool** | If set to true, and the Product is not found, the local inventory will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. | [optional] 
**local_inventories** | [**List[GoogleCloudRetailV2alphaLocalInventory]**](GoogleCloudRetailV2alphaLocalInventory.md) | Required. A list of inventory information at difference places. Each place is identified by its place ID. At most 3000 inventories are allowed per request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_add_local_inventories_request import GoogleCloudRetailV2alphaAddLocalInventoriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaAddLocalInventoriesRequest from a JSON string
google_cloud_retail_v2alpha_add_local_inventories_request_instance = GoogleCloudRetailV2alphaAddLocalInventoriesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaAddLocalInventoriesRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_add_local_inventories_request_dict = google_cloud_retail_v2alpha_add_local_inventories_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaAddLocalInventoriesRequest from a dict
google_cloud_retail_v2alpha_add_local_inventories_request_from_dict = GoogleCloudRetailV2alphaAddLocalInventoriesRequest.from_dict(google_cloud_retail_v2alpha_add_local_inventories_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


