# openapi_client.RequisitionsApi

All URIs are relative to *https://ob.nordigen.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_requisition_by_id_v2**](RequisitionsApi.md#delete_requisition_by_id_v2) | **DELETE** /api/v2/requisitions/{id}/ | 
[**requisition_by_id**](RequisitionsApi.md#requisition_by_id) | **GET** /api/v2/requisitions/{id}/ | 
[**requisition_created**](RequisitionsApi.md#requisition_created) | **POST** /api/v2/requisitions/ | 
[**retrieve_all_requisitions**](RequisitionsApi.md#retrieve_all_requisitions) | **GET** /api/v2/requisitions/ | 


# **delete_requisition_by_id_v2**
> delete_requisition_by_id_v2(id)



Delete requisition and its end user agreement

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequisitionsApi(api_client)
    id = 'id_example' # str | A UUID string identifying this requisition.

    try:
        api_instance.delete_requisition_by_id_v2(id)
    except Exception as e:
        print("Exception when calling RequisitionsApi->delete_requisition_by_id_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A UUID string identifying this requisition. | 

### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | Invalid ID |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requisition_by_id**
> Requisition requisition_by_id(id)



Retrieve a requisition by ID

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.requisition import Requisition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequisitionsApi(api_client)
    id = 'id_example' # str | A UUID string identifying this requisition.

    try:
        api_response = api_instance.requisition_by_id(id)
        print("The response of RequisitionsApi->requisition_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequisitionsApi->requisition_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A UUID string identifying this requisition. | 

### Return type

[**Requisition**](Requisition.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get requisition by ID |  -  |
**400** | Invalid ID |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **requisition_created**
> SpectacularRequisition requisition_created(requisition_request)



Create a new requisition

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.requisition_request import RequisitionRequest
from openapi_client.models.spectacular_requisition import SpectacularRequisition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequisitionsApi(api_client)
    requisition_request = openapi_client.RequisitionRequest() # RequisitionRequest | 

    try:
        api_response = api_instance.requisition_created(requisition_request)
        print("The response of RequisitionsApi->requisition_created:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequisitionsApi->requisition_created: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requisition_request** | [**RequisitionRequest**](RequisitionRequest.md)|  | 

### Return type

[**SpectacularRequisition**](SpectacularRequisition.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Requisition has been successfully created |  -  |
**400** | Fields required |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Agreement not found errors |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_all_requisitions**
> PaginatedRequisitionList retrieve_all_requisitions(limit=limit, offset=offset)



Retrieve all requisitions belonging to the company

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.paginated_requisition_list import PaginatedRequisitionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequisitionsApi(api_client)
    limit = 100 # int | Number of results to return per page. (optional) (default to 100)
    offset = 1 # int | The initial index from which to return the results. (optional) (default to 1)

    try:
        api_response = api_instance.retrieve_all_requisitions(limit=limit, offset=offset)
        print("The response of RequisitionsApi->retrieve_all_requisitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequisitionsApi->retrieve_all_requisitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional] [default to 100]
 **offset** | **int**| The initial index from which to return the results. | [optional] [default to 1]

### Return type

[**PaginatedRequisitionList**](PaginatedRequisitionList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve all requisitions |  -  |
**400** | Unknown Fields |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

