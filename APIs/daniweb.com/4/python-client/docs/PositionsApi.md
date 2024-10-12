# openapi_client.PositionsApi

All URIs are relative to *https://www.daniweb.com/connect/api/v4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**positions_id_delete**](PositionsApi.md#positions_id_delete) | **DELETE** /positions/{ID} | 
[**positions_id_patch**](PositionsApi.md#positions_id_patch) | **PATCH** /positions/{ID} | 
[**positions_post**](PositionsApi.md#positions_post) | **POST** /positions | 


# **positions_id_delete**
> EndpointDeletePositionsID positions_id_delete(id)



Remove an item from the OAuth'ed end user's Curriculum Vitae.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_delete_positions_id import EndpointDeletePositionsID
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
    api_instance = openapi_client.PositionsApi(api_client)
    id = 56 # int | 

    try:
        api_response = api_instance.positions_id_delete(id)
        print("The response of PositionsApi->positions_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PositionsApi->positions_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**EndpointDeletePositionsID**](EndpointDeletePositionsID.md)

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

# **positions_id_patch**
> EndpointPatchPositionsID positions_id_patch(id, category, organization, role, start_date, end_date=end_date, organization_size=organization_size, position=position, summary=summary, url=url)



Update the OAuth'ed end user's Curriculum Vitae by modifying an existing position.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_patch_positions_id import EndpointPatchPositionsID
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
    api_instance = openapi_client.PositionsApi(api_client)
    id = 56 # int | 
    category = 'category_example' # str | 
    organization = 'organization_example' # str | 
    role = 'role_example' # str | 
    start_date = 'start_date_example' # str | 
    end_date = 'end_date_example' # str |  (optional)
    organization_size = 'organization_size_example' # str |  (optional)
    position = 'position_example' # str |  (optional)
    summary = 'summary_example' # str |  (optional)
    url = 'url_example' # str |  (optional)

    try:
        api_response = api_instance.positions_id_patch(id, category, organization, role, start_date, end_date=end_date, organization_size=organization_size, position=position, summary=summary, url=url)
        print("The response of PositionsApi->positions_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PositionsApi->positions_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **category** | **str**|  | 
 **organization** | **str**|  | 
 **role** | **str**|  | 
 **start_date** | **str**|  | 
 **end_date** | **str**|  | [optional] 
 **organization_size** | **str**|  | [optional] 
 **position** | **str**|  | [optional] 
 **summary** | **str**|  | [optional] 
 **url** | **str**|  | [optional] 

### Return type

[**EndpointPatchPositionsID**](EndpointPatchPositionsID.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **positions_post**
> EndpointPostPositions positions_post(category, organization, role, start_date, end_date=end_date, organization_size=organization_size, position=position, summary=summary, url=url)



Update the OAuth'ed end user's Curriculum Vitae by adding a position.

### Example

* OAuth Authentication (implicit_flow):
* OAuth Authentication (explicit_flow):

```python
import openapi_client
from openapi_client.models.endpoint_post_positions import EndpointPostPositions
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
    api_instance = openapi_client.PositionsApi(api_client)
    category = 'category_example' # str | 
    organization = 'organization_example' # str | 
    role = 'role_example' # str | 
    start_date = 'start_date_example' # str | 
    end_date = 'end_date_example' # str |  (optional)
    organization_size = 'organization_size_example' # str |  (optional)
    position = 'position_example' # str |  (optional)
    summary = 'summary_example' # str |  (optional)
    url = 'url_example' # str |  (optional)

    try:
        api_response = api_instance.positions_post(category, organization, role, start_date, end_date=end_date, organization_size=organization_size, position=position, summary=summary, url=url)
        print("The response of PositionsApi->positions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PositionsApi->positions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **str**|  | 
 **organization** | **str**|  | 
 **role** | **str**|  | 
 **start_date** | **str**|  | 
 **end_date** | **str**|  | [optional] 
 **organization_size** | **str**|  | [optional] 
 **position** | **str**|  | [optional] 
 **summary** | **str**|  | [optional] 
 **url** | **str**|  | [optional] 

### Return type

[**EndpointPostPositions**](EndpointPostPositions.md)

### Authorization

[implicit_flow](../README.md#implicit_flow), [explicit_flow](../README.md#explicit_flow)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

