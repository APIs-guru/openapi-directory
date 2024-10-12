# openapi_client.ItemDraftApi

All URIs are relative to *https://api.ebay.com/sell/listing/v1_beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_item_draft**](ItemDraftApi.md#create_item_draft) | **POST** /item_draft/ | 


# **create_item_draft**
> ItemDraftResponse create_item_draft(x_ebay_c_marketplace_id, content_language=content_language, item_draft=item_draft)



This call gives Partners the ability to create an eBay draft of a item for their seller using information from their site. This lets the Partner increase the exposure of items on their site and leverage the eBay user listing experience seamlessly. This experience provides guidance on pricing, aspects, etc. and recommendations that help create a listing that is complete and improves the exposure of the listing in search results. After the listing draft is created, the seller logs into their eBay account and uses the listing experience to finish the listing and publish the item on eBay.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.item_draft import ItemDraft
from openapi_client.models.item_draft_response import ItemDraftResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/listing/v1_beta
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/listing/v1_beta"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ItemDraftApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | Use this header to specify an eBay marketplace ID. For a list of supported sites, see API Restrictions in the Listing API overview.
    content_language = 'content_language_example' # str | Use this header to specify the natural language of the seller. For details, see Content-Language in HTTP request headers. Required: For EBAY_CA in French. (Content-Language = fr-CA) (optional)
    item_draft = openapi_client.ItemDraft() # ItemDraft |  (optional)

    try:
        api_response = api_instance.create_item_draft(x_ebay_c_marketplace_id, content_language=content_language, item_draft=item_draft)
        print("The response of ItemDraftApi->create_item_draft:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemDraftApi->create_item_draft: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| Use this header to specify an eBay marketplace ID. For a list of supported sites, see API Restrictions in the Listing API overview. | 
 **content_language** | **str**| Use this header to specify the natural language of the seller. For details, see Content-Language in HTTP request headers. Required: For EBAY_CA in French. (Content-Language &#x3D; fr-CA) | [optional] 
 **item_draft** | [**ItemDraft**](ItemDraft.md)|  | [optional] 

### Return type

[**ItemDraftResponse**](ItemDraftResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

