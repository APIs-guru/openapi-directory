# openapi_client.BetaLicenseAgreementsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**beta_license_agreements_app_get_to_one_related**](BetaLicenseAgreementsApi.md#beta_license_agreements_app_get_to_one_related) | **GET** /v1/betaLicenseAgreements/{id}/app | 
[**beta_license_agreements_get_collection**](BetaLicenseAgreementsApi.md#beta_license_agreements_get_collection) | **GET** /v1/betaLicenseAgreements | 
[**beta_license_agreements_get_instance**](BetaLicenseAgreementsApi.md#beta_license_agreements_get_instance) | **GET** /v1/betaLicenseAgreements/{id} | 
[**beta_license_agreements_update_instance**](BetaLicenseAgreementsApi.md#beta_license_agreements_update_instance) | **PATCH** /v1/betaLicenseAgreements/{id} | 


# **beta_license_agreements_app_get_to_one_related**
> AppResponse beta_license_agreements_app_get_to_one_related(id, fields_apps=fields_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_response import AppResponse
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
    api_instance = openapi_client.BetaLicenseAgreementsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.beta_license_agreements_app_get_to_one_related(id, fields_apps=fields_apps)
        print("The response of BetaLicenseAgreementsApi->beta_license_agreements_app_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaLicenseAgreementsApi->beta_license_agreements_app_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_license_agreements_get_collection**
> BetaLicenseAgreementsResponse beta_license_agreements_get_collection(filter_app=filter_app, fields_beta_license_agreements=fields_beta_license_agreements, limit=limit, include=include, fields_apps=fields_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_license_agreements_response import BetaLicenseAgreementsResponse
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
    api_instance = openapi_client.BetaLicenseAgreementsApi(api_client)
    filter_app = ['filter_app_example'] # List[str] | filter by id(s) of related 'app' (optional)
    fields_beta_license_agreements = ['fields_beta_license_agreements_example'] # List[str] | the fields to include for returned resources of type betaLicenseAgreements (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.beta_license_agreements_get_collection(filter_app=filter_app, fields_beta_license_agreements=fields_beta_license_agreements, limit=limit, include=include, fields_apps=fields_apps)
        print("The response of BetaLicenseAgreementsApi->beta_license_agreements_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaLicenseAgreementsApi->beta_license_agreements_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_app** | [**List[str]**](str.md)| filter by id(s) of related &#39;app&#39; | [optional] 
 **fields_beta_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type betaLicenseAgreements | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**BetaLicenseAgreementsResponse**](BetaLicenseAgreementsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of BetaLicenseAgreements |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_license_agreements_get_instance**
> BetaLicenseAgreementResponse beta_license_agreements_get_instance(id, fields_beta_license_agreements=fields_beta_license_agreements, include=include, fields_apps=fields_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_license_agreement_response import BetaLicenseAgreementResponse
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
    api_instance = openapi_client.BetaLicenseAgreementsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_beta_license_agreements = ['fields_beta_license_agreements_example'] # List[str] | the fields to include for returned resources of type betaLicenseAgreements (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)

    try:
        api_response = api_instance.beta_license_agreements_get_instance(id, fields_beta_license_agreements=fields_beta_license_agreements, include=include, fields_apps=fields_apps)
        print("The response of BetaLicenseAgreementsApi->beta_license_agreements_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaLicenseAgreementsApi->beta_license_agreements_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_beta_license_agreements** | [**List[str]**](str.md)| the fields to include for returned resources of type betaLicenseAgreements | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 

### Return type

[**BetaLicenseAgreementResponse**](BetaLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaLicenseAgreement |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **beta_license_agreements_update_instance**
> BetaLicenseAgreementResponse beta_license_agreements_update_instance(id, beta_license_agreement_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.beta_license_agreement_response import BetaLicenseAgreementResponse
from openapi_client.models.beta_license_agreement_update_request import BetaLicenseAgreementUpdateRequest
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
    api_instance = openapi_client.BetaLicenseAgreementsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    beta_license_agreement_update_request = openapi_client.BetaLicenseAgreementUpdateRequest() # BetaLicenseAgreementUpdateRequest | BetaLicenseAgreement representation

    try:
        api_response = api_instance.beta_license_agreements_update_instance(id, beta_license_agreement_update_request)
        print("The response of BetaLicenseAgreementsApi->beta_license_agreements_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BetaLicenseAgreementsApi->beta_license_agreements_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **beta_license_agreement_update_request** | [**BetaLicenseAgreementUpdateRequest**](BetaLicenseAgreementUpdateRequest.md)| BetaLicenseAgreement representation | 

### Return type

[**BetaLicenseAgreementResponse**](BetaLicenseAgreementResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BetaLicenseAgreement |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

