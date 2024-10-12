# openapi_client.POSTApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dps_certificate_generate_verification_code**](POSTApi.md#dps_certificate_generate_verification_code) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}/generateVerificationCode | 
[**dps_certificate_verify_certificate**](POSTApi.md#dps_certificate_verify_certificate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName}/verify | 
[**iot_dps_resource_check_name_availability**](POSTApi.md#iot_dps_resource_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Devices/checkProvisioningServiceNameAvailability | Check if a provisioning service name is available.
[**iot_dps_resource_get_keys_for_key_name**](POSTApi.md#iot_dps_resource_get_keys_for_key_name) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/keys/{keyName}/listkeys | Get a shared access policy by name from a provisioning service.
[**iot_dps_resource_list_keys**](POSTApi.md#iot_dps_resource_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/listkeys | Get the security metadata for a provisioning service.


# **dps_certificate_generate_verification_code**
> VerificationCodeResponse dps_certificate_generate_verification_code(certificate_name, if_match, subscription_id, resource_group_name, provisioning_service_name, api_version, certificate_name2=certificate_name2, certificate_raw_bytes=certificate_raw_bytes, certificate_is_verified=certificate_is_verified, certificate_purpose=certificate_purpose, certificate_created=certificate_created, certificate_last_updated=certificate_last_updated, certificate_has_private_key=certificate_has_private_key, certificate_nonce=certificate_nonce)



Generate verification code for Proof of Possession.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.verification_code_response import VerificationCodeResponse
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
    api_instance = openapi_client.POSTApi(api_client)
    certificate_name = 'certificate_name_example' # str | The mandatory logical name of the certificate, that the provisioning service uses to access.
    if_match = 'if_match_example' # str | ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | name of resource group.
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of provisioning service.
    api_version = 'api_version_example' # str | The version of the API.
    certificate_name2 = 'certificate_name_example' # str | Common Name for the certificate. (optional)
    certificate_raw_bytes = None # bytearray | Raw data of certificate. (optional)
    certificate_is_verified = True # bool | Indicates if the certificate has been verified by owner of the private key. (optional)
    certificate_purpose = 'certificate_purpose_example' # str | Description mentioning the purpose of the certificate. (optional)
    certificate_created = '2013-10-20T19:20:30+01:00' # datetime | Certificate creation time. (optional)
    certificate_last_updated = '2013-10-20T19:20:30+01:00' # datetime | Certificate last updated time. (optional)
    certificate_has_private_key = True # bool | Indicates if the certificate contains private key. (optional)
    certificate_nonce = 'certificate_nonce_example' # str | Random number generated to indicate Proof of Possession. (optional)

    try:
        api_response = api_instance.dps_certificate_generate_verification_code(certificate_name, if_match, subscription_id, resource_group_name, provisioning_service_name, api_version, certificate_name2=certificate_name2, certificate_raw_bytes=certificate_raw_bytes, certificate_is_verified=certificate_is_verified, certificate_purpose=certificate_purpose, certificate_created=certificate_created, certificate_last_updated=certificate_last_updated, certificate_has_private_key=certificate_has_private_key, certificate_nonce=certificate_nonce)
        print("The response of POSTApi->dps_certificate_generate_verification_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->dps_certificate_generate_verification_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The mandatory logical name of the certificate, that the provisioning service uses to access. | 
 **if_match** | **str**| ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| name of resource group. | 
 **provisioning_service_name** | **str**| Name of provisioning service. | 
 **api_version** | **str**| The version of the API. | 
 **certificate_name2** | **str**| Common Name for the certificate. | [optional] 
 **certificate_raw_bytes** | **bytearray**| Raw data of certificate. | [optional] 
 **certificate_is_verified** | **bool**| Indicates if the certificate has been verified by owner of the private key. | [optional] 
 **certificate_purpose** | **str**| Description mentioning the purpose of the certificate. | [optional] 
 **certificate_created** | **datetime**| Certificate creation time. | [optional] 
 **certificate_last_updated** | **datetime**| Certificate last updated time. | [optional] 
 **certificate_has_private_key** | **bool**| Indicates if the certificate contains private key. | [optional] 
 **certificate_nonce** | **str**| Random number generated to indicate Proof of Possession. | [optional] 

### Return type

[**VerificationCodeResponse**](VerificationCodeResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generated verification code for that certificate is returned. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dps_certificate_verify_certificate**
> CertificateResponse dps_certificate_verify_certificate(certificate_name, if_match, subscription_id, resource_group_name, provisioning_service_name, api_version, request, certificate_name2=certificate_name2, certificate_raw_bytes=certificate_raw_bytes, certificate_is_verified=certificate_is_verified, certificate_purpose=certificate_purpose, certificate_created=certificate_created, certificate_last_updated=certificate_last_updated, certificate_has_private_key=certificate_has_private_key, certificate_nonce=certificate_nonce)



Verifies certificate for the provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_response import CertificateResponse
from openapi_client.models.verification_code_request import VerificationCodeRequest
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
    api_instance = openapi_client.POSTApi(api_client)
    certificate_name = 'certificate_name_example' # str | The mandatory logical name of the certificate, that the provisioning service uses to access.
    if_match = 'if_match_example' # str | ETag of the certificate.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    provisioning_service_name = 'provisioning_service_name_example' # str | Provisioning service name.
    api_version = 'api_version_example' # str | The version of the API.
    request = openapi_client.VerificationCodeRequest() # VerificationCodeRequest | 
    certificate_name2 = 'certificate_name_example' # str | Common Name for the certificate. (optional)
    certificate_raw_bytes = None # bytearray | Raw data of certificate. (optional)
    certificate_is_verified = True # bool | Indicates if the certificate has been verified by owner of the private key. (optional)
    certificate_purpose = 'certificate_purpose_example' # str | Describe the purpose of the certificate. (optional)
    certificate_created = '2013-10-20T19:20:30+01:00' # datetime | Certificate creation time. (optional)
    certificate_last_updated = '2013-10-20T19:20:30+01:00' # datetime | Certificate last updated time. (optional)
    certificate_has_private_key = True # bool | Indicates if the certificate contains private key. (optional)
    certificate_nonce = 'certificate_nonce_example' # str | Random number generated to indicate Proof of Possession. (optional)

    try:
        api_response = api_instance.dps_certificate_verify_certificate(certificate_name, if_match, subscription_id, resource_group_name, provisioning_service_name, api_version, request, certificate_name2=certificate_name2, certificate_raw_bytes=certificate_raw_bytes, certificate_is_verified=certificate_is_verified, certificate_purpose=certificate_purpose, certificate_created=certificate_created, certificate_last_updated=certificate_last_updated, certificate_has_private_key=certificate_has_private_key, certificate_nonce=certificate_nonce)
        print("The response of POSTApi->dps_certificate_verify_certificate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->dps_certificate_verify_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| The mandatory logical name of the certificate, that the provisioning service uses to access. | 
 **if_match** | **str**| ETag of the certificate. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group name. | 
 **provisioning_service_name** | **str**| Provisioning service name. | 
 **api_version** | **str**| The version of the API. | 
 **request** | [**VerificationCodeRequest**](VerificationCodeRequest.md)|  | 
 **certificate_name2** | **str**| Common Name for the certificate. | [optional] 
 **certificate_raw_bytes** | **bytearray**| Raw data of certificate. | [optional] 
 **certificate_is_verified** | **bool**| Indicates if the certificate has been verified by owner of the private key. | [optional] 
 **certificate_purpose** | **str**| Describe the purpose of the certificate. | [optional] 
 **certificate_created** | **datetime**| Certificate creation time. | [optional] 
 **certificate_last_updated** | **datetime**| Certificate last updated time. | [optional] 
 **certificate_has_private_key** | **bool**| Indicates if the certificate contains private key. | [optional] 
 **certificate_nonce** | **str**| Random number generated to indicate Proof of Possession. | [optional] 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_check_name_availability**
> NameAvailabilityInfo iot_dps_resource_check_name_availability(subscription_id, api_version, arguments)

Check if a provisioning service name is available.

Check if a provisioning service name is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.name_availability_info import NameAvailabilityInfo
from openapi_client.models.operation_inputs import OperationInputs
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
    api_instance = openapi_client.POSTApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    api_version = 'api_version_example' # str | The version of the API.
    arguments = openapi_client.OperationInputs() # OperationInputs | Set the name parameter in the OperationInputs structure to the name of the provisioning service to check.

    try:
        # Check if a provisioning service name is available.
        api_response = api_instance.iot_dps_resource_check_name_availability(subscription_id, api_version, arguments)
        print("The response of POSTApi->iot_dps_resource_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->iot_dps_resource_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **api_version** | **str**| The version of the API. | 
 **arguments** | [**OperationInputs**](OperationInputs.md)| Set the name parameter in the OperationInputs structure to the name of the provisioning service to check. | 

### Return type

[**NameAvailabilityInfo**](NameAvailabilityInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the provisioning service name is available. If the name is not available, the body contains the reason. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_get_keys_for_key_name**
> SharedAccessSignatureAuthorizationRuleAccessRightsDescription iot_dps_resource_get_keys_for_key_name(provisioning_service_name, key_name, subscription_id, resource_group_name, api_version)

Get a shared access policy by name from a provisioning service.

Get a shared access policy by name from a provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_signature_authorization_rule_access_rights_description import SharedAccessSignatureAuthorizationRuleAccessRightsDescription
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
    api_instance = openapi_client.POSTApi(api_client)
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of the provisioning service.
    key_name = 'key_name_example' # str | Logical key name to get key-values for.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the provisioning service.
    api_version = 'api_version_example' # str | The version of the API.

    try:
        # Get a shared access policy by name from a provisioning service.
        api_response = api_instance.iot_dps_resource_get_keys_for_key_name(provisioning_service_name, key_name, subscription_id, resource_group_name, api_version)
        print("The response of POSTApi->iot_dps_resource_get_keys_for_key_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->iot_dps_resource_get_keys_for_key_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provisioning_service_name** | **str**| Name of the provisioning service. | 
 **key_name** | **str**| Logical key name to get key-values for. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the provisioning service. | 
 **api_version** | **str**| The version of the API. | 

### Return type

[**SharedAccessSignatureAuthorizationRuleAccessRightsDescription**](SharedAccessSignatureAuthorizationRuleAccessRightsDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized shared access policy, including keys, that you can use to access one or more provisioning service endpoints. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_list_keys**
> SharedAccessSignatureAuthorizationRuleListResult iot_dps_resource_list_keys(provisioning_service_name, subscription_id, resource_group_name, api_version)

Get the security metadata for a provisioning service.

Get the security metadata for a provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_signature_authorization_rule_list_result import SharedAccessSignatureAuthorizationRuleListResult
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
    api_instance = openapi_client.POSTApi(api_client)
    provisioning_service_name = 'provisioning_service_name_example' # str | The provisioning service name to get the shared access keys for.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | resource group name
    api_version = 'api_version_example' # str | The version of the API.

    try:
        # Get the security metadata for a provisioning service.
        api_response = api_instance.iot_dps_resource_list_keys(provisioning_service_name, subscription_id, resource_group_name, api_version)
        print("The response of POSTApi->iot_dps_resource_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling POSTApi->iot_dps_resource_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provisioning_service_name** | **str**| The provisioning service name to get the shared access keys for. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| resource group name | 
 **api_version** | **str**| The version of the API. | 

### Return type

[**SharedAccessSignatureAuthorizationRuleListResult**](SharedAccessSignatureAuthorizationRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of shared access policies, including keys, that you can use to access the provisioning service endpoints. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

