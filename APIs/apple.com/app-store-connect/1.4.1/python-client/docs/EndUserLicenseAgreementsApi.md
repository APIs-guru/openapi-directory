# openapi_client.EndUserLicenseAgreementsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**end_user_license_agreements_create_instance**](EndUserLicenseAgreementsApi.md#end_user_license_agreements_create_instance) | **POST** /v1/endUserLicenseAgreements | 
[**end_user_license_agreements_delete_instance**](EndUserLicenseAgreementsApi.md#end_user_license_agreements_delete_instance) | **DELETE** /v1/endUserLicenseAgreements/{id} | 
[**end_user_license_agreements_get_instance**](EndUserLicenseAgreementsApi.md#end_user_license_agreements_get_instance) | **GET** /v1/endUserLicenseAgreements/{id} | 
[**end_user_license_agreements_territories_get_to_many_related**](EndUserLicenseAgreementsApi.md#end_user_license_agreements_territories_get_to_many_related) | **GET** /v1/endUserLicenseAgreements/{id}/territories | 
[**end_user_license_agreements_update_instance**](EndUserLicenseAgreementsApi.md#end_user_license_agreements_update_instance) | **PATCH** /v1/endUserLicenseAgreements/{id} | 


# **end_user_license_agreements_create_instance**
> EndUserLicenseAgreementResponse end_user_license_agreements_create_instance(end_user_license_agreement_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.end_user_license_agreement_create_request import EndUserLicenseAgreementCreateRequest
from openapi_client.models.end_user_license_agreement_response import EndUserLicenseAgreementResponse
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
    api_instance = openapi_client.EndUserLicenseAgreementsApi(api_client)
    end_user_license_agreement_create_request = openapi_client.EndUserLicenseAgreementCreateRequest() # EndUserLicenseAgreementCreateRequest | EndUserLicenseAgreement representation

    try:
        api_response = api_instance.end_user_license_agreements_create_instance(end_user_license_agreement_create_request)
        print("The response of EndUserLicenseAgreementsApi->end_user_license_agreements_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndUserLicenseAgreementsApi->end_user_license_agreements_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **end_user_license_agreement_create_request** | [**EndUserLicenseAgreementCreateRequest**](EndUserLicenseAgreementCreateRequest.md)| EndUserLicenseAgreement representation | 

### Return type

[**EndUserLicenseAgreementResponse**](EndUserLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single EndUserLicenseAgreement |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **end_user_license_agreements_delete_instance**
> end_user_license_agreements_delete_instance(id)



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
    api_instance = openapi_client.EndUserLicenseAgreementsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.end_user_license_agreements_delete_instance(id)
    except Exception as e:
        print("Exception when calling EndUserLicenseAgreementsApi->end_user_license_agreements_delete_instance: %s\n" % e)
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

# **end_user_license_agreements_get_instance**
> EndUserLicenseAgreementResponse end_user_license_agreements_get_instance(id, fields_end_user_license_agreements=fields_end_user_license_agreements, include=include, fields_territories=fields_territories, limit_territories=limit_territories)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.end_user_license_agreement_response import EndUserLicenseAgreementResponse
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
    api_instance = openapi_client.EndUserLicenseAgreementsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_end_user_license_agreements = ['fields_end_user_license_agreements_example'] # List[str] | the fields to include for returned resources of type endUserLicenseAgreements (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_territories = ['fields_territories_example'] # List[str] | the fields to include for returned resources of type territories (optional)
    limit_territories = 56 # int | maximum number of related territories returned (when they are included) (optional)

    try:
        api_response = api_instance.end_user_license_agreements_get_instance(id, fields_end_user_license_agreements=fields_end_user_license_agreements, include=include, fields_territories=fields_territories, limit_territories=limit_territories)
        print("The response of EndUserLicenseAgreementsApi->end_user_license_agreements_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndUserLicenseAgreementsApi->end_user_license_agreements_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_end_user_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type endUserLicenseAgreements | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_territories** | [**List[str]**](str.md)| the fields to include for returned resources of type territories | [optional] 
 **limit_territories** | **int**| maximum number of related territories returned (when they are included) | [optional] 

### Return type

[**EndUserLicenseAgreementResponse**](EndUserLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single EndUserLicenseAgreement |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **end_user_license_agreements_territories_get_to_many_related**
> TerritoriesResponse end_user_license_agreements_territories_get_to_many_related(id, fields_territories=fields_territories, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.territories_response import TerritoriesResponse
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
    api_instance = openapi_client.EndUserLicenseAgreementsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_territories = ['fields_territories_example'] # List[str] | the fields to include for returned resources of type territories (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.end_user_license_agreements_territories_get_to_many_related(id, fields_territories=fields_territories, limit=limit)
        print("The response of EndUserLicenseAgreementsApi->end_user_license_agreements_territories_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndUserLicenseAgreementsApi->end_user_license_agreements_territories_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_territories** | [**List[str]**](str.md)| the fields to include for returned resources of type territories | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**TerritoriesResponse**](TerritoriesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **end_user_license_agreements_update_instance**
> EndUserLicenseAgreementResponse end_user_license_agreements_update_instance(id, end_user_license_agreement_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.end_user_license_agreement_response import EndUserLicenseAgreementResponse
from openapi_client.models.end_user_license_agreement_update_request import EndUserLicenseAgreementUpdateRequest
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
    api_instance = openapi_client.EndUserLicenseAgreementsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    end_user_license_agreement_update_request = openapi_client.EndUserLicenseAgreementUpdateRequest() # EndUserLicenseAgreementUpdateRequest | EndUserLicenseAgreement representation

    try:
        api_response = api_instance.end_user_license_agreements_update_instance(id, end_user_license_agreement_update_request)
        print("The response of EndUserLicenseAgreementsApi->end_user_license_agreements_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EndUserLicenseAgreementsApi->end_user_license_agreements_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **end_user_license_agreement_update_request** | [**EndUserLicenseAgreementUpdateRequest**](EndUserLicenseAgreementUpdateRequest.md)| EndUserLicenseAgreement representation | 

### Return type

[**EndUserLicenseAgreementResponse**](EndUserLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single EndUserLicenseAgreement |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

