# openapi_client.SenderSignaturesAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_sender_signature**](SenderSignaturesAPIApi.md#create_sender_signature) | **POST** /senders | Create a Sender Signature
[**delete_sender_signature**](SenderSignaturesAPIApi.md#delete_sender_signature) | **DELETE** /senders/{signatureid} | Delete a Sender Signature
[**edit_sender_signature**](SenderSignaturesAPIApi.md#edit_sender_signature) | **PUT** /senders/{signatureid} | Update a Sender Signature
[**get_sender_signature**](SenderSignaturesAPIApi.md#get_sender_signature) | **GET** /senders/{signatureid} | Get a Sender Signature
[**list_sender_signatures**](SenderSignaturesAPIApi.md#list_sender_signatures) | **GET** /senders | List Sender Signatures
[**request_new_dkim_key_for_sender_signature**](SenderSignaturesAPIApi.md#request_new_dkim_key_for_sender_signature) | **POST** /senders/{signatureid}/requestnewdkim | Request a new DKIM Key
[**request_spf_verification_for_sender_signature**](SenderSignaturesAPIApi.md#request_spf_verification_for_sender_signature) | **POST** /senders/{signatureid}/verifyspf | Request DNS Verification for SPF
[**resend_sender_signature_confirmation_email**](SenderSignaturesAPIApi.md#resend_sender_signature_confirmation_email) | **POST** /senders/{signatureid}/resend | Resend Signature Confirmation Email


# **create_sender_signature**
> SenderSignatureExtendedInformation create_sender_signature(x_postmark_account_token, body=body)

Create a Sender Signature

### Example


```python
import openapi_client
from openapi_client.models.sender_signature_creation_model import SenderSignatureCreationModel
from openapi_client.models.sender_signature_extended_information import SenderSignatureExtendedInformation
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
    api_instance = openapi_client.SenderSignaturesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    body = openapi_client.SenderSignatureCreationModel() # SenderSignatureCreationModel |  (optional)

    try:
        # Create a Sender Signature
        api_response = api_instance.create_sender_signature(x_postmark_account_token, body=body)
        print("The response of SenderSignaturesAPIApi->create_sender_signature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SenderSignaturesAPIApi->create_sender_signature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **body** | [**SenderSignatureCreationModel**](SenderSignatureCreationModel.md)|  | [optional] 

### Return type

[**SenderSignatureExtendedInformation**](SenderSignatureExtendedInformation.md)

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

# **delete_sender_signature**
> StandardPostmarkResponse delete_sender_signature(x_postmark_account_token, signatureid)

Delete a Sender Signature

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
    api_instance = openapi_client.SenderSignaturesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    signatureid = 56 # int | The ID for the Sender Signature that should be deleted by the request.

    try:
        # Delete a Sender Signature
        api_response = api_instance.delete_sender_signature(x_postmark_account_token, signatureid)
        print("The response of SenderSignaturesAPIApi->delete_sender_signature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SenderSignaturesAPIApi->delete_sender_signature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **signatureid** | **int**| The ID for the Sender Signature that should be deleted by the request. | 

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

# **edit_sender_signature**
> SenderSignatureExtendedInformation edit_sender_signature(x_postmark_account_token, signatureid, body=body)

Update a Sender Signature

### Example


```python
import openapi_client
from openapi_client.models.sender_signature_editing_model import SenderSignatureEditingModel
from openapi_client.models.sender_signature_extended_information import SenderSignatureExtendedInformation
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
    api_instance = openapi_client.SenderSignaturesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    signatureid = 56 # int | The ID for the Sender Signature that should be modified by the request.
    body = openapi_client.SenderSignatureEditingModel() # SenderSignatureEditingModel |  (optional)

    try:
        # Update a Sender Signature
        api_response = api_instance.edit_sender_signature(x_postmark_account_token, signatureid, body=body)
        print("The response of SenderSignaturesAPIApi->edit_sender_signature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SenderSignaturesAPIApi->edit_sender_signature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **signatureid** | **int**| The ID for the Sender Signature that should be modified by the request. | 
 **body** | [**SenderSignatureEditingModel**](SenderSignatureEditingModel.md)|  | [optional] 

### Return type

[**SenderSignatureExtendedInformation**](SenderSignatureExtendedInformation.md)

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

# **get_sender_signature**
> SenderSignatureExtendedInformation get_sender_signature(x_postmark_account_token, signatureid)

Get a Sender Signature

### Example


```python
import openapi_client
from openapi_client.models.sender_signature_extended_information import SenderSignatureExtendedInformation
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
    api_instance = openapi_client.SenderSignaturesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    signatureid = 56 # int | The ID for the Sender Signature that should be retrieved.

    try:
        # Get a Sender Signature
        api_response = api_instance.get_sender_signature(x_postmark_account_token, signatureid)
        print("The response of SenderSignaturesAPIApi->get_sender_signature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SenderSignaturesAPIApi->get_sender_signature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **signatureid** | **int**| The ID for the Sender Signature that should be retrieved. | 

### Return type

[**SenderSignatureExtendedInformation**](SenderSignatureExtendedInformation.md)

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

# **list_sender_signatures**
> SenderListingResults list_sender_signatures(x_postmark_account_token, count, offset)

List Sender Signatures

### Example


```python
import openapi_client
from openapi_client.models.sender_listing_results import SenderListingResults
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
    api_instance = openapi_client.SenderSignaturesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    count = 56 # int | Number of records to return per request. Max 500.
    offset = 56 # int | Number of records to skip

    try:
        # List Sender Signatures
        api_response = api_instance.list_sender_signatures(x_postmark_account_token, count, offset)
        print("The response of SenderSignaturesAPIApi->list_sender_signatures:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SenderSignaturesAPIApi->list_sender_signatures: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **count** | **int**| Number of records to return per request. Max 500. | 
 **offset** | **int**| Number of records to skip | 

### Return type

[**SenderListingResults**](SenderListingResults.md)

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

# **request_new_dkim_key_for_sender_signature**
> StandardPostmarkResponse request_new_dkim_key_for_sender_signature(x_postmark_account_token, signatureid)

Request a new DKIM Key

Requests a new DKIM key to be created. Until the DNS entries are confirmed, the new values will be in the `DKIMPendingHost` and `DKIMPendingTextValue` fields. After the new DKIM value is verified in DNS, the pending values will migrate to `DKIMTextValue` and `DKIMPendingTextValue` and Postmark will begin to sign emails with the new DKIM key. 

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
    api_instance = openapi_client.SenderSignaturesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    signatureid = 56 # int | The ID for the Sender Signature for which a new DKIM Key should be generated.

    try:
        # Request a new DKIM Key
        api_response = api_instance.request_new_dkim_key_for_sender_signature(x_postmark_account_token, signatureid)
        print("The response of SenderSignaturesAPIApi->request_new_dkim_key_for_sender_signature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SenderSignaturesAPIApi->request_new_dkim_key_for_sender_signature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **signatureid** | **int**| The ID for the Sender Signature for which a new DKIM Key should be generated. | 

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

# **request_spf_verification_for_sender_signature**
> SenderSignatureExtendedInformation request_spf_verification_for_sender_signature(x_postmark_account_token, signatureid)

Request DNS Verification for SPF

### Example


```python
import openapi_client
from openapi_client.models.sender_signature_extended_information import SenderSignatureExtendedInformation
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
    api_instance = openapi_client.SenderSignaturesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    signatureid = 56 # int | The ID for the Sender Signature for which SPF DNS records should be verified.

    try:
        # Request DNS Verification for SPF
        api_response = api_instance.request_spf_verification_for_sender_signature(x_postmark_account_token, signatureid)
        print("The response of SenderSignaturesAPIApi->request_spf_verification_for_sender_signature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SenderSignaturesAPIApi->request_spf_verification_for_sender_signature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **signatureid** | **int**| The ID for the Sender Signature for which SPF DNS records should be verified. | 

### Return type

[**SenderSignatureExtendedInformation**](SenderSignatureExtendedInformation.md)

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

# **resend_sender_signature_confirmation_email**
> StandardPostmarkResponse resend_sender_signature_confirmation_email(x_postmark_account_token, signatureid)

Resend Signature Confirmation Email

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
    api_instance = openapi_client.SenderSignaturesAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    signatureid = 56 # int | The ID for the Sender Signature that should have its confirmation email resent.

    try:
        # Resend Signature Confirmation Email
        api_response = api_instance.resend_sender_signature_confirmation_email(x_postmark_account_token, signatureid)
        print("The response of SenderSignaturesAPIApi->resend_sender_signature_confirmation_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SenderSignaturesAPIApi->resend_sender_signature_confirmation_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **signatureid** | **int**| The ID for the Sender Signature that should have its confirmation email resent. | 

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

