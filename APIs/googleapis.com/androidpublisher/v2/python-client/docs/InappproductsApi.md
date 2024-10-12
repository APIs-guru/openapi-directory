# openapi_client.InappproductsApi

All URIs are relative to *https://www.googleapis.com/androidpublisher/v2/applications*

Method | HTTP request | Description
------------- | ------------- | -------------
[**androidpublisher_inappproducts_delete**](InappproductsApi.md#androidpublisher_inappproducts_delete) | **DELETE** /{packageName}/inappproducts/{sku} | 
[**androidpublisher_inappproducts_get**](InappproductsApi.md#androidpublisher_inappproducts_get) | **GET** /{packageName}/inappproducts/{sku} | 
[**androidpublisher_inappproducts_insert**](InappproductsApi.md#androidpublisher_inappproducts_insert) | **POST** /{packageName}/inappproducts | 
[**androidpublisher_inappproducts_list**](InappproductsApi.md#androidpublisher_inappproducts_list) | **GET** /{packageName}/inappproducts | 
[**androidpublisher_inappproducts_patch**](InappproductsApi.md#androidpublisher_inappproducts_patch) | **PATCH** /{packageName}/inappproducts/{sku} | 
[**androidpublisher_inappproducts_update**](InappproductsApi.md#androidpublisher_inappproducts_update) | **PUT** /{packageName}/inappproducts/{sku} | 


# **androidpublisher_inappproducts_delete**
> androidpublisher_inappproducts_delete(package_name, sku, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Delete an in-app product for an app.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.InappproductsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app with the in-app product; for example, \"com.spiffygame\".
    sku = 'sku_example' # str | Unique identifier for the in-app product.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_instance.androidpublisher_inappproducts_delete(package_name, sku, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
    except Exception as e:
        print("Exception when calling InappproductsApi->androidpublisher_inappproducts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app with the in-app product; for example, \&quot;com.spiffygame\&quot;. | 
 **sku** | **str**| Unique identifier for the in-app product. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_inappproducts_get**
> InAppProduct androidpublisher_inappproducts_get(package_name, sku, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)



Returns information about the in-app product specified.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.in_app_product import InAppProduct
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.InappproductsApi(api_client)
    package_name = 'package_name_example' # str | 
    sku = 'sku_example' # str | Unique identifier for the in-app product.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)

    try:
        api_response = api_instance.androidpublisher_inappproducts_get(package_name, sku, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip)
        print("The response of InappproductsApi->androidpublisher_inappproducts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InappproductsApi->androidpublisher_inappproducts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**|  | 
 **sku** | **str**| Unique identifier for the in-app product. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 

### Return type

[**InAppProduct**](InAppProduct.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_inappproducts_insert**
> InAppProduct androidpublisher_inappproducts_insert(package_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, auto_convert_missing_prices=auto_convert_missing_prices, in_app_product=in_app_product)



Creates a new in-app product for an app.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.in_app_product import InAppProduct
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.InappproductsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app; for example, \"com.spiffygame\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    auto_convert_missing_prices = True # bool | If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. (optional)
    in_app_product = openapi_client.InAppProduct() # InAppProduct |  (optional)

    try:
        api_response = api_instance.androidpublisher_inappproducts_insert(package_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, auto_convert_missing_prices=auto_convert_missing_prices, in_app_product=in_app_product)
        print("The response of InappproductsApi->androidpublisher_inappproducts_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InappproductsApi->androidpublisher_inappproducts_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app; for example, \&quot;com.spiffygame\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **auto_convert_missing_prices** | **bool**| If true the prices for all regions targeted by the parent app that don&#39;t have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. | [optional] 
 **in_app_product** | [**InAppProduct**](InAppProduct.md)|  | [optional] 

### Return type

[**InAppProduct**](InAppProduct.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_inappproducts_list**
> InappproductsListResponse androidpublisher_inappproducts_list(package_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index, token=token)



List all the in-app products for an Android app, both subscriptions and managed in-app products..

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.inappproducts_list_response import InappproductsListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.InappproductsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app with in-app products; for example, \"com.spiffygame\".
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int |  (optional)
    start_index = 56 # int |  (optional)
    token = 'token_example' # str |  (optional)

    try:
        api_response = api_instance.androidpublisher_inappproducts_list(package_name, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, start_index=start_index, token=token)
        print("The response of InappproductsApi->androidpublisher_inappproducts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InappproductsApi->androidpublisher_inappproducts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app with in-app products; for example, \&quot;com.spiffygame\&quot;. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**|  | [optional] 
 **start_index** | **int**|  | [optional] 
 **token** | **str**|  | [optional] 

### Return type

[**InappproductsListResponse**](InappproductsListResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_inappproducts_patch**
> InAppProduct androidpublisher_inappproducts_patch(package_name, sku, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, auto_convert_missing_prices=auto_convert_missing_prices, in_app_product=in_app_product)



Updates the details of an in-app product. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.in_app_product import InAppProduct
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.InappproductsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app with the in-app product; for example, \"com.spiffygame\".
    sku = 'sku_example' # str | Unique identifier for the in-app product.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    auto_convert_missing_prices = True # bool | If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. (optional)
    in_app_product = openapi_client.InAppProduct() # InAppProduct |  (optional)

    try:
        api_response = api_instance.androidpublisher_inappproducts_patch(package_name, sku, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, auto_convert_missing_prices=auto_convert_missing_prices, in_app_product=in_app_product)
        print("The response of InappproductsApi->androidpublisher_inappproducts_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InappproductsApi->androidpublisher_inappproducts_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app with the in-app product; for example, \&quot;com.spiffygame\&quot;. | 
 **sku** | **str**| Unique identifier for the in-app product. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **auto_convert_missing_prices** | **bool**| If true the prices for all regions targeted by the parent app that don&#39;t have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. | [optional] 
 **in_app_product** | [**InAppProduct**](InAppProduct.md)|  | [optional] 

### Return type

[**InAppProduct**](InAppProduct.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **androidpublisher_inappproducts_update**
> InAppProduct androidpublisher_inappproducts_update(package_name, sku, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, auto_convert_missing_prices=auto_convert_missing_prices, in_app_product=in_app_product)



Updates the details of an in-app product.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.in_app_product import InAppProduct
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/androidpublisher/v2/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/androidpublisher/v2/applications"
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
    api_instance = openapi_client.InappproductsApi(api_client)
    package_name = 'package_name_example' # str | Unique identifier for the Android app with the in-app product; for example, \"com.spiffygame\".
    sku = 'sku_example' # str | Unique identifier for the in-app product.
    alt = json # str | Data format for the response. (optional) (default to json)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    auto_convert_missing_prices = True # bool | If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. (optional)
    in_app_product = openapi_client.InAppProduct() # InAppProduct |  (optional)

    try:
        api_response = api_instance.androidpublisher_inappproducts_update(package_name, sku, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, auto_convert_missing_prices=auto_convert_missing_prices, in_app_product=in_app_product)
        print("The response of InappproductsApi->androidpublisher_inappproducts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InappproductsApi->androidpublisher_inappproducts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Unique identifier for the Android app with the in-app product; for example, \&quot;com.spiffygame\&quot;. | 
 **sku** | **str**| Unique identifier for the in-app product. | 
 **alt** | **str**| Data format for the response. | [optional] [default to json]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **auto_convert_missing_prices** | **bool**| If true the prices for all regions targeted by the parent app that don&#39;t have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false. | [optional] 
 **in_app_product** | [**InAppProduct**](InAppProduct.md)|  | [optional] 

### Return type

[**InAppProduct**](InAppProduct.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

