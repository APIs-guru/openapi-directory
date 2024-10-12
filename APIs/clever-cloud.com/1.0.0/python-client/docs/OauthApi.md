# openapi_client.OauthApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_oauth_authorize_0**](OauthApi.md#get_oauth_authorize_0) | **GET** /oauth/authorize | 
[**get_oauth_rights_0**](OauthApi.md#get_oauth_rights_0) | **GET** /oauth/rights | 
[**oauth_access_token_query_post_0**](OauthApi.md#oauth_access_token_query_post_0) | **POST** /oauth/access_token_query | 
[**oauth_request_token_query_post_0**](OauthApi.md#oauth_request_token_query_post_0) | **POST** /oauth/request_token_query | 
[**post_oauth_access_token_0**](OauthApi.md#post_oauth_access_token_0) | **POST** /oauth/access_token | 
[**post_oauth_authorize_0**](OauthApi.md#post_oauth_authorize_0) | **POST** /oauth/authorize | 
[**post_oauth_request_token_0**](OauthApi.md#post_oauth_request_token_0) | **POST** /oauth/request_token | 


# **get_oauth_authorize_0**
> get_oauth_authorize_0(oauth_token=oauth_token, cookie=cookie)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    oauth_token = 'oauth_token_example' # str |  (optional)
    cookie = 'cookie_example' # str |  (optional)

    try:
        api_instance.get_oauth_authorize_0(oauth_token=oauth_token, cookie=cookie)
    except Exception as e:
        print("Exception when calling OauthApi->get_oauth_authorize_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_token** | **str**|  | [optional] 
 **cookie** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authorizeForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_oauth_rights_0**
> Rights get_oauth_rights_0()



### Example


```python
import openapi_client
from openapi_client.models.rights import Rights
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)

    try:
        api_response = api_instance.get_oauth_rights_0()
        print("The response of OauthApi->get_oauth_rights_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OauthApi->get_oauth_rights_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Rights**](Rights.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailableRights |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_access_token_query_post_0**
> oauth_access_token_query_post_0(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str |  (optional)
    oauth_token = 'oauth_token_example' # str |  (optional)
    oauth_signature_method = 'oauth_signature_method_example' # str |  (optional)
    oauth_signature = 'oauth_signature_example' # str |  (optional)
    oauth_timestamp = 'oauth_timestamp_example' # str |  (optional)
    oauth_nonce = 'oauth_nonce_example' # str |  (optional)
    oauth_version = 'oauth_version_example' # str |  (optional)
    oauth_verifier = 'oauth_verifier_example' # str |  (optional)
    oauth_callback = 'oauth_callback_example' # str |  (optional)
    oauth_token_secret = 'oauth_token_secret_example' # str |  (optional)
    oauth_callback_confirmed = 'oauth_callback_confirmed_example' # str |  (optional)

    try:
        api_instance.oauth_access_token_query_post_0(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)
    except Exception as e:
        print("Exception when calling OauthApi->oauth_access_token_query_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | [optional] 
 **oauth_token** | **str**|  | [optional] 
 **oauth_signature_method** | **str**|  | [optional] 
 **oauth_signature** | **str**|  | [optional] 
 **oauth_timestamp** | **str**|  | [optional] 
 **oauth_nonce** | **str**|  | [optional] 
 **oauth_version** | **str**|  | [optional] 
 **oauth_verifier** | **str**|  | [optional] 
 **oauth_callback** | **str**|  | [optional] 
 **oauth_token_secret** | **str**|  | [optional] 
 **oauth_callback_confirmed** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_request_token_query_post_0**
> oauth_request_token_query_post_0(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str |  (optional)
    oauth_token = 'oauth_token_example' # str |  (optional)
    oauth_signature_method = 'oauth_signature_method_example' # str |  (optional)
    oauth_signature = 'oauth_signature_example' # str |  (optional)
    oauth_timestamp = 'oauth_timestamp_example' # str |  (optional)
    oauth_nonce = 'oauth_nonce_example' # str |  (optional)
    oauth_version = 'oauth_version_example' # str |  (optional)
    oauth_verifier = 'oauth_verifier_example' # str |  (optional)
    oauth_callback = 'oauth_callback_example' # str |  (optional)
    oauth_token_secret = 'oauth_token_secret_example' # str |  (optional)
    oauth_callback_confirmed = 'oauth_callback_confirmed_example' # str |  (optional)

    try:
        api_instance.oauth_request_token_query_post_0(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)
    except Exception as e:
        print("Exception when calling OauthApi->oauth_request_token_query_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | [optional] 
 **oauth_token** | **str**|  | [optional] 
 **oauth_signature_method** | **str**|  | [optional] 
 **oauth_signature** | **str**|  | [optional] 
 **oauth_timestamp** | **str**|  | [optional] 
 **oauth_nonce** | **str**|  | [optional] 
 **oauth_version** | **str**|  | [optional] 
 **oauth_verifier** | **str**|  | [optional] 
 **oauth_callback** | **str**|  | [optional] 
 **oauth_token_secret** | **str**|  | [optional] 
 **oauth_callback_confirmed** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_oauth_access_token_0**
> post_oauth_access_token_0(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str |  (optional)
    oauth_token = 'oauth_token_example' # str |  (optional)
    oauth_signature_method = 'oauth_signature_method_example' # str |  (optional)
    oauth_signature = 'oauth_signature_example' # str |  (optional)
    oauth_timestamp = 'oauth_timestamp_example' # str |  (optional)
    oauth_nonce = 'oauth_nonce_example' # str |  (optional)
    oauth_version = 'oauth_version_example' # str |  (optional)
    oauth_verifier = 'oauth_verifier_example' # str |  (optional)
    oauth_callback = 'oauth_callback_example' # str |  (optional)
    oauth_token_secret = 'oauth_token_secret_example' # str |  (optional)
    oauth_callback_confirmed = 'oauth_callback_confirmed_example' # str |  (optional)

    try:
        api_instance.post_oauth_access_token_0(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)
    except Exception as e:
        print("Exception when calling OauthApi->post_oauth_access_token_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | [optional] 
 **oauth_token** | **str**|  | [optional] 
 **oauth_signature_method** | **str**|  | [optional] 
 **oauth_signature** | **str**|  | [optional] 
 **oauth_timestamp** | **str**|  | [optional] 
 **oauth_nonce** | **str**|  | [optional] 
 **oauth_version** | **str**|  | [optional] 
 **oauth_verifier** | **str**|  | [optional] 
 **oauth_callback** | **str**|  | [optional] 
 **oauth_token_secret** | **str**|  | [optional] 
 **oauth_callback_confirmed** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | postAccessTokenRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_oauth_authorize_0**
> post_oauth_authorize_0(almighty=almighty, access_organisations=access_organisations, manage_organisations=manage_organisations, manage_organisations_services=manage_organisations_services, manage_organisations_applications=manage_organisations_applications, manage_organisations_members=manage_organisations_members, access_organisations_bills=access_organisations_bills, access_organisations_credit_count=access_organisations_credit_count, access_organisations_consumption_statistics=access_organisations_consumption_statistics, access_personal_information=access_personal_information, manage_personal_information=manage_personal_information, manage_ssh_keys=manage_ssh_keys, manage_services=manage_services, manage_applications=manage_applications, access_bills=access_bills, access_credit_count=access_credit_count, access_consumption_statistics=access_consumption_statistics, cookie=cookie)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    almighty = 'almighty_example' # str |  (optional)
    access_organisations = 'access_organisations_example' # str |  (optional)
    manage_organisations = 'manage_organisations_example' # str |  (optional)
    manage_organisations_services = 'manage_organisations_services_example' # str |  (optional)
    manage_organisations_applications = 'manage_organisations_applications_example' # str |  (optional)
    manage_organisations_members = 'manage_organisations_members_example' # str |  (optional)
    access_organisations_bills = 'access_organisations_bills_example' # str |  (optional)
    access_organisations_credit_count = 'access_organisations_credit_count_example' # str |  (optional)
    access_organisations_consumption_statistics = 'access_organisations_consumption_statistics_example' # str |  (optional)
    access_personal_information = 'access_personal_information_example' # str |  (optional)
    manage_personal_information = 'manage_personal_information_example' # str |  (optional)
    manage_ssh_keys = 'manage_ssh_keys_example' # str |  (optional)
    manage_services = 'manage_services_example' # str |  (optional)
    manage_applications = 'manage_applications_example' # str |  (optional)
    access_bills = 'access_bills_example' # str |  (optional)
    access_credit_count = 'access_credit_count_example' # str |  (optional)
    access_consumption_statistics = 'access_consumption_statistics_example' # str |  (optional)
    cookie = 'cookie_example' # str |  (optional)

    try:
        api_instance.post_oauth_authorize_0(almighty=almighty, access_organisations=access_organisations, manage_organisations=manage_organisations, manage_organisations_services=manage_organisations_services, manage_organisations_applications=manage_organisations_applications, manage_organisations_members=manage_organisations_members, access_organisations_bills=access_organisations_bills, access_organisations_credit_count=access_organisations_credit_count, access_organisations_consumption_statistics=access_organisations_consumption_statistics, access_personal_information=access_personal_information, manage_personal_information=manage_personal_information, manage_ssh_keys=manage_ssh_keys, manage_services=manage_services, manage_applications=manage_applications, access_bills=access_bills, access_credit_count=access_credit_count, access_consumption_statistics=access_consumption_statistics, cookie=cookie)
    except Exception as e:
        print("Exception when calling OauthApi->post_oauth_authorize_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **almighty** | **str**|  | [optional] 
 **access_organisations** | **str**|  | [optional] 
 **manage_organisations** | **str**|  | [optional] 
 **manage_organisations_services** | **str**|  | [optional] 
 **manage_organisations_applications** | **str**|  | [optional] 
 **manage_organisations_members** | **str**|  | [optional] 
 **access_organisations_bills** | **str**|  | [optional] 
 **access_organisations_credit_count** | **str**|  | [optional] 
 **access_organisations_consumption_statistics** | **str**|  | [optional] 
 **access_personal_information** | **str**|  | [optional] 
 **manage_personal_information** | **str**|  | [optional] 
 **manage_ssh_keys** | **str**|  | [optional] 
 **manage_services** | **str**|  | [optional] 
 **manage_applications** | **str**|  | [optional] 
 **access_bills** | **str**|  | [optional] 
 **access_credit_count** | **str**|  | [optional] 
 **access_consumption_statistics** | **str**|  | [optional] 
 **cookie** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authorizeToken |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_oauth_request_token_0**
> post_oauth_request_token_0(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OauthApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str |  (optional)
    oauth_token = 'oauth_token_example' # str |  (optional)
    oauth_signature_method = 'oauth_signature_method_example' # str |  (optional)
    oauth_signature = 'oauth_signature_example' # str |  (optional)
    oauth_timestamp = 'oauth_timestamp_example' # str |  (optional)
    oauth_nonce = 'oauth_nonce_example' # str |  (optional)
    oauth_version = 'oauth_version_example' # str |  (optional)
    oauth_verifier = 'oauth_verifier_example' # str |  (optional)
    oauth_callback = 'oauth_callback_example' # str |  (optional)
    oauth_token_secret = 'oauth_token_secret_example' # str |  (optional)
    oauth_callback_confirmed = 'oauth_callback_confirmed_example' # str |  (optional)

    try:
        api_instance.post_oauth_request_token_0(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)
    except Exception as e:
        print("Exception when calling OauthApi->post_oauth_request_token_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | [optional] 
 **oauth_token** | **str**|  | [optional] 
 **oauth_signature_method** | **str**|  | [optional] 
 **oauth_signature** | **str**|  | [optional] 
 **oauth_timestamp** | **str**|  | [optional] 
 **oauth_nonce** | **str**|  | [optional] 
 **oauth_version** | **str**|  | [optional] 
 **oauth_verifier** | **str**|  | [optional] 
 **oauth_callback** | **str**|  | [optional] 
 **oauth_token_secret** | **str**|  | [optional] 
 **oauth_callback_confirmed** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | postReqTokenRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

