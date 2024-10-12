# openapi_client.AdApi

All URIs are relative to *https://api.ebay.com/sell/marketing/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_create_ads_by_inventory_reference**](AdApi.md#bulk_create_ads_by_inventory_reference) | **POST** /ad_campaign/{campaign_id}/bulk_create_ads_by_inventory_reference | 
[**bulk_create_ads_by_listing_id**](AdApi.md#bulk_create_ads_by_listing_id) | **POST** /ad_campaign/{campaign_id}/bulk_create_ads_by_listing_id | 
[**bulk_delete_ads_by_inventory_reference**](AdApi.md#bulk_delete_ads_by_inventory_reference) | **POST** /ad_campaign/{campaign_id}/bulk_delete_ads_by_inventory_reference | 
[**bulk_delete_ads_by_listing_id**](AdApi.md#bulk_delete_ads_by_listing_id) | **POST** /ad_campaign/{campaign_id}/bulk_delete_ads_by_listing_id | 
[**bulk_update_ads_bid_by_inventory_reference**](AdApi.md#bulk_update_ads_bid_by_inventory_reference) | **POST** /ad_campaign/{campaign_id}/bulk_update_ads_bid_by_inventory_reference | 
[**bulk_update_ads_bid_by_listing_id**](AdApi.md#bulk_update_ads_bid_by_listing_id) | **POST** /ad_campaign/{campaign_id}/bulk_update_ads_bid_by_listing_id | 
[**bulk_update_ads_status**](AdApi.md#bulk_update_ads_status) | **POST** /ad_campaign/{campaign_id}/bulk_update_ads_status | 
[**bulk_update_ads_status_by_listing_id**](AdApi.md#bulk_update_ads_status_by_listing_id) | **POST** /ad_campaign/{campaign_id}/bulk_update_ads_status_by_listing_id | 
[**create_ad_by_listing_id**](AdApi.md#create_ad_by_listing_id) | **POST** /ad_campaign/{campaign_id}/ad | 
[**create_ads_by_inventory_reference**](AdApi.md#create_ads_by_inventory_reference) | **POST** /ad_campaign/{campaign_id}/create_ads_by_inventory_reference | 
[**delete_ad**](AdApi.md#delete_ad) | **DELETE** /ad_campaign/{campaign_id}/ad/{ad_id} | 
[**delete_ads_by_inventory_reference**](AdApi.md#delete_ads_by_inventory_reference) | **POST** /ad_campaign/{campaign_id}/delete_ads_by_inventory_reference | 
[**get_ad**](AdApi.md#get_ad) | **GET** /ad_campaign/{campaign_id}/ad/{ad_id} | 
[**get_ads**](AdApi.md#get_ads) | **GET** /ad_campaign/{campaign_id}/ad | 
[**get_ads_by_inventory_reference**](AdApi.md#get_ads_by_inventory_reference) | **GET** /ad_campaign/{campaign_id}/get_ads_by_inventory_reference | 
[**update_bid**](AdApi.md#update_bid) | **POST** /ad_campaign/{campaign_id}/ad/{ad_id}/update_bid | 


# **bulk_create_ads_by_inventory_reference**
> BulkCreateAdsByInventoryReferenceResponse bulk_create_ads_by_inventory_reference(campaign_id, bulk_create_ads_by_inventory_reference_request)



This method adds multiple listings that are managed with the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a> to an existing Promoted Listings campaign.<br /><br />For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) model, bulk ads may be directly created for the listing.<br /><br />For each listing specified in the request, this method:<br /><ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ads created.</li> <li>Associates the ads created with the specified campaign.</li></ul><br />To create ads for a listing, specify their <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to which you want to associate the ads using the <b>campaign_id</b> path parameter.<br /><br /><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />Use <a href=\"/api-docs/sell/marketing/resources/campaign/methods/createCampaign\">createCampaign</a> to create a new campaign and use <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to get a list of existing campaigns.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_create_ads_by_inventory_reference_request import BulkCreateAdsByInventoryReferenceRequest
from openapi_client.models.bulk_create_ads_by_inventory_reference_response import BulkCreateAdsByInventoryReferenceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. Get a seller's campaign IDs by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a>.
    bulk_create_ads_by_inventory_reference_request = openapi_client.BulkCreateAdsByInventoryReferenceRequest() # BulkCreateAdsByInventoryReferenceRequest | The container for the bulk request to create ads for eBay inventory reference IDs. eBay inventory reference IDs are seller-defined IDs used by theInventory API.

    try:
        api_response = api_instance.bulk_create_ads_by_inventory_reference(campaign_id, bulk_create_ads_by_inventory_reference_request)
        print("The response of AdApi->bulk_create_ads_by_inventory_reference:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->bulk_create_ads_by_inventory_reference: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created. Get a seller&#39;s campaign IDs by calling &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt;. | 
 **bulk_create_ads_by_inventory_reference_request** | [**BulkCreateAdsByInventoryReferenceRequest**](BulkCreateAdsByInventoryReferenceRequest.md)| The container for the bulk request to create ads for eBay inventory reference IDs. eBay inventory reference IDs are seller-defined IDs used by theInventory API. | 

### Return type

[**BulkCreateAdsByInventoryReferenceResponse**](BulkCreateAdsByInventoryReferenceResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**207** | Multi Status |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulk_create_ads_by_listing_id**
> BulkAdResponse bulk_create_ads_by_listing_id(campaign_id, bulk_create_ad_request)



This method adds multiple listings to an existing Promoted Listings campaign using <b>listingId</b> values generated by the <a href=\"/Devzone/XML/docs/Reference/eBay/index.html\" title=\"Trading API Reference\">Trading API</a> or <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a>, or using values generated by an ad group ID.<p>For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, bulk ads may be directly created for the listing.</p><p>For each listing ID specified in the request, this method:</p>  <ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ad.</li> <li>Associates the ad with the specified campaign.</li></ul><p>To create an ad for a listing, specify its <b>listingId</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API.</p><p>You can specify a maximum of <b>500 listings per call</b> and each campaign can have ads for a maximum of 50,000 items. Be aware when using this call that each variation in a multiple-variation listing creates an individual ad.</p><p>For Promoted Listings Advanced (PLA) campaigns using the Cost Per Click (CPC) funding model, an ad group must be created first. If no ad group has been created for the campaign, ads cannot be created.</p><p>For the ad group specified in the request, this method associates the ad with the specified ad group.</p><p>To create an ad for an ad group, specify the name of the ad group plus the <b>defaultBid</b> for the ad in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Ad groups are generated using the <a href=\"/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup\">createAdGroup</a>  method.</p> <p>You can specify one or more ad groups per campaign.</p><p>Use <a href=\"/api-docs/sell/marketing/resources/campaign/methods/createCampaign\">createCampaign</a> to create a new campaign and use <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to get a list of existing campaigns.</p>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_ad_response import BulkAdResponse
from openapi_client.models.bulk_create_ad_request import BulkCreateAdRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a>.
    bulk_create_ad_request = openapi_client.BulkCreateAdRequest() # BulkCreateAdRequest | The container for the bulk request to create ads for eBay listing IDs. eBay listing IDs are generated by the Trading API and Inventory API when the listing is created on eBay.

    try:
        api_response = api_instance.bulk_create_ads_by_listing_id(campaign_id, bulk_create_ad_request)
        print("The response of AdApi->bulk_create_ads_by_listing_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->bulk_create_ads_by_listing_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that&#39;s generated when a campaign is created. Get a seller&#39;s campaign IDs by calling &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt;. | 
 **bulk_create_ad_request** | [**BulkCreateAdRequest**](BulkCreateAdRequest.md)| The container for the bulk request to create ads for eBay listing IDs. eBay listing IDs are generated by the Trading API and Inventory API when the listing is created on eBay. | 

### Return type

[**BulkAdResponse**](BulkAdResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**207** | Multi Status |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulk_delete_ads_by_inventory_reference**
> BulkDeleteAdsByInventoryReferenceResponse bulk_delete_ads_by_inventory_reference(campaign_id, bulk_delete_ads_by_inventory_reference_request)



This method works with listings created with the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a>.<br /><br />The method deletes a set of ads, as specified by a list of inventory reference IDs, from the specified campaign. <i>Inventory reference IDs</i> are seller-defined IDs that are used with the Inventory API</a>.<br /><br />Pass the <b>campaign_id</b> as a path parameter and populate the payload with a list of <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b> pairs that you want to delete.<br /><br />Get the campaign IDs for a seller by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> and call <a href=\"/api-docs/sell/marketing/resources/ad/methods/getAds\">getAds</a> to get a list of the seller's inventory reference IDs.<br /><br /><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_delete_ads_by_inventory_reference_request import BulkDeleteAdsByInventoryReferenceRequest
from openapi_client.models.bulk_delete_ads_by_inventory_reference_response import BulkDeleteAdsByInventoryReferenceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a>.
    bulk_delete_ads_by_inventory_reference_request = openapi_client.BulkDeleteAdsByInventoryReferenceRequest() # BulkDeleteAdsByInventoryReferenceRequest | This request works with listings created via the <a href=\"/api-docs/sell/inventory/resources/methods\">Inventory API</a>.<br /><br />The request is to delete a set of ads in bulk, as specified by a list of inventory reference IDs from the specified campaign.

    try:
        api_response = api_instance.bulk_delete_ads_by_inventory_reference(campaign_id, bulk_delete_ads_by_inventory_reference_request)
        print("The response of AdApi->bulk_delete_ads_by_inventory_reference:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->bulk_delete_ads_by_inventory_reference: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that&#39;s generated when a campaign is created. Get a seller&#39;s campaign IDs by calling &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt;. | 
 **bulk_delete_ads_by_inventory_reference_request** | [**BulkDeleteAdsByInventoryReferenceRequest**](BulkDeleteAdsByInventoryReferenceRequest.md)| This request works with listings created via the &lt;a href&#x3D;\&quot;/api-docs/sell/inventory/resources/methods\&quot;&gt;Inventory API&lt;/a&gt;.&lt;br /&gt;&lt;br /&gt;The request is to delete a set of ads in bulk, as specified by a list of inventory reference IDs from the specified campaign. | 

### Return type

[**BulkDeleteAdsByInventoryReferenceResponse**](BulkDeleteAdsByInventoryReferenceResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**207** | Multi Status |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulk_delete_ads_by_listing_id**
> BulkDeleteAdResponse bulk_delete_ads_by_listing_id(campaign_id, bulk_delete_ad_request)



This method works with listing IDs created with either the <a href=\"/Devzone/XML/docs/Reference/eBay/index.html\" title=\"Trading API Reference\">Trading API</a> or the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a>.<br /><br />The method deletes a set of ads, as specified by a list of <b>listingID</b> values from a Promoted Listings campaign. A listing ID value is generated by eBay when a seller creates a listing with either the Trading API and Inventory API.<br /><br />Pass the <b>campaign_id</b> as a path parameter and populate the payload with the set of listing IDs that you want to delete.<br /><br />Get the campaign IDs for a seller by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> and call <a href=\"/api-docs/sell/marketing/resources/ad/methods/getAds\">getAds</a> to get a list of the seller's inventory reference IDs.<br /><br /><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the <a href=\"/api-docs/sell/marketing/resources/ad/methods/bulkUpdateAdsStatusByListingId\">bulkUpdateAdsStatusByListingId</a> method to change the status of ads to ARCHIVED.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_delete_ad_request import BulkDeleteAdRequest
from openapi_client.models.bulk_delete_ad_response import BulkDeleteAdResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a>.
    bulk_delete_ad_request = openapi_client.BulkDeleteAdRequest() # BulkDeleteAdRequest | This request object defines the fields for the <b>bulkDeleteAdsByListingId</b> request.

    try:
        api_response = api_instance.bulk_delete_ads_by_listing_id(campaign_id, bulk_delete_ad_request)
        print("The response of AdApi->bulk_delete_ads_by_listing_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->bulk_delete_ads_by_listing_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that&#39;s generated when a campaign is created. Get a seller&#39;s campaign IDs by calling &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt;. | 
 **bulk_delete_ad_request** | [**BulkDeleteAdRequest**](BulkDeleteAdRequest.md)| This request object defines the fields for the &lt;b&gt;bulkDeleteAdsByListingId&lt;/b&gt; request. | 

### Return type

[**BulkDeleteAdResponse**](BulkDeleteAdResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**207** | Multi Status |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulk_update_ads_bid_by_inventory_reference**
> BulkUpdateAdsByInventoryReferenceResponse bulk_update_ads_bid_by_inventory_reference(campaign_id, bulk_create_ads_by_inventory_reference_request)



This method works with listings created with either the <a href=\"/Devzone/XML/docs/Reference/eBay/index.html\" title=\"Trading API Reference\">Trading API</a> or the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a>.  <p>The method updates the <b>bidPercentage</b> values for a set of ads associated with the specified campaign.</p>  <p>Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their associated updated <b>bidPercentage</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.</p>  <p>Get the campaign IDs for a seller by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> and call <a href=\"/api-docs/sell/marketing/resources/ad/methods/getAds\">getAds</a> to get a list of the seller's inventory reference IDs.</p><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_create_ads_by_inventory_reference_request import BulkCreateAdsByInventoryReferenceRequest
from openapi_client.models.bulk_update_ads_by_inventory_reference_response import BulkUpdateAdsByInventoryReferenceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a>.
    bulk_create_ads_by_inventory_reference_request = openapi_client.BulkCreateAdsByInventoryReferenceRequest() # BulkCreateAdsByInventoryReferenceRequest | This request object defines the fields for the <b>BulkCreateAdsByInventoryReference</b> request.

    try:
        api_response = api_instance.bulk_update_ads_bid_by_inventory_reference(campaign_id, bulk_create_ads_by_inventory_reference_request)
        print("The response of AdApi->bulk_update_ads_bid_by_inventory_reference:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->bulk_update_ads_bid_by_inventory_reference: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that&#39;s generated when a campaign is created. Get a seller&#39;s campaign IDs by calling &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt;. | 
 **bulk_create_ads_by_inventory_reference_request** | [**BulkCreateAdsByInventoryReferenceRequest**](BulkCreateAdsByInventoryReferenceRequest.md)| This request object defines the fields for the &lt;b&gt;BulkCreateAdsByInventoryReference&lt;/b&gt; request. | 

### Return type

[**BulkUpdateAdsByInventoryReferenceResponse**](BulkUpdateAdsByInventoryReferenceResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**207** | Multi Status |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulk_update_ads_bid_by_listing_id**
> BulkAdUpdateResponse bulk_update_ads_bid_by_listing_id(campaign_id, bulk_create_ad_request)



This method works with listings created with either the <a href=\"/Devzone/XML/docs/Reference/eBay/index.html\" title=\"Trading API Reference\">Trading API</a> or the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a>.  <p>The method updates the <b>bidPercentage</b> values for a set of ads associated with the specified campaign.</p>  <p>Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their associated updated <b>bidPercentage</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.</p>  <p>Get the campaign IDs for a seller by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> and call <a href=\"/api-docs/sell/marketing/resources/ad/methods/getAds\">getAds</a> to get a list of the seller's inventory reference IDs.</p><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_ad_update_response import BulkAdUpdateResponse
from openapi_client.models.bulk_create_ad_request import BulkCreateAdRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that's generated when a campaign is created. Get a seller's campaign IDs by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a>.
    bulk_create_ad_request = openapi_client.BulkCreateAdRequest() # BulkCreateAdRequest | This request object defines the fields for the <b>BulkCreateAdsByListingId</b> request.

    try:
        api_response = api_instance.bulk_update_ads_bid_by_listing_id(campaign_id, bulk_create_ad_request)
        print("The response of AdApi->bulk_update_ads_bid_by_listing_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->bulk_update_ads_bid_by_listing_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that&#39;s generated when a campaign is created. Get a seller&#39;s campaign IDs by calling &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt;. | 
 **bulk_create_ad_request** | [**BulkCreateAdRequest**](BulkCreateAdRequest.md)| This request object defines the fields for the &lt;b&gt;BulkCreateAdsByListingId&lt;/b&gt; request. | 

### Return type

[**BulkAdUpdateResponse**](BulkAdUpdateResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**207** | Multi Status |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Business error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulk_update_ads_status**
> BulkAdUpdateStatusResponse bulk_update_ads_status(campaign_id, bulk_update_ad_status_request)



<span class=\"tablenote\"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href=\"/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests \" target=\"_blank \"> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href=\"/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility \" target=\"_blank \">getAdvertisingEligibility</a> method in Account API.</span><br />This method works with listings created with either the <a href= \"/Devzone/XML/docs/Reference/eBay/index.html\">Trading API</a> or the <a href=\"/api-docs/sell/inventory/resources/methods\">Inventory API</a>.<br /><br />This method updates the status of ads in bulk.<br /><br />Specify the <b>campaign_id</b> you want to update as a URI parameter, and configure the <b>adGroupStatus</b> in the request payload.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_ad_update_status_response import BulkAdUpdateStatusResponse
from openapi_client.models.bulk_update_ad_status_request import BulkUpdateAdStatusRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>
    bulk_update_ad_status_request = openapi_client.BulkUpdateAdStatusRequest() # BulkUpdateAdStatusRequest | The bulk request to update the ads.

    try:
        api_response = api_instance.bulk_update_ads_status(campaign_id, bulk_update_ad_status_request)
        print("The response of AdApi->bulk_update_ads_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->bulk_update_ads_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 
 **bulk_update_ad_status_request** | [**BulkUpdateAdStatusRequest**](BulkUpdateAdStatusRequest.md)| The bulk request to update the ads. | 

### Return type

[**BulkAdUpdateStatusResponse**](BulkAdUpdateStatusResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**207** | Multi Status |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulk_update_ads_status_by_listing_id**
> BulkAdUpdateStatusByListingIdResponse bulk_update_ads_status_by_listing_id(campaign_id, bulk_update_ad_status_by_listing_id_request)



<span class=\"tablenote\"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href=\"/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests \" target=\"_blank \"> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href=\"/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility \" target=\"_blank \">getAdvertisingEligibility</a> method in Account API.</span><br />This method works with listings created with either the <a href=\"/Devzone/XML/docs/Reference/eBay/index.html\">Trading API</a> or the <a href=\"/api-docs/sell/inventory/resources/methods\">Inventory API</a>.<br /><br />The method updates the status of ads in bulk, based on listing ID values.<br /><br />Specify the <b>campaign_id</b> as a path parameter and supply a set of listing IDs with their updated <b>adStatus</b> values in the request body. An eBay listing ID is generated when a listing is created with the Trading API.<br /><br />Get the campaign IDs for a seller by calling <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> and call <a href=\"/api-docs/sell/marketing/resources/ad/methods/getAds\">getAds</a> to retrieve a list of seller inventory reference IDs.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_ad_update_status_by_listing_id_response import BulkAdUpdateStatusByListingIdResponse
from openapi_client.models.bulk_update_ad_status_by_listing_id_request import BulkUpdateAdStatusByListingIdRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>
    bulk_update_ad_status_by_listing_id_request = openapi_client.BulkUpdateAdStatusByListingIdRequest() # BulkUpdateAdStatusByListingIdRequest | The bulk request to update ads.

    try:
        api_response = api_instance.bulk_update_ads_status_by_listing_id(campaign_id, bulk_update_ad_status_by_listing_id_request)
        print("The response of AdApi->bulk_update_ads_status_by_listing_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->bulk_update_ads_status_by_listing_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 
 **bulk_update_ad_status_by_listing_id_request** | [**BulkUpdateAdStatusByListingIdRequest**](BulkUpdateAdStatusByListingIdRequest.md)| The bulk request to update ads. | 

### Return type

[**BulkAdUpdateStatusByListingIdResponse**](BulkAdUpdateStatusByListingIdResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**207** | Multi Status |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_ad_by_listing_id**
> object create_ad_by_listing_id(campaign_id, create_ad_request)



This method adds a listing to an existing Promoted Listings campaign using a <b>listingId</b> value generated by the <a href=\"/Devzone/XML/docs/Reference/eBay/index.html\" title=\"Trading API Reference\">Trading API</a> or <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a>, or using a value generated by an ad group ID. <p>For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, an ad may be directly created for the listing.</p><p>For the listing ID specified in the request, this method:</p>  <ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ad.</li> <li>Associates the ad with the specified campaign.</li></ul>  <p>To create an ad for a listing, specify its <b>listingId</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ad with using the <b>campaign_id</b> path parameter. Listing IDs are generated by eBay when a seller creates listings with the Trading API.</p><p>For Promoted Listings Advanced (PLA) campaigns using the Cost Per Click (CPC) funding model, an ad group must be created first. If no ad group has been created for the campaign, an ad cannot be created.</p><p>For the ad group specified in the request, this method associates the ad with the specified ad group.</p><p>To create an ad for an ad group, specify the name of the ad group in the payload of the request. Specify the campaign to associate the ads with using the <b>campaign_id</b> path parameter. Ad groups are generated using the <a href=\"/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup\">createAdGroup</a> method.</p> <p>You can specify one or more ad groups per campaign.</p><p>Use <a href=\"/api-docs/sell/marketing/resources/campaign/methods/createCampaign\">createCampaign</a> to create a new campaign and use <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to get a list of existing campaigns.</p><p>This call has no response payload. If the ad is successfully created, a <code>201 Created</code> HTTP status code and the <a href=\"/api-docs/sell/marketing/resources/ad/methods/getAd\">getAd</a> URI of the ad are returned in the location header.</p>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.create_ad_request import CreateAdRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>
    create_ad_request = openapi_client.CreateAdRequest() # CreateAdRequest | This request object defines the fields used in the <b>createAdByListingId</b> request.

    try:
        api_response = api_instance.create_ad_by_listing_id(campaign_id, create_ad_request)
        print("The response of AdApi->create_ad_by_listing_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->create_ad_by_listing_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 
 **create_ad_request** | [**CreateAdRequest**](CreateAdRequest.md)| This request object defines the fields used in the &lt;b&gt;createAdByListingId&lt;/b&gt; request. | 

### Return type

**object**

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location -  <br>  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Business error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_ads_by_inventory_reference**
> AdReferences create_ads_by_inventory_reference(campaign_id, create_ads_by_inventory_reference_request)



This method adds a listing that is managed with the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a> to an existing Promoted Listings campaign.<br /><br />For Promoted Listings Standard (PLS) campaigns using the Cost Per Sale (CPS) funding model, an ad may be directly created for the listing.<br /><br />For each listing specified in the request, this method:<br /><ul><li>Creates an ad for the listing.</li> <li>Sets the bid percentage (also known as the <i>ad rate</i>) for the ads created.</li> <li>Associates the created ad with the specified campaign.</li></ul><br />To create an ad for a listing, specify its <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b>, plus the <b>bidPercentage</b> for the ad in the payload of the request. Specify the campaign to associate the ad with using the <b>campaign_id</b> path parameter.<br /><br /><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />Use <a href=\"/api-docs/sell/marketing/resources/campaign/methods/createCampaign\">createCampaign</a> to create a new campaign and use <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to get a list of existing campaigns.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.ad_references import AdReferences
from openapi_client.models.create_ads_by_inventory_reference_request import CreateAdsByInventoryReferenceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>
    create_ads_by_inventory_reference_request = openapi_client.CreateAdsByInventoryReferenceRequest() # CreateAdsByInventoryReferenceRequest | This request object defines the fields used in the <b>createAdsByInventoryReference</b> request.

    try:
        api_response = api_instance.create_ads_by_inventory_reference(campaign_id, create_ads_by_inventory_reference_request)
        print("The response of AdApi->create_ads_by_inventory_reference:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->create_ads_by_inventory_reference: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 
 **create_ads_by_inventory_reference_request** | [**CreateAdsByInventoryReferenceRequest**](CreateAdsByInventoryReferenceRequest.md)| This request object defines the fields used in the &lt;b&gt;createAdsByInventoryReference&lt;/b&gt; request. | 

### Return type

[**AdReferences**](AdReferences.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_ad**
> delete_ad(ad_id, campaign_id)



This method removes the specified ad from the specified campaign.<br /><br />Pass the ID of the ad to delete with the ID of the campaign associated with the ad as path parameters to the call.<br /><br />Call <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to get the current list of the seller's campaign IDs.<br /><br /><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the <b>bulkUpdateAdsStatusByListingId</b> method to change the status of ads to ARCHIVED.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    ad_id = 'ad_id_example' # str | Identifier of an ad. This ID was generated when the ad was created.
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>

    try:
        api_instance.delete_ad(ad_id, campaign_id)
    except Exception as e:
        print("Exception when calling AdApi->delete_ad: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ad_id** | **str**| Identifier of an ad. This ID was generated when the ad was created. | 
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 

### Return type

void (empty response body)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_ads_by_inventory_reference**
> AdIds delete_ads_by_inventory_reference(campaign_id, delete_ads_by_inventory_reference_request)



This method works with listings that are managed with the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a>.  <p>The method deletes ads using a list of seller-defined inventory reference IDs, used with the Inventory API, that are associated with the specified campaign ID.</p> <p>Specify the campaign ID (as a path parameter) and a list of <b>inventoryReferenceId</b> and <b>inventoryReferenceType</b> pairs to be deleted.</p>  <p>Call <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to get a list of the seller's current campaign IDs.</p><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span><br /><br />When using the CPC funding model, use the bulkUpdateAdsStatusByInventoryReference method to change the status of ads to ARCHIVED.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.ad_ids import AdIds
from openapi_client.models.delete_ads_by_inventory_reference_request import DeleteAdsByInventoryReferenceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>
    delete_ads_by_inventory_reference_request = openapi_client.DeleteAdsByInventoryReferenceRequest() # DeleteAdsByInventoryReferenceRequest | This request object defines the fields for the <b>deleteAdsByInventoryReference</b> request.

    try:
        api_response = api_instance.delete_ads_by_inventory_reference(campaign_id, delete_ads_by_inventory_reference_request)
        print("The response of AdApi->delete_ads_by_inventory_reference:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->delete_ads_by_inventory_reference: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 
 **delete_ads_by_inventory_reference_request** | [**DeleteAdsByInventoryReferenceRequest**](DeleteAdsByInventoryReferenceRequest.md)| This request object defines the fields for the &lt;b&gt;deleteAdsByInventoryReference&lt;/b&gt; request. | 

### Return type

[**AdIds**](AdIds.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ad**
> Ad get_ad(ad_id, campaign_id)



This method retrieves the specified ad from the specified campaign.  <p>In the request, supply the <b>campaign_id</b> and <b>ad_id</b> as path parameters.</p> <p>Call <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to retrieve a list of the seller's current campaign IDs and call <a href=\"/api-docs/sell/marketing/resources/ad/methods/getAds\">getAds</a> to retrieve their current ad IDs.</p>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.ad import Ad
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    ad_id = 'ad_id_example' # str | A unique identifier for an ad. This ID is generated when the ad is created.
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>

    try:
        api_response = api_instance.get_ad(ad_id, campaign_id)
        print("The response of AdApi->get_ad:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->get_ad: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ad_id** | **str**| A unique identifier for an ad. This ID is generated when the ad is created. | 
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 

### Return type

[**Ad**](Ad.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Business error |  -  |
**500** | Internal Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ads**
> AdPagedCollectionResponse get_ads(campaign_id, ad_group_ids=ad_group_ids, ad_status=ad_status, limit=limit, listing_ids=listing_ids, offset=offset)



This method retrieves Promoted Listings ads that are associated with listings created with either the <a href=\"/Devzone/XML/docs/Reference/eBay/index.html\" title=\"Trading API Reference\">Trading API</a> or the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a>. <p>The method retrieves ads related to the specified campaign. Specify the Promoted Listings campaign to target with the <b>campaign_id</b> path parameter.</p>  <p>Because of the large number of possible results, you can use query parameters to paginate the result set by specifying a <b>limit</b>, which dictates how many ads to return on each page of the response. You can also specify how many ads to skip in the result set before returning the first result using the <b>offset</b> path parameter.</p>  <p>Call <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to retrieve the current campaign IDs for the seller.</p>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.ad_paged_collection_response import AdPagedCollectionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>
    ad_group_ids = 'ad_group_ids_example' # str | A comma-separated list of ad group IDs. The results will be filtered to only include active ads for these ad groups. Call <a href=\"/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups\">getAdGroups</a> to retrieve the ad group ID for the ad group.<br /><br /><span class=\"tablenote\"><b>Note:</b> This field only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span> (optional)
    ad_status = 'ad_status_example' # str | A comma-separated list of ad statuses. The results will be filtered to only include the given statuses of the ad. If none are provided, all ads are returned. (optional)
    limit = 'limit_example' # str | Specifies the maximum number of ads to return on a page in the paginated response. <p><b>Default: </b>10 <br><b>Maximum:</b> 500</p> (optional)
    listing_ids = 'listing_ids_example' # str | A comma-separated list of listing IDs. The response includes only active ads (ads associated with a RUNNING campaign). The results do not include listing IDs that are excluded by other conditions. (optional)
    offset = 'offset_example' # str | Specifies the number of ads to skip in the result set before returning the first ad in the paginated response.  <p>Combine <b>offset</b> with the <b>limit</b> query parameter to control the items returned in the response. For example, if you supply an <b>offset</b> of <code>0</code> and a <b>limit</b> of <code>10</code>, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If <b>offset</b> is <code>10</code> and <b>limit</b> is <code>20</code>, the first page of the response contains items 11-30 from the complete result set.</p> <p><b>Default:</b> 0</p> (optional)

    try:
        api_response = api_instance.get_ads(campaign_id, ad_group_ids=ad_group_ids, ad_status=ad_status, limit=limit, listing_ids=listing_ids, offset=offset)
        print("The response of AdApi->get_ads:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->get_ads: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 
 **ad_group_ids** | **str**| A comma-separated list of ad group IDs. The results will be filtered to only include active ads for these ad groups. Call &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups\&quot;&gt;getAdGroups&lt;/a&gt; to retrieve the ad group ID for the ad group.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; This field only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.&lt;/span&gt; | [optional] 
 **ad_status** | **str**| A comma-separated list of ad statuses. The results will be filtered to only include the given statuses of the ad. If none are provided, all ads are returned. | [optional] 
 **limit** | **str**| Specifies the maximum number of ads to return on a page in the paginated response. &lt;p&gt;&lt;b&gt;Default: &lt;/b&gt;10 &lt;br&gt;&lt;b&gt;Maximum:&lt;/b&gt; 500&lt;/p&gt; | [optional] 
 **listing_ids** | **str**| A comma-separated list of listing IDs. The response includes only active ads (ads associated with a RUNNING campaign). The results do not include listing IDs that are excluded by other conditions. | [optional] 
 **offset** | **str**| Specifies the number of ads to skip in the result set before returning the first ad in the paginated response.  &lt;p&gt;Combine &lt;b&gt;offset&lt;/b&gt; with the &lt;b&gt;limit&lt;/b&gt; query parameter to control the items returned in the response. For example, if you supply an &lt;b&gt;offset&lt;/b&gt; of &lt;code&gt;0&lt;/code&gt; and a &lt;b&gt;limit&lt;/b&gt; of &lt;code&gt;10&lt;/code&gt;, the first page of the response contains the first 10 items from the complete list of items retrieved by the call. If &lt;b&gt;offset&lt;/b&gt; is &lt;code&gt;10&lt;/code&gt; and &lt;b&gt;limit&lt;/b&gt; is &lt;code&gt;20&lt;/code&gt;, the first page of the response contains items 11-30 from the complete result set.&lt;/p&gt; &lt;p&gt;&lt;b&gt;Default:&lt;/b&gt; 0&lt;/p&gt; | [optional] 

### Return type

[**AdPagedCollectionResponse**](AdPagedCollectionResponse.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ads_by_inventory_reference**
> Ads get_ads_by_inventory_reference(campaign_id, inventory_reference_id, inventory_reference_type)



This method retrieves Promoted Listings ads associated with listings that are managed with the <a href=\"/api-docs/sell/inventory/resources/methods\" title=\"Inventory API Reference\">Inventory API</a> from the specified campaign.<br /><br />Supply the <b>campaign_id</b> as a path parameter and use query parameters to specify the <b>inventory_reference_id</b> and <b>inventory_reference_type</b> pairs.<br /><br />In the Inventory API, an <i>inventory reference ID</i> is either a seller-defined <b>SKU</b> value or an <b>inventoryItemGroupKey</b> (a seller-defined ID for an inventory item group, which is an entity that's used in the Inventory API to create a multiple-variation listing). To indicate a listing managed by the Inventory API, you must always specify both an <b>inventory_reference_id</b> and the associated <b>inventory_reference_type</b>.<br /><br />Call <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to retrieve all of the seller's the current campaign IDs.<br /><br /><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.ads import Ads
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>
    inventory_reference_id = 'inventory_reference_id_example' # str | The inventory reference ID associated with the ad you want returned. A seller's inventory reference ID is the ID of either a listing or the ID of an inventory item group (the parent of a multi-variation listing, such as a shirt that is available in multiple sizes and colors). You must always supply in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>.
    inventory_reference_type = 'inventory_reference_type_example' # str | The type of the inventory reference ID. Set this value to either <code>INVENTORY_ITEM</CODE> (a single listing) or <code>INVENTORY_ITEM_GROUP</CODE> (a multi-variation listing). You must always pass in both an <b>inventory_reference_id</b> and an <b>inventory_reference_type</b>. 

    try:
        api_response = api_instance.get_ads_by_inventory_reference(campaign_id, inventory_reference_id, inventory_reference_type)
        print("The response of AdApi->get_ads_by_inventory_reference:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdApi->get_ads_by_inventory_reference: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 
 **inventory_reference_id** | **str**| The inventory reference ID associated with the ad you want returned. A seller&#39;s inventory reference ID is the ID of either a listing or the ID of an inventory item group (the parent of a multi-variation listing, such as a shirt that is available in multiple sizes and colors). You must always supply in both an &lt;b&gt;inventory_reference_id&lt;/b&gt; and an &lt;b&gt;inventory_reference_type&lt;/b&gt;. | 
 **inventory_reference_type** | **str**| The type of the inventory reference ID. Set this value to either &lt;code&gt;INVENTORY_ITEM&lt;/CODE&gt; (a single listing) or &lt;code&gt;INVENTORY_ITEM_GROUP&lt;/CODE&gt; (a multi-variation listing). You must always pass in both an &lt;b&gt;inventory_reference_id&lt;/b&gt; and an &lt;b&gt;inventory_reference_type&lt;/b&gt;.  | 

### Return type

[**Ads**](Ads.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Business error |  -  |
**500** | Internal Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_bid**
> update_bid(ad_id, campaign_id, update_bid_percentage_request)



This method updates the bid percentage (also known as the \"ad rate\") for the specified ad in the specified campaign. <p>In the request, supply the <b>campaign_id</b> and <b>ad_id</b> as path parameters, and supply the new <b>bidPercentage</b> value in the payload of the call.</p>  <p>Call <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> to retrieve a seller's current campaign IDs and call <a href=\"/api-docs/sell/marketing/resources/ad/methods/getAds\">getAds</a> to get their ad IDs.</p><span class=\"tablenote\"><b>Note:</b> This method only applies to the Cost Per Sale (CPS) funding model; it does not apply to the Cost Per Click (CPC) funding model. See <a href=\"/api-docs/sell/static/marketing/pl-overview.html#funding-model\">Funding Models</a> in the <i>Promoted Listings Playbook</i> for more information.</span>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.update_bid_percentage_request import UpdateBidPercentageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdApi(api_client)
    ad_id = 'ad_id_example' # str | A unique eBay-assigned ID for an ad that's generated when an ad is created.
    campaign_id = 'campaign_id_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br /><span class=\"tablenote\"><b>Note:</b> You can retrieve the campaign IDs for a specified seller using the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method.</span>
    update_bid_percentage_request = openapi_client.UpdateBidPercentageRequest() # UpdateBidPercentageRequest | This type defines the fields for the <b>updateBid</b> request.

    try:
        api_instance.update_bid(ad_id, campaign_id, update_bid_percentage_request)
    except Exception as e:
        print("Exception when calling AdApi->update_bid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ad_id** | **str**| A unique eBay-assigned ID for an ad that&#39;s generated when an ad is created. | 
 **campaign_id** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; You can retrieve the campaign IDs for a specified seller using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; method.&lt;/span&gt; | 
 **update_bid_percentage_request** | [**UpdateBidPercentageRequest**](UpdateBidPercentageRequest.md)| This type defines the fields for the &lt;b&gt;updateBid&lt;/b&gt; request. | 

### Return type

void (empty response body)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

