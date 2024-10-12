# openapi_client.VendorApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_vendor_apps_0**](VendorApi.md#get_vendor_apps_0) | **GET** /vendor/apps | 
[**get_vendor_apps_addon_id_0**](VendorApi.md#get_vendor_apps_addon_id_0) | **GET** /vendor/apps/{addonId} | 
[**post_vendor_billing_owner_id_0**](VendorApi.md#post_vendor_billing_owner_id_0) | **POST** /vendor/apps/{addonId}/consumptions | 
[**put_vendor_apps_addon_id_0**](VendorApi.md#put_vendor_apps_addon_id_0) | **PUT** /vendor/apps/{addonId} | 
[**vendor_addons_post_1**](VendorApi.md#vendor_addons_post_1) | **POST** /vendor//addons | 
[**vendor_apps_addon_id_logscollector_get_0**](VendorApi.md#vendor_apps_addon_id_logscollector_get_0) | **GET** /vendor//apps/{addonId}/logscollector | 
[**vendor_apps_addon_id_migration_callback_put_0**](VendorApi.md#vendor_apps_addon_id_migration_callback_put_0) | **PUT** /vendor/apps/{addonId}/migration_callback | 


# **get_vendor_apps_0**
> List[Application] get_vendor_apps_0(offset=offset)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
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
    api_instance = openapi_client.VendorApi(api_client)
    offset = 56 # int |  (optional)

    try:
        api_response = api_instance.get_vendor_apps_0(offset=offset)
        print("The response of VendorApi->get_vendor_apps_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VendorApi->get_vendor_apps_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**|  | [optional] 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | listApps |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vendor_apps_addon_id_0**
> get_vendor_apps_addon_id_0(addon_id)



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
    api_instance = openapi_client.VendorApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.get_vendor_apps_addon_id_0(addon_id)
    except Exception as e:
        print("Exception when calling VendorApi->get_vendor_apps_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

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
**200** | getApplicationInfo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_vendor_billing_owner_id_0**
> post_vendor_billing_owner_id_0(addon_id, wannabe_addon_billing)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon_billing import WannabeAddonBilling
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
    api_instance = openapi_client.VendorApi(api_client)
    addon_id = 'addon_id_example' # str | 
    wannabe_addon_billing = openapi_client.WannabeAddonBilling() # WannabeAddonBilling | 

    try:
        api_instance.post_vendor_billing_owner_id_0(addon_id, wannabe_addon_billing)
    except Exception as e:
        print("Exception when calling VendorApi->post_vendor_billing_owner_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 
 **wannabe_addon_billing** | [**WannabeAddonBilling**](WannabeAddonBilling.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_vendor_apps_addon_id_0**
> put_vendor_apps_addon_id_0(addon_id)



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
    api_instance = openapi_client.VendorApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.put_vendor_apps_addon_id_0(addon_id)
    except Exception as e:
        print("Exception when calling VendorApi->put_vendor_apps_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

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
**200** | editApplicationConfiguration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vendor_addons_post_1**
> vendor_addons_post_1()



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
    api_instance = openapi_client.VendorApi(api_client)

    try:
        api_instance.vendor_addons_post_1()
    except Exception as e:
        print("Exception when calling VendorApi->vendor_addons_post_1: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

# **vendor_apps_addon_id_logscollector_get_0**
> vendor_apps_addon_id_logscollector_get_0(addon_id)



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
    api_instance = openapi_client.VendorApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.vendor_apps_addon_id_logscollector_get_0(addon_id)
    except Exception as e:
        print("Exception when calling VendorApi->vendor_apps_addon_id_logscollector_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

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

# **vendor_apps_addon_id_migration_callback_put_0**
> vendor_apps_addon_id_migration_callback_put_0(addon_id, plan_id=plan_id, region=region)



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
    api_instance = openapi_client.VendorApi(api_client)
    addon_id = 'addon_id_example' # str | 
    plan_id = 'plan_id_example' # str |  (optional)
    region = 'region_example' # str |  (optional)

    try:
        api_instance.vendor_apps_addon_id_migration_callback_put_0(addon_id, plan_id=plan_id, region=region)
    except Exception as e:
        print("Exception when calling VendorApi->vendor_apps_addon_id_migration_callback_put_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 
 **plan_id** | **str**|  | [optional] 
 **region** | **str**|  | [optional] 

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

