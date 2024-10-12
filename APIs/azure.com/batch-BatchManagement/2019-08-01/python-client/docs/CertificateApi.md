# openapi_client.CertificateApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificate_cancel_deletion**](CertificateApi.md#certificate_cancel_deletion) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}/cancelDelete | Cancels a failed deletion of a certificate from the specified account.
[**certificate_create**](CertificateApi.md#certificate_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName} | 
[**certificate_delete**](CertificateApi.md#certificate_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName} | 
[**certificate_get**](CertificateApi.md#certificate_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName} | 
[**certificate_list_by_batch_account**](CertificateApi.md#certificate_list_by_batch_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates | 
[**certificate_update**](CertificateApi.md#certificate_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName} | 


# **certificate_cancel_deletion**
> Certificate certificate_cancel_deletion(resource_group_name, account_name, certificate_name, api_version, subscription_id)

Cancels a failed deletion of a certificate from the specified account.

If you try to delete a certificate that is being used by a pool or compute node, the status of the certificate changes to deleteFailed. If you decide that you want to continue using the certificate, you can use this operation to set the status of the certificate back to active. If you intend to delete the certificate, you do not need to run this operation after the deletion failed. You must make sure that the certificate is not being used by any resources, and then you can try again to delete the certificate.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    certificate_name = 'certificate_name_example' # str | The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        # Cancels a failed deletion of a certificate from the specified account.
        api_response = api_instance.certificate_cancel_deletion(resource_group_name, account_name, certificate_name, api_version, subscription_id)
        print("The response of CertificateApi->certificate_cancel_deletion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_cancel_deletion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **certificate_name** | **str**| The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

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
**200** | The operation was successful. The response contains the certificate entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_create**
> Certificate certificate_create(resource_group_name, account_name, certificate_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)



Creates a new certificate inside the specified account.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    certificate_name = 'certificate_name_example' # str | The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    parameters = openapi_client.CertificateCreateOrUpdateParameters() # CertificateCreateOrUpdateParameters | Additional parameters for certificate creation.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the certificate to update. A value of \"*\" can be used to apply the operation only if the certificate already exists. If omitted, this operation will always be applied. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new certificate to be created, but to prevent updating an existing certificate. Other values will be ignored. (optional)

    try:
        api_response = api_instance.certificate_create(resource_group_name, account_name, certificate_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)
        print("The response of CertificateApi->certificate_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **certificate_name** | **str**| The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **parameters** | [**CertificateCreateOrUpdateParameters**](CertificateCreateOrUpdateParameters.md)| Additional parameters for certificate creation. | 
 **if_match** | **str**| The entity state (ETag) version of the certificate to update. A value of \&quot;*\&quot; can be used to apply the operation only if the certificate already exists. If omitted, this operation will always be applied. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new certificate to be created, but to prevent updating an existing certificate. Other values will be ignored. | [optional] 

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
**200** | The operation was successful. The response contains the certificate entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_delete**
> certificate_delete(resource_group_name, account_name, certificate_name, api_version, subscription_id)



Deletes the specified certificate.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    certificate_name = 'certificate_name_example' # str | The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        api_instance.certificate_delete(resource_group_name, account_name, certificate_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **certificate_name** | **str**| The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

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
**200** | The operation was successful. |  -  |
**202** | The operation will be completed asynchronously. |  * Retry-After - Suggested delay to check the status of the asynchronous operation. The value is an integer that represents the seconds. <br>  * Location - The URL of the resource used to check the status of the asynchronous operation. <br>  |
**204** | The operation was successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_get**
> Certificate certificate_get(resource_group_name, account_name, certificate_name, api_version, subscription_id)



Gets information about the specified certificate.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    certificate_name = 'certificate_name_example' # str | The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)

    try:
        api_response = api_instance.certificate_get(resource_group_name, account_name, certificate_name, api_version, subscription_id)
        print("The response of CertificateApi->certificate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **certificate_name** | **str**| The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 

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
**200** | The operation was successful. The response contains the certificate entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_list_by_batch_account**
> ListCertificatesResult certificate_list_by_batch_account(resource_group_name, account_name, api_version, subscription_id, maxresults=maxresults, select=select, filter=filter)



Lists all of the certificates in the specified account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_certificates_result import ListCertificatesResult
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    maxresults = 56 # int | The maximum number of items to return in the response. (optional)
    select = 'select_example' # str | Comma separated list of properties that should be returned. e.g. \"properties/provisioningState\". Only top level properties under properties/ are valid for selection. (optional)
    filter = 'filter_example' # str | OData filter expression. Valid properties for filtering are \"properties/provisioningState\", \"properties/provisioningStateTransitionTime\", \"name\". (optional)

    try:
        api_response = api_instance.certificate_list_by_batch_account(resource_group_name, account_name, api_version, subscription_id, maxresults=maxresults, select=select, filter=filter)
        print("The response of CertificateApi->certificate_list_by_batch_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_list_by_batch_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **maxresults** | **int**| The maximum number of items to return in the response. | [optional] 
 **select** | **str**| Comma separated list of properties that should be returned. e.g. \&quot;properties/provisioningState\&quot;. Only top level properties under properties/ are valid for selection. | [optional] 
 **filter** | **str**| OData filter expression. Valid properties for filtering are \&quot;properties/provisioningState\&quot;, \&quot;properties/provisioningStateTransitionTime\&quot;, \&quot;name\&quot;. | [optional] 

### Return type

[**ListCertificatesResult**](ListCertificatesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains a list of certificates associated with the account. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_update**
> Certificate certificate_update(resource_group_name, account_name, certificate_name, api_version, subscription_id, parameters, if_match=if_match)



Updates the properties of an existing certificate.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the Batch account.
    account_name = 'account_name_example' # str | The name of the Batch account.
    certificate_name = 'certificate_name_example' # str | The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    parameters = openapi_client.CertificateCreateOrUpdateParameters() # CertificateCreateOrUpdateParameters | Certificate entity to update.
    if_match = 'if_match_example' # str | The entity state (ETag) version of the certificate to update. This value can be omitted or set to \"*\" to apply the operation unconditionally. (optional)

    try:
        api_response = api_instance.certificate_update(resource_group_name, account_name, certificate_name, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of CertificateApi->certificate_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificateApi->certificate_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the Batch account. | 
 **account_name** | **str**| The name of the Batch account. | 
 **certificate_name** | **str**| The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **parameters** | [**CertificateCreateOrUpdateParameters**](CertificateCreateOrUpdateParameters.md)| Certificate entity to update. | 
 **if_match** | **str**| The entity state (ETag) version of the certificate to update. This value can be omitted or set to \&quot;*\&quot; to apply the operation unconditionally. | [optional] 

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
**200** | The operation was successful. The response contains the certificate entity. |  * ETag - The ETag HTTP response header. This is an opaque string. You can use it to detect whether the resource has changed between requests. In particular, you can pass the ETag to one of the If-Match or If-None-Match headers. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

