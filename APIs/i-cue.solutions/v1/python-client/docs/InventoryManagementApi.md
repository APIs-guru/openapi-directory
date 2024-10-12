# openapi_client.InventoryManagementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inventory_amazon_ipi_post**](InventoryManagementApi.md#inventory_amazon_ipi_post) | **POST** /inventory/amazon-ipi | Calculate Amazon Inventory Performance Index (IPI)
[**inventory_caryying_cost_post**](InventoryManagementApi.md#inventory_caryying_cost_post) | **POST** /inventory/caryying-cost | Carrying Cost
[**inventory_eoq_post**](InventoryManagementApi.md#inventory_eoq_post) | **POST** /inventory/eoq | Calculate economic order quantity
[**inventory_fill_rate_post**](InventoryManagementApi.md#inventory_fill_rate_post) | **POST** /inventory/fill-rate | Calculate fill rate
[**inventory_financial_imapct_forecast_accuracy_post**](InventoryManagementApi.md#inventory_financial_imapct_forecast_accuracy_post) | **POST** /inventory/financial-imapct-forecast-accuracy | Calculate financial impact of forecast accuracy
[**inventory_inventory_turnover_post**](InventoryManagementApi.md#inventory_inventory_turnover_post) | **POST** /inventory/inventory-turnover | Inventroy Turn-over
[**inventory_ltd_post**](InventoryManagementApi.md#inventory_ltd_post) | **POST** /inventory/ltd | Calculate lead time demand
[**inventory_moq_post**](InventoryManagementApi.md#inventory_moq_post) | **POST** /inventory/moq | Calculate minimum order quantity
[**inventory_optimal_service_level_post**](InventoryManagementApi.md#inventory_optimal_service_level_post) | **POST** /inventory/optimal-service-level | Calculate optimal service level
[**inventory_reorder_point_post**](InventoryManagementApi.md#inventory_reorder_point_post) | **POST** /inventory/reorder-point | Re-order Point
[**inventory_safety_stock_post**](InventoryManagementApi.md#inventory_safety_stock_post) | **POST** /inventory/safety-stock | Safety Stock
[**inventory_service_level_post**](InventoryManagementApi.md#inventory_service_level_post) | **POST** /inventory/service-level | Calculate service level
[**inventory_turns_post**](InventoryManagementApi.md#inventory_turns_post) | **POST** /inventory/turns | Calculate inventory turns


# **inventory_amazon_ipi_post**
> inventory_amazon_ipi_post(token=token)

Calculate Amazon Inventory Performance Index (IPI)

Calculate Amazon Inventory Performance Index (IPI)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate Amazon Inventory Performance Index (IPI)
        api_instance.inventory_amazon_ipi_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_amazon_ipi_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_caryying_cost_post**
> inventory_caryying_cost_post(token=token)

Carrying Cost

Carrying Cost

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Carrying Cost
        api_instance.inventory_caryying_cost_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_caryying_cost_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_eoq_post**
> inventory_eoq_post(token=token)

Calculate economic order quantity

Calculate economic order quantity

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate economic order quantity
        api_instance.inventory_eoq_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_eoq_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_fill_rate_post**
> inventory_fill_rate_post(token=token)

Calculate fill rate

Calculate fill rate

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate fill rate
        api_instance.inventory_fill_rate_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_fill_rate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_financial_imapct_forecast_accuracy_post**
> inventory_financial_imapct_forecast_accuracy_post(token=token)

Calculate financial impact of forecast accuracy

Calculate financial impact of forecast accuracy

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate financial impact of forecast accuracy
        api_instance.inventory_financial_imapct_forecast_accuracy_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_financial_imapct_forecast_accuracy_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_inventory_turnover_post**
> inventory_inventory_turnover_post(token=token)

Inventroy Turn-over

Inventroy Turn-over

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Inventroy Turn-over
        api_instance.inventory_inventory_turnover_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_inventory_turnover_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_ltd_post**
> inventory_ltd_post(token=token)

Calculate lead time demand

Calculate lead time demand

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate lead time demand
        api_instance.inventory_ltd_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_ltd_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_moq_post**
> inventory_moq_post(token=token)

Calculate minimum order quantity

Calculate minimum order quantity

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate minimum order quantity
        api_instance.inventory_moq_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_moq_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_optimal_service_level_post**
> inventory_optimal_service_level_post(token=token)

Calculate optimal service level

Calculate optimal service level

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate optimal service level
        api_instance.inventory_optimal_service_level_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_optimal_service_level_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_reorder_point_post**
> inventory_reorder_point_post(token=token)

Re-order Point

Re-order Point

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Re-order Point
        api_instance.inventory_reorder_point_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_reorder_point_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_safety_stock_post**
> inventory_safety_stock_post(token=token)

Safety Stock

Safety Stock

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Safety Stock
        api_instance.inventory_safety_stock_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_safety_stock_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_service_level_post**
> inventory_service_level_post(token=token)

Calculate service level

Calculate service level

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate service level
        api_instance.inventory_service_level_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_service_level_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **inventory_turns_post**
> inventory_turns_post(token=token)

Calculate inventory turns

Calculate inventory turns

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InventoryManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Calculate inventory turns
        api_instance.inventory_turns_post(token=token)
    except Exception as e:
        print("Exception when calling InventoryManagementApi->inventory_turns_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

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
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

