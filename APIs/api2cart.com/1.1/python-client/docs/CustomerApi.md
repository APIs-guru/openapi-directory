# openapi_client.CustomerApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customer_add**](CustomerApi.md#customer_add) | **POST** /customer.add.json | 
[**customer_attribute_list**](CustomerApi.md#customer_attribute_list) | **GET** /customer.attribute.list.json | 
[**customer_count**](CustomerApi.md#customer_count) | **GET** /customer.count.json | 
[**customer_find**](CustomerApi.md#customer_find) | **GET** /customer.find.json | 
[**customer_group_add**](CustomerApi.md#customer_group_add) | **POST** /customer.group.add.json | 
[**customer_group_list**](CustomerApi.md#customer_group_list) | **GET** /customer.group.list.json | 
[**customer_info**](CustomerApi.md#customer_info) | **GET** /customer.info.json | 
[**customer_list**](CustomerApi.md#customer_list) | **GET** /customer.list.json | 
[**customer_update**](CustomerApi.md#customer_update) | **PUT** /customer.update.json | 
[**customer_wishlist_list**](CustomerApi.md#customer_wishlist_list) | **GET** /customer.wishlist.list.json | 


# **customer_add**
> CustomerAdd200Response customer_add(customer_add)



Add customer into store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.customer_add import CustomerAdd
from openapi_client.models.customer_add200_response import CustomerAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    customer_add = openapi_client.CustomerAdd() # CustomerAdd | 

    try:
        api_response = api_instance.customer_add(customer_add)
        print("The response of CustomerApi->customer_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_add** | [**CustomerAdd**](CustomerAdd.md)|  | 

### Return type

[**CustomerAdd200Response**](CustomerAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_attribute_list**
> ModelResponseCustomerAttributeList customer_attribute_list(customer_id, count=count, page_cursor=page_cursor, store_id=store_id, lang_id=lang_id, params=params, exclude=exclude, response_fields=response_fields)



Get attributes for specific customer

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_customer_attribute_list import ModelResponseCustomerAttributeList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    customer_id = 'customer_id_example' # str | Retrieves orders specified by customer id
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    params = 'force_all' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'force_all')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)

    try:
        api_response = api_instance.customer_attribute_list(customer_id, count=count, page_cursor=page_cursor, store_id=store_id, lang_id=lang_id, params=params, exclude=exclude, response_fields=response_fields)
        print("The response of CustomerApi->customer_attribute_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_attribute_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Retrieves orders specified by customer id | 
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**ModelResponseCustomerAttributeList**](ModelResponseCustomerAttributeList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_count**
> CustomerCount200Response customer_count(group_id=group_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, store_id=store_id, customer_list_id=customer_list_id, avail=avail)



Get number of customers from store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.customer_count200_response import CustomerCount200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    group_id = 'group_id_example' # str | Customer group_id (optional)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    store_id = 'store_id_example' # str | Counts customer specified by store id (optional)
    customer_list_id = 'customer_list_id_example' # str | The numeric ID of the customer list in Demandware. (optional)
    avail = True # bool | Defines category's visibility status (optional) (default to True)

    try:
        api_response = api_instance.customer_count(group_id=group_id, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, store_id=store_id, customer_list_id=customer_list_id, avail=avail)
        print("The response of CustomerApi->customer_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| Customer group_id | [optional] 
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **store_id** | **str**| Counts customer specified by store id | [optional] 
 **customer_list_id** | **str**| The numeric ID of the customer list in Demandware. | [optional] 
 **avail** | **bool**| Defines category&#39;s visibility status | [optional] [default to True]

### Return type

[**CustomerCount200Response**](CustomerCount200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_find**
> CustomerFind200Response customer_find(find_value, find_where=find_where, find_params=find_params, store_id=store_id)



Find customers in store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.customer_find200_response import CustomerFind200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    find_value = 'find_value_example' # str | Entity search that is specified by some value
    find_where = 'email' # str | Entity search that is specified by the comma-separated unique fields (optional) (default to 'email')
    find_params = 'whole_words' # str | Entity search that is specified by comma-separated parameters (optional) (default to 'whole_words')
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.customer_find(find_value, find_where=find_where, find_params=find_params, store_id=store_id)
        print("The response of CustomerApi->customer_find:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_find: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find_value** | **str**| Entity search that is specified by some value | 
 **find_where** | **str**| Entity search that is specified by the comma-separated unique fields | [optional] [default to &#39;email&#39;]
 **find_params** | **str**| Entity search that is specified by comma-separated parameters | [optional] [default to &#39;whole_words&#39;]
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**CustomerFind200Response**](CustomerFind200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_group_add**
> CustomerGroupAdd200Response customer_group_add(name, store_id=store_id, stores_ids=stores_ids)



Create customer group.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.customer_group_add200_response import CustomerGroupAdd200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    name = 'name_example' # str | Customer group name
    store_id = 'store_id_example' # str | Store Id (optional)
    stores_ids = 'stores_ids_example' # str | Assign customer group to the stores that is specified by comma-separated stores' id (optional)

    try:
        api_response = api_instance.customer_group_add(name, store_id=store_id, stores_ids=stores_ids)
        print("The response of CustomerApi->customer_group_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_group_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Customer group name | 
 **store_id** | **str**| Store Id | [optional] 
 **stores_ids** | **str**| Assign customer group to the stores that is specified by comma-separated stores&#39; id | [optional] 

### Return type

[**CustomerGroupAdd200Response**](CustomerGroupAdd200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_group_list**
> ModelResponseCustomerGroupList customer_group_list(page_cursor=page_cursor, start=start, count=count, store_id=store_id, lang_id=lang_id, group_ids=group_ids, params=params, exclude=exclude, response_fields=response_fields)



Get list of customers groups.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_customer_group_list import ModelResponseCustomerGroupList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    group_ids = 'group_ids_example' # str | Groups that will be assigned to a customer (optional)
    params = 'id,name,additional_fields' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,additional_fields')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)

    try:
        api_response = api_instance.customer_group_list(page_cursor=page_cursor, start=start, count=count, store_id=store_id, lang_id=lang_id, group_ids=group_ids, params=params, exclude=exclude, response_fields=response_fields)
        print("The response of CustomerApi->customer_group_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_group_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **group_ids** | **str**| Groups that will be assigned to a customer | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,additional_fields&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**ModelResponseCustomerGroupList**](ModelResponseCustomerGroupList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_info**
> CustomerInfo200Response customer_info(id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id)



Get customers' details from store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.customer_info200_response import CustomerInfo200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    id = 'id_example' # str | Retrieves customer's info specified by customer id
    params = 'id,email,first_name,last_name' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,email,first_name,last_name')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    store_id = 'store_id_example' # str | Retrieves customer info specified by store id (optional)

    try:
        api_response = api_instance.customer_info(id, params=params, response_fields=response_fields, exclude=exclude, store_id=store_id)
        print("The response of CustomerApi->customer_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Retrieves customer&#39;s info specified by customer id | 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,email,first_name,last_name&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **store_id** | **str**| Retrieves customer info specified by store id | [optional] 

### Return type

[**CustomerInfo200Response**](CustomerInfo200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_list**
> ModelResponseCustomerList customer_list(page_cursor=page_cursor, start=start, count=count, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, params=params, response_fields=response_fields, exclude=exclude, group_id=group_id, store_id=store_id, customer_list_id=customer_list_id, avail=avail)



Get list of customers from store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_customer_list import ModelResponseCustomerList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    created_from = 'created_from_example' # str | Retrieve entities from their creation date (optional)
    created_to = 'created_to_example' # str | Retrieve entities to their creation date (optional)
    modified_from = 'modified_from_example' # str | Retrieve entities from their modification date (optional)
    modified_to = 'modified_to_example' # str | Retrieve entities to their modification date (optional)
    params = 'id,email,first_name,last_name' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,email,first_name,last_name')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    group_id = 'group_id_example' # str | Customer group_id (optional)
    store_id = 'store_id_example' # str | Retrieves customers specified by store id (optional)
    customer_list_id = 'customer_list_id_example' # str | The numeric ID of the customer list in Demandware. (optional)
    avail = True # bool | Defines category's visibility status (optional) (default to True)

    try:
        api_response = api_instance.customer_list(page_cursor=page_cursor, start=start, count=count, created_from=created_from, created_to=created_to, modified_from=modified_from, modified_to=modified_to, params=params, response_fields=response_fields, exclude=exclude, group_id=group_id, store_id=store_id, customer_list_id=customer_list_id, avail=avail)
        print("The response of CustomerApi->customer_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **created_from** | **str**| Retrieve entities from their creation date | [optional] 
 **created_to** | **str**| Retrieve entities to their creation date | [optional] 
 **modified_from** | **str**| Retrieve entities from their modification date | [optional] 
 **modified_to** | **str**| Retrieve entities to their modification date | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,email,first_name,last_name&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **group_id** | **str**| Customer group_id | [optional] 
 **store_id** | **str**| Retrieves customers specified by store id | [optional] 
 **customer_list_id** | **str**| The numeric ID of the customer list in Demandware. | [optional] 
 **avail** | **bool**| Defines category&#39;s visibility status | [optional] [default to True]

### Return type

[**ModelResponseCustomerList**](ModelResponseCustomerList.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_update**
> CustomerUpdate200Response customer_update(customer_update)



Update information of customer in store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.customer_update import CustomerUpdate
from openapi_client.models.customer_update200_response import CustomerUpdate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    customer_update = openapi_client.CustomerUpdate() # CustomerUpdate | 

    try:
        api_response = api_instance.customer_update(customer_update)
        print("The response of CustomerApi->customer_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_update** | [**CustomerUpdate**](CustomerUpdate.md)|  | 

### Return type

[**CustomerUpdate200Response**](CustomerUpdate200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_wishlist_list**
> CustomerWishlistList200Response customer_wishlist_list(customer_id, id=id, store_id=store_id, start=start, count=count, page_cursor=page_cursor, response_fields=response_fields)



Get a Wish List of customer from the store.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.customer_wishlist_list200_response import CustomerWishlistList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomerApi(api_client)
    customer_id = 'customer_id_example' # str | Retrieves orders specified by customer id
    id = 'id_example' # str | Entity id (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    page_cursor = 'page_cursor_example' # str | Used to retrieve entities via cursor-based pagination (it can't be used with any other filtering parameter) (optional)
    response_fields = '{return_code,return_message,pagination,result}' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to '{return_code,return_message,pagination,result}')

    try:
        api_response = api_instance.customer_wishlist_list(customer_id, id=id, store_id=store_id, start=start, count=count, page_cursor=page_cursor, response_fields=response_fields)
        print("The response of CustomerApi->customer_wishlist_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerApi->customer_wishlist_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer_id** | **str**| Retrieves orders specified by customer id | 
 **id** | **str**| Entity id | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **page_cursor** | **str**| Used to retrieve entities via cursor-based pagination (it can&#39;t be used with any other filtering parameter) | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;{return_code,return_message,pagination,result}&#39;]

### Return type

[**CustomerWishlistList200Response**](CustomerWishlistList200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

