# openapi_client.AudiencesApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**audiences_get**](AudiencesApi.md#audiences_get) | **GET** /audiences | 
[**audiences_id_get**](AudiencesApi.md#audiences_id_get) | **GET** /audiences/{ID} | 
[**audiences_id_memberships_post**](AudiencesApi.md#audiences_id_memberships_post) | **POST** /audiences/{ID}/memberships | 


# **audiences_get**
> EndpointGetAudiences audiences_get(offset=offset, limit=limit)



Fetch all Daniapp audience segments that comprise the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_audiences import EndpointGetAudiences
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.AudiencesApi(api_client)
    offset = 0 # int |  (optional) (default to 0)
    limit = 50 # int |  (optional) (default to 50)

    try:
        api_response = api_instance.audiences_get(offset=offset, limit=limit)
        print("The response of AudiencesApi->audiences_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AudiencesApi->audiences_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**|  | [optional] [default to 0]
 **limit** | **int**|  | [optional] [default to 50]

### Return type

[**EndpointGetAudiences**](EndpointGetAudiences.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audiences_id_get**
> EndpointGetAudiencesID audiences_id_get(id)



Fetch an array of Daniapp audience segments that comprise the current access token's bubble.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_get_audiences_id import EndpointGetAudiencesID
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.AudiencesApi(api_client)
    id = [56] # List[int] | 

    try:
        api_response = api_instance.audiences_id_get(id)
        print("The response of AudiencesApi->audiences_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AudiencesApi->audiences_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[int]**](int.md)|  | 

### Return type

[**EndpointGetAudiencesID**](EndpointGetAudiencesID.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audiences_id_memberships_post**
> EndpointPostAudiencesIDMemberships audiences_id_memberships_post(id)



Create a membership record for the OAuth'ed end-user based on the current audience segment/bubble combination.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_audiences_id_memberships import EndpointPostAudiencesIDMemberships
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.daniweb.com/connect/api/v4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.daniweb.com/connect/api/v4"
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
    api_instance = openapi_client.AudiencesApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.audiences_id_memberships_post(id)
        print("The response of AudiencesApi->audiences_id_memberships_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AudiencesApi->audiences_id_memberships_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**EndpointPostAudiencesIDMemberships**](EndpointPostAudiencesIDMemberships.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

