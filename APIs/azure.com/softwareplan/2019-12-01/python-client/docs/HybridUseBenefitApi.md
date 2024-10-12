# openapi_client.HybridUseBenefitApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hybrid_use_benefit_create**](HybridUseBenefitApi.md#hybrid_use_benefit_create) | **PUT** /{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId} | 
[**hybrid_use_benefit_delete**](HybridUseBenefitApi.md#hybrid_use_benefit_delete) | **DELETE** /{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId} | 
[**hybrid_use_benefit_get**](HybridUseBenefitApi.md#hybrid_use_benefit_get) | **GET** /{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId} | 
[**hybrid_use_benefit_update**](HybridUseBenefitApi.md#hybrid_use_benefit_update) | **PATCH** /{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId} | 


# **hybrid_use_benefit_create**
> HybridUseBenefitModel hybrid_use_benefit_create(scope, plan_id, api_version, body)



Create a new hybrid use benefit under a given scope

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_use_benefit_model import HybridUseBenefitModel
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
    api_instance = openapi_client.HybridUseBenefitApi(api_client)
    scope = 'scope_example' # str | The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
    plan_id = 'plan_id_example' # str | This is a unique identifier for a plan. Should be a guid.
    api_version = 'api_version_example' # str | The api-version to be used by the service
    body = openapi_client.HybridUseBenefitModel() # HybridUseBenefitModel | Request body for creating a hybrid use benefit

    try:
        api_response = api_instance.hybrid_use_benefit_create(scope, plan_id, api_version, body)
        print("The response of HybridUseBenefitApi->hybrid_use_benefit_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridUseBenefitApi->hybrid_use_benefit_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now | 
 **plan_id** | **str**| This is a unique identifier for a plan. Should be a guid. | 
 **api_version** | **str**| The api-version to be used by the service | 
 **body** | [**HybridUseBenefitModel**](HybridUseBenefitModel.md)| Request body for creating a hybrid use benefit | 

### Return type

[**HybridUseBenefitModel**](HybridUseBenefitModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - returns the plan that is created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_use_benefit_delete**
> hybrid_use_benefit_delete(scope, plan_id, api_version)



Deletes a given plan ID

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
    api_instance = openapi_client.HybridUseBenefitApi(api_client)
    scope = 'scope_example' # str | The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
    plan_id = 'plan_id_example' # str | This is a unique identifier for a plan. Should be a guid.
    api_version = 'api_version_example' # str | The api-version to be used by the service

    try:
        api_instance.hybrid_use_benefit_delete(scope, plan_id, api_version)
    except Exception as e:
        print("Exception when calling HybridUseBenefitApi->hybrid_use_benefit_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now | 
 **plan_id** | **str**| This is a unique identifier for a plan. Should be a guid. | 
 **api_version** | **str**| The api-version to be used by the service | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - successfully deleted the given plan |  -  |
**204** | OK - there was no plan to delete |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_use_benefit_get**
> HybridUseBenefitModel hybrid_use_benefit_get(scope, plan_id, api_version)



Gets a given plan ID

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_use_benefit_model import HybridUseBenefitModel
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
    api_instance = openapi_client.HybridUseBenefitApi(api_client)
    scope = 'scope_example' # str | The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
    plan_id = 'plan_id_example' # str | This is a unique identifier for a plan. Should be a guid.
    api_version = 'api_version_example' # str | The api-version to be used by the service

    try:
        api_response = api_instance.hybrid_use_benefit_get(scope, plan_id, api_version)
        print("The response of HybridUseBenefitApi->hybrid_use_benefit_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridUseBenefitApi->hybrid_use_benefit_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now | 
 **plan_id** | **str**| This is a unique identifier for a plan. Should be a guid. | 
 **api_version** | **str**| The api-version to be used by the service | 

### Return type

[**HybridUseBenefitModel**](HybridUseBenefitModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - returns the plan that is created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_use_benefit_update**
> HybridUseBenefitModel hybrid_use_benefit_update(scope, plan_id, api_version, body)



Updates an existing hybrid use benefit

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_use_benefit_model import HybridUseBenefitModel
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
    api_instance = openapi_client.HybridUseBenefitApi(api_client)
    scope = 'scope_example' # str | The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
    plan_id = 'plan_id_example' # str | This is a unique identifier for a plan. Should be a guid.
    api_version = 'api_version_example' # str | The api-version to be used by the service
    body = openapi_client.HybridUseBenefitModel() # HybridUseBenefitModel | Request body for creating a hybrid use benefit

    try:
        api_response = api_instance.hybrid_use_benefit_update(scope, plan_id, api_version, body)
        print("The response of HybridUseBenefitApi->hybrid_use_benefit_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridUseBenefitApi->hybrid_use_benefit_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now | 
 **plan_id** | **str**| This is a unique identifier for a plan. Should be a guid. | 
 **api_version** | **str**| The api-version to be used by the service | 
 **body** | [**HybridUseBenefitModel**](HybridUseBenefitModel.md)| Request body for creating a hybrid use benefit | 

### Return type

[**HybridUseBenefitModel**](HybridUseBenefitModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - successfully updated the given hybrid use benefit |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

