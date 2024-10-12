# GoogleCloudRetailV2SetInventoryRequest

Request message for ProductService.SetInventory method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_missing** | **bool** | If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. | [optional] 
**inventory** | [**GoogleCloudRetailV2Product**](GoogleCloudRetailV2Product.md) |  | [optional] 
**set_mask** | **str** | Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored. | [optional] 
**set_time** | **str** | The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_set_inventory_request import GoogleCloudRetailV2SetInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2SetInventoryRequest from a JSON string
google_cloud_retail_v2_set_inventory_request_instance = GoogleCloudRetailV2SetInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2SetInventoryRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2_set_inventory_request_dict = google_cloud_retail_v2_set_inventory_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2SetInventoryRequest from a dict
google_cloud_retail_v2_set_inventory_request_from_dict = GoogleCloudRetailV2SetInventoryRequest.from_dict(google_cloud_retail_v2_set_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


