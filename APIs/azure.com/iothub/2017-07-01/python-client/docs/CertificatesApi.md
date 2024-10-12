# openapi_client.CertificatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificates_create_or_update**](CertificatesApi.md#certificates_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName} | Upload the certificate to the IoT hub.
[**certificates_delete**](CertificatesApi.md#certificates_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName} | Delete an X509 certificate.
[**certificates_generate_verification_code**](CertificatesApi.md#certificates_generate_verification_code) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/generateVerificationCode | Generate verification code for proof of possession flow.
[**certificates_get**](CertificatesApi.md#certificates_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName} | Get the certificate.
[**certificates_list_by_iot_hub**](CertificatesApi.md#certificates_list_by_iot_hub) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates | Get the certificate list.
[**certificates_verify**](CertificatesApi.md#certificates_verify) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IotHubs/{resourceName}/certificates/{certificateName}/verify | Verify certificate&#39;s private key possession.


# **certificates_create_or_update**
> CertificateDescription certificates_create_or_update(api_version, subscription_id, resource_group_name, resource_name, certificate_name, certificate_description, if_match=if_match)

Upload the certificate to the IoT hub.

Adds new or replaces existing certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_body_description import CertificateBodyDescription
from openapi_client.models.certificate_description import CertificateDescription
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
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    certificate_name = 'certificate_name_example' # str | The name of the certificate
    certificate_description = openapi_client.CertificateBodyDescription() # CertificateBodyDescription | The certificate body.
    if_match = 'if_match_example' # str | ETag of the Certificate. Do not specify for creating a brand new certificate. Required to update an existing certificate. (optional)

    try:
        # Upload the certificate to the IoT hub.
        api_response = api_instance.certificates_create_or_update(api_version, subscription_id, resource_group_name, resource_name, certificate_name, certificate_description, if_match=if_match)
        print("The response of CertificatesApi->certificates_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **certificate_name** | **str**| The name of the certificate | 
 **certificate_description** | [**CertificateBodyDescription**](CertificateBodyDescription.md)| The certificate body. | 
 **if_match** | **str**| ETag of the Certificate. Do not specify for creating a brand new certificate. Required to update an existing certificate. | [optional] 

### Return type

[**CertificateDescription**](CertificateDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If certificate already exist and update was successful, the operation returns HTTP status code of 201 (OK). |  -  |
**201** | If certificate didn&#39;t exist creation was successful, the operation returns HTTP status code of 201 (OK). |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_delete**
> certificates_delete(api_version, subscription_id, resource_group_name, resource_name, certificate_name, if_match)

Delete an X509 certificate.

Deletes an existing X509 certificate or does nothing if it does not exist.

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
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    certificate_name = 'certificate_name_example' # str | The name of the certificate
    if_match = 'if_match_example' # str | ETag of the Certificate.

    try:
        # Delete an X509 certificate.
        api_instance.certificates_delete(api_version, subscription_id, resource_group_name, resource_name, certificate_name, if_match)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **certificate_name** | **str**| The name of the certificate | 
 **if_match** | **str**| ETag of the Certificate. | 

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
**200** | Certificate has been deleted. |  -  |
**204** | Certificate does not exist. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_generate_verification_code**
> CertificateWithNonceDescription certificates_generate_verification_code(api_version, subscription_id, resource_group_name, resource_name, certificate_name, if_match)

Generate verification code for proof of possession flow.

Generates verification code for proof of possession flow. The verification code will be used to generate a leaf certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_with_nonce_description import CertificateWithNonceDescription
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
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    certificate_name = 'certificate_name_example' # str | The name of the certificate
    if_match = 'if_match_example' # str | ETag of the Certificate.

    try:
        # Generate verification code for proof of possession flow.
        api_response = api_instance.certificates_generate_verification_code(api_version, subscription_id, resource_group_name, resource_name, certificate_name, if_match)
        print("The response of CertificatesApi->certificates_generate_verification_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_generate_verification_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **certificate_name** | **str**| The name of the certificate | 
 **if_match** | **str**| ETag of the Certificate. | 

### Return type

[**CertificateWithNonceDescription**](CertificateWithNonceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains the certificate. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_get**
> CertificateDescription certificates_get(api_version, subscription_id, resource_group_name, resource_name, certificate_name)

Get the certificate.

Returns the certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_description import CertificateDescription
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
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    certificate_name = 'certificate_name_example' # str | The name of the certificate

    try:
        # Get the certificate.
        api_response = api_instance.certificates_get(api_version, subscription_id, resource_group_name, resource_name, certificate_name)
        print("The response of CertificatesApi->certificates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **certificate_name** | **str**| The name of the certificate | 

### Return type

[**CertificateDescription**](CertificateDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains the certificate. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_list_by_iot_hub**
> CertificateListDescription certificates_list_by_iot_hub(api_version, subscription_id, resource_group_name, resource_name)

Get the certificate list.

Returns the list of certificates.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_list_description import CertificateListDescription
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
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.

    try:
        # Get the certificate list.
        api_response = api_instance.certificates_list_by_iot_hub(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of CertificatesApi->certificates_list_by_iot_hub:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_list_by_iot_hub: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 

### Return type

[**CertificateListDescription**](CertificateListDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the certificate list. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_verify**
> CertificateDescription certificates_verify(api_version, subscription_id, resource_group_name, resource_name, certificate_name, if_match, certificate_verification_body)

Verify certificate's private key possession.

Verifies the certificate's private key possession by providing the leaf cert issued by the verifying pre uploaded certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_description import CertificateDescription
from openapi_client.models.certificate_verification_description import CertificateVerificationDescription
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
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the IoT hub.
    resource_name = 'resource_name_example' # str | The name of the IoT hub.
    certificate_name = 'certificate_name_example' # str | The name of the certificate
    if_match = 'if_match_example' # str | ETag of the Certificate.
    certificate_verification_body = openapi_client.CertificateVerificationDescription() # CertificateVerificationDescription | The name of the certificate

    try:
        # Verify certificate's private key possession.
        api_response = api_instance.certificates_verify(api_version, subscription_id, resource_group_name, resource_name, certificate_name, if_match, certificate_verification_body)
        print("The response of CertificatesApi->certificates_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the IoT hub. | 
 **resource_name** | **str**| The name of the IoT hub. | 
 **certificate_name** | **str**| The name of the certificate | 
 **if_match** | **str**| ETag of the Certificate. | 
 **certificate_verification_body** | [**CertificateVerificationDescription**](CertificateVerificationDescription.md)| The name of the certificate | 

### Return type

[**CertificateDescription**](CertificateDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains the certificate. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

