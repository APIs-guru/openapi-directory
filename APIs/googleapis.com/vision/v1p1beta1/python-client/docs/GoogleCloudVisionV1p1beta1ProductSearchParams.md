# GoogleCloudVisionV1p1beta1ProductSearchParams

Parameters for a product search request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_poly** | [**GoogleCloudVisionV1p1beta1BoundingPoly**](GoogleCloudVisionV1p1beta1BoundingPoly.md) |  | [optional] 
**filter** | **str** | The filtering expression. This can be used to restrict search results based on Product labels. We currently support an AND of OR of key-value expressions, where each expression within an OR must have the same key. An &#39;&#x3D;&#39; should be used to connect the key and value. For example, \&quot;(color &#x3D; red OR color &#x3D; blue) AND brand &#x3D; Google\&quot; is acceptable, but \&quot;(color &#x3D; red OR brand &#x3D; Google)\&quot; is not acceptable. \&quot;color: red\&quot; is not acceptable because it uses a &#39;:&#39; instead of an &#39;&#x3D;&#39;. | [optional] 
**product_categories** | **List[str]** | The list of product categories to search in. Currently, we only consider the first category, and either \&quot;homegoods-v2\&quot;, \&quot;apparel-v2\&quot;, \&quot;toys-v2\&quot;, \&quot;packagedgoods-v1\&quot;, or \&quot;general-v1\&quot; should be specified. The legacy categories \&quot;homegoods\&quot;, \&quot;apparel\&quot;, and \&quot;toys\&quot; are still supported but will be deprecated. For new products, please use \&quot;homegoods-v2\&quot;, \&quot;apparel-v2\&quot;, or \&quot;toys-v2\&quot; for better product search accuracy. It is recommended to migrate existing products to these categories as well. | [optional] 
**product_set** | **str** | The resource name of a ProductSet to be searched for similar images. Format is: &#x60;projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_product_search_params import GoogleCloudVisionV1p1beta1ProductSearchParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1ProductSearchParams from a JSON string
google_cloud_vision_v1p1beta1_product_search_params_instance = GoogleCloudVisionV1p1beta1ProductSearchParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1ProductSearchParams.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_product_search_params_dict = google_cloud_vision_v1p1beta1_product_search_params_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1ProductSearchParams from a dict
google_cloud_vision_v1p1beta1_product_search_params_from_dict = GoogleCloudVisionV1p1beta1ProductSearchParams.from_dict(google_cloud_vision_v1p1beta1_product_search_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


