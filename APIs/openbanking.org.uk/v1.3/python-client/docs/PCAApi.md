# openapi_client.PCAApi

All URIs are relative to *https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personal_current_accounts_get**](PCAApi.md#personal_current_accounts_get) | **GET** /personal-current-accounts | 
[**personal_current_accounts_head**](PCAApi.md#personal_current_accounts_head) | **HEAD** /personal-current-accounts | 


# **personal_current_accounts_get**
> PersonalCurrentAccountsGet200Response personal_current_accounts_get(if_modified_since=if_modified_since, if_none_match=if_none_match)



Gets a list of all `Personal Current Account` objects.

### Example


```python
import openapi_client
from openapi_client.models.personal_current_accounts_get200_response import PersonalCurrentAccountsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PCAApi(api_client)
    if_modified_since = 'if_modified_since_example' # str | Used for conditional request, to retrieve data only if modified since a given date (optional)
    if_none_match = 'if_none_match_example' # str | Used for conditional request, to retrieve data only if the given Etag value does not match (optional)

    try:
        api_response = api_instance.personal_current_accounts_get(if_modified_since=if_modified_since, if_none_match=if_none_match)
        print("The response of PCAApi->personal_current_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PCAApi->personal_current_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **if_modified_since** | **str**| Used for conditional request, to retrieve data only if modified since a given date | [optional] 
 **if_none_match** | **str**| Used for conditional request, to retrieve data only if the given Etag value does not match | [optional] 

### Return type

[**PersonalCurrentAccountsGet200Response**](PersonalCurrentAccountsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v1.3+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of &#x60;Personal Current Account&#x60; data |  * Cache-Control - Describes how long this response can be cached <br>  * Etag - A unique ID identifying whether this resource has changed <br>  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**400** | You have sent a request which could not be understood. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**408** | Your client has failed to submit a request, and a timeout has occurred. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**429** | You have requested this resource too often. Slow down. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**500** | An error occurred on the server. No further information is available. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**503** | The service is temporarily unavailable. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**0** | A standard error response. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personal_current_accounts_head**
> object personal_current_accounts_head(if_modified_since=if_modified_since, if_none_match=if_none_match)



Gets header information on the current set of `Personal Current Account` data

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PCAApi(api_client)
    if_modified_since = 'if_modified_since_example' # str | Used for conditional request, to retrieve data only if modified since a given date (optional)
    if_none_match = 'if_none_match_example' # str | Used for conditional request, to retrieve data only if the given Etag value does not match (optional)

    try:
        api_response = api_instance.personal_current_accounts_head(if_modified_since=if_modified_since, if_none_match=if_none_match)
        print("The response of PCAApi->personal_current_accounts_head:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PCAApi->personal_current_accounts_head: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **if_modified_since** | **str**| Used for conditional request, to retrieve data only if modified since a given date | [optional] 
 **if_none_match** | **str**| Used for conditional request, to retrieve data only if the given Etag value does not match | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v1.3+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | No response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

