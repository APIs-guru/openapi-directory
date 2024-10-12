# openapi_client.SourceOauthApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_source_o_auth**](SourceOauthApi.md#complete_source_o_auth) | **POST** /v1/source_oauths/complete_oauth | Given a source def ID generate an access/refresh token etc.
[**get_source_o_auth_consent**](SourceOauthApi.md#get_source_o_auth_consent) | **POST** /v1/source_oauths/get_consent_url | Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
[**set_instancewide_source_oauth_params**](SourceOauthApi.md#set_instancewide_source_oauth_params) | **POST** /v1/source_oauths/oauth_params/create | Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector&#39;s configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company&#39;s Google Ads developer_token, client_id, and client_secret without the user having to know about these variables. 


# **complete_source_o_auth**
> Dict[str, object] complete_source_o_auth(complete_source_oauth_request)

Given a source def ID generate an access/refresh token etc.

### Example


```python
import openapi_client
from openapi_client.models.complete_source_oauth_request import CompleteSourceOauthRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourceOauthApi(api_client)
    complete_source_oauth_request = openapi_client.CompleteSourceOauthRequest() # CompleteSourceOauthRequest | 

    try:
        # Given a source def ID generate an access/refresh token etc.
        api_response = api_instance.complete_source_o_auth(complete_source_oauth_request)
        print("The response of SourceOauthApi->complete_source_o_auth:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceOauthApi->complete_source_o_auth: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **complete_source_oauth_request** | [**CompleteSourceOauthRequest**](CompleteSourceOauthRequest.md)|  | 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_source_o_auth_consent**
> OAuthConsentRead get_source_o_auth_consent(source_oauth_consent_request)

Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example


```python
import openapi_client
from openapi_client.models.o_auth_consent_read import OAuthConsentRead
from openapi_client.models.source_oauth_consent_request import SourceOauthConsentRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourceOauthApi(api_client)
    source_oauth_consent_request = openapi_client.SourceOauthConsentRequest() # SourceOauthConsentRequest | 

    try:
        # Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
        api_response = api_instance.get_source_o_auth_consent(source_oauth_consent_request)
        print("The response of SourceOauthApi->get_source_o_auth_consent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SourceOauthApi->get_source_o_auth_consent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_oauth_consent_request** | [**SourceOauthConsentRequest**](SourceOauthConsentRequest.md)|  | 

### Return type

[**OAuthConsentRead**](OAuthConsentRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_instancewide_source_oauth_params**
> set_instancewide_source_oauth_params(set_instancewide_source_oauth_params_request_body)

Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables. 

### Example


```python
import openapi_client
from openapi_client.models.set_instancewide_source_oauth_params_request_body import SetInstancewideSourceOauthParamsRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SourceOauthApi(api_client)
    set_instancewide_source_oauth_params_request_body = openapi_client.SetInstancewideSourceOauthParamsRequestBody() # SetInstancewideSourceOauthParamsRequestBody | 

    try:
        # Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables. 
        api_instance.set_instancewide_source_oauth_params(set_instancewide_source_oauth_params_request_body)
    except Exception as e:
        print("Exception when calling SourceOauthApi->set_instancewide_source_oauth_params: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set_instancewide_source_oauth_params_request_body** | [**SetInstancewideSourceOauthParamsRequestBody**](SetInstancewideSourceOauthParamsRequestBody.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |
**400** | Exception occurred; see message for details. |  -  |
**404** | Object with given id was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

