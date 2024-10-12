# Collection

The collection message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_label0** | **str** | Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. [Custom label](https://support.google.com/merchants/answer/9674217) | [optional] 
**custom_label1** | **str** | Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. | [optional] 
**custom_label2** | **str** | Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. | [optional] 
**custom_label3** | **str** | Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. | [optional] 
**custom_label4** | **str** | Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. | [optional] 
**featured_product** | [**List[CollectionFeaturedProduct]**](CollectionFeaturedProduct.md) | This identifies one or more products associated with the collection. Used as a lookup to the corresponding product ID in your product feeds. Provide a maximum of 100 featuredProduct (for collections). Provide up to 10 featuredProduct (for Shoppable Images only) with ID and X and Y coordinates. [featured_product attribute](https://support.google.com/merchants/answer/9703736) | [optional] 
**headline** | **List[str]** | Your collection&#39;s name. [headline attribute](https://support.google.com/merchants/answer/9673580) | [optional] 
**id** | **str** | Required. The REST ID of the collection. Content API methods that operate on collections take this as their collectionId parameter. The REST ID for a collection is of the form collectionId. [id attribute](https://support.google.com/merchants/answer/9649290) | [optional] 
**image_link** | **List[str]** | The URL of a collection’s image. [image_link attribute](https://support.google.com/merchants/answer/9703236) | [optional] 
**language** | **str** | The language of a collection and the language of any featured products linked to the collection. [language attribute](https://support.google.com/merchants/answer/9673781) | [optional] 
**link** | **str** | A collection’s landing page. URL directly linking to your collection&#39;s page on your website. [link attribute](https://support.google.com/merchants/answer/9673983) | [optional] 
**mobile_link** | **str** | A collection’s mobile-optimized landing page when you have a different URL for mobile and desktop traffic. [mobile_link attribute](https://support.google.com/merchants/answer/9646123) | [optional] 
**product_country** | **str** | [product_country attribute](https://support.google.com/merchants/answer/9674155) | [optional] 

## Example

```python
from openapi_client.models.collection import Collection

# TODO update the JSON string below
json = "{}"
# create an instance of Collection from a JSON string
collection_instance = Collection.from_json(json)
# print the JSON string representation of the object
print(Collection.to_json())

# convert the object into a dict
collection_dict = collection_instance.to_dict()
# create an instance of Collection from a dict
collection_from_dict = Collection.from_dict(collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


