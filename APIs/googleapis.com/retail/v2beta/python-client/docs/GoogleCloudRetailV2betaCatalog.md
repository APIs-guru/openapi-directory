# GoogleCloudRetailV2betaCatalog

The catalog configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**merchant_center_linking_config** | [**GoogleCloudRetailV2betaMerchantCenterLinkingConfig**](GoogleCloudRetailV2betaMerchantCenterLinkingConfig.md) |  | [optional] 
**name** | **str** | Required. Immutable. The fully qualified resource name of the catalog. | [optional] 
**product_level_config** | [**GoogleCloudRetailV2betaProductLevelConfig**](GoogleCloudRetailV2betaProductLevelConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_catalog import GoogleCloudRetailV2betaCatalog

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaCatalog from a JSON string
google_cloud_retail_v2beta_catalog_instance = GoogleCloudRetailV2betaCatalog.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaCatalog.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_catalog_dict = google_cloud_retail_v2beta_catalog_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaCatalog from a dict
google_cloud_retail_v2beta_catalog_from_dict = GoogleCloudRetailV2betaCatalog.from_dict(google_cloud_retail_v2beta_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


