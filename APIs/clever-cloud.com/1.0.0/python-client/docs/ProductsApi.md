# openapi_client.ProductsApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_products_addon_providers_0**](ProductsApi.md#get_products_addon_providers_0) | **GET** /products/addonproviders | 
[**get_products_addon_providers_provider_id_0**](ProductsApi.md#get_products_addon_providers_provider_id_0) | **GET** /products/addonproviders/{provider_id} | 
[**get_products_countries_0**](ProductsApi.md#get_products_countries_0) | **GET** /products/countries | 
[**get_products_countrycodes_0**](ProductsApi.md#get_products_countrycodes_0) | **GET** /products/countrycodes | 
[**get_products_instances_0**](ProductsApi.md#get_products_instances_0) | **GET** /products/instances | 
[**get_products_instances_type_version_0**](ProductsApi.md#get_products_instances_type_version_0) | **GET** /products/instances/{type}-{version} | 
[**get_products_packages_0**](ProductsApi.md#get_products_packages_0) | **GET** /products/packages | 
[**get_products_prices_0**](ProductsApi.md#get_products_prices_0) | **GET** /products/prices | 
[**get_products_zones_0**](ProductsApi.md#get_products_zones_0) | **GET** /products/zones | 
[**products_addonproviders_provider_id_versions_get_0**](ProductsApi.md#products_addonproviders_provider_id_versions_get_0) | **GET** /products/addonproviders/{provider_id}/versions | 
[**products_mfa_kinds_get_0**](ProductsApi.md#products_mfa_kinds_get_0) | **GET** /products/mfa_kinds | 


# **get_products_addon_providers_0**
> List[Provider] get_products_addon_providers_0()



### Example


```python
import openapi_client
from openapi_client.models.provider import Provider
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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        api_response = api_instance.get_products_addon_providers_0()
        print("The response of ProductsApi->get_products_addon_providers_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_addon_providers_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Provider]**](Provider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonProviders |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_addon_providers_provider_id_0**
> Provider get_products_addon_providers_provider_id_0(provider_id)



### Example


```python
import openapi_client
from openapi_client.models.provider import Provider
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
    api_instance = openapi_client.ProductsApi(api_client)
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_products_addon_providers_provider_id_0(provider_id)
        print("The response of ProductsApi->get_products_addon_providers_provider_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_addon_providers_provider_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_countries_0**
> Country get_products_countries_0()



### Example


```python
import openapi_client
from openapi_client.models.country import Country
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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        api_response = api_instance.get_products_countries_0()
        print("The response of ProductsApi->get_products_countries_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_countries_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCountries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_countrycodes_0**
> Country get_products_countrycodes_0()



### Example


```python
import openapi_client
from openapi_client.models.country import Country
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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        api_response = api_instance.get_products_countrycodes_0()
        print("The response of ProductsApi->get_products_countrycodes_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_countrycodes_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCountryCodes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_instances_0**
> List[Instance] get_products_instances_0(var_for=var_for)



### Example


```python
import openapi_client
from openapi_client.models.instance import Instance
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
    api_instance = openapi_client.ProductsApi(api_client)
    var_for = 'var_for_example' # str |  (optional)

    try:
        api_response = api_instance.get_products_instances_0(var_for=var_for)
        print("The response of ProductsApi->get_products_instances_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_instances_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_for** | **str**|  | [optional] 

### Return type

[**List[Instance]**](Instance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailableInstances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_instances_type_version_0**
> Instance get_products_instances_type_version_0(type, version, var_for=var_for, app=app)



### Example


```python
import openapi_client
from openapi_client.models.instance import Instance
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
    api_instance = openapi_client.ProductsApi(api_client)
    type = 'type_example' # str | 
    version = 'version_example' # str | 
    var_for = 'var_for_example' # str |  (optional)
    app = 'app_example' # str |  (optional)

    try:
        api_response = api_instance.get_products_instances_type_version_0(type, version, var_for=var_for, app=app)
        print("The response of ProductsApi->get_products_instances_type_version_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_instances_type_version_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **version** | **str**|  | 
 **var_for** | **str**|  | [optional] 
 **app** | **str**|  | [optional] 

### Return type

[**Instance**](Instance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailableInstance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_packages_0**
> get_products_packages_0(coupon=coupon, orga_id=orga_id, currency=currency)



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
    api_instance = openapi_client.ProductsApi(api_client)
    coupon = 'coupon_example' # str |  (optional)
    orga_id = 'orga_id_example' # str |  (optional)
    currency = 'currency_example' # str |  (optional)

    try:
        api_instance.get_products_packages_0(coupon=coupon, orga_id=orga_id, currency=currency)
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_packages_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon** | **str**|  | [optional] 
 **orga_id** | **str**|  | [optional] 
 **currency** | **str**|  | [optional] 

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
**200** | getAvailablePackages |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_prices_0**
> get_products_prices_0()



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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        api_instance.get_products_prices_0()
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_prices_0: %s\n" % e)
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
**200** | getExchangeRates |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_zones_0**
> List[Zone] get_products_zones_0()



### Example


```python
import openapi_client
from openapi_client.models.zone import Zone
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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        api_response = api_instance.get_products_zones_0()
        print("The response of ProductsApi->get_products_zones_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_products_zones_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Zone]**](Zone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getZones |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_addonproviders_provider_id_versions_get_0**
> products_addonproviders_provider_id_versions_get_0(provider_id)



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
    api_instance = openapi_client.ProductsApi(api_client)
    provider_id = 'provider_id_example' # str | 

    try:
        api_instance.products_addonproviders_provider_id_versions_get_0(provider_id)
    except Exception as e:
        print("Exception when calling ProductsApi->products_addonproviders_provider_id_versions_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 

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

# **products_mfa_kinds_get_0**
> products_mfa_kinds_get_0()



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
    api_instance = openapi_client.ProductsApi(api_client)

    try:
        api_instance.products_mfa_kinds_get_0()
    except Exception as e:
        print("Exception when calling ProductsApi->products_mfa_kinds_get_0: %s\n" % e)
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

