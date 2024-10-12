# openapi_client.CertificatesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_certificate**](CertificatesApi.md#backup_certificate) | **POST** /certificates/{certificate-name}/backup | Backs up the specified certificate.
[**create_certificate**](CertificatesApi.md#create_certificate) | **POST** /certificates/{certificate-name}/create | Creates a new certificate.
[**delete_certificate**](CertificatesApi.md#delete_certificate) | **DELETE** /certificates/{certificate-name} | Deletes a certificate from a specified key vault.
[**delete_certificate_contacts**](CertificatesApi.md#delete_certificate_contacts) | **DELETE** /certificates/contacts | Deletes the certificate contacts for a specified key vault.
[**delete_certificate_issuer**](CertificatesApi.md#delete_certificate_issuer) | **DELETE** /certificates/issuers/{issuer-name} | Deletes the specified certificate issuer.
[**delete_certificate_operation**](CertificatesApi.md#delete_certificate_operation) | **DELETE** /certificates/{certificate-name}/pending | Deletes the creation operation for a specific certificate.
[**get_certificate**](CertificatesApi.md#get_certificate) | **GET** /certificates/{certificate-name}/{certificate-version} | Gets information about a certificate.
[**get_certificate_contacts**](CertificatesApi.md#get_certificate_contacts) | **GET** /certificates/contacts | Lists the certificate contacts for a specified key vault.
[**get_certificate_issuer**](CertificatesApi.md#get_certificate_issuer) | **GET** /certificates/issuers/{issuer-name} | Lists the specified certificate issuer.
[**get_certificate_issuers**](CertificatesApi.md#get_certificate_issuers) | **GET** /certificates/issuers | List certificate issuers for a specified key vault.
[**get_certificate_operation**](CertificatesApi.md#get_certificate_operation) | **GET** /certificates/{certificate-name}/pending | Gets the creation operation of a certificate.
[**get_certificate_policy**](CertificatesApi.md#get_certificate_policy) | **GET** /certificates/{certificate-name}/policy | Lists the policy for a certificate.
[**get_certificate_versions**](CertificatesApi.md#get_certificate_versions) | **GET** /certificates/{certificate-name}/versions | List the versions of a certificate.
[**get_certificates**](CertificatesApi.md#get_certificates) | **GET** /certificates | List certificates in a specified key vault
[**import_certificate**](CertificatesApi.md#import_certificate) | **POST** /certificates/{certificate-name}/import | Imports a certificate into a specified key vault.
[**merge_certificate**](CertificatesApi.md#merge_certificate) | **POST** /certificates/{certificate-name}/pending/merge | Merges a certificate or a certificate chain with a key pair existing on the server.
[**restore_certificate**](CertificatesApi.md#restore_certificate) | **POST** /certificates/restore | Restores a backed up certificate to a vault.
[**set_certificate_contacts**](CertificatesApi.md#set_certificate_contacts) | **PUT** /certificates/contacts | Sets the certificate contacts for the specified key vault.
[**set_certificate_issuer**](CertificatesApi.md#set_certificate_issuer) | **PUT** /certificates/issuers/{issuer-name} | Sets the specified certificate issuer.
[**update_certificate**](CertificatesApi.md#update_certificate) | **PATCH** /certificates/{certificate-name}/{certificate-version} | Updates the specified attributes associated with the given certificate.
[**update_certificate_issuer**](CertificatesApi.md#update_certificate_issuer) | **PATCH** /certificates/issuers/{issuer-name} | Updates the specified certificate issuer.
[**update_certificate_operation**](CertificatesApi.md#update_certificate_operation) | **PATCH** /certificates/{certificate-name}/pending | Updates a certificate operation.
[**update_certificate_policy**](CertificatesApi.md#update_certificate_policy) | **PATCH** /certificates/{certificate-name}/policy | Updates the policy for a certificate.


# **backup_certificate**
> BackupCertificateResult backup_certificate(certificate_name, api_version)

Backs up the specified certificate.

Requests that a backup of the specified certificate be downloaded to the client. All versions of the certificate will be downloaded. This operation requires the certificates/backup permission.

### Example


```python
import openapi_client
from openapi_client.models.backup_certificate_result import BackupCertificateResult
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Backs up the specified certificate.
        api_response = api_instance.backup_certificate(certificate_name, api_version)
        print("The response of CertificatesApi->backup_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->backup_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**BackupCertificateResult**](BackupCertificateResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The backup blob containing the backed up certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_certificate**
> CertificateOperation create_certificate(certificate_name, api_version, parameters)

Creates a new certificate.

If this is the first version, the certificate resource is created. This operation requires the certificates/create permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_create_parameters import CertificateCreateParameters
from openapi_client.models.certificate_operation import CertificateOperation
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.CertificateCreateParameters() # CertificateCreateParameters | The parameters to create a certificate.

    try:
        # Creates a new certificate.
        api_response = api_instance.create_certificate(certificate_name, api_version, parameters)
        print("The response of CertificatesApi->create_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->create_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**CertificateCreateParameters**](CertificateCreateParameters.md)| The parameters to create a certificate. | 

### Return type

[**CertificateOperation**](CertificateOperation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Created certificate bundle. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_certificate**
> DeletedCertificateBundle delete_certificate(certificate_name, api_version)

Deletes a certificate from a specified key vault.

Deletes all versions of a certificate object along with its associated policy. Delete certificate cannot be used to remove individual versions of a certificate object. This operation requires the certificates/delete permission.

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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Deletes a certificate from a specified key vault.
        api_response = api_instance.delete_certificate(certificate_name, api_version)
        print("The response of CertificatesApi->delete_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->delete_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
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
**200** | The deleted certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_certificate_contacts**
> Contacts delete_certificate_contacts(api_version)

Deletes the certificate contacts for a specified key vault.

Deletes the certificate contacts for a specified key vault certificate. This operation requires the certificates/managecontacts permission.

### Example


```python
import openapi_client
from openapi_client.models.contacts import Contacts
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
    api_instance = openapi_client.CertificatesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Deletes the certificate contacts for a specified key vault.
        api_response = api_instance.delete_certificate_contacts(api_version)
        print("The response of CertificatesApi->delete_certificate_contacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->delete_certificate_contacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 

### Return type

[**Contacts**](Contacts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The contacts for the key vault certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_certificate_issuer**
> IssuerBundle delete_certificate_issuer(issuer_name, api_version)

Deletes the specified certificate issuer.

The DeleteCertificateIssuer operation permanently removes the specified certificate issuer from the vault. This operation requires the certificates/manageissuers/deleteissuers permission.

### Example


```python
import openapi_client
from openapi_client.models.issuer_bundle import IssuerBundle
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
    api_instance = openapi_client.CertificatesApi(api_client)
    issuer_name = 'issuer_name_example' # str | The name of the issuer.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Deletes the specified certificate issuer.
        api_response = api_instance.delete_certificate_issuer(issuer_name, api_version)
        print("The response of CertificatesApi->delete_certificate_issuer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->delete_certificate_issuer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issuer_name** | **str**| The name of the issuer. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**IssuerBundle**](IssuerBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The issuer for the key vault certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_certificate_operation**
> CertificateOperation delete_certificate_operation(certificate_name, api_version)

Deletes the creation operation for a specific certificate.

Deletes the creation operation for a specified certificate that is in the process of being created. The certificate is no longer created. This operation requires the certificates/update permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_operation import CertificateOperation
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Deletes the creation operation for a specific certificate.
        api_response = api_instance.delete_certificate_operation(certificate_name, api_version)
        print("The response of CertificatesApi->delete_certificate_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->delete_certificate_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**CertificateOperation**](CertificateOperation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A message containing the certificate operation response. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_certificate**
> CertificateBundle get_certificate(certificate_name, certificate_version, api_version)

Gets information about a certificate.

Gets information about a specific certificate. This operation requires the certificates/get permission.

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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate in the given vault.
    certificate_version = 'certificate_version_example' # str | The version of the certificate.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Gets information about a certificate.
        api_response = api_instance.get_certificate(certificate_name, certificate_version, api_version)
        print("The response of CertificatesApi->get_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->get_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate in the given vault. | 
 **certificate_version** | **str**| The version of the certificate. | 
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
**200** | The retrieved certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_certificate_contacts**
> Contacts get_certificate_contacts(api_version)

Lists the certificate contacts for a specified key vault.

The GetCertificateContacts operation returns the set of certificate contact resources in the specified key vault. This operation requires the certificates/managecontacts permission.

### Example


```python
import openapi_client
from openapi_client.models.contacts import Contacts
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
    api_instance = openapi_client.CertificatesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Lists the certificate contacts for a specified key vault.
        api_response = api_instance.get_certificate_contacts(api_version)
        print("The response of CertificatesApi->get_certificate_contacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->get_certificate_contacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 

### Return type

[**Contacts**](Contacts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The contacts for the key vault certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_certificate_issuer**
> IssuerBundle get_certificate_issuer(issuer_name, api_version)

Lists the specified certificate issuer.

The GetCertificateIssuer operation returns the specified certificate issuer resources in the specified key vault. This operation requires the certificates/manageissuers/getissuers permission.

### Example


```python
import openapi_client
from openapi_client.models.issuer_bundle import IssuerBundle
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
    api_instance = openapi_client.CertificatesApi(api_client)
    issuer_name = 'issuer_name_example' # str | The name of the issuer.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Lists the specified certificate issuer.
        api_response = api_instance.get_certificate_issuer(issuer_name, api_version)
        print("The response of CertificatesApi->get_certificate_issuer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->get_certificate_issuer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issuer_name** | **str**| The name of the issuer. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**IssuerBundle**](IssuerBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The issuer for the key vault certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_certificate_issuers**
> CertificateIssuerListResult get_certificate_issuers(api_version, maxresults=maxresults)

List certificate issuers for a specified key vault.

The GetCertificateIssuers operation returns the set of certificate issuer resources in the specified key vault. This operation requires the certificates/manageissuers/getissuers permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_issuer_list_result import CertificateIssuerListResult
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
    api_instance = openapi_client.CertificatesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        # List certificate issuers for a specified key vault.
        api_response = api_instance.get_certificate_issuers(api_version, maxresults=maxresults)
        print("The response of CertificatesApi->get_certificate_issuers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->get_certificate_issuers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**CertificateIssuerListResult**](CertificateIssuerListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of certificate issuers in a key vault along with a link to the next page of certificate issuers. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_certificate_operation**
> CertificateOperation get_certificate_operation(certificate_name, api_version)

Gets the creation operation of a certificate.

Gets the creation operation associated with a specified certificate. This operation requires the certificates/get permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_operation import CertificateOperation
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Gets the creation operation of a certificate.
        api_response = api_instance.get_certificate_operation(certificate_name, api_version)
        print("The response of CertificatesApi->get_certificate_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->get_certificate_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**CertificateOperation**](CertificateOperation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The certificate operation response. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_certificate_policy**
> CertificatePolicy get_certificate_policy(certificate_name, api_version)

Lists the policy for a certificate.

The GetCertificatePolicy operation returns the specified certificate policy resources in the specified key vault. This operation requires the certificates/get permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_policy import CertificatePolicy
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate in a given key vault.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Lists the policy for a certificate.
        api_response = api_instance.get_certificate_policy(certificate_name, api_version)
        print("The response of CertificatesApi->get_certificate_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->get_certificate_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate in a given key vault. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**CertificatePolicy**](CertificatePolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The certificate policy. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_certificate_versions**
> CertificateListResult get_certificate_versions(certificate_name, api_version, maxresults=maxresults)

List the versions of a certificate.

The GetCertificateVersions operation returns the versions of a certificate in the specified key vault. This operation requires the certificates/list permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_list_result import CertificateListResult
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)

    try:
        # List the versions of a certificate.
        api_response = api_instance.get_certificate_versions(certificate_name, api_version, maxresults=maxresults)
        print("The response of CertificatesApi->get_certificate_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->get_certificate_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 

### Return type

[**CertificateListResult**](CertificateListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of certificates in the key vault along with a link to the next page of keys. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_certificates**
> CertificateListResult get_certificates(api_version, maxresults=maxresults, include_pending=include_pending)

List certificates in a specified key vault

The GetCertificates operation returns the set of certificates resources in the specified key vault. This operation requires the certificates/list permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_list_result import CertificateListResult
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
    api_instance = openapi_client.CertificatesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    maxresults = 56 # int | Maximum number of results to return in a page. If not specified the service will return up to 25 results. (optional)
    include_pending = True # bool | Specifies whether to include certificates which are not completely provisioned. (optional)

    try:
        # List certificates in a specified key vault
        api_response = api_instance.get_certificates(api_version, maxresults=maxresults, include_pending=include_pending)
        print("The response of CertificatesApi->get_certificates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->get_certificates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **maxresults** | **int**| Maximum number of results to return in a page. If not specified the service will return up to 25 results. | [optional] 
 **include_pending** | **bool**| Specifies whether to include certificates which are not completely provisioned. | [optional] 

### Return type

[**CertificateListResult**](CertificateListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response message containing a list of certificates along with a link to the next page of certificates. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_certificate**
> CertificateBundle import_certificate(certificate_name, api_version, parameters)

Imports a certificate into a specified key vault.

Imports an existing valid certificate, containing a private key, into Azure Key Vault. The certificate to be imported can be in either PFX or PEM format. If the certificate is in PEM format the PEM file must contain the key as well as x509 certificates. This operation requires the certificates/import permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_bundle import CertificateBundle
from openapi_client.models.certificate_import_parameters import CertificateImportParameters
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.CertificateImportParameters() # CertificateImportParameters | The parameters to import the certificate.

    try:
        # Imports a certificate into a specified key vault.
        api_response = api_instance.import_certificate(certificate_name, api_version, parameters)
        print("The response of CertificatesApi->import_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->import_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**CertificateImportParameters**](CertificateImportParameters.md)| The parameters to import the certificate. | 

### Return type

[**CertificateBundle**](CertificateBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Imported certificate bundle to the vault. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **merge_certificate**
> CertificateBundle merge_certificate(certificate_name, api_version, parameters)

Merges a certificate or a certificate chain with a key pair existing on the server.

The MergeCertificate operation performs the merging of a certificate or certificate chain with a key pair currently available in the service. This operation requires the certificates/create permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_bundle import CertificateBundle
from openapi_client.models.certificate_merge_parameters import CertificateMergeParameters
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.CertificateMergeParameters() # CertificateMergeParameters | The parameters to merge certificate.

    try:
        # Merges a certificate or a certificate chain with a key pair existing on the server.
        api_response = api_instance.merge_certificate(certificate_name, api_version, parameters)
        print("The response of CertificatesApi->merge_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->merge_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**CertificateMergeParameters**](CertificateMergeParameters.md)| The parameters to merge certificate. | 

### Return type

[**CertificateBundle**](CertificateBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Merged certificate bundle to the vault. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_certificate**
> CertificateBundle restore_certificate(api_version, parameters)

Restores a backed up certificate to a vault.

Restores a backed up certificate, and all its versions, to a vault. This operation requires the certificates/restore permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_bundle import CertificateBundle
from openapi_client.models.certificate_restore_parameters import CertificateRestoreParameters
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
    api_instance = openapi_client.CertificatesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.CertificateRestoreParameters() # CertificateRestoreParameters | The parameters to restore the certificate.

    try:
        # Restores a backed up certificate to a vault.
        api_response = api_instance.restore_certificate(api_version, parameters)
        print("The response of CertificatesApi->restore_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->restore_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **parameters** | [**CertificateRestoreParameters**](CertificateRestoreParameters.md)| The parameters to restore the certificate. | 

### Return type

[**CertificateBundle**](CertificateBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Restored certificate bundle in the vault. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_certificate_contacts**
> Contacts set_certificate_contacts(api_version, contacts)

Sets the certificate contacts for the specified key vault.

Sets the certificate contacts for the specified key vault. This operation requires the certificates/managecontacts permission.

### Example


```python
import openapi_client
from openapi_client.models.contacts import Contacts
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
    api_instance = openapi_client.CertificatesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    contacts = openapi_client.Contacts() # Contacts | The contacts for the key vault certificate.

    try:
        # Sets the certificate contacts for the specified key vault.
        api_response = api_instance.set_certificate_contacts(api_version, contacts)
        print("The response of CertificatesApi->set_certificate_contacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->set_certificate_contacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **contacts** | [**Contacts**](Contacts.md)| The contacts for the key vault certificate. | 

### Return type

[**Contacts**](Contacts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The contacts for the key vault certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_certificate_issuer**
> IssuerBundle set_certificate_issuer(issuer_name, api_version, parameter)

Sets the specified certificate issuer.

The SetCertificateIssuer operation adds or updates the specified certificate issuer. This operation requires the certificates/setissuers permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_issuer_set_parameters import CertificateIssuerSetParameters
from openapi_client.models.issuer_bundle import IssuerBundle
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
    api_instance = openapi_client.CertificatesApi(api_client)
    issuer_name = 'issuer_name_example' # str | The name of the issuer.
    api_version = 'api_version_example' # str | Client API version.
    parameter = openapi_client.CertificateIssuerSetParameters() # CertificateIssuerSetParameters | Certificate issuer set parameter.

    try:
        # Sets the specified certificate issuer.
        api_response = api_instance.set_certificate_issuer(issuer_name, api_version, parameter)
        print("The response of CertificatesApi->set_certificate_issuer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->set_certificate_issuer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issuer_name** | **str**| The name of the issuer. | 
 **api_version** | **str**| Client API version. | 
 **parameter** | [**CertificateIssuerSetParameters**](CertificateIssuerSetParameters.md)| Certificate issuer set parameter. | 

### Return type

[**IssuerBundle**](IssuerBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The issuer for the key vault certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_certificate**
> CertificateBundle update_certificate(certificate_name, certificate_version, api_version, parameters)

Updates the specified attributes associated with the given certificate.

The UpdateCertificate operation applies the specified update on the given certificate; the only elements updated are the certificate's attributes. This operation requires the certificates/update permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_bundle import CertificateBundle
from openapi_client.models.certificate_update_parameters import CertificateUpdateParameters
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate in the given key vault.
    certificate_version = 'certificate_version_example' # str | The version of the certificate.
    api_version = 'api_version_example' # str | Client API version.
    parameters = openapi_client.CertificateUpdateParameters() # CertificateUpdateParameters | The parameters for certificate update.

    try:
        # Updates the specified attributes associated with the given certificate.
        api_response = api_instance.update_certificate(certificate_name, certificate_version, api_version, parameters)
        print("The response of CertificatesApi->update_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->update_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate in the given key vault. | 
 **certificate_version** | **str**| The version of the certificate. | 
 **api_version** | **str**| Client API version. | 
 **parameters** | [**CertificateUpdateParameters**](CertificateUpdateParameters.md)| The parameters for certificate update. | 

### Return type

[**CertificateBundle**](CertificateBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_certificate_issuer**
> IssuerBundle update_certificate_issuer(issuer_name, api_version, parameter)

Updates the specified certificate issuer.

The UpdateCertificateIssuer operation performs an update on the specified certificate issuer entity. This operation requires the certificates/setissuers permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_issuer_update_parameters import CertificateIssuerUpdateParameters
from openapi_client.models.issuer_bundle import IssuerBundle
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
    api_instance = openapi_client.CertificatesApi(api_client)
    issuer_name = 'issuer_name_example' # str | The name of the issuer.
    api_version = 'api_version_example' # str | Client API version.
    parameter = openapi_client.CertificateIssuerUpdateParameters() # CertificateIssuerUpdateParameters | Certificate issuer update parameter.

    try:
        # Updates the specified certificate issuer.
        api_response = api_instance.update_certificate_issuer(issuer_name, api_version, parameter)
        print("The response of CertificatesApi->update_certificate_issuer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->update_certificate_issuer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issuer_name** | **str**| The name of the issuer. | 
 **api_version** | **str**| Client API version. | 
 **parameter** | [**CertificateIssuerUpdateParameters**](CertificateIssuerUpdateParameters.md)| Certificate issuer update parameter. | 

### Return type

[**IssuerBundle**](IssuerBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The issuer for the key vault certificate. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_certificate_operation**
> CertificateOperation update_certificate_operation(certificate_name, api_version, certificate_operation)

Updates a certificate operation.

Updates a certificate creation operation that is already in progress. This operation requires the certificates/update permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_operation import CertificateOperation
from openapi_client.models.certificate_operation_update_parameter import CertificateOperationUpdateParameter
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate.
    api_version = 'api_version_example' # str | Client API version.
    certificate_operation = openapi_client.CertificateOperationUpdateParameter() # CertificateOperationUpdateParameter | The certificate operation response.

    try:
        # Updates a certificate operation.
        api_response = api_instance.update_certificate_operation(certificate_name, api_version, certificate_operation)
        print("The response of CertificatesApi->update_certificate_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->update_certificate_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate. | 
 **api_version** | **str**| Client API version. | 
 **certificate_operation** | [**CertificateOperationUpdateParameter**](CertificateOperationUpdateParameter.md)| The certificate operation response. | 

### Return type

[**CertificateOperation**](CertificateOperation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A message containing the certificate operation response. |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_certificate_policy**
> CertificatePolicy update_certificate_policy(certificate_name, api_version, certificate_policy)

Updates the policy for a certificate.

Set specified members in the certificate policy. Leave others as null. This operation requires the certificates/update permission.

### Example


```python
import openapi_client
from openapi_client.models.certificate_policy import CertificatePolicy
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
    api_instance = openapi_client.CertificatesApi(api_client)
    certificate_name = 'certificate_name_example' # str | The name of the certificate in the given vault.
    api_version = 'api_version_example' # str | Client API version.
    certificate_policy = openapi_client.CertificatePolicy() # CertificatePolicy | The policy for the certificate.

    try:
        # Updates the policy for a certificate.
        api_response = api_instance.update_certificate_policy(certificate_name, api_version, certificate_policy)
        print("The response of CertificatesApi->update_certificate_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->update_certificate_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The name of the certificate in the given vault. | 
 **api_version** | **str**| Client API version. | 
 **certificate_policy** | [**CertificatePolicy**](CertificatePolicy.md)| The policy for the certificate. | 

### Return type

[**CertificatePolicy**](CertificatePolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The certificate policy |  -  |
**0** | Key Vault error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

