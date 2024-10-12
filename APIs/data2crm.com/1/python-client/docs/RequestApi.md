# openapi_client.RequestApi

All URIs are relative to *https://api-2445581398133.apicast.io:443/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_request_entity**](RequestApi.md#create_request_entity) | **POST** /application/request | POST for request


# **create_request_entity**
> RequestEntityRelation create_request_entity(x_api2_crm_user_key, x_api2_crm_application_key, body)

POST for request

Execute request into the system

### Example


```python
import openapi_client
from openapi_client.models.request_entity import RequestEntity
from openapi_client.models.request_entity_relation import RequestEntityRelation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api-2445581398133.apicast.io:443/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api-2445581398133.apicast.io:443/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RequestApi(api_client)
    x_api2_crm_user_key = 'e2a6379ab878ae7e58119d4ec842bf9c' # str | User Key (default to 'e2a6379ab878ae7e58119d4ec842bf9c')
    x_api2_crm_application_key = '7ae5b17008fb414d84981191cf3b66a476ef8bef' # str | Application Key (default to '7ae5b17008fb414d84981191cf3b66a476ef8bef')
    body = openapi_client.RequestEntity() # RequestEntity | Execute request into the system

    try:
        # POST for request
        api_response = api_instance.create_request_entity(x_api2_crm_user_key, x_api2_crm_application_key, body)
        print("The response of RequestApi->create_request_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RequestApi->create_request_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api2_crm_user_key** | **str**| User Key | [default to &#39;e2a6379ab878ae7e58119d4ec842bf9c&#39;]
 **x_api2_crm_application_key** | **str**| Application Key | [default to &#39;7ae5b17008fb414d84981191cf3b66a476ef8bef&#39;]
 **body** | [**RequestEntity**](RequestEntity.md)| Execute request into the system | 

### Return type

[**RequestEntityRelation**](RequestEntityRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Client Error |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

