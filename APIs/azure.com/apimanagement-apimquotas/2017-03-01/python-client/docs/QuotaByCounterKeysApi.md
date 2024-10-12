# openapi_client.QuotaByCounterKeysApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quota_by_counter_keys_list**](QuotaByCounterKeysApi.md#quota_by_counter_keys_list) | **GET** /quotas/{quotaCounterKey} | 
[**quota_by_counter_keys_update**](QuotaByCounterKeysApi.md#quota_by_counter_keys_update) | **PATCH** /quotas/{quotaCounterKey} | 


# **quota_by_counter_keys_list**
> QuotaCounterCollection quota_by_counter_keys_list(quota_counter_key, api_version)



Lists a collection of current quota counter periods associated with the counter-key configured in the policy on the specified service instance. The api does not support paging yet.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.quota_counter_collection import QuotaCounterCollection
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
    api_instance = openapi_client.QuotaByCounterKeysApi(api_client)
    quota_counter_key = 'quota_counter_key_example' # str | Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key=\"boo\" in the policy, then it’s accessible by \"boo\" counter key. But if it’s defined as counter-key=\"@(\"b\"+\"a\")\" then it will be accessible by \"ba\" key
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.quota_by_counter_keys_list(quota_counter_key, api_version)
        print("The response of QuotaByCounterKeysApi->quota_by_counter_keys_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuotaByCounterKeysApi->quota_by_counter_keys_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quota_counter_key** | **str**| Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key&#x3D;\&quot;boo\&quot; in the policy, then it’s accessible by \&quot;boo\&quot; counter key. But if it’s defined as counter-key&#x3D;\&quot;@(\&quot;b\&quot;+\&quot;a\&quot;)\&quot; then it will be accessible by \&quot;ba\&quot; key | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**QuotaCounterCollection**](QuotaCounterCollection.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists a collection of the quota counter values. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **quota_by_counter_keys_update**
> quota_by_counter_keys_update(quota_counter_key, api_version, parameters)



Updates all the quota counter values specified with the existing quota counter key to a value in the specified service instance. This should be used for reset of the quota counter values.

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
    api_instance = openapi_client.QuotaByCounterKeysApi(api_client)
    quota_counter_key = 'quota_counter_key_example' # str | Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key=\"boo\" in the policy, then it’s accessible by \"boo\" counter key. But if it’s defined as counter-key=\"@(\"b\"+\"a\")\" then it will be accessible by \"ba\" key
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.QuotaCounterValueContractProperties() # QuotaCounterValueContractProperties | The value of the quota counter to be applied to all quota counter periods.

    try:
        api_instance.quota_by_counter_keys_update(quota_counter_key, api_version, parameters)
    except Exception as e:
        print("Exception when calling QuotaByCounterKeysApi->quota_by_counter_keys_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quota_counter_key** | **str**| Quota counter key identifier.This is the result of expression defined in counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key&#x3D;\&quot;boo\&quot; in the policy, then it’s accessible by \&quot;boo\&quot; counter key. But if it’s defined as counter-key&#x3D;\&quot;@(\&quot;b\&quot;+\&quot;a\&quot;)\&quot; then it will be accessible by \&quot;ba\&quot; key | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**QuotaCounterValueContractProperties**](QuotaCounterValueContractProperties.md)| The value of the quota counter to be applied to all quota counter periods. | 

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
**204** | Quota counter period was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

