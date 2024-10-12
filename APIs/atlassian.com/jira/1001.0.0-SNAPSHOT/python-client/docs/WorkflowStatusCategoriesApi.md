# openapi_client.WorkflowStatusCategoriesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_status_categories**](WorkflowStatusCategoriesApi.md#get_status_categories) | **GET** /rest/api/3/statuscategory | Get all status categories
[**get_status_category**](WorkflowStatusCategoriesApi.md#get_status_category) | **GET** /rest/api/3/statuscategory/{idOrKey} | Get status category


# **get_status_categories**
> List[StatusCategory] get_status_categories()

Get all status categories

Returns a list of all status categories.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.status_category import StatusCategory
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
    api_instance = openapi_client.WorkflowStatusCategoriesApi(api_client)

    try:
        # Get all status categories
        api_response = api_instance.get_status_categories()
        print("The response of WorkflowStatusCategoriesApi->get_status_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowStatusCategoriesApi->get_status_categories: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[StatusCategory]**](StatusCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_status_category**
> StatusCategory get_status_category(id_or_key)

Get status category

Returns a status category. Status categories provided a mechanism for categorizing [statuses](#api-rest-api-3-status-idOrName-get).  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.status_category import StatusCategory
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
    api_instance = openapi_client.WorkflowStatusCategoriesApi(api_client)
    id_or_key = 'id_or_key_example' # str | The ID or key of the status category.

    try:
        # Get status category
        api_response = api_instance.get_status_category(id_or_key)
        print("The response of WorkflowStatusCategoriesApi->get_status_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowStatusCategoriesApi->get_status_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_or_key** | **str**| The ID or key of the status category. | 

### Return type

[**StatusCategory**](StatusCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**404** | Returned if the status category is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

