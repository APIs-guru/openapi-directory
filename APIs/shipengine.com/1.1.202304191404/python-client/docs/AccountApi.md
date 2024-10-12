# openapi_client.AccountApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_account_image**](AccountApi.md#create_account_image) | **POST** /v1/account/settings/images | Create an Account Image
[**delete_account_image_by_id**](AccountApi.md#delete_account_image_by_id) | **DELETE** /v1/account/settings/images/{label_image_id} | Delete Account Image By Id
[**get_account_settings_images_by_id**](AccountApi.md#get_account_settings_images_by_id) | **GET** /v1/account/settings/images/{label_image_id} | Get Account Image By ID
[**list_account_images**](AccountApi.md#list_account_images) | **GET** /v1/account/settings/images | List Account Images
[**list_account_settings**](AccountApi.md#list_account_settings) | **GET** /v1/account/settings | List Account Settings
[**update_account_settings_images_by_id**](AccountApi.md#update_account_settings_images_by_id) | **PUT** /v1/account/settings/images/{label_image_id} | Update Account Image By ID


# **create_account_image**
> GetAccountSettingsImagesResponseBody create_account_image(create_account_settings_image_request_body)

Create an Account Image

Create an Account Image

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_account_settings_image_request_body import CreateAccountSettingsImageRequestBody
from openapi_client.models.get_account_settings_images_response_body import GetAccountSettingsImagesResponseBody
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
    api_instance = openapi_client.AccountApi(api_client)
    create_account_settings_image_request_body = openapi_client.CreateAccountSettingsImageRequestBody() # CreateAccountSettingsImageRequestBody | 

    try:
        # Create an Account Image
        api_response = api_instance.create_account_image(create_account_settings_image_request_body)
        print("The response of AccountApi->create_account_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->create_account_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_account_settings_image_request_body** | [**CreateAccountSettingsImageRequestBody**](CreateAccountSettingsImageRequestBody.md)|  | 

### Return type

[**GetAccountSettingsImagesResponseBody**](GetAccountSettingsImagesResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested object creation was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_account_image_by_id**
> str delete_account_image_by_id(label_image_id)

Delete Account Image By Id

Delete Account Image By Id

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
    api_instance = openapi_client.AccountApi(api_client)
    label_image_id = 'label_image_id_example' # str | Label Image Id

    try:
        # Delete Account Image By Id
        api_response = api_instance.delete_account_image_by_id(label_image_id)
        print("The response of AccountApi->delete_account_image_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->delete_account_image_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_image_id** | **str**| Label Image Id | 

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

# **get_account_settings_images_by_id**
> GetAccountSettingsImagesResponseBody get_account_settings_images_by_id(label_image_id)

Get Account Image By ID

Retrieve information for an account image.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_account_settings_images_response_body import GetAccountSettingsImagesResponseBody
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
    api_instance = openapi_client.AccountApi(api_client)
    label_image_id = 'label_image_id_example' # str | Label Image Id

    try:
        # Get Account Image By ID
        api_response = api_instance.get_account_settings_images_by_id(label_image_id)
        print("The response of AccountApi->get_account_settings_images_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_account_settings_images_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_image_id** | **str**| Label Image Id | 

### Return type

[**GetAccountSettingsImagesResponseBody**](GetAccountSettingsImagesResponseBody.md)

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

# **list_account_images**
> ListAccountSettingsImagesResponseBody list_account_images()

List Account Images

List all account images for the ShipEngine account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_account_settings_images_response_body import ListAccountSettingsImagesResponseBody
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
    api_instance = openapi_client.AccountApi(api_client)

    try:
        # List Account Images
        api_response = api_instance.list_account_images()
        print("The response of AccountApi->list_account_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->list_account_images: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAccountSettingsImagesResponseBody**](ListAccountSettingsImagesResponseBody.md)

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

# **list_account_settings**
> GetAccountSettingsResponseBody list_account_settings()

List Account Settings

List all account settings for the ShipEngine account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_account_settings_response_body import GetAccountSettingsResponseBody
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
    api_instance = openapi_client.AccountApi(api_client)

    try:
        # List Account Settings
        api_response = api_instance.list_account_settings()
        print("The response of AccountApi->list_account_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->list_account_settings: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAccountSettingsResponseBody**](GetAccountSettingsResponseBody.md)

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

# **update_account_settings_images_by_id**
> str update_account_settings_images_by_id(label_image_id, update_account_settings_image_request_body)

Update Account Image By ID

Update information for an account image.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.update_account_settings_image_request_body import UpdateAccountSettingsImageRequestBody
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
    api_instance = openapi_client.AccountApi(api_client)
    label_image_id = 'label_image_id_example' # str | Label Image Id
    update_account_settings_image_request_body = openapi_client.UpdateAccountSettingsImageRequestBody() # UpdateAccountSettingsImageRequestBody | 

    try:
        # Update Account Image By ID
        api_response = api_instance.update_account_settings_images_by_id(label_image_id, update_account_settings_image_request_body)
        print("The response of AccountApi->update_account_settings_images_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->update_account_settings_images_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_image_id** | **str**| Label Image Id | 
 **update_account_settings_image_request_body** | [**UpdateAccountSettingsImageRequestBody**](UpdateAccountSettingsImageRequestBody.md)|  | 

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

