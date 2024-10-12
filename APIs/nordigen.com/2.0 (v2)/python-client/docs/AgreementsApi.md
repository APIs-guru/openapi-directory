# openapi_client.AgreementsApi

All URIs are relative to *https://ob.nordigen.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_eua**](AgreementsApi.md#accept_eua) | **PUT** /api/v2/agreements/enduser/{id}/accept/ | 
[**create_eua_v2**](AgreementsApi.md#create_eua_v2) | **POST** /api/v2/agreements/enduser/ | 
[**delete_eua_by_id_v2**](AgreementsApi.md#delete_eua_by_id_v2) | **DELETE** /api/v2/agreements/enduser/{id}/ | 
[**retrieve_all_euas_for_an_end_user_v2**](AgreementsApi.md#retrieve_all_euas_for_an_end_user_v2) | **GET** /api/v2/agreements/enduser/ | 
[**retrieve_eua_by_id_v2**](AgreementsApi.md#retrieve_eua_by_id_v2) | **GET** /api/v2/agreements/enduser/{id}/ | 


# **accept_eua**
> EndUserAgreement accept_eua(id, enduser_acceptance_details_request)



Accept an end-user agreement via the API

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.end_user_agreement import EndUserAgreement
from openapi_client.models.enduser_acceptance_details_request import EnduserAcceptanceDetailsRequest
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
    api_instance = openapi_client.AgreementsApi(api_client)
    id = 'id_example' # str | A UUID string identifying this end user agreement.
    enduser_acceptance_details_request = openapi_client.EnduserAcceptanceDetailsRequest() # EnduserAcceptanceDetailsRequest | 

    try:
        api_response = api_instance.accept_eua(id, enduser_acceptance_details_request)
        print("The response of AgreementsApi->accept_eua:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgreementsApi->accept_eua: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A UUID string identifying this end user agreement. | 
 **enduser_acceptance_details_request** | [**EnduserAcceptanceDetailsRequest**](EnduserAcceptanceDetailsRequest.md)|  | 

### Return type

[**EndUserAgreement**](EndUserAgreement.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Accept end user agreement |  -  |
**400** | Invalid ID |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**405** | EUA accepted |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_eua_v2**
> EndUserAgreement create_eua_v2(end_user_agreement_request)



API endpoints related to end-user agreements.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.end_user_agreement import EndUserAgreement
from openapi_client.models.end_user_agreement_request import EndUserAgreementRequest
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
    api_instance = openapi_client.AgreementsApi(api_client)
    end_user_agreement_request = openapi_client.EndUserAgreementRequest() # EndUserAgreementRequest | 

    try:
        api_response = api_instance.create_eua_v2(end_user_agreement_request)
        print("The response of AgreementsApi->create_eua_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgreementsApi->create_eua_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **end_user_agreement_request** | [**EndUserAgreementRequest**](EndUserAgreementRequest.md)|  | 

### Return type

[**EndUserAgreement**](EndUserAgreement.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create enduser agreement |  -  |
**400** | Agreement field errors |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_eua_by_id_v2**
> delete_eua_by_id_v2(id)



Delete an end user agreement

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
    api_instance = openapi_client.AgreementsApi(api_client)
    id = 'id_example' # str | A UUID string identifying this end user agreement.

    try:
        api_instance.delete_eua_by_id_v2(id)
    except Exception as e:
        print("Exception when calling AgreementsApi->delete_eua_by_id_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A UUID string identifying this end user agreement. | 

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

# **retrieve_all_euas_for_an_end_user_v2**
> PaginatedEndUserAgreementList retrieve_all_euas_for_an_end_user_v2(limit=limit, offset=offset)



API endpoints related to end-user agreements.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.paginated_end_user_agreement_list import PaginatedEndUserAgreementList
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
    api_instance = openapi_client.AgreementsApi(api_client)
    limit = 100 # int | Number of results to return per page. (optional) (default to 100)
    offset = 1 # int | The initial index from which to return the results. (optional) (default to 1)

    try:
        api_response = api_instance.retrieve_all_euas_for_an_end_user_v2(limit=limit, offset=offset)
        print("The response of AgreementsApi->retrieve_all_euas_for_an_end_user_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgreementsApi->retrieve_all_euas_for_an_end_user_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional] [default to 100]
 **offset** | **int**| The initial index from which to return the results. | [optional] [default to 1]

### Return type

[**PaginatedEndUserAgreementList**](PaginatedEndUserAgreementList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve all end user agreements |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_eua_by_id_v2**
> EndUserAgreement retrieve_eua_by_id_v2(id)



Retrieve end user agreement by ID

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.end_user_agreement import EndUserAgreement
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
    api_instance = openapi_client.AgreementsApi(api_client)
    id = 'id_example' # str | A UUID string identifying this end user agreement.

    try:
        api_response = api_instance.retrieve_eua_by_id_v2(id)
        print("The response of AgreementsApi->retrieve_eua_by_id_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgreementsApi->retrieve_eua_by_id_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A UUID string identifying this end user agreement. | 

### Return type

[**EndUserAgreement**](EndUserAgreement.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve end user agreement by ID |  -  |
**400** | Invalid ID |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

