# openapi_client.MarketplacenotesApi

All URIs are relative to *https://www.googleapis.com/adexchangebuyer/v1.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adexchangebuyer_marketplacenotes_insert**](MarketplacenotesApi.md#adexchangebuyer_marketplacenotes_insert) | **POST** /proposals/{proposalId}/notes/insert | 
[**adexchangebuyer_marketplacenotes_list**](MarketplacenotesApi.md#adexchangebuyer_marketplacenotes_list) | **GET** /proposals/{proposalId}/notes | 


# **adexchangebuyer_marketplacenotes_insert**
> AddOrderNotesResponse adexchangebuyer_marketplacenotes_insert(proposal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, add_order_notes_request=add_order_notes_request)



Add notes to the proposal

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.add_order_notes_request import AddOrderNotesRequest
from openapi_client.models.add_order_notes_response import AddOrderNotesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/adexchangebuyer/v1.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/adexchangebuyer/v1.4"
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
    api_instance = openapi_client.MarketplacenotesApi(api_client)
    proposal_id = 'proposal_id_example' # str | The proposalId to add notes for.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    add_order_notes_request = openapi_client.AddOrderNotesRequest() # AddOrderNotesRequest |  (optional)

    try:
        api_response = api_instance.adexchangebuyer_marketplacenotes_insert(proposal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, add_order_notes_request=add_order_notes_request)
        print("The response of MarketplacenotesApi->adexchangebuyer_marketplacenotes_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketplacenotesApi->adexchangebuyer_marketplacenotes_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposal_id** | **str**| The proposalId to add notes for. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **add_order_notes_request** | [**AddOrderNotesRequest**](AddOrderNotesRequest.md)|  | [optional] 

### Return type

[**AddOrderNotesResponse**](AddOrderNotesResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adexchangebuyer_marketplacenotes_list**
> GetOrderNotesResponse adexchangebuyer_marketplacenotes_list(proposal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, pql_query=pql_query)



Get all the notes associated with a proposal

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_order_notes_response import GetOrderNotesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/adexchangebuyer/v1.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/adexchangebuyer/v1.4"
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
    api_instance = openapi_client.MarketplacenotesApi(api_client)
    proposal_id = 'proposal_id_example' # str | The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    pql_query = 'pql_query_example' # str | Query string to retrieve specific notes. To search the text contents of notes, please use syntax like \"WHERE note.note = \"foo\" or \"WHERE note.note LIKE \"%bar%\" (optional)

    try:
        api_response = api_instance.adexchangebuyer_marketplacenotes_list(proposal_id, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, pql_query=pql_query)
        print("The response of MarketplacenotesApi->adexchangebuyer_marketplacenotes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketplacenotesApi->adexchangebuyer_marketplacenotes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposal_id** | **str**| The proposalId to get notes for. To search across all proposals specify order_id &#x3D; &#39;-&#39; as part of the URL. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **pql_query** | **str**| Query string to retrieve specific notes. To search the text contents of notes, please use syntax like \&quot;WHERE note.note &#x3D; \&quot;foo\&quot; or \&quot;WHERE note.note LIKE \&quot;%bar%\&quot; | [optional] 

### Return type

[**GetOrderNotesResponse**](GetOrderNotesResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

