# openapi_client.AppServiceCertificateOrdersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_service_certificate_orders_create_or_update**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName} | Create or update a certificate purchase order.
[**app_service_certificate_orders_create_or_update_certificate**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_create_or_update_certificate) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name} | Creates or updates a certificate and associates with key vault secret.
[**app_service_certificate_orders_delete**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName} | Delete an existing certificate order.
[**app_service_certificate_orders_delete_certificate**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_delete_certificate) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name} | Delete the certificate associated with a certificate order.
[**app_service_certificate_orders_get**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName} | Get a certificate order.
[**app_service_certificate_orders_get_certificate**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_get_certificate) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name} | Get the certificate associated with a certificate order.
[**app_service_certificate_orders_list**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/certificateOrders | List all certificate orders in a subscription.
[**app_service_certificate_orders_list_by_resource_group**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders | Get certificate orders in a resource group.
[**app_service_certificate_orders_list_certificates**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_list_certificates) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates | List all certificates associated with a certificate order.
[**app_service_certificate_orders_reissue**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_reissue) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/reissue | Reissue an existing certificate order.
[**app_service_certificate_orders_renew**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_renew) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/renew | Renew an existing certificate order.
[**app_service_certificate_orders_resend_email**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_resend_email) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendEmail | Resend certificate email.
[**app_service_certificate_orders_resend_request_emails**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_resend_request_emails) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/resendRequestEmails | Verify domain ownership for this certificate order.
[**app_service_certificate_orders_retrieve_certificate_actions**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_retrieve_certificate_actions) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveCertificateActions | Retrieve the list of certificate actions.
[**app_service_certificate_orders_retrieve_certificate_email_history**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_retrieve_certificate_email_history) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveEmailHistory | Retrieve email history.
[**app_service_certificate_orders_retrieve_site_seal**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_retrieve_site_seal) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/retrieveSiteSeal | Verify domain ownership for this certificate order.
[**app_service_certificate_orders_update**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName} | Create or update a certificate purchase order.
[**app_service_certificate_orders_update_certificate**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_update_certificate) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name} | Creates or updates a certificate and associates with key vault secret.
[**app_service_certificate_orders_validate_purchase_information**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_validate_purchase_information) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.CertificateRegistration/validateCertificateRegistrationInformation | Validate information for a certificate order.
[**app_service_certificate_orders_verify_domain_ownership**](AppServiceCertificateOrdersApi.md#app_service_certificate_orders_verify_domain_ownership) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/verifyDomainOwnership | Verify domain ownership for this certificate order.


# **app_service_certificate_orders_create_or_update**
> AppServiceCertificateOrder app_service_certificate_orders_create_or_update(resource_group_name, certificate_order_name, subscription_id, api_version, certificate_distinguished_name)

Create or update a certificate purchase order.

Create or update a certificate purchase order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_order import AppServiceCertificateOrder
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    certificate_distinguished_name = openapi_client.AppServiceCertificateOrder() # AppServiceCertificateOrder | Distinguished name to use for the certificate order.

    try:
        # Create or update a certificate purchase order.
        api_response = api_instance.app_service_certificate_orders_create_or_update(resource_group_name, certificate_order_name, subscription_id, api_version, certificate_distinguished_name)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **certificate_distinguished_name** | [**AppServiceCertificateOrder**](AppServiceCertificateOrder.md)| Distinguished name to use for the certificate order. | 

### Return type

[**AppServiceCertificateOrder**](AppServiceCertificateOrder.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | App Service Certificate Order is created. |  -  |
**201** | App Service Certificate Order creation operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_create_or_update_certificate**
> AppServiceCertificateResource app_service_certificate_orders_create_or_update_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version, key_vault_certificate)

Creates or updates a certificate and associates with key vault secret.

Creates or updates a certificate and associates with key vault secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_resource import AppServiceCertificateResource
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    key_vault_certificate = openapi_client.AppServiceCertificateResource() # AppServiceCertificateResource | Key vault certificate resource Id.

    try:
        # Creates or updates a certificate and associates with key vault secret.
        api_response = api_instance.app_service_certificate_orders_create_or_update_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version, key_vault_certificate)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_create_or_update_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_create_or_update_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **key_vault_certificate** | [**AppServiceCertificateResource**](AppServiceCertificateResource.md)| Key vault certificate resource Id. | 

### Return type

[**AppServiceCertificateResource**](AppServiceCertificateResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | App Service Certificate is created. |  -  |
**201** | App Service Certificate creation operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_delete**
> app_service_certificate_orders_delete(resource_group_name, certificate_order_name, subscription_id, api_version)

Delete an existing certificate order.

Delete an existing certificate order.

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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete an existing certificate order.
        api_instance.app_service_certificate_orders_delete(resource_group_name, certificate_order_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**200** | Successfully deleted certificate order. |  -  |
**204** | Certificate order does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_delete_certificate**
> app_service_certificate_orders_delete_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version)

Delete the certificate associated with a certificate order.

Delete the certificate associated with a certificate order.

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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete the certificate associated with a certificate order.
        api_instance.app_service_certificate_orders_delete_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_delete_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**200** | Successfully deleted certificate. |  -  |
**204** | Certificate does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_get**
> AppServiceCertificateOrder app_service_certificate_orders_get(resource_group_name, certificate_order_name, subscription_id, api_version)

Get a certificate order.

Get a certificate order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_order import AppServiceCertificateOrder
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order..
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a certificate order.
        api_response = api_instance.app_service_certificate_orders_get(resource_group_name, certificate_order_name, subscription_id, api_version)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order.. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceCertificateOrder**](AppServiceCertificateOrder.md)

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

# **app_service_certificate_orders_get_certificate**
> AppServiceCertificateResource app_service_certificate_orders_get_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version)

Get the certificate associated with a certificate order.

Get the certificate associated with a certificate order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_resource import AppServiceCertificateResource
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get the certificate associated with a certificate order.
        api_response = api_instance.app_service_certificate_orders_get_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_get_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_get_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceCertificateResource**](AppServiceCertificateResource.md)

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

# **app_service_certificate_orders_list**
> AppServiceCertificateOrderCollection app_service_certificate_orders_list(subscription_id, api_version)

List all certificate orders in a subscription.

List all certificate orders in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_order_collection import AppServiceCertificateOrderCollection
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List all certificate orders in a subscription.
        api_response = api_instance.app_service_certificate_orders_list(subscription_id, api_version)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceCertificateOrderCollection**](AppServiceCertificateOrderCollection.md)

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

# **app_service_certificate_orders_list_by_resource_group**
> AppServiceCertificateOrderCollection app_service_certificate_orders_list_by_resource_group(resource_group_name, subscription_id, api_version)

Get certificate orders in a resource group.

Get certificate orders in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_order_collection import AppServiceCertificateOrderCollection
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get certificate orders in a resource group.
        api_response = api_instance.app_service_certificate_orders_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceCertificateOrderCollection**](AppServiceCertificateOrderCollection.md)

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

# **app_service_certificate_orders_list_certificates**
> AppServiceCertificateCollection app_service_certificate_orders_list_certificates(resource_group_name, certificate_order_name, subscription_id, api_version)

List all certificates associated with a certificate order.

List all certificates associated with a certificate order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_collection import AppServiceCertificateCollection
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List all certificates associated with a certificate order.
        api_response = api_instance.app_service_certificate_orders_list_certificates(resource_group_name, certificate_order_name, subscription_id, api_version)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_list_certificates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_list_certificates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**AppServiceCertificateCollection**](AppServiceCertificateCollection.md)

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

# **app_service_certificate_orders_reissue**
> app_service_certificate_orders_reissue(resource_group_name, certificate_order_name, subscription_id, api_version, reissue_certificate_order_request)

Reissue an existing certificate order.

Reissue an existing certificate order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reissue_certificate_order_request import ReissueCertificateOrderRequest
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    reissue_certificate_order_request = openapi_client.ReissueCertificateOrderRequest() # ReissueCertificateOrderRequest | Parameters for the reissue.

    try:
        # Reissue an existing certificate order.
        api_instance.app_service_certificate_orders_reissue(resource_group_name, certificate_order_name, subscription_id, api_version, reissue_certificate_order_request)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_reissue: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **reissue_certificate_order_request** | [**ReissueCertificateOrderRequest**](ReissueCertificateOrderRequest.md)| Parameters for the reissue. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_renew**
> app_service_certificate_orders_renew(resource_group_name, certificate_order_name, subscription_id, api_version, renew_certificate_order_request)

Renew an existing certificate order.

Renew an existing certificate order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.renew_certificate_order_request import RenewCertificateOrderRequest
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    renew_certificate_order_request = openapi_client.RenewCertificateOrderRequest() # RenewCertificateOrderRequest | Renew parameters

    try:
        # Renew an existing certificate order.
        api_instance.app_service_certificate_orders_renew(resource_group_name, certificate_order_name, subscription_id, api_version, renew_certificate_order_request)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_renew: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **renew_certificate_order_request** | [**RenewCertificateOrderRequest**](RenewCertificateOrderRequest.md)| Renew parameters | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_resend_email**
> app_service_certificate_orders_resend_email(resource_group_name, certificate_order_name, subscription_id, api_version)

Resend certificate email.

Resend certificate email.

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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Resend certificate email.
        api_instance.app_service_certificate_orders_resend_email(resource_group_name, certificate_order_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_resend_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_resend_request_emails**
> app_service_certificate_orders_resend_request_emails(resource_group_name, certificate_order_name, subscription_id, api_version, name_identifier)

Verify domain ownership for this certificate order.

Verify domain ownership for this certificate order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_orders_resend_request_emails_request import AppServiceCertificateOrdersResendRequestEmailsRequest
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    name_identifier = openapi_client.AppServiceCertificateOrdersResendRequestEmailsRequest() # AppServiceCertificateOrdersResendRequestEmailsRequest | Email address

    try:
        # Verify domain ownership for this certificate order.
        api_instance.app_service_certificate_orders_resend_request_emails(resource_group_name, certificate_order_name, subscription_id, api_version, name_identifier)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_resend_request_emails: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **name_identifier** | [**AppServiceCertificateOrdersResendRequestEmailsRequest**](AppServiceCertificateOrdersResendRequestEmailsRequest.md)| Email address | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_retrieve_certificate_actions**
> List[CertificateOrderAction] app_service_certificate_orders_retrieve_certificate_actions(resource_group_name, name, subscription_id, api_version)

Retrieve the list of certificate actions.

Retrieve the list of certificate actions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order_action import CertificateOrderAction
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieve the list of certificate actions.
        api_response = api_instance.app_service_certificate_orders_retrieve_certificate_actions(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_retrieve_certificate_actions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_retrieve_certificate_actions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**List[CertificateOrderAction]**](CertificateOrderAction.md)

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

# **app_service_certificate_orders_retrieve_certificate_email_history**
> List[CertificateEmail] app_service_certificate_orders_retrieve_certificate_email_history(resource_group_name, name, subscription_id, api_version)

Retrieve email history.

Retrieve email history.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_email import CertificateEmail
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieve email history.
        api_response = api_instance.app_service_certificate_orders_retrieve_certificate_email_history(resource_group_name, name, subscription_id, api_version)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_retrieve_certificate_email_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_retrieve_certificate_email_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**List[CertificateEmail]**](CertificateEmail.md)

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

# **app_service_certificate_orders_retrieve_site_seal**
> SiteSeal app_service_certificate_orders_retrieve_site_seal(resource_group_name, certificate_order_name, subscription_id, api_version, site_seal_request)

Verify domain ownership for this certificate order.

Verify domain ownership for this certificate order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_seal import SiteSeal
from openapi_client.models.site_seal_request import SiteSealRequest
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    site_seal_request = openapi_client.SiteSealRequest() # SiteSealRequest | Site seal request.

    try:
        # Verify domain ownership for this certificate order.
        api_response = api_instance.app_service_certificate_orders_retrieve_site_seal(resource_group_name, certificate_order_name, subscription_id, api_version, site_seal_request)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_retrieve_site_seal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_retrieve_site_seal: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **site_seal_request** | [**SiteSealRequest**](SiteSealRequest.md)| Site seal request. | 

### Return type

[**SiteSeal**](SiteSeal.md)

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

# **app_service_certificate_orders_update**
> AppServiceCertificateOrder app_service_certificate_orders_update(resource_group_name, certificate_order_name, subscription_id, api_version, certificate_distinguished_name)

Create or update a certificate purchase order.

Create or update a certificate purchase order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_order import AppServiceCertificateOrder
from openapi_client.models.app_service_certificate_order_patch_resource import AppServiceCertificateOrderPatchResource
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    certificate_distinguished_name = openapi_client.AppServiceCertificateOrderPatchResource() # AppServiceCertificateOrderPatchResource | Distinguished name to use for the certificate order.

    try:
        # Create or update a certificate purchase order.
        api_response = api_instance.app_service_certificate_orders_update(resource_group_name, certificate_order_name, subscription_id, api_version, certificate_distinguished_name)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **certificate_distinguished_name** | [**AppServiceCertificateOrderPatchResource**](AppServiceCertificateOrderPatchResource.md)| Distinguished name to use for the certificate order. | 

### Return type

[**AppServiceCertificateOrder**](AppServiceCertificateOrder.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | App Service Certificate Order is created. |  -  |
**201** | App Service Certificate Order creation operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_update_certificate**
> AppServiceCertificateResource app_service_certificate_orders_update_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version, key_vault_certificate)

Creates or updates a certificate and associates with key vault secret.

Creates or updates a certificate and associates with key vault secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_patch_resource import AppServiceCertificatePatchResource
from openapi_client.models.app_service_certificate_resource import AppServiceCertificateResource
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    key_vault_certificate = openapi_client.AppServiceCertificatePatchResource() # AppServiceCertificatePatchResource | Key vault certificate resource Id.

    try:
        # Creates or updates a certificate and associates with key vault secret.
        api_response = api_instance.app_service_certificate_orders_update_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version, key_vault_certificate)
        print("The response of AppServiceCertificateOrdersApi->app_service_certificate_orders_update_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_update_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **key_vault_certificate** | [**AppServiceCertificatePatchResource**](AppServiceCertificatePatchResource.md)| Key vault certificate resource Id. | 

### Return type

[**AppServiceCertificateResource**](AppServiceCertificateResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | App Service Certificate is created. |  -  |
**201** | App Service Certificate creation operation is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_validate_purchase_information**
> app_service_certificate_orders_validate_purchase_information(subscription_id, api_version, app_service_certificate_order)

Validate information for a certificate order.

Validate information for a certificate order.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_service_certificate_order import AppServiceCertificateOrder
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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    app_service_certificate_order = openapi_client.AppServiceCertificateOrder() # AppServiceCertificateOrder | Information for a certificate order.

    try:
        # Validate information for a certificate order.
        api_instance.app_service_certificate_orders_validate_purchase_information(subscription_id, api_version, app_service_certificate_order)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_validate_purchase_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **app_service_certificate_order** | [**AppServiceCertificateOrder**](AppServiceCertificateOrder.md)| Information for a certificate order. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_service_certificate_orders_verify_domain_ownership**
> app_service_certificate_orders_verify_domain_ownership(resource_group_name, certificate_order_name, subscription_id, api_version)

Verify domain ownership for this certificate order.

Verify domain ownership for this certificate order.

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
    api_instance = openapi_client.AppServiceCertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    certificate_order_name = 'certificate_order_name_example' # str | Name of the certificate order.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Verify domain ownership for this certificate order.
        api_instance.app_service_certificate_orders_verify_domain_ownership(resource_group_name, certificate_order_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AppServiceCertificateOrdersApi->app_service_certificate_orders_verify_domain_ownership: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **certificate_order_name** | **str**| Name of the certificate order. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

