# openapi_client.InstitutionsApi

All URIs are relative to *https://ob.nordigen.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_all_supported_institutions_in_a_given_country**](InstitutionsApi.md#retrieve_all_supported_institutions_in_a_given_country) | **GET** /api/v2/institutions/ | 
[**retrieve_institution**](InstitutionsApi.md#retrieve_institution) | **GET** /api/v2/institutions/{id}/ | 


# **retrieve_all_supported_institutions_in_a_given_country**
> List[Integration] retrieve_all_supported_institutions_in_a_given_country(country=country, payments_enabled=payments_enabled)



List all available institutions

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.integration import Integration
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
    api_instance = openapi_client.InstitutionsApi(api_client)
    country = 'AT' # str | ISO 3166 two-character country code (optional)
    payments_enabled = 'false' # str | Boolean value, indicating if payments are enabled (optional)

    try:
        api_response = api_instance.retrieve_all_supported_institutions_in_a_given_country(country=country, payments_enabled=payments_enabled)
        print("The response of InstitutionsApi->retrieve_all_supported_institutions_in_a_given_country:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstitutionsApi->retrieve_all_supported_institutions_in_a_given_country: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| ISO 3166 two-character country code | [optional] 
 **payments_enabled** | **str**| Boolean value, indicating if payments are enabled | [optional] 

### Return type

[**List[Integration]**](Integration.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of supported Institutions in the country |  -  |
**400** | Unknown Fields |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_institution**
> IntegrationRetrieve retrieve_institution(id)



Get details about a specific Institution

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.integration_retrieve import IntegrationRetrieve
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
    api_instance = openapi_client.InstitutionsApi(api_client)
    id = 'N26_NTSBDEB1' # str | 

    try:
        api_response = api_instance.retrieve_institution(id)
        print("The response of InstitutionsApi->retrieve_institution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstitutionsApi->retrieve_institution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**IntegrationRetrieve**](IntegrationRetrieve.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve institution by id |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**429** | Nordigen rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

