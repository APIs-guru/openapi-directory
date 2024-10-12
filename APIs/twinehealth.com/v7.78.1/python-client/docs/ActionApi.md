# openapi_client.ActionApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_action**](ActionApi.md#create_action) | **POST** /action | Create action
[**fetch_action**](ActionApi.md#fetch_action) | **GET** /action/{id} | Get an action
[**update_action**](ActionApi.md#update_action) | **PATCH** /action/{id} | Update an action


# **create_action**
> CreateActionResponse create_action(create_action_request)

Create action

Create a plan action

### Example


```python
import openapi_client
from openapi_client.models.create_action_request import CreateActionRequest
from openapi_client.models.create_action_response import CreateActionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    create_action_request = openapi_client.CreateActionRequest() # CreateActionRequest | 

    try:
        # Create action
        api_response = api_instance.create_action(create_action_request)
        print("The response of ActionApi->create_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionApi->create_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_action_request** | [**CreateActionRequest**](CreateActionRequest.md)|  | 

### Return type

[**CreateActionResponse**](CreateActionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_action**
> FetchActionResponse fetch_action(id)

Get an action

Get a health action from a patient's plan.

### Example


```python
import openapi_client
from openapi_client.models.fetch_action_response import FetchActionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id = 'id_example' # str | Action identifier

    try:
        # Get an action
        api_response = api_instance.fetch_action(id)
        print("The response of ActionApi->fetch_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionApi->fetch_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Action identifier | 

### Return type

[**FetchActionResponse**](FetchActionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_action**
> UpdateActionResponse update_action(id, update_action_request)

Update an action

Update a health action from a patient's plan.

### Example


```python
import openapi_client
from openapi_client.models.update_action_request import UpdateActionRequest
from openapi_client.models.update_action_response import UpdateActionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionApi(api_client)
    id = 'id_example' # str | Action identifier
    update_action_request = openapi_client.UpdateActionRequest() # UpdateActionRequest | 

    try:
        # Update an action
        api_response = api_instance.update_action(id, update_action_request)
        print("The response of ActionApi->update_action:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionApi->update_action: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Action identifier | 
 **update_action_request** | [**UpdateActionRequest**](UpdateActionRequest.md)|  | 

### Return type

[**UpdateActionResponse**](UpdateActionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

