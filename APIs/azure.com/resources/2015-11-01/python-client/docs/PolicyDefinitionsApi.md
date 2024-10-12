# openapi_client.PolicyDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_definitions_create_or_update**](PolicyDefinitionsApi.md#policy_definitions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policydefinitions/{policyDefinitionName} | 
[**policy_definitions_delete**](PolicyDefinitionsApi.md#policy_definitions_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policydefinitions/{policyDefinitionName} | 
[**policy_definitions_get**](PolicyDefinitionsApi.md#policy_definitions_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policydefinitions/{policyDefinitionName} | 


# **policy_definitions_create_or_update**
> PolicyDefinition policy_definitions_create_or_update(policy_definition_name, api_version, subscription_id, parameters)



Create or update policy definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition import PolicyDefinition
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The policy definition name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.PolicyDefinition() # PolicyDefinition | The policy definition properties

    try:
        api_response = api_instance.policy_definitions_create_or_update(policy_definition_name, api_version, subscription_id, parameters)
        print("The response of PolicyDefinitionsApi->policy_definitions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The policy definition name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**PolicyDefinition**](PolicyDefinition.md)| The policy definition properties | 

### Return type

[**PolicyDefinition**](PolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_delete**
> policy_definitions_delete(policy_definition_name, api_version, subscription_id)



Deletes policy definition.

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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The policy definition name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.policy_definitions_delete(policy_definition_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The policy definition name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_definitions_get**
> PolicyDefinition policy_definitions_get(policy_definition_name, api_version, subscription_id)



Gets policy definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_definition import PolicyDefinition
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
    api_instance = openapi_client.PolicyDefinitionsApi(api_client)
    policy_definition_name = 'policy_definition_name_example' # str | The policy definition name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.policy_definitions_get(policy_definition_name, api_version, subscription_id)
        print("The response of PolicyDefinitionsApi->policy_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyDefinitionsApi->policy_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy_definition_name** | **str**| The policy definition name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PolicyDefinition**](PolicyDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

