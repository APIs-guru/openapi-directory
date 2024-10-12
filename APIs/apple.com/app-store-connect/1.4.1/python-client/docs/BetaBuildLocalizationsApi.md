# openapi_client.BetaBuildLocalizationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beta_build_localizations_build_get_to_one_related**](BetaBuildLocalizationsApi.md#beta_build_localizations_build_get_to_one_related) | **GET** /v1/betaBuildLocalizations/{id}/build | 
[**beta_build_localizations_create_instance**](BetaBuildLocalizationsApi.md#beta_build_localizations_create_instance) | **POST** /v1/betaBuildLocalizations | 
[**beta_build_localizations_delete_instance**](BetaBuildLocalizationsApi.md#beta_build_localizations_delete_instance) | **DELETE** /v1/betaBuildLocalizations/{id} | 
[**beta_build_localizations_get_collection**](BetaBuildLocalizationsApi.md#beta_build_localizations_get_collection) | **GET** /v1/betaBuildLocalizations | 
[**beta_build_localizations_get_instance**](BetaBuildLocalizationsApi.md#beta_build_localizations_get_instance) | **GET** /v1/betaBuildLocalizations/{id} | 
[**beta_build_localizations_update_instance**](BetaBuildLocalizationsApi.md#beta_build_localizations_update_instance) | **PATCH** /v1/betaBuildLocalizations/{id} | 


# **beta_build_localizations_build_get_to_one_related**
> BuildResponse beta_build_localizations_build_get_to_one_related(id, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.build_response import BuildResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaBuildLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.beta_build_localizations_build_get_to_one_related(id, fields_builds=fields_builds)
        print("The response of BetaBuildLocalizationsApi->beta_build_localizations_build_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaBuildLocalizationsApi->beta_build_localizations_build_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BuildResponse**](BuildResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_build_localizations_create_instance**
> BetaBuildLocalizationResponse beta_build_localizations_create_instance(beta_build_localization_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_build_localization_create_request import BetaBuildLocalizationCreateRequest
from openapi_client.models.beta_build_localization_response import BetaBuildLocalizationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaBuildLocalizationsApi(api_client)
    beta_build_localization_create_request = openapi_client.BetaBuildLocalizationCreateRequest() # BetaBuildLocalizationCreateRequest | BetaBuildLocalization representation

    try:
        api_response = api_instance.beta_build_localizations_create_instance(beta_build_localization_create_request)
        print("The response of BetaBuildLocalizationsApi->beta_build_localizations_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaBuildLocalizationsApi->beta_build_localizations_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **beta_build_localization_create_request** | [**BetaBuildLocalizationCreateRequest**](BetaBuildLocalizationCreateRequest.md)| BetaBuildLocalization representation | 

### Return type

[**BetaBuildLocalizationResponse**](BetaBuildLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BetaBuildLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_build_localizations_delete_instance**
> beta_build_localizations_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaBuildLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.beta_build_localizations_delete_instance(id)
    except Exception as e:
        print("Exception when calling BetaBuildLocalizationsApi->beta_build_localizations_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_build_localizations_get_collection**
> BetaBuildLocalizationsResponse beta_build_localizations_get_collection(filter_locale=filter_locale, filter_build=filter_build, fields_beta_build_localizations=fields_beta_build_localizations, limit=limit, include=include, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_build_localizations_response import BetaBuildLocalizationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaBuildLocalizationsApi(api_client)
    filter_locale = ['filter_locale_example'] # List[str] | filter by attribute 'locale' (optional)
    filter_build = ['filter_build_example'] # List[str] | filter by id(s) of related 'build' (optional)
    fields_beta_build_localizations = ['fields_beta_build_localizations_example'] # List[str] | the fields to include for returned resources of type betaBuildLocalizations (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.beta_build_localizations_get_collection(filter_locale=filter_locale, filter_build=filter_build, fields_beta_build_localizations=fields_beta_build_localizations, limit=limit, include=include, fields_builds=fields_builds)
        print("The response of BetaBuildLocalizationsApi->beta_build_localizations_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaBuildLocalizationsApi->beta_build_localizations_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_locale** | [**List[str]**](str.md)| filter by attribute &#39;locale&#39; | [optional] 
 **filter_build** | [**List[str]**](str.md)| filter by id(s) of related &#39;build&#39; | [optional] 
 **fields_beta_build_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type betaBuildLocalizations | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BetaBuildLocalizationsResponse**](BetaBuildLocalizationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of BetaBuildLocalizations |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_build_localizations_get_instance**
> BetaBuildLocalizationResponse beta_build_localizations_get_instance(id, fields_beta_build_localizations=fields_beta_build_localizations, include=include, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_build_localization_response import BetaBuildLocalizationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaBuildLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_build_localizations = ['fields_beta_build_localizations_example'] # List[str] | the fields to include for returned resources of type betaBuildLocalizations (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.beta_build_localizations_get_instance(id, fields_beta_build_localizations=fields_beta_build_localizations, include=include, fields_builds=fields_builds)
        print("The response of BetaBuildLocalizationsApi->beta_build_localizations_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaBuildLocalizationsApi->beta_build_localizations_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_build_localizations** | [**List[str]**](str.md)| the fields to include for returned resources of type betaBuildLocalizations | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BetaBuildLocalizationResponse**](BetaBuildLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaBuildLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_build_localizations_update_instance**
> BetaBuildLocalizationResponse beta_build_localizations_update_instance(id, beta_build_localization_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_build_localization_response import BetaBuildLocalizationResponse
from openapi_client.models.beta_build_localization_update_request import BetaBuildLocalizationUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BetaBuildLocalizationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_build_localization_update_request = openapi_client.BetaBuildLocalizationUpdateRequest() # BetaBuildLocalizationUpdateRequest | BetaBuildLocalization representation

    try:
        api_response = api_instance.beta_build_localizations_update_instance(id, beta_build_localization_update_request)
        print("The response of BetaBuildLocalizationsApi->beta_build_localizations_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaBuildLocalizationsApi->beta_build_localizations_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_build_localization_update_request** | [**BetaBuildLocalizationUpdateRequest**](BetaBuildLocalizationUpdateRequest.md)| BetaBuildLocalization representation | 

### Return type

[**BetaBuildLocalizationResponse**](BetaBuildLocalizationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaBuildLocalization |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

