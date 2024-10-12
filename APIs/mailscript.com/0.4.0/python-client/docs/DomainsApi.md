# openapi_client.DomainsApi

All URIs are relative to *https://api.mailscript.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_domain**](DomainsApi.md#add_domain) | **POST** /domains | Claim a new Domain
[**check_domain_verify**](DomainsApi.md#check_domain_verify) | **POST** /domains/verify/{domain} | Check a new Domain
[**get_all_domains**](DomainsApi.md#get_all_domains) | **GET** /domains | Get all domains you have access to
[**get_domain_verify**](DomainsApi.md#get_domain_verify) | **GET** /domains/verify/{domain} | Get domain verification
[**remove_domain_verify**](DomainsApi.md#remove_domain_verify) | **DELETE** /domains/{domain} | Remove a domain


# **add_domain**
> DomainResponse add_domain(add_domain_request)

Claim a new Domain



### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.add_domain_request import AddDomainRequest
from openapi_client.models.domain_response import DomainResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    add_domain_request = openapi_client.AddDomainRequest() # AddDomainRequest | Domain body

    try:
        # Claim a new Domain
        api_response = api_instance.add_domain(add_domain_request)
        print("The response of DomainsApi->add_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->add_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_domain_request** | [**AddDomainRequest**](AddDomainRequest.md)| Domain body | 

### Return type

[**DomainResponse**](DomainResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Internal error |  -  |
**403** | Bad credentials |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **check_domain_verify**
> CheckDomainVerify check_domain_verify(domain)

Check a new Domain



### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.check_domain_verify import CheckDomainVerify
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    domain = 'domain_example' # str | Full Top-level domain name

    try:
        # Check a new Domain
        api_response = api_instance.check_domain_verify(domain)
        print("The response of DomainsApi->check_domain_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->check_domain_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **str**| Full Top-level domain name | 

### Return type

[**CheckDomainVerify**](CheckDomainVerify.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Internal error |  -  |
**401** | Authorization failed |  -  |
**403** | Bad credentials |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_domains**
> GetAllDomainsResponse get_all_domains()

Get all domains you have access to



### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_all_domains_response import GetAllDomainsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)

    try:
        # Get all domains you have access to
        api_response = api_instance.get_all_domains()
        print("The response of DomainsApi->get_all_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_all_domains: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAllDomainsResponse**](GetAllDomainsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Internal error |  -  |
**403** | Bad credentials |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain_verify**
> DomainResponse get_domain_verify(domain)

Get domain verification



### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.domain_response import DomainResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    domain = 'domain_example' # str | Full Top-level domain name

    try:
        # Get domain verification
        api_response = api_instance.get_domain_verify(domain)
        print("The response of DomainsApi->get_domain_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->get_domain_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **str**| Full Top-level domain name | 

### Return type

[**DomainResponse**](DomainResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Internal error |  -  |
**403** | Bad credentials |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_domain_verify**
> remove_domain_verify(domain)

Remove a domain



### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mailscript.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mailscript.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    domain = 'domain_example' # str | Full Top-level domain name

    try:
        # Remove a domain
        api_instance.remove_domain_verify(domain)
    except Exception as e:
        print("Exception when calling DomainsApi->remove_domain_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **str**| Full Top-level domain name | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Internal error |  -  |
**403** | Bad credentials |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

