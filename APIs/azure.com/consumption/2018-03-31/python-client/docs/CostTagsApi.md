# openapi_client.CostTagsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cost_tags_create_or_update**](CostTagsApi.md#cost_tags_create_or_update) | **PUT** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/costTags | 
[**cost_tags_get**](CostTagsApi.md#cost_tags_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/costTags | 


# **cost_tags_create_or_update**
> CostTags cost_tags_create_or_update(api_version, billing_account_id, parameters)



The operation to create or update cost tags associated with a billing account. Update operation requires latest eTag to be set in the request mandatorily. You may obtain the latest eTag by performing a get operation. Create operation does not require eTag.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cost_tags import CostTags
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
    api_instance = openapi_client.CostTagsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-31.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    parameters = openapi_client.CostTags() # CostTags | Parameters supplied to the Create cost tags operation.

    try:
        api_response = api_instance.cost_tags_create_or_update(api_version, billing_account_id, parameters)
        print("The response of CostTagsApi->cost_tags_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CostTagsApi->cost_tags_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-31. | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **parameters** | [**CostTags**](CostTags.md)| Parameters supplied to the Create cost tags operation. | 

### Return type

[**CostTags**](CostTags.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**201** | Created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cost_tags_get**
> CostTags cost_tags_get(api_version, billing_account_id)



Get cost tags for a billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cost_tags import CostTags
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
    api_instance = openapi_client.CostTagsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-03-31.
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID

    try:
        api_response = api_instance.cost_tags_get(api_version, billing_account_id)
        print("The response of CostTagsApi->cost_tags_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CostTagsApi->cost_tags_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-03-31. | 
 **billing_account_id** | **str**| BillingAccount ID | 

### Return type

[**CostTags**](CostTags.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

