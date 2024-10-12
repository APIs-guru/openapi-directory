# openapi_client.SessionsApi

All URIs are relative to *https://api.klarna.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_credit_session**](SessionsApi.md#create_credit_session) | **POST** /payments/v1/sessions | Create a new payment session
[**read_credit_session**](SessionsApi.md#read_credit_session) | **GET** /payments/v1/sessions/{session_id} | Read an existing payment session
[**update_credit_session**](SessionsApi.md#update_credit_session) | **POST** /payments/v1/sessions/{session_id} | Update an existing payment session


# **create_credit_session**
> MerchantSession create_credit_session(session_create)

Create a new payment session

Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser. Read more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.

### Example


```python
import openapi_client
from openapi_client.models.merchant_session import MerchantSession
from openapi_client.models.session_create import SessionCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.klarna.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.klarna.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    session_create = openapi_client.SessionCreate() # SessionCreate | session_request

    try:
        # Create a new payment session
        api_response = api_instance.create_credit_session(session_create)
        print("The response of SessionsApi->create_credit_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->create_credit_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_create** | [**SessionCreate**](SessionCreate.md)| session_request | 

### Return type

[**MerchantSession**](MerchantSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | We were unable to create a session with the provided data. Some field constraint was violated. |  -  |
**403** | You were not authorized to execute this operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **read_credit_session**
> SessionRead read_credit_session(session_id)

Read an existing payment session

Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session. Read more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.

### Example


```python
import openapi_client
from openapi_client.models.session_read import SessionRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.klarna.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.klarna.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    session_id = 'session_id_example' # str | session_id

    try:
        # Read an existing payment session
        api_response = api_instance.read_credit_session(session_id)
        print("The response of SessionsApi->read_credit_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionsApi->read_credit_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**| session_id | 

### Return type

[**SessionRead**](SessionRead.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**403** | You were not authorized to execute this operation. |  -  |
**404** | The session does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_credit_session**
> update_credit_session(session_id, session)

Update an existing payment session

Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated. Read more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.

### Example


```python
import openapi_client
from openapi_client.models.session import Session
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.klarna.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.klarna.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionsApi(api_client)
    session_id = 'session_id_example' # str | session_id
    session = openapi_client.Session() # Session | session_request

    try:
        # Update an existing payment session
        api_instance.update_credit_session(session_id, session)
    except Exception as e:
        print("Exception when calling SessionsApi->update_credit_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**| session_id | 
 **session** | [**Session**](Session.md)| session_request | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The session was updated successfully. |  -  |
**400** | We were unable to update the session with the provided data. Some field constraint was violated. |  -  |
**403** | You were not authorized to execute this operation. |  -  |
**404** | The session does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

