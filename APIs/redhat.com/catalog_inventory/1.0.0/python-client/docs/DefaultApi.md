# openapi_client.DefaultApi

All URIs are relative to *https://cloud.redhat.com//api/catalog-inventory/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_documentation**](DefaultApi.md#get_documentation) | **GET** /openapi.json | Return this API document in JSON format
[**post_graph_ql**](DefaultApi.md#post_graph_ql) | **POST** /graphql | Perform a GraphQL Query


# **get_documentation**
> object get_documentation()

Return this API document in JSON format

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloud.redhat.com//api/catalog-inventory/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloud.redhat.com//api/catalog-inventory/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: UserSecurity
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Return this API document in JSON format
        api_response = api_instance.get_documentation()
        print("The response of DefaultApi->get_documentation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_documentation: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The API document for this version of the API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_graph_ql**
> GraphQLResponse post_graph_ql(graph_ql_request)

Perform a GraphQL Query

Performs a GraphQL Query

### Example

* Basic Authentication (UserSecurity):

```python
import openapi_client
from openapi_client.models.graph_ql_request import GraphQLRequest
from openapi_client.models.graph_ql_response import GraphQLResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloud.redhat.com//api/catalog-inventory/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloud.redhat.com//api/catalog-inventory/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: UserSecurity
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    graph_ql_request = openapi_client.GraphQLRequest() # GraphQLRequest | GraphQL Query Request

    try:
        # Perform a GraphQL Query
        api_response = api_instance.post_graph_ql(graph_ql_request)
        print("The response of DefaultApi->post_graph_ql:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->post_graph_ql: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **graph_ql_request** | [**GraphQLRequest**](GraphQLRequest.md)| GraphQL Query Request | 

### Return type

[**GraphQLResponse**](GraphQLResponse.md)

### Authorization

[UserSecurity](../README.md#UserSecurity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | GraphQL Query Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

