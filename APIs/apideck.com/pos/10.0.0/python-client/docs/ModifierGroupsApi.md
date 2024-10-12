# openapi_client.ModifierGroupsApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**modifier_groups_add**](ModifierGroupsApi.md#modifier_groups_add) | **POST** /pos/modifier-groups | Create Modifier Group
[**modifier_groups_all**](ModifierGroupsApi.md#modifier_groups_all) | **GET** /pos/modifier-groups | List Modifier Groups
[**modifier_groups_delete**](ModifierGroupsApi.md#modifier_groups_delete) | **DELETE** /pos/modifier-groups/{id} | Delete Modifier Group
[**modifier_groups_one**](ModifierGroupsApi.md#modifier_groups_one) | **GET** /pos/modifier-groups/{id} | Get Modifier Group
[**modifier_groups_update**](ModifierGroupsApi.md#modifier_groups_update) | **PATCH** /pos/modifier-groups/{id} | Update Modifier Group


# **modifier_groups_add**
> CreateModifierGroupResponse modifier_groups_add(x_apideck_consumer_id, x_apideck_app_id, modifier_group, raw=raw, x_apideck_service_id=x_apideck_service_id)

Create Modifier Group

Create Modifier Group

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.create_modifier_group_response import CreateModifierGroupResponse
from openapi_client.models.modifier_group import ModifierGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModifierGroupsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    modifier_group = openapi_client.ModifierGroup() # ModifierGroup | 
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)

    try:
        # Create Modifier Group
        api_response = api_instance.modifier_groups_add(x_apideck_consumer_id, x_apideck_app_id, modifier_group, raw=raw, x_apideck_service_id=x_apideck_service_id)
        print("The response of ModifierGroupsApi->modifier_groups_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModifierGroupsApi->modifier_groups_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **modifier_group** | [**ModifierGroup**](ModifierGroup.md)|  | 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 

### Return type

[**CreateModifierGroupResponse**](CreateModifierGroupResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ModifierGroups |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifier_groups_all**
> GetModifierGroupsResponse modifier_groups_all(x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, cursor=cursor, limit=limit, fields=fields)

List Modifier Groups

List Modifier Groups

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_modifier_groups_response import GetModifierGroupsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModifierGroupsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 20 # int | Number of results to return. Minimum 1, Maximum 200, Default 20 (optional) (default to 20)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # List Modifier Groups
        api_response = api_instance.modifier_groups_all(x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, cursor=cursor, limit=limit, fields=fields)
        print("The response of ModifierGroupsApi->modifier_groups_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModifierGroupsApi->modifier_groups_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of results to return. Minimum 1, Maximum 200, Default 20 | [optional] [default to 20]
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetModifierGroupsResponse**](GetModifierGroupsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ModifierGroups |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifier_groups_delete**
> DeleteModifierGroupResponse modifier_groups_delete(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw)

Delete Modifier Group

Delete Modifier Group

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.delete_modifier_group_response import DeleteModifierGroupResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModifierGroupsApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)

    try:
        # Delete Modifier Group
        api_response = api_instance.modifier_groups_delete(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw)
        print("The response of ModifierGroupsApi->modifier_groups_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModifierGroupsApi->modifier_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]

### Return type

[**DeleteModifierGroupResponse**](DeleteModifierGroupResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ModifierGroups |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifier_groups_one**
> GetModifierGroupResponse modifier_groups_one(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw, fields=fields)

Get Modifier Group

Get Modifier Group

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_modifier_group_response import GetModifierGroupResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModifierGroupsApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # Get Modifier Group
        api_response = api_instance.modifier_groups_one(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw, fields=fields)
        print("The response of ModifierGroupsApi->modifier_groups_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModifierGroupsApi->modifier_groups_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetModifierGroupResponse**](GetModifierGroupResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ModifierGroups |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modifier_groups_update**
> UpdateModifierGroupResponse modifier_groups_update(id, x_apideck_consumer_id, x_apideck_app_id, modifier_group, x_apideck_service_id=x_apideck_service_id, raw=raw)

Update Modifier Group

Update Modifier Group

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.modifier_group import ModifierGroup
from openapi_client.models.update_modifier_group_response import UpdateModifierGroupResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModifierGroupsApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    modifier_group = openapi_client.ModifierGroup() # ModifierGroup | 
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)

    try:
        # Update Modifier Group
        api_response = api_instance.modifier_groups_update(id, x_apideck_consumer_id, x_apideck_app_id, modifier_group, x_apideck_service_id=x_apideck_service_id, raw=raw)
        print("The response of ModifierGroupsApi->modifier_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModifierGroupsApi->modifier_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **modifier_group** | [**ModifierGroup**](ModifierGroup.md)|  | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]

### Return type

[**UpdateModifierGroupResponse**](UpdateModifierGroupResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ModifierGroups |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

