# GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata

Common metadata related to the progress of the operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_create_merchant_center_account_link_metadata import GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata from a JSON string
google_cloud_retail_v2alpha_create_merchant_center_account_link_metadata_instance = GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_create_merchant_center_account_link_metadata_dict = google_cloud_retail_v2alpha_create_merchant_center_account_link_metadata_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata from a dict
google_cloud_retail_v2alpha_create_merchant_center_account_link_metadata_from_dict = GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata.from_dict(google_cloud_retail_v2alpha_create_merchant_center_account_link_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


