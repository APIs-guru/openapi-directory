# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/v1/applications*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_application**](DefaultApi.md#create_application) | **POST** / | Create Application
[**delete_application**](DefaultApi.md#delete_application) | **DELETE** /{app_id} | Destroy Application
[**retrieve_application**](DefaultApi.md#retrieve_application) | **GET** /{app_id} | Retrieve Application
[**retrieve_applications**](DefaultApi.md#retrieve_applications) | **GET** / | Retrieve all Applications
[**update_application**](DefaultApi.md#update_application) | **PUT** /{app_id} | Update Application


# **create_application**
> ApplicationCreated create_application(create_application_request=create_application_request)

Create Application

You use a `POST` request to create a new application.

### Example


```python
import openapi_client
from openapi_client.models.application_created import ApplicationCreated
from openapi_client.models.create_application_request import CreateApplicationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/applications"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    create_application_request = openapi_client.CreateApplicationRequest() # CreateApplicationRequest |  (optional)

    try:
        # Create Application
        api_response = api_instance.create_application(create_application_request=create_application_request)
        print("The response of DefaultApi->create_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_application_request** | [**CreateApplicationRequest**](CreateApplicationRequest.md)|  | [optional] 

### Return type

[**ApplicationCreated**](ApplicationCreated.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_application**
> delete_application(app_id)

Destroy Application

You use a `DELETE` request to delete a single application.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/applications"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | The ID allocated to your application by Nexmo.

    try:
        # Destroy Application
        api_instance.delete_application(app_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The ID allocated to your application by Nexmo. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_application**
> Application retrieve_application(api_key, api_secret, app_id)

Retrieve Application

You use a `GET` request to retrieve details about a single application.

### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/applications"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_key = 'api_key_example' # str | You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
    api_secret = 'api_secret_example' # str | You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
    app_id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | The ID allocated to your application by Nexmo.

    try:
        # Retrieve Application
        api_response = api_instance.retrieve_application(api_key, api_secret, app_id)
        print("The response of DefaultApi->retrieve_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->retrieve_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview) | 
 **api_secret** | **str**| You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview) | 
 **app_id** | **str**| The ID allocated to your application by Nexmo. | 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_applications**
> Applications retrieve_applications(api_key, api_secret, page_size=page_size, page_index=page_index)

Retrieve all Applications

You use a `GET` request to retrieve details of all applications associated with your account.

### Example


```python
import openapi_client
from openapi_client.models.applications import Applications
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/applications"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_key = 'api_key_example' # str | You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
    api_secret = 'api_secret_example' # str | You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
    page_size = 10 # int | Set the number of items returned on each call to this endpoint. The default is 10 records. (optional) (default to 10)
    page_index = 0 # int | Set the offset from the first page. The default value is `0`. (optional) (default to 0)

    try:
        # Retrieve all Applications
        api_response = api_instance.retrieve_applications(api_key, api_secret, page_size=page_size, page_index=page_index)
        print("The response of DefaultApi->retrieve_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->retrieve_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview) | 
 **api_secret** | **str**| You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview) | 
 **page_size** | **int**| Set the number of items returned on each call to this endpoint. The default is 10 records. | [optional] [default to 10]
 **page_index** | **int**| Set the offset from the first page. The default value is &#x60;0&#x60;. | [optional] [default to 0]

### Return type

[**Applications**](Applications.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_application**
> Application update_application(app_id, update_application_request=update_application_request)

Update Application

You use a `PUT` request to update an existing application.

### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.models.update_application_request import UpdateApplicationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/applications
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/applications"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | The ID allocated to your application by Nexmo.
    update_application_request = openapi_client.UpdateApplicationRequest() # UpdateApplicationRequest |  (optional)

    try:
        # Update Application
        api_response = api_instance.update_application(app_id, update_application_request=update_application_request)
        print("The response of DefaultApi->update_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The ID allocated to your application by Nexmo. | 
 **update_application_request** | [**UpdateApplicationRequest**](UpdateApplicationRequest.md)|  | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

