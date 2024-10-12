# openapi_client.WirelessApi

All URIs are relative to *https://demo.netbox.dev/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wireless_wireless_lan_groups_bulk_delete**](WirelessApi.md#wireless_wireless_lan_groups_bulk_delete) | **DELETE** /wireless/wireless-lan-groups/ | 
[**wireless_wireless_lan_groups_bulk_partial_update**](WirelessApi.md#wireless_wireless_lan_groups_bulk_partial_update) | **PATCH** /wireless/wireless-lan-groups/ | 
[**wireless_wireless_lan_groups_bulk_update**](WirelessApi.md#wireless_wireless_lan_groups_bulk_update) | **PUT** /wireless/wireless-lan-groups/ | 
[**wireless_wireless_lan_groups_create**](WirelessApi.md#wireless_wireless_lan_groups_create) | **POST** /wireless/wireless-lan-groups/ | 
[**wireless_wireless_lan_groups_delete**](WirelessApi.md#wireless_wireless_lan_groups_delete) | **DELETE** /wireless/wireless-lan-groups/{id}/ | 
[**wireless_wireless_lan_groups_list**](WirelessApi.md#wireless_wireless_lan_groups_list) | **GET** /wireless/wireless-lan-groups/ | 
[**wireless_wireless_lan_groups_partial_update**](WirelessApi.md#wireless_wireless_lan_groups_partial_update) | **PATCH** /wireless/wireless-lan-groups/{id}/ | 
[**wireless_wireless_lan_groups_read**](WirelessApi.md#wireless_wireless_lan_groups_read) | **GET** /wireless/wireless-lan-groups/{id}/ | 
[**wireless_wireless_lan_groups_update**](WirelessApi.md#wireless_wireless_lan_groups_update) | **PUT** /wireless/wireless-lan-groups/{id}/ | 
[**wireless_wireless_lans_bulk_delete**](WirelessApi.md#wireless_wireless_lans_bulk_delete) | **DELETE** /wireless/wireless-lans/ | 
[**wireless_wireless_lans_bulk_partial_update**](WirelessApi.md#wireless_wireless_lans_bulk_partial_update) | **PATCH** /wireless/wireless-lans/ | 
[**wireless_wireless_lans_bulk_update**](WirelessApi.md#wireless_wireless_lans_bulk_update) | **PUT** /wireless/wireless-lans/ | 
[**wireless_wireless_lans_create**](WirelessApi.md#wireless_wireless_lans_create) | **POST** /wireless/wireless-lans/ | 
[**wireless_wireless_lans_delete**](WirelessApi.md#wireless_wireless_lans_delete) | **DELETE** /wireless/wireless-lans/{id}/ | 
[**wireless_wireless_lans_list**](WirelessApi.md#wireless_wireless_lans_list) | **GET** /wireless/wireless-lans/ | 
[**wireless_wireless_lans_partial_update**](WirelessApi.md#wireless_wireless_lans_partial_update) | **PATCH** /wireless/wireless-lans/{id}/ | 
[**wireless_wireless_lans_read**](WirelessApi.md#wireless_wireless_lans_read) | **GET** /wireless/wireless-lans/{id}/ | 
[**wireless_wireless_lans_update**](WirelessApi.md#wireless_wireless_lans_update) | **PUT** /wireless/wireless-lans/{id}/ | 
[**wireless_wireless_links_bulk_delete**](WirelessApi.md#wireless_wireless_links_bulk_delete) | **DELETE** /wireless/wireless-links/ | 
[**wireless_wireless_links_bulk_partial_update**](WirelessApi.md#wireless_wireless_links_bulk_partial_update) | **PATCH** /wireless/wireless-links/ | 
[**wireless_wireless_links_bulk_update**](WirelessApi.md#wireless_wireless_links_bulk_update) | **PUT** /wireless/wireless-links/ | 
[**wireless_wireless_links_create**](WirelessApi.md#wireless_wireless_links_create) | **POST** /wireless/wireless-links/ | 
[**wireless_wireless_links_delete**](WirelessApi.md#wireless_wireless_links_delete) | **DELETE** /wireless/wireless-links/{id}/ | 
[**wireless_wireless_links_list**](WirelessApi.md#wireless_wireless_links_list) | **GET** /wireless/wireless-links/ | 
[**wireless_wireless_links_partial_update**](WirelessApi.md#wireless_wireless_links_partial_update) | **PATCH** /wireless/wireless-links/{id}/ | 
[**wireless_wireless_links_read**](WirelessApi.md#wireless_wireless_links_read) | **GET** /wireless/wireless-links/{id}/ | 
[**wireless_wireless_links_update**](WirelessApi.md#wireless_wireless_links_update) | **PUT** /wireless/wireless-links/{id}/ | 


# **wireless_wireless_lan_groups_bulk_delete**
> wireless_wireless_lan_groups_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)

    try:
        api_instance.wireless_wireless_lan_groups_bulk_delete()
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lan_groups_bulk_partial_update**
> WirelessLANGroup wireless_wireless_lan_groups_bulk_partial_update(writable_wireless_lan_group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan_group import WirelessLANGroup
from openapi_client.models.writable_wireless_lan_group import WritableWirelessLANGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_lan_group = openapi_client.WritableWirelessLANGroup() # WritableWirelessLANGroup | 

    try:
        api_response = api_instance.wireless_wireless_lan_groups_bulk_partial_update(writable_wireless_lan_group)
        print("The response of WirelessApi->wireless_wireless_lan_groups_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_lan_group** | [**WritableWirelessLANGroup**](WritableWirelessLANGroup.md)|  | 

### Return type

[**WirelessLANGroup**](WirelessLANGroup.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lan_groups_bulk_update**
> WirelessLANGroup wireless_wireless_lan_groups_bulk_update(writable_wireless_lan_group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan_group import WirelessLANGroup
from openapi_client.models.writable_wireless_lan_group import WritableWirelessLANGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_lan_group = openapi_client.WritableWirelessLANGroup() # WritableWirelessLANGroup | 

    try:
        api_response = api_instance.wireless_wireless_lan_groups_bulk_update(writable_wireless_lan_group)
        print("The response of WirelessApi->wireless_wireless_lan_groups_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_lan_group** | [**WritableWirelessLANGroup**](WritableWirelessLANGroup.md)|  | 

### Return type

[**WirelessLANGroup**](WirelessLANGroup.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lan_groups_create**
> WirelessLANGroup wireless_wireless_lan_groups_create(writable_wireless_lan_group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan_group import WirelessLANGroup
from openapi_client.models.writable_wireless_lan_group import WritableWirelessLANGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_lan_group = openapi_client.WritableWirelessLANGroup() # WritableWirelessLANGroup | 

    try:
        api_response = api_instance.wireless_wireless_lan_groups_create(writable_wireless_lan_group)
        print("The response of WirelessApi->wireless_wireless_lan_groups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_lan_group** | [**WritableWirelessLANGroup**](WritableWirelessLANGroup.md)|  | 

### Return type

[**WirelessLANGroup**](WirelessLANGroup.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lan_groups_delete**
> wireless_wireless_lan_groups_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this Wireless LAN Group.

    try:
        api_instance.wireless_wireless_lan_groups_delete(id)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this Wireless LAN Group. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lan_groups_list**
> WirelessWirelessLanGroupsList200Response wireless_wireless_lan_groups_list(id=id, name=name, slug=slug, description=description, created=created, last_updated=last_updated, q=q, tag=tag, parent_id=parent_id, parent=parent, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, slug__n=slug__n, slug__ic=slug__ic, slug__nic=slug__nic, slug__iew=slug__iew, slug__niew=slug__niew, slug__isw=slug__isw, slug__nisw=slug__nisw, slug__ie=slug__ie, slug__nie=slug__nie, slug__empty=slug__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, parent_id__n=parent_id__n, parent__n=parent__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_wireless_lan_groups_list200_response import WirelessWirelessLanGroupsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 'id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    slug = 'slug_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    last_updated = 'last_updated_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    tag = 'tag_example' # str |  (optional)
    parent_id = 'parent_id_example' # str |  (optional)
    parent = 'parent_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    name__n = 'name__n_example' # str |  (optional)
    name__ic = 'name__ic_example' # str |  (optional)
    name__nic = 'name__nic_example' # str |  (optional)
    name__iew = 'name__iew_example' # str |  (optional)
    name__niew = 'name__niew_example' # str |  (optional)
    name__isw = 'name__isw_example' # str |  (optional)
    name__nisw = 'name__nisw_example' # str |  (optional)
    name__ie = 'name__ie_example' # str |  (optional)
    name__nie = 'name__nie_example' # str |  (optional)
    name__empty = 'name__empty_example' # str |  (optional)
    slug__n = 'slug__n_example' # str |  (optional)
    slug__ic = 'slug__ic_example' # str |  (optional)
    slug__nic = 'slug__nic_example' # str |  (optional)
    slug__iew = 'slug__iew_example' # str |  (optional)
    slug__niew = 'slug__niew_example' # str |  (optional)
    slug__isw = 'slug__isw_example' # str |  (optional)
    slug__nisw = 'slug__nisw_example' # str |  (optional)
    slug__ie = 'slug__ie_example' # str |  (optional)
    slug__nie = 'slug__nie_example' # str |  (optional)
    slug__empty = 'slug__empty_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    created__n = 'created__n_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    created__lt = 'created__lt_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__gt = 'created__gt_example' # str |  (optional)
    last_updated__n = 'last_updated__n_example' # str |  (optional)
    last_updated__lte = 'last_updated__lte_example' # str |  (optional)
    last_updated__lt = 'last_updated__lt_example' # str |  (optional)
    last_updated__gte = 'last_updated__gte_example' # str |  (optional)
    last_updated__gt = 'last_updated__gt_example' # str |  (optional)
    tag__n = 'tag__n_example' # str |  (optional)
    parent_id__n = 'parent_id__n_example' # str |  (optional)
    parent__n = 'parent__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.wireless_wireless_lan_groups_list(id=id, name=name, slug=slug, description=description, created=created, last_updated=last_updated, q=q, tag=tag, parent_id=parent_id, parent=parent, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, name__n=name__n, name__ic=name__ic, name__nic=name__nic, name__iew=name__iew, name__niew=name__niew, name__isw=name__isw, name__nisw=name__nisw, name__ie=name__ie, name__nie=name__nie, name__empty=name__empty, slug__n=slug__n, slug__ic=slug__ic, slug__nic=slug__nic, slug__iew=slug__iew, slug__niew=slug__niew, slug__isw=slug__isw, slug__nisw=slug__nisw, slug__ie=slug__ie, slug__nie=slug__nie, slug__empty=slug__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, parent_id__n=parent_id__n, parent__n=parent__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of WirelessApi->wireless_wireless_lan_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **slug** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **last_updated** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **parent_id** | **str**|  | [optional] 
 **parent** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **name__n** | **str**|  | [optional] 
 **name__ic** | **str**|  | [optional] 
 **name__nic** | **str**|  | [optional] 
 **name__iew** | **str**|  | [optional] 
 **name__niew** | **str**|  | [optional] 
 **name__isw** | **str**|  | [optional] 
 **name__nisw** | **str**|  | [optional] 
 **name__ie** | **str**|  | [optional] 
 **name__nie** | **str**|  | [optional] 
 **name__empty** | **str**|  | [optional] 
 **slug__n** | **str**|  | [optional] 
 **slug__ic** | **str**|  | [optional] 
 **slug__nic** | **str**|  | [optional] 
 **slug__iew** | **str**|  | [optional] 
 **slug__niew** | **str**|  | [optional] 
 **slug__isw** | **str**|  | [optional] 
 **slug__nisw** | **str**|  | [optional] 
 **slug__ie** | **str**|  | [optional] 
 **slug__nie** | **str**|  | [optional] 
 **slug__empty** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **created__n** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **created__lt** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__gt** | **str**|  | [optional] 
 **last_updated__n** | **str**|  | [optional] 
 **last_updated__lte** | **str**|  | [optional] 
 **last_updated__lt** | **str**|  | [optional] 
 **last_updated__gte** | **str**|  | [optional] 
 **last_updated__gt** | **str**|  | [optional] 
 **tag__n** | **str**|  | [optional] 
 **parent_id__n** | **str**|  | [optional] 
 **parent__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**WirelessWirelessLanGroupsList200Response**](WirelessWirelessLanGroupsList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lan_groups_partial_update**
> WirelessLANGroup wireless_wireless_lan_groups_partial_update(id, writable_wireless_lan_group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan_group import WirelessLANGroup
from openapi_client.models.writable_wireless_lan_group import WritableWirelessLANGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this Wireless LAN Group.
    writable_wireless_lan_group = openapi_client.WritableWirelessLANGroup() # WritableWirelessLANGroup | 

    try:
        api_response = api_instance.wireless_wireless_lan_groups_partial_update(id, writable_wireless_lan_group)
        print("The response of WirelessApi->wireless_wireless_lan_groups_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this Wireless LAN Group. | 
 **writable_wireless_lan_group** | [**WritableWirelessLANGroup**](WritableWirelessLANGroup.md)|  | 

### Return type

[**WirelessLANGroup**](WirelessLANGroup.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lan_groups_read**
> WirelessLANGroup wireless_wireless_lan_groups_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan_group import WirelessLANGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this Wireless LAN Group.

    try:
        api_response = api_instance.wireless_wireless_lan_groups_read(id)
        print("The response of WirelessApi->wireless_wireless_lan_groups_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this Wireless LAN Group. | 

### Return type

[**WirelessLANGroup**](WirelessLANGroup.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lan_groups_update**
> WirelessLANGroup wireless_wireless_lan_groups_update(id, writable_wireless_lan_group)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan_group import WirelessLANGroup
from openapi_client.models.writable_wireless_lan_group import WritableWirelessLANGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this Wireless LAN Group.
    writable_wireless_lan_group = openapi_client.WritableWirelessLANGroup() # WritableWirelessLANGroup | 

    try:
        api_response = api_instance.wireless_wireless_lan_groups_update(id, writable_wireless_lan_group)
        print("The response of WirelessApi->wireless_wireless_lan_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lan_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this Wireless LAN Group. | 
 **writable_wireless_lan_group** | [**WritableWirelessLANGroup**](WritableWirelessLANGroup.md)|  | 

### Return type

[**WirelessLANGroup**](WirelessLANGroup.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_bulk_delete**
> wireless_wireless_lans_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)

    try:
        api_instance.wireless_wireless_lans_bulk_delete()
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_bulk_partial_update**
> WirelessLAN wireless_wireless_lans_bulk_partial_update(writable_wireless_lan)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan import WirelessLAN
from openapi_client.models.writable_wireless_lan import WritableWirelessLAN
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_lan = openapi_client.WritableWirelessLAN() # WritableWirelessLAN | 

    try:
        api_response = api_instance.wireless_wireless_lans_bulk_partial_update(writable_wireless_lan)
        print("The response of WirelessApi->wireless_wireless_lans_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_lan** | [**WritableWirelessLAN**](WritableWirelessLAN.md)|  | 

### Return type

[**WirelessLAN**](WirelessLAN.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_bulk_update**
> WirelessLAN wireless_wireless_lans_bulk_update(writable_wireless_lan)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan import WirelessLAN
from openapi_client.models.writable_wireless_lan import WritableWirelessLAN
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_lan = openapi_client.WritableWirelessLAN() # WritableWirelessLAN | 

    try:
        api_response = api_instance.wireless_wireless_lans_bulk_update(writable_wireless_lan)
        print("The response of WirelessApi->wireless_wireless_lans_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_lan** | [**WritableWirelessLAN**](WritableWirelessLAN.md)|  | 

### Return type

[**WirelessLAN**](WirelessLAN.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_create**
> WirelessLAN wireless_wireless_lans_create(writable_wireless_lan)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan import WirelessLAN
from openapi_client.models.writable_wireless_lan import WritableWirelessLAN
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_lan = openapi_client.WritableWirelessLAN() # WritableWirelessLAN | 

    try:
        api_response = api_instance.wireless_wireless_lans_create(writable_wireless_lan)
        print("The response of WirelessApi->wireless_wireless_lans_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_lan** | [**WritableWirelessLAN**](WritableWirelessLAN.md)|  | 

### Return type

[**WirelessLAN**](WirelessLAN.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_delete**
> wireless_wireless_lans_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this Wireless LAN.

    try:
        api_instance.wireless_wireless_lans_delete(id)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this Wireless LAN. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_list**
> WirelessWirelessLansList200Response wireless_wireless_lans_list(id=id, ssid=ssid, auth_psk=auth_psk, description=description, created=created, last_updated=last_updated, q=q, tag=tag, tenant_group_id=tenant_group_id, tenant_group=tenant_group, tenant_id=tenant_id, tenant=tenant, group_id=group_id, group=group, status=status, vlan_id=vlan_id, auth_type=auth_type, auth_cipher=auth_cipher, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, ssid__n=ssid__n, ssid__ic=ssid__ic, ssid__nic=ssid__nic, ssid__iew=ssid__iew, ssid__niew=ssid__niew, ssid__isw=ssid__isw, ssid__nisw=ssid__nisw, ssid__ie=ssid__ie, ssid__nie=ssid__nie, ssid__empty=ssid__empty, auth_psk__n=auth_psk__n, auth_psk__ic=auth_psk__ic, auth_psk__nic=auth_psk__nic, auth_psk__iew=auth_psk__iew, auth_psk__niew=auth_psk__niew, auth_psk__isw=auth_psk__isw, auth_psk__nisw=auth_psk__nisw, auth_psk__ie=auth_psk__ie, auth_psk__nie=auth_psk__nie, auth_psk__empty=auth_psk__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, tenant_group_id__n=tenant_group_id__n, tenant_group__n=tenant_group__n, tenant_id__n=tenant_id__n, tenant__n=tenant__n, group_id__n=group_id__n, group__n=group__n, status__n=status__n, vlan_id__n=vlan_id__n, auth_type__n=auth_type__n, auth_cipher__n=auth_cipher__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_wireless_lans_list200_response import WirelessWirelessLansList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 'id_example' # str |  (optional)
    ssid = 'ssid_example' # str |  (optional)
    auth_psk = 'auth_psk_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    last_updated = 'last_updated_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    tag = 'tag_example' # str |  (optional)
    tenant_group_id = 'tenant_group_id_example' # str |  (optional)
    tenant_group = 'tenant_group_example' # str |  (optional)
    tenant_id = 'tenant_id_example' # str |  (optional)
    tenant = 'tenant_example' # str |  (optional)
    group_id = 'group_id_example' # str |  (optional)
    group = 'group_example' # str |  (optional)
    status = 'status_example' # str |  (optional)
    vlan_id = 'vlan_id_example' # str |  (optional)
    auth_type = 'auth_type_example' # str |  (optional)
    auth_cipher = 'auth_cipher_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    ssid__n = 'ssid__n_example' # str |  (optional)
    ssid__ic = 'ssid__ic_example' # str |  (optional)
    ssid__nic = 'ssid__nic_example' # str |  (optional)
    ssid__iew = 'ssid__iew_example' # str |  (optional)
    ssid__niew = 'ssid__niew_example' # str |  (optional)
    ssid__isw = 'ssid__isw_example' # str |  (optional)
    ssid__nisw = 'ssid__nisw_example' # str |  (optional)
    ssid__ie = 'ssid__ie_example' # str |  (optional)
    ssid__nie = 'ssid__nie_example' # str |  (optional)
    ssid__empty = 'ssid__empty_example' # str |  (optional)
    auth_psk__n = 'auth_psk__n_example' # str |  (optional)
    auth_psk__ic = 'auth_psk__ic_example' # str |  (optional)
    auth_psk__nic = 'auth_psk__nic_example' # str |  (optional)
    auth_psk__iew = 'auth_psk__iew_example' # str |  (optional)
    auth_psk__niew = 'auth_psk__niew_example' # str |  (optional)
    auth_psk__isw = 'auth_psk__isw_example' # str |  (optional)
    auth_psk__nisw = 'auth_psk__nisw_example' # str |  (optional)
    auth_psk__ie = 'auth_psk__ie_example' # str |  (optional)
    auth_psk__nie = 'auth_psk__nie_example' # str |  (optional)
    auth_psk__empty = 'auth_psk__empty_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    created__n = 'created__n_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    created__lt = 'created__lt_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__gt = 'created__gt_example' # str |  (optional)
    last_updated__n = 'last_updated__n_example' # str |  (optional)
    last_updated__lte = 'last_updated__lte_example' # str |  (optional)
    last_updated__lt = 'last_updated__lt_example' # str |  (optional)
    last_updated__gte = 'last_updated__gte_example' # str |  (optional)
    last_updated__gt = 'last_updated__gt_example' # str |  (optional)
    tag__n = 'tag__n_example' # str |  (optional)
    tenant_group_id__n = 'tenant_group_id__n_example' # str |  (optional)
    tenant_group__n = 'tenant_group__n_example' # str |  (optional)
    tenant_id__n = 'tenant_id__n_example' # str |  (optional)
    tenant__n = 'tenant__n_example' # str |  (optional)
    group_id__n = 'group_id__n_example' # str |  (optional)
    group__n = 'group__n_example' # str |  (optional)
    status__n = 'status__n_example' # str |  (optional)
    vlan_id__n = 'vlan_id__n_example' # str |  (optional)
    auth_type__n = 'auth_type__n_example' # str |  (optional)
    auth_cipher__n = 'auth_cipher__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.wireless_wireless_lans_list(id=id, ssid=ssid, auth_psk=auth_psk, description=description, created=created, last_updated=last_updated, q=q, tag=tag, tenant_group_id=tenant_group_id, tenant_group=tenant_group, tenant_id=tenant_id, tenant=tenant, group_id=group_id, group=group, status=status, vlan_id=vlan_id, auth_type=auth_type, auth_cipher=auth_cipher, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, ssid__n=ssid__n, ssid__ic=ssid__ic, ssid__nic=ssid__nic, ssid__iew=ssid__iew, ssid__niew=ssid__niew, ssid__isw=ssid__isw, ssid__nisw=ssid__nisw, ssid__ie=ssid__ie, ssid__nie=ssid__nie, ssid__empty=ssid__empty, auth_psk__n=auth_psk__n, auth_psk__ic=auth_psk__ic, auth_psk__nic=auth_psk__nic, auth_psk__iew=auth_psk__iew, auth_psk__niew=auth_psk__niew, auth_psk__isw=auth_psk__isw, auth_psk__nisw=auth_psk__nisw, auth_psk__ie=auth_psk__ie, auth_psk__nie=auth_psk__nie, auth_psk__empty=auth_psk__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, tenant_group_id__n=tenant_group_id__n, tenant_group__n=tenant_group__n, tenant_id__n=tenant_id__n, tenant__n=tenant__n, group_id__n=group_id__n, group__n=group__n, status__n=status__n, vlan_id__n=vlan_id__n, auth_type__n=auth_type__n, auth_cipher__n=auth_cipher__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of WirelessApi->wireless_wireless_lans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **ssid** | **str**|  | [optional] 
 **auth_psk** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **last_updated** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **tenant_group_id** | **str**|  | [optional] 
 **tenant_group** | **str**|  | [optional] 
 **tenant_id** | **str**|  | [optional] 
 **tenant** | **str**|  | [optional] 
 **group_id** | **str**|  | [optional] 
 **group** | **str**|  | [optional] 
 **status** | **str**|  | [optional] 
 **vlan_id** | **str**|  | [optional] 
 **auth_type** | **str**|  | [optional] 
 **auth_cipher** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **ssid__n** | **str**|  | [optional] 
 **ssid__ic** | **str**|  | [optional] 
 **ssid__nic** | **str**|  | [optional] 
 **ssid__iew** | **str**|  | [optional] 
 **ssid__niew** | **str**|  | [optional] 
 **ssid__isw** | **str**|  | [optional] 
 **ssid__nisw** | **str**|  | [optional] 
 **ssid__ie** | **str**|  | [optional] 
 **ssid__nie** | **str**|  | [optional] 
 **ssid__empty** | **str**|  | [optional] 
 **auth_psk__n** | **str**|  | [optional] 
 **auth_psk__ic** | **str**|  | [optional] 
 **auth_psk__nic** | **str**|  | [optional] 
 **auth_psk__iew** | **str**|  | [optional] 
 **auth_psk__niew** | **str**|  | [optional] 
 **auth_psk__isw** | **str**|  | [optional] 
 **auth_psk__nisw** | **str**|  | [optional] 
 **auth_psk__ie** | **str**|  | [optional] 
 **auth_psk__nie** | **str**|  | [optional] 
 **auth_psk__empty** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **created__n** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **created__lt** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__gt** | **str**|  | [optional] 
 **last_updated__n** | **str**|  | [optional] 
 **last_updated__lte** | **str**|  | [optional] 
 **last_updated__lt** | **str**|  | [optional] 
 **last_updated__gte** | **str**|  | [optional] 
 **last_updated__gt** | **str**|  | [optional] 
 **tag__n** | **str**|  | [optional] 
 **tenant_group_id__n** | **str**|  | [optional] 
 **tenant_group__n** | **str**|  | [optional] 
 **tenant_id__n** | **str**|  | [optional] 
 **tenant__n** | **str**|  | [optional] 
 **group_id__n** | **str**|  | [optional] 
 **group__n** | **str**|  | [optional] 
 **status__n** | **str**|  | [optional] 
 **vlan_id__n** | **str**|  | [optional] 
 **auth_type__n** | **str**|  | [optional] 
 **auth_cipher__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**WirelessWirelessLansList200Response**](WirelessWirelessLansList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_partial_update**
> WirelessLAN wireless_wireless_lans_partial_update(id, writable_wireless_lan)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan import WirelessLAN
from openapi_client.models.writable_wireless_lan import WritableWirelessLAN
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this Wireless LAN.
    writable_wireless_lan = openapi_client.WritableWirelessLAN() # WritableWirelessLAN | 

    try:
        api_response = api_instance.wireless_wireless_lans_partial_update(id, writable_wireless_lan)
        print("The response of WirelessApi->wireless_wireless_lans_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this Wireless LAN. | 
 **writable_wireless_lan** | [**WritableWirelessLAN**](WritableWirelessLAN.md)|  | 

### Return type

[**WirelessLAN**](WirelessLAN.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_read**
> WirelessLAN wireless_wireless_lans_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan import WirelessLAN
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this Wireless LAN.

    try:
        api_response = api_instance.wireless_wireless_lans_read(id)
        print("The response of WirelessApi->wireless_wireless_lans_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this Wireless LAN. | 

### Return type

[**WirelessLAN**](WirelessLAN.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_lans_update**
> WirelessLAN wireless_wireless_lans_update(id, writable_wireless_lan)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_lan import WirelessLAN
from openapi_client.models.writable_wireless_lan import WritableWirelessLAN
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this Wireless LAN.
    writable_wireless_lan = openapi_client.WritableWirelessLAN() # WritableWirelessLAN | 

    try:
        api_response = api_instance.wireless_wireless_lans_update(id, writable_wireless_lan)
        print("The response of WirelessApi->wireless_wireless_lans_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_lans_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this Wireless LAN. | 
 **writable_wireless_lan** | [**WritableWirelessLAN**](WritableWirelessLAN.md)|  | 

### Return type

[**WirelessLAN**](WirelessLAN.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_bulk_delete**
> wireless_wireless_links_bulk_delete()





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)

    try:
        api_instance.wireless_wireless_links_bulk_delete()
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_bulk_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_bulk_partial_update**
> WirelessLink wireless_wireless_links_bulk_partial_update(writable_wireless_link)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_link import WirelessLink
from openapi_client.models.writable_wireless_link import WritableWirelessLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_link = openapi_client.WritableWirelessLink() # WritableWirelessLink | 

    try:
        api_response = api_instance.wireless_wireless_links_bulk_partial_update(writable_wireless_link)
        print("The response of WirelessApi->wireless_wireless_links_bulk_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_bulk_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_link** | [**WritableWirelessLink**](WritableWirelessLink.md)|  | 

### Return type

[**WirelessLink**](WirelessLink.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_bulk_update**
> WirelessLink wireless_wireless_links_bulk_update(writable_wireless_link)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_link import WirelessLink
from openapi_client.models.writable_wireless_link import WritableWirelessLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_link = openapi_client.WritableWirelessLink() # WritableWirelessLink | 

    try:
        api_response = api_instance.wireless_wireless_links_bulk_update(writable_wireless_link)
        print("The response of WirelessApi->wireless_wireless_links_bulk_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_bulk_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_link** | [**WritableWirelessLink**](WritableWirelessLink.md)|  | 

### Return type

[**WirelessLink**](WirelessLink.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_create**
> WirelessLink wireless_wireless_links_create(writable_wireless_link)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_link import WirelessLink
from openapi_client.models.writable_wireless_link import WritableWirelessLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    writable_wireless_link = openapi_client.WritableWirelessLink() # WritableWirelessLink | 

    try:
        api_response = api_instance.wireless_wireless_links_create(writable_wireless_link)
        print("The response of WirelessApi->wireless_wireless_links_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writable_wireless_link** | [**WritableWirelessLink**](WritableWirelessLink.md)|  | 

### Return type

[**WirelessLink**](WirelessLink.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_delete**
> wireless_wireless_links_delete(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this wireless link.

    try:
        api_instance.wireless_wireless_links_delete(id)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this wireless link. | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_list**
> WirelessWirelessLinksList200Response wireless_wireless_links_list(id=id, ssid=ssid, auth_psk=auth_psk, description=description, created=created, last_updated=last_updated, q=q, tag=tag, tenant_group_id=tenant_group_id, tenant_group=tenant_group, tenant_id=tenant_id, tenant=tenant, interface_a_id=interface_a_id, interface_b_id=interface_b_id, status=status, auth_type=auth_type, auth_cipher=auth_cipher, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, ssid__n=ssid__n, ssid__ic=ssid__ic, ssid__nic=ssid__nic, ssid__iew=ssid__iew, ssid__niew=ssid__niew, ssid__isw=ssid__isw, ssid__nisw=ssid__nisw, ssid__ie=ssid__ie, ssid__nie=ssid__nie, ssid__empty=ssid__empty, auth_psk__n=auth_psk__n, auth_psk__ic=auth_psk__ic, auth_psk__nic=auth_psk__nic, auth_psk__iew=auth_psk__iew, auth_psk__niew=auth_psk__niew, auth_psk__isw=auth_psk__isw, auth_psk__nisw=auth_psk__nisw, auth_psk__ie=auth_psk__ie, auth_psk__nie=auth_psk__nie, auth_psk__empty=auth_psk__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, tenant_group_id__n=tenant_group_id__n, tenant_group__n=tenant_group__n, tenant_id__n=tenant_id__n, tenant__n=tenant__n, interface_a_id__n=interface_a_id__n, interface_a_id__lte=interface_a_id__lte, interface_a_id__lt=interface_a_id__lt, interface_a_id__gte=interface_a_id__gte, interface_a_id__gt=interface_a_id__gt, interface_b_id__n=interface_b_id__n, interface_b_id__lte=interface_b_id__lte, interface_b_id__lt=interface_b_id__lt, interface_b_id__gte=interface_b_id__gte, interface_b_id__gt=interface_b_id__gt, status__n=status__n, auth_type__n=auth_type__n, auth_cipher__n=auth_cipher__n, ordering=ordering, limit=limit, offset=offset)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_wireless_links_list200_response import WirelessWirelessLinksList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 'id_example' # str |  (optional)
    ssid = 'ssid_example' # str |  (optional)
    auth_psk = 'auth_psk_example' # str |  (optional)
    description = 'description_example' # str |  (optional)
    created = 'created_example' # str |  (optional)
    last_updated = 'last_updated_example' # str |  (optional)
    q = 'q_example' # str |  (optional)
    tag = 'tag_example' # str |  (optional)
    tenant_group_id = 'tenant_group_id_example' # str |  (optional)
    tenant_group = 'tenant_group_example' # str |  (optional)
    tenant_id = 'tenant_id_example' # str |  (optional)
    tenant = 'tenant_example' # str |  (optional)
    interface_a_id = 'interface_a_id_example' # str |  (optional)
    interface_b_id = 'interface_b_id_example' # str |  (optional)
    status = 'status_example' # str |  (optional)
    auth_type = 'auth_type_example' # str |  (optional)
    auth_cipher = 'auth_cipher_example' # str |  (optional)
    id__n = 'id__n_example' # str |  (optional)
    id__lte = 'id__lte_example' # str |  (optional)
    id__lt = 'id__lt_example' # str |  (optional)
    id__gte = 'id__gte_example' # str |  (optional)
    id__gt = 'id__gt_example' # str |  (optional)
    ssid__n = 'ssid__n_example' # str |  (optional)
    ssid__ic = 'ssid__ic_example' # str |  (optional)
    ssid__nic = 'ssid__nic_example' # str |  (optional)
    ssid__iew = 'ssid__iew_example' # str |  (optional)
    ssid__niew = 'ssid__niew_example' # str |  (optional)
    ssid__isw = 'ssid__isw_example' # str |  (optional)
    ssid__nisw = 'ssid__nisw_example' # str |  (optional)
    ssid__ie = 'ssid__ie_example' # str |  (optional)
    ssid__nie = 'ssid__nie_example' # str |  (optional)
    ssid__empty = 'ssid__empty_example' # str |  (optional)
    auth_psk__n = 'auth_psk__n_example' # str |  (optional)
    auth_psk__ic = 'auth_psk__ic_example' # str |  (optional)
    auth_psk__nic = 'auth_psk__nic_example' # str |  (optional)
    auth_psk__iew = 'auth_psk__iew_example' # str |  (optional)
    auth_psk__niew = 'auth_psk__niew_example' # str |  (optional)
    auth_psk__isw = 'auth_psk__isw_example' # str |  (optional)
    auth_psk__nisw = 'auth_psk__nisw_example' # str |  (optional)
    auth_psk__ie = 'auth_psk__ie_example' # str |  (optional)
    auth_psk__nie = 'auth_psk__nie_example' # str |  (optional)
    auth_psk__empty = 'auth_psk__empty_example' # str |  (optional)
    description__n = 'description__n_example' # str |  (optional)
    description__ic = 'description__ic_example' # str |  (optional)
    description__nic = 'description__nic_example' # str |  (optional)
    description__iew = 'description__iew_example' # str |  (optional)
    description__niew = 'description__niew_example' # str |  (optional)
    description__isw = 'description__isw_example' # str |  (optional)
    description__nisw = 'description__nisw_example' # str |  (optional)
    description__ie = 'description__ie_example' # str |  (optional)
    description__nie = 'description__nie_example' # str |  (optional)
    description__empty = 'description__empty_example' # str |  (optional)
    created__n = 'created__n_example' # str |  (optional)
    created__lte = 'created__lte_example' # str |  (optional)
    created__lt = 'created__lt_example' # str |  (optional)
    created__gte = 'created__gte_example' # str |  (optional)
    created__gt = 'created__gt_example' # str |  (optional)
    last_updated__n = 'last_updated__n_example' # str |  (optional)
    last_updated__lte = 'last_updated__lte_example' # str |  (optional)
    last_updated__lt = 'last_updated__lt_example' # str |  (optional)
    last_updated__gte = 'last_updated__gte_example' # str |  (optional)
    last_updated__gt = 'last_updated__gt_example' # str |  (optional)
    tag__n = 'tag__n_example' # str |  (optional)
    tenant_group_id__n = 'tenant_group_id__n_example' # str |  (optional)
    tenant_group__n = 'tenant_group__n_example' # str |  (optional)
    tenant_id__n = 'tenant_id__n_example' # str |  (optional)
    tenant__n = 'tenant__n_example' # str |  (optional)
    interface_a_id__n = 'interface_a_id__n_example' # str |  (optional)
    interface_a_id__lte = 'interface_a_id__lte_example' # str |  (optional)
    interface_a_id__lt = 'interface_a_id__lt_example' # str |  (optional)
    interface_a_id__gte = 'interface_a_id__gte_example' # str |  (optional)
    interface_a_id__gt = 'interface_a_id__gt_example' # str |  (optional)
    interface_b_id__n = 'interface_b_id__n_example' # str |  (optional)
    interface_b_id__lte = 'interface_b_id__lte_example' # str |  (optional)
    interface_b_id__lt = 'interface_b_id__lt_example' # str |  (optional)
    interface_b_id__gte = 'interface_b_id__gte_example' # str |  (optional)
    interface_b_id__gt = 'interface_b_id__gt_example' # str |  (optional)
    status__n = 'status__n_example' # str |  (optional)
    auth_type__n = 'auth_type__n_example' # str |  (optional)
    auth_cipher__n = 'auth_cipher__n_example' # str |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    limit = 56 # int | Number of results to return per page. (optional)
    offset = 56 # int | The initial index from which to return the results. (optional)

    try:
        api_response = api_instance.wireless_wireless_links_list(id=id, ssid=ssid, auth_psk=auth_psk, description=description, created=created, last_updated=last_updated, q=q, tag=tag, tenant_group_id=tenant_group_id, tenant_group=tenant_group, tenant_id=tenant_id, tenant=tenant, interface_a_id=interface_a_id, interface_b_id=interface_b_id, status=status, auth_type=auth_type, auth_cipher=auth_cipher, id__n=id__n, id__lte=id__lte, id__lt=id__lt, id__gte=id__gte, id__gt=id__gt, ssid__n=ssid__n, ssid__ic=ssid__ic, ssid__nic=ssid__nic, ssid__iew=ssid__iew, ssid__niew=ssid__niew, ssid__isw=ssid__isw, ssid__nisw=ssid__nisw, ssid__ie=ssid__ie, ssid__nie=ssid__nie, ssid__empty=ssid__empty, auth_psk__n=auth_psk__n, auth_psk__ic=auth_psk__ic, auth_psk__nic=auth_psk__nic, auth_psk__iew=auth_psk__iew, auth_psk__niew=auth_psk__niew, auth_psk__isw=auth_psk__isw, auth_psk__nisw=auth_psk__nisw, auth_psk__ie=auth_psk__ie, auth_psk__nie=auth_psk__nie, auth_psk__empty=auth_psk__empty, description__n=description__n, description__ic=description__ic, description__nic=description__nic, description__iew=description__iew, description__niew=description__niew, description__isw=description__isw, description__nisw=description__nisw, description__ie=description__ie, description__nie=description__nie, description__empty=description__empty, created__n=created__n, created__lte=created__lte, created__lt=created__lt, created__gte=created__gte, created__gt=created__gt, last_updated__n=last_updated__n, last_updated__lte=last_updated__lte, last_updated__lt=last_updated__lt, last_updated__gte=last_updated__gte, last_updated__gt=last_updated__gt, tag__n=tag__n, tenant_group_id__n=tenant_group_id__n, tenant_group__n=tenant_group__n, tenant_id__n=tenant_id__n, tenant__n=tenant__n, interface_a_id__n=interface_a_id__n, interface_a_id__lte=interface_a_id__lte, interface_a_id__lt=interface_a_id__lt, interface_a_id__gte=interface_a_id__gte, interface_a_id__gt=interface_a_id__gt, interface_b_id__n=interface_b_id__n, interface_b_id__lte=interface_b_id__lte, interface_b_id__lt=interface_b_id__lt, interface_b_id__gte=interface_b_id__gte, interface_b_id__gt=interface_b_id__gt, status__n=status__n, auth_type__n=auth_type__n, auth_cipher__n=auth_cipher__n, ordering=ordering, limit=limit, offset=offset)
        print("The response of WirelessApi->wireless_wireless_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | [optional] 
 **ssid** | **str**|  | [optional] 
 **auth_psk** | **str**|  | [optional] 
 **description** | **str**|  | [optional] 
 **created** | **str**|  | [optional] 
 **last_updated** | **str**|  | [optional] 
 **q** | **str**|  | [optional] 
 **tag** | **str**|  | [optional] 
 **tenant_group_id** | **str**|  | [optional] 
 **tenant_group** | **str**|  | [optional] 
 **tenant_id** | **str**|  | [optional] 
 **tenant** | **str**|  | [optional] 
 **interface_a_id** | **str**|  | [optional] 
 **interface_b_id** | **str**|  | [optional] 
 **status** | **str**|  | [optional] 
 **auth_type** | **str**|  | [optional] 
 **auth_cipher** | **str**|  | [optional] 
 **id__n** | **str**|  | [optional] 
 **id__lte** | **str**|  | [optional] 
 **id__lt** | **str**|  | [optional] 
 **id__gte** | **str**|  | [optional] 
 **id__gt** | **str**|  | [optional] 
 **ssid__n** | **str**|  | [optional] 
 **ssid__ic** | **str**|  | [optional] 
 **ssid__nic** | **str**|  | [optional] 
 **ssid__iew** | **str**|  | [optional] 
 **ssid__niew** | **str**|  | [optional] 
 **ssid__isw** | **str**|  | [optional] 
 **ssid__nisw** | **str**|  | [optional] 
 **ssid__ie** | **str**|  | [optional] 
 **ssid__nie** | **str**|  | [optional] 
 **ssid__empty** | **str**|  | [optional] 
 **auth_psk__n** | **str**|  | [optional] 
 **auth_psk__ic** | **str**|  | [optional] 
 **auth_psk__nic** | **str**|  | [optional] 
 **auth_psk__iew** | **str**|  | [optional] 
 **auth_psk__niew** | **str**|  | [optional] 
 **auth_psk__isw** | **str**|  | [optional] 
 **auth_psk__nisw** | **str**|  | [optional] 
 **auth_psk__ie** | **str**|  | [optional] 
 **auth_psk__nie** | **str**|  | [optional] 
 **auth_psk__empty** | **str**|  | [optional] 
 **description__n** | **str**|  | [optional] 
 **description__ic** | **str**|  | [optional] 
 **description__nic** | **str**|  | [optional] 
 **description__iew** | **str**|  | [optional] 
 **description__niew** | **str**|  | [optional] 
 **description__isw** | **str**|  | [optional] 
 **description__nisw** | **str**|  | [optional] 
 **description__ie** | **str**|  | [optional] 
 **description__nie** | **str**|  | [optional] 
 **description__empty** | **str**|  | [optional] 
 **created__n** | **str**|  | [optional] 
 **created__lte** | **str**|  | [optional] 
 **created__lt** | **str**|  | [optional] 
 **created__gte** | **str**|  | [optional] 
 **created__gt** | **str**|  | [optional] 
 **last_updated__n** | **str**|  | [optional] 
 **last_updated__lte** | **str**|  | [optional] 
 **last_updated__lt** | **str**|  | [optional] 
 **last_updated__gte** | **str**|  | [optional] 
 **last_updated__gt** | **str**|  | [optional] 
 **tag__n** | **str**|  | [optional] 
 **tenant_group_id__n** | **str**|  | [optional] 
 **tenant_group__n** | **str**|  | [optional] 
 **tenant_id__n** | **str**|  | [optional] 
 **tenant__n** | **str**|  | [optional] 
 **interface_a_id__n** | **str**|  | [optional] 
 **interface_a_id__lte** | **str**|  | [optional] 
 **interface_a_id__lt** | **str**|  | [optional] 
 **interface_a_id__gte** | **str**|  | [optional] 
 **interface_a_id__gt** | **str**|  | [optional] 
 **interface_b_id__n** | **str**|  | [optional] 
 **interface_b_id__lte** | **str**|  | [optional] 
 **interface_b_id__lt** | **str**|  | [optional] 
 **interface_b_id__gte** | **str**|  | [optional] 
 **interface_b_id__gt** | **str**|  | [optional] 
 **status__n** | **str**|  | [optional] 
 **auth_type__n** | **str**|  | [optional] 
 **auth_cipher__n** | **str**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] 

### Return type

[**WirelessWirelessLinksList200Response**](WirelessWirelessLinksList200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_partial_update**
> WirelessLink wireless_wireless_links_partial_update(id, writable_wireless_link)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_link import WirelessLink
from openapi_client.models.writable_wireless_link import WritableWirelessLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this wireless link.
    writable_wireless_link = openapi_client.WritableWirelessLink() # WritableWirelessLink | 

    try:
        api_response = api_instance.wireless_wireless_links_partial_update(id, writable_wireless_link)
        print("The response of WirelessApi->wireless_wireless_links_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this wireless link. | 
 **writable_wireless_link** | [**WritableWirelessLink**](WritableWirelessLink.md)|  | 

### Return type

[**WirelessLink**](WirelessLink.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_read**
> WirelessLink wireless_wireless_links_read(id)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_link import WirelessLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this wireless link.

    try:
        api_response = api_instance.wireless_wireless_links_read(id)
        print("The response of WirelessApi->wireless_wireless_links_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this wireless link. | 

### Return type

[**WirelessLink**](WirelessLink.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wireless_wireless_links_update**
> WirelessLink wireless_wireless_links_update(id, writable_wireless_link)





### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.wireless_link import WirelessLink
from openapi_client.models.writable_wireless_link import WritableWirelessLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.netbox.dev/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.netbox.dev/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WirelessApi(api_client)
    id = 56 # int | A unique integer value identifying this wireless link.
    writable_wireless_link = openapi_client.WritableWirelessLink() # WritableWirelessLink | 

    try:
        api_response = api_instance.wireless_wireless_links_update(id, writable_wireless_link)
        print("The response of WirelessApi->wireless_wireless_links_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WirelessApi->wireless_wireless_links_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this wireless link. | 
 **writable_wireless_link** | [**WritableWirelessLink**](WritableWirelessLink.md)|  | 

### Return type

[**WirelessLink**](WirelessLink.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

