# GoogleCloudRetailV2Catalog

The catalog configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**name** | **str** | Required. Immutable. The fully qualified resource name of the catalog. | [optional] 
**product_level_config** | [**GoogleCloudRetailV2ProductLevelConfig**](GoogleCloudRetailV2ProductLevelConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_catalog import GoogleCloudRetailV2Catalog

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2Catalog from a JSON string
google_cloud_retail_v2_catalog_instance = GoogleCloudRetailV2Catalog.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2Catalog.to_json())

# convert the object into a dict
google_cloud_retail_v2_catalog_dict = google_cloud_retail_v2_catalog_instance.to_dict()
# create an instance of GoogleCloudRetailV2Catalog from a dict
google_cloud_retail_v2_catalog_from_dict = GoogleCloudRetailV2Catalog.from_dict(google_cloud_retail_v2_catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


