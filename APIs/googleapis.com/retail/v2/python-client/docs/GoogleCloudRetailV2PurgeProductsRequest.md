# GoogleCloudRetailV2PurgeProductsRequest

Request message for PurgeProducts method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. The filter string to specify the products to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. \&quot;*\&quot; implies delete all items in a branch. The eligible fields for filtering are: * &#x60;availability&#x60;: Double quoted Product.availability string. * &#x60;create_time&#x60; : in ISO 8601 \&quot;zulu\&quot; format. Supported syntax: * Comparators (\&quot;&gt;\&quot;, \&quot;&lt;\&quot;, \&quot;&gt;&#x3D;\&quot;, \&quot;&lt;&#x3D;\&quot;, \&quot;&#x3D;\&quot;). Examples: * create_time &lt;&#x3D; \&quot;2015-02-13T17:05:46Z\&quot; * availability &#x3D; \&quot;IN_STOCK\&quot; * Conjunctions (\&quot;AND\&quot;) Examples: * create_time &lt;&#x3D; \&quot;2015-02-13T17:05:46Z\&quot; AND availability &#x3D; \&quot;PREORDER\&quot; * Disjunctions (\&quot;OR\&quot;) Examples: * create_time &lt;&#x3D; \&quot;2015-02-13T17:05:46Z\&quot; OR availability &#x3D; \&quot;IN_STOCK\&quot; * Can support nested queries. Examples: * (create_time &lt;&#x3D; \&quot;2015-02-13T17:05:46Z\&quot; AND availability &#x3D; \&quot;PREORDER\&quot;) OR (create_time &gt;&#x3D; \&quot;2015-02-14T13:03:32Z\&quot; AND availability &#x3D; \&quot;IN_STOCK\&quot;) * Filter Limits: * Filter should not contain more than 6 conditions. * Max nesting depth should not exceed 2 levels. Examples queries: * Delete back order products created before a timestamp. create_time &lt;&#x3D; \&quot;2015-02-13T17:05:46Z\&quot; OR availability &#x3D; \&quot;BACKORDER\&quot; | [optional] 
**force** | **bool** | Actually perform the purge. If &#x60;force&#x60; is set to false, the method will return the expected purge count without deleting any products. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_purge_products_request import GoogleCloudRetailV2PurgeProductsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2PurgeProductsRequest from a JSON string
google_cloud_retail_v2_purge_products_request_instance = GoogleCloudRetailV2PurgeProductsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2PurgeProductsRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2_purge_products_request_dict = google_cloud_retail_v2_purge_products_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2PurgeProductsRequest from a dict
google_cloud_retail_v2_purge_products_request_from_dict = GoogleCloudRetailV2PurgeProductsRequest.from_dict(google_cloud_retail_v2_purge_products_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


