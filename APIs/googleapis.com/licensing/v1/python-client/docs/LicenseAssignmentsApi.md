# openapi_client.LicenseAssignmentsApi

All URIs are relative to *https://licensing.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**licensing_license_assignments_delete**](LicenseAssignmentsApi.md#licensing_license_assignments_delete) | **DELETE** /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId} | 
[**licensing_license_assignments_get**](LicenseAssignmentsApi.md#licensing_license_assignments_get) | **GET** /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId} | 
[**licensing_license_assignments_insert**](LicenseAssignmentsApi.md#licensing_license_assignments_insert) | **POST** /apps/licensing/v1/product/{productId}/sku/{skuId}/user | 
[**licensing_license_assignments_list_for_product**](LicenseAssignmentsApi.md#licensing_license_assignments_list_for_product) | **GET** /apps/licensing/v1/product/{productId}/users | 
[**licensing_license_assignments_list_for_product_and_sku**](LicenseAssignmentsApi.md#licensing_license_assignments_list_for_product_and_sku) | **GET** /apps/licensing/v1/product/{productId}/sku/{skuId}/users | 
[**licensing_license_assignments_patch**](LicenseAssignmentsApi.md#licensing_license_assignments_patch) | **PATCH** /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId} | 
[**licensing_license_assignments_update**](LicenseAssignmentsApi.md#licensing_license_assignments_update) | **PUT** /apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId} | 


# **licensing_license_assignments_delete**
> object licensing_license_assignments_delete(product_id, sku_id, user_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Revoke a license.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://licensing.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://licensing.googleapis.com"
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
    api_instance = openapi_client.LicenseAssignmentsApi(api_client)
    product_id = 'product_id_example' # str | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
    sku_id = 'sku_id_example' # str | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
    user_id = 'user_id_example' # str | The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)

    try:
        api_response = api_instance.licensing_license_assignments_delete(product_id, sku_id, user_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of LicenseAssignmentsApi->licensing_license_assignments_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseAssignmentsApi->licensing_license_assignments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| A product&#39;s unique identifier. For more information about products in this version of the API, see Products and SKUs. | 
 **sku_id** | **str**| A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. | 
 **user_id** | **str**| The user&#39;s current primary email address. If the user&#39;s email address changes, use the new email address in your API requests. Since a &#x60;userId&#x60; is subject to change, do not use a &#x60;userId&#x60; value as a key for persistent data. This key could break if the current user&#39;s email address changes. If the &#x60;userId&#x60; is suspended, the license status changes. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 

### Return type

**object**

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensing_license_assignments_get**
> LicenseAssignment licensing_license_assignments_get(product_id, sku_id, user_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Get a specific user's license by product SKU.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.license_assignment import LicenseAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://licensing.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://licensing.googleapis.com"
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
    api_instance = openapi_client.LicenseAssignmentsApi(api_client)
    product_id = 'product_id_example' # str | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
    sku_id = 'sku_id_example' # str | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
    user_id = 'user_id_example' # str | The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)

    try:
        api_response = api_instance.licensing_license_assignments_get(product_id, sku_id, user_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of LicenseAssignmentsApi->licensing_license_assignments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseAssignmentsApi->licensing_license_assignments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| A product&#39;s unique identifier. For more information about products in this version of the API, see Products and SKUs. | 
 **sku_id** | **str**| A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. | 
 **user_id** | **str**| The user&#39;s current primary email address. If the user&#39;s email address changes, use the new email address in your API requests. Since a &#x60;userId&#x60; is subject to change, do not use a &#x60;userId&#x60; value as a key for persistent data. This key could break if the current user&#39;s email address changes. If the &#x60;userId&#x60; is suspended, the license status changes. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 

### Return type

[**LicenseAssignment**](LicenseAssignment.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensing_license_assignments_insert**
> LicenseAssignment licensing_license_assignments_insert(product_id, sku_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, license_assignment_insert=license_assignment_insert)



Assign a license.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.license_assignment import LicenseAssignment
from openapi_client.models.license_assignment_insert import LicenseAssignmentInsert
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://licensing.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://licensing.googleapis.com"
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
    api_instance = openapi_client.LicenseAssignmentsApi(api_client)
    product_id = 'product_id_example' # str | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
    sku_id = 'sku_id_example' # str | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    license_assignment_insert = openapi_client.LicenseAssignmentInsert() # LicenseAssignmentInsert |  (optional)

    try:
        api_response = api_instance.licensing_license_assignments_insert(product_id, sku_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, license_assignment_insert=license_assignment_insert)
        print("The response of LicenseAssignmentsApi->licensing_license_assignments_insert:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseAssignmentsApi->licensing_license_assignments_insert: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| A product&#39;s unique identifier. For more information about products in this version of the API, see Products and SKUs. | 
 **sku_id** | **str**| A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **license_assignment_insert** | [**LicenseAssignmentInsert**](LicenseAssignmentInsert.md)|  | [optional] 

### Return type

[**LicenseAssignment**](LicenseAssignment.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensing_license_assignments_list_for_product**
> LicenseAssignmentList licensing_license_assignments_list_for_product(product_id, customer_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_results=max_results, page_token=page_token)



List all users assigned licenses for a specific product SKU.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.license_assignment_list import LicenseAssignmentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://licensing.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://licensing.googleapis.com"
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
    api_instance = openapi_client.LicenseAssignmentsApi(api_client)
    product_id = 'product_id_example' # str | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
    customer_id = 'customer_id_example' # str | The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    max_results = 56 # int | The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. (optional)
    page_token = 'page_token_example' # str | Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page. (optional)

    try:
        api_response = api_instance.licensing_license_assignments_list_for_product(product_id, customer_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_results=max_results, page_token=page_token)
        print("The response of LicenseAssignmentsApi->licensing_license_assignments_list_for_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseAssignmentsApi->licensing_license_assignments_list_for_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| A product&#39;s unique identifier. For more information about products in this version of the API, see Products and SKUs. | 
 **customer_id** | **str**| The customer&#39;s unique ID as defined in the Admin console, such as &#x60;C00000000&#x60;. If the customer is suspended, the server returns an error. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **max_results** | **int**| The &#x60;maxResults&#x60; query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. | [optional] 
 **page_token** | **str**| Token to fetch the next page of data. The &#x60;maxResults&#x60; query string is related to the &#x60;pageToken&#x60; since &#x60;maxResults&#x60; determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page. | [optional] 

### Return type

[**LicenseAssignmentList**](LicenseAssignmentList.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensing_license_assignments_list_for_product_and_sku**
> LicenseAssignmentList licensing_license_assignments_list_for_product_and_sku(product_id, sku_id, customer_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_results=max_results, page_token=page_token)



List all users assigned licenses for a specific product SKU.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.license_assignment_list import LicenseAssignmentList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://licensing.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://licensing.googleapis.com"
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
    api_instance = openapi_client.LicenseAssignmentsApi(api_client)
    product_id = 'product_id_example' # str | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
    sku_id = 'sku_id_example' # str | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
    customer_id = 'customer_id_example' # str | The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    max_results = 56 # int | The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. (optional)
    page_token = 'page_token_example' # str | Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page. (optional)

    try:
        api_response = api_instance.licensing_license_assignments_list_for_product_and_sku(product_id, sku_id, customer_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, max_results=max_results, page_token=page_token)
        print("The response of LicenseAssignmentsApi->licensing_license_assignments_list_for_product_and_sku:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseAssignmentsApi->licensing_license_assignments_list_for_product_and_sku: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| A product&#39;s unique identifier. For more information about products in this version of the API, see Products and SKUs. | 
 **sku_id** | **str**| A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. | 
 **customer_id** | **str**| The customer&#39;s unique ID as defined in the Admin console, such as &#x60;C00000000&#x60;. If the customer is suspended, the server returns an error. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **max_results** | **int**| The &#x60;maxResults&#x60; query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. | [optional] 
 **page_token** | **str**| Token to fetch the next page of data. The &#x60;maxResults&#x60; query string is related to the &#x60;pageToken&#x60; since &#x60;maxResults&#x60; determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page. | [optional] 

### Return type

[**LicenseAssignmentList**](LicenseAssignmentList.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensing_license_assignments_patch**
> LicenseAssignment licensing_license_assignments_patch(product_id, sku_id, user_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, license_assignment=license_assignment)



Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.license_assignment import LicenseAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://licensing.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://licensing.googleapis.com"
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
    api_instance = openapi_client.LicenseAssignmentsApi(api_client)
    product_id = 'product_id_example' # str | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
    sku_id = 'sku_id_example' # str | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
    user_id = 'user_id_example' # str | The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    license_assignment = openapi_client.LicenseAssignment() # LicenseAssignment |  (optional)

    try:
        api_response = api_instance.licensing_license_assignments_patch(product_id, sku_id, user_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, license_assignment=license_assignment)
        print("The response of LicenseAssignmentsApi->licensing_license_assignments_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseAssignmentsApi->licensing_license_assignments_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| A product&#39;s unique identifier. For more information about products in this version of the API, see Products and SKUs. | 
 **sku_id** | **str**| A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. | 
 **user_id** | **str**| The user&#39;s current primary email address. If the user&#39;s email address changes, use the new email address in your API requests. Since a &#x60;userId&#x60; is subject to change, do not use a &#x60;userId&#x60; value as a key for persistent data. This key could break if the current user&#39;s email address changes. If the &#x60;userId&#x60; is suspended, the license status changes. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **license_assignment** | [**LicenseAssignment**](LicenseAssignment.md)|  | [optional] 

### Return type

[**LicenseAssignment**](LicenseAssignment.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensing_license_assignments_update**
> LicenseAssignment licensing_license_assignments_update(product_id, sku_id, user_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, license_assignment=license_assignment)



Reassign a user's product SKU with a different SKU in the same product.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.license_assignment import LicenseAssignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://licensing.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://licensing.googleapis.com"
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
    api_instance = openapi_client.LicenseAssignmentsApi(api_client)
    product_id = 'product_id_example' # str | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
    sku_id = 'sku_id_example' # str | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
    user_id = 'user_id_example' # str | The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    license_assignment = openapi_client.LicenseAssignment() # LicenseAssignment |  (optional)

    try:
        api_response = api_instance.licensing_license_assignments_update(product_id, sku_id, user_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, license_assignment=license_assignment)
        print("The response of LicenseAssignmentsApi->licensing_license_assignments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseAssignmentsApi->licensing_license_assignments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| A product&#39;s unique identifier. For more information about products in this version of the API, see Products and SKUs. | 
 **sku_id** | **str**| A product SKU&#39;s unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. | 
 **user_id** | **str**| The user&#39;s current primary email address. If the user&#39;s email address changes, use the new email address in your API requests. Since a &#x60;userId&#x60; is subject to change, do not use a &#x60;userId&#x60; value as a key for persistent data. This key could break if the current user&#39;s email address changes. If the &#x60;userId&#x60; is suspended, the license status changes. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **license_assignment** | [**LicenseAssignment**](LicenseAssignment.md)|  | [optional] 

### Return type

[**LicenseAssignment**](LicenseAssignment.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

