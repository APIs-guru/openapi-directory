# openapi_client.ProgramApi

All URIs are relative to *https://api.ebay.com/sell/account/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_opted_in_programs**](ProgramApi.md#get_opted_in_programs) | **GET** /program/get_opted_in_programs | 
[**opt_in_to_program**](ProgramApi.md#opt_in_to_program) | **POST** /program/opt_in | 
[**opt_out_of_program**](ProgramApi.md#opt_out_of_program) | **POST** /program/opt_out | 


# **get_opted_in_programs**
> Programs get_opted_in_programs()



This method gets a list of the seller programs that the seller has opted-in to.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.programs import Programs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProgramApi(api_client)

    try:
        api_response = api_instance.get_opted_in_programs()
        print("The response of ProgramApi->get_opted_in_programs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProgramApi->get_opted_in_programs: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Programs**](Programs.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **opt_in_to_program**
> object opt_in_to_program(program)



This method opts the seller in to an eBay seller program. Refer to the <a href=\"/api-docs/sell/account/overview.html#opt-in\" target=\"_blank\">Account API overview</a> for information about available eBay seller programs.<br /><br /><span class=\"tablenote\"><b>Note:</b> It can take up to 24-hours for eBay to process your request to opt-in to a Seller Program. Use the <a href=\"/api-docs/sell/account/resources/program/methods/getOptedInPrograms\" target=\"_blank\">getOptedInPrograms</a> call to check the status of your request after the processing period has passed.</span>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.program import Program
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProgramApi(api_client)
    program = openapi_client.Program() # Program | Program being opted-in to.

    try:
        api_response = api_instance.opt_in_to_program(program)
        print("The response of ProgramApi->opt_in_to_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProgramApi->opt_in_to_program: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **program** | [**Program**](Program.md)| Program being opted-in to. | 

### Return type

**object**

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **opt_out_of_program**
> object opt_out_of_program(program)



This method opts the seller out of a seller program to which you have previously opted-in to. Get a list of the seller programs you have opted-in to using the <b>getOptedInPrograms</b> call.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.program import Program
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProgramApi(api_client)
    program = openapi_client.Program() # Program | Program being opted-out of.

    try:
        api_response = api_instance.opt_out_of_program(program)
        print("The response of ProgramApi->opt_out_of_program:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProgramApi->opt_out_of_program: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **program** | [**Program**](Program.md)| Program being opted-out of. | 

### Return type

**object**

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

