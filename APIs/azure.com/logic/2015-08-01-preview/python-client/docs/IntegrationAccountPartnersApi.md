# openapi_client.IntegrationAccountPartnersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_account_partners_create_or_update**](IntegrationAccountPartnersApi.md#integration_account_partners_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName} | 
[**integration_account_partners_delete**](IntegrationAccountPartnersApi.md#integration_account_partners_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName} | 
[**integration_account_partners_get**](IntegrationAccountPartnersApi.md#integration_account_partners_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners/{partnerName} | 
[**integration_account_partners_list**](IntegrationAccountPartnersApi.md#integration_account_partners_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/partners | 


# **integration_account_partners_create_or_update**
> IntegrationAccountPartner integration_account_partners_create_or_update(subscription_id, resource_group_name, integration_account_name, partner_name, api_version, partner)



Creates or updates an integration account partner.

### Example


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
        api_response = api_instance.integration_account_partners_create_or_update(subscription_id, resource_group_name, integration_account_name, partner_name, api_version, partner)
        print("The response of IntegrationAccountPartnersApi->integration_account_partners_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->integration_account_partners_create_or_update: %s\n" % e)
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

# **integration_account_partners_delete**
> integration_account_partners_delete(subscription_id, resource_group_name, integration_account_name, partner_name, api_version)



Deletes an integration account partner.

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
    api_instance = openapi_client.IntegrationAccountPartnersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    partner_name = 'partner_name_example' # str | The integration account partner name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_account_partners_delete(subscription_id, resource_group_name, integration_account_name, partner_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->integration_account_partners_delete: %s\n" % e)
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

# **integration_account_partners_get**
> IntegrationAccountPartner integration_account_partners_get(subscription_id, resource_group_name, integration_account_name, partner_name, api_version)



Gets an integration account partner.

### Example


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
        api_response = api_instance.integration_account_partners_get(subscription_id, resource_group_name, integration_account_name, partner_name, api_version)
        print("The response of IntegrationAccountPartnersApi->integration_account_partners_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->integration_account_partners_get: %s\n" % e)
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_account_partners_list**
> IntegrationAccountPartnerListResult integration_account_partners_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)



Gets a list of integration account partners.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntegrationAccountPartnersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.integration_account_partners_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top, filter=filter)
        print("The response of IntegrationAccountPartnersApi->integration_account_partners_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountPartnersApi->integration_account_partners_list: %s\n" % e)
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

[**IntegrationAccountPartnerListResult**](IntegrationAccountPartnerListResult.md)

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

