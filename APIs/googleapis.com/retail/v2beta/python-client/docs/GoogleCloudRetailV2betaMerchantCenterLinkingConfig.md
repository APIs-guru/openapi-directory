# GoogleCloudRetailV2betaMerchantCenterLinkingConfig

Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**List[GoogleCloudRetailV2betaMerchantCenterLink]**](GoogleCloudRetailV2betaMerchantCenterLink.md) | Links between Merchant Center accounts and branches. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_merchant_center_linking_config import GoogleCloudRetailV2betaMerchantCenterLinkingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaMerchantCenterLinkingConfig from a JSON string
google_cloud_retail_v2beta_merchant_center_linking_config_instance = GoogleCloudRetailV2betaMerchantCenterLinkingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaMerchantCenterLinkingConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_merchant_center_linking_config_dict = google_cloud_retail_v2beta_merchant_center_linking_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaMerchantCenterLinkingConfig from a dict
google_cloud_retail_v2beta_merchant_center_linking_config_from_dict = GoogleCloudRetailV2betaMerchantCenterLinkingConfig.from_dict(google_cloud_retail_v2beta_merchant_center_linking_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


