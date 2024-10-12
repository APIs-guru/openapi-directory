# openapi_client.OrganizationsApi

All URIs are relative to *https://cloudprivatecatalog.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudprivatecatalog_organizations_catalogs_search**](OrganizationsApi.md#cloudprivatecatalog_organizations_catalogs_search) | **GET** /v1beta1/{resource}/catalogs:search | 
[**cloudprivatecatalog_organizations_products_search**](OrganizationsApi.md#cloudprivatecatalog_organizations_products_search) | **GET** /v1beta1/{resource}/products:search | 
[**cloudprivatecatalog_organizations_versions_search**](OrganizationsApi.md#cloudprivatecatalog_organizations_versions_search) | **GET** /v1beta1/{resource}/versions:search | 


# **cloudprivatecatalog_organizations_catalogs_search**
> GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse cloudprivatecatalog_organizations_catalogs_search(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, page_size=page_size, page_token=page_token, query=query)



Search Catalog resources that consumers have access to, within the scope of the consumer cloud resource hierarchy context.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalog_v1beta1_search_catalogs_response import GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalog.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalog.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    resource = 'resource_example' # str | Required. The name of the resource context. It can be in following formats:  * `projects/{project_id}` * `folders/{folder_id}` * `organizations/{organization_id}`
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    page_size = 56 # int | The maximum number of entries that are requested. (optional)
    page_token = 'page_token_example' # str | A pagination token returned from a previous call to SearchCatalogs that indicates where this listing should continue from. This field is optional. (optional)
    query = 'query_example' # str | The query to filter the catalogs. The supported queries are:  * Get a single catalog: `name=catalogs/{catalog_id}` (optional)

    try:
        api_response = api_instance.cloudprivatecatalog_organizations_catalogs_search(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, page_size=page_size, page_token=page_token, query=query)
        print("The response of OrganizationsApi->cloudprivatecatalog_organizations_catalogs_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->cloudprivatecatalog_organizations_catalogs_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| Required. The name of the resource context. It can be in following formats:  * &#x60;projects/{project_id}&#x60; * &#x60;folders/{folder_id}&#x60; * &#x60;organizations/{organization_id}&#x60; | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **page_size** | **int**| The maximum number of entries that are requested. | [optional] 
 **page_token** | **str**| A pagination token returned from a previous call to SearchCatalogs that indicates where this listing should continue from. This field is optional. | [optional] 
 **query** | **str**| The query to filter the catalogs. The supported queries are:  * Get a single catalog: &#x60;name&#x3D;catalogs/{catalog_id}&#x60; | [optional] 

### Return type

[**GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse**](GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalog_organizations_products_search**
> GoogleCloudPrivatecatalogV1beta1SearchProductsResponse cloudprivatecatalog_organizations_products_search(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, page_size=page_size, page_token=page_token, query=query)



Search Product resources that consumers have access to, within the scope of the consumer cloud resource hierarchy context.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalog_v1beta1_search_products_response import GoogleCloudPrivatecatalogV1beta1SearchProductsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalog.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalog.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    resource = 'resource_example' # str | Required. The name of the resource context. See SearchCatalogsRequest.resource for details.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    page_size = 56 # int | The maximum number of entries that are requested. (optional)
    page_token = 'page_token_example' # str | A pagination token returned from a previous call to SearchProducts that indicates where this listing should continue from. This field is optional. (optional)
    query = 'query_example' # str | The query to filter the products.  The supported queries are: * List products of all catalogs: empty * List products under a catalog: `parent=catalogs/{catalog_id}` * Get a product by name: `name=catalogs/{catalog_id}/products/{product_id}` (optional)

    try:
        api_response = api_instance.cloudprivatecatalog_organizations_products_search(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, page_size=page_size, page_token=page_token, query=query)
        print("The response of OrganizationsApi->cloudprivatecatalog_organizations_products_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->cloudprivatecatalog_organizations_products_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| Required. The name of the resource context. See SearchCatalogsRequest.resource for details. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **page_size** | **int**| The maximum number of entries that are requested. | [optional] 
 **page_token** | **str**| A pagination token returned from a previous call to SearchProducts that indicates where this listing should continue from. This field is optional. | [optional] 
 **query** | **str**| The query to filter the products.  The supported queries are: * List products of all catalogs: empty * List products under a catalog: &#x60;parent&#x3D;catalogs/{catalog_id}&#x60; * Get a product by name: &#x60;name&#x3D;catalogs/{catalog_id}/products/{product_id}&#x60; | [optional] 

### Return type

[**GoogleCloudPrivatecatalogV1beta1SearchProductsResponse**](GoogleCloudPrivatecatalogV1beta1SearchProductsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalog_organizations_versions_search**
> GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse cloudprivatecatalog_organizations_versions_search(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, page_size=page_size, page_token=page_token, query=query)



Search Version resources that consumers have access to, within the scope of the consumer cloud resource hierarchy context.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalog_v1beta1_search_versions_response import GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalog.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalog.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    resource = 'resource_example' # str | Required. The name of the resource context. See SearchCatalogsRequest.resource for details.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    page_size = 56 # int | The maximum number of entries that are requested. (optional)
    page_token = 'page_token_example' # str | A pagination token returned from a previous call to SearchVersions that indicates where this listing should continue from. This field is optional. (optional)
    query = 'query_example' # str | The query to filter the versions. Required.  The supported queries are: * List versions under a product: `parent=catalogs/{catalog_id}/products/{product_id}` * Get a version by name: `name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}` (optional)

    try:
        api_response = api_instance.cloudprivatecatalog_organizations_versions_search(resource, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, page_size=page_size, page_token=page_token, query=query)
        print("The response of OrganizationsApi->cloudprivatecatalog_organizations_versions_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->cloudprivatecatalog_organizations_versions_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| Required. The name of the resource context. See SearchCatalogsRequest.resource for details. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **page_size** | **int**| The maximum number of entries that are requested. | [optional] 
 **page_token** | **str**| A pagination token returned from a previous call to SearchVersions that indicates where this listing should continue from. This field is optional. | [optional] 
 **query** | **str**| The query to filter the versions. Required.  The supported queries are: * List versions under a product: &#x60;parent&#x3D;catalogs/{catalog_id}/products/{product_id}&#x60; * Get a version by name: &#x60;name&#x3D;catalogs/{catalog_id}/products/{product_id}/versions/{version_id}&#x60; | [optional] 

### Return type

[**GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse**](GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

