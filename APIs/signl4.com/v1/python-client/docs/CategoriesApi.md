# openapi_client.CategoriesApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categories_images_get**](CategoriesApi.md#categories_images_get) | **GET** /categories/images | Gets the names of all alert category images.  You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
[**categories_team_id_category_id_delete**](CategoriesApi.md#categories_team_id_category_id_delete) | **DELETE** /categories/{teamId}/{categoryId} | Delete an existing category
[**categories_team_id_category_id_get**](CategoriesApi.md#categories_team_id_category_id_get) | **GET** /categories/{teamId}/{categoryId} | Get a specific category
[**categories_team_id_category_id_metrics_get**](CategoriesApi.md#categories_team_id_category_id_metrics_get) | **GET** /categories/{teamId}/{categoryId}/metrics | Get metrics for a specific category
[**categories_team_id_category_id_put**](CategoriesApi.md#categories_team_id_category_id_put) | **PUT** /categories/{teamId}/{categoryId} | Update an existing category
[**categories_team_id_category_id_subscriptions_get**](CategoriesApi.md#categories_team_id_category_id_subscriptions_get) | **GET** /categories/{teamId}/{categoryId}/subscriptions | Get category subscriptions
[**categories_team_id_category_id_subscriptions_post**](CategoriesApi.md#categories_team_id_category_id_subscriptions_post) | **POST** /categories/{teamId}/{categoryId}/subscriptions | Set category subscriptions
[**categories_team_id_get**](CategoriesApi.md#categories_team_id_get) | **GET** /categories/{teamId} | Get all categories
[**categories_team_id_metrics_get**](CategoriesApi.md#categories_team_id_metrics_get) | **GET** /categories/{teamId}/metrics | Get metrics for all categories
[**categories_team_id_post**](CategoriesApi.md#categories_team_id_post) | **POST** /categories/{teamId} | Create a new category


# **categories_images_get**
> List[str] categories_images_get()

Gets the names of all alert category images.  You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)

    try:
        # Gets the names of all alert category images.  You can get the image by going to account.signl4.com/images/alerts/categoryImageName.svg
        api_response = api_instance.categories_images_get()
        print("The response of CategoriesApi->categories_images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_images_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the alert categories. |  -  |
**204** | Request was canceled. |  -  |
**403** | If you have no permission to access the resource. |  -  |
**404** | No categories were found. |  -  |
**500** | Internal general error occured. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_category_id_delete**
> categories_team_id_category_id_delete(team_id, category_id)

Delete an existing category

Sample Request:                    DELETE /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the category belongs to
    category_id = 'category_id_example' # str | ID of the category to delete

    try:
        # Delete an existing category
        api_instance.categories_team_id_category_id_delete(team_id, category_id)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_category_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the category belongs to | 
 **category_id** | **str**| ID of the category to delete | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If the delete operation was successful |  -  |
**204** | Success |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_category_id_get**
> CategoryInfo categories_team_id_category_id_get(team_id, category_id)

Get a specific category

Sample Request:                    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.category_info import CategoryInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the category belongs to
    category_id = 'category_id_example' # str | ID of the category to get

    try:
        # Get a specific category
        api_response = api_instance.categories_team_id_category_id_get(team_id, category_id)
        print("The response of CategoriesApi->categories_team_id_category_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_category_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the category belongs to | 
 **category_id** | **str**| ID of the category to get | 

### Return type

[**CategoryInfo**](CategoryInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the category details |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_category_id_metrics_get**
> CategoryMetrics categories_team_id_category_id_metrics_get(team_id, category_id)

Get metrics for a specific category

Sample Request:                    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/metrics

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.category_metrics import CategoryMetrics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the category belongs to
    category_id = 'category_id_example' # str | ID of the category to get

    try:
        # Get metrics for a specific category
        api_response = api_instance.categories_team_id_category_id_metrics_get(team_id, category_id)
        print("The response of CategoriesApi->categories_team_id_category_id_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_category_id_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the category belongs to | 
 **category_id** | **str**| ID of the category to get | 

### Return type

[**CategoryMetrics**](CategoryMetrics.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the category metrics |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_category_id_put**
> CategoryInfo categories_team_id_category_id_put(team_id, category_id, category_info=category_info)

Update an existing category

Sample Request:                    PUT /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e      {          \"name\": \"Water-Updated\",          \"imageName\": \"water.svg\",          \"color\": \"#0000cc\",          \"keywordMatching\": \"All\",          \"keywords\": [              {                  \"value\": \"H2O\"              },              {                  \"value\": \"Water\"              },              {                  \"value\": \"Wet\"              }          ]      }

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.category_info import CategoryInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the category belongs to
    category_id = 'category_id_example' # str | 
    category_info = openapi_client.CategoryInfo() # CategoryInfo | Category to be updated (optional)

    try:
        # Update an existing category
        api_response = api_instance.categories_team_id_category_id_put(team_id, category_id, category_info=category_info)
        print("The response of CategoriesApi->categories_team_id_category_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_category_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the category belongs to | 
 **category_id** | **str**|  | 
 **category_info** | [**CategoryInfo**](CategoryInfo.md)| Category to be updated | [optional] 

### Return type

[**CategoryInfo**](CategoryInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated category |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_category_id_subscriptions_get**
> List[CategorySubscriptionInfo] categories_team_id_category_id_subscriptions_get(team_id, category_id)

Get category subscriptions

Sample Request:                    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions      {      }

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.category_subscription_info import CategorySubscriptionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the category belongs to
    category_id = 'category_id_example' # str | Category to get subscriptions for

    try:
        # Get category subscriptions
        api_response = api_instance.categories_team_id_category_id_subscriptions_get(team_id, category_id)
        print("The response of CategoriesApi->categories_team_id_category_id_subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_category_id_subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the category belongs to | 
 **category_id** | **str**| Category to get subscriptions for | 

### Return type

[**List[CategorySubscriptionInfo]**](CategorySubscriptionInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the category subscriptions |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_category_id_subscriptions_post**
> List[CategorySubscriptionInfo] categories_team_id_category_id_subscriptions_post(team_id, category_id, category_subscription_info=category_subscription_info)

Set category subscriptions

Sample Request:                    POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/c0054336-cd89-4abf-882d-ba69b5adb25e/subscriptions      {      }

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.category_subscription_info import CategorySubscriptionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the category belongs to
    category_id = 'category_id_example' # str | Category to be updated
    category_subscription_info = [openapi_client.CategorySubscriptionInfo()] # List[CategorySubscriptionInfo] |  (optional)

    try:
        # Set category subscriptions
        api_response = api_instance.categories_team_id_category_id_subscriptions_post(team_id, category_id, category_subscription_info=category_subscription_info)
        print("The response of CategoriesApi->categories_team_id_category_id_subscriptions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_category_id_subscriptions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the category belongs to | 
 **category_id** | **str**| Category to be updated | 
 **category_subscription_info** | [**List[CategorySubscriptionInfo]**](CategorySubscriptionInfo.md)|  | [optional] 

### Return type

[**List[CategorySubscriptionInfo]**](CategorySubscriptionInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated category subscriptions |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_get**
> List[CategoryInfo] categories_team_id_get(team_id)

Get all categories

Sample Request:                    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.category_info import CategoryInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the categories belong to

    try:
        # Get all categories
        api_response = api_instance.categories_team_id_get(team_id)
        print("The response of CategoriesApi->categories_team_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the categories belong to | 

### Return type

[**List[CategoryInfo]**](CategoryInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the category infos |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_metrics_get**
> List[CategoryMetrics] categories_team_id_metrics_get(team_id)

Get metrics for all categories

Sample Request:                    GET /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7/metrics

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.category_metrics import CategoryMetrics
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the categories belongs to

    try:
        # Get metrics for all categories
        api_response = api_instance.categories_team_id_metrics_get(team_id)
        print("The response of CategoriesApi->categories_team_id_metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the categories belongs to | 

### Return type

[**List[CategoryMetrics]**](CategoryMetrics.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of category metrics |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **categories_team_id_post**
> CategoryInfo categories_team_id_post(team_id, category_info=category_info)

Create a new category

Sample Request:                    POST /categories/cbb70402-1359-477f-ac92-0171cf2b5ff7      {          \"name\": \"Water\",          \"imageName\": \"water.svg\",          \"color\": \"#0000cc\",          \"keywordMatching\": \"Any\",          \"keywords\": [              {                  \"value\": \"H2O\"              },              {                  \"value\": \"Water\"              }          ]      }

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.category_info import CategoryInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoriesApi(api_client)
    team_id = 'team_id_example' # str | ID of the team the category belongs to
    category_info = openapi_client.CategoryInfo() # CategoryInfo | Category to be created (optional)

    try:
        # Create a new category
        api_response = api_instance.categories_team_id_post(team_id, category_info=category_info)
        print("The response of CategoriesApi->categories_team_id_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoriesApi->categories_team_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**| ID of the team the category belongs to | 
 **category_info** | [**CategoryInfo**](CategoryInfo.md)| Category to be created | [optional] 

### Return type

[**CategoryInfo**](CategoryInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the newly created category |  -  |
**400** | If the input is not valid |  -  |
**403** | If you have no permission to access this resource |  -  |
**404** | If the resource was not found |  -  |
**500** | If any server side errors occur |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

