# openapi_client.TemplatesApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**initiate_api_key**](TemplatesApi.md#initiate_api_key) | **GET** /new/apikey | Get a template of an Otoroshi Api Key
[**initiate_service**](TemplatesApi.md#initiate_service) | **GET** /new/service | Get a template of an Otoroshi service descriptor
[**initiate_service_group**](TemplatesApi.md#initiate_service_group) | **GET** /new/group | Get a template of an Otoroshi service group


# **initiate_api_key**
> ApiKey initiate_api_key()

Get a template of an Otoroshi Api Key

Get a template of an Otoroshi Api Key. The generated entity is not persisted

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
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
    api_instance = openapi_client.TemplatesApi(api_client)

    try:
        # Get a template of an Otoroshi Api Key
        api_response = api_instance.initiate_api_key()
        print("The response of TemplatesApi->initiate_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->initiate_api_key: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiKey**](ApiKey.md)

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

# **initiate_service**
> Service initiate_service()

Get a template of an Otoroshi service descriptor

Get a template of an Otoroshi service descriptor. The generated entity is not persisted

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.service import Service
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
    api_instance = openapi_client.TemplatesApi(api_client)

    try:
        # Get a template of an Otoroshi service descriptor
        api_response = api_instance.initiate_service()
        print("The response of TemplatesApi->initiate_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->initiate_service: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Service**](Service.md)

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

# **initiate_service_group**
> Group initiate_service_group()

Get a template of an Otoroshi service group

Get a template of an Otoroshi service group. The generated entity is not persisted

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.group import Group
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
    api_instance = openapi_client.TemplatesApi(api_client)

    try:
        # Get a template of an Otoroshi service group
        api_response = api_instance.initiate_service_group()
        print("The response of TemplatesApi->initiate_service_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->initiate_service_group: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Group**](Group.md)

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

