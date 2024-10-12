# openapi_client.DomainsAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_domain**](DomainsAPIApi.md#create_domain) | **POST** /domains | Create a Domain
[**delete_domain**](DomainsAPIApi.md#delete_domain) | **DELETE** /domains/{domainid} | Delete a Domain
[**edit_domain**](DomainsAPIApi.md#edit_domain) | **PUT** /domains/{domainid} | Update a Domain
[**get_domain**](DomainsAPIApi.md#get_domain) | **GET** /domains/{domainid} | Get a Domain
[**list_domains**](DomainsAPIApi.md#list_domains) | **GET** /domains | List Domains
[**request_dkim_verification_for_domain**](DomainsAPIApi.md#request_dkim_verification_for_domain) | **PUT** /domains/{domainid}/verifydkim | Request DNS Verification for DKIM
[**request_return_path_verification_for_domain**](DomainsAPIApi.md#request_return_path_verification_for_domain) | **PUT** /domains/{domainid}/verifyreturnpath | Request DNS Verification for Return-Path
[**request_spf_verification_for_domain**](DomainsAPIApi.md#request_spf_verification_for_domain) | **POST** /domains/{domainid}/verifyspf | Request DNS Verification for SPF
[**rotate_dkim_key_for_domain**](DomainsAPIApi.md#rotate_dkim_key_for_domain) | **POST** /domains/{domainid}/rotatedkim | Rotate DKIM Key


# **create_domain**
> DomainExtendedInformation create_domain(x_postmark_account_token, body=body)

Create a Domain

### Example


```python
import openapi_client
from openapi_client.models.domain_creation_model import DomainCreationModel
from openapi_client.models.domain_extended_information import DomainExtendedInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    body = openapi_client.DomainCreationModel() # DomainCreationModel |  (optional)

    try:
        # Create a Domain
        api_response = api_instance.create_domain(x_postmark_account_token, body=body)
        print("The response of DomainsAPIApi->create_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->create_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **body** | [**DomainCreationModel**](DomainCreationModel.md)|  | [optional] 

### Return type

[**DomainExtendedInformation**](DomainExtendedInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_domain**
> StandardPostmarkResponse delete_domain(x_postmark_account_token, domainid)

Delete a Domain

### Example


```python
import openapi_client
from openapi_client.models.standard_postmark_response import StandardPostmarkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    domainid = 56 # int | The ID for the Domain that should be deleted by the request.

    try:
        # Delete a Domain
        api_response = api_instance.delete_domain(x_postmark_account_token, domainid)
        print("The response of DomainsAPIApi->delete_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->delete_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **domainid** | **int**| The ID for the Domain that should be deleted by the request. | 

### Return type

[**StandardPostmarkResponse**](StandardPostmarkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_domain**
> DomainExtendedInformation edit_domain(x_postmark_account_token, domainid, body=body)

Update a Domain

### Example


```python
import openapi_client
from openapi_client.models.domain_editing_model import DomainEditingModel
from openapi_client.models.domain_extended_information import DomainExtendedInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    domainid = 56 # int | The ID for the Domain that should be modified by the request.
    body = openapi_client.DomainEditingModel() # DomainEditingModel |  (optional)

    try:
        # Update a Domain
        api_response = api_instance.edit_domain(x_postmark_account_token, domainid, body=body)
        print("The response of DomainsAPIApi->edit_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->edit_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **domainid** | **int**| The ID for the Domain that should be modified by the request. | 
 **body** | [**DomainEditingModel**](DomainEditingModel.md)|  | [optional] 

### Return type

[**DomainExtendedInformation**](DomainExtendedInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_domain**
> DomainExtendedInformation get_domain(x_postmark_account_token, domainid)

Get a Domain

### Example


```python
import openapi_client
from openapi_client.models.domain_extended_information import DomainExtendedInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    domainid = 56 # int | The ID for the Domain that should be retrieved.

    try:
        # Get a Domain
        api_response = api_instance.get_domain(x_postmark_account_token, domainid)
        print("The response of DomainsAPIApi->get_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->get_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **domainid** | **int**| The ID for the Domain that should be retrieved. | 

### Return type

[**DomainExtendedInformation**](DomainExtendedInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_domains**
> DomainListingResults list_domains(x_postmark_account_token, count, offset)

List Domains

### Example


```python
import openapi_client
from openapi_client.models.domain_listing_results import DomainListingResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    count = 56 # int | Number of records to return per request. Max 500.
    offset = 56 # int | Number of records to skip

    try:
        # List Domains
        api_response = api_instance.list_domains(x_postmark_account_token, count, offset)
        print("The response of DomainsAPIApi->list_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->list_domains: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **count** | **int**| Number of records to return per request. Max 500. | 
 **offset** | **int**| Number of records to skip | 

### Return type

[**DomainListingResults**](DomainListingResults.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_dkim_verification_for_domain**
> DomainExtendedInformation request_dkim_verification_for_domain(x_postmark_account_token, domainid)

Request DNS Verification for DKIM

### Example


```python
import openapi_client
from openapi_client.models.domain_extended_information import DomainExtendedInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    domainid = 56 # int | The ID for the Domain for which DKIM DNS records should be verified.

    try:
        # Request DNS Verification for DKIM
        api_response = api_instance.request_dkim_verification_for_domain(x_postmark_account_token, domainid)
        print("The response of DomainsAPIApi->request_dkim_verification_for_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->request_dkim_verification_for_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **domainid** | **int**| The ID for the Domain for which DKIM DNS records should be verified. | 

### Return type

[**DomainExtendedInformation**](DomainExtendedInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_return_path_verification_for_domain**
> DomainExtendedInformation request_return_path_verification_for_domain(x_postmark_account_token, domainid)

Request DNS Verification for Return-Path

### Example


```python
import openapi_client
from openapi_client.models.domain_extended_information import DomainExtendedInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    domainid = 56 # int | The ID for the Domain for which Return-Path DNS records should be verified.

    try:
        # Request DNS Verification for Return-Path
        api_response = api_instance.request_return_path_verification_for_domain(x_postmark_account_token, domainid)
        print("The response of DomainsAPIApi->request_return_path_verification_for_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->request_return_path_verification_for_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **domainid** | **int**| The ID for the Domain for which Return-Path DNS records should be verified. | 

### Return type

[**DomainExtendedInformation**](DomainExtendedInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_spf_verification_for_domain**
> DomainSPFResult request_spf_verification_for_domain(x_postmark_account_token, domainid)

Request DNS Verification for SPF

### Example


```python
import openapi_client
from openapi_client.models.domain_spf_result import DomainSPFResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    domainid = 56 # int | The ID for the Domain for which SPF DNS records should be verified.

    try:
        # Request DNS Verification for SPF
        api_response = api_instance.request_spf_verification_for_domain(x_postmark_account_token, domainid)
        print("The response of DomainsAPIApi->request_spf_verification_for_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->request_spf_verification_for_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **domainid** | **int**| The ID for the Domain for which SPF DNS records should be verified. | 

### Return type

[**DomainSPFResult**](DomainSPFResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rotate_dkim_key_for_domain**
> DKIMRotationResponse rotate_dkim_key_for_domain(x_postmark_account_token, domainid)

Rotate DKIM Key

Creates a new DKIM key to replace your current key. Until the DNS entries are confirmed, the new values will be in the `DKIMPendingHost` and `DKIMPendingTextValue` fields. After the new DKIM value is verified in DNS, the pending values will migrate to `DKIMTextValue` and `DKIMPendingTextValue` and Postmark will begin to sign emails with the new DKIM key. 

### Example


```python
import openapi_client
from openapi_client.models.dkim_rotation_response import DKIMRotationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    domainid = 56 # int | The ID for the Sender Signature for which a new DKIM Key should be generated.

    try:
        # Rotate DKIM Key
        api_response = api_instance.rotate_dkim_key_for_domain(x_postmark_account_token, domainid)
        print("The response of DomainsAPIApi->rotate_dkim_key_for_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsAPIApi->rotate_dkim_key_for_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **domainid** | **int**| The ID for the Sender Signature for which a new DKIM Key should be generated. | 

### Return type

[**DKIMRotationResponse**](DKIMRotationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

