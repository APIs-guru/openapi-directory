# openapi_client.ConfigsApi

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_config**](ConfigsApi.md#create_config) | **POST** /keys/{key}/configs | Create
[**delete_config**](ConfigsApi.md#delete_config) | **DELETE** /keys/{key}/configs/{config} | Delete
[**list_configs**](ConfigsApi.md#list_configs) | **GET** /keys/{key}/configs | List
[**retrieve_config**](ConfigsApi.md#retrieve_config) | **GET** /keys/{key}/configs/{config} | Retrieve
[**update_config**](ConfigsApi.md#update_config) | **POST** /keys/{key}/configs/{config} | Update


# **create_config**
> ConfigResponse create_config(key, config_new_param, user_token=user_token)

Create

Create a config

### Example


```python
import openapi_client
from openapi_client.models.config_new_param import ConfigNewParam
from openapi_client.models.config_response import ConfigResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigsApi(api_client)
    key = 'key_example' # str | 
    config_new_param = openapi_client.ConfigNewParam() # ConfigNewParam | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # Create
        api_response = api_instance.create_config(key, config_new_param, user_token=user_token)
        print("The response of ConfigsApi->create_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigsApi->create_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **config_new_param** | [**ConfigNewParam**](ConfigNewParam.md)|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**ConfigResponse**](ConfigResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_config**
> ConfigDeleteResponse delete_config(key, config, user_token=user_token)

Delete

Permanently deletes a configuration object.

### Example


```python
import openapi_client
from openapi_client.models.config_delete_response import ConfigDeleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigsApi(api_client)
    key = 'key_example' # str | 
    config = 'config_example' # str | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # Delete
        api_response = api_instance.delete_config(key, config, user_token=user_token)
        print("The response of ConfigsApi->delete_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigsApi->delete_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **config** | **str**|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**ConfigDeleteResponse**](ConfigDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_configs**
> ConfigsResponse list_configs(key, user_token=user_token)

List

Lists configurations associated with a key

### Example


```python
import openapi_client
from openapi_client.models.configs_response import ConfigsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigsApi(api_client)
    key = 'key_example' # str | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # List
        api_response = api_instance.list_configs(key, user_token=user_token)
        print("The response of ConfigsApi->list_configs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigsApi->list_configs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**ConfigsResponse**](ConfigsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_config**
> ConfigResponse retrieve_config(key, config)

Retrieve

Retrieve config object by name

### Example


```python
import openapi_client
from openapi_client.models.config_response import ConfigResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigsApi(api_client)
    key = 'key_example' # str | 
    config = 'config_example' # str | 

    try:
        # Retrieve
        api_response = api_instance.retrieve_config(key, config)
        print("The response of ConfigsApi->retrieve_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigsApi->retrieve_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **config** | **str**|  | 

### Return type

[**ConfigResponse**](ConfigResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_config**
> ConfigResponse update_config(key, config, config_update_param, user_token=user_token)

Update

Updates configuration object

### Example


```python
import openapi_client
from openapi_client.models.config_response import ConfigResponse
from openapi_client.models.config_update_param import ConfigUpdateParam
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConfigsApi(api_client)
    key = 'key_example' # str | 
    config = 'config_example' # str | 
    config_update_param = openapi_client.ConfigUpdateParam() # ConfigUpdateParam | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # Update
        api_response = api_instance.update_config(key, config, config_update_param, user_token=user_token)
        print("The response of ConfigsApi->update_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigsApi->update_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **config** | **str**|  | 
 **config_update_param** | [**ConfigUpdateParam**](ConfigUpdateParam.md)|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**ConfigResponse**](ConfigResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

