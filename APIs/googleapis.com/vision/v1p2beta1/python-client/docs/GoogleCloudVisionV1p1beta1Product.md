# GoogleCloudVisionV1p1beta1Product

A Product contains ReferenceImages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-provided metadata to be stored with this product. Must be at most 4096 characters long. | [optional] 
**display_name** | **str** | The user-provided name for this Product. Must not be empty. Must be at most 4096 characters long. | [optional] 
**name** | **str** | The resource name of the product. Format is: &#x60;projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID&#x60;. This field is ignored when creating a product. | [optional] 
**product_category** | **str** | Immutable. The category for the product identified by the reference image. This should be one of \&quot;homegoods-v2\&quot;, \&quot;apparel-v2\&quot;, \&quot;toys-v2\&quot;, \&quot;packagedgoods-v1\&quot; or \&quot;general-v1\&quot;. The legacy categories \&quot;homegoods\&quot;, \&quot;apparel\&quot;, and \&quot;toys\&quot; are still supported, but these should not be used for new products. | [optional] 
**product_labels** | [**List[GoogleCloudVisionV1p1beta1ProductKeyValue]**](GoogleCloudVisionV1p1beta1ProductKeyValue.md) | Key-value pairs that can be attached to a product. At query time, constraints can be specified based on the product_labels. Note that integer values can be provided as strings, e.g. \&quot;1199\&quot;. Only strings with integer values can match a range-based restriction which is to be supported soon. Multiple values can be assigned to the same key. One product may have up to 500 product_labels. Notice that the total number of distinct product_labels over all products in one ProductSet cannot exceed 1M, otherwise the product search pipeline will refuse to work for that ProductSet. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_product import GoogleCloudVisionV1p1beta1Product

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1Product from a JSON string
google_cloud_vision_v1p1beta1_product_instance = GoogleCloudVisionV1p1beta1Product.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1Product.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_product_dict = google_cloud_vision_v1p1beta1_product_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1Product from a dict
google_cloud_vision_v1p1beta1_product_from_dict = GoogleCloudVisionV1p1beta1Product.from_dict(google_cloud_vision_v1p1beta1_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


