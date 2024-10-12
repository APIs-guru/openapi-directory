# openapi_client.PackageTypesApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_package_type**](PackageTypesApi.md#create_package_type) | **POST** /v1/packages | Create Custom Package Type
[**delete_package_type**](PackageTypesApi.md#delete_package_type) | **DELETE** /v1/packages/{package_id} | Delete A Custom Package By ID
[**get_package_type_by_id**](PackageTypesApi.md#get_package_type_by_id) | **GET** /v1/packages/{package_id} | Get Custom Package Type By ID
[**list_package_types**](PackageTypesApi.md#list_package_types) | **GET** /v1/packages | List Custom Package Types
[**update_package_type**](PackageTypesApi.md#update_package_type) | **PUT** /v1/packages/{package_id} | Update Custom Package Type By ID


# **create_package_type**
> CreatePackageTypeResponseBody create_package_type(create_package_type_request_body)

Create Custom Package Type

Create a custom package type to better assist in getting accurate rate estimates

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_package_type_request_body import CreatePackageTypeRequestBody
from openapi_client.models.create_package_type_response_body import CreatePackageTypeResponseBody
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
    api_instance = openapi_client.PackageTypesApi(api_client)
    create_package_type_request_body = openapi_client.CreatePackageTypeRequestBody() # CreatePackageTypeRequestBody | 

    try:
        # Create Custom Package Type
        api_response = api_instance.create_package_type(create_package_type_request_body)
        print("The response of PackageTypesApi->create_package_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypesApi->create_package_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_package_type_request_body** | [**CreatePackageTypeRequestBody**](CreatePackageTypeRequestBody.md)|  | 

### Return type

[**CreatePackageTypeResponseBody**](CreatePackageTypeResponseBody.md)

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

# **delete_package_type**
> str delete_package_type(package_id)

Delete A Custom Package By ID

Delete a custom package using the ID

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
    api_instance = openapi_client.PackageTypesApi(api_client)
    package_id = 'package_id_example' # str | Package ID

    try:
        # Delete A Custom Package By ID
        api_response = api_instance.delete_package_type(package_id)
        print("The response of PackageTypesApi->delete_package_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypesApi->delete_package_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_id** | **str**| Package ID | 

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

# **get_package_type_by_id**
> GetPackageTypeByIdResponseBody get_package_type_by_id(package_id)

Get Custom Package Type By ID

Get Custom Package Type by ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_package_type_by_id_response_body import GetPackageTypeByIdResponseBody
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
    api_instance = openapi_client.PackageTypesApi(api_client)
    package_id = 'package_id_example' # str | Package ID

    try:
        # Get Custom Package Type By ID
        api_response = api_instance.get_package_type_by_id(package_id)
        print("The response of PackageTypesApi->get_package_type_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypesApi->get_package_type_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_id** | **str**| Package ID | 

### Return type

[**GetPackageTypeByIdResponseBody**](GetPackageTypeByIdResponseBody.md)

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

# **list_package_types**
> ListPackageTypesResponseBody list_package_types()

List Custom Package Types

List the custom package types associated with the account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_package_types_response_body import ListPackageTypesResponseBody
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
    api_instance = openapi_client.PackageTypesApi(api_client)

    try:
        # List Custom Package Types
        api_response = api_instance.list_package_types()
        print("The response of PackageTypesApi->list_package_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypesApi->list_package_types: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListPackageTypesResponseBody**](ListPackageTypesResponseBody.md)

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

# **update_package_type**
> str update_package_type(package_id, update_package_type_request_body)

Update Custom Package Type By ID

Update the custom package type object by ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.update_package_type_request_body import UpdatePackageTypeRequestBody
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
    api_instance = openapi_client.PackageTypesApi(api_client)
    package_id = 'package_id_example' # str | Package ID
    update_package_type_request_body = openapi_client.UpdatePackageTypeRequestBody() # UpdatePackageTypeRequestBody | 

    try:
        # Update Custom Package Type By ID
        api_response = api_instance.update_package_type(package_id, update_package_type_request_body)
        print("The response of PackageTypesApi->update_package_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypesApi->update_package_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_id** | **str**| Package ID | 
 **update_package_type_request_body** | [**UpdatePackageTypeRequestBody**](UpdatePackageTypeRequestBody.md)|  | 

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

