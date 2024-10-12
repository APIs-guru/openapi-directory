# openapi_client.WarehousesApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_warehouse**](WarehousesApi.md#create_warehouse) | **POST** /v1/warehouses | Create Warehouse
[**delete_warehouse**](WarehousesApi.md#delete_warehouse) | **DELETE** /v1/warehouses/{warehouse_id} | Delete Warehouse By ID
[**get_warehouse_by_id**](WarehousesApi.md#get_warehouse_by_id) | **GET** /v1/warehouses/{warehouse_id} | Get Warehouse By Id
[**list_warehouses**](WarehousesApi.md#list_warehouses) | **GET** /v1/warehouses | List Warehouses
[**update_warehouse**](WarehousesApi.md#update_warehouse) | **PUT** /v1/warehouses/{warehouse_id} | Update Warehouse By Id
[**update_warehouse_settings**](WarehousesApi.md#update_warehouse_settings) | **PUT** /v1/warehouses/{warehouse_id}/settings | Update Warehouse Settings


# **create_warehouse**
> CreateWarehouseResponseBody create_warehouse(create_warehouse_request_body)

Create Warehouse

Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id. If the return address is not supplied in the request body then it is assumed that the origin address is the return address as well 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_warehouse_request_body import CreateWarehouseRequestBody
from openapi_client.models.create_warehouse_response_body import CreateWarehouseResponseBody
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
    api_instance = openapi_client.WarehousesApi(api_client)
    create_warehouse_request_body = openapi_client.CreateWarehouseRequestBody() # CreateWarehouseRequestBody | 

    try:
        # Create Warehouse
        api_response = api_instance.create_warehouse(create_warehouse_request_body)
        print("The response of WarehousesApi->create_warehouse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarehousesApi->create_warehouse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_warehouse_request_body** | [**CreateWarehouseRequestBody**](CreateWarehouseRequestBody.md)|  | 

### Return type

[**CreateWarehouseResponseBody**](CreateWarehouseResponseBody.md)

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

# **delete_warehouse**
> str delete_warehouse(warehouse_id)

Delete Warehouse By ID

Delete a warehouse by ID

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
    api_instance = openapi_client.WarehousesApi(api_client)
    warehouse_id = 'warehouse_id_example' # str | Warehouse ID

    try:
        # Delete Warehouse By ID
        api_response = api_instance.delete_warehouse(warehouse_id)
        print("The response of WarehousesApi->delete_warehouse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarehousesApi->delete_warehouse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouse_id** | **str**| Warehouse ID | 

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
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_warehouse_by_id**
> GetWarehouseByIdResponseBody get_warehouse_by_id(warehouse_id)

Get Warehouse By Id

Retrieve warehouse data based on the warehouse ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_warehouse_by_id_response_body import GetWarehouseByIdResponseBody
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
    api_instance = openapi_client.WarehousesApi(api_client)
    warehouse_id = 'warehouse_id_example' # str | Warehouse ID

    try:
        # Get Warehouse By Id
        api_response = api_instance.get_warehouse_by_id(warehouse_id)
        print("The response of WarehousesApi->get_warehouse_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarehousesApi->get_warehouse_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouse_id** | **str**| Warehouse ID | 

### Return type

[**GetWarehouseByIdResponseBody**](GetWarehouseByIdResponseBody.md)

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

# **list_warehouses**
> ListWarehousesResponseBody list_warehouses()

List Warehouses

Retrieve a list of warehouses associated with this account.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_warehouses_response_body import ListWarehousesResponseBody
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
    api_instance = openapi_client.WarehousesApi(api_client)

    try:
        # List Warehouses
        api_response = api_instance.list_warehouses()
        print("The response of WarehousesApi->list_warehouses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarehousesApi->list_warehouses: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListWarehousesResponseBody**](ListWarehousesResponseBody.md)

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

# **update_warehouse**
> str update_warehouse(warehouse_id, update_warehouse_request_body)

Update Warehouse By Id

Update Warehouse object information

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.update_warehouse_request_body import UpdateWarehouseRequestBody
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
    api_instance = openapi_client.WarehousesApi(api_client)
    warehouse_id = 'warehouse_id_example' # str | Warehouse ID
    update_warehouse_request_body = openapi_client.UpdateWarehouseRequestBody() # UpdateWarehouseRequestBody | 

    try:
        # Update Warehouse By Id
        api_response = api_instance.update_warehouse(warehouse_id, update_warehouse_request_body)
        print("The response of WarehousesApi->update_warehouse:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarehousesApi->update_warehouse: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouse_id** | **str**| Warehouse ID | 
 **update_warehouse_request_body** | [**UpdateWarehouseRequestBody**](UpdateWarehouseRequestBody.md)|  | 

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
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_warehouse_settings**
> str update_warehouse_settings(warehouse_id, update_warehouse_settings_request_body)

Update Warehouse Settings

Update Warehouse settings object information

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.update_warehouse_settings_request_body import UpdateWarehouseSettingsRequestBody
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
    api_instance = openapi_client.WarehousesApi(api_client)
    warehouse_id = 'warehouse_id_example' # str | Warehouse ID
    update_warehouse_settings_request_body = openapi_client.UpdateWarehouseSettingsRequestBody() # UpdateWarehouseSettingsRequestBody | 

    try:
        # Update Warehouse Settings
        api_response = api_instance.update_warehouse_settings(warehouse_id, update_warehouse_settings_request_body)
        print("The response of WarehousesApi->update_warehouse_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WarehousesApi->update_warehouse_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouse_id** | **str**| Warehouse ID | 
 **update_warehouse_settings_request_body** | [**UpdateWarehouseSettingsRequestBody**](UpdateWarehouseSettingsRequestBody.md)|  | 

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
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

