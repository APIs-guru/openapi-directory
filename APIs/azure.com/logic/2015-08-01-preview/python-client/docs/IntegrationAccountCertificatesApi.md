# openapi_client.IntegrationAccountCertificatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_account_certificates_create_or_update**](IntegrationAccountCertificatesApi.md#integration_account_certificates_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName} | 
[**integration_account_certificates_delete**](IntegrationAccountCertificatesApi.md#integration_account_certificates_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName} | 
[**integration_account_certificates_get**](IntegrationAccountCertificatesApi.md#integration_account_certificates_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates/{certificateName} | 
[**integration_account_certificates_list**](IntegrationAccountCertificatesApi.md#integration_account_certificates_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/integrationAccounts/{integrationAccountName}/certificates | 


# **integration_account_certificates_create_or_update**
> IntegrationAccountCertificate integration_account_certificates_create_or_update(subscription_id, resource_group_name, integration_account_name, certificate_name, api_version, certificate)



Creates or updates an integration account certificate.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_certificate import IntegrationAccountCertificate
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
    api_instance = openapi_client.IntegrationAccountCertificatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    certificate_name = 'certificate_name_example' # str | The integration account certificate name.
    api_version = 'api_version_example' # str | The API version.
    certificate = openapi_client.IntegrationAccountCertificate() # IntegrationAccountCertificate | The integration account certificate.

    try:
        api_response = api_instance.integration_account_certificates_create_or_update(subscription_id, resource_group_name, integration_account_name, certificate_name, api_version, certificate)
        print("The response of IntegrationAccountCertificatesApi->integration_account_certificates_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountCertificatesApi->integration_account_certificates_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **certificate_name** | **str**| The integration account certificate name. | 
 **api_version** | **str**| The API version. | 
 **certificate** | [**IntegrationAccountCertificate**](IntegrationAccountCertificate.md)| The integration account certificate. | 

### Return type

[**IntegrationAccountCertificate**](IntegrationAccountCertificate.md)

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

# **integration_account_certificates_delete**
> integration_account_certificates_delete(subscription_id, resource_group_name, integration_account_name, certificate_name, api_version)



Deletes an integration account certificate.

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
    api_instance = openapi_client.IntegrationAccountCertificatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    certificate_name = 'certificate_name_example' # str | The integration account certificate name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.integration_account_certificates_delete(subscription_id, resource_group_name, integration_account_name, certificate_name, api_version)
    except Exception as e:
        print("Exception when calling IntegrationAccountCertificatesApi->integration_account_certificates_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **certificate_name** | **str**| The integration account certificate name. | 
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

# **integration_account_certificates_get**
> IntegrationAccountCertificate integration_account_certificates_get(subscription_id, resource_group_name, integration_account_name, certificate_name, api_version)



Gets an integration account certificate.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_certificate import IntegrationAccountCertificate
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
    api_instance = openapi_client.IntegrationAccountCertificatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    certificate_name = 'certificate_name_example' # str | The integration account certificate name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_account_certificates_get(subscription_id, resource_group_name, integration_account_name, certificate_name, api_version)
        print("The response of IntegrationAccountCertificatesApi->integration_account_certificates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountCertificatesApi->integration_account_certificates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **certificate_name** | **str**| The integration account certificate name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**IntegrationAccountCertificate**](IntegrationAccountCertificate.md)

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

# **integration_account_certificates_list**
> IntegrationAccountCertificateListResult integration_account_certificates_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top)



Gets a list of integration account certificates.

### Example


```python
import openapi_client
from openapi_client.models.integration_account_certificate_list_result import IntegrationAccountCertificateListResult
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
    api_instance = openapi_client.IntegrationAccountCertificatesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    integration_account_name = 'integration_account_name_example' # str | The integration account name.
    api_version = 'api_version_example' # str | The API version.
    top = 56 # int | The number of items to be included in the result. (optional)

    try:
        api_response = api_instance.integration_account_certificates_list(subscription_id, resource_group_name, integration_account_name, api_version, top=top)
        print("The response of IntegrationAccountCertificatesApi->integration_account_certificates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationAccountCertificatesApi->integration_account_certificates_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id. | 
 **resource_group_name** | **str**| The resource group name. | 
 **integration_account_name** | **str**| The integration account name. | 
 **api_version** | **str**| The API version. | 
 **top** | **int**| The number of items to be included in the result. | [optional] 

### Return type

[**IntegrationAccountCertificateListResult**](IntegrationAccountCertificateListResult.md)

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

