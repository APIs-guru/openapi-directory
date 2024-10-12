# openapi_client.ProductPolicyApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_policy_create_or_update**](ProductPolicyApi.md#product_policy_create_or_update) | **PUT** /products/{productId}/policies/{policyId} | 
[**product_policy_delete**](ProductPolicyApi.md#product_policy_delete) | **DELETE** /products/{productId}/policies/{policyId} | 
[**product_policy_get**](ProductPolicyApi.md#product_policy_get) | **GET** /products/{productId}/policies/{policyId} | 
[**product_policy_list_by_product**](ProductPolicyApi.md#product_policy_list_by_product) | **GET** /products/{productId}/policies | 


# **product_policy_create_or_update**
> ProductPolicyListByProduct200ResponseValueInner product_policy_create_or_update(product_id, policy_id, api_version, parameters)



Creates or updates policy configuration for the Product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_policy_list_by_product200_response_value_inner import ProductPolicyListByProduct200ResponseValueInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductPolicyApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    policy_id = 'policy_id_example' # str | The identifier of the Policy.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.ProductPolicyListByProduct200ResponseValueInner() # ProductPolicyListByProduct200ResponseValueInner | The policy contents to apply.

    try:
        api_response = api_instance.product_policy_create_or_update(product_id, policy_id, api_version, parameters)
        print("The response of ProductPolicyApi->product_policy_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductPolicyApi->product_policy_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **policy_id** | **str**| The identifier of the Policy. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**ProductPolicyListByProduct200ResponseValueInner**](ProductPolicyListByProduct200ResponseValueInner.md)| The policy contents to apply. | 

### Return type

[**ProductPolicyListByProduct200ResponseValueInner**](ProductPolicyListByProduct200ResponseValueInner.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json, application/vnd.ms-azure-apim.policy+xml, application/vnd.ms-azure-apim.policy.raw+xml
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product policy configuration of the tenant was successfully updated. |  -  |
**201** | Product policy configuration was successfully created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_policy_delete**
> product_policy_delete(product_id, policy_id, if_match, api_version)



Deletes the policy configuration at the Product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductPolicyApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    policy_id = 'policy_id_example' # str | The identifier of the Policy.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the product policy to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.product_policy_delete(product_id, policy_id, if_match, api_version)
    except Exception as e:
        print("Exception when calling ProductPolicyApi->product_policy_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **policy_id** | **str**| The identifier of the Policy. | 
 **if_match** | **str**| The entity state (Etag) version of the product policy to update. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully deleted the policy configuration at the Product level. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_policy_get**
> ProductPolicyListByProduct200ResponseValueInner product_policy_get(api_version, product_id, policy_id)



Get the policy configuration at the Product level.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_policy_list_by_product200_response_value_inner import ProductPolicyListByProduct200ResponseValueInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductPolicyApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    policy_id = 'policy_id_example' # str | The identifier of the Policy.

    try:
        api_response = api_instance.product_policy_get(api_version, product_id, policy_id)
        print("The response of ProductPolicyApi->product_policy_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductPolicyApi->product_policy_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **policy_id** | **str**| The identifier of the Policy. | 

### Return type

[**ProductPolicyListByProduct200ResponseValueInner**](ProductPolicyListByProduct200ResponseValueInner.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/vnd.ms-azure-apim.policy+xml, application/vnd.ms-azure-apim.policy.raw+xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product Policy information. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_policy_list_by_product**
> ProductPolicyListByProduct200Response product_policy_list_by_product(api_version, product_id)



Get the policy configuration at the Product level.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_policy_list_by_product200_response import ProductPolicyListByProduct200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductPolicyApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.

    try:
        api_response = api_instance.product_policy_list_by_product(api_version, product_id)
        print("The response of ProductPolicyApi->product_policy_list_by_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductPolicyApi->product_policy_list_by_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 

### Return type

[**ProductPolicyListByProduct200Response**](ProductPolicyListByProduct200Response.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Product Policy information. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

