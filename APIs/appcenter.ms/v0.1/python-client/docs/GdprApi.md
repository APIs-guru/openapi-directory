# openapi_client.GdprApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_subject_right_cancel_delete_request**](GdprApi.md#data_subject_right_cancel_delete_request) | **POST** /v0.1/user/dsr/delete/{token}/cancel | 
[**data_subject_right_cancel_export_request**](GdprApi.md#data_subject_right_cancel_export_request) | **POST** /v0.1/user/dsr/export/{token}/cancel | 
[**data_subject_right_delete_request**](GdprApi.md#data_subject_right_delete_request) | **POST** /v0.1/user/dsr/delete | 
[**data_subject_right_delete_status_request**](GdprApi.md#data_subject_right_delete_status_request) | **GET** /v0.1/user/dsr/delete/{token} | 
[**data_subject_right_export_request**](GdprApi.md#data_subject_right_export_request) | **POST** /v0.1/user/dsr/export | 
[**data_subject_right_export_status_request**](GdprApi.md#data_subject_right_export_status_request) | **GET** /v0.1/user/dsr/export/{token} | 


# **data_subject_right_cancel_delete_request**
> DataSubjectRightDeleteRequest202Response data_subject_right_cancel_delete_request(token, data_subject_right_cancel_delete_request_request=data_subject_right_cancel_delete_request_request)



### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.data_subject_right_cancel_delete_request_request import DataSubjectRightCancelDeleteRequestRequest
from openapi_client.models.data_subject_right_delete_request202_response import DataSubjectRightDeleteRequest202Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GdprApi(api_client)
    token = 'token_example' # str | Unique request ID (GUID)
    data_subject_right_cancel_delete_request_request = openapi_client.DataSubjectRightCancelDeleteRequestRequest() # DataSubjectRightCancelDeleteRequestRequest |  (optional)

    try:
        api_response = api_instance.data_subject_right_cancel_delete_request(token, data_subject_right_cancel_delete_request_request=data_subject_right_cancel_delete_request_request)
        print("The response of GdprApi->data_subject_right_cancel_delete_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GdprApi->data_subject_right_cancel_delete_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Unique request ID (GUID) | 
 **data_subject_right_cancel_delete_request_request** | [**DataSubjectRightCancelDeleteRequestRequest**](DataSubjectRightCancelDeleteRequestRequest.md)|  | [optional] 

### Return type

[**DataSubjectRightDeleteRequest202Response**](DataSubjectRightDeleteRequest202Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Data subject right cancel delete request has been accepted. |  * Location - Link to get details about the cancel export. <br>  |
**503** | Cancel delete request cannot be processed yet. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_subject_right_cancel_export_request**
> DataSubjectRightDeleteRequest202Response data_subject_right_cancel_export_request(token)



### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.data_subject_right_delete_request202_response import DataSubjectRightDeleteRequest202Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GdprApi(api_client)
    token = 'token_example' # str | Unique request ID (GUID)

    try:
        api_response = api_instance.data_subject_right_cancel_export_request(token)
        print("The response of GdprApi->data_subject_right_cancel_export_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GdprApi->data_subject_right_cancel_export_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Unique request ID (GUID) | 

### Return type

[**DataSubjectRightDeleteRequest202Response**](DataSubjectRightDeleteRequest202Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Data subject right cancel export request has been accepted. |  * Location - Link to get details about the cancel export. <br>  |
**503** | Cancel export request cannot be processed yet. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_subject_right_delete_request**
> DataSubjectRightDeleteRequest202Response data_subject_right_delete_request()



### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.data_subject_right_delete_request202_response import DataSubjectRightDeleteRequest202Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GdprApi(api_client)

    try:
        api_response = api_instance.data_subject_right_delete_request()
        print("The response of GdprApi->data_subject_right_delete_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GdprApi->data_subject_right_delete_request: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DataSubjectRightDeleteRequest202Response**](DataSubjectRightDeleteRequest202Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Data subject right delete request has been accepted. |  * Location - Link to get details about the cancel export. <br>  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_subject_right_delete_status_request**
> DataSubjectRightDeleteStatusRequest200Response data_subject_right_delete_status_request(token, email)



### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.data_subject_right_delete_status_request200_response import DataSubjectRightDeleteStatusRequest200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GdprApi(api_client)
    token = 'token_example' # str | Unique request ID (GUID)
    email = 'email_example' # str | Email used for delete with x-authz-bypass headers

    try:
        api_response = api_instance.data_subject_right_delete_status_request(token, email)
        print("The response of GdprApi->data_subject_right_delete_status_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GdprApi->data_subject_right_delete_status_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Unique request ID (GUID) | 
 **email** | **str**| Email used for delete with x-authz-bypass headers | 

### Return type

[**DataSubjectRightDeleteStatusRequest200Response**](DataSubjectRightDeleteStatusRequest200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data subject right delete request status successfully retrieved. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_subject_right_export_request**
> DataSubjectRightDeleteRequest202Response data_subject_right_export_request()



### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.data_subject_right_delete_request202_response import DataSubjectRightDeleteRequest202Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GdprApi(api_client)

    try:
        api_response = api_instance.data_subject_right_export_request()
        print("The response of GdprApi->data_subject_right_export_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GdprApi->data_subject_right_export_request: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DataSubjectRightDeleteRequest202Response**](DataSubjectRightDeleteRequest202Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Data subject right export request has been accepted. |  * Location - Link to get details about the cancel export. <br>  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_subject_right_export_status_request**
> DataSubjectRightDeleteStatusRequest200Response data_subject_right_export_status_request(token)



### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.data_subject_right_delete_status_request200_response import DataSubjectRightDeleteStatusRequest200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GdprApi(api_client)
    token = 'token_example' # str | Unique request ID (GUID)

    try:
        api_response = api_instance.data_subject_right_export_status_request(token)
        print("The response of GdprApi->data_subject_right_export_status_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GdprApi->data_subject_right_export_status_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Unique request ID (GUID) | 

### Return type

[**DataSubjectRightDeleteStatusRequest200Response**](DataSubjectRightDeleteStatusRequest200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Data subject right export request status successfully retrieved. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

