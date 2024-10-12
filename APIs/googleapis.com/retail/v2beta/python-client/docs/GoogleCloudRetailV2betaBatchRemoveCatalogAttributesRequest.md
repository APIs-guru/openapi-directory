# GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest

Request for CatalogService.BatchRemoveCatalogAttributes method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_keys** | **List[str]** | Required. The attribute name keys of the CatalogAttributes to delete. A maximum of 1000 catalog attributes can be deleted in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_batch_remove_catalog_attributes_request import GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest from a JSON string
google_cloud_retail_v2beta_batch_remove_catalog_attributes_request_instance = GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_batch_remove_catalog_attributes_request_dict = google_cloud_retail_v2beta_batch_remove_catalog_attributes_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest from a dict
google_cloud_retail_v2beta_batch_remove_catalog_attributes_request_from_dict = GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest.from_dict(google_cloud_retail_v2beta_batch_remove_catalog_attributes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


