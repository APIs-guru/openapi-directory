# openapi_client.CartApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bridge_download**](CartApi.md#bridge_download) | **GET** /bridge.download.file | 
[**cart_bridge**](CartApi.md#cart_bridge) | **GET** /cart.bridge.json | 
[**cart_catalog_price_rules_count**](CartApi.md#cart_catalog_price_rules_count) | **GET** /cart.catalog_price_rules.count.json | 
[**cart_catalog_price_rules_list**](CartApi.md#cart_catalog_price_rules_list) | **GET** /cart.catalog_price_rules.list.json | 
[**cart_clear_cache**](CartApi.md#cart_clear_cache) | **POST** /cart.clear_cache.json | 
[**cart_config**](CartApi.md#cart_config) | **GET** /cart.config.json | 
[**cart_config_update**](CartApi.md#cart_config_update) | **PUT** /cart.config.update.json | 
[**cart_coupon_add**](CartApi.md#cart_coupon_add) | **POST** /cart.coupon.add.json | 
[**cart_coupon_condition_add**](CartApi.md#cart_coupon_condition_add) | **POST** /cart.coupon.condition.add.json | 
[**cart_coupon_count**](CartApi.md#cart_coupon_count) | **GET** /cart.coupon.count.json | 
[**cart_coupon_delete**](CartApi.md#cart_coupon_delete) | **DELETE** /cart.coupon.delete.json | 
[**cart_coupon_list**](CartApi.md#cart_coupon_list) | **GET** /cart.coupon.list.json | 
[**cart_create**](CartApi.md#cart_create) | **POST** /cart.create.json | 
[**cart_delete**](CartApi.md#cart_delete) | **DELETE** /cart.delete.json | 
[**cart_disconnect**](CartApi.md#cart_disconnect) | **GET** /cart.disconnect.json | 
[**cart_giftcard_add**](CartApi.md#cart_giftcard_add) | **POST** /cart.giftcard.add.json | 
[**cart_giftcard_count**](CartApi.md#cart_giftcard_count) | **GET** /cart.giftcard.count.json | 
[**cart_giftcard_list**](CartApi.md#cart_giftcard_list) | **GET** /cart.giftcard.list.json | 
[**cart_info**](CartApi.md#cart_info) | **GET** /cart.info.json | 
[**cart_list**](CartApi.md#cart_list) | **GET** /cart.list.json | 
[**cart_meta_data_list**](CartApi.md#cart_meta_data_list) | **GET** /cart.meta_data.list.json | 
[**cart_meta_data_set**](CartApi.md#cart_meta_data_set) | **POST** /cart.meta_data.set.json | 
[**cart_meta_data_unset**](CartApi.md#cart_meta_data_unset) | **DELETE** /cart.meta_data.unset.json | 
[**cart_methods**](CartApi.md#cart_methods) | **GET** /cart.methods.json | 
[**cart_plugin_list**](CartApi.md#cart_plugin_list) | **GET** /cart.plugin.list.json | 
[**cart_script_add**](CartApi.md#cart_script_add) | **POST** /cart.script.add.json | 
[**cart_script_delete**](CartApi.md#cart_script_delete) | **DELETE** /cart.script.delete.json | 
[**cart_script_list**](CartApi.md#cart_script_list) | **GET** /cart.script.list.json | 
[**cart_shipping_zones_list**](CartApi.md#cart_shipping_zones_list) | **GET** /cart.shipping_zones.list.json | 
[**cart_validate**](CartApi.md#cart_validate) | **GET** /cart.validate.json | 


# **bridge_download**
> bytearray bridge_download(whitelabel=whitelabel)



Download bridge for store

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    whitelabel = False # bool | Identifies if there is a necessity to download whitelabel bridge. (optional) (default to False)

    try:
        api_response = api_instance.bridge_download(whitelabel=whitelabel)
        print("The response of CartApi->bridge_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->bridge_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whitelabel** | **bool**| Identifies if there is a necessity to download whitelabel bridge. | [optional] [default to False]

### Return type

**bytearray**

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_bridge**
> CartBridge200Response cart_bridge()



Get bridge key and store key

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.cart_bridge200_response import CartBridge200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)

    try:
        api_response = api_instance.cart_bridge()
        print("The response of CartApi->cart_bridge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_bridge: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CartBridge200Response**](CartBridge200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_catalog_price_rules_count**
> CartCatalogPriceRulesCount200Response cart_catalog_price_rules_count()



Get count of cart catalog price rules discounts.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_catalog_price_rules_count200_response import CartCatalogPriceRulesCount200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)

    try:
        api_response = api_instance.cart_catalog_price_rules_count()
        print("The response of CartApi->cart_catalog_price_rules_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_catalog_price_rules_count: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CartCatalogPriceRulesCount200Response**](CartCatalogPriceRulesCount200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_catalog_price_rules_list**
> ModelResponseCartCatalogPriceRulesList cart_catalog_price_rules_list(page_cursor=page_cursor, start=start, count=count, ids=ids, params=params, response_fields=response_fields, exclude=exclude)



Get cart catalog price rules discounts.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_cart_catalog_price_rules_list import ModelResponseCartCatalogPriceRulesList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    ids = 'ids_example' # str | Retrieves  catalog_price_rules by ids (optional)
    params = 'id,name,description' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,description')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.cart_catalog_price_rules_list(page_cursor=page_cursor, start=start, count=count, ids=ids, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of CartApi->cart_catalog_price_rules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_catalog_price_rules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **ids** | **str**| Retrieves  catalog_price_rules by ids | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartCatalogPriceRulesList**](ModelResponseCartCatalogPriceRulesList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_clear_cache**
> CartClearCache200Response cart_clear_cache(cache_type)



Clear cache on store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_clear_cache200_response import CartClearCache200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    cache_type = 'cache_type_example' # str | Defines which cache should be cleared.

    try:
        api_response = api_instance.cart_clear_cache(cache_type)
        print("The response of CartApi->cart_clear_cache:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_clear_cache: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cache_type** | **str**| Defines which cache should be cleared. | 

### Return type

[**CartClearCache200Response**](CartClearCache200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_config**
> CartConfig200Response cart_config(params=params, exclude=exclude)



Get list of cart configs

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_config200_response import CartConfig200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    params = 'store_name,store_url,db_prefix' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'store_name,store_url,db_prefix')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.cart_config(params=params, exclude=exclude)
        print("The response of CartApi->cart_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;store_name,store_url,db_prefix&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**CartConfig200Response**](CartConfig200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_config_update**
> CartConfigUpdate200Response cart_config_update(cart_config_update)



Use this API method to update custom data in client database.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_config_update import CartConfigUpdate
from openapi_client.models.cart_config_update200_response import CartConfigUpdate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    cart_config_update = openapi_client.CartConfigUpdate() # CartConfigUpdate | 

    try:
        api_response = api_instance.cart_config_update(cart_config_update)
        print("The response of CartApi->cart_config_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_config_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart_config_update** | [**CartConfigUpdate**](CartConfigUpdate.md)|  | 

### Return type

[**CartConfigUpdate200Response**](CartConfigUpdate200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_coupon_add**
> CartCouponAdd200Response cart_coupon_add(cart_coupon_add)



Create new coupon

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_coupon_add import CartCouponAdd
from openapi_client.models.cart_coupon_add200_response import CartCouponAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    cart_coupon_add = openapi_client.CartCouponAdd() # CartCouponAdd | 

    try:
        api_response = api_instance.cart_coupon_add(cart_coupon_add)
        print("The response of CartApi->cart_coupon_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_coupon_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart_coupon_add** | [**CartCouponAdd**](CartCouponAdd.md)|  | 

### Return type

[**CartCouponAdd200Response**](CartCouponAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_coupon_condition_add**
> BasketLiveShippingServiceDelete200Response cart_coupon_condition_add(coupon_id, entity, key, operator, value, store_id=store_id, target=target)



Create new coupon condition

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.basket_live_shipping_service_delete200_response import BasketLiveShippingServiceDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    coupon_id = 'coupon_id_example' # str | Coupon Id
    entity = 'entity_example' # str | Defines condition entity type
    key = 'key_example' # str | Defines condition entity attribute key
    operator = 'operator_example' # str | Defines condition operator
    value = 'value_example' # str | Defines condition value, can be comma separated according to the operator.
    store_id = 'store_id_example' # str | Store Id (optional)
    target = 'coupon_prerequisite' # str | Defines condition operator (optional) (default to 'coupon_prerequisite')

    try:
        api_response = api_instance.cart_coupon_condition_add(coupon_id, entity, key, operator, value, store_id=store_id, target=target)
        print("The response of CartApi->cart_coupon_condition_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_coupon_condition_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon_id** | **str**| Coupon Id | 
 **entity** | **str**| Defines condition entity type | 
 **key** | **str**| Defines condition entity attribute key | 
 **operator** | **str**| Defines condition operator | 
 **value** | **str**| Defines condition value, can be comma separated according to the operator. | 
 **store_id** | **str**| Store Id | [optional] 
 **target** | **str**| Defines condition operator | [optional] [default to &#39;coupon_prerequisite&#39;]

### Return type

[**BasketLiveShippingServiceDelete200Response**](BasketLiveShippingServiceDelete200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_coupon_count**
> CartCouponCount200Response cart_coupon_count(store_id=store_id, date_start_from=date_start_from, date_start_to=date_start_to, date_end_from=date_end_from, date_end_to=date_end_to, avail=avail)



Get cart coupons count.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_coupon_count200_response import CartCouponCount200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    store_id = 'store_id_example' # str | Store Id (optional)
    date_start_from = 'date_start_from_example' # str | Filter entity by date_start (greater or equal) (optional)
    date_start_to = 'date_start_to_example' # str | Filter entity by date_start (less or equal) (optional)
    date_end_from = 'date_end_from_example' # str | Filter entity by date_end (greater or equal) (optional)
    date_end_to = 'date_end_to_example' # str | Filter entity by date_end (less or equal) (optional)
    avail = True # bool | Defines category's visibility status (optional) (default to True)

    try:
        api_response = api_instance.cart_coupon_count(store_id=store_id, date_start_from=date_start_from, date_start_to=date_start_to, date_end_from=date_end_from, date_end_to=date_end_to, avail=avail)
        print("The response of CartApi->cart_coupon_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_coupon_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | **str**| Store Id | [optional] 
 **date_start_from** | **str**| Filter entity by date_start (greater or equal) | [optional] 
 **date_start_to** | **str**| Filter entity by date_start (less or equal) | [optional] 
 **date_end_from** | **str**| Filter entity by date_end (greater or equal) | [optional] 
 **date_end_to** | **str**| Filter entity by date_end (less or equal) | [optional] 
 **avail** | **bool**| Defines category&#39;s visibility status | [optional] [default to True]

### Return type

[**CartCouponCount200Response**](CartCouponCount200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_coupon_delete**
> AttributeDelete200Response cart_coupon_delete(id, store_id=store_id)



Delete coupon

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    id = 'id_example' # str | Entity id
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.cart_coupon_delete(id, store_id=store_id)
        print("The response of CartApi->cart_coupon_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_coupon_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_coupon_list**
> ModelResponseCartCouponList cart_coupon_list(page_cursor=page_cursor, start=start, count=count, coupons_ids=coupons_ids, store_id=store_id, date_start_from=date_start_from, date_start_to=date_start_to, date_end_from=date_end_from, date_end_to=date_end_to, avail=avail, lang_id=lang_id, params=params, response_fields=response_fields, exclude=exclude)



Get cart coupon discounts.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_cart_coupon_list import ModelResponseCartCouponList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    coupons_ids = 'coupons_ids_example' # str | Filter coupons by ids (optional)
    store_id = 'store_id_example' # str | Filter coupons by store id (optional)
    date_start_from = 'date_start_from_example' # str | Filter entity by date_start (greater or equal) (optional)
    date_start_to = 'date_start_to_example' # str | Filter entity by date_start (less or equal) (optional)
    date_end_from = 'date_end_from_example' # str | Filter entity by date_end (greater or equal) (optional)
    date_end_to = 'date_end_to_example' # str | Filter entity by date_end (less or equal) (optional)
    avail = True # bool | Filter coupons by avail status (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    params = 'id,code,name,description' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,code,name,description')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.cart_coupon_list(page_cursor=page_cursor, start=start, count=count, coupons_ids=coupons_ids, store_id=store_id, date_start_from=date_start_from, date_start_to=date_start_to, date_end_from=date_end_from, date_end_to=date_end_to, avail=avail, lang_id=lang_id, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of CartApi->cart_coupon_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_coupon_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **coupons_ids** | **str**| Filter coupons by ids | [optional] 
 **store_id** | **str**| Filter coupons by store id | [optional] 
 **date_start_from** | **str**| Filter entity by date_start (greater or equal) | [optional] 
 **date_start_to** | **str**| Filter entity by date_start (less or equal) | [optional] 
 **date_end_from** | **str**| Filter entity by date_end (greater or equal) | [optional] 
 **date_end_to** | **str**| Filter entity by date_end (less or equal) | [optional] 
 **avail** | **bool**| Filter coupons by avail status | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,code,name,description&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartCouponList**](ModelResponseCartCouponList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_create**
> AccountCartAdd200Response cart_create(cart_id, store_url, etsy_client_id, etsy_refresh_token, store_id, bridge_url=bridge_url, store_root=store_root, store_key=store_key, shared_secret=shared_secret, validate_version=validate_version, verify=verify, db_tables_prefix=db_tables_prefix, ftp_host=ftp_host, ftp_user=ftp_user, ftp_password=ftp_password, ftp_port=ftp_port, ftp_store_dir=ftp_store_dir, api_key_3dcart=api_key_3dcart, admin_account=admin_account, api_path=api_path, api_key=api_key, client_id=client_id, access_token=access_token, context=context, access_token2=access_token2, api_key_shopify=api_key_shopify, api_password=api_password, access_token_shopify=access_token_shopify, api_key2=api_key2, api_username=api_username, encrypted_password=encrypted_password, login=login, api_user_adnsf=api_user_adnsf, api_pass=api_pass, private_key=private_key, app_token=app_token, etsy_keystring=etsy_keystring, etsy_shared_secret=etsy_shared_secret, token_secret=token_secret, ebay_client_id=ebay_client_id, ebay_client_secret=ebay_client_secret, ebay_runame=ebay_runame, ebay_access_token=ebay_access_token, ebay_refresh_token=ebay_refresh_token, ebay_environment=ebay_environment, ebay_site_id=ebay_site_id, dw_client_id=dw_client_id, dw_api_pass=dw_api_pass, demandware_user_name=demandware_user_name, demandware_user_password=demandware_user_password, seller_id=seller_id, amazon_secret_key=amazon_secret_key, amazon_access_key_id=amazon_access_key_id, marketplaces_ids=marketplaces_ids, environment=environment, hybris_client_id=hybris_client_id, hybris_client_secret=hybris_client_secret, hybris_username=hybris_username, hybris_password=hybris_password, hybris_websites=hybris_websites, walmart_client_id=walmart_client_id, walmart_client_secret=walmart_client_secret, walmart_environment=walmart_environment, walmart_channel_type=walmart_channel_type, lightspeed_api_key=lightspeed_api_key, lightspeed_api_secret=lightspeed_api_secret, shopware_access_key=shopware_access_key, shopware_api_key=shopware_api_key, shopware_api_secret=shopware_api_secret, commercehq_api_key=commercehq_api_key, commercehq_api_password=commercehq_api_password, var_3dcart_private_key=var_3dcart_private_key, var_3dcart_access_token=var_3dcart_access_token, wc_consumer_key=wc_consumer_key, wc_consumer_secret=wc_consumer_secret, magento_consumer_key=magento_consumer_key, magento_consumer_secret=magento_consumer_secret, magento_access_token=magento_access_token, magento_token_secret=magento_token_secret, prestashop_webservice_key=prestashop_webservice_key, wix_app_id=wix_app_id, wix_app_secret_key=wix_app_secret_key, wix_refresh_token=wix_refresh_token, mercado_libre_app_id=mercado_libre_app_id, mercado_libre_app_secret_key=mercado_libre_app_secret_key, mercado_libre_refresh_token=mercado_libre_refresh_token, zid_client_id=zid_client_id, zid_client_secret=zid_client_secret, zid_access_token=zid_access_token, zid_authorization=zid_authorization, zid_refresh_token=zid_refresh_token)



Add store to the account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.account_cart_add200_response import AccountCartAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    cart_id = 'cart_id_example' # str | Store’s identifier which you can get from cart_list method
    store_url = 'store_url_example' # str | A web address of a store that you would like to connect to API2Cart
    etsy_client_id = 'etsy_client_id_example' # str | Etsy Client Id
    etsy_refresh_token = 'etsy_refresh_token_example' # str | Etsy Refresh token
    store_id = 'store_id_example' # str | Store Id
    bridge_url = 'bridge_url_example' # str | This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) (optional)
    store_root = 'store_root_example' # str | Absolute path to the store root directory (used with \"bridge_url\" parameter) (optional)
    store_key = 'store_key_example' # str | Set this parameter if bridge is already uploaded to store (optional)
    shared_secret = 'shared_secret_example' # str | Shared secret (optional)
    validate_version = False # bool | Specify if api2cart should validate cart version (optional) (default to False)
    verify = True # bool | Enables or disables cart's verification (optional) (default to True)
    db_tables_prefix = 'db_tables_prefix_example' # str | DB tables prefix (optional)
    ftp_host = 'ftp_host_example' # str | FTP connection host (optional)
    ftp_user = 'ftp_user_example' # str | FTP User (optional)
    ftp_password = 'ftp_password_example' # str | FTP Password (optional)
    ftp_port = 56 # int | FTP Port (optional)
    ftp_store_dir = 'ftp_store_dir_example' # str | FTP Store dir (optional)
    api_key_3dcart = 'api_key_3dcart_example' # str | 3DCart API Key (optional)
    admin_account = 'admin_account_example' # str | It's a BigCommerce account for which API is enabled (optional)
    api_path = 'api_path_example' # str | BigCommerce API URL (optional)
    api_key = 'api_key_example' # str | Bigcommerce API Key (optional)
    client_id = 'client_id_example' # str | Client ID of the requesting app (optional)
    access_token = 'access_token_example' # str | Access token authorizing the app to access resources on behalf of a user (optional)
    context = 'context_example' # str | API Path section unique to the store (optional)
    access_token2 = 'access_token_example' # str | Access token authorizing the app to access resources on behalf of a user (optional)
    api_key_shopify = 'api_key_shopify_example' # str | Shopify API Key (optional)
    api_password = 'api_password_example' # str | Shopify API Password (optional)
    access_token_shopify = 'access_token_shopify_example' # str | Access token authorizing the app to access resources on behalf of a user (optional)
    api_key2 = 'api_key_example' # str | Neto API Key (optional)
    api_username = 'api_username_example' # str | Neto User Name (optional)
    encrypted_password = 'encrypted_password_example' # str | Volusion API Password (optional)
    login = 'login_example' # str | It's a Volusion account for which API is enabled (optional)
    api_user_adnsf = 'api_user_adnsf_example' # str | It's a AspDotNetStorefront account for which API is available (optional)
    api_pass = 'api_pass_example' # str | AspDotNetStorefront API Password (optional)
    private_key = 'private_key_example' # str | 3DCart Application Private Key (optional)
    app_token = 'app_token_example' # str | 3DCart Token from Application (optional)
    etsy_keystring = 'etsy_keystring_example' # str | Etsy keystring (optional)
    etsy_shared_secret = 'etsy_shared_secret_example' # str | Etsy shared secret (optional)
    token_secret = 'token_secret_example' # str | Secret token authorizing the app to access resources on behalf of a user (optional)
    ebay_client_id = 'ebay_client_id_example' # str | Application ID (AppID). (optional)
    ebay_client_secret = 'ebay_client_secret_example' # str | Shared Secret from eBay application (optional)
    ebay_runame = 'ebay_runame_example' # str | The RuName value that eBay assigns to your application. (optional)
    ebay_access_token = 'ebay_access_token_example' # str | Used to authenticate API requests. (optional)
    ebay_refresh_token = 'ebay_refresh_token_example' # str | Used to renew the access token. (optional)
    ebay_environment = 'production' # str | eBay environment (optional) (default to 'production')
    ebay_site_id = 0 # int | eBay global ID (optional) (default to 0)
    dw_client_id = 'dw_client_id_example' # str | Demandware client id (optional)
    dw_api_pass = 'dw_api_pass_example' # str | Demandware api password (optional)
    demandware_user_name = 'demandware_user_name_example' # str | Demandware user name (optional)
    demandware_user_password = 'demandware_user_password_example' # str | Demandware user password (optional)
    seller_id = 'seller_id_example' # str | Seller Id (optional)
    amazon_secret_key = 'amazon_secret_key_example' # str | Amazon Secret Key (optional)
    amazon_access_key_id = 'amazon_access_key_id_example' # str | Amazon Secret Key Id (optional)
    marketplaces_ids = 'marketplaces_ids_example' # str | Comma separated marketplaces ids (optional)
    environment = 'production' # str |  (optional) (default to 'production')
    hybris_client_id = 'hybris_client_id_example' # str | Omni Commerce Connector Client ID (optional)
    hybris_client_secret = 'hybris_client_secret_example' # str | Omni Commerce Connector Client Secret (optional)
    hybris_username = 'hybris_username_example' # str | User Name (optional)
    hybris_password = 'hybris_password_example' # str | User password (optional)
    hybris_websites = ['hybris_websites_example'] # List[str] | Websites to stores mapping data (optional)
    walmart_client_id = 'walmart_client_id_example' # str | Walmart client ID (optional)
    walmart_client_secret = 'walmart_client_secret_example' # str | Walmart client secret (optional)
    walmart_environment = 'production' # str | Walmart environment (optional) (default to 'production')
    walmart_channel_type = 'walmart_channel_type_example' # str | Walmart WM_CONSUMER.CHANNEL.TYPE header (optional)
    lightspeed_api_key = 'lightspeed_api_key_example' # str | LightSpeed api key (optional)
    lightspeed_api_secret = 'lightspeed_api_secret_example' # str | LightSpeed api secret (optional)
    shopware_access_key = 'shopware_access_key_example' # str | Shopware access key (optional)
    shopware_api_key = 'shopware_api_key_example' # str | Shopware api key (optional)
    shopware_api_secret = 'shopware_api_secret_example' # str | Shopware client secret access key (optional)
    commercehq_api_key = 'commercehq_api_key_example' # str | CommerceHQ api key (optional)
    commercehq_api_password = 'commercehq_api_password_example' # str | CommerceHQ api password (optional)
    var_3dcart_private_key = 'var_3dcart_private_key_example' # str | 3DCart Private Key (optional)
    var_3dcart_access_token = 'var_3dcart_access_token_example' # str | 3DCart Token (optional)
    wc_consumer_key = 'wc_consumer_key_example' # str | Woocommerce consumer key (optional)
    wc_consumer_secret = 'wc_consumer_secret_example' # str | Woocommerce consumer secret (optional)
    magento_consumer_key = 'magento_consumer_key_example' # str | Magento Consumer Key (optional)
    magento_consumer_secret = 'magento_consumer_secret_example' # str | Magento Consumer Secret (optional)
    magento_access_token = 'magento_access_token_example' # str | Magento Access Token (optional)
    magento_token_secret = 'magento_token_secret_example' # str | Magento Token Secret (optional)
    prestashop_webservice_key = 'prestashop_webservice_key_example' # str | Prestashop webservice key (optional)
    wix_app_id = 'wix_app_id_example' # str | Wix App ID (optional)
    wix_app_secret_key = 'wix_app_secret_key_example' # str | Wix App Secret Key (optional)
    wix_refresh_token = 'wix_refresh_token_example' # str | Wix refresh token (optional)
    mercado_libre_app_id = 'mercado_libre_app_id_example' # str | Mercado Libre App ID (optional)
    mercado_libre_app_secret_key = 'mercado_libre_app_secret_key_example' # str | Mercado Libre App Secret Key (optional)
    mercado_libre_refresh_token = 'mercado_libre_refresh_token_example' # str | Mercado Libre Refresh Token (optional)
    zid_client_id = 56 # int | Zid Client ID (optional)
    zid_client_secret = 'zid_client_secret_example' # str | Zid Client Secret (optional)
    zid_access_token = 'zid_access_token_example' # str | Zid Access Token (optional)
    zid_authorization = 'zid_authorization_example' # str | Zid Authorization (optional)
    zid_refresh_token = 'zid_refresh_token_example' # str | Zid refresh token (optional)

    try:
        api_response = api_instance.cart_create(cart_id, store_url, etsy_client_id, etsy_refresh_token, store_id, bridge_url=bridge_url, store_root=store_root, store_key=store_key, shared_secret=shared_secret, validate_version=validate_version, verify=verify, db_tables_prefix=db_tables_prefix, ftp_host=ftp_host, ftp_user=ftp_user, ftp_password=ftp_password, ftp_port=ftp_port, ftp_store_dir=ftp_store_dir, api_key_3dcart=api_key_3dcart, admin_account=admin_account, api_path=api_path, api_key=api_key, client_id=client_id, access_token=access_token, context=context, access_token2=access_token2, api_key_shopify=api_key_shopify, api_password=api_password, access_token_shopify=access_token_shopify, api_key2=api_key2, api_username=api_username, encrypted_password=encrypted_password, login=login, api_user_adnsf=api_user_adnsf, api_pass=api_pass, private_key=private_key, app_token=app_token, etsy_keystring=etsy_keystring, etsy_shared_secret=etsy_shared_secret, token_secret=token_secret, ebay_client_id=ebay_client_id, ebay_client_secret=ebay_client_secret, ebay_runame=ebay_runame, ebay_access_token=ebay_access_token, ebay_refresh_token=ebay_refresh_token, ebay_environment=ebay_environment, ebay_site_id=ebay_site_id, dw_client_id=dw_client_id, dw_api_pass=dw_api_pass, demandware_user_name=demandware_user_name, demandware_user_password=demandware_user_password, seller_id=seller_id, amazon_secret_key=amazon_secret_key, amazon_access_key_id=amazon_access_key_id, marketplaces_ids=marketplaces_ids, environment=environment, hybris_client_id=hybris_client_id, hybris_client_secret=hybris_client_secret, hybris_username=hybris_username, hybris_password=hybris_password, hybris_websites=hybris_websites, walmart_client_id=walmart_client_id, walmart_client_secret=walmart_client_secret, walmart_environment=walmart_environment, walmart_channel_type=walmart_channel_type, lightspeed_api_key=lightspeed_api_key, lightspeed_api_secret=lightspeed_api_secret, shopware_access_key=shopware_access_key, shopware_api_key=shopware_api_key, shopware_api_secret=shopware_api_secret, commercehq_api_key=commercehq_api_key, commercehq_api_password=commercehq_api_password, var_3dcart_private_key=var_3dcart_private_key, var_3dcart_access_token=var_3dcart_access_token, wc_consumer_key=wc_consumer_key, wc_consumer_secret=wc_consumer_secret, magento_consumer_key=magento_consumer_key, magento_consumer_secret=magento_consumer_secret, magento_access_token=magento_access_token, magento_token_secret=magento_token_secret, prestashop_webservice_key=prestashop_webservice_key, wix_app_id=wix_app_id, wix_app_secret_key=wix_app_secret_key, wix_refresh_token=wix_refresh_token, mercado_libre_app_id=mercado_libre_app_id, mercado_libre_app_secret_key=mercado_libre_app_secret_key, mercado_libre_refresh_token=mercado_libre_refresh_token, zid_client_id=zid_client_id, zid_client_secret=zid_client_secret, zid_access_token=zid_access_token, zid_authorization=zid_authorization, zid_refresh_token=zid_refresh_token)
        print("The response of CartApi->cart_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart_id** | **str**| Store’s identifier which you can get from cart_list method | 
 **store_url** | **str**| A web address of a store that you would like to connect to API2Cart | 
 **etsy_client_id** | **str**| Etsy Client Id | 
 **etsy_refresh_token** | **str**| Etsy Refresh token | 
 **store_id** | **str**| Store Id | 
 **bridge_url** | **str**| This parameter allows to set up store with custom bridge url (also you must use store_root parameter if a bridge folder is not in the root folder of the store) | [optional] 
 **store_root** | **str**| Absolute path to the store root directory (used with \&quot;bridge_url\&quot; parameter) | [optional] 
 **store_key** | **str**| Set this parameter if bridge is already uploaded to store | [optional] 
 **shared_secret** | **str**| Shared secret | [optional] 
 **validate_version** | **bool**| Specify if api2cart should validate cart version | [optional] [default to False]
 **verify** | **bool**| Enables or disables cart&#39;s verification | [optional] [default to True]
 **db_tables_prefix** | **str**| DB tables prefix | [optional] 
 **ftp_host** | **str**| FTP connection host | [optional] 
 **ftp_user** | **str**| FTP User | [optional] 
 **ftp_password** | **str**| FTP Password | [optional] 
 **ftp_port** | **int**| FTP Port | [optional] 
 **ftp_store_dir** | **str**| FTP Store dir | [optional] 
 **api_key_3dcart** | **str**| 3DCart API Key | [optional] 
 **admin_account** | **str**| It&#39;s a BigCommerce account for which API is enabled | [optional] 
 **api_path** | **str**| BigCommerce API URL | [optional] 
 **api_key** | **str**| Bigcommerce API Key | [optional] 
 **client_id** | **str**| Client ID of the requesting app | [optional] 
 **access_token** | **str**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **context** | **str**| API Path section unique to the store | [optional] 
 **access_token2** | **str**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **api_key_shopify** | **str**| Shopify API Key | [optional] 
 **api_password** | **str**| Shopify API Password | [optional] 
 **access_token_shopify** | **str**| Access token authorizing the app to access resources on behalf of a user | [optional] 
 **api_key2** | **str**| Neto API Key | [optional] 
 **api_username** | **str**| Neto User Name | [optional] 
 **encrypted_password** | **str**| Volusion API Password | [optional] 
 **login** | **str**| It&#39;s a Volusion account for which API is enabled | [optional] 
 **api_user_adnsf** | **str**| It&#39;s a AspDotNetStorefront account for which API is available | [optional] 
 **api_pass** | **str**| AspDotNetStorefront API Password | [optional] 
 **private_key** | **str**| 3DCart Application Private Key | [optional] 
 **app_token** | **str**| 3DCart Token from Application | [optional] 
 **etsy_keystring** | **str**| Etsy keystring | [optional] 
 **etsy_shared_secret** | **str**| Etsy shared secret | [optional] 
 **token_secret** | **str**| Secret token authorizing the app to access resources on behalf of a user | [optional] 
 **ebay_client_id** | **str**| Application ID (AppID). | [optional] 
 **ebay_client_secret** | **str**| Shared Secret from eBay application | [optional] 
 **ebay_runame** | **str**| The RuName value that eBay assigns to your application. | [optional] 
 **ebay_access_token** | **str**| Used to authenticate API requests. | [optional] 
 **ebay_refresh_token** | **str**| Used to renew the access token. | [optional] 
 **ebay_environment** | **str**| eBay environment | [optional] [default to &#39;production&#39;]
 **ebay_site_id** | **int**| eBay global ID | [optional] [default to 0]
 **dw_client_id** | **str**| Demandware client id | [optional] 
 **dw_api_pass** | **str**| Demandware api password | [optional] 
 **demandware_user_name** | **str**| Demandware user name | [optional] 
 **demandware_user_password** | **str**| Demandware user password | [optional] 
 **seller_id** | **str**| Seller Id | [optional] 
 **amazon_secret_key** | **str**| Amazon Secret Key | [optional] 
 **amazon_access_key_id** | **str**| Amazon Secret Key Id | [optional] 
 **marketplaces_ids** | **str**| Comma separated marketplaces ids | [optional] 
 **environment** | **str**|  | [optional] [default to &#39;production&#39;]
 **hybris_client_id** | **str**| Omni Commerce Connector Client ID | [optional] 
 **hybris_client_secret** | **str**| Omni Commerce Connector Client Secret | [optional] 
 **hybris_username** | **str**| User Name | [optional] 
 **hybris_password** | **str**| User password | [optional] 
 **hybris_websites** | [**List[str]**](str.md)| Websites to stores mapping data | [optional] 
 **walmart_client_id** | **str**| Walmart client ID | [optional] 
 **walmart_client_secret** | **str**| Walmart client secret | [optional] 
 **walmart_environment** | **str**| Walmart environment | [optional] [default to &#39;production&#39;]
 **walmart_channel_type** | **str**| Walmart WM_CONSUMER.CHANNEL.TYPE header | [optional] 
 **lightspeed_api_key** | **str**| LightSpeed api key | [optional] 
 **lightspeed_api_secret** | **str**| LightSpeed api secret | [optional] 
 **shopware_access_key** | **str**| Shopware access key | [optional] 
 **shopware_api_key** | **str**| Shopware api key | [optional] 
 **shopware_api_secret** | **str**| Shopware client secret access key | [optional] 
 **commercehq_api_key** | **str**| CommerceHQ api key | [optional] 
 **commercehq_api_password** | **str**| CommerceHQ api password | [optional] 
 **var_3dcart_private_key** | **str**| 3DCart Private Key | [optional] 
 **var_3dcart_access_token** | **str**| 3DCart Token | [optional] 
 **wc_consumer_key** | **str**| Woocommerce consumer key | [optional] 
 **wc_consumer_secret** | **str**| Woocommerce consumer secret | [optional] 
 **magento_consumer_key** | **str**| Magento Consumer Key | [optional] 
 **magento_consumer_secret** | **str**| Magento Consumer Secret | [optional] 
 **magento_access_token** | **str**| Magento Access Token | [optional] 
 **magento_token_secret** | **str**| Magento Token Secret | [optional] 
 **prestashop_webservice_key** | **str**| Prestashop webservice key | [optional] 
 **wix_app_id** | **str**| Wix App ID | [optional] 
 **wix_app_secret_key** | **str**| Wix App Secret Key | [optional] 
 **wix_refresh_token** | **str**| Wix refresh token | [optional] 
 **mercado_libre_app_id** | **str**| Mercado Libre App ID | [optional] 
 **mercado_libre_app_secret_key** | **str**| Mercado Libre App Secret Key | [optional] 
 **mercado_libre_refresh_token** | **str**| Mercado Libre Refresh Token | [optional] 
 **zid_client_id** | **int**| Zid Client ID | [optional] 
 **zid_client_secret** | **str**| Zid Client Secret | [optional] 
 **zid_access_token** | **str**| Zid Access Token | [optional] 
 **zid_authorization** | **str**| Zid Authorization | [optional] 
 **zid_refresh_token** | **str**| Zid refresh token | [optional] 

### Return type

[**AccountCartAdd200Response**](AccountCartAdd200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_delete**
> CartDelete200Response cart_delete(delete_bridge=delete_bridge)



Remove store from API2Cart

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_delete200_response import CartDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    delete_bridge = True # bool | Identifies if there is a necessity to delete bridge (optional) (default to True)

    try:
        api_response = api_instance.cart_delete(delete_bridge=delete_bridge)
        print("The response of CartApi->cart_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_bridge** | **bool**| Identifies if there is a necessity to delete bridge | [optional] [default to True]

### Return type

[**CartDelete200Response**](CartDelete200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_disconnect**
> CartDisconnect200Response cart_disconnect(delete_bridge=delete_bridge)



Disconnect with the store and clear store session data.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_disconnect200_response import CartDisconnect200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    delete_bridge = False # bool | Identifies if there is a necessity to delete bridge (optional) (default to False)

    try:
        api_response = api_instance.cart_disconnect(delete_bridge=delete_bridge)
        print("The response of CartApi->cart_disconnect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_disconnect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_bridge** | **bool**| Identifies if there is a necessity to delete bridge | [optional] [default to False]

### Return type

[**CartDisconnect200Response**](CartDisconnect200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_giftcard_add**
> CartGiftcardAdd200Response cart_giftcard_add(amount, code=code, owner_email=owner_email, recipient_email=recipient_email)



Create new gift card

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_giftcard_add200_response import CartGiftcardAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    amount = 3.4 # float | Defines the gift card amount value.
    code = 'code_example' # str | Gift card code (optional)
    owner_email = 'owner_email_example' # str | Gift card owner email (optional)
    recipient_email = 'recipient_email_example' # str | Gift card recipient email (optional)

    try:
        api_response = api_instance.cart_giftcard_add(amount, code=code, owner_email=owner_email, recipient_email=recipient_email)
        print("The response of CartApi->cart_giftcard_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_giftcard_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **float**| Defines the gift card amount value. | 
 **code** | **str**| Gift card code | [optional] 
 **owner_email** | **str**| Gift card owner email | [optional] 
 **recipient_email** | **str**| Gift card recipient email | [optional] 

### Return type

[**CartGiftcardAdd200Response**](CartGiftcardAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_giftcard_count**
> CartGiftcardCount200Response cart_giftcard_count(store_id=store_id)



Get gift cards count.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_giftcard_count200_response import CartGiftcardCount200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.cart_giftcard_count(store_id=store_id)
        print("The response of CartApi->cart_giftcard_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_giftcard_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**CartGiftcardCount200Response**](CartGiftcardCount200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_giftcard_list**
> ModelResponseCartGiftCardList cart_giftcard_list(page_cursor=page_cursor, start=start, count=count, store_id=store_id, params=params, response_fields=response_fields, exclude=exclude)



Get gift cards list.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_cart_gift_card_list import ModelResponseCartGiftCardList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    store_id = 'store_id_example' # str | Store Id (optional)
    params = 'id,code,name' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,code,name')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.cart_giftcard_list(page_cursor=page_cursor, start=start, count=count, store_id=store_id, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of CartApi->cart_giftcard_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_giftcard_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **store_id** | **str**| Store Id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,code,name&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartGiftCardList**](ModelResponseCartGiftCardList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_info**
> CartInfo200Response cart_info(params=params, response_fields=response_fields, exclude=exclude, store_id=store_id)



Get cart information

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_info200_response import CartInfo200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    params = 'store_name,store_url,db_prefix' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'store_name,store_url,db_prefix')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.cart_info(params=params, response_fields=response_fields, exclude=exclude, store_id=store_id)
        print("The response of CartApi->cart_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;store_name,store_url,db_prefix&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**CartInfo200Response**](CartInfo200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_list**
> CartList200Response cart_list()



Get list of supported carts

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.cart_list200_response import CartList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)

    try:
        api_response = api_instance.cart_list()
        print("The response of CartApi->cart_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CartList200Response**](CartList200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_meta_data_list**
> ModelResponseCartMetaDataList cart_meta_data_list(entity_id, entity=entity, store_id=store_id, lang_id=lang_id, key=key, count=count, page_cursor=page_cursor, params=params, response_fields=response_fields, exclude=exclude)



Get entity meta data

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_cart_meta_data_list import ModelResponseCartMetaDataList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    entity_id = 'entity_id_example' # str | Entity Id
    entity = 'product' # str | Entity (optional) (default to 'product')
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    key = 'key_example' # str | Key (optional)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    params = 'key,value' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'key,value')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.cart_meta_data_list(entity_id, entity=entity, store_id=store_id, lang_id=lang_id, key=key, count=count, page_cursor=page_cursor, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of CartApi->cart_meta_data_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_meta_data_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **str**| Entity Id | 
 **entity** | **str**| Entity | [optional] [default to &#39;product&#39;]
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **key** | **str**| Key | [optional] 
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;key,value&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartMetaDataList**](ModelResponseCartMetaDataList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_meta_data_set**
> AttributeAdd200Response cart_meta_data_set(entity_id, key, value, namespace, entity=entity, store_id=store_id, lang_id=lang_id)



Set meta data for a specific entity

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_add200_response import AttributeAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    entity_id = 'entity_id_example' # str | Entity Id
    key = 'key_example' # str | Key
    value = 'value_example' # str | Value
    namespace = 'namespace_example' # str | Metafield namespace
    entity = 'product' # str | Entity (optional) (default to 'product')
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)

    try:
        api_response = api_instance.cart_meta_data_set(entity_id, key, value, namespace, entity=entity, store_id=store_id, lang_id=lang_id)
        print("The response of CartApi->cart_meta_data_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_meta_data_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **str**| Entity Id | 
 **key** | **str**| Key | 
 **value** | **str**| Value | 
 **namespace** | **str**| Metafield namespace | 
 **entity** | **str**| Entity | [optional] [default to &#39;product&#39;]
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 

### Return type

[**AttributeAdd200Response**](AttributeAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_meta_data_unset**
> BasketLiveShippingServiceDelete200Response cart_meta_data_unset(entity_id, key, id, entity=entity, store_id=store_id)



Unset meta data for a specific entity

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.basket_live_shipping_service_delete200_response import BasketLiveShippingServiceDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    entity_id = 'entity_id_example' # str | Entity Id
    key = 'key_example' # str | Key
    id = 'id_example' # str | Entity id
    entity = 'product' # str | Entity (optional) (default to 'product')
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.cart_meta_data_unset(entity_id, key, id, entity=entity, store_id=store_id)
        print("The response of CartApi->cart_meta_data_unset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_meta_data_unset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_id** | **str**| Entity Id | 
 **key** | **str**| Key | 
 **id** | **str**| Entity id | 
 **entity** | **str**| Entity | [optional] [default to &#39;product&#39;]
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**BasketLiveShippingServiceDelete200Response**](BasketLiveShippingServiceDelete200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_methods**
> CartMethods200Response cart_methods()



Get list of cart methods

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_methods200_response import CartMethods200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)

    try:
        api_response = api_instance.cart_methods()
        print("The response of CartApi->cart_methods:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_methods: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CartMethods200Response**](CartMethods200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_plugin_list**
> CartPluginList200Response cart_plugin_list(store_key=store_key, store_id=store_id, start=start, count=count)



Get list of installed plugins

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_plugin_list200_response import CartPluginList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    store_key = 'store_key_example' # str | Set this parameter if bridge is already uploaded to store (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)

    try:
        api_response = api_instance.cart_plugin_list(store_key=store_key, store_id=store_id, start=start, count=count)
        print("The response of CartApi->cart_plugin_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_plugin_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_key** | **str**| Set this parameter if bridge is already uploaded to store | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]

### Return type

[**CartPluginList200Response**](CartPluginList200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_script_add**
> CartScriptAdd200Response cart_script_add(name=name, description=description, html=html, src=src, load_method=load_method, scope=scope, store_id=store_id)



Add new script to the storefront

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_script_add200_response import CartScriptAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    name = 'name_example' # str | The user-friendly script name (optional)
    description = 'description_example' # str | The user-friendly description (optional)
    html = 'html_example' # str | An html string containing exactly one `script` tag. (optional)
    src = 'src_example' # str | The URL of the remote script (optional)
    load_method = 'load_method_example' # str | The load method to use for the script (optional)
    scope = 'storefront' # str | The page or pages on the online store where the script should be included (optional) (default to 'storefront')
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.cart_script_add(name=name, description=description, html=html, src=src, load_method=load_method, scope=scope, store_id=store_id)
        print("The response of CartApi->cart_script_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_script_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The user-friendly script name | [optional] 
 **description** | **str**| The user-friendly description | [optional] 
 **html** | **str**| An html string containing exactly one &#x60;script&#x60; tag. | [optional] 
 **src** | **str**| The URL of the remote script | [optional] 
 **load_method** | **str**| The load method to use for the script | [optional] 
 **scope** | **str**| The page or pages on the online store where the script should be included | [optional] [default to &#39;storefront&#39;]
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**CartScriptAdd200Response**](CartScriptAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_script_delete**
> BridgeDelete200Response cart_script_delete(id, store_id=store_id)



Remove script from the storefront

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.bridge_delete200_response import BridgeDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    id = 'id_example' # str | Entity id
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.cart_script_delete(id, store_id=store_id)
        print("The response of CartApi->cart_script_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_script_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**BridgeDelete200Response**](BridgeDelete200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_script_list**
> ModelResponseCartScriptList cart_script_list(page_cursor=page_cursor, start=start, count=count, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, script_ids=script_ids, store_id=store_id, params=params, response_fields=response_fields, exclude=exclude)



Get scripts installed to the storefront

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_cart_script_list import ModelResponseCartScriptList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    script_ids = 'script_ids_example' # str | Retrieves only scripts with specific ids (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    params = 'id,name,description' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,description')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.cart_script_list(page_cursor=page_cursor, start=start, count=count, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, script_ids=script_ids, store_id=store_id, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of CartApi->cart_script_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_script_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **script_ids** | **str**| Retrieves only scripts with specific ids | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,description&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**ModelResponseCartScriptList**](ModelResponseCartScriptList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_shipping_zones_list**
> CartShippingZonesList200Response cart_shipping_zones_list(store_id=store_id, start=start, count=count, params=params, response_fields=response_fields, exclude=exclude)



Get list of shipping zones

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_shipping_zones_list200_response import CartShippingZonesList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    store_id = 'store_id_example' # str | Store Id (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'id,name,enabled' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,enabled')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.cart_shipping_zones_list(store_id=store_id, start=start, count=count, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of CartApi->cart_shipping_zones_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_shipping_zones_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_id** | **str**| Store Id | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,enabled&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**CartShippingZonesList200Response**](CartShippingZonesList200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cart_validate**
> CartValidate200Response cart_validate(validate_version=validate_version)



Check store availability, bridge connection for the downloadable carts, identify DB prefix, validate API accesses for API carts.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.cart_validate200_response import CartValidate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CartApi(api_client)
    validate_version = False # bool | Specify if api2cart should validate cart version (optional) (default to False)

    try:
        api_response = api_instance.cart_validate(validate_version=validate_version)
        print("The response of CartApi->cart_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CartApi->cart_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validate_version** | **bool**| Specify if api2cart should validate cart version | [optional] [default to False]

### Return type

[**CartValidate200Response**](CartValidate200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

