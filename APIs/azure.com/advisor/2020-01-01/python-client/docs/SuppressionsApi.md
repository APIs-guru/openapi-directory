# openapi_client.SuppressionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suppressions_create**](SuppressionsApi.md#suppressions_create) | **PUT** /{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name} | 
[**suppressions_delete**](SuppressionsApi.md#suppressions_delete) | **DELETE** /{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name} | 
[**suppressions_get**](SuppressionsApi.md#suppressions_get) | **GET** /{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId}/suppressions/{name} | 
[**suppressions_list**](SuppressionsApi.md#suppressions_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Advisor/suppressions | 


# **suppressions_create**
> SuppressionContract suppressions_create(resource_uri, recommendation_id, name, api_version, suppression_contract)



Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of a recommendation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.suppression_contract import SuppressionContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SuppressionsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
    recommendation_id = 'recommendation_id_example' # str | The recommendation ID.
    name = 'name_example' # str | The name of the suppression.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    suppression_contract = openapi_client.SuppressionContract() # SuppressionContract | The snoozed or dismissed attribute; for example, the snooze duration.

    try:
        api_response = api_instance.suppressions_create(resource_uri, recommendation_id, name, api_version, suppression_contract)
        print("The response of SuppressionsApi->suppressions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SuppressionsApi->suppressions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies. | 
 **recommendation_id** | **str**| The recommendation ID. | 
 **name** | **str**| The name of the suppression. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **suppression_contract** | [**SuppressionContract**](SuppressionContract.md)| The snoozed or dismissed attribute; for example, the snooze duration. | 

### Return type

[**SuppressionContract**](SuppressionContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully created suppression. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suppressions_delete**
> suppressions_delete(resource_uri, recommendation_id, name, api_version)



Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SuppressionsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
    recommendation_id = 'recommendation_id_example' # str | The recommendation ID.
    name = 'name_example' # str | The name of the suppression.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_instance.suppressions_delete(resource_uri, recommendation_id, name, api_version)
    except Exception as e:
        print("Exception when calling SuppressionsApi->suppressions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies. | 
 **recommendation_id** | **str**| The recommendation ID. | 
 **name** | **str**| The name of the suppression. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | NoContent. The recommendation has been activated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suppressions_get**
> SuppressionContract suppressions_get(resource_uri, recommendation_id, name, api_version)



Obtains the details of a suppression.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.suppression_contract import SuppressionContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SuppressionsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
    recommendation_id = 'recommendation_id_example' # str | The recommendation ID.
    name = 'name_example' # str | The name of the suppression.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.suppressions_get(resource_uri, recommendation_id, name, api_version)
        print("The response of SuppressionsApi->suppressions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SuppressionsApi->suppressions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies. | 
 **recommendation_id** | **str**| The recommendation ID. | 
 **name** | **str**| The name of the suppression. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**SuppressionContract**](SuppressionContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully got suppression detail. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suppressions_list**
> SuppressionContractListResult suppressions_list(subscription_id, api_version, top=top, skip_token=skip_token)



Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.suppression_contract_list_result import SuppressionContractListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SuppressionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    top = 56 # int | The number of suppressions per page if a paged version of this API is being used. (optional)
    skip_token = 'skip_token_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        api_response = api_instance.suppressions_list(subscription_id, api_version, top=top, skip_token=skip_token)
        print("The response of SuppressionsApi->suppressions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SuppressionsApi->suppressions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **top** | **int**| The number of suppressions per page if a paged version of this API is being used. | [optional] 
 **skip_token** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**SuppressionContractListResult**](SuppressionContractListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully got all suppressions in a subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

