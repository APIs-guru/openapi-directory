# openapi_client.IntegrationAccountPartnersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partners_create_or_update**](IntegrationAccountPartnersApi.md#partners_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName} | 
[**partners_delete**](IntegrationAccountPartnersApi.md#partners_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName} | 
[**partners_get**](IntegrationAccountPartnersApi.md#partners_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName} | 
[**partners_list_by_integration_accounts**](IntegrationAccountPartnersApi.md#partners_list_by_integration_accounts) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners | 
[**partners_list_content_callback_url**](IntegrationAccountPartnersApi.md#partners_list_content_callback_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName}/listContentCallbackUrl | 


# **partners_create_or_update**
> IntegrationAccountPartner partners_create_or_update(subscription_id, resource_group_name, integration_account_name, partner_name, api_version, partner)



Creates or updates an integration account partner.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_partner import IntegrationAccountPartner
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
    api_instance = openapi_client.IntegrationAccountPartnersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    partner_name = 'partner_name_example' # str | The integration account partner name.
    api_version = 'api_version_example' # str | The API version.
    partner = openapi_client.IntegrationAccountPartner() # IntegrationAccountPartner | The integration account partner.

    try:
        api_response = api_instance.partners_create_or_update(subscription_id, resource_group_name, integration_account_name, partner_name, api_version, partner)
        print("The response of IntegrationAccountPartnersApi->partners_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->partners_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **partner_name** | **str**| The integration account partner name. | 
 **api_version** | **str**| The API version. | 
 **partner** | [**IntegrationAccountPartner**](IntegrationAccountPartner.md)| The integration account partner. | 

### Return type

[**IntegrationAccountPartner**](IntegrationAccountPartner.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partners_delete**
> partners_delete(subscription_id, resource_group_name, integration_account_name, partner_name, api_version)



Deletes an integration account partner.

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
    api_instance = openapi_client.IntegrationAccountPartnersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    partner_name = 'partner_name_example' # str | The integration account partner name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.partners_delete(subscription_id, resource_group_name, integration_account_name, partner_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->partners_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **partner_name** | **str**| The integration account partner name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partners_get**
> IntegrationAccountPartner partners_get(subscription_id, resource_group_name, integration_account_name, partner_name, api_version)



Gets an integration account partner.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_partner import IntegrationAccountPartner
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
    api_instance = openapi_client.IntegrationAccountPartnersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    partner_name = 'partner_name_example' # str | The integration account partner name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.partners_get(subscription_id, resource_group_name, integration_account_name, partner_name, api_version)
        print("The response of IntegrationAccountPartnersApi->partners_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->partners_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **partner_name** | **str**| The integration account partner name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationAccountPartner**](IntegrationAccountPartner.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partners_list_by_integration_accounts**
> IntegrationAccountPartnerListResult partners_list_by_integration_accounts(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)



Gets a list of integration account partners.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_account_partner_list_result import IntegrationAccountPartnerListResult
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
    api_instance = openapi_client.IntegrationAccountPartnersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. Options for filters include: PartnerType. (optional)

    try:
        api_response = api_instance.partners_list_by_integration_accounts(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)
        print("The response of IntegrationAccountPartnersApi->partners_list_by_integration_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->partners_list_by_integration_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. Options for filters include: PartnerType. | [optional] 

### Return type

[**IntegrationAccountPartnerListResult**](IntegrationAccountPartnerListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partners_list_content_callback_url**
> WorkflowTriggerCallbackUrl partners_list_content_callback_url(subscription_id, resource_group_name, integration_account_name, partner_name, api_version, list_content_callback_url)



Get the content callback url.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_callback_url_parameters import GetCallbackUrlParameters
from openapi_client.models.workflow_trigger_callback_url import WorkflowTriggerCallbackUrl
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
    api_instance = openapi_client.IntegrationAccountPartnersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    partner_name = 'partner_name_example' # str | The integration account partner name.
    api_version = 'api_version_example' # str | The API version.
    list_content_callback_url = openapi_client.GetCallbackUrlParameters() # GetCallbackUrlParameters | 

    try:
        api_response = api_instance.partners_list_content_callback_url(subscription_id, resource_group_name, integration_account_name, partner_name, api_version, list_content_callback_url)
        print("The response of IntegrationAccountPartnersApi->partners_list_content_callback_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->partners_list_content_callback_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **partner_name** | **str**| The integration account partner name. | 
 **api_version** | **str**| The API version. | 
 **list_content_callback_url** | [**GetCallbackUrlParameters**](GetCallbackUrlParameters.md)|  | 

### Return type

[**WorkflowTriggerCallbackUrl**](WorkflowTriggerCallbackUrl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

