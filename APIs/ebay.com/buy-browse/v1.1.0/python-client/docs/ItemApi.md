# openapi_client.ItemApi

All URIs are relative to *https://api.ebay.com/buy/browse/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_compatibility**](ItemApi.md#check_compatibility) | **POST** /item/{item_id}/check_compatibility | 
[**get_item**](ItemApi.md#get_item) | **GET** /item/{item_id} | 
[**get_item_by_legacy_id**](ItemApi.md#get_item_by_legacy_id) | **GET** /item/get_item_by_legacy_id | 
[**get_items**](ItemApi.md#get_items) | **GET** /item/ | 
[**get_items_by_item_group**](ItemApi.md#get_items_by_item_group) | **GET** /item/get_items_by_item_group | 


# **check_compatibility**
> CompatibilityResponse check_compatibility(item_id, x_ebay_c_marketplace_id, body=body)



This method checks if a product is compatible with the specified item. You can use this method to check the compatibility of cars, trucks, and motorcycles with a specific part listed on eBay. For example, to check the compatibility of a part, you pass in the item ID of the part as a URI parameter and specify all the attributes used to define a specific car in the compatibilityProperties container. If the call is successful, the response will be COMPATIBLE, NOT_COMPATIBLE, or UNDETERMINED. See compatibilityStatus for details. Note: The only products supported are cars, trucks, and motorcycles. To find the attributes and values for a specific marketplace, you can use the compatibility methods in the Taxonomy API. You can use this data to create menus to help buyers specify the product, such as their car. For more details and a list of the required attributes for the US marketplace that describe motor vehicles, see Check compatibility in the Buy Integration Guide. For an example, see the Samples section. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/ Note: This method is supported only on Production. Restrictions For a list of supported sites and other restrictions, see API Restrictions.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.compatibility_payload import CompatibilityPayload
from openapi_client.models.compatibility_response import CompatibilityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ItemApi(api_client)
    item_id = 'item_id_example' # str | The eBay RESTful identifier of an item (such as a part you want to check). This ID is returned by the Browse and Feed API methods. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 For more information about item ID for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview.
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | The ID of the eBay marketplace you want to use. Note: This value is case sensitive. For example: &nbsp;&nbsp;X-EBAY-C-MARKETPLACE-ID = EBAY_US For a list of supported sites see, API Restrictions.
    body = openapi_client.CompatibilityPayload() # CompatibilityPayload |  (optional)

    try:
        api_response = api_instance.check_compatibility(item_id, x_ebay_c_marketplace_id, body=body)
        print("The response of ItemApi->check_compatibility:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemApi->check_compatibility: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| The eBay RESTful identifier of an item (such as a part you want to check). This ID is returned by the Browse and Feed API methods. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 For more information about item ID for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview. | 
 **x_ebay_c_marketplace_id** | **str**| The ID of the eBay marketplace you want to use. Note: This value is case sensitive. For example: &amp;nbsp;&amp;nbsp;X-EBAY-C-MARKETPLACE-ID &#x3D; EBAY_US For a list of supported sites see, API Restrictions. | 
 **body** | [**CompatibilityPayload**](CompatibilityPayload.md)|  | [optional] 

### Return type

[**CompatibilityResponse**](CompatibilityResponse.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_item**
> Item get_item(item_id, fieldgroups=fieldgroups)



This method retrieves the details of a specific item, such as description, price, category, all item aspects, condition, return policies, seller feedback and score, shipping options, shipping costs, estimated delivery, and other information the buyer needs to make a purchasing decision. The Buy APIs are designed to let you create an eBay shopping experience in your app or website. This means you will need to know when something, such as the availability, quantity, etc., has changed in any eBay item you are offering. You can do this easily by setting the fieldgroups URI parameter. This parameter lets you control what is returned in the response. Setting fieldgroups to COMPACT reduces the response to only the five fields that you need in order to check if any item detail has changed. Setting fieldgroups to PRODUCT, adds additional fields to the default response that return information about the product of the item. You can use either COMPACT or PRODUCT but not both. For more information, see fieldgroups. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to be commissioned for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.item import Item
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ItemApi(api_client)
    item_id = 'item_id_example' # str | The eBay RESTful identifier of an item. This ID is returned by the Browse and Feed API methods. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 For more information about item ID for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview.
    fieldgroups = 'fieldgroups_example' # str | This parameter lets you control what is returned in the response. If you do not set this field, the method returns all the details of the item. Valid Values: PRODUCT - This adds the additionalImages, additionalProductIdentities, aspectGroups, description, gtins, image, and title product fields to the response, which describe the product associated with the item. See Product for more information about these fields. COMPACT - This returns only the following fields, which let you quickly check if the availability or price of the item has changed, if the item has been revised by the seller, or if an item's top-rated plus status has changed for items you have stored. itemId - The identifier of the item. itemAffiliateWebURL - The URL of the View Item page of the item, which includes the affiliate tracking ID. This field is only returned if the eBay partner enables affiliate tracking for the item by including the X-EBAY-C-ENDUSERCTX request header in the method. ItemWebURL - The URL of the View Item page of the item. This enables you to include a &quot;Report Item on eBay&quot; link that takes the buyer to the View Item page on eBay. From there they can report any issues regarding this item to eBay. legacyItemId - The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. sellerItemRevision - An identifier generated/incremented when a seller revises the item. The follow are the two types of item revisions: Seller changes, such as changing the title eBay system changes, such as changing the quantity when an item is purchased. This ID is changed only when the seller makes a change to the item. This means you cannot use this value to determine if the quantity has changed. To check if the quantity has changed, use estimatedAvailabilities. topRatedBuyingExperience - A boolean value indicating if this item is a top-rated plus item. A change in the item's top rated plus standing is not tracked by the revision ID. See topRatedBuyingExperience for more information. price - This is tracked by the revision ID but is returned here to enable you to quickly verify the price of the item. estimatedAvailabilities - Returns the item availability information, which is based on the item's quantity. Note: Changes in quantity are not tracked by sellerItemRevision. itemEndDate - This is the scheduled end time of the listing. eligibleForInlineCheckout - This parameter returns items based on whether or not the items can be purchased using the Buy Order API. If the value of this field is true, this indicates that the item can be purchased using the Order API. If the value of this field is false, this indicates that the item cannot be purchased using the Order API and must be purchased on the eBay site. For Example To check if a stored item's information is current, do following. Pass in the item ID and set fieldgroups to COMPACT. item/v1|46566502948|0?fieldgroups=COMPACT Do one of the following: If the sellerItemRevision field is returned and you haven't stored a revision number for this item, record the number and pass in the item ID in the getItem method to get the latest information. If the revision number is different from the value you have stored, update the value and pass in the item ID in the getItem method to get the latest information. If the sellerItemRevision field is not returned or has not changed, where needed, update the item information with the information returned in the response. Maximum value: 1 If more than one values is specified, the first value will be used. (optional)

    try:
        api_response = api_instance.get_item(item_id, fieldgroups=fieldgroups)
        print("The response of ItemApi->get_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemApi->get_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **str**| The eBay RESTful identifier of an item. This ID is returned by the Browse and Feed API methods. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 For more information about item ID for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview. | 
 **fieldgroups** | **str**| This parameter lets you control what is returned in the response. If you do not set this field, the method returns all the details of the item. Valid Values: PRODUCT - This adds the additionalImages, additionalProductIdentities, aspectGroups, description, gtins, image, and title product fields to the response, which describe the product associated with the item. See Product for more information about these fields. COMPACT - This returns only the following fields, which let you quickly check if the availability or price of the item has changed, if the item has been revised by the seller, or if an item&#39;s top-rated plus status has changed for items you have stored. itemId - The identifier of the item. itemAffiliateWebURL - The URL of the View Item page of the item, which includes the affiliate tracking ID. This field is only returned if the eBay partner enables affiliate tracking for the item by including the X-EBAY-C-ENDUSERCTX request header in the method. ItemWebURL - The URL of the View Item page of the item. This enables you to include a &amp;quot;Report Item on eBay&amp;quot; link that takes the buyer to the View Item page on eBay. From there they can report any issues regarding this item to eBay. legacyItemId - The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. sellerItemRevision - An identifier generated/incremented when a seller revises the item. The follow are the two types of item revisions: Seller changes, such as changing the title eBay system changes, such as changing the quantity when an item is purchased. This ID is changed only when the seller makes a change to the item. This means you cannot use this value to determine if the quantity has changed. To check if the quantity has changed, use estimatedAvailabilities. topRatedBuyingExperience - A boolean value indicating if this item is a top-rated plus item. A change in the item&#39;s top rated plus standing is not tracked by the revision ID. See topRatedBuyingExperience for more information. price - This is tracked by the revision ID but is returned here to enable you to quickly verify the price of the item. estimatedAvailabilities - Returns the item availability information, which is based on the item&#39;s quantity. Note: Changes in quantity are not tracked by sellerItemRevision. itemEndDate - This is the scheduled end time of the listing. eligibleForInlineCheckout - This parameter returns items based on whether or not the items can be purchased using the Buy Order API. If the value of this field is true, this indicates that the item can be purchased using the Order API. If the value of this field is false, this indicates that the item cannot be purchased using the Order API and must be purchased on the eBay site. For Example To check if a stored item&#39;s information is current, do following. Pass in the item ID and set fieldgroups to COMPACT. item/v1|46566502948|0?fieldgroups&#x3D;COMPACT Do one of the following: If the sellerItemRevision field is returned and you haven&#39;t stored a revision number for this item, record the number and pass in the item ID in the getItem method to get the latest information. If the revision number is different from the value you have stored, update the value and pass in the item ID in the getItem method to get the latest information. If the sellerItemRevision field is not returned or has not changed, where needed, update the item information with the information returned in the response. Maximum value: 1 If more than one values is specified, the first value will be used. | [optional] 

### Return type

[**Item**](Item.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_item_by_legacy_id**
> Item get_item_by_legacy_id(legacy_item_id, fieldgroups=fieldgroups, legacy_variation_id=legacy_variation_id, legacy_variation_sku=legacy_variation_sku)



This method is a bridge between the eBay legacy APIs, such as Shopping, and Finding and the eBay Buy APIs. There are differences between how legacy APIs and RESTful APIs return the identifier of an &quot;item&quot; and what the item ID represents. This method lets you use the legacy item ids retrieve the details of a specific item, such as description, price, and other information the buyer needs to make a purchasing decision. It also returns the RESTful item ID, which you can use with all the Buy API methods. For more information about how to use legacy ids with the Buy APIs, see Legacy API compatibility in the Buying Integration guide. This method returns the item details and requires you to pass in either the item ID of a non-variation item or the item ids of both the parent and child of an item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. When an item group is created, one of the item variations, such as the red shirt size L, is chosen as the &quot;parent&quot;. All the other items in the group are the children, such as the blue shirt size L, red shirt size M, etc. The fieldgroups URI parameter lets you control what is returned in the response. Setting fieldgroups to PRODUCT, adds additional fields to the default response that return information about the product of the item. For more information, see fieldgroups. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/get_item_by_legacy_id/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item/get_item_by_legacy_id/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to be commissioned for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.item import Item
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ItemApi(api_client)
    legacy_item_id = 'legacy_item_id_example' # str | Specifies either: The legacy item ID of an item that is not part of a group. The legacy item ID of a group, which is the ID of the &quot;parent&quot; of the group of items. Note: If you pass in a group ID, you must also use the legacy_variation_id field and pass in the legacy ID of the specific item variation (child ID). Legacy ids are returned by APIs, such as the Finding API. The following is an example of using the value of the ItemID field for a specific item from Finding to get the RESTful itemId value. &nbsp;&nbsp;&nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id=110039490209 Maximum: 1
    fieldgroups = 'fieldgroups_example' # str | This field lets you control what is returned in the response. If you do not set this field, the method returns all the details of the item. Note: In this method, the only value supported is PRODUCT. Valid Values: PRODUCT - This adds the additionalImages, additionalProductIdentities, aspectGroups, description, gtins, image, and title fields to the response, which describe the item's product. See Product for more information about these fields. Code so that your app gracefully handles any future changes to this list. (optional)
    legacy_variation_id = 'legacy_variation_id_example' # str | Specifies the legacy item ID of a specific item in an item group, such as the red shirt size L. Legacy ids are returned by APIs, such as the Finding API. Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_id (optional)
    legacy_variation_sku = 'legacy_variation_sku_example' # str | Specifics the legacy SKU of the item. SKU are item ids created by the seller. Legacy SKUs are returned by eBay the Shopping API. The following is an example of using the value of the ItemID and SKU fields to get the RESTful itemId value. &nbsp;&nbsp;&nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id=110039490209&amp;legacy_variation_sku=V-00031-WHM Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_sku (optional)

    try:
        api_response = api_instance.get_item_by_legacy_id(legacy_item_id, fieldgroups=fieldgroups, legacy_variation_id=legacy_variation_id, legacy_variation_sku=legacy_variation_sku)
        print("The response of ItemApi->get_item_by_legacy_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemApi->get_item_by_legacy_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacy_item_id** | **str**| Specifies either: The legacy item ID of an item that is not part of a group. The legacy item ID of a group, which is the ID of the &amp;quot;parent&amp;quot; of the group of items. Note: If you pass in a group ID, you must also use the legacy_variation_id field and pass in the legacy ID of the specific item variation (child ID). Legacy ids are returned by APIs, such as the Finding API. The following is an example of using the value of the ItemID field for a specific item from Finding to get the RESTful itemId value. &amp;nbsp;&amp;nbsp;&amp;nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id&#x3D;110039490209 Maximum: 1 | 
 **fieldgroups** | **str**| This field lets you control what is returned in the response. If you do not set this field, the method returns all the details of the item. Note: In this method, the only value supported is PRODUCT. Valid Values: PRODUCT - This adds the additionalImages, additionalProductIdentities, aspectGroups, description, gtins, image, and title fields to the response, which describe the item&#39;s product. See Product for more information about these fields. Code so that your app gracefully handles any future changes to this list. | [optional] 
 **legacy_variation_id** | **str**| Specifies the legacy item ID of a specific item in an item group, such as the red shirt size L. Legacy ids are returned by APIs, such as the Finding API. Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_id | [optional] 
 **legacy_variation_sku** | **str**| Specifics the legacy SKU of the item. SKU are item ids created by the seller. Legacy SKUs are returned by eBay the Shopping API. The following is an example of using the value of the ItemID and SKU fields to get the RESTful itemId value. &amp;nbsp;&amp;nbsp;&amp;nbsp; browse/v1/item/get_item_by_legacy_id?legacy_item_id&#x3D;110039490209&amp;amp;legacy_variation_sku&#x3D;V-00031-WHM Maximum: 1 Requirement: You must always pass in the legacy_item_id with the legacy_variation_sku | [optional] 

### Return type

[**Item**](Item.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_items**
> Items get_items(item_ids=item_ids, item_group_ids=item_group_ids)



This method retrieves the details of specific items that the buyer needs to make a purchasing decision. Note: This is a (Limited Release) available only to select Partners. For this method, only the following fields are returned: eligibleForInlineCheckout, estimatedAvailabilities, itemAffiliateWebURL, itemID, ItemWebURL, legacyItemID, price, sellerItemRevision, and topRatedBuyingExperience. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to be commissioned for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.items import Items
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ItemApi(api_client)
    item_ids = 'item_ids_example' # str | A list of item IDs. Item IDs are the eBay RESTful identifier of items. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 In any given request, either item_ids or item_group_ids can be retrieved. Attempting to retrieve both will result in an error. In a request, multiple item_ids can be passed as comma separated values. Maximum allowed itemIDs: 20 For more information about item IDs for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview. (optional)
    item_group_ids = 'item_group_ids_example' # str | A list of item group IDs. Item group IDs are the eBay RESTful identifier of item groups. RESTful Group Item ID Format: ############ For example: 330017835749 or 330017835740 In any given request, either item_ids or item_group_ids can be retrieved. Attempting to retrieve both will result in an error. In a request, multiple item_group_ids can be passed as comma separated values. Maximum allowed itemGroupIDs: 10 (optional)

    try:
        api_response = api_instance.get_items(item_ids=item_ids, item_group_ids=item_group_ids)
        print("The response of ItemApi->get_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemApi->get_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_ids** | **str**| A list of item IDs. Item IDs are the eBay RESTful identifier of items. RESTful Item ID Format: v1|#|# For example: v1|272394640372|0 or v1|162846450672|461882996982 In any given request, either item_ids or item_group_ids can be retrieved. Attempting to retrieve both will result in an error. In a request, multiple item_ids can be passed as comma separated values. Maximum allowed itemIDs: 20 For more information about item IDs for RESTful APIs, see the Legacy API compatibility section of the Buy APIs Overview. | [optional] 
 **item_group_ids** | **str**| A list of item group IDs. Item group IDs are the eBay RESTful identifier of item groups. RESTful Group Item ID Format: ############ For example: 330017835749 or 330017835740 In any given request, either item_ids or item_group_ids can be retrieved. Attempting to retrieve both will result in an error. In a request, multiple item_group_ids can be passed as comma separated values. Maximum allowed itemGroupIDs: 10 | [optional] 

### Return type

[**Items**](Items.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_items_by_item_group**
> ItemGroup get_items_by_item_group(item_group_id)



This method retrieves the details of the individual items in an item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. You pass in the item group ID as a URI parameter. You use this method to show the item details of items with multiple aspects, such as color, size, storage capacity, etc. This method returns two main containers; items and commonDescriptions. The items container has an array of containers with the details of each item in the group. The commonDescriptions container has an array of containers for a description and the item ids of all the items that have this exact description. Because items within an item group often have the same description, this decreases the size of the response. URLs for this method Production URL: https://api.ebay.com/buy/browse/v1/item/get_items_by_item_group/ Sandbox URL: https://api.sandbox.ebay.com/buy/browse/v1/item/get_items_by_item_group/ Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to be commissioned for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.

### Example


```python
import openapi_client
from openapi_client.models.item_group import ItemGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/buy/browse/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/buy/browse/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ItemApi(api_client)
    item_group_id = 'item_group_id_example' # str | Identifier of the item group to return. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. This ID is returned in the itemGroupHref field of the search and getItem methods. For Example: https://api.ebay.com/buy/browse/v1/item/get_items_by_item_group?item_group_id=351825690866

    try:
        api_response = api_instance.get_items_by_item_group(item_group_id)
        print("The response of ItemApi->get_items_by_item_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemApi->get_items_by_item_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_group_id** | **str**| Identifier of the item group to return. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. This ID is returned in the itemGroupHref field of the search and getItem methods. For Example: https://api.ebay.com/buy/browse/v1/item/get_items_by_item_group?item_group_id&#x3D;351825690866 | 

### Return type

[**ItemGroup**](ItemGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

