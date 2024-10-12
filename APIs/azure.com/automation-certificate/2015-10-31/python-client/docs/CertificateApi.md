# openapi_client.CertificateApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificate_create_or_update**](CertificateApi.md#certificate_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName} | 
[**certificate_delete**](CertificateApi.md#certificate_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName} | 
[**certificate_get**](CertificateApi.md#certificate_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName} | 
[**certificate_list_by_automation_account**](CertificateApi.md#certificate_list_by_automation_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates | 
[**certificate_update**](CertificateApi.md#certificate_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/certificates/{certificateName} | 


# **certificate_create_or_update**
> Certificate certificate_create_or_update(resource_group_name, automation_account_name, certificate_name, subscription_id, api_version, parameters)



Create a certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate import Certificate
from openapi_client.models.certificate_create_or_update_parameters import CertificateCreateOrUpdateParameters
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
    api_instance = openapi_client.CertificateApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    certificate_name = 'certificate_name_example' # str | The parameters supplied to the create or update certificate operation.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CertificateCreateOrUpdateParameters() # CertificateCreateOrUpdateParameters | The parameters supplied to the create or update certificate operation.

    try:
        api_response = api_instance.certificate_create_or_update(resource_group_name, automation_account_name, certificate_name, subscription_id, api_version, parameters)
        print("The response of CertificateApi->certificate_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **certificate_name** | **str**| The parameters supplied to the create or update certificate operation. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CertificateCreateOrUpdateParameters**](CertificateCreateOrUpdateParameters.md)| The parameters supplied to the create or update certificate operation. | 

### Return type

[**Certificate**](Certificate.md)

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
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_delete**
> certificate_delete(resource_group_name, automation_account_name, certificate_name, subscription_id, api_version)



Delete the certificate.

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
    api_instance = openapi_client.CertificateApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    certificate_name = 'certificate_name_example' # str | The name of certificate.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.certificate_delete(resource_group_name, automation_account_name, certificate_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **certificate_name** | **str**| The name of certificate. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_get**
> Certificate certificate_get(resource_group_name, automation_account_name, certificate_name, subscription_id, api_version)



Retrieve the certificate identified by certificate name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate import Certificate
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
    api_instance = openapi_client.CertificateApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    certificate_name = 'certificate_name_example' # str | The name of certificate.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.certificate_get(resource_group_name, automation_account_name, certificate_name, subscription_id, api_version)
        print("The response of CertificateApi->certificate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **certificate_name** | **str**| The name of certificate. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_list_by_automation_account**
> CertificateListResult certificate_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version)



Retrieve a list of certificates.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_list_result import CertificateListResult
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
    api_instance = openapi_client.CertificateApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.certificate_list_by_automation_account(resource_group_name, automation_account_name, subscription_id, api_version)
        print("The response of CertificateApi->certificate_list_by_automation_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_list_by_automation_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**CertificateListResult**](CertificateListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_update**
> Certificate certificate_update(resource_group_name, automation_account_name, certificate_name, subscription_id, api_version, parameters)



Update a certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate import Certificate
from openapi_client.models.certificate_update_parameters import CertificateUpdateParameters
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
    api_instance = openapi_client.CertificateApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure Resource group.
    automation_account_name = 'automation_account_name_example' # str | The name of the automation account.
    certificate_name = 'certificate_name_example' # str | The parameters supplied to the update certificate operation.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CertificateUpdateParameters() # CertificateUpdateParameters | The parameters supplied to the update certificate operation.

    try:
        api_response = api_instance.certificate_update(resource_group_name, automation_account_name, certificate_name, subscription_id, api_version, parameters)
        print("The response of CertificateApi->certificate_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure Resource group. | 
 **automation_account_name** | **str**| The name of the automation account. | 
 **certificate_name** | **str**| The parameters supplied to the update certificate operation. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CertificateUpdateParameters**](CertificateUpdateParameters.md)| The parameters supplied to the update certificate operation. | 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Automation error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

