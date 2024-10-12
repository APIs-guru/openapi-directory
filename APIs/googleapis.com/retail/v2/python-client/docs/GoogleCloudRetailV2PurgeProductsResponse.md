# GoogleCloudRetailV2PurgeProductsResponse

Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purge_count** | **str** | The total count of products purged as a result of the operation. | [optional] 
**purge_sample** | **List[str]** | A sample of the product names that will be deleted. Only populated if &#x60;force&#x60; is set to false. A max of 100 names will be returned and the names are chosen at random. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_purge_products_response import GoogleCloudRetailV2PurgeProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2PurgeProductsResponse from a JSON string
google_cloud_retail_v2_purge_products_response_instance = GoogleCloudRetailV2PurgeProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2PurgeProductsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2_purge_products_response_dict = google_cloud_retail_v2_purge_products_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2PurgeProductsResponse from a dict
google_cloud_retail_v2_purge_products_response_from_dict = GoogleCloudRetailV2PurgeProductsResponse.from_dict(google_cloud_retail_v2_purge_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


