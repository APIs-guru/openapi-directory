# openapi_client.ApplicationTypeApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_application_manifest**](ApplicationTypeApi.md#get_application_manifest) | **GET** /ApplicationTypes/{applicationTypeName}/$/GetApplicationManifest | Gets the manifest describing an application type.
[**get_application_type_info_list**](ApplicationTypeApi.md#get_application_type_info_list) | **GET** /ApplicationTypes | Gets the list of application types in the Service Fabric cluster.
[**get_application_type_info_list_by_name**](ApplicationTypeApi.md#get_application_type_info_list_by_name) | **GET** /ApplicationTypes/{applicationTypeName} | Gets the list of application types in the Service Fabric cluster matching exactly the specified name.
[**provision_application_type**](ApplicationTypeApi.md#provision_application_type) | **POST** /ApplicationTypes/$/Provision | Provisions or registers a Service Fabric application type with the cluster using the .sfpkg package in the external store or using the application package in the image store.
[**unprovision_application_type**](ApplicationTypeApi.md#unprovision_application_type) | **POST** /ApplicationTypes/{applicationTypeName}/$/Unprovision | Removes or unregisters a Service Fabric application type from the cluster.


# **get_application_manifest**
> ApplicationTypeManifest get_application_manifest(api_version, application_type_name, application_type_version, timeout=timeout)

Gets the manifest describing an application type.

Gets the manifest describing an application type. The response contains the application manifest XML as a string.

### Example


```python
import openapi_client
from openapi_client.models.application_type_manifest import ApplicationTypeManifest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    application_type_name = 'application_type_name_example' # str | The name of the application type.
    application_type_version = 'application_type_version_example' # str | The version of the application type.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the manifest describing an application type.
        api_response = api_instance.get_application_manifest(api_version, application_type_name, application_type_version, timeout=timeout)
        print("The response of ApplicationTypeApi->get_application_manifest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->get_application_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **application_type_name** | **str**| The name of the application type. | 
 **application_type_version** | **str**| The version of the application type. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ApplicationTypeManifest**](ApplicationTypeManifest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the node. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_application_type_info_list**
> PagedApplicationTypeInfoList get_application_type_info_list(api_version, application_type_definition_kind_filter=application_type_definition_kind_filter, exclude_application_parameters=exclude_application_parameters, continuation_token=continuation_token, max_results=max_results, timeout=timeout)

Gets the list of application types in the Service Fabric cluster.

Returns the information about the application types that are provisioned or in the process of being provisioned in the Service Fabric cluster. Each version of an application type is returned as one application type. The response includes the name, version, status and other details about the application type. This is a paged query, meaning that if not all of the application types fit in a page, one page of results is returned as well as a continuation token which can be used to get the next page. For example, if there are 10 application types but a page only fits the first 3 application types, or if max results is set to 3, then 3 is returned. To access the rest of the results, retrieve subsequent pages by using the returned continuation token in the next query. An empty continuation token is returned if there are no subsequent pages.

### Example


```python
import openapi_client
from openapi_client.models.paged_application_type_info_list import PagedApplicationTypeInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    application_type_definition_kind_filter = 0 # int | Used to filter on ApplicationTypeDefinitionKind which is the mechanism used to define a Service Fabric application type. - Default - Default value, which performs the same function as selecting \"All\". The value is 0. - All - Filter that matches input with any ApplicationTypeDefinitionKind value. The value is 65535. - ServiceFabricApplicationPackage - Filter that matches input with ApplicationTypeDefinitionKind value ServiceFabricApplicationPackage. The value is 1. - Compose - Filter that matches input with ApplicationTypeDefinitionKind value Compose. The value is 2.  (optional) (default to 0)
    exclude_application_parameters = False # bool | The flag that specifies whether application parameters will be excluded from the result. (optional) (default to False)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as much results as possible that fit in the return message. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list of application types in the Service Fabric cluster.
        api_response = api_instance.get_application_type_info_list(api_version, application_type_definition_kind_filter=application_type_definition_kind_filter, exclude_application_parameters=exclude_application_parameters, continuation_token=continuation_token, max_results=max_results, timeout=timeout)
        print("The response of ApplicationTypeApi->get_application_type_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->get_application_type_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **application_type_definition_kind_filter** | **int**| Used to filter on ApplicationTypeDefinitionKind which is the mechanism used to define a Service Fabric application type. - Default - Default value, which performs the same function as selecting \&quot;All\&quot;. The value is 0. - All - Filter that matches input with any ApplicationTypeDefinitionKind value. The value is 65535. - ServiceFabricApplicationPackage - Filter that matches input with ApplicationTypeDefinitionKind value ServiceFabricApplicationPackage. The value is 1. - Compose - Filter that matches input with ApplicationTypeDefinitionKind value Compose. The value is 2.  | [optional] [default to 0]
 **exclude_application_parameters** | **bool**| The flag that specifies whether application parameters will be excluded from the result. | [optional] [default to False]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as much results as possible that fit in the return message. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedApplicationTypeInfoList**](PagedApplicationTypeInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of application types in the cluster. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_application_type_info_list_by_name**
> PagedApplicationTypeInfoList get_application_type_info_list_by_name(api_version, application_type_name, application_type_version=application_type_version, exclude_application_parameters=exclude_application_parameters, continuation_token=continuation_token, max_results=max_results, timeout=timeout)

Gets the list of application types in the Service Fabric cluster matching exactly the specified name.

Returns the information about the application types that are provisioned or in the process of being provisioned in the Service Fabric cluster. These results are of application types whose name match exactly the one specified as the parameter, and which comply with the given query parameters. All versions of the application type matching the application type name are returned, with each version returned as one application type. The response includes the name, version, status and other details about the application type. This is a paged query, meaning that if not all of the application types fit in a page, one page of results is returned as well as a continuation token which can be used to get the next page. For example, if there are 10 application types but a page only fits the first 3 application types, or if max results is set to 3, then 3 is returned. To access the rest of the results, retrieve subsequent pages by using the returned continuation token in the next query. An empty continuation token is returned if there are no subsequent pages.

### Example


```python
import openapi_client
from openapi_client.models.paged_application_type_info_list import PagedApplicationTypeInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    application_type_name = 'application_type_name_example' # str | The name of the application type.
    application_type_version = 'application_type_version_example' # str | The version of the application type. (optional)
    exclude_application_parameters = False # bool | The flag that specifies whether application parameters will be excluded from the result. (optional) (default to False)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    max_results = 0 # int | The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as much results as possible that fit in the return message. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list of application types in the Service Fabric cluster matching exactly the specified name.
        api_response = api_instance.get_application_type_info_list_by_name(api_version, application_type_name, application_type_version=application_type_version, exclude_application_parameters=exclude_application_parameters, continuation_token=continuation_token, max_results=max_results, timeout=timeout)
        print("The response of ApplicationTypeApi->get_application_type_info_list_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->get_application_type_info_list_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **application_type_name** | **str**| The name of the application type. | 
 **application_type_version** | **str**| The version of the application type. | [optional] 
 **exclude_application_parameters** | **bool**| The flag that specifies whether application parameters will be excluded from the result. | [optional] [default to False]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **max_results** | **int**| The maximum number of results to be returned as part of the paged queries. This parameter defines the upper bound on the number of results returned. The results returned can be less than the specified maximum results if they do not fit in the message as per the max message size restrictions defined in the configuration. If this parameter is zero or not specified, the paged queries includes as much results as possible that fit in the return message. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedApplicationTypeInfoList**](PagedApplicationTypeInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of application types in the cluster. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provision_application_type**
> provision_application_type(api_version, provision_application_type_description_base_required_body_param, timeout=timeout)

Provisions or registers a Service Fabric application type with the cluster using the .sfpkg package in the external store or using the application package in the image store.

Provisions a Service Fabric application type with the cluster. This is required before any new applications can be instantiated. The provision operation can be performed either on the application package specified by the relativePathInImageStore, or by using the URI of the external .sfpkg. 

### Example


```python
import openapi_client
from openapi_client.models.provision_application_type_description_base import ProvisionApplicationTypeDescriptionBase
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    api_version = 6.1 # str | The version of this API. This is a required parameter and its value must be \"6.1\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.1)
    provision_application_type_description_base_required_body_param = openapi_client.ProvisionApplicationTypeDescriptionBase() # ProvisionApplicationTypeDescriptionBase | The base type of provision application type description which supports either image store based provision or external store based provision.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Provisions or registers a Service Fabric application type with the cluster using the .sfpkg package in the external store or using the application package in the image store.
        api_instance.provision_application_type(api_version, provision_application_type_description_base_required_body_param, timeout=timeout)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->provision_application_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.1\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.1]
 **provision_application_type_description_base_required_body_param** | [**ProvisionApplicationTypeDescriptionBase**](ProvisionApplicationTypeDescriptionBase.md)| The base type of provision application type description which supports either image store based provision or external store based provision. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful provision will return 200 status code. |  -  |
**202** | A 202 status code indicates the operation was accepted and the provision operation has been initiated. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unprovision_application_type**
> unprovision_application_type(api_version, application_type_name, unprovision_application_type_description_info, timeout=timeout)

Removes or unregisters a Service Fabric application type from the cluster.

Removes or unregisters a Service Fabric application type from the cluster. This operation can only be performed if all application instances of the application type has been deleted. Once the application type is unregistered, no new application instances can be created for this particular application type.

### Example


```python
import openapi_client
from openapi_client.models.unprovision_application_type_description_info import UnprovisionApplicationTypeDescriptionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    application_type_name = 'application_type_name_example' # str | The name of the application type.
    unprovision_application_type_description_info = openapi_client.UnprovisionApplicationTypeDescriptionInfo() # UnprovisionApplicationTypeDescriptionInfo | The relative path for the application package in the image store specified during the prior copy operation.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Removes or unregisters a Service Fabric application type from the cluster.
        api_instance.unprovision_application_type(api_version, application_type_name, unprovision_application_type_description_info, timeout=timeout)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->unprovision_application_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **application_type_name** | **str**| The name of the application type. | 
 **unprovision_application_type_description_info** | [**UnprovisionApplicationTypeDescriptionInfo**](UnprovisionApplicationTypeDescriptionInfo.md)| The relative path for the application package in the image store specified during the prior copy operation. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful provision will return 200 status code. |  -  |
**202** | A 202 status code indicates the operation was accepted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

