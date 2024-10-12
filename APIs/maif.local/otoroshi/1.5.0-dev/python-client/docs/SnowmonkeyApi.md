# openapi_client.SnowmonkeyApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_snow_monkey_config**](SnowmonkeyApi.md#get_snow_monkey_config) | **GET** /api/snowmonkey/config | Get current Snow Monkey config
[**get_snow_monkey_outages**](SnowmonkeyApi.md#get_snow_monkey_outages) | **GET** /api/snowmonkey/outages | Get all current Snow Monkey ourages
[**patch_snow_monkey**](SnowmonkeyApi.md#patch_snow_monkey) | **PATCH** /api/snowmonkey/config | Update current Snow Monkey config
[**reset_snow_monkey**](SnowmonkeyApi.md#reset_snow_monkey) | **DELETE** /api/snowmonkey/outages | Reset Snow Monkey Outages for the day
[**start_snow_monkey**](SnowmonkeyApi.md#start_snow_monkey) | **POST** /api/snowmonkey/_start | Start the Snow Monkey
[**stop_snow_monkey**](SnowmonkeyApi.md#stop_snow_monkey) | **POST** /api/snowmonkey/_stop | Stop the Snow Monkey
[**update_snow_monkey**](SnowmonkeyApi.md#update_snow_monkey) | **PUT** /api/snowmonkey/config | Update current Snow Monkey config


# **get_snow_monkey_config**
> SnowMonkeyConfig get_snow_monkey_config()

Get current Snow Monkey config

Get current Snow Monkey config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.snow_monkey_config import SnowMonkeyConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnowmonkeyApi(api_client)

    try:
        # Get current Snow Monkey config
        api_response = api_instance.get_snow_monkey_config()
        print("The response of SnowmonkeyApi->get_snow_monkey_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnowmonkeyApi->get_snow_monkey_config: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SnowMonkeyConfig**](SnowMonkeyConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_snow_monkey_outages**
> List[Outage] get_snow_monkey_outages()

Get all current Snow Monkey ourages

Get all current Snow Monkey ourages

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.outage import Outage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnowmonkeyApi(api_client)

    try:
        # Get all current Snow Monkey ourages
        api_response = api_instance.get_snow_monkey_outages()
        print("The response of SnowmonkeyApi->get_snow_monkey_outages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnowmonkeyApi->get_snow_monkey_outages: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Outage]**](Outage.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_snow_monkey**
> SnowMonkeyConfig patch_snow_monkey(group=group)

Update current Snow Monkey config

Update current Snow Monkey config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.models.snow_monkey_config import SnowMonkeyConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnowmonkeyApi(api_client)
    group = openapi_client.Group() # Group |  (optional)

    try:
        # Update current Snow Monkey config
        api_response = api_instance.patch_snow_monkey(group=group)
        print("The response of SnowmonkeyApi->patch_snow_monkey:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnowmonkeyApi->patch_snow_monkey: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)|  | [optional] 

### Return type

[**SnowMonkeyConfig**](SnowMonkeyConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_snow_monkey**
> Done reset_snow_monkey()

Reset Snow Monkey Outages for the day

Reset Snow Monkey Outages for the day

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.done import Done
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnowmonkeyApi(api_client)

    try:
        # Reset Snow Monkey Outages for the day
        api_response = api_instance.reset_snow_monkey()
        print("The response of SnowmonkeyApi->reset_snow_monkey:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnowmonkeyApi->reset_snow_monkey: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Done**](Done.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_snow_monkey**
> Done start_snow_monkey()

Start the Snow Monkey

Start the Snow Monkey

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.done import Done
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnowmonkeyApi(api_client)

    try:
        # Start the Snow Monkey
        api_response = api_instance.start_snow_monkey()
        print("The response of SnowmonkeyApi->start_snow_monkey:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnowmonkeyApi->start_snow_monkey: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Done**](Done.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_snow_monkey**
> Done stop_snow_monkey()

Stop the Snow Monkey

Stop the Snow Monkey

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.done import Done
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnowmonkeyApi(api_client)

    try:
        # Stop the Snow Monkey
        api_response = api_instance.stop_snow_monkey()
        print("The response of SnowmonkeyApi->stop_snow_monkey:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnowmonkeyApi->stop_snow_monkey: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Done**](Done.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_snow_monkey**
> SnowMonkeyConfig update_snow_monkey(group=group)

Update current Snow Monkey config

Update current Snow Monkey config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.models.snow_monkey_config import SnowMonkeyConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnowmonkeyApi(api_client)
    group = openapi_client.Group() # Group |  (optional)

    try:
        # Update current Snow Monkey config
        api_response = api_instance.update_snow_monkey(group=group)
        print("The response of SnowmonkeyApi->update_snow_monkey:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnowmonkeyApi->update_snow_monkey: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)|  | [optional] 

### Return type

[**SnowMonkeyConfig**](SnowMonkeyConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

