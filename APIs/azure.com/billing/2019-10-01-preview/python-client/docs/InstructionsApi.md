# openapi_client.InstructionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instructions_get**](InstructionsApi.md#instructions_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/instructions/{instructionName} | 
[**instructions_list_by_billing_profile**](InstructionsApi.md#instructions_list_by_billing_profile) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/instructions | 
[**instructions_put**](InstructionsApi.md#instructions_put) | **PUT** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/instructions/{instructionName} | 


# **instructions_get**
> Instruction instructions_get(api_version, billing_account_name, billing_profile_name, instruction_name)



Get the instruction by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.instruction import Instruction
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
    api_instance = openapi_client.InstructionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    instruction_name = 'instruction_name_example' # str | Instruction Name.

    try:
        api_response = api_instance.instructions_get(api_version, billing_account_name, billing_profile_name, instruction_name)
        print("The response of InstructionsApi->instructions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstructionsApi->instructions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **instruction_name** | **str**| Instruction Name. | 

### Return type

[**Instruction**](Instruction.md)

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

# **instructions_list_by_billing_profile**
> InstructionListResult instructions_list_by_billing_profile(billing_account_name, billing_profile_name, api_version)



Lists the instructions by billing profile id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.instruction_list_result import InstructionListResult
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
    api_instance = openapi_client.InstructionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.

    try:
        api_response = api_instance.instructions_list_by_billing_profile(billing_account_name, billing_profile_name, api_version)
        print("The response of InstructionsApi->instructions_list_by_billing_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstructionsApi->instructions_list_by_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 

### Return type

[**InstructionListResult**](InstructionListResult.md)

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

# **instructions_put**
> Instruction instructions_put(api_version, billing_account_name, billing_profile_name, instruction_name, parameters)



The operation to create or update a instruction.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.instruction import Instruction
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
    api_instance = openapi_client.InstructionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    instruction_name = 'instruction_name_example' # str | Instruction Name.
    parameters = openapi_client.Instruction() # Instruction | The new instruction.

    try:
        api_response = api_instance.instructions_put(api_version, billing_account_name, billing_profile_name, instruction_name, parameters)
        print("The response of InstructionsApi->instructions_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstructionsApi->instructions_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **instruction_name** | **str**| Instruction Name. | 
 **parameters** | [**Instruction**](Instruction.md)| The new instruction. | 

### Return type

[**Instruction**](Instruction.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

