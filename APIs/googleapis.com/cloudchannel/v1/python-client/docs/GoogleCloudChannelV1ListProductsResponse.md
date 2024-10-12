# GoogleCloudChannelV1ListProductsResponse

Response message for ListProducts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. | [optional] 
**products** | [**List[GoogleCloudChannelV1Product]**](GoogleCloudChannelV1Product.md) | List of Products requested. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_products_response import GoogleCloudChannelV1ListProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListProductsResponse from a JSON string
google_cloud_channel_v1_list_products_response_instance = GoogleCloudChannelV1ListProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListProductsResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_products_response_dict = google_cloud_channel_v1_list_products_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListProductsResponse from a dict
google_cloud_channel_v1_list_products_response_from_dict = GoogleCloudChannelV1ListProductsResponse.from_dict(google_cloud_channel_v1_list_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


