# openapi_client.DefaultApi

All URIs are relative to *https://www.sheerseo.com/seo/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rank_collect**](DefaultApi.md#rank_collect) | **POST** /rank-collect | 
[**rank_submit**](DefaultApi.md#rank_submit) | **POST** /rank-submit | 
[**serp_collect**](DefaultApi.md#serp_collect) | **POST** /serp-collect | 
[**serp_submit**](DefaultApi.md#serp_submit) | **POST** /serp-submit | 


# **rank_collect**
> RankCollectResponse rank_collect(body)



Submit serp jobs

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.collect_request import CollectRequest
from openapi_client.models.rank_collect_response import RankCollectResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.sheerseo.com/seo/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.sheerseo.com/seo/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.CollectRequest() # CollectRequest | The body of the reqest to collect SERPs

    try:
        api_response = api_instance.rank_collect(body)
        print("The response of DefaultApi->rank_collect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->rank_collect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CollectRequest**](CollectRequest.md)| The body of the reqest to collect SERPs | 

### Return type

[**RankCollectResponse**](RankCollectResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**503** | Server Overload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rank_submit**
> RankSubmitResponse rank_submit(body)



Submit rank jobs

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.rank_submit_request import RankSubmitRequest
from openapi_client.models.rank_submit_response import RankSubmitResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.sheerseo.com/seo/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.sheerseo.com/seo/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.RankSubmitRequest() # RankSubmitRequest | The body of the reqest to submit SERPs

    try:
        api_response = api_instance.rank_submit(body)
        print("The response of DefaultApi->rank_submit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->rank_submit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RankSubmitRequest**](RankSubmitRequest.md)| The body of the reqest to submit SERPs | 

### Return type

[**RankSubmitResponse**](RankSubmitResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**503** | Server Overload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **serp_collect**
> SerpCollectResponse serp_collect(body)



Submit serp jobs

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.collect_request import CollectRequest
from openapi_client.models.serp_collect_response import SerpCollectResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.sheerseo.com/seo/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.sheerseo.com/seo/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.CollectRequest() # CollectRequest | The body of the reqest to collect SERPs

    try:
        api_response = api_instance.serp_collect(body)
        print("The response of DefaultApi->serp_collect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->serp_collect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CollectRequest**](CollectRequest.md)| The body of the reqest to collect SERPs | 

### Return type

[**SerpCollectResponse**](SerpCollectResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**503** | Server Overload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **serp_submit**
> SerpSubmitResponse serp_submit(body)



Submit serp jobs

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.serp_submit_request import SerpSubmitRequest
from openapi_client.models.serp_submit_response import SerpSubmitResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.sheerseo.com/seo/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.sheerseo.com/seo/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.SerpSubmitRequest() # SerpSubmitRequest | The body of the reqest to submit SERPs

    try:
        api_response = api_instance.serp_submit(body)
        print("The response of DefaultApi->serp_submit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->serp_submit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SerpSubmitRequest**](SerpSubmitRequest.md)| The body of the reqest to submit SERPs | 

### Return type

[**SerpSubmitResponse**](SerpSubmitResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**503** | Server Overload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

