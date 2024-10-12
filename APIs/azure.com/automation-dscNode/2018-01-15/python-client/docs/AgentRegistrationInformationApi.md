# openapi_client.AgentRegistrationInformationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agent_registration_information_get**](AgentRegistrationInformationApi.md#agent_registration_information_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/agentRegistrationInformation | 
[**agent_registration_information_regenerate_key**](AgentRegistrationInformationApi.md#agent_registration_information_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/agentRegistrationInformation/regenerateKey | 


# **agent_registration_information_get**
> AgentRegistration agent_registration_information_get(subscription_id, resource_group_name, automation_account_name, api_version)



Retrieve the automation agent registration information.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agent_registration import AgentRegistration
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
    api_instance = openapi_client.AgentRegistrationInformationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.agent_registration_information_get(subscription_id, resource_group_name, automation_account_name, api_version)
        print("The response of AgentRegistrationInformationApi->agent_registration_information_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentRegistrationInformationApi->agent_registration_information_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**AgentRegistration**](AgentRegistration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **agent_registration_information_regenerate_key**
> AgentRegistration agent_registration_information_regenerate_key(subscription_id, resource_group_name, automation_account_name, api_version, parameters)



Regenerate a primary or secondary agent registration key

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agent_registration import AgentRegistration
from openapi_client.models.agent_registration_regenerate_key_parameter import AgentRegistrationRegenerateKeyParameter
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
    api_instance = openapi_client.AgentRegistrationInformationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.AgentRegistrationRegenerateKeyParameter() # AgentRegistrationRegenerateKeyParameter | The name of the agent registration key to be regenerated

    try:
        api_response = api_instance.agent_registration_information_regenerate_key(subscription_id, resource_group_name, automation_account_name, api_version, parameters)
        print("The response of AgentRegistrationInformationApi->agent_registration_information_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentRegistrationInformationApi->agent_registration_information_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**AgentRegistrationRegenerateKeyParameter**](AgentRegistrationRegenerateKeyParameter.md)| The name of the agent registration key to be regenerated | 

### Return type

[**AgentRegistration**](AgentRegistration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

