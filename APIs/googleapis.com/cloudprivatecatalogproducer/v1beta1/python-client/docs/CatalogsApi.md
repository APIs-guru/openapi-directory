# openapi_client.CatalogsApi

All URIs are relative to *https://cloudprivatecatalogproducer.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudprivatecatalogproducer_catalogs_associations_create**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_associations_create) | **POST** /v1beta1/{parent}/associations | 
[**cloudprivatecatalogproducer_catalogs_associations_list**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_associations_list) | **GET** /v1beta1/{parent}/associations | 
[**cloudprivatecatalogproducer_catalogs_create**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_create) | **POST** /v1beta1/catalogs | 
[**cloudprivatecatalogproducer_catalogs_get_iam_policy**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_get_iam_policy) | **GET** /v1beta1/{resource}:getIamPolicy | 
[**cloudprivatecatalogproducer_catalogs_list**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_list) | **GET** /v1beta1/catalogs | 
[**cloudprivatecatalogproducer_catalogs_products_copy**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_copy) | **POST** /v1beta1/{name}:copy | 
[**cloudprivatecatalogproducer_catalogs_products_create**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_create) | **POST** /v1beta1/{parent}/products | 
[**cloudprivatecatalogproducer_catalogs_products_icons_upload**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_icons_upload) | **POST** /v1beta1/{product}/icons:upload | 
[**cloudprivatecatalogproducer_catalogs_products_list**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_list) | **GET** /v1beta1/{parent}/products | 
[**cloudprivatecatalogproducer_catalogs_products_versions_create**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_versions_create) | **POST** /v1beta1/{parent}/versions | 
[**cloudprivatecatalogproducer_catalogs_products_versions_delete**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_versions_delete) | **DELETE** /v1beta1/{name} | 
[**cloudprivatecatalogproducer_catalogs_products_versions_get**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_versions_get) | **GET** /v1beta1/{name} | 
[**cloudprivatecatalogproducer_catalogs_products_versions_list**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_versions_list) | **GET** /v1beta1/{parent}/versions | 
[**cloudprivatecatalogproducer_catalogs_products_versions_patch**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_products_versions_patch) | **PATCH** /v1beta1/{name} | 
[**cloudprivatecatalogproducer_catalogs_set_iam_policy**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_set_iam_policy) | **POST** /v1beta1/{resource}:setIamPolicy | 
[**cloudprivatecatalogproducer_catalogs_test_iam_permissions**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_test_iam_permissions) | **POST** /v1beta1/{resource}:testIamPermissions | 
[**cloudprivatecatalogproducer_catalogs_undelete**](CatalogsApi.md#cloudprivatecatalogproducer_catalogs_undelete) | **POST** /v1beta1/{name}:undelete | 


# **cloudprivatecatalogproducer_catalogs_associations_create**
> GoogleCloudPrivatecatalogproducerV1beta1Association cloudprivatecatalogproducer_catalogs_associations_create(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_create_association_request=google_cloud_privatecatalogproducer_v1beta1_create_association_request)



Creates an Association instance under a given Catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_association import GoogleCloudPrivatecatalogproducerV1beta1Association
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_create_association_request import GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    parent = 'parent_example' # str | The `Catalog` resource's name.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    google_cloud_privatecatalogproducer_v1beta1_create_association_request = openapi_client.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest() # GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_associations_create(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_create_association_request=google_cloud_privatecatalogproducer_v1beta1_create_association_request)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_associations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_associations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The &#x60;Catalog&#x60; resource&#39;s name. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **google_cloud_privatecatalogproducer_v1beta1_create_association_request** | [**GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest**](GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest.md)|  | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1Association**](GoogleCloudPrivatecatalogproducerV1beta1Association.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_associations_list**
> GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse cloudprivatecatalogproducer_catalogs_associations_list(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, page_size=page_size, page_token=page_token)



Lists all Association resources under a catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_list_associations_response import GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    parent = 'parent_example' # str | The resource name of the `Catalog` whose `Associations` are being retrieved. In the format `catalogs/<catalog>`.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    page_size = 56 # int | The maximum number of catalog associations to return. (optional)
    page_token = 'page_token_example' # str | A pagination token returned from the previous call to `ListAssociations`. (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_associations_list(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, page_size=page_size, page_token=page_token)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_associations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_associations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The resource name of the &#x60;Catalog&#x60; whose &#x60;Associations&#x60; are being retrieved. In the format &#x60;catalogs/&lt;catalog&gt;&#x60;. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **page_size** | **int**| The maximum number of catalog associations to return. | [optional] 
 **page_token** | **str**| A pagination token returned from the previous call to &#x60;ListAssociations&#x60;. | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse**](GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse.md)

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

# **cloudprivatecatalogproducer_catalogs_create**
> GoogleLongrunningOperation cloudprivatecatalogproducer_catalogs_create(alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_catalog=google_cloud_privatecatalogproducer_v1beta1_catalog)



Creates a new Catalog resource.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_catalog import GoogleCloudPrivatecatalogproducerV1beta1Catalog
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    google_cloud_privatecatalogproducer_v1beta1_catalog = openapi_client.GoogleCloudPrivatecatalogproducerV1beta1Catalog() # GoogleCloudPrivatecatalogproducerV1beta1Catalog |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_create(alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_catalog=google_cloud_privatecatalogproducer_v1beta1_catalog)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **google_cloud_privatecatalogproducer_v1beta1_catalog** | [**GoogleCloudPrivatecatalogproducerV1beta1Catalog**](GoogleCloudPrivatecatalogproducerV1beta1Catalog.md)|  | [optional] 

### Return type

[**GoogleLongrunningOperation**](GoogleLongrunningOperation.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_get_iam_policy**
> GoogleIamV1Policy cloudprivatecatalogproducer_catalogs_get_iam_policy(resource, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, options_requested_policy_version=options_requested_policy_version)



Gets IAM policy for the specified Catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_iam_v1_policy import GoogleIamV1Policy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    resource = 'resource_example' # str | REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    options_requested_policy_version = 56 # int | Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_get_iam_policy(resource, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, options_requested_policy_version=options_requested_policy_version)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_get_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_get_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **options_requested_policy_version** | **int**| Optional. The policy format version to be returned.  Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.  Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. | [optional] 

### Return type

[**GoogleIamV1Policy**](GoogleIamV1Policy.md)

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

# **cloudprivatecatalogproducer_catalogs_list**
> GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse cloudprivatecatalogproducer_catalogs_list(alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, page_size=page_size, page_token=page_token, parent=parent)



Lists Catalog resources that the producer has access to, within the scope of the parent resource.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_list_catalogs_response import GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    page_size = 56 # int | The maximum number of catalogs to return. (optional)
    page_token = 'page_token_example' # str | A pagination token returned from a previous call to ListCatalogs that indicates where this listing should continue from. This field is optional. (optional)
    parent = 'parent_example' # str | The resource name of the parent resource. (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_list(alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, page_size=page_size, page_token=page_token, parent=parent)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **page_size** | **int**| The maximum number of catalogs to return. | [optional] 
 **page_token** | **str**| A pagination token returned from a previous call to ListCatalogs that indicates where this listing should continue from. This field is optional. | [optional] 
 **parent** | **str**| The resource name of the parent resource. | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse**](GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse.md)

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

# **cloudprivatecatalogproducer_catalogs_products_copy**
> GoogleLongrunningOperation cloudprivatecatalogproducer_catalogs_products_copy(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_copy_product_request=google_cloud_privatecatalogproducer_v1beta1_copy_product_request)



Copies a Product under another Catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_copy_product_request import GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    name = 'name_example' # str | The resource name of the current product that is copied from.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    google_cloud_privatecatalogproducer_v1beta1_copy_product_request = openapi_client.GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest() # GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_copy(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_copy_product_request=google_cloud_privatecatalogproducer_v1beta1_copy_product_request)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_copy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_copy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource name of the current product that is copied from. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **google_cloud_privatecatalogproducer_v1beta1_copy_product_request** | [**GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest**](GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest.md)|  | [optional] 

### Return type

[**GoogleLongrunningOperation**](GoogleLongrunningOperation.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_products_create**
> GoogleCloudPrivatecatalogproducerV1beta1Product cloudprivatecatalogproducer_catalogs_products_create(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_product=google_cloud_privatecatalogproducer_v1beta1_product)



Creates a Product instance under a given Catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_product import GoogleCloudPrivatecatalogproducerV1beta1Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    parent = 'parent_example' # str | The catalog name of the new product's parent.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    google_cloud_privatecatalogproducer_v1beta1_product = openapi_client.GoogleCloudPrivatecatalogproducerV1beta1Product() # GoogleCloudPrivatecatalogproducerV1beta1Product |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_create(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_product=google_cloud_privatecatalogproducer_v1beta1_product)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The catalog name of the new product&#39;s parent. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **google_cloud_privatecatalogproducer_v1beta1_product** | [**GoogleCloudPrivatecatalogproducerV1beta1Product**](GoogleCloudPrivatecatalogproducerV1beta1Product.md)|  | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1Product**](GoogleCloudPrivatecatalogproducerV1beta1Product.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_products_icons_upload**
> object cloudprivatecatalogproducer_catalogs_products_icons_upload(product, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_upload_icon_request=google_cloud_privatecatalogproducer_v1beta1_upload_icon_request)



Creates an Icon instance under a given Product. If Product only has a default icon, a new Icon instance is created and associated with the given Product. If Product already has a non-default icon, the action creates a new Icon instance, associates the newly created Icon with the given Product and deletes the old icon.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_upload_icon_request import GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    product = 'product_example' # str | The resource name of the product.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    google_cloud_privatecatalogproducer_v1beta1_upload_icon_request = openapi_client.GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest() # GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_icons_upload(product, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_upload_icon_request=google_cloud_privatecatalogproducer_v1beta1_upload_icon_request)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_icons_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_icons_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **str**| The resource name of the product. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **google_cloud_privatecatalogproducer_v1beta1_upload_icon_request** | [**GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest**](GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_products_list**
> GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse cloudprivatecatalogproducer_catalogs_products_list(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, filter=filter, page_size=page_size, page_token=page_token)



Lists Product resources that the producer has access to, within the scope of the parent catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_list_products_response import GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    parent = 'parent_example' # str | The resource name of the parent resource.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    filter = 'filter_example' # str | A filter expression used to restrict the returned results based upon properties of the product. (optional)
    page_size = 56 # int | The maximum number of products to return. (optional)
    page_token = 'page_token_example' # str | A pagination token returned from a previous call to ListProducts that indicates where this listing should continue from. This field is optional. (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_list(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, filter=filter, page_size=page_size, page_token=page_token)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The resource name of the parent resource. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **filter** | **str**| A filter expression used to restrict the returned results based upon properties of the product. | [optional] 
 **page_size** | **int**| The maximum number of products to return. | [optional] 
 **page_token** | **str**| A pagination token returned from a previous call to ListProducts that indicates where this listing should continue from. This field is optional. | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse**](GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse.md)

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

# **cloudprivatecatalogproducer_catalogs_products_versions_create**
> GoogleLongrunningOperation cloudprivatecatalogproducer_catalogs_products_versions_create(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_version=google_cloud_privatecatalogproducer_v1beta1_version)



Creates a Version instance under a given Product.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_version import GoogleCloudPrivatecatalogproducerV1beta1Version
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    parent = 'parent_example' # str | The product name of the new version's parent.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    google_cloud_privatecatalogproducer_v1beta1_version = openapi_client.GoogleCloudPrivatecatalogproducerV1beta1Version() # GoogleCloudPrivatecatalogproducerV1beta1Version |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_versions_create(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_cloud_privatecatalogproducer_v1beta1_version=google_cloud_privatecatalogproducer_v1beta1_version)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The product name of the new version&#39;s parent. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **google_cloud_privatecatalogproducer_v1beta1_version** | [**GoogleCloudPrivatecatalogproducerV1beta1Version**](GoogleCloudPrivatecatalogproducerV1beta1Version.md)|  | [optional] 

### Return type

[**GoogleLongrunningOperation**](GoogleLongrunningOperation.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_products_versions_delete**
> object cloudprivatecatalogproducer_catalogs_products_versions_delete(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, force=force)



Hard deletes a Version.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    name = 'name_example' # str | The resource name of the version.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    force = True # bool | Forces deletion of the `Catalog` and its `Association` resources. If the `Catalog` is still associated with other resources and force is not set to true, then the operation fails. (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_versions_delete(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, force=force)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource name of the version. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **force** | **bool**| Forces deletion of the &#x60;Catalog&#x60; and its &#x60;Association&#x60; resources. If the &#x60;Catalog&#x60; is still associated with other resources and force is not set to true, then the operation fails. | [optional] 

### Return type

**object**

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

# **cloudprivatecatalogproducer_catalogs_products_versions_get**
> GoogleCloudPrivatecatalogproducerV1beta1Version cloudprivatecatalogproducer_catalogs_products_versions_get(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback)



Returns the requested Version resource.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_version import GoogleCloudPrivatecatalogproducerV1beta1Version
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    name = 'name_example' # str | The resource name of the version.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_versions_get(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource name of the version. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1Version**](GoogleCloudPrivatecatalogproducerV1beta1Version.md)

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

# **cloudprivatecatalogproducer_catalogs_products_versions_list**
> GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse cloudprivatecatalogproducer_catalogs_products_versions_list(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, page_size=page_size, page_token=page_token)



Lists Version resources that the producer has access to, within the scope of the parent Product.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_list_versions_response import GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    parent = 'parent_example' # str | The resource name of the parent resource.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    page_size = 56 # int | The maximum number of versions to return. (optional)
    page_token = 'page_token_example' # str | A pagination token returned from a previous call to ListVersions that indicates where this listing should continue from. This field is optional. (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_versions_list(parent, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, page_size=page_size, page_token=page_token)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| The resource name of the parent resource. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **page_size** | **int**| The maximum number of versions to return. | [optional] 
 **page_token** | **str**| A pagination token returned from a previous call to ListVersions that indicates where this listing should continue from. This field is optional. | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse**](GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse.md)

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

# **cloudprivatecatalogproducer_catalogs_products_versions_patch**
> GoogleCloudPrivatecatalogproducerV1beta1Version cloudprivatecatalogproducer_catalogs_products_versions_patch(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, update_mask=update_mask, google_cloud_privatecatalogproducer_v1beta1_version=google_cloud_privatecatalogproducer_v1beta1_version)



Updates a specific Version resource.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_version import GoogleCloudPrivatecatalogproducerV1beta1Version
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    name = 'name_example' # str | Required. The resource name of the version, in the format `catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.  A unique identifier for the version under a product, which can't be changed after the version is created. The final segment of the name must between 1 and 63 characters in length.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    update_mask = 'update_mask_example' # str | Field mask that controls which fields of the version should be updated. (optional)
    google_cloud_privatecatalogproducer_v1beta1_version = openapi_client.GoogleCloudPrivatecatalogproducerV1beta1Version() # GoogleCloudPrivatecatalogproducerV1beta1Version |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_products_versions_patch(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, update_mask=update_mask, google_cloud_privatecatalogproducer_v1beta1_version=google_cloud_privatecatalogproducer_v1beta1_version)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_products_versions_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The resource name of the version, in the format &#x60;catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]&#39;.  A unique identifier for the version under a product, which can&#39;t be changed after the version is created. The final segment of the name must between 1 and 63 characters in length. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **update_mask** | **str**| Field mask that controls which fields of the version should be updated. | [optional] 
 **google_cloud_privatecatalogproducer_v1beta1_version** | [**GoogleCloudPrivatecatalogproducerV1beta1Version**](GoogleCloudPrivatecatalogproducerV1beta1Version.md)|  | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1Version**](GoogleCloudPrivatecatalogproducerV1beta1Version.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_set_iam_policy**
> GoogleIamV1Policy cloudprivatecatalogproducer_catalogs_set_iam_policy(resource, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_iam_v1_set_iam_policy_request=google_iam_v1_set_iam_policy_request)



Sets the IAM policy for the specified Catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_iam_v1_policy import GoogleIamV1Policy
from openapi_client.models.google_iam_v1_set_iam_policy_request import GoogleIamV1SetIamPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    resource = 'resource_example' # str | REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    google_iam_v1_set_iam_policy_request = openapi_client.GoogleIamV1SetIamPolicyRequest() # GoogleIamV1SetIamPolicyRequest |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_set_iam_policy(resource, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_iam_v1_set_iam_policy_request=google_iam_v1_set_iam_policy_request)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_set_iam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_set_iam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **google_iam_v1_set_iam_policy_request** | [**GoogleIamV1SetIamPolicyRequest**](GoogleIamV1SetIamPolicyRequest.md)|  | [optional] 

### Return type

[**GoogleIamV1Policy**](GoogleIamV1Policy.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_test_iam_permissions**
> GoogleIamV1TestIamPermissionsResponse cloudprivatecatalogproducer_catalogs_test_iam_permissions(resource, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_iam_v1_test_iam_permissions_request=google_iam_v1_test_iam_permissions_request)



Tests the IAM permissions for the specified Catalog.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_iam_v1_test_iam_permissions_request import GoogleIamV1TestIamPermissionsRequest
from openapi_client.models.google_iam_v1_test_iam_permissions_response import GoogleIamV1TestIamPermissionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    resource = 'resource_example' # str | REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    google_iam_v1_test_iam_permissions_request = openapi_client.GoogleIamV1TestIamPermissionsRequest() # GoogleIamV1TestIamPermissionsRequest |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_test_iam_permissions(resource, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, google_iam_v1_test_iam_permissions_request=google_iam_v1_test_iam_permissions_request)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_test_iam_permissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_test_iam_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource** | **str**| REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **google_iam_v1_test_iam_permissions_request** | [**GoogleIamV1TestIamPermissionsRequest**](GoogleIamV1TestIamPermissionsRequest.md)|  | [optional] 

### Return type

[**GoogleIamV1TestIamPermissionsResponse**](GoogleIamV1TestIamPermissionsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudprivatecatalogproducer_catalogs_undelete**
> GoogleCloudPrivatecatalogproducerV1beta1Catalog cloudprivatecatalogproducer_catalogs_undelete(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, body=body)



Undeletes a deleted Catalog and all resources under it.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_catalog import GoogleCloudPrivatecatalogproducerV1beta1Catalog
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudprivatecatalogproducer.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudprivatecatalogproducer.googleapis.com"
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
    api_instance = openapi_client.CatalogsApi(api_client)
    name = 'name_example' # str | The resource name of the catalog.
    alt = json # str | Data format for response. (optional) (default to json)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional) (default to True)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    body = None # object |  (optional)

    try:
        api_response = api_instance.cloudprivatecatalogproducer_catalogs_undelete(name, alt=alt, key=key, access_token=access_token, upload_protocol=upload_protocol, pretty_print=pretty_print, quota_user=quota_user, fields=fields, upload_type=upload_type, xgafv=xgafv, oauth_token=oauth_token, param_callback=param_callback, body=body)
        print("The response of CatalogsApi->cloudprivatecatalogproducer_catalogs_undelete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CatalogsApi->cloudprivatecatalogproducer_catalogs_undelete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource name of the catalog. | 
 **alt** | **str**| Data format for response. | [optional] [default to json]
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to True]
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **xgafv** | **str**| V1 error format. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **body** | **object**|  | [optional] 

### Return type

[**GoogleCloudPrivatecatalogproducerV1beta1Catalog**](GoogleCloudPrivatecatalogproducerV1beta1Catalog.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

