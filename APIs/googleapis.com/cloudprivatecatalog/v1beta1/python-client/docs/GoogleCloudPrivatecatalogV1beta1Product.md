# GoogleCloudPrivatecatalogV1beta1Product

The readonly representation of a product computed with a given resource context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | Output only. The type of the product asset. It can be one of the following values:  * &#x60;google.deploymentmanager.Template&#x60; * &#x60;google.cloudprivatecatalog.ListingOnly&#x60; | [optional] 
**create_time** | **str** | Output only. The time when the product was created. | [optional] 
**display_metadata** | **Dict[str, object]** | Output only. The display metadata to describe the product. The JSON schema of the metadata differs by Product.asset_type. When the type is &#x60;google.deploymentmanager.Template&#x60;, the schema is as follows:  &#x60;&#x60;&#x60; \&quot;$schema\&quot;: http://json-schema.org/draft-04/schema# type: object properties:   name:     type: string     minLength: 1     maxLength: 64   description:     type: string     minLength: 1     maxLength: 2048   tagline:     type: string     minLength: 1     maxLength: 100   support_info:     type: string     minLength: 1     maxLength: 2048   creator:     type: string     minLength: 1     maxLength: 100   documentation:     type: array     items:       type: object       properties:         url:           type: string           pattern:           \&quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?&#x3D;~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%&#x3D;~_|]\&quot;         title:           type: string           minLength: 1           maxLength: 64         description:           type: string           minLength: 1           maxLength: 2048 required: - name - description additionalProperties: false  &#x60;&#x60;&#x60;  When the asset type is &#x60;google.cloudprivatecatalog.ListingOnly&#x60;, the schema is as follows:  &#x60;&#x60;&#x60; \&quot;$schema\&quot;: http://json-schema.org/draft-04/schema# type: object properties:   name:     type: string     minLength: 1     maxLength: 64   description:     type: string     minLength: 1     maxLength: 2048   tagline:     type: string     minLength: 1     maxLength: 100   support_info:     type: string     minLength: 1     maxLength: 2048   creator:     type: string     minLength: 1     maxLength: 100   documentation:     type: array     items:       type: object       properties:         url:           type: string           pattern:           \&quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?&#x3D;~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%&#x3D;~_|]\&quot;         title:           type: string           minLength: 1           maxLength: 64         description:           type: string           minLength: 1           maxLength: 2048   signup_url:     type: string     pattern:     \&quot;^(https?)://[-a-zA-Z0-9+&amp;@#/%?&#x3D;~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%&#x3D;~_|]\&quot; required: - name - description - signup_url additionalProperties: false &#x60;&#x60;&#x60; | [optional] 
**icon_uri** | **str** | Output only. The icon URI of the product. | [optional] 
**name** | **str** | Output only. The resource name of the target product, in the format of &#x60;products/a-z*[a-z0-9]&#39;.  A unique identifier for the product under a catalog. | [optional] 
**update_time** | **str** | Output only. The time when the product was last updated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalog_v1beta1_product import GoogleCloudPrivatecatalogV1beta1Product

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogV1beta1Product from a JSON string
google_cloud_privatecatalog_v1beta1_product_instance = GoogleCloudPrivatecatalogV1beta1Product.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogV1beta1Product.to_json())

# convert the object into a dict
google_cloud_privatecatalog_v1beta1_product_dict = google_cloud_privatecatalog_v1beta1_product_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogV1beta1Product from a dict
google_cloud_privatecatalog_v1beta1_product_from_dict = GoogleCloudPrivatecatalogV1beta1Product.from_dict(google_cloud_privatecatalog_v1beta1_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


