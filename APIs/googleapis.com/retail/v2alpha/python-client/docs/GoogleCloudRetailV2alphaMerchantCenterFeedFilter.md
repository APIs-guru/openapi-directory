# GoogleCloudRetailV2alphaMerchantCenterFeedFilter

Merchant Center Feed filter criterion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_feed_id** | **str** | Merchant Center primary feed ID. | [optional] 
**primary_feed_name** | **str** | Merchant Center primary feed name. The name is used for the display purposes only. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_merchant_center_feed_filter import GoogleCloudRetailV2alphaMerchantCenterFeedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaMerchantCenterFeedFilter from a JSON string
google_cloud_retail_v2alpha_merchant_center_feed_filter_instance = GoogleCloudRetailV2alphaMerchantCenterFeedFilter.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaMerchantCenterFeedFilter.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_merchant_center_feed_filter_dict = google_cloud_retail_v2alpha_merchant_center_feed_filter_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaMerchantCenterFeedFilter from a dict
google_cloud_retail_v2alpha_merchant_center_feed_filter_from_dict = GoogleCloudRetailV2alphaMerchantCenterFeedFilter.from_dict(google_cloud_retail_v2alpha_merchant_center_feed_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


