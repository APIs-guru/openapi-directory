# openapi_client.CCCApi

All URIs are relative to *https://developer.openbanking.org.uk/reference-implementation/open-banking/v1.3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commercial_credit_cards_get**](CCCApi.md#commercial_credit_cards_get) | **GET** /commercial-credit-cards | 
[**commercial_credit_cards_head**](CCCApi.md#commercial_credit_cards_head) | **HEAD** /commercial-credit-cards | 


# **commercial_credit_cards_get**
> CommercialCreditCardsGet200Response commercial_credit_cards_get(if_modified_since=if_modified_since, if_none_match=if_none_match)



Gets a list of all `Commerical Credit Card` objects.

### Example


```python
import openapi_client
from openapi_client.models.commercial_credit_cards_get200_response import CommercialCreditCardsGet200Response
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
    api_instance = openapi_client.CCCApi(api_client)
    if_modified_since = 'if_modified_since_example' # str | Used for conditional request, to retrieve data only if modified since a given date (optional)
    if_none_match = 'if_none_match_example' # str | Used for conditional request, to retrieve data only if the given Etag value does not match (optional)

    try:
        api_response = api_instance.commercial_credit_cards_get(if_modified_since=if_modified_since, if_none_match=if_none_match)
        print("The response of CCCApi->commercial_credit_cards_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CCCApi->commercial_credit_cards_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **if_modified_since** | **str**| Used for conditional request, to retrieve data only if modified since a given date | [optional] 
 **if_none_match** | **str**| Used for conditional request, to retrieve data only if the given Etag value does not match | [optional] 

### Return type

[**CommercialCreditCardsGet200Response**](CommercialCreditCardsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v1.3+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of &#x60;Commercial Credit Card&#x60; data |  * Cache-Control - Describes how long this response can be cached <br>  * Etag - A unique ID identifying whether this resource has changed <br>  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**400** | You have sent a request which could not be understood. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**408** | Your client has failed to submit a request, and a timeout has occurred. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**429** | You have requested this resource too often. Slow down. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**500** | An error occurred on the server. No further information is available. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**503** | The service is temporarily unavailable. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |
**0** | A standard error response. |  * Strict-Transport-Security - HTTPS strict transport security header <br>  * X-Content-Type-Options - Ensures each page has a content type and prevents browsers from doing MIME type sniffing <br>  * X-Frame-Options - Prevent this request from being loaded in any iframes <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commercial_credit_cards_head**
> object commercial_credit_cards_head(if_modified_since=if_modified_since, if_none_match=if_none_match)



Gets header information on the current set of `Commerical Credit Card` data

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
    api_instance = openapi_client.CCCApi(api_client)
    if_modified_since = 'if_modified_since_example' # str | Used for conditional request, to retrieve data only if modified since a given date (optional)
    if_none_match = 'if_none_match_example' # str | Used for conditional request, to retrieve data only if the given Etag value does not match (optional)

    try:
        api_response = api_instance.commercial_credit_cards_head(if_modified_since=if_modified_since, if_none_match=if_none_match)
        print("The response of CCCApi->commercial_credit_cards_head:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CCCApi->commercial_credit_cards_head: %s\n" % e)
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

