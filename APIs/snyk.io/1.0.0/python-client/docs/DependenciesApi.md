# openapi_client.DependenciesApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_all_dependencies**](DependenciesApi.md#list_all_dependencies) | **POST** /org/{orgId}/dependencies | List all dependencies


# **list_all_dependencies**
> ListAllDependencies200Response list_all_dependencies(org_id, sort_by=sort_by, order=order, page=page, per_page=per_page, list_all_dependencies_request=list_all_dependencies_request)

List all dependencies



### Example


```python
import openapi_client
from openapi_client.models.list_all_dependencies200_response import ListAllDependencies200Response
from openapi_client.models.list_all_dependencies_request import ListAllDependenciesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DependenciesApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to list projects for. The `API_KEY` must have access to this organization.
    sort_by = dependency # str | The field to sort results by. (optional) (default to dependency)
    order = asc # str | The direction to sort results by. (optional) (default to asc)
    page = 1 # float | The page of results to fetch. (optional) (default to 1)
    per_page = 20 # float | The number of results to fetch per page (maximum is 1000). (optional) (default to 20)
    list_all_dependencies_request = openapi_client.ListAllDependenciesRequest() # ListAllDependenciesRequest |  (optional)

    try:
        # List all dependencies
        api_response = api_instance.list_all_dependencies(org_id, sort_by=sort_by, order=order, page=page, per_page=per_page, list_all_dependencies_request=list_all_dependencies_request)
        print("The response of DependenciesApi->list_all_dependencies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DependenciesApi->list_all_dependencies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to list projects for. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **sort_by** | **str**| The field to sort results by. | [optional] [default to dependency]
 **order** | **str**| The direction to sort results by. | [optional] [default to asc]
 **page** | **float**| The page of results to fetch. | [optional] [default to 1]
 **per_page** | **float**| The number of results to fetch per page (maximum is 1000). | [optional] [default to 20]
 **list_all_dependencies_request** | [**ListAllDependenciesRequest**](ListAllDependenciesRequest.md)|  | [optional] 

### Return type

[**ListAllDependencies200Response**](ListAllDependencies200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Link -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

