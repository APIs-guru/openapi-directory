# openapi_client.DeletedCertificatesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_deleted_certificate**](DeletedCertificatesApi.md#get_deleted_certificate) | **GET** /deletedcertificates/{certificate-name} | Retrieves information about the specified deleted certificate.
[**get_deleted_certificates**](DeletedCertificatesApi.md#get_deleted_certificates) | **GET** /deletedcertificates | Lists the deleted certificates in the specified vault currently available for recovery.
[**purge_deleted_certificate**](DeletedCertificatesApi.md#purge_deleted_certificate) | **DELETE** /deletedcertificates/{certificate-name} | Permanently deletes the specified deleted certificate.
[**recover_deleted_certificate**](DeletedCertificatesApi.md#recover_deleted_certificate) | **POST** /deletedcertificates/{certificate-name}/recover | Recovers the deleted certificate back to its current version under /certificates.


# **get_deleted_certificate**
> DeletedCertificateBundle get_deleted_certificate(certificate_name, api_version)

Retrieves information about the specified deleted certificate.

The GetDeletedCertificate operation retrieves the deleted certificate information plus its attributes, such as retention interval, scheduled permanent deletion and the current deletion recovery level. This operation requires the certificates/get permission.

### Example


```python
import openapi_client
from openapi_client.models.deleted_certificate_bundle import DeletedCertificateBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedCertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Retrieves information about the specified deleted certificate.
        api_response = api_instance.get_deleted_certificate(certificate_name, api_version)
        print("The response of DeletedCertificatesApi->get_deleted_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedCertificatesApi->get_deleted_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate | 
 **api_version** | **str**| Client API version. | 

### Return type

[**DeletedCertificateBundle**](DeletedCertificateBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Certificate bundle of the certificate and its attributes |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deleted_certificates**
> DeletedCertificateListResult get_deleted_certificates(api_version, maxresults=maxresults, include_pending=include_pending)

Lists the deleted certificates in the specified vault currently available for recovery.

The GetDeletedCertificates operation retrieves the certificates in the current vault which are in a deleted state and ready for recovery or purging. This operation includes deletion-specific information. This operation requires the certificates/get/list permission. This operation can only be enabled on soft-delete enabled vaults.

### Example


```python
import openapi_client
from openapi_client.models.deleted_certificate_list_result import DeletedCertificateListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedCertificatesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)
    include_pending = True # bool | Specifies whether to include certificates which are not completely provisioned. (optional)

    try:
        # Lists the deleted certificates in the specified vault currently available for recovery.
        api_response = api_instance.get_deleted_certificates(api_version, maxresults=maxresults, include_pending=include_pending)
        print("The response of DeletedCertificatesApi->get_deleted_certificates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedCertificatesApi->get_deleted_certificates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 
 **include_pending** | **bool**| Specifies whether to include certificates which are not completely provisioned. | [optional] 

### Return type

[**DeletedCertificateListResult**](DeletedCertificateListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of deleted certificates in the vault along with a link to the next page of deleted certificates |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purge_deleted_certificate**
> purge_deleted_certificate(certificate_name, api_version)

Permanently deletes the specified deleted certificate.

The PurgeDeletedCertificate operation performs an irreversible deletion of the specified certificate, without possibility for recovery. The operation is not available if the recovery level does not specify 'Purgeable'. This operation requires the certificate/purge permission.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedCertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Permanently deletes the specified deleted certificate.
        api_instance.purge_deleted_certificate(certificate_name, api_version)
    except Exception as e:
        print("Exception when calling DeletedCertificatesApi->purge_deleted_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content signaling that the certificate was purged forever. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recover_deleted_certificate**
> CertificateBundle recover_deleted_certificate(certificate_name, api_version)

Recovers the deleted certificate back to its current version under /certificates.

The RecoverDeletedCertificate operation performs the reversal of the Delete operation. The operation is applicable in vaults enabled for soft-delete, and must be issued during the retention interval (available in the deleted certificate's attributes). This operation requires the certificates/recover permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_bundle import CertificateBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeletedCertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the deleted certificate
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Recovers the deleted certificate back to its current version under /certificates.
        api_response = api_instance.recover_deleted_certificate(certificate_name, api_version)
        print("The response of DeletedCertificatesApi->recover_deleted_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeletedCertificatesApi->recover_deleted_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the deleted certificate | 
 **api_version** | **str**| Client API version. | 

### Return type

[**CertificateBundle**](CertificateBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Certificate bundle of the original certificate and its attributes |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

