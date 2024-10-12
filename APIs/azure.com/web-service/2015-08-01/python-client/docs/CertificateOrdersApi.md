# openapi_client.CertificateOrdersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificate_orders_create_or_update_certificate**](CertificateOrdersApi.md#certificate_orders_create_or_update_certificate) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name} | Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it&#39;s ready
[**certificate_orders_create_or_update_certificate_order**](CertificateOrdersApi.md#certificate_orders_create_or_update_certificate_order) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name} | Create or update a certificate purchase order
[**certificate_orders_delete_certificate**](CertificateOrdersApi.md#certificate_orders_delete_certificate) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name} | Deletes the certificate associated with the certificate order
[**certificate_orders_delete_certificate_order**](CertificateOrdersApi.md#certificate_orders_delete_certificate_order) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name} | Delete an existing certificate order
[**certificate_orders_get_certificate**](CertificateOrdersApi.md#certificate_orders_get_certificate) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name} | Get certificate associated with the certificate order
[**certificate_orders_get_certificate_order**](CertificateOrdersApi.md#certificate_orders_get_certificate_order) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name} | Get a certificate order
[**certificate_orders_get_certificate_orders**](CertificateOrdersApi.md#certificate_orders_get_certificate_orders) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders | Get certificate orders in a resource group
[**certificate_orders_get_certificates**](CertificateOrdersApi.md#certificate_orders_get_certificates) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates | List all certificates associated with a certificate order (only one certificate can be associated with an order at a time)
[**certificate_orders_reissue_certificate_order**](CertificateOrdersApi.md#certificate_orders_reissue_certificate_order) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/reissue | Reissue an existing certificate order
[**certificate_orders_renew_certificate_order**](CertificateOrdersApi.md#certificate_orders_renew_certificate_order) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/renew | Renew an existing certificate order
[**certificate_orders_resend_certificate_email**](CertificateOrdersApi.md#certificate_orders_resend_certificate_email) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/resendEmail | Resend certificate email
[**certificate_orders_retrieve_certificate_actions**](CertificateOrdersApi.md#certificate_orders_retrieve_certificate_actions) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveCertificateActions | Retrieve the list of certificate actions
[**certificate_orders_retrieve_certificate_email_history**](CertificateOrdersApi.md#certificate_orders_retrieve_certificate_email_history) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/retrieveEmailHistory | Retrieve email history
[**certificate_orders_update_certificate**](CertificateOrdersApi.md#certificate_orders_update_certificate) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{certificateOrderName}/certificates/{name} | Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it&#39;s ready
[**certificate_orders_update_certificate_order**](CertificateOrdersApi.md#certificate_orders_update_certificate_order) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name} | Create or update a certificate purchase order
[**certificate_orders_verify_domain_ownership**](CertificateOrdersApi.md#certificate_orders_verify_domain_ownership) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CertificateRegistration/certificateOrders/{name}/verifyDomainOwnership | Verify domain ownership for this certificate order


# **certificate_orders_create_or_update_certificate**
> CertificateOrderCertificate certificate_orders_create_or_update_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version, key_vault_certificate)

Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order_certificate import CertificateOrderCertificate
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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    certificate_order_name = 'certificate_order_name_example' # str | Certificate name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    key_vault_certificate = openapi_client.CertificateOrderCertificate() # CertificateOrderCertificate | Key Vault secret csm Id

    try:
        # Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready
        api_response = api_instance.certificate_orders_create_or_update_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version, key_vault_certificate)
        print("The response of CertificateOrdersApi->certificate_orders_create_or_update_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_create_or_update_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **certificate_order_name** | **str**| Certificate name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **key_vault_certificate** | [**CertificateOrderCertificate**](CertificateOrderCertificate.md)| Key Vault secret csm Id | 

### Return type

[**CertificateOrderCertificate**](CertificateOrderCertificate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_create_or_update_certificate_order**
> CertificateOrder certificate_orders_create_or_update_certificate_order(resource_group_name, name, subscription_id, api_version, certificate_distinguished_name)

Create or update a certificate purchase order

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order import CertificateOrder
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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    certificate_distinguished_name = openapi_client.CertificateOrder() # CertificateOrder | Distinguished name to be used for purchasing certificate

    try:
        # Create or update a certificate purchase order
        api_response = api_instance.certificate_orders_create_or_update_certificate_order(resource_group_name, name, subscription_id, api_version, certificate_distinguished_name)
        print("The response of CertificateOrdersApi->certificate_orders_create_or_update_certificate_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_create_or_update_certificate_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **certificate_distinguished_name** | [**CertificateOrder**](CertificateOrder.md)| Distinguished name to be used for purchasing certificate | 

### Return type

[**CertificateOrder**](CertificateOrder.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_delete_certificate**
> object certificate_orders_delete_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version)

Deletes the certificate associated with the certificate order

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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    certificate_order_name = 'certificate_order_name_example' # str | Certificate name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Deletes the certificate associated with the certificate order
        api_response = api_instance.certificate_orders_delete_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_delete_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_delete_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **certificate_order_name** | **str**| Certificate name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_delete_certificate_order**
> object certificate_orders_delete_certificate_order(resource_group_name, name, subscription_id, api_version)

Delete an existing certificate order

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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete an existing certificate order
        api_response = api_instance.certificate_orders_delete_certificate_order(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_delete_certificate_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_delete_certificate_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_get_certificate**
> CertificateOrderCertificate certificate_orders_get_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version)

Get certificate associated with the certificate order

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order_certificate import CertificateOrderCertificate
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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    certificate_order_name = 'certificate_order_name_example' # str | Certificate name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get certificate associated with the certificate order
        api_response = api_instance.certificate_orders_get_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_get_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_get_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **certificate_order_name** | **str**| Certificate name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**CertificateOrderCertificate**](CertificateOrderCertificate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_get_certificate_order**
> CertificateOrder certificate_orders_get_certificate_order(resource_group_name, name, subscription_id, api_version)

Get a certificate order

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order import CertificateOrder
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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a certificate order
        api_response = api_instance.certificate_orders_get_certificate_order(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_get_certificate_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_get_certificate_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**CertificateOrder**](CertificateOrder.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_get_certificate_orders**
> CertificateOrderCollection certificate_orders_get_certificate_orders(resource_group_name, subscription_id, api_version)

Get certificate orders in a resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order_collection import CertificateOrderCollection
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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get certificate orders in a resource group
        api_response = api_instance.certificate_orders_get_certificate_orders(resource_group_name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_get_certificate_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_get_certificate_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**CertificateOrderCollection**](CertificateOrderCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_get_certificates**
> CertificateOrderCertificateCollection certificate_orders_get_certificates(resource_group_name, certificate_order_name, subscription_id, api_version)

List all certificates associated with a certificate order (only one certificate can be associated with an order at a time)

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order_certificate_collection import CertificateOrderCertificateCollection
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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    certificate_order_name = 'certificate_order_name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List all certificates associated with a certificate order (only one certificate can be associated with an order at a time)
        api_response = api_instance.certificate_orders_get_certificates(resource_group_name, certificate_order_name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_get_certificates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_get_certificates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **certificate_order_name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**CertificateOrderCertificateCollection**](CertificateOrderCertificateCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_reissue_certificate_order**
> object certificate_orders_reissue_certificate_order(resource_group_name, name, subscription_id, api_version, reissue_certificate_order_request)

Reissue an existing certificate order

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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    reissue_certificate_order_request = openapi_client.ReissueCertificateOrderRequest() # ReissueCertificateOrderRequest | Reissue parameters

    try:
        # Reissue an existing certificate order
        api_response = api_instance.certificate_orders_reissue_certificate_order(resource_group_name, name, subscription_id, api_version, reissue_certificate_order_request)
        print("The response of CertificateOrdersApi->certificate_orders_reissue_certificate_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_reissue_certificate_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **reissue_certificate_order_request** | [**ReissueCertificateOrderRequest**](ReissueCertificateOrderRequest.md)| Reissue parameters | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_renew_certificate_order**
> object certificate_orders_renew_certificate_order(resource_group_name, name, subscription_id, api_version, renew_certificate_order_request)

Renew an existing certificate order

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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    renew_certificate_order_request = openapi_client.RenewCertificateOrderRequest() # RenewCertificateOrderRequest | Renew parameters

    try:
        # Renew an existing certificate order
        api_response = api_instance.certificate_orders_renew_certificate_order(resource_group_name, name, subscription_id, api_version, renew_certificate_order_request)
        print("The response of CertificateOrdersApi->certificate_orders_renew_certificate_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_renew_certificate_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **renew_certificate_order_request** | [**RenewCertificateOrderRequest**](RenewCertificateOrderRequest.md)| Renew parameters | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_resend_certificate_email**
> object certificate_orders_resend_certificate_email(resource_group_name, name, subscription_id, api_version)

Resend certificate email

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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate order name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Resend certificate email
        api_response = api_instance.certificate_orders_resend_certificate_email(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_resend_certificate_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_resend_certificate_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate order name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_retrieve_certificate_actions**
> List[CertificateOrderAction] certificate_orders_retrieve_certificate_actions(resource_group_name, name, subscription_id, api_version)

Retrieve the list of certificate actions

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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate order name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieve the list of certificate actions
        api_response = api_instance.certificate_orders_retrieve_certificate_actions(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_retrieve_certificate_actions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_retrieve_certificate_actions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate order name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[CertificateOrderAction]**](CertificateOrderAction.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_retrieve_certificate_email_history**
> List[CertificateEmail] certificate_orders_retrieve_certificate_email_history(resource_group_name, name, subscription_id, api_version)

Retrieve email history

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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate order name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieve email history
        api_response = api_instance.certificate_orders_retrieve_certificate_email_history(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_retrieve_certificate_email_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_retrieve_certificate_email_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate order name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[CertificateEmail]**](CertificateEmail.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_update_certificate**
> CertificateOrderCertificate certificate_orders_update_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version, key_vault_certificate)

Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order_certificate import CertificateOrderCertificate
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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    certificate_order_name = 'certificate_order_name_example' # str | Certificate name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    key_vault_certificate = openapi_client.CertificateOrderCertificate() # CertificateOrderCertificate | Key Vault secret csm Id

    try:
        # Associates a Key Vault secret to a certificate store that will be used for storing the certificate once it's ready
        api_response = api_instance.certificate_orders_update_certificate(resource_group_name, certificate_order_name, name, subscription_id, api_version, key_vault_certificate)
        print("The response of CertificateOrdersApi->certificate_orders_update_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_update_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **certificate_order_name** | **str**| Certificate name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **key_vault_certificate** | [**CertificateOrderCertificate**](CertificateOrderCertificate.md)| Key Vault secret csm Id | 

### Return type

[**CertificateOrderCertificate**](CertificateOrderCertificate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_update_certificate_order**
> CertificateOrder certificate_orders_update_certificate_order(resource_group_name, name, subscription_id, api_version, certificate_distinguished_name)

Create or update a certificate purchase order

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_order import CertificateOrder
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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    certificate_distinguished_name = openapi_client.CertificateOrder() # CertificateOrder | Distinguished name to be used for purchasing certificate

    try:
        # Create or update a certificate purchase order
        api_response = api_instance.certificate_orders_update_certificate_order(resource_group_name, name, subscription_id, api_version, certificate_distinguished_name)
        print("The response of CertificateOrdersApi->certificate_orders_update_certificate_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_update_certificate_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **certificate_distinguished_name** | [**CertificateOrder**](CertificateOrder.md)| Distinguished name to be used for purchasing certificate | 

### Return type

[**CertificateOrder**](CertificateOrder.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_orders_verify_domain_ownership**
> object certificate_orders_verify_domain_ownership(resource_group_name, name, subscription_id, api_version)

Verify domain ownership for this certificate order

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
    api_instance = openapi_client.CertificateOrdersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Azure resource group name
    name = 'name_example' # str | Certificate order name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Verify domain ownership for this certificate order
        api_response = api_instance.certificate_orders_verify_domain_ownership(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificateOrdersApi->certificate_orders_verify_domain_ownership:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateOrdersApi->certificate_orders_verify_domain_ownership: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Azure resource group name | 
 **name** | **str**| Certificate order name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

