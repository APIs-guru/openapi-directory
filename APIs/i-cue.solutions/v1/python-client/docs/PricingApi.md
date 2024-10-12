# openapi_client.PricingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pricing_bundle_pricing_post**](PricingApi.md#pricing_bundle_pricing_post) | **POST** /pricing/bundle-pricing | Bundle pricing
[**pricing_competitive_pricing_post**](PricingApi.md#pricing_competitive_pricing_post) | **POST** /pricing/competitive-pricing | 
[**pricing_cost_plus_pricing_post**](PricingApi.md#pricing_cost_plus_pricing_post) | **POST** /pricing/cost-plus-pricing | 
[**pricing_decoy_pricing_post**](PricingApi.md#pricing_decoy_pricing_post) | **POST** /pricing/decoy-pricing | 
[**pricing_odd_pricing_post**](PricingApi.md#pricing_odd_pricing_post) | **POST** /pricing/odd-pricing | 
[**pricing_penetration_pricing_post**](PricingApi.md#pricing_penetration_pricing_post) | **POST** /pricing/penetration-pricing | 
[**pricing_price_elasticity_of_demand_post**](PricingApi.md#pricing_price_elasticity_of_demand_post) | **POST** /pricing/price-elasticity-of-demand | 


# **pricing_bundle_pricing_post**
> pricing_bundle_pricing_post(token=token)

Bundle pricing

Bundle pricing

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
    api_instance = openapi_client.PricingApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Bundle pricing
        api_instance.pricing_bundle_pricing_post(token=token)
    except Exception as e:
        print("Exception when calling PricingApi->pricing_bundle_pricing_post: %s\n" % e)
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

# **pricing_competitive_pricing_post**
> pricing_competitive_pricing_post(token=token)





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
    api_instance = openapi_client.PricingApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # 
        api_instance.pricing_competitive_pricing_post(token=token)
    except Exception as e:
        print("Exception when calling PricingApi->pricing_competitive_pricing_post: %s\n" % e)
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

# **pricing_cost_plus_pricing_post**
> pricing_cost_plus_pricing_post(token=token)





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
    api_instance = openapi_client.PricingApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # 
        api_instance.pricing_cost_plus_pricing_post(token=token)
    except Exception as e:
        print("Exception when calling PricingApi->pricing_cost_plus_pricing_post: %s\n" % e)
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

# **pricing_decoy_pricing_post**
> pricing_decoy_pricing_post(token=token)





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
    api_instance = openapi_client.PricingApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # 
        api_instance.pricing_decoy_pricing_post(token=token)
    except Exception as e:
        print("Exception when calling PricingApi->pricing_decoy_pricing_post: %s\n" % e)
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

# **pricing_odd_pricing_post**
> pricing_odd_pricing_post(token=token)





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
    api_instance = openapi_client.PricingApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # 
        api_instance.pricing_odd_pricing_post(token=token)
    except Exception as e:
        print("Exception when calling PricingApi->pricing_odd_pricing_post: %s\n" % e)
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

# **pricing_penetration_pricing_post**
> pricing_penetration_pricing_post(token=token)





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
    api_instance = openapi_client.PricingApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # 
        api_instance.pricing_penetration_pricing_post(token=token)
    except Exception as e:
        print("Exception when calling PricingApi->pricing_penetration_pricing_post: %s\n" % e)
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

# **pricing_price_elasticity_of_demand_post**
> pricing_price_elasticity_of_demand_post(token=token)





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
    api_instance = openapi_client.PricingApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # 
        api_instance.pricing_price_elasticity_of_demand_post(token=token)
    except Exception as e:
        print("Exception when calling PricingApi->pricing_price_elasticity_of_demand_post: %s\n" % e)
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

