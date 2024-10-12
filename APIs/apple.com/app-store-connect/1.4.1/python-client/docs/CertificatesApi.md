# openapi_client.CertificatesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificates_create_instance**](CertificatesApi.md#certificates_create_instance) | **POST** /v1/certificates | 
[**certificates_delete_instance**](CertificatesApi.md#certificates_delete_instance) | **DELETE** /v1/certificates/{id} | 
[**certificates_get_collection**](CertificatesApi.md#certificates_get_collection) | **GET** /v1/certificates | 
[**certificates_get_instance**](CertificatesApi.md#certificates_get_instance) | **GET** /v1/certificates/{id} | 


# **certificates_create_instance**
> CertificateResponse certificates_create_instance(certificate_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.certificate_create_request import CertificateCreateRequest
from openapi_client.models.certificate_response import CertificateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_create_request = openapi_client.CertificateCreateRequest() # CertificateCreateRequest | Certificate representation

    try:
        api_response = api_instance.certificates_create_instance(certificate_create_request)
        print("The response of CertificatesApi->certificates_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_create_request** | [**CertificateCreateRequest**](CertificateCreateRequest.md)| Certificate representation | 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single Certificate |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_delete_instance**
> certificates_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.certificates_delete_instance(id)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_get_collection**
> CertificatesResponse certificates_get_collection(filter_certificate_type=filter_certificate_type, filter_display_name=filter_display_name, filter_serial_number=filter_serial_number, filter_id=filter_id, sort=sort, fields_certificates=fields_certificates, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.certificates_response import CertificatesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    filter_certificate_type = ['filter_certificate_type_example'] # List[str] | filter by attribute 'certificateType' (optional)
    filter_display_name = ['filter_display_name_example'] # List[str] | filter by attribute 'displayName' (optional)
    filter_serial_number = ['filter_serial_number_example'] # List[str] | filter by attribute 'serialNumber' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_certificates = ['fields_certificates_example'] # List[str] | the fields to include for returned resources of type certificates (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.certificates_get_collection(filter_certificate_type=filter_certificate_type, filter_display_name=filter_display_name, filter_serial_number=filter_serial_number, filter_id=filter_id, sort=sort, fields_certificates=fields_certificates, limit=limit)
        print("The response of CertificatesApi->certificates_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_certificate_type** | [**List[str]**](str.md)| filter by attribute &#39;certificateType&#39; | [optional] 
 **filter_display_name** | [**List[str]**](str.md)| filter by attribute &#39;displayName&#39; | [optional] 
 **filter_serial_number** | [**List[str]**](str.md)| filter by attribute &#39;serialNumber&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_certificates** | [**List[str]**](str.md)| the fields to include for returned resources of type certificates | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**CertificatesResponse**](CertificatesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Certificates |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_get_instance**
> CertificateResponse certificates_get_instance(id, fields_certificates=fields_certificates)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.certificate_response import CertificateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_certificates = ['fields_certificates_example'] # List[str] | the fields to include for returned resources of type certificates (optional)

    try:
        api_response = api_instance.certificates_get_instance(id, fields_certificates=fields_certificates)
        print("The response of CertificatesApi->certificates_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_certificates** | [**List[str]**](str.md)| the fields to include for returned resources of type certificates | [optional] 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single Certificate |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

