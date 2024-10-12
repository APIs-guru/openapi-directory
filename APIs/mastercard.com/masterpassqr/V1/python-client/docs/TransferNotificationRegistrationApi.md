# openapi_client.TransferNotificationRegistrationApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_transfer_notification_registration**](TransferNotificationRegistrationApi.md#create_transfer_notification_registration) | **POST** /send/v1/partners/{partnerId}/notification-registries | This service allows Mastercard Merchant QR originating and receiving partners to register a PAN and service provider to receive notifications on an inbound Merchant Refund or Merchant Payment Transaction.
[**delete_transfer_notification_registration**](TransferNotificationRegistrationApi.md#delete_transfer_notification_registration) | **DELETE** /send/v1/partners/{partnerId}/notification-registries/{account-reg-ref} | This service allows Mastercard Merchant QR originating and receiving partners to delete a registered PAN for notifications. 
[**notification_registration_api_read_by**](TransferNotificationRegistrationApi.md#notification_registration_api_read_by) | **GET** /send/v1/partners/{partnerId}/notification-registries/{account-reg-ref} | This service allows Mastercard Merchant QR originating and receiving partners to retrieve the service provider&#39;s information for a registered PAN for notifications. 
[**notification_registration_api_update**](TransferNotificationRegistrationApi.md#notification_registration_api_update) | **PUT** /send/v1/partners/{partnerId}/notification-registries/{account-reg-ref} | This service allows Mastercard Merchant QR originating and receiving partners to update the notitification service provider for a registered PAN.


# **create_transfer_notification_registration**
> Accountregistration168Wrapper create_transfer_notification_registration(partner_id, accountregistration=accountregistration)

This service allows Mastercard Merchant QR originating and receiving partners to register a PAN and service provider to receive notifications on an inbound Merchant Refund or Merchant Payment Transaction.

This service allows Mastercard Merchant QR originating and receiving partners to register a PAN and service provider to receive notifications on an inbound Merchant Refund or Merchant Payment Transaction.

### Example


```python
import openapi_client
from openapi_client.models.accountregistration167_wrapper import Accountregistration167Wrapper
from openapi_client.models.accountregistration168_wrapper import Accountregistration168Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransferNotificationRegistrationApi(api_client)
    partner_id = 'ptnr_A37V2q91WUqSonkfEG29Q-Bf4s9' # str | Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40
    accountregistration = openapi_client.Accountregistration167Wrapper() # Accountregistration167Wrapper | Contains the details of the request message. (optional)

    try:
        # This service allows Mastercard Merchant QR originating and receiving partners to register a PAN and service provider to receive notifications on an inbound Merchant Refund or Merchant Payment Transaction.
        api_response = api_instance.create_transfer_notification_registration(partner_id, accountregistration=accountregistration)
        print("The response of TransferNotificationRegistrationApi->create_transfer_notification_registration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferNotificationRegistrationApi->create_transfer_notification_registration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40 | 
 **accountregistration** | [**Accountregistration167Wrapper**](Accountregistration167Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**Accountregistration168Wrapper**](Accountregistration168Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_transfer_notification_registration**
> Accountregistration171Wrapper delete_transfer_notification_registration(partner_id, account_reg_ref)

This service allows Mastercard Merchant QR originating and receiving partners to delete a registered PAN for notifications. 

This service allows Mastercard Merchant QR originating and receiving partners to delete a registered PAN for notifications. 

### Example


```python
import openapi_client
from openapi_client.models.accountregistration171_wrapper import Accountregistration171Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransferNotificationRegistrationApi(api_client)
    partner_id = 'ptnr_A37V2q91WUqSonkfEG29Q-Bf4s9' # str | Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40
    account_reg_ref = 'areg_GDVUiwh1bXzA_xVdDXn4ctJEKOF' # str | Path Param - System generated unique account registration identifier. Type: Alphanumeric Special Length: 40

    try:
        # This service allows Mastercard Merchant QR originating and receiving partners to delete a registered PAN for notifications. 
        api_response = api_instance.delete_transfer_notification_registration(partner_id, account_reg_ref)
        print("The response of TransferNotificationRegistrationApi->delete_transfer_notification_registration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferNotificationRegistrationApi->delete_transfer_notification_registration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40 | 
 **account_reg_ref** | **str**| Path Param - System generated unique account registration identifier. Type: Alphanumeric Special Length: 40 | 

### Return type

[**Accountregistration171Wrapper**](Accountregistration171Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_registration_api_read_by**
> Accountregistration172Wrapper notification_registration_api_read_by(partner_id, account_reg_ref)

This service allows Mastercard Merchant QR originating and receiving partners to retrieve the service provider's information for a registered PAN for notifications. 

This service allows Mastercard Merchant QR originating and receiving partners to retrieve the service provider's information for a registered PAN for notifications. 

### Example


```python
import openapi_client
from openapi_client.models.accountregistration172_wrapper import Accountregistration172Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransferNotificationRegistrationApi(api_client)
    partner_id = 'ptnr_A37V2q91WUqSonkfEG29Q-Bf4s9' # str | Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40
    account_reg_ref = 'areg_GDVUiwh1bXzA_xVdDXn4ctJEKOF' # str | Path Param - System generated unique account registration identifier. Type: Alphanumberic Special Length: 40

    try:
        # This service allows Mastercard Merchant QR originating and receiving partners to retrieve the service provider's information for a registered PAN for notifications. 
        api_response = api_instance.notification_registration_api_read_by(partner_id, account_reg_ref)
        print("The response of TransferNotificationRegistrationApi->notification_registration_api_read_by:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferNotificationRegistrationApi->notification_registration_api_read_by: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40 | 
 **account_reg_ref** | **str**| Path Param - System generated unique account registration identifier. Type: Alphanumberic Special Length: 40 | 

### Return type

[**Accountregistration172Wrapper**](Accountregistration172Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notification_registration_api_update**
> Accountregistration170Wrapper notification_registration_api_update(partner_id, account_reg_ref, accountregistration=accountregistration)

This service allows Mastercard Merchant QR originating and receiving partners to update the notitification service provider for a registered PAN.

This service allows Mastercard Merchant QR originating and receiving partners to update the notitification service provider for a registered PAN.

### Example


```python
import openapi_client
from openapi_client.models.accountregistration169_wrapper import Accountregistration169Wrapper
from openapi_client.models.accountregistration170_wrapper import Accountregistration170Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TransferNotificationRegistrationApi(api_client)
    partner_id = 'ptnr_A37V2q91WUqSonkfEG29Q-Bf4s9' # str | Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40
    account_reg_ref = 'areg_GDVUiwh1bXzA_xVdDXn4ctJEKOF' # str | Path Param - System generated unique account registration identifier. Type: Alphanumeric Special Length: 40
    accountregistration = openapi_client.Accountregistration169Wrapper() # Accountregistration169Wrapper | Contains the details of the request message. (optional)

    try:
        # This service allows Mastercard Merchant QR originating and receiving partners to update the notitification service provider for a registered PAN.
        api_response = api_instance.notification_registration_api_update(partner_id, account_reg_ref, accountregistration=accountregistration)
        print("The response of TransferNotificationRegistrationApi->notification_registration_api_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TransferNotificationRegistrationApi->notification_registration_api_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Type: Alphanumeric Special Length: 40 | 
 **account_reg_ref** | **str**| Path Param - System generated unique account registration identifier. Type: Alphanumeric Special Length: 40 | 
 **accountregistration** | [**Accountregistration169Wrapper**](Accountregistration169Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**Accountregistration170Wrapper**](Accountregistration170Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

