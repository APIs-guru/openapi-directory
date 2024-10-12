# openapi_client.InsuranceApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_funds_to_insurance**](InsuranceApi.md#add_funds_to_insurance) | **PATCH** /v1/insurance/shipsurance/add_funds | Add Funds To Insurance
[**connect_insurer**](InsuranceApi.md#connect_insurer) | **POST** /v1/connections/insurance/shipsurance | Connect a Shipsurance Account
[**disconnect_insurer**](InsuranceApi.md#disconnect_insurer) | **DELETE** /v1/connections/insurance/shipsurance | Disconnect a Shipsurance Account
[**get_insurance_balance**](InsuranceApi.md#get_insurance_balance) | **GET** /v1/insurance/shipsurance/balance | Get Insurance Funds Balance


# **add_funds_to_insurance**
> AddFundsToInsuranceResponseBody add_funds_to_insurance(add_funds_to_insurance_request_body)

Add Funds To Insurance

You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100, and may want to add funds to insurance rather than keeping the account funded. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.add_funds_to_insurance_request_body import AddFundsToInsuranceRequestBody
from openapi_client.models.add_funds_to_insurance_response_body import AddFundsToInsuranceResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsuranceApi(api_client)
    add_funds_to_insurance_request_body = openapi_client.AddFundsToInsuranceRequestBody() # AddFundsToInsuranceRequestBody | 

    try:
        # Add Funds To Insurance
        api_response = api_instance.add_funds_to_insurance(add_funds_to_insurance_request_body)
        print("The response of InsuranceApi->add_funds_to_insurance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsuranceApi->add_funds_to_insurance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **add_funds_to_insurance_request_body** | [**AddFundsToInsuranceRequestBody**](AddFundsToInsuranceRequestBody.md)|  | 

### Return type

[**AddFundsToInsuranceResponseBody**](AddFundsToInsuranceResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connect_insurer**
> object connect_insurer(connect_insurer_request_body)

Connect a Shipsurance Account

Connect a Shipsurance Account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.connect_insurer_request_body import ConnectInsurerRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsuranceApi(api_client)
    connect_insurer_request_body = openapi_client.ConnectInsurerRequestBody() # ConnectInsurerRequestBody | 

    try:
        # Connect a Shipsurance Account
        api_response = api_instance.connect_insurer(connect_insurer_request_body)
        print("The response of InsuranceApi->connect_insurer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsuranceApi->connect_insurer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connect_insurer_request_body** | [**ConnectInsurerRequestBody**](ConnectInsurerRequestBody.md)|  | 

### Return type

**object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disconnect_insurer**
> object disconnect_insurer()

Disconnect a Shipsurance Account

Disconnect a Shipsurance Account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsuranceApi(api_client)

    try:
        # Disconnect a Shipsurance Account
        api_response = api_instance.disconnect_insurer()
        print("The response of InsuranceApi->disconnect_insurer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsuranceApi->disconnect_insurer: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_insurance_balance**
> GetInsuranceBalanceResponseBody get_insurance_balance()

Get Insurance Funds Balance

Retrieve the balance of your Shipsurance account.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_insurance_balance_response_body import GetInsuranceBalanceResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsuranceApi(api_client)

    try:
        # Get Insurance Funds Balance
        api_response = api_instance.get_insurance_balance()
        print("The response of InsuranceApi->get_insurance_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsuranceApi->get_insurance_balance: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetInsuranceBalanceResponseBody**](GetInsuranceBalanceResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

