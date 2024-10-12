# openapi_client.DomainsApi

All URIs are relative to */v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domains_tld_zone_id_download_get**](DomainsApi.md#domains_tld_zone_id_download_get) | **GET** /domains/tld/{zone_id}/download | Download Whole Dataset for TLD
[**domains_tld_zone_id_search_get**](DomainsApi.md#domains_tld_zone_id_search_get) | **GET** /domains/tld/{zone_id}/search | Domains Search for TLD
[**domains_updates_added_download_get**](DomainsApi.md#domains_updates_added_download_get) | **GET** /domains/updates/added/download | Download added domains, latest if date not specified
[**domains_updates_added_get**](DomainsApi.md#domains_updates_added_get) | **GET** /domains/updates/added | Get added domains, latest if date not specified
[**domains_updates_deleted_download_get**](DomainsApi.md#domains_updates_deleted_download_get) | **GET** /domains/updates/deleted/download | Download deleted domains, latest if date not specified
[**domains_updates_deleted_get**](DomainsApi.md#domains_updates_deleted_get) | **GET** /domains/updates/deleted | Get deleted domains, latest if date not specified
[**domains_updates_list_get**](DomainsApi.md#domains_updates_list_get) | **GET** /domains/updates/list | List of updates
[**get_search_domain_item**](DomainsApi.md#get_search_domain_item) | **GET** /domains/search | Domains Database Search
[**get_tld_domain_item**](DomainsApi.md#get_tld_domain_item) | **GET** /domains/tld/{zone_id} | Get TLD records


# **domains_tld_zone_id_download_get**
> domains_tld_zone_id_download_get(zone_id, api_key=api_key, var_date=var_date)

Download Whole Dataset for TLD

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    zone_id = 'zone_id_example' # str | 
    api_key = 'api_key_example' # str | API key (optional)
    var_date = 'var_date_example' # str | Request date (optional)

    try:
        # Download Whole Dataset for TLD
        api_instance.domains_tld_zone_id_download_get(zone_id, api_key=api_key, var_date=var_date)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_tld_zone_id_download_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone_id** | **str**|  | 
 **api_key** | **str**| API key | [optional] 
 **var_date** | **str**| Request date | [optional] 

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
**403** | No api_key or it&#39;s not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_tld_zone_id_search_get**
> SearchResults domains_tld_zone_id_search_get(zone_id, api_key=api_key, var_date=var_date, page=page, limit=limit, domain=domain, country=country, is_dead=is_dead, a=a, ns=ns, cname=cname, mx=mx, txt=txt)

Domains Search for TLD

### Example


```python
import openapi_client
from openapi_client.models.search_results import SearchResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    zone_id = 'zone_id_example' # str | 
    api_key = 'api_key_example' # str | API key (optional)
    var_date = 'var_date_example' # str | Request date (optional)
    page = 'page_example' # str | Search page to request (optional)
    limit = 50 # int | Results per page (optional) (default to 50)
    domain = 'domain_example' # str | Domain includes (optional)
    country = 'country_example' # str | Hosting Country (optional)
    is_dead = True # bool | Dead or Not, default not (optional)
    a = 'a_example' # str | A record includes (optional)
    ns = 'ns_example' # str | NS record includes (optional)
    cname = 'cname_example' # str | CNAME record includes (optional)
    mx = 'mx_example' # str | MX record includes (optional)
    txt = 'txt_example' # str | TXT record includes (optional)

    try:
        # Domains Search for TLD
        api_response = api_instance.domains_tld_zone_id_search_get(zone_id, api_key=api_key, var_date=var_date, page=page, limit=limit, domain=domain, country=country, is_dead=is_dead, a=a, ns=ns, cname=cname, mx=mx, txt=txt)
        print("The response of DomainsApi->domains_tld_zone_id_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_tld_zone_id_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone_id** | **str**|  | 
 **api_key** | **str**| API key | [optional] 
 **var_date** | **str**| Request date | [optional] 
 **page** | **str**| Search page to request | [optional] 
 **limit** | **int**| Results per page | [optional] [default to 50]
 **domain** | **str**| Domain includes | [optional] 
 **country** | **str**| Hosting Country | [optional] 
 **is_dead** | **bool**| Dead or Not, default not | [optional] 
 **a** | **str**| A record includes | [optional] 
 **ns** | **str**| NS record includes | [optional] 
 **cname** | **str**| CNAME record includes | [optional] 
 **mx** | **str**| MX record includes | [optional] 
 **txt** | **str**| TXT record includes | [optional] 

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | No api_key or it&#39;s not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_updates_added_download_get**
> domains_updates_added_download_get(api_key=api_key, var_date=var_date)

Download added domains, latest if date not specified

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    api_key = 'api_key_example' # str | API key (optional)
    var_date = 'var_date_example' # str | Request date (optional)

    try:
        # Download added domains, latest if date not specified
        api_instance.domains_updates_added_download_get(api_key=api_key, var_date=var_date)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_updates_added_download_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| API key | [optional] 
 **var_date** | **str**| Request date | [optional] 

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
**403** | No api_key or it&#39;s not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_updates_added_get**
> SearchResults domains_updates_added_get(api_key=api_key, var_date=var_date, page=page, limit=limit)

Get added domains, latest if date not specified

### Example


```python
import openapi_client
from openapi_client.models.search_results import SearchResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    api_key = 'api_key_example' # str | API key (optional)
    var_date = 'var_date_example' # str | Request date (optional)
    page = 'page_example' # str | Search page to request (optional)
    limit = 50 # int | Results per page (optional) (default to 50)

    try:
        # Get added domains, latest if date not specified
        api_response = api_instance.domains_updates_added_get(api_key=api_key, var_date=var_date, page=page, limit=limit)
        print("The response of DomainsApi->domains_updates_added_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_updates_added_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| API key | [optional] 
 **var_date** | **str**| Request date | [optional] 
 **page** | **str**| Search page to request | [optional] 
 **limit** | **int**| Results per page | [optional] [default to 50]

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | No api_key or it&#39;s not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_updates_deleted_download_get**
> domains_updates_deleted_download_get(api_key=api_key, var_date=var_date)

Download deleted domains, latest if date not specified

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    api_key = 'api_key_example' # str | API key (optional)
    var_date = 'var_date_example' # str | Request date (optional)

    try:
        # Download deleted domains, latest if date not specified
        api_instance.domains_updates_deleted_download_get(api_key=api_key, var_date=var_date)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_updates_deleted_download_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| API key | [optional] 
 **var_date** | **str**| Request date | [optional] 

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
**403** | No api_key or it&#39;s not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_updates_deleted_get**
> SearchResults domains_updates_deleted_get(api_key=api_key, var_date=var_date, page=page, limit=limit)

Get deleted domains, latest if date not specified

### Example


```python
import openapi_client
from openapi_client.models.search_results import SearchResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    api_key = 'api_key_example' # str | API key (optional)
    var_date = 'var_date_example' # str | Request date (optional)
    page = 'page_example' # str | Search page to request (optional)
    limit = 50 # int | Results per page (optional) (default to 50)

    try:
        # Get deleted domains, latest if date not specified
        api_response = api_instance.domains_updates_deleted_get(api_key=api_key, var_date=var_date, page=page, limit=limit)
        print("The response of DomainsApi->domains_updates_deleted_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_updates_deleted_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| API key | [optional] 
 **var_date** | **str**| Request date | [optional] 
 **page** | **str**| Search page to request | [optional] 
 **limit** | **int**| Results per page | [optional] [default to 50]

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | No api_key or it&#39;s not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_updates_list_get**
> UpdateModel domains_updates_list_get(api_key=api_key)

List of updates

### Example


```python
import openapi_client
from openapi_client.models.update_model import UpdateModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    api_key = 'api_key_example' # str | API key (optional)

    try:
        # List of updates
        api_response = api_instance.domains_updates_list_get(api_key=api_key)
        print("The response of DomainsApi->domains_updates_list_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_updates_list_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| API key | [optional] 

### Return type

[**UpdateModel**](UpdateModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | No api_key or it&#39;s not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_search_domain_item**
> SearchResults get_search_domain_item(api_key=api_key, var_date=var_date, page=page, limit=limit, domain=domain, zone=zone, country=country, is_dead=is_dead, a=a, ns=ns, cname=cname, mx=mx, txt=txt)

Domains Database Search

### Example


```python
import openapi_client
from openapi_client.models.search_results import SearchResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    api_key = 'api_key_example' # str | API key (optional)
    var_date = 'var_date_example' # str | Request date (optional)
    page = 'page_example' # str | Search page to request (optional)
    limit = 50 # int | Results per page (optional) (default to 50)
    domain = 'domain_example' # str | Domain includes (optional)
    zone = 'zone_example' # str | In Zone (optional)
    country = 'country_example' # str | Hosting Country (optional)
    is_dead = True # bool | Dead or Not, default not (optional)
    a = 'a_example' # str | A record includes (optional)
    ns = 'ns_example' # str | NS record includes (optional)
    cname = 'cname_example' # str | CNAME record includes (optional)
    mx = 'mx_example' # str | MX record includes (optional)
    txt = 'txt_example' # str | TXT record includes (optional)

    try:
        # Domains Database Search
        api_response = api_instance.get_search_domain_item(api_key=api_key, var_date=var_date, page=page, limit=limit, domain=domain, zone=zone, country=country, is_dead=is_dead, a=a, ns=ns, cname=cname, mx=mx, txt=txt)
        print("The response of DomainsApi->get_search_domain_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_search_domain_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| API key | [optional] 
 **var_date** | **str**| Request date | [optional] 
 **page** | **str**| Search page to request | [optional] 
 **limit** | **int**| Results per page | [optional] [default to 50]
 **domain** | **str**| Domain includes | [optional] 
 **zone** | **str**| In Zone | [optional] 
 **country** | **str**| Hosting Country | [optional] 
 **is_dead** | **bool**| Dead or Not, default not | [optional] 
 **a** | **str**| A record includes | [optional] 
 **ns** | **str**| NS record includes | [optional] 
 **cname** | **str**| CNAME record includes | [optional] 
 **mx** | **str**| MX record includes | [optional] 
 **txt** | **str**| TXT record includes | [optional] 

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | api_key is not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tld_domain_item**
> SearchResults get_tld_domain_item(zone_id, api_key=api_key, var_date=var_date, page=page, limit=limit, domain=domain, country=country, is_dead=is_dead, a=a, ns=ns, cname=cname, mx=mx, txt=txt)

Get TLD records

### Example


```python
import openapi_client
from openapi_client.models.search_results import SearchResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    zone_id = 'zone_id_example' # str | 
    api_key = 'api_key_example' # str | API key (optional)
    var_date = 'var_date_example' # str | Request date (optional)
    page = 'page_example' # str | Search page to request (optional)
    limit = 50 # int | Results per page (optional) (default to 50)
    domain = 'domain_example' # str | Domain includes (optional)
    country = 'country_example' # str | Hosting Country (optional)
    is_dead = True # bool | Dead or Not, default not (optional)
    a = 'a_example' # str | A record includes (optional)
    ns = 'ns_example' # str | NS record includes (optional)
    cname = 'cname_example' # str | CNAME record includes (optional)
    mx = 'mx_example' # str | MX record includes (optional)
    txt = 'txt_example' # str | TXT record includes (optional)

    try:
        # Get TLD records
        api_response = api_instance.get_tld_domain_item(zone_id, api_key=api_key, var_date=var_date, page=page, limit=limit, domain=domain, country=country, is_dead=is_dead, a=a, ns=ns, cname=cname, mx=mx, txt=txt)
        print("The response of DomainsApi->get_tld_domain_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_tld_domain_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zone_id** | **str**|  | 
 **api_key** | **str**| API key | [optional] 
 **var_date** | **str**| Request date | [optional] 
 **page** | **str**| Search page to request | [optional] 
 **limit** | **int**| Results per page | [optional] [default to 50]
 **domain** | **str**| Domain includes | [optional] 
 **country** | **str**| Hosting Country | [optional] 
 **is_dead** | **bool**| Dead or Not, default not | [optional] 
 **a** | **str**| A record includes | [optional] 
 **ns** | **str**| NS record includes | [optional] 
 **cname** | **str**| CNAME record includes | [optional] 
 **mx** | **str**| MX record includes | [optional] 
 **txt** | **str**| TXT record includes | [optional] 

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | No api_key or it&#39;s not valid |  -  |
**404** | Results not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

