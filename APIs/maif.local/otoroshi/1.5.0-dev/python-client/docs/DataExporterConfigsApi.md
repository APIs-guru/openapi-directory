# openapi_client.DataExporterConfigsApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_bulk_data_exporter_configs**](DataExporterConfigsApi.md#create_bulk_data_exporter_configs) | **POST** /api/data-exporter-configs/_bulk | Create a new data exporter configs
[**create_data_exporter_config**](DataExporterConfigsApi.md#create_data_exporter_config) | **POST** /api/data-exporter-configs | Create a new data exporter config
[**data_exporter_template**](DataExporterConfigsApi.md#data_exporter_template) | **GET** /api/data-exporter-configs/_template | Get all data exporter configs
[**delete_data_exporter_config**](DataExporterConfigsApi.md#delete_data_exporter_config) | **DELETE** /api/data-exporter-configs/{dataExporterConfigId} | Delete a data exporter config
[**deletebulk_data_exporter_config**](DataExporterConfigsApi.md#deletebulk_data_exporter_config) | **DELETE** /api/data-exporter-configs/_bulk | Delete a data exporter config
[**find_all_data_exporters**](DataExporterConfigsApi.md#find_all_data_exporters) | **GET** /api/data-exporter-configs | Get all data exporter configs
[**find_data_exporter_config_by_id**](DataExporterConfigsApi.md#find_data_exporter_config_by_id) | **GET** /api/data-exporter-configs/{dataExporterConfigId} | Get a data exporter config
[**patch_bulk_data_exporter_config**](DataExporterConfigsApi.md#patch_bulk_data_exporter_config) | **PATCH** /api/data-exporter-configs/_bulk | Update a data exporter configs with a diff
[**patch_data_exporter_config**](DataExporterConfigsApi.md#patch_data_exporter_config) | **PATCH** /api/data-exporter-configs/{dataExporterConfigId} | Update a data exporter config with a diff
[**update_bulk_data_exporter_config**](DataExporterConfigsApi.md#update_bulk_data_exporter_config) | **PUT** /api/data-exporter-configs/_bulk | Update a data exporter configs
[**update_data_exporter_config**](DataExporterConfigsApi.md#update_data_exporter_config) | **PUT** /api/data-exporter-configs/{dataExporterConfigId} | Update a data exporter config


# **create_bulk_data_exporter_configs**
> List[CreateBulkDataExporterConfigs200ResponseInner] create_bulk_data_exporter_configs(data_exporter_config=data_exporter_config)

Create a new data exporter configs

Create a new data exporter configs

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.create_bulk_data_exporter_configs200_response_inner import CreateBulkDataExporterConfigs200ResponseInner
from openapi_client.models.data_exporter_config import DataExporterConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    data_exporter_config = openapi_client.DataExporterConfig() # DataExporterConfig |  (optional)

    try:
        # Create a new data exporter configs
        api_response = api_instance.create_bulk_data_exporter_configs(data_exporter_config=data_exporter_config)
        print("The response of DataExporterConfigsApi->create_bulk_data_exporter_configs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->create_bulk_data_exporter_configs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_exporter_config** | [**DataExporterConfig**](DataExporterConfig.md)|  | [optional] 

### Return type

[**List[CreateBulkDataExporterConfigs200ResponseInner]**](CreateBulkDataExporterConfigs200ResponseInner.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/ndjson
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_data_exporter_config**
> DataExporterConfig create_data_exporter_config(data_exporter_config=data_exporter_config)

Create a new data exporter config

Create a new data exporter config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.data_exporter_config import DataExporterConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    data_exporter_config = openapi_client.DataExporterConfig() # DataExporterConfig |  (optional)

    try:
        # Create a new data exporter config
        api_response = api_instance.create_data_exporter_config(data_exporter_config=data_exporter_config)
        print("The response of DataExporterConfigsApi->create_data_exporter_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->create_data_exporter_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_exporter_config** | [**DataExporterConfig**](DataExporterConfig.md)|  | [optional] 

### Return type

[**DataExporterConfig**](DataExporterConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_exporter_template**
> DataExporterConfig data_exporter_template(type=type)

Get all data exporter configs

Get all data exporter configs

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.data_exporter_config import DataExporterConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    type = 'type_example' # str | The data exporter config type (optional)

    try:
        # Get all data exporter configs
        api_response = api_instance.data_exporter_template(type=type)
        print("The response of DataExporterConfigsApi->data_exporter_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->data_exporter_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| The data exporter config type | [optional] 

### Return type

[**DataExporterConfig**](DataExporterConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_data_exporter_config**
> Deleted delete_data_exporter_config(data_exporter_config_id)

Delete a data exporter config

Delete a data exporter config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.deleted import Deleted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    data_exporter_config_id = 'data_exporter_config_id_example' # str | The data exporter config id

    try:
        # Delete a data exporter config
        api_response = api_instance.delete_data_exporter_config(data_exporter_config_id)
        print("The response of DataExporterConfigsApi->delete_data_exporter_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->delete_data_exporter_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_exporter_config_id** | **str**| The data exporter config id | 

### Return type

[**Deleted**](Deleted.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deletebulk_data_exporter_config**
> List[DeletebulkDataExporterConfig200ResponseInner] deletebulk_data_exporter_config(patch_inner=patch_inner)

Delete a data exporter config

Delete a data exporter config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.deletebulk_data_exporter_config200_response_inner import DeletebulkDataExporterConfig200ResponseInner
from openapi_client.models.patch_inner import PatchInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Delete a data exporter config
        api_response = api_instance.deletebulk_data_exporter_config(patch_inner=patch_inner)
        print("The response of DataExporterConfigsApi->deletebulk_data_exporter_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->deletebulk_data_exporter_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**List[DeletebulkDataExporterConfig200ResponseInner]**](DeletebulkDataExporterConfig200ResponseInner.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/ndjson
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_all_data_exporters**
> List[DataExporterConfig] find_all_data_exporters()

Get all data exporter configs

Get all data exporter configs

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.data_exporter_config import DataExporterConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)

    try:
        # Get all data exporter configs
        api_response = api_instance.find_all_data_exporters()
        print("The response of DataExporterConfigsApi->find_all_data_exporters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->find_all_data_exporters: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DataExporterConfig]**](DataExporterConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_data_exporter_config_by_id**
> DataExporterConfig find_data_exporter_config_by_id(data_exporter_config_id)

Get a data exporter config

Get a data exporter config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.data_exporter_config import DataExporterConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    data_exporter_config_id = 'data_exporter_config_id_example' # str | The data exporter config id

    try:
        # Get a data exporter config
        api_response = api_instance.find_data_exporter_config_by_id(data_exporter_config_id)
        print("The response of DataExporterConfigsApi->find_data_exporter_config_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->find_data_exporter_config_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_exporter_config_id** | **str**| The data exporter config id | 

### Return type

[**DataExporterConfig**](DataExporterConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_bulk_data_exporter_config**
> List[UpdateBulkDataExporterConfig200ResponseInner] patch_bulk_data_exporter_config(patch_inner=patch_inner)

Update a data exporter configs with a diff

Update a data exporter configs with a diff

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.patch_inner import PatchInner
from openapi_client.models.update_bulk_data_exporter_config200_response_inner import UpdateBulkDataExporterConfig200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Update a data exporter configs with a diff
        api_response = api_instance.patch_bulk_data_exporter_config(patch_inner=patch_inner)
        print("The response of DataExporterConfigsApi->patch_bulk_data_exporter_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->patch_bulk_data_exporter_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**List[UpdateBulkDataExporterConfig200ResponseInner]**](UpdateBulkDataExporterConfig200ResponseInner.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/ndjson
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_data_exporter_config**
> DataExporterConfig patch_data_exporter_config(data_exporter_config_id, patch_inner=patch_inner)

Update a data exporter config with a diff

Update a data exporter config with a diff

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.data_exporter_config import DataExporterConfig
from openapi_client.models.patch_inner import PatchInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    data_exporter_config_id = 'data_exporter_config_id_example' # str | The data exporter config id
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Update a data exporter config with a diff
        api_response = api_instance.patch_data_exporter_config(data_exporter_config_id, patch_inner=patch_inner)
        print("The response of DataExporterConfigsApi->patch_data_exporter_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->patch_data_exporter_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_exporter_config_id** | **str**| The data exporter config id | 
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**DataExporterConfig**](DataExporterConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_bulk_data_exporter_config**
> List[UpdateBulkDataExporterConfig200ResponseInner] update_bulk_data_exporter_config(data_exporter_config=data_exporter_config)

Update a data exporter configs

Update a data exporter configs

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.data_exporter_config import DataExporterConfig
from openapi_client.models.update_bulk_data_exporter_config200_response_inner import UpdateBulkDataExporterConfig200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    data_exporter_config = openapi_client.DataExporterConfig() # DataExporterConfig |  (optional)

    try:
        # Update a data exporter configs
        api_response = api_instance.update_bulk_data_exporter_config(data_exporter_config=data_exporter_config)
        print("The response of DataExporterConfigsApi->update_bulk_data_exporter_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->update_bulk_data_exporter_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_exporter_config** | [**DataExporterConfig**](DataExporterConfig.md)|  | [optional] 

### Return type

[**List[UpdateBulkDataExporterConfig200ResponseInner]**](UpdateBulkDataExporterConfig200ResponseInner.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/ndjson
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_data_exporter_config**
> DataExporterConfig update_data_exporter_config(data_exporter_config_id, data_exporter_config=data_exporter_config)

Update a data exporter config

Update a data exporter config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.data_exporter_config import DataExporterConfig
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataExporterConfigsApi(api_client)
    data_exporter_config_id = 'data_exporter_config_id_example' # str | The data exporter config id
    data_exporter_config = openapi_client.DataExporterConfig() # DataExporterConfig |  (optional)

    try:
        # Update a data exporter config
        api_response = api_instance.update_data_exporter_config(data_exporter_config_id, data_exporter_config=data_exporter_config)
        print("The response of DataExporterConfigsApi->update_data_exporter_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataExporterConfigsApi->update_data_exporter_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_exporter_config_id** | **str**| The data exporter config id | 
 **data_exporter_config** | [**DataExporterConfig**](DataExporterConfig.md)|  | [optional] 

### Return type

[**DataExporterConfig**](DataExporterConfig.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

