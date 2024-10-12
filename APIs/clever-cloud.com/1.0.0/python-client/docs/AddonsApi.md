# openapi_client.AddonsApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_organisations_id_addons_addon_id_0**](AddonsApi.md#delete_organisations_id_addons_addon_id_0) | **DELETE** /organisations/{id}/addons/{addonId} | 
[**delete_organisations_id_addons_addon_id_tags_tag_0**](AddonsApi.md#delete_organisations_id_addons_addon_id_tags_tag_0) | **DELETE** /organisations/{id}/addons/{addonId}/tags/{tag} | 
[**delete_organisations_id_applications_app_id_addons_addon_id_0**](AddonsApi.md#delete_organisations_id_applications_app_id_addons_addon_id_0) | **DELETE** /organisations/{id}/applications/{appId}/addons/{addonId} | 
[**delete_self_addons_addon_id_0**](AddonsApi.md#delete_self_addons_addon_id_0) | **DELETE** /self/addons/{addonId} | 
[**delete_self_addons_addon_id_tags_tag_0**](AddonsApi.md#delete_self_addons_addon_id_tags_tag_0) | **DELETE** /self/addons/{addonId}/tags/{tag} | 
[**delete_self_applications_app_id_addons_addon_id_0**](AddonsApi.md#delete_self_applications_app_id_addons_addon_id_0) | **DELETE** /self/applications/{appId}/addons/{addonId} | 
[**get_config_provider_0**](AddonsApi.md#get_config_provider_0) | **GET** /v4/addon-providers/config-provider/addons/{configurationProviderId} | Get Addon provider configuration
[**get_config_provider_env_0**](AddonsApi.md#get_config_provider_env_0) | **GET** /v4/addon-providers/config-provider/addons/{configurationProviderId}/env | Get provider&#39;s addon environment
[**get_matomo_0**](AddonsApi.md#get_matomo_0) | **GET** /v4/addon-providers/addon-matomo/addons/{matomoId} | Get Matomo addon
[**get_organisations_id_addons_0**](AddonsApi.md#get_organisations_id_addons_0) | **GET** /organisations/{id}/addons | 
[**get_organisations_id_addons_addon_id_0**](AddonsApi.md#get_organisations_id_addons_addon_id_0) | **GET** /organisations/{id}/addons/{addonId} | 
[**get_organisations_id_addons_addon_id_applications_0**](AddonsApi.md#get_organisations_id_addons_addon_id_applications_0) | **GET** /organisations/{id}/addons/{addonId}/applications | 
[**get_organisations_id_addons_addon_id_env_0**](AddonsApi.md#get_organisations_id_addons_addon_id_env_0) | **GET** /organisations/{id}/addons/{addonId}/env | 
[**get_organisations_id_addons_addon_id_tags_0**](AddonsApi.md#get_organisations_id_addons_addon_id_tags_0) | **GET** /organisations/{id}/addons/{addonId}/tags | 
[**get_organisations_id_applications_app_id_addons_0**](AddonsApi.md#get_organisations_id_applications_app_id_addons_0) | **GET** /organisations/{id}/applications/{appId}/addons | 
[**get_organisations_id_applications_app_id_addons_env_0**](AddonsApi.md#get_organisations_id_applications_app_id_addons_env_0) | **GET** /organisations/{id}/applications/{appId}/addons/env | 
[**get_self_addons_0**](AddonsApi.md#get_self_addons_0) | **GET** /self/addons | Addon
[**get_self_addons_addon_id_0**](AddonsApi.md#get_self_addons_addon_id_0) | **GET** /self/addons/{addonId} | Specific addon
[**get_self_addons_addon_id_applications_0**](AddonsApi.md#get_self_addons_addon_id_applications_0) | **GET** /self/addons/{addonId}/applications | 
[**get_self_addons_addon_id_env_0**](AddonsApi.md#get_self_addons_addon_id_env_0) | **GET** /self/addons/{addonId}/env | 
[**get_self_addons_addon_id_sso_0**](AddonsApi.md#get_self_addons_addon_id_sso_0) | **GET** /self/addons/{addonId}/sso | 
[**get_self_addons_addon_id_tags_0**](AddonsApi.md#get_self_addons_addon_id_tags_0) | **GET** /self/addons/{addonId}/tags | 
[**get_self_applications_app_id_addons_0**](AddonsApi.md#get_self_applications_app_id_addons_0) | **GET** /self/applications/{appId}/addons | 
[**get_self_applications_app_id_addons_env_0**](AddonsApi.md#get_self_applications_app_id_addons_env_0) | **GET** /self/applications/{appId}/addons/env | 
[**organisations_id_addons_addon_id_instances_get_0**](AddonsApi.md#organisations_id_addons_addon_id_instances_get_0) | **GET** /organisations/{id}/addons/{addonId}/instances | List instances for this add-on.
[**organisations_id_addons_addon_id_instances_instance_id_get_0**](AddonsApi.md#organisations_id_addons_addon_id_instances_instance_id_get_0) | **GET** /organisations/{id}/addons/{addonId}/instances/{instanceId} | Get a specific instance for {addonId}
[**organisations_id_addons_addon_id_migrations_get_0**](AddonsApi.md#organisations_id_addons_addon_id_migrations_get_0) | **GET** /organisations/{id}/addons/{addonId}/migrations | Get past migrations from add-on.
[**organisations_id_addons_addon_id_migrations_migration_id_get_0**](AddonsApi.md#organisations_id_addons_addon_id_migrations_migration_id_get_0) | **GET** /organisations/{id}/addons/{addonId}/migrations/{migrationId} | Get a given migration
[**organisations_id_addons_addon_id_migrations_post_0**](AddonsApi.md#organisations_id_addons_addon_id_migrations_post_0) | **POST** /organisations/{id}/addons/{addonId}/migrations | Start a new add-on migration
[**organisations_id_addons_addon_id_sso_get_0**](AddonsApi.md#organisations_id_addons_addon_id_sso_get_0) | **GET** /organisations/{id}/addons/{addonId}/sso | 
[**organisations_id_addons_preorders_post_0**](AddonsApi.md#organisations_id_addons_preorders_post_0) | **POST** /organisations/{id}/addons/preorders | 
[**post_organisations_id_addons_0**](AddonsApi.md#post_organisations_id_addons_0) | **POST** /organisations/{id}/addons | 
[**post_organisations_id_applications_app_id_addons_0**](AddonsApi.md#post_organisations_id_applications_app_id_addons_0) | **POST** /organisations/{id}/applications/{appId}/addons | 
[**post_self_addons_0**](AddonsApi.md#post_self_addons_0) | **POST** /self/addons | 
[**post_self_applications_app_id_addons_0**](AddonsApi.md#post_self_applications_app_id_addons_0) | **POST** /self/applications/{appId}/addons | 
[**put_organisations_id_addons_addon_id_0**](AddonsApi.md#put_organisations_id_addons_addon_id_0) | **PUT** /organisations/{id}/addons/{addonId} | 
[**put_organisations_id_addons_addon_id_tags_tag_0**](AddonsApi.md#put_organisations_id_addons_addon_id_tags_tag_0) | **PUT** /organisations/{id}/addons/{addonId}/tags/{tag} | 
[**put_self_addons_addon_id_0**](AddonsApi.md#put_self_addons_addon_id_0) | **PUT** /self/addons/{addonId} | 
[**put_self_addons_addon_id_plan_0**](AddonsApi.md#put_self_addons_addon_id_plan_0) | **PUT** /self/addons/{addonId}/plan | 
[**put_self_addons_addon_id_tags_tag_0**](AddonsApi.md#put_self_addons_addon_id_tags_tag_0) | **PUT** /self/addons/{addonId}/tags/{tag} | 
[**self_addons_preorders_post_0**](AddonsApi.md#self_addons_preorders_post_0) | **POST** /self/addons/preorders | 
[**update_config_provider_env_0**](AddonsApi.md#update_config_provider_env_0) | **PUT** /v4/addon-providers/config-provider/addons/{configurationProviderId}/env | Update provider&#39;s addon environment
[**vendor_addons_post_0**](AddonsApi.md#vendor_addons_post_0) | **POST** /vendor//addons | 


# **delete_organisations_id_addons_addon_id_0**
> delete_organisations_id_addons_addon_id_0(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addons_addon_id_0(id, addon_id)
    except Exception as e:
        print("Exception when calling AddonsApi->delete_organisations_id_addons_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

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
**200** | deprovisionAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_addons_addon_id_tags_tag_0**
> delete_organisations_id_addons_addon_id_tags_tag_0(id, tag, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addons_addon_id_tags_tag_0(id, tag, addon_id)
    except Exception as e:
        print("Exception when calling AddonsApi->delete_organisations_id_addons_addon_id_tags_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **tag** | **str**|  | 
 **addon_id** | **str**|  | 

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
**200** | deleteAddonTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_addons_addon_id_0**
> delete_organisations_id_applications_app_id_addons_addon_id_0(id, app_id, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_addons_addon_id_0(id, app_id, addon_id)
    except Exception as e:
        print("Exception when calling AddonsApi->delete_organisations_id_applications_app_id_addons_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **addon_id** | **str**|  | 

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
**200** | unlinkAddonFromApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_addons_addon_id_0**
> delete_self_addons_addon_id_0(addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_self_addons_addon_id_0(addon_id)
    except Exception as e:
        print("Exception when calling AddonsApi->delete_self_addons_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

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
**200** | deprovisionAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_addons_addon_id_tags_tag_0**
> delete_self_addons_addon_id_tags_tag_0(tag, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_self_addons_addon_id_tags_tag_0(tag, addon_id)
    except Exception as e:
        print("Exception when calling AddonsApi->delete_self_addons_addon_id_tags_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**|  | 
 **addon_id** | **str**|  | 

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
**200** | deleteAddonTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_addons_addon_id_0**
> delete_self_applications_app_id_addons_addon_id_0(app_id, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    app_id = 'app_id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_addons_addon_id_0(app_id, addon_id)
    except Exception as e:
        print("Exception when calling AddonsApi->delete_self_applications_app_id_addons_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **addon_id** | **str**|  | 

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
**200** | unlinkAddonFromApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_config_provider_0**
> object get_config_provider_0(configuration_provider_id, body=body)

Get Addon provider configuration

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    configuration_provider_id = 'configuration_provider_id_example' # str | Automatically added
    body = 'body_example' # str |  (optional)

    try:
        # Get Addon provider configuration
        api_response = api_instance.get_config_provider_0(configuration_provider_id, body=body)
        print("The response of AddonsApi->get_config_provider_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_config_provider_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuration_provider_id** | **str**| Automatically added | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | requested config provider object |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_config_provider_env_0**
> List[object] get_config_provider_env_0(configuration_provider_id, body=body)

Get provider's addon environment

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    configuration_provider_id = 'configuration_provider_id_example' # str | Automatically added
    body = 'body_example' # str |  (optional)

    try:
        # Get provider's addon environment
        api_response = api_instance.get_config_provider_env_0(configuration_provider_id, body=body)
        print("The response of AddonsApi->get_config_provider_env_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_config_provider_env_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuration_provider_id** | **str**| Automatically added | 
 **body** | **str**|  | [optional] 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | config provider environment variables |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_matomo_0**
> object get_matomo_0(matomo_id, body=body)

Get Matomo addon

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    matomo_id = 'matomo_id_example' # str | Automatically added
    body = 'body_example' # str |  (optional)

    try:
        # Get Matomo addon
        api_response = api_instance.get_matomo_0(matomo_id, body=body)
        print("The response of AddonsApi->get_matomo_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_matomo_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matomo_id** | **str**| Automatically added | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_0**
> List[Addon] get_organisations_id_addons_0(id)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_0(id)
        print("The response of AddonsApi->get_organisations_id_addons_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_organisations_id_addons_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddons |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id_0**
> Addon get_organisations_id_addons_addon_id_0(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_0(id, addon_id)
        print("The response of AddonsApi->get_organisations_id_addons_addon_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_organisations_id_addons_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**Addon**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id_applications_0**
> List[Application] get_organisations_id_addons_addon_id_applications_0(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_applications_0(id, addon_id)
        print("The response of AddonsApi->get_organisations_id_addons_addon_id_applications_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_organisations_id_addons_addon_id_applications_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationsLinkedToAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id_env_0**
> List[ListEnv] get_organisations_id_addons_addon_id_env_0(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.models.list_env import ListEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_env_0(id, addon_id)
        print("The response of AddonsApi->get_organisations_id_addons_addon_id_env_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_organisations_id_addons_addon_id_env_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**List[ListEnv]**](ListEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id_tags_0**
> List[str] get_organisations_id_addons_addon_id_tags_0(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_tags_0(id, addon_id)
        print("The response of AddonsApi->get_organisations_id_addons_addon_id_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_organisations_id_addons_addon_id_tags_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonTags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_addons_0**
> List[Addon] get_organisations_id_applications_app_id_addons_0(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_addons_0(id, app_id)
        print("The response of AddonsApi->get_organisations_id_applications_app_id_addons_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_organisations_id_applications_app_id_addons_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**List[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonsLinkedToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_addons_env_0**
> List[Env] get_organisations_id_applications_app_id_addons_env_0(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.env import Env
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_addons_env_0(id, app_id)
        print("The response of AddonsApi->get_organisations_id_applications_app_id_addons_env_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_organisations_id_applications_app_id_addons_env_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**List[Env]**](Env.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getEnvOfAddonsLinkedToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_0**
> List[Addon] get_self_addons_0()

Addon

Get all the addons

### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)

    try:
        # Addon
        api_response = api_instance.get_self_addons_0()
        print("The response of AddonsApi->get_self_addons_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_self_addons_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddons |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_0**
> Addon get_self_addons_addon_id_0(addon_id)

Specific addon

Get a specific addon

### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        # Specific addon
        api_response = api_instance.get_self_addons_addon_id_0(addon_id)
        print("The response of AddonsApi->get_self_addons_addon_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_self_addons_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

[**Addon**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_applications_0**
> List[Application] get_self_addons_addon_id_applications_0(addon_id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_self_addons_addon_id_applications_0(addon_id)
        print("The response of AddonsApi->get_self_addons_addon_id_applications_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_self_addons_addon_id_applications_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationsLinkedToAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_env_0**
> List[ListEnv] get_self_addons_addon_id_env_0(addon_id)



### Example


```python
import openapi_client
from openapi_client.models.list_env import ListEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_self_addons_addon_id_env_0(addon_id)
        print("The response of AddonsApi->get_self_addons_addon_id_env_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_self_addons_addon_id_env_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

[**List[ListEnv]**](ListEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_sso_0**
> Sso get_self_addons_addon_id_sso_0(addon_id)



### Example


```python
import openapi_client
from openapi_client.models.sso import Sso
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_self_addons_addon_id_sso_0(addon_id)
        print("The response of AddonsApi->get_self_addons_addon_id_sso_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_self_addons_addon_id_sso_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

[**Sso**](Sso.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getSSOData |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_tags_0**
> List[str] get_self_addons_addon_id_tags_0(addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_self_addons_addon_id_tags_0(addon_id)
        print("The response of AddonsApi->get_self_addons_addon_id_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_self_addons_addon_id_tags_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonTags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_addons_0**
> List[Addon] get_self_applications_app_id_addons_0(app_id)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_addons_0(app_id)
        print("The response of AddonsApi->get_self_applications_app_id_addons_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_self_applications_app_id_addons_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonsLinkedToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_addons_env_0**
> List[Env] get_self_applications_app_id_addons_env_0(app_id)



### Example


```python
import openapi_client
from openapi_client.models.env import Env
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_addons_env_0(app_id)
        print("The response of AddonsApi->get_self_applications_app_id_addons_env_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->get_self_applications_app_id_addons_env_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[Env]**](Env.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getEnvOfAddonsLinkedToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_instances_get_0**
> List[SupernovaInstanceView] organisations_id_addons_addon_id_instances_get_0(id, addon_id, deployment_id=deployment_id, with_deleted=with_deleted)

List instances for this add-on.

### Example


```python
import openapi_client
from openapi_client.models.supernova_instance_view import SupernovaInstanceView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    deployment_id = 'deployment_id_example' # str |  (optional)
    with_deleted = 'with_deleted_example' # str |  (optional)

    try:
        # List instances for this add-on.
        api_response = api_instance.organisations_id_addons_addon_id_instances_get_0(id, addon_id, deployment_id=deployment_id, with_deleted=with_deleted)
        print("The response of AddonsApi->organisations_id_addons_addon_id_instances_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->organisations_id_addons_addon_id_instances_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 
 **deployment_id** | **str**|  | [optional] 
 **with_deleted** | **str**|  | [optional] 

### Return type

[**List[SupernovaInstanceView]**](SupernovaInstanceView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The instance list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_instances_instance_id_get_0**
> SupernovaInstanceView organisations_id_addons_addon_id_instances_instance_id_get_0(instance_id, id, addon_id)

Get a specific instance for {addonId}

### Example


```python
import openapi_client
from openapi_client.models.supernova_instance_view import SupernovaInstanceView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    instance_id = 'instance_id_example' # str | 
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get a specific instance for {addonId}
        api_response = api_instance.organisations_id_addons_addon_id_instances_instance_id_get_0(instance_id, id, addon_id)
        print("The response of AddonsApi->organisations_id_addons_addon_id_instances_instance_id_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->organisations_id_addons_addon_id_instances_instance_id_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**|  | 
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**SupernovaInstanceView**](SupernovaInstanceView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_migrations_get_0**
> List[AddonMigration] organisations_id_addons_addon_id_migrations_get_0(id, addon_id)

Get past migrations from add-on.

### Example


```python
import openapi_client
from openapi_client.models.addon_migration import AddonMigration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get past migrations from add-on.
        api_response = api_instance.organisations_id_addons_addon_id_migrations_get_0(id, addon_id)
        print("The response of AddonsApi->organisations_id_addons_addon_id_migrations_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->organisations_id_addons_addon_id_migrations_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**List[AddonMigration]**](AddonMigration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of migrations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_migrations_migration_id_get_0**
> AddonMigration organisations_id_addons_addon_id_migrations_migration_id_get_0(migration_id, id, addon_id)

Get a given migration

### Example


```python
import openapi_client
from openapi_client.models.addon_migration import AddonMigration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    migration_id = 'migration_id_example' # str | 
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get a given migration
        api_response = api_instance.organisations_id_addons_addon_id_migrations_migration_id_get_0(migration_id, id, addon_id)
        print("The response of AddonsApi->organisations_id_addons_addon_id_migrations_migration_id_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->organisations_id_addons_addon_id_migrations_migration_id_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migration_id** | **str**|  | 
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**AddonMigration**](AddonMigration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The migration object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_migrations_post_0**
> object organisations_id_addons_addon_id_migrations_post_0(id, addon_id, organisations_id_addons_addon_id_migrations_post_request)

Start a new add-on migration

### Example


```python
import openapi_client
from openapi_client.models.organisations_id_addons_addon_id_migrations_post_request import OrganisationsIdAddonsAddonIdMigrationsPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    organisations_id_addons_addon_id_migrations_post_request = openapi_client.OrganisationsIdAddonsAddonIdMigrationsPostRequest() # OrganisationsIdAddonsAddonIdMigrationsPostRequest | 

    try:
        # Start a new add-on migration
        api_response = api_instance.organisations_id_addons_addon_id_migrations_post_0(id, addon_id, organisations_id_addons_addon_id_migrations_post_request)
        print("The response of AddonsApi->organisations_id_addons_addon_id_migrations_post_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->organisations_id_addons_addon_id_migrations_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 
 **organisations_id_addons_addon_id_migrations_post_request** | [**OrganisationsIdAddonsAddonIdMigrationsPostRequest**](OrganisationsIdAddonsAddonIdMigrationsPostRequest.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Migration has started. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_sso_get_0**
> Sso organisations_id_addons_addon_id_sso_get_0(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.models.sso import Sso
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.organisations_id_addons_addon_id_sso_get_0(id, addon_id)
        print("The response of AddonsApi->organisations_id_addons_addon_id_sso_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->organisations_id_addons_addon_id_sso_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**Sso**](Sso.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getSSOData |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_preorders_post_0**
> organisations_id_addons_preorders_post_0(id, wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.organisations_id_addons_preorders_post_0(id, wannabe_addon)
    except Exception as e:
        print("Exception when calling AddonsApi->organisations_id_addons_preorders_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_addons_0**
> Addon post_organisations_id_addons_0(id, wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_response = api_instance.post_organisations_id_addons_0(id, wannabe_addon)
        print("The response of AddonsApi->post_organisations_id_addons_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->post_organisations_id_addons_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

[**Addon**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | provisionAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_applications_app_id_addons_0**
> post_organisations_id_applications_app_id_addons_0(id, app_id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.post_organisations_id_applications_app_id_addons_0(id, app_id, body)
    except Exception as e:
        print("Exception when calling AddonsApi->post_organisations_id_applications_app_id_addons_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | linkAddonToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_addons_0**
> post_self_addons_0(wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.post_self_addons_0(wannabe_addon)
    except Exception as e:
        print("Exception when calling AddonsApi->post_self_addons_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | provisionAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_applications_app_id_addons_0**
> post_self_applications_app_id_addons_0(app_id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    app_id = 'app_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.post_self_applications_app_id_addons_0(app_id, body)
    except Exception as e:
        print("Exception when calling AddonsApi->post_self_applications_app_id_addons_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | linkAddonToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_addons_addon_id_0**
> Addon put_organisations_id_addons_addon_id_0(id, addon_id, wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_response = api_instance.put_organisations_id_addons_addon_id_0(id, addon_id, wannabe_addon)
        print("The response of AddonsApi->put_organisations_id_addons_addon_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->put_organisations_id_addons_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

[**Addon**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update addon information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_addons_addon_id_tags_tag_0**
> put_organisations_id_addons_addon_id_tags_tag_0(id, tag, addon_id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    id = 'id_example' # str | 
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_organisations_id_addons_addon_id_tags_tag_0(id, tag, addon_id, body)
    except Exception as e:
        print("Exception when calling AddonsApi->put_organisations_id_addons_addon_id_tags_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **tag** | **str**|  | 
 **addon_id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addAddonTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_addons_addon_id_0**
> put_self_addons_addon_id_0(addon_id, wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    addon_id = 'addon_id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.put_self_addons_addon_id_0(addon_id, wannabe_addon)
    except Exception as e:
        print("Exception when calling AddonsApi->put_self_addons_addon_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update addon informations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_addons_addon_id_plan_0**
> put_self_addons_addon_id_plan_0(addon_id, wannabe_plan)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_plan import WannabePlan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    addon_id = 'addon_id_example' # str | 
    wannabe_plan = openapi_client.WannabePlan() # WannabePlan | 

    try:
        api_instance.put_self_addons_addon_id_plan_0(addon_id, wannabe_plan)
    except Exception as e:
        print("Exception when calling AddonsApi->put_self_addons_addon_id_plan_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 
 **wannabe_plan** | [**WannabePlan**](WannabePlan.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update plan of an add-on. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_addons_addon_id_tags_tag_0**
> put_self_addons_addon_id_tags_tag_0(tag, addon_id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_self_addons_addon_id_tags_tag_0(tag, addon_id, body)
    except Exception as e:
        print("Exception when calling AddonsApi->put_self_addons_addon_id_tags_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**|  | 
 **addon_id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addAddonTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_addons_preorders_post_0**
> self_addons_preorders_post_0(wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.self_addons_preorders_post_0(wannabe_addon)
    except Exception as e:
        print("Exception when calling AddonsApi->self_addons_preorders_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_config_provider_env_0**
> List[object] update_config_provider_env_0(configuration_provider_id, request_body)

Update provider's addon environment

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)
    configuration_provider_id = 'configuration_provider_id_example' # str | Automatically added
    request_body = None # List[object] | 

    try:
        # Update provider's addon environment
        api_response = api_instance.update_config_provider_env_0(configuration_provider_id, request_body)
        print("The response of AddonsApi->update_config_provider_env_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonsApi->update_config_provider_env_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuration_provider_id** | **str**| Automatically added | 
 **request_body** | [**List[object]**](object.md)|  | 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | updated config providers environment variables |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vendor_addons_post_0**
> vendor_addons_post_0()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonsApi(api_client)

    try:
        api_instance.vendor_addons_post_0()
    except Exception as e:
        print("Exception when calling AddonsApi->vendor_addons_post_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

