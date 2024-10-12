# openapi_client.QuotaByPeriodKeysApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quota_by_period_keys_get**](QuotaByPeriodKeysApi.md#quota_by_period_keys_get) | **GET** /quotas/{quotaCounterKey}/{quotaPeriodKey} | 
[**quota_by_period_keys_update**](QuotaByPeriodKeysApi.md#quota_by_period_keys_update) | **PATCH** /quotas/{quotaCounterKey}/{quotaPeriodKey} | 


# **quota_by_period_keys_get**
> QuotaCounterContract quota_by_period_keys_get(quota_counter_key, quota_period_key, api_version)



Gets the value of the quota counter associated with the counter-key in the policy for the specific period in service instance.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.quota_counter_contract import QuotaCounterContract
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
    api_instance = openapi_client.QuotaByPeriodKeysApi(api_client)
    quota_counter_key = 'quota_counter_key_example' # str | Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key=\"boo\" in the policy, then it’s accessible by \"boo\" counter key. But if it’s defined as counter-key=\"@(\"b\"+\"a\")\" then it will be accessible by \"ba\" key
    quota_period_key = 'quota_period_key_example' # str | Quota period key identifier.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.quota_by_period_keys_get(quota_counter_key, quota_period_key, api_version)
        print("The response of QuotaByPeriodKeysApi->quota_by_period_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuotaByPeriodKeysApi->quota_by_period_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quota_counter_key** | **str**| Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key&#x3D;\&quot;boo\&quot; in the policy, then it’s accessible by \&quot;boo\&quot; counter key. But if it’s defined as counter-key&#x3D;\&quot;@(\&quot;b\&quot;+\&quot;a\&quot;)\&quot; then it will be accessible by \&quot;ba\&quot; key | 
 **quota_period_key** | **str**| Quota period key identifier. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**QuotaCounterContract**](QuotaCounterContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the Quota counter details for the specified period. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quota_by_period_keys_update**
> quota_by_period_keys_update(quota_counter_key, quota_period_key, api_version, parameters)



Updates an existing quota counter value in the specified service instance.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.quota_counter_value_contract_properties import QuotaCounterValueContractProperties
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
    api_instance = openapi_client.QuotaByPeriodKeysApi(api_client)
    quota_counter_key = 'quota_counter_key_example' # str | Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key=\"boo\" in the policy, then it’s accessible by \"boo\" counter key. But if it’s defined as counter-key=\"@(\"b\"+\"a\")\" then it will be accessible by \"ba\" key
    quota_period_key = 'quota_period_key_example' # str | Quota period key identifier.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.QuotaCounterValueContractProperties() # QuotaCounterValueContractProperties | The value of the Quota counter to be applied on the specified period.

    try:
        api_instance.quota_by_period_keys_update(quota_counter_key, quota_period_key, api_version, parameters)
    except Exception as e:
        print("Exception when calling QuotaByPeriodKeysApi->quota_by_period_keys_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quota_counter_key** | **str**| Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key&#x3D;\&quot;boo\&quot; in the policy, then it’s accessible by \&quot;boo\&quot; counter key. But if it’s defined as counter-key&#x3D;\&quot;@(\&quot;b\&quot;+\&quot;a\&quot;)\&quot; then it will be accessible by \&quot;ba\&quot; key | 
 **quota_period_key** | **str**| Quota period key identifier. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**QuotaCounterValueContractProperties**](QuotaCounterValueContractProperties.md)| The value of the Quota counter to be applied on the specified period. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The quota counter value was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

