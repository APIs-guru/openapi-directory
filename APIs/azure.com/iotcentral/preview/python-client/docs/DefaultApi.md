# openapi_client.DefaultApi

All URIs are relative to *https://azure.local/api/preview*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_tokens_get**](DefaultApi.md#api_tokens_get) | **GET** /apiTokens/{token_id} | Get an API token by ID.
[**api_tokens_list**](DefaultApi.md#api_tokens_list) | **GET** /apiTokens | Get the list of API tokens in an application.
[**api_tokens_remove**](DefaultApi.md#api_tokens_remove) | **DELETE** /apiTokens/{token_id} | Delete an API token.
[**api_tokens_set**](DefaultApi.md#api_tokens_set) | **PUT** /apiTokens/{token_id} | Create a new API token in the application.
[**continuous_data_exports_get**](DefaultApi.md#continuous_data_exports_get) | **GET** /continuousDataExports/{export_id} | Get a continuous data export by ID.
[**continuous_data_exports_list**](DefaultApi.md#continuous_data_exports_list) | **GET** /continuousDataExports | Get the list of continuous data exports in an application.
[**continuous_data_exports_remove**](DefaultApi.md#continuous_data_exports_remove) | **DELETE** /continuousDataExports/{export_id} | Delete a continuous data export.
[**continuous_data_exports_set**](DefaultApi.md#continuous_data_exports_set) | **PUT** /continuousDataExports/{export_id} | Create a new continuous data export or update an existing one by ID.
[**device_templates_get**](DefaultApi.md#device_templates_get) | **GET** /deviceTemplates/{device_template_id} | Get a device template by ID
[**device_templates_get_merged**](DefaultApi.md#device_templates_get_merged) | **GET** /deviceTemplates/{device_template_id}/merged | Get a merged device template by ID
[**device_templates_list**](DefaultApi.md#device_templates_list) | **GET** /deviceTemplates | Get the list of device templates in an application
[**device_templates_list_devices**](DefaultApi.md#device_templates_list_devices) | **GET** /deviceTemplates/{device_template_id}/devices | Get devices for a template
[**device_templates_remove**](DefaultApi.md#device_templates_remove) | **DELETE** /deviceTemplates/{device_template_id} | Delete a device template
[**device_templates_set**](DefaultApi.md#device_templates_set) | **PUT** /deviceTemplates/{device_template_id} | Create or update a device template by ID
[**devices_execute_command**](DefaultApi.md#devices_execute_command) | **POST** /devices/{device_id}/components/{component_name}/commands/{command_name} | Execute a device command
[**devices_get**](DefaultApi.md#devices_get) | **GET** /devices/{device_id} | Get a device by ID
[**devices_get_cloud_properties**](DefaultApi.md#devices_get_cloud_properties) | **GET** /devices/{device_id}/cloudProperties | Get device cloud properties
[**devices_get_command_history**](DefaultApi.md#devices_get_command_history) | **GET** /devices/{device_id}/components/{component_name}/commands/{command_name} | Get device command history
[**devices_get_component_properties**](DefaultApi.md#devices_get_component_properties) | **GET** /devices/{device_id}/components/{component_name}/properties | Get device properties for a specific component
[**devices_get_credentials**](DefaultApi.md#devices_get_credentials) | **GET** /devices/{device_id}/credentials | Get device credentials
[**devices_get_properties**](DefaultApi.md#devices_get_properties) | **GET** /devices/{device_id}/properties | Get device properties
[**devices_get_telemetry_value**](DefaultApi.md#devices_get_telemetry_value) | **GET** /devices/{device_id}/components/{component_name}/telemetry/{telemetry_name} | Get device telemetry value
[**devices_list**](DefaultApi.md#devices_list) | **GET** /devices | Get the list of devices in an application
[**devices_remove**](DefaultApi.md#devices_remove) | **DELETE** /devices/{device_id} | Delete a device
[**devices_set**](DefaultApi.md#devices_set) | **PUT** /devices/{device_id} | Create or update a device
[**devices_update_cloud_properties**](DefaultApi.md#devices_update_cloud_properties) | **PUT** /devices/{device_id}/cloudProperties | Update device cloud properties
[**devices_update_component_properties**](DefaultApi.md#devices_update_component_properties) | **PUT** /devices/{device_id}/components/{component_name}/properties | Update device properties for a specific component
[**devices_update_properties**](DefaultApi.md#devices_update_properties) | **PUT** /devices/{device_id}/properties | Update device properties
[**roles_get**](DefaultApi.md#roles_get) | **GET** /roles/{role_id} | Get a role by ID.
[**roles_list**](DefaultApi.md#roles_list) | **GET** /roles | Get the list of roles in an application.


# **api_tokens_get**
> ApiToken api_tokens_get(token_id)

Get an API token by ID.

### Example


```python
import openapi_client
from openapi_client.models.api_token import ApiToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    token_id = 'token_id_example' # str | Unique ID for the API token.

    try:
        # Get an API token by ID.
        api_response = api_instance.api_tokens_get(token_id)
        print("The response of DefaultApi->api_tokens_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_tokens_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **str**| Unique ID for the API token. | 

### Return type

[**ApiToken**](ApiToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_tokens_list**
> ApiTokenCollection api_tokens_list()

Get the list of API tokens in an application.

### Example


```python
import openapi_client
from openapi_client.models.api_token_collection import ApiTokenCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get the list of API tokens in an application.
        api_response = api_instance.api_tokens_list()
        print("The response of DefaultApi->api_tokens_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_tokens_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiTokenCollection**](ApiTokenCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_tokens_remove**
> api_tokens_remove(token_id)

Delete an API token.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    token_id = 'token_id_example' # str | Unique ID for the API token.

    try:
        # Delete an API token.
        api_instance.api_tokens_remove(token_id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_tokens_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **str**| Unique ID for the API token. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_tokens_set**
> ApiToken api_tokens_set(token_id, body)

Create a new API token in the application.

### Example


```python
import openapi_client
from openapi_client.models.api_token import ApiToken
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    token_id = 'token_id_example' # str | Unique ID for the API token.
    body = openapi_client.ApiToken() # ApiToken | API token body.

    try:
        # Create a new API token in the application.
        api_response = api_instance.api_tokens_set(token_id, body)
        print("The response of DefaultApi->api_tokens_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_tokens_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **str**| Unique ID for the API token. | 
 **body** | [**ApiToken**](ApiToken.md)| API token body. | 

### Return type

[**ApiToken**](ApiToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **continuous_data_exports_get**
> ContinuousDataExport continuous_data_exports_get(export_id)

Get a continuous data export by ID.

### Example


```python
import openapi_client
from openapi_client.models.continuous_data_export import ContinuousDataExport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    export_id = 'export_id_example' # str | Unique ID for the continuous data export.

    try:
        # Get a continuous data export by ID.
        api_response = api_instance.continuous_data_exports_get(export_id)
        print("The response of DefaultApi->continuous_data_exports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->continuous_data_exports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_id** | **str**| Unique ID for the continuous data export. | 

### Return type

[**ContinuousDataExport**](ContinuousDataExport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **continuous_data_exports_list**
> ContinuousDataExportCollection continuous_data_exports_list()

Get the list of continuous data exports in an application.

### Example


```python
import openapi_client
from openapi_client.models.continuous_data_export_collection import ContinuousDataExportCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get the list of continuous data exports in an application.
        api_response = api_instance.continuous_data_exports_list()
        print("The response of DefaultApi->continuous_data_exports_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->continuous_data_exports_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ContinuousDataExportCollection**](ContinuousDataExportCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **continuous_data_exports_remove**
> continuous_data_exports_remove(export_id)

Delete a continuous data export.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    export_id = 'export_id_example' # str | Unique ID for the continuous data export.

    try:
        # Delete a continuous data export.
        api_instance.continuous_data_exports_remove(export_id)
    except Exception as e:
        print("Exception when calling DefaultApi->continuous_data_exports_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_id** | **str**| Unique ID for the continuous data export. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **continuous_data_exports_set**
> ContinuousDataExport continuous_data_exports_set(export_id, body)

Create a new continuous data export or update an existing one by ID.

### Example


```python
import openapi_client
from openapi_client.models.continuous_data_export import ContinuousDataExport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    export_id = 'export_id_example' # str | Unique ID for the continuous data export.
    body = openapi_client.ContinuousDataExport() # ContinuousDataExport | Data export body.

    try:
        # Create a new continuous data export or update an existing one by ID.
        api_response = api_instance.continuous_data_exports_set(export_id, body)
        print("The response of DefaultApi->continuous_data_exports_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->continuous_data_exports_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_id** | **str**| Unique ID for the continuous data export. | 
 **body** | [**ContinuousDataExport**](ContinuousDataExport.md)| Data export body. | 

### Return type

[**ContinuousDataExport**](ContinuousDataExport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_templates_get**
> DeviceTemplate device_templates_get(device_template_id)

Get a device template by ID

### Example


```python
import openapi_client
from openapi_client.models.device_template import DeviceTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_template_id = 'device_template_id_example' # str | Unique ID of the device template.

    try:
        # Get a device template by ID
        api_response = api_instance.device_templates_get(device_template_id)
        print("The response of DefaultApi->device_templates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->device_templates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_template_id** | **str**| Unique ID of the device template. | 

### Return type

[**DeviceTemplate**](DeviceTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_templates_get_merged**
> DeviceTemplate device_templates_get_merged(device_template_id)

Get a merged device template by ID

### Example


```python
import openapi_client
from openapi_client.models.device_template import DeviceTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_template_id = 'device_template_id_example' # str | Unique ID of the device template.

    try:
        # Get a merged device template by ID
        api_response = api_instance.device_templates_get_merged(device_template_id)
        print("The response of DefaultApi->device_templates_get_merged:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->device_templates_get_merged: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_template_id** | **str**| Unique ID of the device template. | 

### Return type

[**DeviceTemplate**](DeviceTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_templates_list**
> DeviceTemplateCollection device_templates_list()

Get the list of device templates in an application

### Example


```python
import openapi_client
from openapi_client.models.device_template_collection import DeviceTemplateCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get the list of device templates in an application
        api_response = api_instance.device_templates_list()
        print("The response of DefaultApi->device_templates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->device_templates_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DeviceTemplateCollection**](DeviceTemplateCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_templates_list_devices**
> DeviceCollection device_templates_list_devices(device_template_id)

Get devices for a template

### Example


```python
import openapi_client
from openapi_client.models.device_collection import DeviceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_template_id = 'device_template_id_example' # str | Unique ID of the device template.

    try:
        # Get devices for a template
        api_response = api_instance.device_templates_list_devices(device_template_id)
        print("The response of DefaultApi->device_templates_list_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->device_templates_list_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_template_id** | **str**| Unique ID of the device template. | 

### Return type

[**DeviceCollection**](DeviceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_templates_remove**
> device_templates_remove(device_template_id)

Delete a device template

Delete an existing device template by device ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_template_id = 'device_template_id_example' # str | Unique ID of the device template.

    try:
        # Delete a device template
        api_instance.device_templates_remove(device_template_id)
    except Exception as e:
        print("Exception when calling DefaultApi->device_templates_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_template_id** | **str**| Unique ID of the device template. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_templates_set**
> DeviceTemplate device_templates_set(device_template_id, body)

Create or update a device template by ID

### Example


```python
import openapi_client
from openapi_client.models.device_template import DeviceTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_template_id = 'device_template_id_example' # str | Unique ID of the device template.
    body = openapi_client.DeviceTemplate() # DeviceTemplate | Device template body.

    try:
        # Create or update a device template by ID
        api_response = api_instance.device_templates_set(device_template_id, body)
        print("The response of DefaultApi->device_templates_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->device_templates_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_template_id** | **str**| Unique ID of the device template. | 
 **body** | [**DeviceTemplate**](DeviceTemplate.md)| Device template body. | 

### Return type

[**DeviceTemplate**](DeviceTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_execute_command**
> DeviceCommand devices_execute_command(device_id, component_name, command_name, body)

Execute a device command

Execute a command on a device.

### Example


```python
import openapi_client
from openapi_client.models.device_command import DeviceCommand
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.
    component_name = 'component_name_example' # str | Name of the device component.
    command_name = 'command_name_example' # str | Name of this device command.
    body = openapi_client.DeviceCommand() # DeviceCommand | Device command body.

    try:
        # Execute a device command
        api_response = api_instance.devices_execute_command(device_id, component_name, command_name, body)
        print("The response of DefaultApi->devices_execute_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_execute_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 
 **component_name** | **str**| Name of the device component. | 
 **command_name** | **str**| Name of this device command. | 
 **body** | [**DeviceCommand**](DeviceCommand.md)| Device command body. | 

### Return type

[**DeviceCommand**](DeviceCommand.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get**
> Device devices_get(device_id)

Get a device by ID

Get details about an existing device by device ID.

### Example


```python
import openapi_client
from openapi_client.models.device import Device
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.

    try:
        # Get a device by ID
        api_response = api_instance.devices_get(device_id)
        print("The response of DefaultApi->devices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_cloud_properties**
> Dict[str, object] devices_get_cloud_properties(device_id)

Get device cloud properties

Get all cloud property values of a device by device ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.

    try:
        # Get device cloud properties
        api_response = api_instance.devices_get_cloud_properties(device_id)
        print("The response of DefaultApi->devices_get_cloud_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_get_cloud_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_command_history**
> DeviceCommandCollection devices_get_command_history(device_id, component_name, command_name)

Get device command history

### Example


```python
import openapi_client
from openapi_client.models.device_command_collection import DeviceCommandCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.
    component_name = 'component_name_example' # str | Name of the device component.
    command_name = 'command_name_example' # str | Name of this device command.

    try:
        # Get device command history
        api_response = api_instance.devices_get_command_history(device_id, component_name, command_name)
        print("The response of DefaultApi->devices_get_command_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_get_command_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 
 **component_name** | **str**| Name of the device component. | 
 **command_name** | **str**| Name of this device command. | 

### Return type

[**DeviceCommandCollection**](DeviceCommandCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_component_properties**
> Dict[str, object] devices_get_component_properties(device_id, component_name)

Get device properties for a specific component

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.
    component_name = 'component_name_example' # str | Name of the device component.

    try:
        # Get device properties for a specific component
        api_response = api_instance.devices_get_component_properties(device_id, component_name)
        print("The response of DefaultApi->devices_get_component_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_get_component_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 
 **component_name** | **str**| Name of the device component. | 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_credentials**
> DeviceCredentials devices_get_credentials(device_id)

Get device credentials

### Example


```python
import openapi_client
from openapi_client.models.device_credentials import DeviceCredentials
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.

    try:
        # Get device credentials
        api_response = api_instance.devices_get_credentials(device_id)
        print("The response of DefaultApi->devices_get_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_get_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 

### Return type

[**DeviceCredentials**](DeviceCredentials.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_properties**
> Dict[str, object] devices_get_properties(device_id)

Get device properties

Get all property values of a device by device ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.

    try:
        # Get device properties
        api_response = api_instance.devices_get_properties(device_id)
        print("The response of DefaultApi->devices_get_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_get_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_telemetry_value**
> Value devices_get_telemetry_value(device_id, component_name, telemetry_name)

Get device telemetry value

### Example


```python
import openapi_client
from openapi_client.models.value import Value
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.
    component_name = 'component_name_example' # str | Name of the device component.
    telemetry_name = 'telemetry_name_example' # str | Name of this device telemetry.

    try:
        # Get device telemetry value
        api_response = api_instance.devices_get_telemetry_value(device_id, component_name, telemetry_name)
        print("The response of DefaultApi->devices_get_telemetry_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_get_telemetry_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 
 **component_name** | **str**| Name of the device component. | 
 **telemetry_name** | **str**| Name of this device telemetry. | 

### Return type

[**Value**](Value.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_list**
> DeviceCollection devices_list()

Get the list of devices in an application

### Example


```python
import openapi_client
from openapi_client.models.device_collection import DeviceCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get the list of devices in an application
        api_response = api_instance.devices_list()
        print("The response of DefaultApi->devices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DeviceCollection**](DeviceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_remove**
> devices_remove(device_id)

Delete a device

Delete an existing device by device ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.

    try:
        # Delete a device
        api_instance.devices_remove(device_id)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_set**
> Device devices_set(device_id, body)

Create or update a device

Create a new device or update an existing one by device ID.

### Example


```python
import openapi_client
from openapi_client.models.device import Device
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.
    body = openapi_client.Device() # Device | Device body.

    try:
        # Create or update a device
        api_response = api_instance.devices_set(device_id, body)
        print("The response of DefaultApi->devices_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 
 **body** | [**Device**](Device.md)| Device body. | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_update_cloud_properties**
> Dict[str, object] devices_update_cloud_properties(device_id, body)

Update device cloud properties

Update all cloud property values of a device by device ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.
    body = None # Dict[str, object] | Device properties.

    try:
        # Update device cloud properties
        api_response = api_instance.devices_update_cloud_properties(device_id, body)
        print("The response of DefaultApi->devices_update_cloud_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_update_cloud_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 
 **body** | [**Dict[str, object]**](object.md)| Device properties. | 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_update_component_properties**
> Dict[str, object] devices_update_component_properties(device_id, component_name, body)

Update device properties for a specific component

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.
    component_name = 'component_name_example' # str | Name of the device component.
    body = None # Dict[str, object] | Device properties.

    try:
        # Update device properties for a specific component
        api_response = api_instance.devices_update_component_properties(device_id, component_name, body)
        print("The response of DefaultApi->devices_update_component_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_update_component_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 
 **component_name** | **str**| Name of the device component. | 
 **body** | [**Dict[str, object]**](object.md)| Device properties. | 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_update_properties**
> Dict[str, object] devices_update_properties(device_id, body)

Update device properties

Update all property values of a device by device ID.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    device_id = 'device_id_example' # str | Unique ID of the device.
    body = None # Dict[str, object] | Device properties.

    try:
        # Update device properties
        api_response = api_instance.devices_update_properties(device_id, body)
        print("The response of DefaultApi->devices_update_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->devices_update_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_id** | **str**| Unique ID of the device. | 
 **body** | [**Dict[str, object]**](object.md)| Device properties. | 

### Return type

**Dict[str, object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_get**
> Role roles_get(role_id)

Get a role by ID.

### Example


```python
import openapi_client
from openapi_client.models.role import Role
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    role_id = 'role_id_example' # str | Unique ID for the role.

    try:
        # Get a role by ID.
        api_response = api_instance.roles_get(role_id)
        print("The response of DefaultApi->roles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->roles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_id** | **str**| Unique ID for the role. | 

### Return type

[**Role**](Role.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roles_list**
> RoleCollection roles_list()

Get the list of roles in an application.

### Example


```python
import openapi_client
from openapi_client.models.role_collection import RoleCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/api/preview
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/api/preview"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get the list of roles in an application.
        api_response = api_instance.roles_list()
        print("The response of DefaultApi->roles_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->roles_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RoleCollection**](RoleCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

