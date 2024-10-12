# openapi_client.IntegrationAccountAgreementsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_account_agreements_create_or_update**](IntegrationAccountAgreementsApi.md#integration_account_agreements_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName} | 
[**integration_account_agreements_delete**](IntegrationAccountAgreementsApi.md#integration_account_agreements_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName} | 
[**integration_account_agreements_get**](IntegrationAccountAgreementsApi.md#integration_account_agreements_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements/{agreementName} | 
[**integration_account_agreements_list**](IntegrationAccountAgreementsApi.md#integration_account_agreements_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/agreements | 


# **integration_account_agreements_create_or_update**
> IntegrationAccountAgreement integration_account_agreements_create_or_update(subscription_id, resource_group_name, integration_account_name, agreement_name, api_version, agreement)



Creates or updates an integration account agreement.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_agreement import IntegrationAccountAgreement
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationAccountAgreementsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    agreement_name = 'agreement_name_example' # str | The integration account agreement name.
    api_version = 'api_version_example' # str | The API version.
    agreement = openapi_client.IntegrationAccountAgreement() # IntegrationAccountAgreement | The integration account agreement.

    try:
        api_response = api_instance.integration_account_agreements_create_or_update(subscription_id, resource_group_name, integration_account_name, agreement_name, api_version, agreement)
        print("The response of IntegrationAccountAgreementsApi->integration_account_agreements_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountAgreementsApi->integration_account_agreements_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **agreement_name** | **str**| The integration account agreement name. | 
 **api_version** | **str**| The API version. | 
 **agreement** | [**IntegrationAccountAgreement**](IntegrationAccountAgreement.md)| The integration account agreement. | 

### Return type

[**IntegrationAccountAgreement**](IntegrationAccountAgreement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_agreements_delete**
> integration_account_agreements_delete(subscription_id, resource_group_name, integration_account_name, agreement_name, api_version)



Deletes an integration account agreement.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationAccountAgreementsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    agreement_name = 'agreement_name_example' # str | The integration account agreement name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_account_agreements_delete(subscription_id, resource_group_name, integration_account_name, agreement_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountAgreementsApi->integration_account_agreements_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **agreement_name** | **str**| The integration account agreement name. | 
 **api_version** | **str**| The API version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_agreements_get**
> IntegrationAccountAgreement integration_account_agreements_get(subscription_id, resource_group_name, integration_account_name, agreement_name, api_version)



Gets an integration account agreement.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_agreement import IntegrationAccountAgreement
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationAccountAgreementsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    agreement_name = 'agreement_name_example' # str | The integration account agreement name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_agreements_get(subscription_id, resource_group_name, integration_account_name, agreement_name, api_version)
        print("The response of IntegrationAccountAgreementsApi->integration_account_agreements_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountAgreementsApi->integration_account_agreements_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **agreement_name** | **str**| The integration account agreement name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationAccountAgreement**](IntegrationAccountAgreement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_agreements_list**
> IntegrationAccountAgreementListResult integration_account_agreements_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)



Gets a list of integration account agreements.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_agreement_list_result import IntegrationAccountAgreementListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationAccountAgreementsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.integration_account_agreements_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)
        print("The response of IntegrationAccountAgreementsApi->integration_account_agreements_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountAgreementsApi->integration_account_agreements_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**IntegrationAccountAgreementListResult**](IntegrationAccountAgreementListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

