# openapi_client.TranslationKeysApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**translation_keys_create_translation_key**](TranslationKeysApi.md#translation_keys_create_translation_key) | **POST** /api/v2/TranslationKeys | Create a translationKey object.
[**translation_keys_get**](TranslationKeysApi.md#translation_keys_get) | **GET** /api/v2/TranslationKeys | Get a paged response of TranslationKeys.
[**translation_keys_get_translation_key**](TranslationKeysApi.md#translation_keys_get_translation_key) | **GET** /api/v2/TranslationKeys/{ID} | Get TranslationKey by ID
[**translation_keys_update_translation_key**](TranslationKeysApi.md#translation_keys_update_translation_key) | **PUT** /api/v2/TranslationKeys/{ID} | Update the StringID of the translationKey object.


# **translation_keys_create_translation_key**
> int translation_keys_create_translation_key(oas_support_shared_models_translation_key)

Create a translationKey object.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.oas_support_shared_models_translation_key import OASSupportSharedModelsTranslationKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationKeysApi(api_client)
    oas_support_shared_models_translation_key = openapi_client.OASSupportSharedModelsTranslationKey() # OASSupportSharedModelsTranslationKey | 

    try:
        # Create a translationKey object.
        api_response = api_instance.translation_keys_create_translation_key(oas_support_shared_models_translation_key)
        print("The response of TranslationKeysApi->translation_keys_create_translation_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationKeysApi->translation_keys_create_translation_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oas_support_shared_models_translation_key** | [**OASSupportSharedModelsTranslationKey**](OASSupportSharedModelsTranslationKey.md)|  | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translation_keys_get**
> APIIPagedResponseOASSupportSharedModelsTranslationKey translation_keys_get(limit=limit, offset=offset, key_names=key_names)

Get a paged response of TranslationKeys.



### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_oas_support_shared_models_translation_key import APIIPagedResponseOASSupportSharedModelsTranslationKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationKeysApi(api_client)
    limit = 56 # int |  (optional)
    offset = 56 # int |  (optional)
    key_names = 'key_names_example' # str | Can filter by keyNames, a comma deliminated list. (optional)

    try:
        # Get a paged response of TranslationKeys.
        api_response = api_instance.translation_keys_get(limit=limit, offset=offset, key_names=key_names)
        print("The response of TranslationKeysApi->translation_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationKeysApi->translation_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] 
 **offset** | **int**|  | [optional] 
 **key_names** | **str**| Can filter by keyNames, a comma deliminated list. | [optional] 

### Return type

[**APIIPagedResponseOASSupportSharedModelsTranslationKey**](APIIPagedResponseOASSupportSharedModelsTranslationKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translation_keys_get_translation_key**
> OASSupportSharedModelsTranslationKey translation_keys_get_translation_key(id)

Get TranslationKey by ID

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.oas_support_shared_models_translation_key import OASSupportSharedModelsTranslationKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationKeysApi(api_client)
    id = 56 # int | 

    try:
        # Get TranslationKey by ID
        api_response = api_instance.translation_keys_get_translation_key(id)
        print("The response of TranslationKeysApi->translation_keys_get_translation_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranslationKeysApi->translation_keys_get_translation_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**OASSupportSharedModelsTranslationKey**](OASSupportSharedModelsTranslationKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translation_keys_update_translation_key**
> translation_keys_update_translation_key(id, oas_support_shared_models_translation_key)

Update the StringID of the translationKey object.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.oas_support_shared_models_translation_key import OASSupportSharedModelsTranslationKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranslationKeysApi(api_client)
    id = 56 # int | 
    oas_support_shared_models_translation_key = openapi_client.OASSupportSharedModelsTranslationKey() # OASSupportSharedModelsTranslationKey | 

    try:
        # Update the StringID of the translationKey object.
        api_instance.translation_keys_update_translation_key(id, oas_support_shared_models_translation_key)
    except Exception as e:
        print("Exception when calling TranslationKeysApi->translation_keys_update_translation_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **oas_support_shared_models_translation_key** | [**OASSupportSharedModelsTranslationKey**](OASSupportSharedModelsTranslationKey.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

