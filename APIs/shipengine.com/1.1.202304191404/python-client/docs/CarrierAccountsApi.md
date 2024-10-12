# openapi_client.CarrierAccountsApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connect_carrier**](CarrierAccountsApi.md#connect_carrier) | **POST** /v1/connections/carriers/{carrier_name} | Connect a carrier account
[**disconnect_carrier**](CarrierAccountsApi.md#disconnect_carrier) | **DELETE** /v1/connections/carriers/{carrier_name}/{carrier_id} | Disconnect a carrier
[**get_carrier_settings**](CarrierAccountsApi.md#get_carrier_settings) | **GET** /v1/connections/carriers/{carrier_name}/{carrier_id}/settings | Get carrier settings
[**update_carrier_settings**](CarrierAccountsApi.md#update_carrier_settings) | **PUT** /v1/connections/carriers/{carrier_name}/{carrier_id}/settings | Update carrier settings


# **connect_carrier**
> ConnectCarrierResponseBody connect_carrier(carrier_name, connect_carrier_request_body)

Connect a carrier account

Connect a carrier account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.carrier_name import CarrierName
from openapi_client.models.connect_carrier_request_body import ConnectCarrierRequestBody
from openapi_client.models.connect_carrier_response_body import ConnectCarrierResponseBody
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
    api_instance = openapi_client.CarrierAccountsApi(api_client)
    carrier_name = openapi_client.CarrierName() # CarrierName | The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
    connect_carrier_request_body = openapi_client.ConnectCarrierRequestBody() # ConnectCarrierRequestBody | 

    try:
        # Connect a carrier account
        api_response = api_instance.connect_carrier(carrier_name, connect_carrier_request_body)
        print("The response of CarrierAccountsApi->connect_carrier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarrierAccountsApi->connect_carrier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_name** | [**CarrierName**](.md)| The carrier name, such as &#x60;stamps_com&#x60;, &#x60;ups&#x60;, &#x60;fedex&#x60;, or &#x60;dhl_express&#x60;. | 
 **connect_carrier_request_body** | [**ConnectCarrierRequestBody**](ConnectCarrierRequestBody.md)|  | 

### Return type

[**ConnectCarrierResponseBody**](ConnectCarrierResponseBody.md)

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
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disconnect_carrier**
> str disconnect_carrier(carrier_name, carrier_id)

Disconnect a carrier

Disconnect a carrier

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.carrier_name import CarrierName
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
    api_instance = openapi_client.CarrierAccountsApi(api_client)
    carrier_name = openapi_client.CarrierName() # CarrierName | The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.
    carrier_id = 'se-28529731' # str | Carrier ID

    try:
        # Disconnect a carrier
        api_response = api_instance.disconnect_carrier(carrier_name, carrier_id)
        print("The response of CarrierAccountsApi->disconnect_carrier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarrierAccountsApi->disconnect_carrier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_name** | [**CarrierName**](.md)| The carrier name, such as &#x60;stamps_com&#x60;, &#x60;ups&#x60;, &#x60;fedex&#x60;, or &#x60;dhl_express&#x60;. | 
 **carrier_id** | **str**| Carrier ID | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_carrier_settings**
> GetCarrierSettingsResponseBody get_carrier_settings(carrier_name, carrier_id)

Get carrier settings

Get carrier settings

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.carrier_name_with_settings import CarrierNameWithSettings
from openapi_client.models.get_carrier_settings_response_body import GetCarrierSettingsResponseBody
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
    api_instance = openapi_client.CarrierAccountsApi(api_client)
    carrier_name = openapi_client.CarrierNameWithSettings() # CarrierNameWithSettings | The carrier name, such as `ups`, `fedex`, or `dhl_express`.
    carrier_id = 'se-28529731' # str | Carrier ID

    try:
        # Get carrier settings
        api_response = api_instance.get_carrier_settings(carrier_name, carrier_id)
        print("The response of CarrierAccountsApi->get_carrier_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarrierAccountsApi->get_carrier_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_name** | [**CarrierNameWithSettings**](.md)| The carrier name, such as &#x60;ups&#x60;, &#x60;fedex&#x60;, or &#x60;dhl_express&#x60;. | 
 **carrier_id** | **str**| Carrier ID | 

### Return type

[**GetCarrierSettingsResponseBody**](GetCarrierSettingsResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_carrier_settings**
> str update_carrier_settings(carrier_name, carrier_id, update_carrier_settings_request_body)

Update carrier settings

Update carrier settings

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.carrier_name_with_settings import CarrierNameWithSettings
from openapi_client.models.update_carrier_settings_request_body import UpdateCarrierSettingsRequestBody
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
    api_instance = openapi_client.CarrierAccountsApi(api_client)
    carrier_name = openapi_client.CarrierNameWithSettings() # CarrierNameWithSettings | The carrier name, such as `ups`, `fedex`, or `dhl_express`.
    carrier_id = 'se-28529731' # str | Carrier ID
    update_carrier_settings_request_body = openapi_client.UpdateCarrierSettingsRequestBody() # UpdateCarrierSettingsRequestBody | 

    try:
        # Update carrier settings
        api_response = api_instance.update_carrier_settings(carrier_name, carrier_id, update_carrier_settings_request_body)
        print("The response of CarrierAccountsApi->update_carrier_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarrierAccountsApi->update_carrier_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_name** | [**CarrierNameWithSettings**](.md)| The carrier name, such as &#x60;ups&#x60;, &#x60;fedex&#x60;, or &#x60;dhl_express&#x60;. | 
 **carrier_id** | **str**| Carrier ID | 
 **update_carrier_settings_request_body** | [**UpdateCarrierSettingsRequestBody**](UpdateCarrierSettingsRequestBody.md)|  | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

