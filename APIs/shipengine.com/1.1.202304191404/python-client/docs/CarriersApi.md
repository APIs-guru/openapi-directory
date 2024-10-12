# openapi_client.CarriersApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_funds_to_carrier**](CarriersApi.md#add_funds_to_carrier) | **PUT** /v1/carriers/{carrier_id}/add_funds | Add Funds To Carrier
[**get_carrier_by_id**](CarriersApi.md#get_carrier_by_id) | **GET** /v1/carriers/{carrier_id} | Get Carrier By ID
[**get_carrier_options**](CarriersApi.md#get_carrier_options) | **GET** /v1/carriers/{carrier_id}/options | Get Carrier Options
[**list_carrier_package_types**](CarriersApi.md#list_carrier_package_types) | **GET** /v1/carriers/{carrier_id}/packages | List Carrier Package Types
[**list_carrier_services**](CarriersApi.md#list_carrier_services) | **GET** /v1/carriers/{carrier_id}/services | List Carrier Services
[**list_carriers**](CarriersApi.md#list_carriers) | **GET** /v1/carriers | List Carriers


# **add_funds_to_carrier**
> AddFundsToCarrierResponseBody add_funds_to_carrier(carrier_id, add_funds_to_carrier_request_body)

Add Funds To Carrier

Add Funds To A Carrier

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.add_funds_to_carrier_request_body import AddFundsToCarrierRequestBody
from openapi_client.models.add_funds_to_carrier_response_body import AddFundsToCarrierResponseBody
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
    api_instance = openapi_client.CarriersApi(api_client)
    carrier_id = 'se-28529731' # str | Carrier ID
    add_funds_to_carrier_request_body = openapi_client.AddFundsToCarrierRequestBody() # AddFundsToCarrierRequestBody | 

    try:
        # Add Funds To Carrier
        api_response = api_instance.add_funds_to_carrier(carrier_id, add_funds_to_carrier_request_body)
        print("The response of CarriersApi->add_funds_to_carrier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarriersApi->add_funds_to_carrier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_id** | **str**| Carrier ID | 
 **add_funds_to_carrier_request_body** | [**AddFundsToCarrierRequestBody**](AddFundsToCarrierRequestBody.md)|  | 

### Return type

[**AddFundsToCarrierResponseBody**](AddFundsToCarrierResponseBody.md)

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

# **get_carrier_by_id**
> GetCarrierByIdResponseBody get_carrier_by_id(carrier_id)

Get Carrier By ID

Retrive carrier info by ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_carrier_by_id_response_body import GetCarrierByIdResponseBody
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
    api_instance = openapi_client.CarriersApi(api_client)
    carrier_id = 'se-28529731' # str | Carrier ID

    try:
        # Get Carrier By ID
        api_response = api_instance.get_carrier_by_id(carrier_id)
        print("The response of CarriersApi->get_carrier_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarriersApi->get_carrier_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_id** | **str**| Carrier ID | 

### Return type

[**GetCarrierByIdResponseBody**](GetCarrierByIdResponseBody.md)

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
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_carrier_options**
> GetCarrierOptionsResponseBody get_carrier_options(carrier_id)

Get Carrier Options

Get a list of the options available for the carrier

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_carrier_options_response_body import GetCarrierOptionsResponseBody
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
    api_instance = openapi_client.CarriersApi(api_client)
    carrier_id = 'se-28529731' # str | Carrier ID

    try:
        # Get Carrier Options
        api_response = api_instance.get_carrier_options(carrier_id)
        print("The response of CarriersApi->get_carrier_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarriersApi->get_carrier_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_id** | **str**| Carrier ID | 

### Return type

[**GetCarrierOptionsResponseBody**](GetCarrierOptionsResponseBody.md)

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
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_carrier_package_types**
> ListCarrierPackageTypesResponseBody list_carrier_package_types(carrier_id)

List Carrier Package Types

List the package types associated with the carrier

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_carrier_package_types_response_body import ListCarrierPackageTypesResponseBody
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
    api_instance = openapi_client.CarriersApi(api_client)
    carrier_id = 'se-28529731' # str | Carrier ID

    try:
        # List Carrier Package Types
        api_response = api_instance.list_carrier_package_types(carrier_id)
        print("The response of CarriersApi->list_carrier_package_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarriersApi->list_carrier_package_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_id** | **str**| Carrier ID | 

### Return type

[**ListCarrierPackageTypesResponseBody**](ListCarrierPackageTypesResponseBody.md)

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
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_carrier_services**
> ListCarrierServicesResponseBody list_carrier_services(carrier_id)

List Carrier Services

List the services associated with the carrier ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_carrier_services_response_body import ListCarrierServicesResponseBody
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
    api_instance = openapi_client.CarriersApi(api_client)
    carrier_id = 'se-28529731' # str | Carrier ID

    try:
        # List Carrier Services
        api_response = api_instance.list_carrier_services(carrier_id)
        print("The response of CarriersApi->list_carrier_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarriersApi->list_carrier_services: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_id** | **str**| Carrier ID | 

### Return type

[**ListCarrierServicesResponseBody**](ListCarrierServicesResponseBody.md)

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
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_carriers**
> GetCarriersResponseBody list_carriers()

List Carriers

List all carriers that have been added to this account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_carriers_response_body import GetCarriersResponseBody
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
    api_instance = openapi_client.CarriersApi(api_client)

    try:
        # List Carriers
        api_response = api_instance.list_carriers()
        print("The response of CarriersApi->list_carriers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CarriersApi->list_carriers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetCarriersResponseBody**](GetCarriersResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**207** | The request was a partial success. It contains results, as well as errors. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

