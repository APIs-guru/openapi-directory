# GoogleCloudPrivatecatalogV1beta1Version

The consumer representation of a version which is a child resource under a `Product` with asset data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **Dict[str, object]** | Output only. The asset which has been validated and is ready to be provisioned. See google.cloud.privatecatalogproducer.v1beta.Version.asset for details. | [optional] 
**create_time** | **str** | Output only. The time when the version was created. | [optional] 
**description** | **str** | Output only. The user-supplied description of the version. Maximum of 256 characters. | [optional] 
**name** | **str** | Output only. The resource name of the version, in the format &#x60;catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]&#39;.  A unique identifier for the version under a product. | [optional] 
**update_time** | **str** | Output only. The time when the version was last updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalog_v1beta1_version import GoogleCloudPrivatecatalogV1beta1Version

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogV1beta1Version from a JSON string
google_cloud_privatecatalog_v1beta1_version_instance = GoogleCloudPrivatecatalogV1beta1Version.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogV1beta1Version.to_json())

# convert the object into a dict
google_cloud_privatecatalog_v1beta1_version_dict = google_cloud_privatecatalog_v1beta1_version_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogV1beta1Version from a dict
google_cloud_privatecatalog_v1beta1_version_from_dict = GoogleCloudPrivatecatalogV1beta1Version.from_dict(google_cloud_privatecatalog_v1beta1_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


