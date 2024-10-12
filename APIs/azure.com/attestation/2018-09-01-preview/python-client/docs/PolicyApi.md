# openapi_client.PolicyApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_get**](PolicyApi.md#policy_get) | **GET** /operations/policy/current | Retrieves the current policy for a given kind of TEE.
[**policy_prepare_to_set**](PolicyApi.md#policy_prepare_to_set) | **POST** /operations/policy/updatepolicy | Accepts a new policy document and returns a JWT which expresses  used in preparation to set attestation policy.
[**policy_reset**](PolicyApi.md#policy_reset) | **POST** /operations/policy/current | Resets the attestation policy for the specified tenant and reverts to the default policy.
[**policy_set**](PolicyApi.md#policy_set) | **PUT** /operations/policy/current | Sets the policy for a given kind of TEE.


# **policy_get**
> AttestationPolicy policy_get(api_version, tee)

Retrieves the current policy for a given kind of TEE.

### Example


```python
import openapi_client
from openapi_client.models.attestation_policy import AttestationPolicy
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
    api_instance = openapi_client.PolicyApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    tee = 'tee_example' # str | Specifies the trusted execution environment to be used to validate the evidence

    try:
        # Retrieves the current policy for a given kind of TEE.
        api_response = api_instance.policy_get(api_version, tee)
        print("The response of PolicyApi->policy_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **tee** | **str**| Specifies the trusted execution environment to be used to validate the evidence | 

### Return type

[**AttestationPolicy**](AttestationPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**401** | Request is unauthorized |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_prepare_to_set**
> str policy_prepare_to_set(api_version, tee, policy_jws)

Accepts a new policy document and returns a JWT which expresses  used in preparation to set attestation policy.

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
    api_instance = openapi_client.PolicyApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    tee = 'tee_example' # str | Specifies the trusted execution environment to be used to validate the evidence
    policy_jws = 'policy_jws_example' # str | JSON Web Signature (See RFC7515) expressing the new policy

    try:
        # Accepts a new policy document and returns a JWT which expresses  used in preparation to set attestation policy.
        api_response = api_instance.policy_prepare_to_set(api_version, tee, policy_jws)
        print("The response of PolicyApi->policy_prepare_to_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_prepare_to_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **tee** | **str**| Specifies the trusted execution environment to be used to validate the evidence | 
 **policy_jws** | **str**| JSON Web Signature (See RFC7515) expressing the new policy | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: text/plain, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success - Returns a JWT signed by the metadata signing key that contains the hash of the supplied policy to be set. |  -  |
**400** | Bad request |  -  |
**401** | Request is unauthorized |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_reset**
> str policy_reset(api_version, tee, policy_jws)

Resets the attestation policy for the specified tenant and reverts to the default policy.

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
    api_instance = openapi_client.PolicyApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    tee = 'tee_example' # str | Specifies the trusted execution environment to be used to validate the evidence
    policy_jws = 'policy_jws_example' # str | JSON Web Signature with an empty policy document

    try:
        # Resets the attestation policy for the specified tenant and reverts to the default policy.
        api_response = api_instance.policy_reset(api_version, tee, policy_jws)
        print("The response of PolicyApi->policy_reset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **tee** | **str**| Specifies the trusted execution environment to be used to validate the evidence | 
 **policy_jws** | **str**| JSON Web Signature with an empty policy document | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success - Returns a JWT signed by the metadata signing key that contains the hash of the supplied policy to be set. |  -  |
**400** | Bad request |  -  |
**401** | Request is unauthorized |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_set**
> policy_set(api_version, tee, new_attestation_policy)

Sets the policy for a given kind of TEE.

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
    api_instance = openapi_client.PolicyApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    tee = 'tee_example' # str | Specifies the trusted execution environment to be used to validate the evidence
    new_attestation_policy = 'new_attestation_policy_example' # str | JWT Expressing the new policy

    try:
        # Sets the policy for a given kind of TEE.
        api_instance.policy_set(api_version, tee, new_attestation_policy)
    except Exception as e:
        print("Exception when calling PolicyApi->policy_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **tee** | **str**| Specifies the trusted execution environment to be used to validate the evidence | 
 **new_attestation_policy** | **str**| JWT Expressing the new policy | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**401** | Request is unauthorized |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

