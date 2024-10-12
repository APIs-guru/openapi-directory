# openapi_client.FulfillmentsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fulfillments_count_json_get**](FulfillmentsApi.md#fulfillments_count_json_get) | **GET** /fulfillments/count.json | Count all Fulfillments.
[**fulfillments_id_json_get**](FulfillmentsApi.md#fulfillments_id_json_get) | **GET** /fulfillments/{id}.json | Retrieve a single Fulfillment.
[**fulfillments_json_get**](FulfillmentsApi.md#fulfillments_json_get) | **GET** /fulfillments.json | Retrieve all Fulfillments.
[**order_id_fulfillments_json_get**](FulfillmentsApi.md#order_id_fulfillments_json_get) | **GET** /order/{id}/fulfillments.json | Retrieve the Fulfillments associated with the Order.


# **fulfillments_count_json_get**
> Count fulfillments_count_json_get(login, authtoken)

Count all Fulfillments.

### Example


```python
import openapi_client
from openapi_client.models.count import Count
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FulfillmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Count all Fulfillments.
        api_response = api_instance.fulfillments_count_json_get(login, authtoken)
        print("The response of FulfillmentsApi->fulfillments_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentsApi->fulfillments_count_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**Count**](Count.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fulfillments_id_json_get**
> Fulfillment fulfillments_id_json_get(login, authtoken, id)

Retrieve a single Fulfillment.

### Example


```python
import openapi_client
from openapi_client.models.fulfillment import Fulfillment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FulfillmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Fulfillment

    try:
        # Retrieve a single Fulfillment.
        api_response = api_instance.fulfillments_id_json_get(login, authtoken, id)
        print("The response of FulfillmentsApi->fulfillments_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentsApi->fulfillments_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Fulfillment | 

### Return type

[**Fulfillment**](Fulfillment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Fulfillment Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fulfillments_json_get**
> List[Fulfillment] fulfillments_json_get(login, authtoken, limit=limit, page=page)

Retrieve all Fulfillments.

### Example


```python
import openapi_client
from openapi_client.models.fulfillment import Fulfillment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FulfillmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    limit = 50 # int | List restriction (optional) (default to 50)
    page = 1 # int | List page (optional) (default to 1)

    try:
        # Retrieve all Fulfillments.
        api_response = api_instance.fulfillments_json_get(login, authtoken, limit=limit, page=page)
        print("The response of FulfillmentsApi->fulfillments_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentsApi->fulfillments_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **limit** | **int**| List restriction | [optional] [default to 50]
 **page** | **int**| List page | [optional] [default to 1]

### Return type

[**List[Fulfillment]**](Fulfillment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Fulfillments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_id_fulfillments_json_get**
> List[Fulfillment] order_id_fulfillments_json_get(login, authtoken, id)

Retrieve the Fulfillments associated with the Order.

### Example


```python
import openapi_client
from openapi_client.models.fulfillment import Fulfillment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FulfillmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Order

    try:
        # Retrieve the Fulfillments associated with the Order.
        api_response = api_instance.order_id_fulfillments_json_get(login, authtoken, id)
        print("The response of FulfillmentsApi->order_id_fulfillments_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FulfillmentsApi->order_id_fulfillments_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Order | 

### Return type

[**List[Fulfillment]**](Fulfillment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Fulfillment Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

