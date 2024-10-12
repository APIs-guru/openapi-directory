# openapi_client.NegativeKeywordApi

All URIs are relative to *https://api.ebay.com/sell/marketing/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulk_create_negative_keyword**](NegativeKeywordApi.md#bulk_create_negative_keyword) | **POST** /bulk_create_negative_keyword | 
[**bulk_update_negative_keyword**](NegativeKeywordApi.md#bulk_update_negative_keyword) | **POST** /bulk_update_negative_keyword | 
[**create_negative_keyword**](NegativeKeywordApi.md#create_negative_keyword) | **POST** /negative_keyword | 
[**get_negative_keyword**](NegativeKeywordApi.md#get_negative_keyword) | **GET** /negative_keyword/{negative_keyword_id} | 
[**get_negative_keywords**](NegativeKeywordApi.md#get_negative_keywords) | **GET** /negative_keyword | 
[**update_negative_keyword**](NegativeKeywordApi.md#update_negative_keyword) | **PUT** /negative_keyword/{negative_keyword_id} | 


# **bulk_create_negative_keyword**
> BulkCreateNegativeKeywordResponse bulk_create_negative_keyword(bulk_create_negative_keyword_request)



<span class=\"tablenote\"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href=\"/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests \" target=\"_blank \"> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href=\"/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility \" target=\"_blank \">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds negative keywords, in bulk, to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />Specify the <b>campaignId</b> and <b>adGroupId</b> in the request body, along with the <b>negativeKeywordText</b> and <b>negativeKeywordMatchType</b>.<br /><br />Call the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_create_negative_keyword_request import BulkCreateNegativeKeywordRequest
from openapi_client.models.bulk_create_negative_keyword_response import BulkCreateNegativeKeywordResponse
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
    api_instance = openapi_client.NegativeKeywordApi(api_client)
    bulk_create_negative_keyword_request = openapi_client.BulkCreateNegativeKeywordRequest() # BulkCreateNegativeKeywordRequest | A type that defines the fields for the bulk request to create negative keywords.

    try:
        api_response = api_instance.bulk_create_negative_keyword(bulk_create_negative_keyword_request)
        print("The response of NegativeKeywordApi->bulk_create_negative_keyword:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NegativeKeywordApi->bulk_create_negative_keyword: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulk_create_negative_keyword_request** | [**BulkCreateNegativeKeywordRequest**](BulkCreateNegativeKeywordRequest.md)| A type that defines the fields for the bulk request to create negative keywords. | 

### Return type

[**BulkCreateNegativeKeywordResponse**](BulkCreateNegativeKeywordResponse.md)

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
**403** | Forbidden |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bulk_update_negative_keyword**
> BulkUpdateNegativeKeywordResponse bulk_update_negative_keyword(bulk_update_negative_keyword_request)



<span class=\"tablenote\"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href=\"/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests \" target=\"_blank \"> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href=\"/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility \" target=\"_blank \">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the statuses of existing negative keywords, in bulk.<br /><br />Specify the <b>negativeKeywordId</b> and <b>negativeKeywordStatus</b> in the request body.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.bulk_update_negative_keyword_request import BulkUpdateNegativeKeywordRequest
from openapi_client.models.bulk_update_negative_keyword_response import BulkUpdateNegativeKeywordResponse
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
    api_instance = openapi_client.NegativeKeywordApi(api_client)
    bulk_update_negative_keyword_request = openapi_client.BulkUpdateNegativeKeywordRequest() # BulkUpdateNegativeKeywordRequest | A type that defines the fields for the bulk request to update negative keyword statuses.

    try:
        api_response = api_instance.bulk_update_negative_keyword(bulk_update_negative_keyword_request)
        print("The response of NegativeKeywordApi->bulk_update_negative_keyword:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NegativeKeywordApi->bulk_update_negative_keyword: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulk_update_negative_keyword_request** | [**BulkUpdateNegativeKeywordRequest**](BulkUpdateNegativeKeywordRequest.md)| A type that defines the fields for the bulk request to update negative keyword statuses. | 

### Return type

[**BulkUpdateNegativeKeywordResponse**](BulkUpdateNegativeKeywordResponse.md)

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
**403** | Forbidden |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_negative_keyword**
> object create_negative_keyword(create_negative_keyword_request)



<span class=\"tablenote\"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href=\"/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests \" target=\"_blank \"> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href=\"/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility \" target=\"_blank \">getAdvertisingEligibility</a> method in Account API.</span><br />This method adds a negative keyword to an existing ad group in a PLA campaign that uses the Cost Per Click (CPC) funding model.<br /><br />Specify the <b>campaignId</b> and <b>adGroupId</b> in the request body, along with the <b>negativeKeywordText</b> and <b>negativeKeywordMatchType</b>.<br /><br />Call the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method to retrieve a list of current campaign IDs for a specified seller.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.create_negative_keyword_request import CreateNegativeKeywordRequest
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
    api_instance = openapi_client.NegativeKeywordApi(api_client)
    create_negative_keyword_request = openapi_client.CreateNegativeKeywordRequest() # CreateNegativeKeywordRequest | A type that defines the fields for the request to create a negative keyword.

    try:
        api_response = api_instance.create_negative_keyword(create_negative_keyword_request)
        print("The response of NegativeKeywordApi->create_negative_keyword:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NegativeKeywordApi->create_negative_keyword: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_negative_keyword_request** | [**CreateNegativeKeywordRequest**](CreateNegativeKeywordRequest.md)| A type that defines the fields for the request to create a negative keyword. | 

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
**403** | Forbidden |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_negative_keyword**
> NegativeKeyword get_negative_keyword(negative_keyword_id)



<span class=\"tablenote\"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href=\"/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests \" target=\"_blank \"> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href=\"/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility \" target=\"_blank \">getAdvertisingEligibility</a> method in Account API.</span><br />This method retrieves details on a specific negative keyword.<br /><br />In the request, specify the <b>negative_keyword_id</b> as a path parameter.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.negative_keyword import NegativeKeyword
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
    api_instance = openapi_client.NegativeKeywordApi(api_client)
    negative_keyword_id = 'negative_keyword_id_example' # str | The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href=\"/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword\">createNegativeKeyword</a> method.

    try:
        api_response = api_instance.get_negative_keyword(negative_keyword_id)
        print("The response of NegativeKeywordApi->get_negative_keyword:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NegativeKeywordApi->get_negative_keyword: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **negative_keyword_id** | **str**| The unique identifier for the negative keyword.&lt;br /&gt;&lt;br /&gt;This value is returned in the &lt;b&gt;Location&lt;/b&gt; response header from the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword\&quot;&gt;createNegativeKeyword&lt;/a&gt; method. | 

### Return type

[**NegativeKeyword**](NegativeKeyword.md)

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
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_negative_keywords**
> NegativeKeywordPagedCollectionResponse get_negative_keywords(ad_group_ids=ad_group_ids, campaign_ids=campaign_ids, limit=limit, negative_keyword_status=negative_keyword_status, offset=offset)



<span class=\"tablenote\"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href=\"/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests \" target=\"_blank \"> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href=\"/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility \" target=\"_blank \">getAdvertisingEligibility</a> method in Account API.</span><br />This method can be used to retrieve all of the negative keywords for ad groups in PLA campaigns that use the Cost Per Click (CPC) funding model.<br /><br />The results can be filtered using the <b>campaign_ids</b>, <b>ad_group_ids</b>, and <b>negative_keyword_status</b> query parameters.<br /><br />Call the <a href=\"/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\">getCampaigns</a> method to retrieve a list of current campaign IDs for a seller.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.negative_keyword_paged_collection_response import NegativeKeywordPagedCollectionResponse
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
    api_instance = openapi_client.NegativeKeywordApi(api_client)
    ad_group_ids = 'ad_group_ids_example' # str | A comma-separated list of ad group IDs.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from one or more specific ad groups. The results might not include these ad group IDs if other search conditions exclude them.<br /><br /><span class=\"tablenote\"><b>Note:</b>You can call the <a href=\"/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups\">getAdGroups</a> method to retrieve the ad group IDs for a seller.</span><br /><br /><i>Required if</i> the search results must be filtered to include negative keywords created at the ad group level. (optional)
    campaign_ids = 'campaign_ids_example' # str | A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.<br /><br />This query parameter is used if the seller wants to retrieve the negative keywords from a specific campaign. The results might not include these campaign IDs if other search conditions exclude them.<br /><br /><span class=\"tablenote\"><b>Note:</b> Currently, only one campaign ID value is supported for each request.</span> (optional)
    limit = 'limit_example' # str | The number of results, from the current result set, to be returned in a single page. (optional)
    negative_keyword_status = 'negative_keyword_status_example' # str | A comma-separated list of negative keyword statuses.<br /><br />This query parameter is used if the seller wants to filter the search results based on one or more negative keyword statuses. (optional)
    offset = 'offset_example' # str | The number of results that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned. (optional)

    try:
        api_response = api_instance.get_negative_keywords(ad_group_ids=ad_group_ids, campaign_ids=campaign_ids, limit=limit, negative_keyword_status=negative_keyword_status, offset=offset)
        print("The response of NegativeKeywordApi->get_negative_keywords:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NegativeKeywordApi->get_negative_keywords: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ad_group_ids** | **str**| A comma-separated list of ad group IDs.&lt;br /&gt;&lt;br /&gt;This query parameter is used if the seller wants to retrieve the negative keywords from one or more specific ad groups. The results might not include these ad group IDs if other search conditions exclude them.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt;You can call the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/adgroup/methods/getAdGroups\&quot;&gt;getAdGroups&lt;/a&gt; method to retrieve the ad group IDs for a seller.&lt;/span&gt;&lt;br /&gt;&lt;br /&gt;&lt;i&gt;Required if&lt;/i&gt; the search results must be filtered to include negative keywords created at the ad group level. | [optional] 
 **campaign_ids** | **str**| A unique eBay-assigned ID for an ad campaign that is generated when a campaign is created.&lt;br /&gt;&lt;br /&gt;This query parameter is used if the seller wants to retrieve the negative keywords from a specific campaign. The results might not include these campaign IDs if other search conditions exclude them.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; Currently, only one campaign ID value is supported for each request.&lt;/span&gt; | [optional] 
 **limit** | **str**| The number of results, from the current result set, to be returned in a single page. | [optional] 
 **negative_keyword_status** | **str**| A comma-separated list of negative keyword statuses.&lt;br /&gt;&lt;br /&gt;This query parameter is used if the seller wants to filter the search results based on one or more negative keyword statuses. | [optional] 
 **offset** | **str**| The number of results that will be skipped in the result set. This is used with the &lt;b&gt;limit&lt;/b&gt; field to control the pagination of the output.&lt;br /&gt;&lt;br /&gt;For example, if the &lt;b&gt;offset&lt;/b&gt; is set to &lt;code&gt;0&lt;/code&gt; and the &lt;b&gt;limit&lt;/b&gt; is set to &lt;code&gt;10&lt;/code&gt;, the method will retrieve items 1 through 10 from the list of items returned. If the &lt;b&gt;offset&lt;/b&gt; is set to &lt;code&gt;10&lt;/code&gt; and the &lt;b&gt;limit&lt;/b&gt; is set to &lt;code&gt;10&lt;/code&gt;, the method will retrieve items 11 through 20 from the list of items returned. | [optional] 

### Return type

[**NegativeKeywordPagedCollectionResponse**](NegativeKeywordPagedCollectionResponse.md)

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
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_negative_keyword**
> update_negative_keyword(negative_keyword_id, update_negative_keyword_request)



<span class=\"tablenote\"><b>Note:</b> This method is only available for select partners who have been approved for the eBay Promoted Listings Advanced (PLA) program. For information about how to request access to this program, refer to <a href=\"/api-docs/sell/static/marketing/pl-verify-eligibility.html#access-requests \" target=\"_blank \"> Promoted Listings Advanced Access Requests</a> in the Promoted Listings Playbook. To determine if a seller qualifies for PLA, use the <a href=\"/api-docs/sell/account/resources/advertising_eligibility/methods/getAdvertisingEligibility \" target=\"_blank \">getAdvertisingEligibility</a> method in Account API.</span><br />This method updates the status of an existing negative keyword.<br /><br />Specify the <b>negative_keyword_id</b> as a path parameter, and specify the <b>negativeKeywordStatus</b> in the request body.

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.update_negative_keyword_request import UpdateNegativeKeywordRequest
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
    api_instance = openapi_client.NegativeKeywordApi(api_client)
    negative_keyword_id = 'negative_keyword_id_example' # str | The unique identifier for the negative keyword.<br /><br />This value is returned in the <b>Location</b> response header from the <a href=\"/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword\">createNegativeKeyword</a> method.
    update_negative_keyword_request = openapi_client.UpdateNegativeKeywordRequest() # UpdateNegativeKeywordRequest | A type that defines the fields for the request to update a negative keyword.

    try:
        api_instance.update_negative_keyword(negative_keyword_id, update_negative_keyword_request)
    except Exception as e:
        print("Exception when calling NegativeKeywordApi->update_negative_keyword: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **negative_keyword_id** | **str**| The unique identifier for the negative keyword.&lt;br /&gt;&lt;br /&gt;This value is returned in the &lt;b&gt;Location&lt;/b&gt; response header from the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/negative_keyword/methods/createNegativeKeyword\&quot;&gt;createNegativeKeyword&lt;/a&gt; method. | 
 **update_negative_keyword_request** | [**UpdateNegativeKeywordRequest**](UpdateNegativeKeywordRequest.md)| A type that defines the fields for the request to update a negative keyword. | 

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
**204** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Business error |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

