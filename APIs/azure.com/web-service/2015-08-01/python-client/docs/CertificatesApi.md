# openapi_client.CertificatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificates_create_or_update_certificate**](CertificatesApi.md#certificates_create_or_update_certificate) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name} | Creates or modifies an existing certificate.
[**certificates_create_or_update_csr**](CertificatesApi.md#certificates_create_or_update_csr) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/csrs/{name} | Creates or modifies an existing certificate signing request.
[**certificates_delete_certificate**](CertificatesApi.md#certificates_delete_certificate) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name} | Delete a certificate by name in a specified subscription and resourcegroup.
[**certificates_delete_csr**](CertificatesApi.md#certificates_delete_csr) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/csrs/{name} | Delete the certificate signing request.
[**certificates_get_certificate**](CertificatesApi.md#certificates_get_certificate) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name} | Get a certificate by certificate name for a subscription in the specified resource group.
[**certificates_get_certificates**](CertificatesApi.md#certificates_get_certificates) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates | Get certificates for a subscription in the specified resource group.
[**certificates_get_csr**](CertificatesApi.md#certificates_get_csr) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/csrs/{name} | Gets a certificate signing request by certificate name for a subscription in the specified resource group
[**certificates_get_csrs**](CertificatesApi.md#certificates_get_csrs) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/csrs | Gets the certificate signing requests for a subscription in the specified resource group
[**certificates_update_certificate**](CertificatesApi.md#certificates_update_certificate) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name} | Creates or modifies an existing certificate.
[**certificates_update_csr**](CertificatesApi.md#certificates_update_csr) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/csrs/{name} | Creates or modifies an existing certificate signing request.


# **certificates_create_or_update_certificate**
> Certificate certificates_create_or_update_certificate(resource_group_name, name, subscription_id, api_version, certificate_envelope)

Creates or modifies an existing certificate.

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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    certificate_envelope = openapi_client.Certificate() # Certificate | Details of certificate if it exists already.

    try:
        # Creates or modifies an existing certificate.
        api_response = api_instance.certificates_create_or_update_certificate(resource_group_name, name, subscription_id, api_version, certificate_envelope)
        print("The response of CertificatesApi->certificates_create_or_update_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_create_or_update_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **certificate_envelope** | [**Certificate**](Certificate.md)| Details of certificate if it exists already. | 

### Return type

[**Certificate**](Certificate.md)

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

# **certificates_create_or_update_csr**
> Csr certificates_create_or_update_csr(resource_group_name, name, subscription_id, api_version, csr_envelope)

Creates or modifies an existing certificate signing request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csr import Csr
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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    csr_envelope = openapi_client.Csr() # Csr | Details of certificate signing request if it exists already.

    try:
        # Creates or modifies an existing certificate signing request.
        api_response = api_instance.certificates_create_or_update_csr(resource_group_name, name, subscription_id, api_version, csr_envelope)
        print("The response of CertificatesApi->certificates_create_or_update_csr:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_create_or_update_csr: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **csr_envelope** | [**Csr**](Csr.md)| Details of certificate signing request if it exists already. | 

### Return type

[**Csr**](Csr.md)

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

# **certificates_delete_certificate**
> object certificates_delete_certificate(resource_group_name, name, subscription_id, api_version)

Delete a certificate by name in a specified subscription and resourcegroup.

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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the certificate to be deleted.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete a certificate by name in a specified subscription and resourcegroup.
        api_response = api_instance.certificates_delete_certificate(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificatesApi->certificates_delete_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_delete_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the certificate to be deleted. | 
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

# **certificates_delete_csr**
> object certificates_delete_csr(resource_group_name, name, subscription_id, api_version)

Delete the certificate signing request.

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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the certificate signing request.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete the certificate signing request.
        api_response = api_instance.certificates_delete_csr(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificatesApi->certificates_delete_csr:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_delete_csr: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the certificate signing request. | 
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

# **certificates_get_certificate**
> Certificate certificates_get_certificate(resource_group_name, name, subscription_id, api_version)

Get a certificate by certificate name for a subscription in the specified resource group.

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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a certificate by certificate name for a subscription in the specified resource group.
        api_response = api_instance.certificates_get_certificate(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificatesApi->certificates_get_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_get_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**Certificate**](Certificate.md)

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

# **certificates_get_certificates**
> CertificateCollection certificates_get_certificates(resource_group_name, subscription_id, api_version)

Get certificates for a subscription in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_collection import CertificateCollection
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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get certificates for a subscription in the specified resource group.
        api_response = api_instance.certificates_get_certificates(resource_group_name, subscription_id, api_version)
        print("The response of CertificatesApi->certificates_get_certificates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_get_certificates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**CertificateCollection**](CertificateCollection.md)

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

# **certificates_get_csr**
> Csr certificates_get_csr(resource_group_name, name, subscription_id, api_version)

Gets a certificate signing request by certificate name for a subscription in the specified resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csr import Csr
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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets a certificate signing request by certificate name for a subscription in the specified resource group
        api_response = api_instance.certificates_get_csr(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificatesApi->certificates_get_csr:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_get_csr: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**Csr**](Csr.md)

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

# **certificates_get_csrs**
> List[Csr] certificates_get_csrs(resource_group_name, subscription_id, api_version)

Gets the certificate signing requests for a subscription in the specified resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csr import Csr
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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the certificate signing requests for a subscription in the specified resource group
        api_response = api_instance.certificates_get_csrs(resource_group_name, subscription_id, api_version)
        print("The response of CertificatesApi->certificates_get_csrs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_get_csrs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**List[Csr]**](Csr.md)

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

# **certificates_update_certificate**
> Certificate certificates_update_certificate(resource_group_name, name, subscription_id, api_version, certificate_envelope)

Creates or modifies an existing certificate.

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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    certificate_envelope = openapi_client.Certificate() # Certificate | Details of certificate if it exists already.

    try:
        # Creates or modifies an existing certificate.
        api_response = api_instance.certificates_update_certificate(resource_group_name, name, subscription_id, api_version, certificate_envelope)
        print("The response of CertificatesApi->certificates_update_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_update_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **certificate_envelope** | [**Certificate**](Certificate.md)| Details of certificate if it exists already. | 

### Return type

[**Certificate**](Certificate.md)

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

# **certificates_update_csr**
> Csr certificates_update_csr(resource_group_name, name, subscription_id, api_version, csr_envelope)

Creates or modifies an existing certificate signing request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csr import Csr
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
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    csr_envelope = openapi_client.Csr() # Csr | Details of certificate signing request if it exists already.

    try:
        # Creates or modifies an existing certificate signing request.
        api_response = api_instance.certificates_update_csr(resource_group_name, name, subscription_id, api_version, csr_envelope)
        print("The response of CertificatesApi->certificates_update_csr:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_update_csr: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **csr_envelope** | [**Csr**](Csr.md)| Details of certificate signing request if it exists already. | 

### Return type

[**Csr**](Csr.md)

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

