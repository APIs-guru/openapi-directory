# openapi_client.DefaultApi

All URIs are relative to *https://azure.local/luis/api/v2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_add**](DefaultApi.md#apps_add) | **POST** /apps/ | 
[**apps_add_custom_prebuilt_domain**](DefaultApi.md#apps_add_custom_prebuilt_domain) | **POST** /apps/customprebuiltdomains | 
[**apps_delete**](DefaultApi.md#apps_delete) | **DELETE** /apps/{appId} | 
[**apps_download_query_logs**](DefaultApi.md#apps_download_query_logs) | **GET** /apps/{appId}/querylogs | 
[**apps_get**](DefaultApi.md#apps_get) | **GET** /apps/{appId} | 
[**apps_get_settings**](DefaultApi.md#apps_get_settings) | **GET** /apps/{appId}/settings | 
[**apps_import**](DefaultApi.md#apps_import) | **POST** /apps/import | 
[**apps_list**](DefaultApi.md#apps_list) | **GET** /apps/ | 
[**apps_list_available_custom_prebuilt_domains**](DefaultApi.md#apps_list_available_custom_prebuilt_domains) | **GET** /apps/customprebuiltdomains | 
[**apps_list_available_custom_prebuilt_domains_for_culture**](DefaultApi.md#apps_list_available_custom_prebuilt_domains_for_culture) | **GET** /apps/customprebuiltdomains/{culture} | 
[**apps_list_cortana_endpoints**](DefaultApi.md#apps_list_cortana_endpoints) | **GET** /apps/assistants | 
[**apps_list_domains**](DefaultApi.md#apps_list_domains) | **GET** /apps/domains | 
[**apps_list_endpoints**](DefaultApi.md#apps_list_endpoints) | **GET** /apps/{appId}/endpoints | 
[**apps_list_supported_cultures**](DefaultApi.md#apps_list_supported_cultures) | **GET** /apps/cultures | 
[**apps_list_usage_scenarios**](DefaultApi.md#apps_list_usage_scenarios) | **GET** /apps/usagescenarios | 
[**apps_publish**](DefaultApi.md#apps_publish) | **POST** /apps/{appId}/publish | 
[**apps_update**](DefaultApi.md#apps_update) | **PUT** /apps/{appId} | 
[**apps_update_settings**](DefaultApi.md#apps_update_settings) | **PUT** /apps/{appId}/settings | 
[**examples_add**](DefaultApi.md#examples_add) | **POST** /apps/{appId}/versions/{versionId}/example | 
[**examples_batch**](DefaultApi.md#examples_batch) | **POST** /apps/{appId}/versions/{versionId}/examples | 
[**examples_delete**](DefaultApi.md#examples_delete) | **DELETE** /apps/{appId}/versions/{versionId}/examples/{exampleId} | 
[**examples_list**](DefaultApi.md#examples_list) | **GET** /apps/{appId}/versions/{versionId}/examples | 
[**features_add_phrase_list**](DefaultApi.md#features_add_phrase_list) | **POST** /apps/{appId}/versions/{versionId}/phraselists | 
[**features_create_pattern_feature**](DefaultApi.md#features_create_pattern_feature) | **POST** /apps/{appId}/versions/{versionId}/patterns | 
[**features_delete_pattern_feature**](DefaultApi.md#features_delete_pattern_feature) | **DELETE** /apps/{appId}/versions/{versionId}/patterns/{patternId} | 
[**features_delete_phrase_list**](DefaultApi.md#features_delete_phrase_list) | **DELETE** /apps/{appId}/versions/{versionId}/phraselists/{phraselistId} | 
[**features_get_application_version_pattern_features**](DefaultApi.md#features_get_application_version_pattern_features) | **GET** /apps/{appId}/versions/{versionId}/patterns | 
[**features_get_pattern_feature_info**](DefaultApi.md#features_get_pattern_feature_info) | **GET** /apps/{appId}/versions/{versionId}/patterns/{patternId} | 
[**features_get_phrase_list**](DefaultApi.md#features_get_phrase_list) | **GET** /apps/{appId}/versions/{versionId}/phraselists/{phraselistId} | 
[**features_list**](DefaultApi.md#features_list) | **GET** /apps/{appId}/versions/{versionId}/features | 
[**features_list_phrase_lists**](DefaultApi.md#features_list_phrase_lists) | **GET** /apps/{appId}/versions/{versionId}/phraselists | 
[**features_update_pattern_feature**](DefaultApi.md#features_update_pattern_feature) | **PUT** /apps/{appId}/versions/{versionId}/patterns/{patternId} | 
[**features_update_phrase_list**](DefaultApi.md#features_update_phrase_list) | **PUT** /apps/{appId}/versions/{versionId}/phraselists/{phraselistId} | 
[**model_add_closed_list**](DefaultApi.md#model_add_closed_list) | **POST** /apps/{appId}/versions/{versionId}/closedlists | 
[**model_add_composite_entity**](DefaultApi.md#model_add_composite_entity) | **POST** /apps/{appId}/versions/{versionId}/compositeentities | 
[**model_add_composite_entity_child**](DefaultApi.md#model_add_composite_entity_child) | **POST** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/children | 
[**model_add_custom_prebuilt_domain**](DefaultApi.md#model_add_custom_prebuilt_domain) | **POST** /apps/{appId}/versions/{versionId}/customprebuiltdomains | 
[**model_add_custom_prebuilt_entity**](DefaultApi.md#model_add_custom_prebuilt_entity) | **POST** /apps/{appId}/versions/{versionId}/customprebuiltentities | 
[**model_add_custom_prebuilt_intent**](DefaultApi.md#model_add_custom_prebuilt_intent) | **POST** /apps/{appId}/versions/{versionId}/customprebuiltintents | 
[**model_add_entity**](DefaultApi.md#model_add_entity) | **POST** /apps/{appId}/versions/{versionId}/entities | 
[**model_add_hierarchical_entity**](DefaultApi.md#model_add_hierarchical_entity) | **POST** /apps/{appId}/versions/{versionId}/hierarchicalentities | 
[**model_add_hierarchical_entity_child**](DefaultApi.md#model_add_hierarchical_entity_child) | **POST** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/children | 
[**model_add_intent**](DefaultApi.md#model_add_intent) | **POST** /apps/{appId}/versions/{versionId}/intents | 
[**model_add_prebuilt**](DefaultApi.md#model_add_prebuilt) | **POST** /apps/{appId}/versions/{versionId}/prebuilts | 
[**model_add_sub_list**](DefaultApi.md#model_add_sub_list) | **POST** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId}/sublists | 
[**model_delete_closed_list**](DefaultApi.md#model_delete_closed_list) | **DELETE** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId} | 
[**model_delete_composite_entity**](DefaultApi.md#model_delete_composite_entity) | **DELETE** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId} | 
[**model_delete_composite_entity_child**](DefaultApi.md#model_delete_composite_entity_child) | **DELETE** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/children/{cChildId} | 
[**model_delete_custom_prebuilt_domain**](DefaultApi.md#model_delete_custom_prebuilt_domain) | **DELETE** /apps/{appId}/versions/{versionId}/customprebuiltdomains/{domainName} | 
[**model_delete_entity**](DefaultApi.md#model_delete_entity) | **DELETE** /apps/{appId}/versions/{versionId}/entities/{entityId} | 
[**model_delete_hierarchical_entity**](DefaultApi.md#model_delete_hierarchical_entity) | **DELETE** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId} | 
[**model_delete_hierarchical_entity_child**](DefaultApi.md#model_delete_hierarchical_entity_child) | **DELETE** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/children/{hChildId} | 
[**model_delete_intent**](DefaultApi.md#model_delete_intent) | **DELETE** /apps/{appId}/versions/{versionId}/intents/{intentId} | 
[**model_delete_prebuilt**](DefaultApi.md#model_delete_prebuilt) | **DELETE** /apps/{appId}/versions/{versionId}/prebuilts/{prebuiltId} | 
[**model_delete_sub_list**](DefaultApi.md#model_delete_sub_list) | **DELETE** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId}/sublists/{subListId} | 
[**model_get_closed_list**](DefaultApi.md#model_get_closed_list) | **GET** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId} | 
[**model_get_composite_entity**](DefaultApi.md#model_get_composite_entity) | **GET** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId} | 
[**model_get_entity**](DefaultApi.md#model_get_entity) | **GET** /apps/{appId}/versions/{versionId}/entities/{entityId} | 
[**model_get_entity_suggestions**](DefaultApi.md#model_get_entity_suggestions) | **GET** /apps/{appId}/versions/{versionId}/entities/{entityId}/suggest | 
[**model_get_hierarchical_entity**](DefaultApi.md#model_get_hierarchical_entity) | **GET** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId} | 
[**model_get_hierarchical_entity_child**](DefaultApi.md#model_get_hierarchical_entity_child) | **GET** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/children/{hChildId} | 
[**model_get_intent**](DefaultApi.md#model_get_intent) | **GET** /apps/{appId}/versions/{versionId}/intents/{intentId} | 
[**model_get_intent_suggestions**](DefaultApi.md#model_get_intent_suggestions) | **GET** /apps/{appId}/versions/{versionId}/intents/{intentId}/suggest | 
[**model_get_prebuilt**](DefaultApi.md#model_get_prebuilt) | **GET** /apps/{appId}/versions/{versionId}/prebuilts/{prebuiltId} | 
[**model_list_closed_lists**](DefaultApi.md#model_list_closed_lists) | **GET** /apps/{appId}/versions/{versionId}/closedlists | 
[**model_list_composite_entities**](DefaultApi.md#model_list_composite_entities) | **GET** /apps/{appId}/versions/{versionId}/compositeentities | 
[**model_list_custom_prebuilt_entities**](DefaultApi.md#model_list_custom_prebuilt_entities) | **GET** /apps/{appId}/versions/{versionId}/customprebuiltentities | 
[**model_list_custom_prebuilt_intents**](DefaultApi.md#model_list_custom_prebuilt_intents) | **GET** /apps/{appId}/versions/{versionId}/customprebuiltintents | 
[**model_list_custom_prebuilt_models**](DefaultApi.md#model_list_custom_prebuilt_models) | **GET** /apps/{appId}/versions/{versionId}/customprebuiltmodels | 
[**model_list_entities**](DefaultApi.md#model_list_entities) | **GET** /apps/{appId}/versions/{versionId}/entities | 
[**model_list_hierarchical_entities**](DefaultApi.md#model_list_hierarchical_entities) | **GET** /apps/{appId}/versions/{versionId}/hierarchicalentities | 
[**model_list_intents**](DefaultApi.md#model_list_intents) | **GET** /apps/{appId}/versions/{versionId}/intents | 
[**model_list_models**](DefaultApi.md#model_list_models) | **GET** /apps/{appId}/versions/{versionId}/models | 
[**model_list_prebuilt_entities**](DefaultApi.md#model_list_prebuilt_entities) | **GET** /apps/{appId}/versions/{versionId}/listprebuilts | 
[**model_list_prebuilts**](DefaultApi.md#model_list_prebuilts) | **GET** /apps/{appId}/versions/{versionId}/prebuilts | 
[**model_patch_closed_list**](DefaultApi.md#model_patch_closed_list) | **PATCH** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId} | 
[**model_update_closed_list**](DefaultApi.md#model_update_closed_list) | **PUT** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId} | 
[**model_update_composite_entity**](DefaultApi.md#model_update_composite_entity) | **PUT** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId} | 
[**model_update_entity**](DefaultApi.md#model_update_entity) | **PUT** /apps/{appId}/versions/{versionId}/entities/{entityId} | 
[**model_update_hierarchical_entity**](DefaultApi.md#model_update_hierarchical_entity) | **PUT** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId} | 
[**model_update_hierarchical_entity_child**](DefaultApi.md#model_update_hierarchical_entity_child) | **PUT** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/children/{hChildId} | 
[**model_update_intent**](DefaultApi.md#model_update_intent) | **PUT** /apps/{appId}/versions/{versionId}/intents/{intentId} | 
[**model_update_sub_list**](DefaultApi.md#model_update_sub_list) | **PUT** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId}/sublists/{subListId} | 
[**permissions_add**](DefaultApi.md#permissions_add) | **POST** /apps/{appId}/permissions | 
[**permissions_delete**](DefaultApi.md#permissions_delete) | **DELETE** /apps/{appId}/permissions | 
[**permissions_list**](DefaultApi.md#permissions_list) | **GET** /apps/{appId}/permissions | 
[**permissions_update**](DefaultApi.md#permissions_update) | **PUT** /apps/{appId}/permissions | 
[**train_get_status**](DefaultApi.md#train_get_status) | **GET** /apps/{appId}/versions/{versionId}/train | 
[**train_train_version**](DefaultApi.md#train_train_version) | **POST** /apps/{appId}/versions/{versionId}/train | 
[**versions_clone**](DefaultApi.md#versions_clone) | **POST** /apps/{appId}/versions/{versionId}/clone | 
[**versions_delete**](DefaultApi.md#versions_delete) | **DELETE** /apps/{appId}/versions/{versionId}/ | 
[**versions_delete_unlabelled_utterance**](DefaultApi.md#versions_delete_unlabelled_utterance) | **DELETE** /apps/{appId}/versions/{versionId}/suggest | 
[**versions_export**](DefaultApi.md#versions_export) | **GET** /apps/{appId}/versions/{versionId}/export | 
[**versions_get**](DefaultApi.md#versions_get) | **GET** /apps/{appId}/versions/{versionId}/ | 
[**versions_import**](DefaultApi.md#versions_import) | **POST** /apps/{appId}/versions/import | 
[**versions_list**](DefaultApi.md#versions_list) | **GET** /apps/{appId}/versions | 
[**versions_update**](DefaultApi.md#versions_update) | **PUT** /apps/{appId}/versions/{versionId}/ | 


# **apps_add**
> str apps_add(application_create_object)



Creates a new LUIS app.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_create_object import ApplicationCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_create_object = openapi_client.ApplicationCreateObject() # ApplicationCreateObject | A model containing Name, Description (optional), Culture, Usage Scenario (optional), Domain (optional) and initial version ID (optional) of the application. Default value for the version ID is 0.1. Note: the culture cannot be changed after the app is created.

    try:
        api_response = api_instance.apps_add(application_create_object)
        print("The response of DefaultApi->apps_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_create_object** | [**ApplicationCreateObject**](ApplicationCreateObject.md)| A model containing Name, Description (optional), Culture, Usage Scenario (optional), Domain (optional) and initial version ID (optional) of the application. Default value for the version ID is 0.1. Note: the culture cannot be changed after the app is created. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_add_custom_prebuilt_domain**
> str apps_add_custom_prebuilt_domain(prebuilt_domain_create_object)



Adds a prebuilt domain along with its models as a new application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain_create_object import PrebuiltDomainCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    prebuilt_domain_create_object = openapi_client.PrebuiltDomainCreateObject() # PrebuiltDomainCreateObject | A prebuilt domain create object containing the name and culture of the domain.

    try:
        api_response = api_instance.apps_add_custom_prebuilt_domain(prebuilt_domain_create_object)
        print("The response of DefaultApi->apps_add_custom_prebuilt_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_add_custom_prebuilt_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prebuilt_domain_create_object** | [**PrebuiltDomainCreateObject**](PrebuiltDomainCreateObject.md)| A prebuilt domain create object containing the name and culture of the domain. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_delete**
> OperationStatus apps_delete(app_id)



Deletes an application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_delete(app_id)
        print("The response of DefaultApi->apps_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_download_query_logs**
> object apps_download_query_logs(app_id)



Gets the query logs of the past month for the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_download_query_logs(app_id)
        print("The response of DefaultApi->apps_download_query_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_download_query_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

**object**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A CSV file containing the query logs for the past month. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get**
> ApplicationInfoResponse apps_get(app_id)



Gets the application info.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_info_response import ApplicationInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_get(app_id)
        print("The response of DefaultApi->apps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

[**ApplicationInfoResponse**](ApplicationInfoResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get_settings**
> ApplicationSettings apps_get_settings(app_id)



Get the application settings.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_settings import ApplicationSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_get_settings(app_id)
        print("The response of DefaultApi->apps_get_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_get_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

[**ApplicationSettings**](ApplicationSettings.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application settings. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_import**
> str apps_import(luis_app, app_name=app_name)



Imports an application to LUIS, the application's structure should be included in in the request body.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.luis_app import LuisApp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    luis_app = openapi_client.LuisApp() # LuisApp | A LUIS application structure.
    app_name = 'app_name_example' # str | The application name to create. If not specified, the application name will be read from the imported object. (optional)

    try:
        api_response = api_instance.apps_import(luis_app, app_name=app_name)
        print("The response of DefaultApi->apps_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **luis_app** | [**LuisApp**](LuisApp.md)| A LUIS application structure. | 
 **app_name** | **str**| The application name to create. If not specified, the application name will be read from the imported object. | [optional] 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the imported application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list**
> List[ApplicationInfoResponse] apps_list(skip=skip, take=take)



Lists all of the user applications.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_info_response import ApplicationInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.apps_list(skip=skip, take=take)
        print("The response of DefaultApi->apps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[ApplicationInfoResponse]**](ApplicationInfoResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the user applications. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_available_custom_prebuilt_domains**
> List[PrebuiltDomain] apps_list_available_custom_prebuilt_domains()



Gets all the available custom prebuilt domains for all cultures.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain import PrebuiltDomain
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_available_custom_prebuilt_domains()
        print("The response of DefaultApi->apps_list_available_custom_prebuilt_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_available_custom_prebuilt_domains: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PrebuiltDomain]**](PrebuiltDomain.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all custom prebuilt domains and their intents/entities representation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_available_custom_prebuilt_domains_for_culture**
> List[PrebuiltDomain] apps_list_available_custom_prebuilt_domains_for_culture(culture)



Gets all the available custom prebuilt domains for a specific culture.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain import PrebuiltDomain
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    culture = 'culture_example' # str | Culture.

    try:
        api_response = api_instance.apps_list_available_custom_prebuilt_domains_for_culture(culture)
        print("The response of DefaultApi->apps_list_available_custom_prebuilt_domains_for_culture:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_available_custom_prebuilt_domains_for_culture: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **culture** | **str**| Culture. | 

### Return type

[**List[PrebuiltDomain]**](PrebuiltDomain.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all domains and their intents/entities representation for a specific culture. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_cortana_endpoints**
> PersonalAssistantsResponse apps_list_cortana_endpoints()



Gets the endpoint URLs for the prebuilt Cortana applications.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.personal_assistants_response import PersonalAssistantsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_cortana_endpoints()
        print("The response of DefaultApi->apps_list_cortana_endpoints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_cortana_endpoints: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PersonalAssistantsResponse**](PersonalAssistantsResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A personal assistant apps JSON object containing the endpoint URLs for Cortana applications and the user&#39;s endpoint keys. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_domains**
> List[str] apps_list_domains()



Gets the available application domains.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_domains()
        print("The response of DefaultApi->apps_list_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_domains: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list object containing the available application domains. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_endpoints**
> Dict[str, str] apps_list_endpoints(app_id)



Returns the available endpoint deployment regions and URLs.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_list_endpoints(app_id)
        print("The response of DefaultApi->apps_list_endpoints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_endpoints: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

**Dict[str, str]**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of endpoints regions and their corresponding endpoint URL. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_supported_cultures**
> List[AvailableCulture] apps_list_supported_cultures()



Gets the supported application cultures.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.available_culture import AvailableCulture
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_supported_cultures()
        print("The response of DefaultApi->apps_list_supported_cultures:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_supported_cultures: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AvailableCulture]**](AvailableCulture.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list object containing the supported application cultures. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_usage_scenarios**
> List[str] apps_list_usage_scenarios()



Gets the application available usage scenarios.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_usage_scenarios()
        print("The response of DefaultApi->apps_list_usage_scenarios:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_usage_scenarios: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list object containing the available application usage scenarios. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_publish**
> ProductionOrStagingEndpointInfo apps_publish(app_id, application_publish_object)



Publishes a specific version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_publish_object import ApplicationPublishObject
from openapi_client.models.production_or_staging_endpoint_info import ProductionOrStagingEndpointInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    application_publish_object = openapi_client.ApplicationPublishObject() # ApplicationPublishObject | The application publish object. The region is the target region that the application is published to.

    try:
        api_response = api_instance.apps_publish(app_id, application_publish_object)
        print("The response of DefaultApi->apps_publish:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **application_publish_object** | [**ApplicationPublishObject**](ApplicationPublishObject.md)| The application publish object. The region is the target region that the application is published to. | 

### Return type

[**ProductionOrStagingEndpointInfo**](ProductionOrStagingEndpointInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | An object containing the application endpoint URL and its assigned endpoint key. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update**
> OperationStatus apps_update(app_id, application_update_object)



Updates the name or description of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_update_object import ApplicationUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    application_update_object = openapi_client.ApplicationUpdateObject() # ApplicationUpdateObject | A model containing Name and Description of the application.

    try:
        api_response = api_instance.apps_update(app_id, application_update_object)
        print("The response of DefaultApi->apps_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **application_update_object** | [**ApplicationUpdateObject**](ApplicationUpdateObject.md)| A model containing Name and Description of the application. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated application name and description. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update_settings**
> OperationStatus apps_update_settings(app_id, application_setting_update_object)



Updates the application settings.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_setting_update_object import ApplicationSettingUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    application_setting_update_object = openapi_client.ApplicationSettingUpdateObject() # ApplicationSettingUpdateObject | An object containing the new application settings.

    try:
        api_response = api_instance.apps_update_settings(app_id, application_setting_update_object)
        print("The response of DefaultApi->apps_update_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_update_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **application_setting_update_object** | [**ApplicationSettingUpdateObject**](ApplicationSettingUpdateObject.md)| An object containing the new application settings. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated application settings. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **examples_add**
> LabelExampleResponse examples_add(app_id, version_id, example_label_object)



Adds a labeled example to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.example_label_object import ExampleLabelObject
from openapi_client.models.label_example_response import LabelExampleResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    example_label_object = openapi_client.ExampleLabelObject() # ExampleLabelObject | An example label with the expected intent and entities.

    try:
        api_response = api_instance.examples_add(app_id, version_id, example_label_object)
        print("The response of DefaultApi->examples_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->examples_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **example_label_object** | [**ExampleLabelObject**](ExampleLabelObject.md)| An example label with the expected intent and entities. | 

### Return type

[**LabelExampleResponse**](LabelExampleResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created example. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **examples_batch**
> List[BatchLabelExample] examples_batch(app_id, version_id, example_label_object_array)



Adds a batch of labeled examples to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.batch_label_example import BatchLabelExample
from openapi_client.models.example_label_object import ExampleLabelObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    example_label_object_array = [openapi_client.ExampleLabelObject()] # List[ExampleLabelObject] | Array of examples.

    try:
        api_response = api_instance.examples_batch(app_id, version_id, example_label_object_array)
        print("The response of DefaultApi->examples_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->examples_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **example_label_object_array** | [**List[ExampleLabelObject]**](ExampleLabelObject.md)| Array of examples. | 

### Return type

[**List[BatchLabelExample]**](BatchLabelExample.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A string array determining which labels were added successfully. |  -  |
**207** | Indicates that the request was partially successful. The response contains a string array indicating the status of each of the added labels. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **examples_delete**
> OperationStatus examples_delete(app_id, version_id, example_id)



Deletes the labeled example with the specified ID.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    example_id = 56 # int | The example ID.

    try:
        api_response = api_instance.examples_delete(app_id, version_id, example_id)
        print("The response of DefaultApi->examples_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->examples_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **example_id** | **int**| The example ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted example label. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **examples_list**
> List[LabeledUtterance] examples_list(app_id, version_id, skip=skip, take=take)



Returns examples to be reviewed.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.labeled_utterance import LabeledUtterance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.examples_list(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->examples_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->examples_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[LabeledUtterance]**](LabeledUtterance.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of predictions and label pairs for every example in the application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_add_phrase_list**
> int features_add_phrase_list(app_id, version_id, phraselist_create_object)



Creates a new phraselist feature.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.phraselist_create_object import PhraselistCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    phraselist_create_object = openapi_client.PhraselistCreateObject() # PhraselistCreateObject | A Phraselist object containing Name, comma-separated Phrases and the isExchangeable boolean. Default value for isExchangeable is true.

    try:
        api_response = api_instance.features_add_phrase_list(app_id, version_id, phraselist_create_object)
        print("The response of DefaultApi->features_add_phrase_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_add_phrase_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **phraselist_create_object** | [**PhraselistCreateObject**](PhraselistCreateObject.md)| A Phraselist object containing Name, comma-separated Phrases and the isExchangeable boolean. Default value for isExchangeable is true. | 

### Return type

**int**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created feature. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_create_pattern_feature**
> int features_create_pattern_feature(app_id, version_id, pattern_create_object)



[DEPRECATED NOTICE: This operation will soon be removed] Creates a new pattern feature.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_create_object import PatternCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    pattern_create_object = openapi_client.PatternCreateObject() # PatternCreateObject | The Name and Pattern of the feature.

    try:
        api_response = api_instance.features_create_pattern_feature(app_id, version_id, pattern_create_object)
        print("The response of DefaultApi->features_create_pattern_feature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_create_pattern_feature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **pattern_create_object** | [**PatternCreateObject**](PatternCreateObject.md)| The Name and Pattern of the feature. | 

### Return type

**int**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created feature. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_delete_pattern_feature**
> OperationStatus features_delete_pattern_feature(app_id, version_id, pattern_id)



[DEPRECATED NOTICE: This operation will soon be removed] Deletes a pattern feature.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    pattern_id = 56 # int | The pattern feature ID.

    try:
        api_response = api_instance.features_delete_pattern_feature(app_id, version_id, pattern_id)
        print("The response of DefaultApi->features_delete_pattern_feature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_delete_pattern_feature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **pattern_id** | **int**| The pattern feature ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_delete_phrase_list**
> OperationStatus features_delete_phrase_list(app_id, version_id, phraselist_id)



Deletes a phraselist feature.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    phraselist_id = 56 # int | The ID of the feature to be deleted.

    try:
        api_response = api_instance.features_delete_phrase_list(app_id, version_id, phraselist_id)
        print("The response of DefaultApi->features_delete_phrase_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_delete_phrase_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **phraselist_id** | **int**| The ID of the feature to be deleted. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted phraselist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_get_application_version_pattern_features**
> List[PatternFeatureInfo] features_get_application_version_pattern_features(app_id, version_id, skip=skip, take=take)



[DEPRECATED NOTICE: This operation will soon be removed] Gets all the pattern features.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_feature_info import PatternFeatureInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.features_get_application_version_pattern_features(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->features_get_application_version_pattern_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_get_application_version_pattern_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[PatternFeatureInfo]**](PatternFeatureInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of pattern features. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_get_pattern_feature_info**
> PatternFeatureInfo features_get_pattern_feature_info(app_id, version_id, pattern_id)



[DEPRECATED NOTICE: This operation will soon be removed] Gets the specified pattern feature's info.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_feature_info import PatternFeatureInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    pattern_id = 56 # int | The pattern feature ID.

    try:
        api_response = api_instance.features_get_pattern_feature_info(app_id, version_id, pattern_id)
        print("The response of DefaultApi->features_get_pattern_feature_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_get_pattern_feature_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **pattern_id** | **int**| The pattern feature ID. | 

### Return type

[**PatternFeatureInfo**](PatternFeatureInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pattern feature info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_get_phrase_list**
> PhraseListFeatureInfo features_get_phrase_list(app_id, version_id, phraselist_id)



Gets phraselist feature info.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.phrase_list_feature_info import PhraseListFeatureInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    phraselist_id = 56 # int | The ID of the feature to be retrieved.

    try:
        api_response = api_instance.features_get_phrase_list(app_id, version_id, phraselist_id)
        print("The response of DefaultApi->features_get_phrase_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_get_phrase_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **phraselist_id** | **int**| The ID of the feature to be retrieved. | 

### Return type

[**PhraseListFeatureInfo**](PhraseListFeatureInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A phraselist feature info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_list**
> FeaturesResponseObject features_list(app_id, version_id, skip=skip, take=take)



Gets all the extraction features for the specified application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.features_response_object import FeaturesResponseObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.features_list(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->features_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**FeaturesResponseObject**](FeaturesResponseObject.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all phraselist features and a list of all pattern features. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_list_phrase_lists**
> List[PhraseListFeatureInfo] features_list_phrase_lists(app_id, version_id, skip=skip, take=take)



Gets all the phraselist features.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.phrase_list_feature_info import PhraseListFeatureInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.features_list_phrase_lists(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->features_list_phrase_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_list_phrase_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[PhraseListFeatureInfo]**](PhraseListFeatureInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all phraselist features. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_update_pattern_feature**
> OperationStatus features_update_pattern_feature(app_id, version_id, pattern_id, pattern_update_object)



[DEPRECATED NOTICE: This operation will soon be removed] Updates the pattern, the name and the state of the pattern feature.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.pattern_update_object import PatternUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    pattern_id = 56 # int | The pattern feature ID.
    pattern_update_object = openapi_client.PatternUpdateObject() # PatternUpdateObject | The new values for: - Just a boolean called IsActive, in which case the status of the feature will be changed. - Name, Pattern and a boolean called IsActive to update the feature.

    try:
        api_response = api_instance.features_update_pattern_feature(app_id, version_id, pattern_id, pattern_update_object)
        print("The response of DefaultApi->features_update_pattern_feature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_update_pattern_feature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **pattern_id** | **int**| The pattern feature ID. | 
 **pattern_update_object** | [**PatternUpdateObject**](PatternUpdateObject.md)| The new values for: - Just a boolean called IsActive, in which case the status of the feature will be changed. - Name, Pattern and a boolean called IsActive to update the feature. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_update_phrase_list**
> OperationStatus features_update_phrase_list(app_id, version_id, phraselist_id, phraselist_update_object=phraselist_update_object)



Updates the phrases, the state and the name of the phraselist feature.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.phraselist_update_object import PhraselistUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    phraselist_id = 56 # int | The ID of the feature to be updated.
    phraselist_update_object = openapi_client.PhraselistUpdateObject() # PhraselistUpdateObject | The new values for: - Just a boolean called IsActive, in which case the status of the feature will be changed. - Name, Pattern, Mode, and a boolean called IsActive to update the feature. (optional)

    try:
        api_response = api_instance.features_update_phrase_list(app_id, version_id, phraselist_id, phraselist_update_object=phraselist_update_object)
        print("The response of DefaultApi->features_update_phrase_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_update_phrase_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **phraselist_id** | **int**| The ID of the feature to be updated. | 
 **phraselist_update_object** | [**PhraselistUpdateObject**](PhraselistUpdateObject.md)| The new values for: - Just a boolean called IsActive, in which case the status of the feature will be changed. - Name, Pattern, Mode, and a boolean called IsActive to update the feature. | [optional] 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated phraselist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_closed_list**
> str model_add_closed_list(app_id, version_id, closed_list_model_create_object)



Adds a closed list model to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_model_create_object import ClosedListModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    closed_list_model_create_object = openapi_client.ClosedListModelCreateObject() # ClosedListModelCreateObject | A model containing the name and words for the new closed list entity extractor.

    try:
        api_response = api_instance.model_add_closed_list(app_id, version_id, closed_list_model_create_object)
        print("The response of DefaultApi->model_add_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **closed_list_model_create_object** | [**ClosedListModelCreateObject**](ClosedListModelCreateObject.md)| A model containing the name and words for the new closed list entity extractor. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_composite_entity**
> str model_add_composite_entity(app_id, version_id, composite_model_create_object)



Adds a composite entity extractor to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.composite_entity_model import CompositeEntityModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    composite_model_create_object = openapi_client.CompositeEntityModel() # CompositeEntityModel | A model containing the name and children of the new entity extractor.

    try:
        api_response = api_instance.model_add_composite_entity(app_id, version_id, composite_model_create_object)
        print("The response of DefaultApi->model_add_composite_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_composite_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **composite_model_create_object** | [**CompositeEntityModel**](CompositeEntityModel.md)| A model containing the name and children of the new entity extractor. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created Model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_composite_entity_child**
> str model_add_composite_entity_child(app_id, version_id, c_entity_id, composite_child_model_create_object)



Creates a single child in an existing composite entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_add_composite_entity_child_request import ModelAddCompositeEntityChildRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    composite_child_model_create_object = openapi_client.ModelAddCompositeEntityChildRequest() # ModelAddCompositeEntityChildRequest | A model object containing the name of the new composite child model.

    try:
        api_response = api_instance.model_add_composite_entity_child(app_id, version_id, c_entity_id, composite_child_model_create_object)
        print("The response of DefaultApi->model_add_composite_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_composite_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **composite_child_model_create_object** | [**ModelAddCompositeEntityChildRequest**](ModelAddCompositeEntityChildRequest.md)| A model object containing the name of the new composite child model. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_custom_prebuilt_domain**
> List[str] model_add_custom_prebuilt_domain(app_id, version_id, prebuilt_domain_object)



Adds a customizable prebuilt domain along with all of its models to this application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain_create_base_object import PrebuiltDomainCreateBaseObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_domain_object = openapi_client.PrebuiltDomainCreateBaseObject() # PrebuiltDomainCreateBaseObject | A prebuilt domain create object containing the name of the domain.

    try:
        api_response = api_instance.model_add_custom_prebuilt_domain(app_id, version_id, prebuilt_domain_object)
        print("The response of DefaultApi->model_add_custom_prebuilt_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_custom_prebuilt_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_domain_object** | [**PrebuiltDomainCreateBaseObject**](PrebuiltDomainCreateBaseObject.md)| A prebuilt domain create object containing the name of the domain. | 

### Return type

**List[str]**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | An array of the created custom prebuilt domain model Ids. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_custom_prebuilt_entity**
> str model_add_custom_prebuilt_entity(app_id, version_id, prebuilt_domain_model_create_object)



Adds a custom prebuilt entity model to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain_model_create_object import PrebuiltDomainModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_domain_model_create_object = openapi_client.PrebuiltDomainModelCreateObject() # PrebuiltDomainModelCreateObject | A model object containing the name of the custom prebuilt entity and the name of the domain to which this model belongs.

    try:
        api_response = api_instance.model_add_custom_prebuilt_entity(app_id, version_id, prebuilt_domain_model_create_object)
        print("The response of DefaultApi->model_add_custom_prebuilt_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_custom_prebuilt_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_domain_model_create_object** | [**PrebuiltDomainModelCreateObject**](PrebuiltDomainModelCreateObject.md)| A model object containing the name of the custom prebuilt entity and the name of the domain to which this model belongs. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_custom_prebuilt_intent**
> str model_add_custom_prebuilt_intent(app_id, version_id, prebuilt_domain_model_create_object)



Adds a custom prebuilt intent model to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain_model_create_object import PrebuiltDomainModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_domain_model_create_object = openapi_client.PrebuiltDomainModelCreateObject() # PrebuiltDomainModelCreateObject | A model object containing the name of the custom prebuilt intent and the name of the domain to which this model belongs.

    try:
        api_response = api_instance.model_add_custom_prebuilt_intent(app_id, version_id, prebuilt_domain_model_create_object)
        print("The response of DefaultApi->model_add_custom_prebuilt_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_custom_prebuilt_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_domain_model_create_object** | [**PrebuiltDomainModelCreateObject**](PrebuiltDomainModelCreateObject.md)| A model object containing the name of the custom prebuilt intent and the name of the domain to which this model belongs. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_entity**
> str model_add_entity(app_id, version_id, model_create_object)



Adds an entity extractor to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_create_object import ModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    model_create_object = openapi_client.ModelCreateObject() # ModelCreateObject | A model object containing the name for the new entity extractor.

    try:
        api_response = api_instance.model_add_entity(app_id, version_id, model_create_object)
        print("The response of DefaultApi->model_add_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **model_create_object** | [**ModelCreateObject**](ModelCreateObject.md)| A model object containing the name for the new entity extractor. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_hierarchical_entity**
> str model_add_hierarchical_entity(app_id, version_id, hierarchical_model_create_object)



Adds a hierarchical entity extractor to the application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.hierarchical_entity_model import HierarchicalEntityModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    hierarchical_model_create_object = openapi_client.HierarchicalEntityModel() # HierarchicalEntityModel | A model containing the name and children of the new entity extractor.

    try:
        api_response = api_instance.model_add_hierarchical_entity(app_id, version_id, hierarchical_model_create_object)
        print("The response of DefaultApi->model_add_hierarchical_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_hierarchical_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **hierarchical_model_create_object** | [**HierarchicalEntityModel**](HierarchicalEntityModel.md)| A model containing the name and children of the new entity extractor. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_hierarchical_entity_child**
> str model_add_hierarchical_entity_child(app_id, version_id, h_entity_id, hierarchical_child_model_create_object)



Creates a single child in an existing hierarchical entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_add_composite_entity_child_request import ModelAddCompositeEntityChildRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    hierarchical_child_model_create_object = openapi_client.ModelAddCompositeEntityChildRequest() # ModelAddCompositeEntityChildRequest | A model object containing the name of the new hierarchical child model.

    try:
        api_response = api_instance.model_add_hierarchical_entity_child(app_id, version_id, h_entity_id, hierarchical_child_model_create_object)
        print("The response of DefaultApi->model_add_hierarchical_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_hierarchical_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **hierarchical_child_model_create_object** | [**ModelAddCompositeEntityChildRequest**](ModelAddCompositeEntityChildRequest.md)| A model object containing the name of the new hierarchical child model. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_intent**
> str model_add_intent(app_id, version_id, intent_create_object)



Adds an intent classifier to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_create_object import ModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_create_object = openapi_client.ModelCreateObject() # ModelCreateObject | A model object containing the name of the new intent classifier.

    try:
        api_response = api_instance.model_add_intent(app_id, version_id, intent_create_object)
        print("The response of DefaultApi->model_add_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_create_object** | [**ModelCreateObject**](ModelCreateObject.md)| A model object containing the name of the new intent classifier. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_prebuilt**
> List[PrebuiltEntityExtractor] model_add_prebuilt(app_id, version_id, prebuilt_extractor_names)



Adds a list of prebuilt entity extractors to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_entity_extractor import PrebuiltEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_extractor_names = ['prebuilt_extractor_names_example'] # List[str] | An array of prebuilt entity extractor names.

    try:
        api_response = api_instance.model_add_prebuilt(app_id, version_id, prebuilt_extractor_names)
        print("The response of DefaultApi->model_add_prebuilt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_prebuilt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_extractor_names** | [**List[str]**](str.md)| An array of prebuilt entity extractor names. | 

### Return type

[**List[PrebuiltEntityExtractor]**](PrebuiltEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | An array of the created prebuilt extractor infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_sub_list**
> int model_add_sub_list(app_id, version_id, cl_entity_id, word_list_create_object)



Adds a list to an existing closed list.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.word_list_object import WordListObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The closed list entity extractor ID.
    word_list_create_object = openapi_client.WordListObject() # WordListObject | Words list.

    try:
        api_response = api_instance.model_add_sub_list(app_id, version_id, cl_entity_id, word_list_create_object)
        print("The response of DefaultApi->model_add_sub_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_sub_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The closed list entity extractor ID. | 
 **word_list_create_object** | [**WordListObject**](WordListObject.md)| Words list. | 

### Return type

**int**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the newly created list. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_closed_list**
> OperationStatus model_delete_closed_list(app_id, version_id, cl_entity_id)



Deletes a closed list model from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The closed list model ID.

    try:
        api_response = api_instance.model_delete_closed_list(app_id, version_id, cl_entity_id)
        print("The response of DefaultApi->model_delete_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The closed list model ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully delete Closed List from application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_composite_entity**
> OperationStatus model_delete_composite_entity(app_id, version_id, c_entity_id)



Deletes a composite entity extractor from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.

    try:
        api_response = api_instance.model_delete_composite_entity(app_id, version_id, c_entity_id)
        print("The response of DefaultApi->model_delete_composite_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_composite_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted composite entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_composite_entity_child**
> OperationStatus model_delete_composite_entity_child(app_id, version_id, c_entity_id, c_child_id)



Deletes a composite entity extractor child from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    c_child_id = 'c_child_id_example' # str | The hierarchical entity extractor child ID.

    try:
        api_response = api_instance.model_delete_composite_entity_child(app_id, version_id, c_entity_id, c_child_id)
        print("The response of DefaultApi->model_delete_composite_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_composite_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **c_child_id** | **str**| The hierarchical entity extractor child ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_custom_prebuilt_domain**
> OperationStatus model_delete_custom_prebuilt_domain(app_id, version_id, domain_name)



Deletes a prebuilt domain's models from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    domain_name = 'domain_name_example' # str | Domain name.

    try:
        api_response = api_instance.model_delete_custom_prebuilt_domain(app_id, version_id, domain_name)
        print("The response of DefaultApi->model_delete_custom_prebuilt_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_custom_prebuilt_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **domain_name** | **str**| Domain name. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_entity**
> OperationStatus model_delete_entity(app_id, version_id, entity_id)



Deletes an entity extractor from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.

    try:
        api_response = api_instance.model_delete_entity(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_delete_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_hierarchical_entity**
> OperationStatus model_delete_hierarchical_entity(app_id, version_id, h_entity_id)



Deletes a hierarchical entity extractor from the application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.

    try:
        api_response = api_instance.model_delete_hierarchical_entity(app_id, version_id, h_entity_id)
        print("The response of DefaultApi->model_delete_hierarchical_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_hierarchical_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_hierarchical_entity_child**
> OperationStatus model_delete_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id)



Deletes a hierarchical entity extractor child from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    h_child_id = 'h_child_id_example' # str | The hierarchical entity extractor child ID.

    try:
        api_response = api_instance.model_delete_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id)
        print("The response of DefaultApi->model_delete_hierarchical_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_hierarchical_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **h_child_id** | **str**| The hierarchical entity extractor child ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_intent**
> OperationStatus model_delete_intent(app_id, version_id, intent_id, delete_utterances=delete_utterances)



Deletes an intent classifier from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    delete_utterances = False # bool | Also delete the intent's utterances (true). Or move the utterances to the None intent (false - the default value). (optional) (default to False)

    try:
        api_response = api_instance.model_delete_intent(app_id, version_id, intent_id, delete_utterances=delete_utterances)
        print("The response of DefaultApi->model_delete_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **delete_utterances** | **bool**| Also delete the intent&#39;s utterances (true). Or move the utterances to the None intent (false - the default value). | [optional] [default to False]

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_prebuilt**
> OperationStatus model_delete_prebuilt(app_id, version_id, prebuilt_id)



Deletes a prebuilt entity extractor from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_id = 'prebuilt_id_example' # str | The prebuilt entity extractor ID.

    try:
        api_response = api_instance.model_delete_prebuilt(app_id, version_id, prebuilt_id)
        print("The response of DefaultApi->model_delete_prebuilt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_prebuilt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_id** | **str**| The prebuilt entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_sub_list**
> OperationStatus model_delete_sub_list(app_id, version_id, cl_entity_id, sub_list_id)



Deletes a sublist of a specific closed list model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The closed list entity extractor ID.
    sub_list_id = 56 # int | The sublist ID.

    try:
        api_response = api_instance.model_delete_sub_list(app_id, version_id, cl_entity_id, sub_list_id)
        print("The response of DefaultApi->model_delete_sub_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_sub_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The closed list entity extractor ID. | 
 **sub_list_id** | **int**| The sublist ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted sublist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_closed_list**
> ClosedListEntityExtractor model_get_closed_list(app_id, version_id, cl_entity_id)



Gets information of a closed list model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_entity_extractor import ClosedListEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The closed list model ID.

    try:
        api_response = api_instance.model_get_closed_list(app_id, version_id, cl_entity_id)
        print("The response of DefaultApi->model_get_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The closed list model ID. | 

### Return type

[**ClosedListEntityExtractor**](ClosedListEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The closed list model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_composite_entity**
> CompositeEntityExtractor model_get_composite_entity(app_id, version_id, c_entity_id)



Gets information about the composite entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.composite_entity_extractor import CompositeEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.

    try:
        api_response = api_instance.model_get_composite_entity(app_id, version_id, c_entity_id)
        print("The response of DefaultApi->model_get_composite_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_composite_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 

### Return type

[**CompositeEntityExtractor**](CompositeEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The composite entity model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_entity**
> EntityExtractor model_get_entity(app_id, version_id, entity_id)



Gets information about the entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_extractor import EntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.

    try:
        api_response = api_instance.model_get_entity(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_get_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 

### Return type

[**EntityExtractor**](EntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_entity_suggestions**
> List[EntitiesSuggestionExample] model_get_entity_suggestions(app_id, version_id, entity_id, take=take)



Get suggestion examples that would improve the accuracy of the entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entities_suggestion_example import EntitiesSuggestionExample
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The target entity extractor model to enhance.
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_get_entity_suggestions(app_id, version_id, entity_id, take=take)
        print("The response of DefaultApi->model_get_entity_suggestions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_entity_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The target entity extractor model to enhance. | 
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[EntitiesSuggestionExample]**](EntitiesSuggestionExample.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If there&#39;s no trained model, nothing is returned in the response. If there&#39;s a trained model and the active learning algorithm finds any relevant queries, they are returned with the model predictions. If there&#39;s a trained model but the active learning algorithm didn&#39;t find any relevant queries, an empty list is returned in the response. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_hierarchical_entity**
> HierarchicalEntityExtractor model_get_hierarchical_entity(app_id, version_id, h_entity_id)



Gets information about the hierarchical entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.hierarchical_entity_extractor import HierarchicalEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.

    try:
        api_response = api_instance.model_get_hierarchical_entity(app_id, version_id, h_entity_id)
        print("The response of DefaultApi->model_get_hierarchical_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_hierarchical_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 

### Return type

[**HierarchicalEntityExtractor**](HierarchicalEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A hierarchical entity model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_hierarchical_entity_child**
> HierarchicalChildEntity model_get_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id)



Gets information about the hierarchical entity child model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.hierarchical_child_entity import HierarchicalChildEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    h_child_id = 'h_child_id_example' # str | The hierarchical entity extractor child ID.

    try:
        api_response = api_instance.model_get_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id)
        print("The response of DefaultApi->model_get_hierarchical_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_hierarchical_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **h_child_id** | **str**| The hierarchical entity extractor child ID. | 

### Return type

[**HierarchicalChildEntity**](HierarchicalChildEntity.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The hierarchical entity child model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_intent**
> IntentClassifier model_get_intent(app_id, version_id, intent_id)



Gets information about the intent model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.intent_classifier import IntentClassifier
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.

    try:
        api_response = api_instance.model_get_intent(app_id, version_id, intent_id)
        print("The response of DefaultApi->model_get_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 

### Return type

[**IntentClassifier**](IntentClassifier.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An intent model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_intent_suggestions**
> List[IntentsSuggestionExample] model_get_intent_suggestions(app_id, version_id, intent_id, take=take)



Suggests examples that would improve the accuracy of the intent model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.intents_suggestion_example import IntentsSuggestionExample
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_get_intent_suggestions(app_id, version_id, intent_id, take=take)
        print("The response of DefaultApi->model_get_intent_suggestions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_intent_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[IntentsSuggestionExample]**](IntentsSuggestionExample.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If there&#39;s no trained model, nothing is returned in the response. If there&#39;s a trained model and the active learning algorithm finds any relevant queries, they are returned with the model predictions. If there&#39;s a trained model but the active learning algorithm didn&#39;t find any relevant queries, an empty list is returned in the response. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_prebuilt**
> PrebuiltEntityExtractor model_get_prebuilt(app_id, version_id, prebuilt_id)



Gets information about the prebuilt entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_entity_extractor import PrebuiltEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_id = 'prebuilt_id_example' # str | The prebuilt entity extractor ID.

    try:
        api_response = api_instance.model_get_prebuilt(app_id, version_id, prebuilt_id)
        print("The response of DefaultApi->model_get_prebuilt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_prebuilt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_id** | **str**| The prebuilt entity extractor ID. | 

### Return type

[**PrebuiltEntityExtractor**](PrebuiltEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A prebuilt entity models info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_closed_lists**
> List[ClosedListEntityExtractor] model_list_closed_lists(app_id, version_id, skip=skip, take=take)



Gets information about the closedlist models.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_entity_extractor import ClosedListEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_closed_lists(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_closed_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_closed_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[ClosedListEntityExtractor]**](ClosedListEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of closedlist entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_composite_entities**
> List[CompositeEntityExtractor] model_list_composite_entities(app_id, version_id, skip=skip, take=take)



Gets information about the composite entity models.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.composite_entity_extractor import CompositeEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_composite_entities(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_composite_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_composite_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[CompositeEntityExtractor]**](CompositeEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of composite entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_custom_prebuilt_entities**
> List[EntityExtractor] model_list_custom_prebuilt_entities(app_id, version_id)



Gets all custom prebuilt entities information of this application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_extractor import EntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.model_list_custom_prebuilt_entities(app_id, version_id)
        print("The response of DefaultApi->model_list_custom_prebuilt_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_custom_prebuilt_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[EntityExtractor]**](EntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all custom prebuilt entities and their representations. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_custom_prebuilt_intents**
> List[IntentClassifier] model_list_custom_prebuilt_intents(app_id, version_id)



Gets custom prebuilt intents information of this application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.intent_classifier import IntentClassifier
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.model_list_custom_prebuilt_intents(app_id, version_id)
        print("The response of DefaultApi->model_list_custom_prebuilt_intents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_custom_prebuilt_intents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[IntentClassifier]**](IntentClassifier.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all custom prebuilt intents and their representations. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_custom_prebuilt_models**
> List[CustomPrebuiltModel] model_list_custom_prebuilt_models(app_id, version_id)



Gets all custom prebuilt models information of this application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.custom_prebuilt_model import CustomPrebuiltModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.model_list_custom_prebuilt_models(app_id, version_id)
        print("The response of DefaultApi->model_list_custom_prebuilt_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_custom_prebuilt_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[CustomPrebuiltModel]**](CustomPrebuiltModel.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all custom prebuilt models and their representations. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_entities**
> List[EntityExtractor] model_list_entities(app_id, version_id, skip=skip, take=take)



Gets information about the entity models.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_extractor import EntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_entities(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[EntityExtractor]**](EntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_hierarchical_entities**
> List[HierarchicalEntityExtractor] model_list_hierarchical_entities(app_id, version_id, skip=skip, take=take)



Gets information about the hierarchical entity models.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.hierarchical_entity_extractor import HierarchicalEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_hierarchical_entities(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_hierarchical_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_hierarchical_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[HierarchicalEntityExtractor]**](HierarchicalEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of hierarchical entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_intents**
> List[IntentClassifier] model_list_intents(app_id, version_id, skip=skip, take=take)



Gets information about the intent models.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.intent_classifier import IntentClassifier
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_intents(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_intents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_intents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[IntentClassifier]**](IntentClassifier.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of intent model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_models**
> List[ModelInfoResponse] model_list_models(app_id, version_id, skip=skip, take=take)



Gets information about the application version models.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_info_response import ModelInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_models(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[ModelInfoResponse]**](ModelInfoResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of application model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_prebuilt_entities**
> List[AvailablePrebuiltEntityModel] model_list_prebuilt_entities(app_id, version_id)



Gets all the available prebuilt entity extractors for the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.available_prebuilt_entity_model import AvailablePrebuiltEntityModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.model_list_prebuilt_entities(app_id, version_id)
        print("The response of DefaultApi->model_list_prebuilt_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_prebuilt_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[AvailablePrebuiltEntityModel]**](AvailablePrebuiltEntityModel.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the possible prebuilt entity extractors. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_prebuilts**
> List[PrebuiltEntityExtractor] model_list_prebuilts(app_id, version_id, skip=skip, take=take)



Gets information about the prebuilt entity models.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_entity_extractor import PrebuiltEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_prebuilts(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_prebuilts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_prebuilts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[PrebuiltEntityExtractor]**](PrebuiltEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of prebuilt entity models infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_patch_closed_list**
> OperationStatus model_patch_closed_list(app_id, version_id, cl_entity_id, closed_list_model_patch_object)



Adds a batch of sublists to an existing closedlist.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_model_patch_object import ClosedListModelPatchObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The closed list model ID.
    closed_list_model_patch_object = openapi_client.ClosedListModelPatchObject() # ClosedListModelPatchObject | A words list batch.

    try:
        api_response = api_instance.model_patch_closed_list(app_id, version_id, cl_entity_id, closed_list_model_patch_object)
        print("The response of DefaultApi->model_patch_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_patch_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The closed list model ID. | 
 **closed_list_model_patch_object** | [**ClosedListModelPatchObject**](ClosedListModelPatchObject.md)| A words list batch. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added sublists to Closed List. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_closed_list**
> OperationStatus model_update_closed_list(app_id, version_id, cl_entity_id, closed_list_model_update_object)



Updates the closed list model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_model_update_object import ClosedListModelUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The closed list model ID.
    closed_list_model_update_object = openapi_client.ClosedListModelUpdateObject() # ClosedListModelUpdateObject | The new entity name and words list.

    try:
        api_response = api_instance.model_update_closed_list(app_id, version_id, cl_entity_id, closed_list_model_update_object)
        print("The response of DefaultApi->model_update_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The closed list model ID. | 
 **closed_list_model_update_object** | [**ClosedListModelUpdateObject**](ClosedListModelUpdateObject.md)| The new entity name and words list. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated Closed List name and words list. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_composite_entity**
> OperationStatus model_update_composite_entity(app_id, version_id, c_entity_id, composite_model_update_object)



Updates the composite entity extractor.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.composite_entity_model import CompositeEntityModel
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    composite_model_update_object = openapi_client.CompositeEntityModel() # CompositeEntityModel | A model object containing the new entity extractor name and children.

    try:
        api_response = api_instance.model_update_composite_entity(app_id, version_id, c_entity_id, composite_model_update_object)
        print("The response of DefaultApi->model_update_composite_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_composite_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **composite_model_update_object** | [**CompositeEntityModel**](CompositeEntityModel.md)| A model object containing the new entity extractor name and children. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated composite entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_entity**
> OperationStatus model_update_entity(app_id, version_id, entity_id, model_update_object)



Updates the name of an entity extractor.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_update_object import ModelUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.
    model_update_object = openapi_client.ModelUpdateObject() # ModelUpdateObject | A model object containing the new entity extractor name.

    try:
        api_response = api_instance.model_update_entity(app_id, version_id, entity_id, model_update_object)
        print("The response of DefaultApi->model_update_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 
 **model_update_object** | [**ModelUpdateObject**](ModelUpdateObject.md)| A model object containing the new entity extractor name. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated entity extractor name. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_hierarchical_entity**
> OperationStatus model_update_hierarchical_entity(app_id, version_id, h_entity_id, hierarchical_model_update_object)



Updates the name and children of a hierarchical entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.hierarchical_entity_model import HierarchicalEntityModel
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    hierarchical_model_update_object = openapi_client.HierarchicalEntityModel() # HierarchicalEntityModel | Model containing names of the children of the hierarchical entity.

    try:
        api_response = api_instance.model_update_hierarchical_entity(app_id, version_id, h_entity_id, hierarchical_model_update_object)
        print("The response of DefaultApi->model_update_hierarchical_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_hierarchical_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **hierarchical_model_update_object** | [**HierarchicalEntityModel**](HierarchicalEntityModel.md)| Model containing names of the children of the hierarchical entity. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_hierarchical_entity_child**
> OperationStatus model_update_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id, hierarchical_child_model_update_object)



Renames a single child in an existing hierarchical entity model.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_add_composite_entity_child_request import ModelAddCompositeEntityChildRequest
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    h_child_id = 'h_child_id_example' # str | The hierarchical entity extractor child ID.
    hierarchical_child_model_update_object = openapi_client.ModelAddCompositeEntityChildRequest() # ModelAddCompositeEntityChildRequest | Model object containing new name of the hierarchical entity child.

    try:
        api_response = api_instance.model_update_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id, hierarchical_child_model_update_object)
        print("The response of DefaultApi->model_update_hierarchical_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_hierarchical_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **h_child_id** | **str**| The hierarchical entity extractor child ID. | 
 **hierarchical_child_model_update_object** | [**ModelAddCompositeEntityChildRequest**](ModelAddCompositeEntityChildRequest.md)| Model object containing new name of the hierarchical entity child. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated entity child. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_intent**
> OperationStatus model_update_intent(app_id, version_id, intent_id, model_update_object)



Updates the name of an intent classifier.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_update_object import ModelUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    model_update_object = openapi_client.ModelUpdateObject() # ModelUpdateObject | A model object containing the new intent classifier name.

    try:
        api_response = api_instance.model_update_intent(app_id, version_id, intent_id, model_update_object)
        print("The response of DefaultApi->model_update_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **model_update_object** | [**ModelUpdateObject**](ModelUpdateObject.md)| A model object containing the new intent classifier name. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_sub_list**
> OperationStatus model_update_sub_list(app_id, version_id, cl_entity_id, sub_list_id, word_list_base_update_object)



Updates one of the closed list's sublists.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.word_list_base_update_object import WordListBaseUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The closed list entity extractor ID.
    sub_list_id = 56 # int | The sublist ID.
    word_list_base_update_object = openapi_client.WordListBaseUpdateObject() # WordListBaseUpdateObject | A sublist update object containing the new canonical form and the list of words.

    try:
        api_response = api_instance.model_update_sub_list(app_id, version_id, cl_entity_id, sub_list_id, word_list_base_update_object)
        print("The response of DefaultApi->model_update_sub_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_sub_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The closed list entity extractor ID. | 
 **sub_list_id** | **int**| The sublist ID. | 
 **word_list_base_update_object** | [**WordListBaseUpdateObject**](WordListBaseUpdateObject.md)| A sublist update object containing the new canonical form and the list of words. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated sublist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_add**
> OperationStatus permissions_add(app_id, user_to_add)



Adds a user to the allowed list of users to access this LUIS application. Users are added using their email address.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.user_collaborator import UserCollaborator
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    user_to_add = openapi_client.UserCollaborator() # UserCollaborator | A model containing the user's email address.

    try:
        api_response = api_instance.permissions_add(app_id, user_to_add)
        print("The response of DefaultApi->permissions_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **user_to_add** | [**UserCollaborator**](UserCollaborator.md)| A model containing the user&#39;s email address. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_delete**
> OperationStatus permissions_delete(app_id, user_to_delete)



Removes a user from the allowed list of users to access this LUIS application. Users are removed using their email address.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.user_collaborator import UserCollaborator
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    user_to_delete = openapi_client.UserCollaborator() # UserCollaborator | A model containing the user's email address.

    try:
        api_response = api_instance.permissions_delete(app_id, user_to_delete)
        print("The response of DefaultApi->permissions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **user_to_delete** | [**UserCollaborator**](UserCollaborator.md)| A model containing the user&#39;s email address. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_list**
> UserAccessList permissions_list(app_id)



Gets the list of user emails that have permissions to access your application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.user_access_list import UserAccessList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.permissions_list(app_id)
        print("The response of DefaultApi->permissions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

[**UserAccessList**](UserAccessList.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list includes a single owner. All collaborators are listed in the emails array. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_update**
> OperationStatus permissions_update(app_id, collaborators)



Replaces the current users access list with the one sent in the body. If an empty list is sent, all access to other users will be removed.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.collaborators_array import CollaboratorsArray
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    collaborators = openapi_client.CollaboratorsArray() # CollaboratorsArray | A model containing a list of user's email addresses.

    try:
        api_response = api_instance.permissions_update(app_id, collaborators)
        print("The response of DefaultApi->permissions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **collaborators** | [**CollaboratorsArray**](CollaboratorsArray.md)| A model containing a list of user&#39;s email addresses. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **train_get_status**
> List[ModelTrainingInfo] train_get_status(app_id, version_id)



Gets the training status of all models (intents and entities) for the specified LUIS app. You must call the train API to train the LUIS app before you call this API to get training status. \"appID\" specifies the LUIS app ID. \"versionId\" specifies the version number of the LUIS app. For example, \"0.1\".

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_training_info import ModelTrainingInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.train_get_status(app_id, version_id)
        print("The response of DefaultApi->train_get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->train_get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[ModelTrainingInfo]**](ModelTrainingInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, JSON

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response provides an array of training status details for a LUIS app that you submitted for training. Each element in the response array provides training status for a model (intent or entity) in the LUIS app. Note: Training status is not provided for prebuilt entities because they are pretrained. The \&quot;modelId\&quot; property identifies which intent or entity the training status corresponds to. To get the name and type of each model, use the models API which has a request URL in this format: https://westus.api.cognitive.microsoft.com/luis/api/v2.0/apps/{appId}/versions/{versionId}/models The details property for each model can contain the following fields: \&quot;statusId\&quot;: An integer from 0 to 3 that corresponds to the value of the status field. \&quot;status\&quot;: A string with one of the following values: “Success”, “UpToDate”, “InProgress”, “Fail”. If the status is “Fail”, the \&quot;failureReason\&quot; property provides the reason for failure. \&quot;exampleCount\&quot;: The number of examples used for training. In the case of the None intent or prebuilt domain intents and entities, this number includes example provided internally by the system as well as examples you added to your LUIS app. \&quot;failureReason\&quot;: A string that indicates the reason training failed.  The value \&quot;FewLabels\&quot; means that no labeled examples were provided for training. \&quot;trainingDateTime\&quot;: A string indicating the time the model was last trained. The value uses the ISO 8601 format for representing times in UTC (Coordinated Universal Time) with a UTC designator (“Z”), for example: \&quot;2017-08-10T01:08:34Z\&quot;. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **train_train_version**
> EnqueueTrainingResponse train_train_version(app_id, version_id)



Sends a training request for a version of a specified LUIS app. This POST request initiates a request asynchronously. To determine whether the training request is successful, submit a GET request to get training status. Note: The application version is not fully trained unless all the models (intents and entities) are trained successfully or are up to date. To verify training success, get the training status at least once after training is complete.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.enqueue_training_response import EnqueueTrainingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.train_train_version(app_id, version_id)
        print("The response of DefaultApi->train_train_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->train_train_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**EnqueueTrainingResponse**](EnqueueTrainingResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | This response indicates the initial training status. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_clone**
> str versions_clone(app_id, version_id, version_clone_object=version_clone_object)



Creates a new version using the current snapshot of the selected application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.task_update_object import TaskUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    version_clone_object = openapi_client.TaskUpdateObject() # TaskUpdateObject | A model containing the new version ID. (optional)

    try:
        api_response = api_instance.versions_clone(app_id, version_id, version_clone_object=version_clone_object)
        print("The response of DefaultApi->versions_clone:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_clone: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **version_clone_object** | [**TaskUpdateObject**](TaskUpdateObject.md)| A model containing the new version ID. | [optional] 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The version ID of the created task. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_delete**
> OperationStatus versions_delete(app_id, version_id)



Deletes an application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.versions_delete(app_id, version_id)
        print("The response of DefaultApi->versions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_delete_unlabelled_utterance**
> OperationStatus versions_delete_unlabelled_utterance(app_id, version_id, utterance)



Deleted an unlabelled utterance.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    utterance = 'utterance_example' # str | The utterance text to delete.

    try:
        api_response = api_instance.versions_delete_unlabelled_utterance(app_id, version_id, utterance)
        print("The response of DefaultApi->versions_delete_unlabelled_utterance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_delete_unlabelled_utterance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **utterance** | **str**| The utterance text to delete. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_export**
> LuisApp versions_export(app_id, version_id)



Exports a LUIS application to JSON format.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.luis_app import LuisApp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.versions_export(app_id, version_id)
        print("The response of DefaultApi->versions_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_export: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**LuisApp**](LuisApp.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The LUIS application structure in JSON format. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_get**
> VersionInfo versions_get(app_id, version_id)



Gets the version info.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.version_info import VersionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.versions_get(app_id, version_id)
        print("The response of DefaultApi->versions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**VersionInfo**](VersionInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A model containing the version info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_import**
> str versions_import(app_id, luis_app, version_id=version_id)



Imports a new version into a LUIS application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.luis_app import LuisApp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    luis_app = openapi_client.LuisApp() # LuisApp | A LUIS application structure.
    version_id = 'version_id_example' # str | The new versionId to import. If not specified, the versionId will be read from the imported object. (optional)

    try:
        api_response = api_instance.versions_import(app_id, luis_app, version_id=version_id)
        print("The response of DefaultApi->versions_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **luis_app** | [**LuisApp**](LuisApp.md)| A LUIS application structure. | 
 **version_id** | **str**| The new versionId to import. If not specified, the versionId will be read from the imported object. | [optional] 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created application version. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_list**
> List[VersionInfo] versions_list(app_id, skip=skip, take=take)



Gets the application versions info.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.version_info import VersionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.versions_list(app_id, skip=skip, take=take)
        print("The response of DefaultApi->versions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[VersionInfo]**](VersionInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all versions of the application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_update**
> OperationStatus versions_update(app_id, version_id, version_update_object)



Updates the name or description of the application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.task_update_object import TaskUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/api/v2.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/api/v2.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    version_update_object = openapi_client.TaskUpdateObject() # TaskUpdateObject | A model containing Name and Description of the application.

    try:
        api_response = api_instance.versions_update(app_id, version_id, version_update_object)
        print("The response of DefaultApi->versions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **version_update_object** | [**TaskUpdateObject**](TaskUpdateObject.md)| A model containing Name and Description of the application. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

