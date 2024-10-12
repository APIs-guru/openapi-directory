# GoogleCloudPrivatecatalogproducerV1beta1Version

The producer representation of a version, which is a child resource under a `Product` with asset data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **Dict[str, object]** | Output only. The asset which has been validated and is ready to be provisioned. See Version.original_asset for the schema. | [optional] 
**create_time** | **str** | Output only. The time when the version was created. | [optional] 
**description** | **str** | The user-supplied description of the version. Maximum of 256 characters. | [optional] 
**name** | **str** | Required. The resource name of the version, in the format &#x60;catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]&#39;.  A unique identifier for the version under a product, which can&#39;t be changed after the version is created. The final segment of the name must between 1 and 63 characters in length. | [optional] 
**original_asset** | **Dict[str, object]** | The user-supplied asset payload. The maximum size of the payload is 2MB. The JSON schema of the payload is defined as:  &#x60;&#x60;&#x60; type: object properties:   mainTemplate:     type: string     description: The file name of the main template and name prefix of     schema file. The content of the main template should be set in the     imports list. The schema file name is expected to be     &lt;mainTemplate&gt;.schema in the imports list. required: true   imports:     type: array     description: Import template and schema file contents. Required to have     both &lt;mainTemplate&gt; and &lt;mainTemplate&gt;.schema files. required: true     minItems: 2     items:       type: object       properties:         name:           type: string         content:           type: string &#x60;&#x60;&#x60; | [optional] 
**update_time** | **str** | Output only. The time when the version was last updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_version import GoogleCloudPrivatecatalogproducerV1beta1Version

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1Version from a JSON string
google_cloud_privatecatalogproducer_v1beta1_version_instance = GoogleCloudPrivatecatalogproducerV1beta1Version.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogproducerV1beta1Version.to_json())

# convert the object into a dict
google_cloud_privatecatalogproducer_v1beta1_version_dict = google_cloud_privatecatalogproducer_v1beta1_version_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1Version from a dict
google_cloud_privatecatalogproducer_v1beta1_version_from_dict = GoogleCloudPrivatecatalogproducerV1beta1Version.from_dict(google_cloud_privatecatalogproducer_v1beta1_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


