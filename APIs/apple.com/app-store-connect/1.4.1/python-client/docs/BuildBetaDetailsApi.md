# openapi_client.BuildBetaDetailsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**build_beta_details_build_get_to_one_related**](BuildBetaDetailsApi.md#build_beta_details_build_get_to_one_related) | **GET** /v1/buildBetaDetails/{id}/build | 
[**build_beta_details_get_collection**](BuildBetaDetailsApi.md#build_beta_details_get_collection) | **GET** /v1/buildBetaDetails | 
[**build_beta_details_get_instance**](BuildBetaDetailsApi.md#build_beta_details_get_instance) | **GET** /v1/buildBetaDetails/{id} | 
[**build_beta_details_update_instance**](BuildBetaDetailsApi.md#build_beta_details_update_instance) | **PATCH** /v1/buildBetaDetails/{id} | 


# **build_beta_details_build_get_to_one_related**
> BuildResponse build_beta_details_build_get_to_one_related(id, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.build_response import BuildResponse
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
    api_instance = openapi_client.BuildBetaDetailsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.build_beta_details_build_get_to_one_related(id, fields_builds=fields_builds)
        print("The response of BuildBetaDetailsApi->build_beta_details_build_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildBetaDetailsApi->build_beta_details_build_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BuildResponse**](BuildResponse.md)

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

# **build_beta_details_get_collection**
> BuildBetaDetailsResponse build_beta_details_get_collection(filter_build=filter_build, filter_id=filter_id, fields_build_beta_details=fields_build_beta_details, limit=limit, include=include, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.build_beta_details_response import BuildBetaDetailsResponse
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
    api_instance = openapi_client.BuildBetaDetailsApi(api_client)
    filter_build = ['filter_build_example'] # List[str] | filter by id(s) of related 'build' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    fields_build_beta_details = ['fields_build_beta_details_example'] # List[str] | the fields to include for returned resources of type buildBetaDetails (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.build_beta_details_get_collection(filter_build=filter_build, filter_id=filter_id, fields_build_beta_details=fields_build_beta_details, limit=limit, include=include, fields_builds=fields_builds)
        print("The response of BuildBetaDetailsApi->build_beta_details_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildBetaDetailsApi->build_beta_details_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_build** | [**List[str]**](str.md)| filter by id(s) of related &#39;build&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **fields_build_beta_details** | [**List[str]**](str.md)| the fields to include for returned resources of type buildBetaDetails | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BuildBetaDetailsResponse**](BuildBetaDetailsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of BuildBetaDetails |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_beta_details_get_instance**
> BuildBetaDetailResponse build_beta_details_get_instance(id, fields_build_beta_details=fields_build_beta_details, include=include, fields_builds=fields_builds)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.build_beta_detail_response import BuildBetaDetailResponse
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
    api_instance = openapi_client.BuildBetaDetailsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_build_beta_details = ['fields_build_beta_details_example'] # List[str] | the fields to include for returned resources of type buildBetaDetails (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_builds = ['fields_builds_example'] # List[str] | the fields to include for returned resources of type builds (optional)

    try:
        api_response = api_instance.build_beta_details_get_instance(id, fields_build_beta_details=fields_build_beta_details, include=include, fields_builds=fields_builds)
        print("The response of BuildBetaDetailsApi->build_beta_details_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildBetaDetailsApi->build_beta_details_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_build_beta_details** | [**List[str]**](str.md)| the fields to include for returned resources of type buildBetaDetails | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_builds** | [**List[str]**](str.md)| the fields to include for returned resources of type builds | [optional] 

### Return type

[**BuildBetaDetailResponse**](BuildBetaDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BuildBetaDetail |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_beta_details_update_instance**
> BuildBetaDetailResponse build_beta_details_update_instance(id, build_beta_detail_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.build_beta_detail_response import BuildBetaDetailResponse
from openapi_client.models.build_beta_detail_update_request import BuildBetaDetailUpdateRequest
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
    api_instance = openapi_client.BuildBetaDetailsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    build_beta_detail_update_request = openapi_client.BuildBetaDetailUpdateRequest() # BuildBetaDetailUpdateRequest | BuildBetaDetail representation

    try:
        api_response = api_instance.build_beta_details_update_instance(id, build_beta_detail_update_request)
        print("The response of BuildBetaDetailsApi->build_beta_details_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildBetaDetailsApi->build_beta_details_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **build_beta_detail_update_request** | [**BuildBetaDetailUpdateRequest**](BuildBetaDetailUpdateRequest.md)| BuildBetaDetail representation | 

### Return type

[**BuildBetaDetailResponse**](BuildBetaDetailResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BuildBetaDetail |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

