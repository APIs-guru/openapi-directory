# GoogleCloudPrivatecatalogproducerV1beta1Product

The producer representation of a product which is a child resource of `Catalog` with display metadata and a list of `Version` resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | Required. The type of the product asset, which cannot be changed after the product is created. It supports the values &#x60;google.deploymentmanager.Template&#x60; and &#x60;google.cloudprivatecatalog.ListingOnly&#x60;. Other values will be rejected by the server. Read only after creation.  The following fields or resource types have different validation rules under each &#x60;asset_type&#x60; values:  * Product.display_metadata has different validation schema for each asset type value. See its comment for details. * Version resource isn&#39;t allowed to be added under the &#x60;google.cloudprivatecatalog.ListingOnly&#x60; type. | [optional] 
**create_time** | **str** | Output only. The time when the product was created. | [optional] 
**display_metadata** | **Dict[str, object]** | The user-supplied display metadata to describe the product. The JSON schema of the metadata differs by Product.asset_type. When the type is &#x60;google.deploymentmanager.Template&#x60;, the schema is as follows:  &#x60;&#x60;&#x60; \&quot;$schema\&quot;: http://json-schema.org/draft-04/schema# type: object properties:   name:     type: string     minLength: 1     maxLength: 64   description:     type: string     minLength: 1     maxLength: 2048   tagline:     type: string     minLength: 1     maxLength: 100   support_info:     type: string     minLength: 1     maxLength: 2048   creator:     type: string     minLength: 1     maxLength: 100   documentation:     type: array     items:       type: object       properties:         url:           type: string           pattern:           \&quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?&#x3D;~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%&#x3D;~_|]\&quot;         title:           type: string           minLength: 1           maxLength: 64         description:           type: string           minLength: 1           maxLength: 2048 required: - name - description additionalProperties: false  &#x60;&#x60;&#x60;  When the asset type is &#x60;google.cloudprivatecatalog.ListingOnly&#x60;, the schema is as follows:  &#x60;&#x60;&#x60; \&quot;$schema\&quot;: http://json-schema.org/draft-04/schema# type: object properties:   name:     type: string     minLength: 1     maxLength: 64   description:     type: string     minLength: 1     maxLength: 2048   tagline:     type: string     minLength: 1     maxLength: 100   support_info:     type: string     minLength: 1     maxLength: 2048   creator:     type: string     minLength: 1     maxLength: 100   documentation:     type: array     items:       type: object       properties:         url:           type: string           pattern:           \&quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?&#x3D;~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%&#x3D;~_|]\&quot;         title:           type: string           minLength: 1           maxLength: 64         description:           type: string           minLength: 1           maxLength: 2048   signup_url:     type: string     pattern:     \&quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?&#x3D;~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%&#x3D;~_|]\&quot; required: - name - description - signup_url additionalProperties: false &#x60;&#x60;&#x60; | [optional] 
**icon_uri** | **str** | Output only. The public accessible URI of the icon uploaded by PrivateCatalogProducer.UploadIcon.  If no icon is uploaded, it will be the default icon&#39;s URI. | [optional] 
**name** | **str** | Required. The resource name of the product in the format &#x60;catalogs/{catalog_id}/products/a-z*[a-z0-9]&#39;.  A unique identifier for the product under a catalog, which cannot be changed after the product is created. The final segment of the name must between 1 and 256 characters in length. | [optional] 
**update_time** | **str** | Output only. The time when the product was last updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_product import GoogleCloudPrivatecatalogproducerV1beta1Product

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1Product from a JSON string
google_cloud_privatecatalogproducer_v1beta1_product_instance = GoogleCloudPrivatecatalogproducerV1beta1Product.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogproducerV1beta1Product.to_json())

# convert the object into a dict
google_cloud_privatecatalogproducer_v1beta1_product_dict = google_cloud_privatecatalogproducer_v1beta1_product_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1Product from a dict
google_cloud_privatecatalogproducer_v1beta1_product_from_dict = GoogleCloudPrivatecatalogproducerV1beta1Product.from_dict(google_cloud_privatecatalogproducer_v1beta1_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


