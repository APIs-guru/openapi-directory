# GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata

Common metadata related to the progress of the operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_create_merchant_center_account_link_metadata import GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata from a JSON string
google_cloud_retail_v2beta_create_merchant_center_account_link_metadata_instance = GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_create_merchant_center_account_link_metadata_dict = google_cloud_retail_v2beta_create_merchant_center_account_link_metadata_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata from a dict
google_cloud_retail_v2beta_create_merchant_center_account_link_metadata_from_dict = GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata.from_dict(google_cloud_retail_v2beta_create_merchant_center_account_link_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


