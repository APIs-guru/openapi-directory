# GoogleCloudRetailV2ProductDetail

Detailed product information associated with a user event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**GoogleCloudRetailV2Product**](GoogleCloudRetailV2Product.md) |  | [optional] 
**quantity** | **int** | Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for &#x60;purchase-complete&#x60; event. Required for &#x60;add-to-cart&#x60; and &#x60;purchase-complete&#x60; event types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_product_detail import GoogleCloudRetailV2ProductDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ProductDetail from a JSON string
google_cloud_retail_v2_product_detail_instance = GoogleCloudRetailV2ProductDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ProductDetail.to_json())

# convert the object into a dict
google_cloud_retail_v2_product_detail_dict = google_cloud_retail_v2_product_detail_instance.to_dict()
# create an instance of GoogleCloudRetailV2ProductDetail from a dict
google_cloud_retail_v2_product_detail_from_dict = GoogleCloudRetailV2ProductDetail.from_dict(google_cloud_retail_v2_product_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


