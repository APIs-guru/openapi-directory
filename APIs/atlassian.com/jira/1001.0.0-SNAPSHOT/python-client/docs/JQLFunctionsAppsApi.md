# openapi_client.JQLFunctionsAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_precomputations**](JQLFunctionsAppsApi.md#get_precomputations) | **GET** /rest/api/3/jql/function/computation | Get precomputations (apps)
[**update_precomputations**](JQLFunctionsAppsApi.md#update_precomputations) | **POST** /rest/api/3/jql/function/computation | Update precomputations (apps)


# **get_precomputations**
> PageBeanJqlFunctionPrecomputationBean get_precomputations(function_key=function_key, start_at=start_at, max_results=max_results, order_by=order_by, filter=filter)

Get precomputations (apps)

Returns the list of a function's precomputations along with information about when they were created, updated, and last used. Each precomputation has a `value` \\- the JQL fragment to replace the custom function clause with.  **[Permissions](#permissions) required:** This API is only accessible to apps and apps can only inspect their own functions.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_jql_function_precomputation_bean import PageBeanJqlFunctionPrecomputationBean
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JQLFunctionsAppsApi(api_client)
    function_key = ['function_key_example'] # List[str] | The function key in format:   *  Forge: `ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]`.  *  Connect: `[App key]__[Module key]`. (optional)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 100 # int | The maximum number of items to return per page. (optional) (default to 100)
    order_by = 'order_by_example' # str | Not supported yet. (optional)
    filter = 'filter_example' # str | Not supported yet. (optional)

    try:
        # Get precomputations (apps)
        api_response = api_instance.get_precomputations(function_key=function_key, start_at=start_at, max_results=max_results, order_by=order_by, filter=filter)
        print("The response of JQLFunctionsAppsApi->get_precomputations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JQLFunctionsAppsApi->get_precomputations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **function_key** | [**List[str]**](str.md)| The function key in format:   *  Forge: &#x60;ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]&#x60;.  *  Connect: &#x60;[App key]__[Module key]&#x60;. | [optional] 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 100]
 **order_by** | **str**| Not supported yet. | [optional] 
 **filter** | **str**| Not supported yet. | [optional] 

### Return type

[**PageBeanJqlFunctionPrecomputationBean**](PageBeanJqlFunctionPrecomputationBean.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the request is not authenticated as the app that provided the function. |  -  |
**404** | Returned if the function is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_precomputations**
> object update_precomputations(jql_function_precomputation_update_request_bean)

Update precomputations (apps)

Update the precomputation value of a function created by a Forge/Connect app.  **[Permissions](#permissions) required:** An API for apps to update their own precomputations.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.jql_function_precomputation_update_request_bean import JqlFunctionPrecomputationUpdateRequestBean
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JQLFunctionsAppsApi(api_client)
    jql_function_precomputation_update_request_bean = {"values":[{"id":10000,"value":"issue in (TEST-1, TEST-2, TEST-3)"}]} # JqlFunctionPrecomputationUpdateRequestBean | 

    try:
        # Update precomputations (apps)
        api_response = api_instance.update_precomputations(jql_function_precomputation_update_request_bean)
        print("The response of JQLFunctionsAppsApi->update_precomputations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JQLFunctionsAppsApi->update_precomputations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jql_function_precomputation_update_request_bean** | [**JqlFunctionPrecomputationUpdateRequestBean**](JqlFunctionPrecomputationUpdateRequestBean.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**403** | Returned if the request is not authenticated as the app that provided the function. |  -  |
**404** | Returned if the function is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

