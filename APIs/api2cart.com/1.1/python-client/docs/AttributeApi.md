# openapi_client.AttributeApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attribute_add**](AttributeApi.md#attribute_add) | **POST** /attribute.add.json | 
[**attribute_assign_group**](AttributeApi.md#attribute_assign_group) | **POST** /attribute.assign.group.json | 
[**attribute_assign_set**](AttributeApi.md#attribute_assign_set) | **POST** /attribute.assign.set.json | 
[**attribute_attributeset_list**](AttributeApi.md#attribute_attributeset_list) | **GET** /attribute.attributeset.list.json | 
[**attribute_count**](AttributeApi.md#attribute_count) | **GET** /attribute.count.json | 
[**attribute_delete**](AttributeApi.md#attribute_delete) | **DELETE** /attribute.delete.json | 
[**attribute_group_list**](AttributeApi.md#attribute_group_list) | **GET** /attribute.group.list.json | 
[**attribute_info**](AttributeApi.md#attribute_info) | **GET** /attribute.info.json | 
[**attribute_list**](AttributeApi.md#attribute_list) | **GET** /attribute.list.json | 
[**attribute_type_list**](AttributeApi.md#attribute_type_list) | **GET** /attribute.type.list.json | 
[**attribute_unassign_group**](AttributeApi.md#attribute_unassign_group) | **POST** /attribute.unassign.group.json | 
[**attribute_unassign_set**](AttributeApi.md#attribute_unassign_set) | **POST** /attribute.unassign.set.json | 
[**attribute_update**](AttributeApi.md#attribute_update) | **POST** /attribute.update.json | 


# **attribute_add**
> AttributeAdd200Response attribute_add(type, name, code=code, store_id=store_id, lang_id=lang_id, visible=visible, required=required, position=position, attribute_group_id=attribute_group_id, is_global=is_global, is_searchable=is_searchable, is_filterable=is_filterable, is_comparable=is_comparable, is_html_allowed_on_front=is_html_allowed_on_front, is_filterable_in_search=is_filterable_in_search, is_configurable=is_configurable, is_visible_in_advanced_search=is_visible_in_advanced_search, is_used_for_promo_rules=is_used_for_promo_rules, used_in_product_listing=used_in_product_listing, used_for_sort_by=used_for_sort_by, apply_to=apply_to)



Add new attribute

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_add200_response import AttributeAdd200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    type = 'type_example' # str | Defines attribute's type
    name = 'name_example' # str | Defines attributes's name
    code = 'code_example' # str | Entity code (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    visible = False # bool | Set visibility status (optional) (default to False)
    required = False # bool | Defines if the option is required (optional) (default to False)
    position = 0 # int | Attribute`s position (optional) (default to 0)
    attribute_group_id = 'attribute_group_id_example' # str | Filter by attribute_group_id (optional)
    is_global = 'Store' # str | Attribute saving scope (optional) (default to 'Store')
    is_searchable = False # bool | Use attribute in Quick Search (optional) (default to False)
    is_filterable = 'false' # str | Use In Layered Navigation (optional) (default to 'false')
    is_comparable = False # bool | Comparable on Front-end (optional) (default to False)
    is_html_allowed_on_front = False # bool | Allow HTML Tags on Frontend (optional) (default to False)
    is_filterable_in_search = False # bool | Use In Search Results Layered Navigation (optional) (default to False)
    is_configurable = False # bool | Use To Create Configurable Product (optional) (default to False)
    is_visible_in_advanced_search = False # bool | Use in Advanced Search (optional) (default to False)
    is_used_for_promo_rules = False # bool | Use for Promo Rule Conditions (optional) (default to False)
    used_in_product_listing = False # bool | Used in Product Listing (optional) (default to False)
    used_for_sort_by = False # bool | Used for Sorting in Product Listing (optional) (default to False)
    apply_to = 'all_types' # str | Types of products which can have this attribute (optional) (default to 'all_types')

    try:
        api_response = api_instance.attribute_add(type, name, code=code, store_id=store_id, lang_id=lang_id, visible=visible, required=required, position=position, attribute_group_id=attribute_group_id, is_global=is_global, is_searchable=is_searchable, is_filterable=is_filterable, is_comparable=is_comparable, is_html_allowed_on_front=is_html_allowed_on_front, is_filterable_in_search=is_filterable_in_search, is_configurable=is_configurable, is_visible_in_advanced_search=is_visible_in_advanced_search, is_used_for_promo_rules=is_used_for_promo_rules, used_in_product_listing=used_in_product_listing, used_for_sort_by=used_for_sort_by, apply_to=apply_to)
        print("The response of AttributeApi->attribute_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Defines attribute&#39;s type | 
 **name** | **str**| Defines attributes&#39;s name | 
 **code** | **str**| Entity code | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **visible** | **bool**| Set visibility status | [optional] [default to False]
 **required** | **bool**| Defines if the option is required | [optional] [default to False]
 **position** | **int**| Attribute&#x60;s position | [optional] [default to 0]
 **attribute_group_id** | **str**| Filter by attribute_group_id | [optional] 
 **is_global** | **str**| Attribute saving scope | [optional] [default to &#39;Store&#39;]
 **is_searchable** | **bool**| Use attribute in Quick Search | [optional] [default to False]
 **is_filterable** | **str**| Use In Layered Navigation | [optional] [default to &#39;false&#39;]
 **is_comparable** | **bool**| Comparable on Front-end | [optional] [default to False]
 **is_html_allowed_on_front** | **bool**| Allow HTML Tags on Frontend | [optional] [default to False]
 **is_filterable_in_search** | **bool**| Use In Search Results Layered Navigation | [optional] [default to False]
 **is_configurable** | **bool**| Use To Create Configurable Product | [optional] [default to False]
 **is_visible_in_advanced_search** | **bool**| Use in Advanced Search | [optional] [default to False]
 **is_used_for_promo_rules** | **bool**| Use for Promo Rule Conditions | [optional] [default to False]
 **used_in_product_listing** | **bool**| Used in Product Listing | [optional] [default to False]
 **used_for_sort_by** | **bool**| Used for Sorting in Product Listing | [optional] [default to False]
 **apply_to** | **str**| Types of products which can have this attribute | [optional] [default to &#39;all_types&#39;]

### Return type

[**AttributeAdd200Response**](AttributeAdd200Response.md)

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

# **attribute_assign_group**
> AttributeAssignGroup200Response attribute_assign_group(id, group_id, attribute_set_id=attribute_set_id)



Assign attribute to the group

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_assign_group200_response import AttributeAssignGroup200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    id = 'id_example' # str | Entity id
    group_id = 'group_id_example' # str | Attribute group_id
    attribute_set_id = 'attribute_set_id_example' # str | Attribute set id (optional)

    try:
        api_response = api_instance.attribute_assign_group(id, group_id, attribute_set_id=attribute_set_id)
        print("The response of AttributeApi->attribute_assign_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_assign_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **group_id** | **str**| Attribute group_id | 
 **attribute_set_id** | **str**| Attribute set id | [optional] 

### Return type

[**AttributeAssignGroup200Response**](AttributeAssignGroup200Response.md)

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

# **attribute_assign_set**
> AttributeAssignGroup200Response attribute_assign_set(id, attribute_set_id, group_id=group_id)



Assign attribute to the attribute set

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_assign_group200_response import AttributeAssignGroup200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    id = 'id_example' # str | Entity id
    attribute_set_id = 'attribute_set_id_example' # str | Attribute set id
    group_id = 'group_id_example' # str | Attribute group_id (optional)

    try:
        api_response = api_instance.attribute_assign_set(id, attribute_set_id, group_id=group_id)
        print("The response of AttributeApi->attribute_assign_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_assign_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **attribute_set_id** | **str**| Attribute set id | 
 **group_id** | **str**| Attribute group_id | [optional] 

### Return type

[**AttributeAssignGroup200Response**](AttributeAssignGroup200Response.md)

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

# **attribute_attributeset_list**
> AttributeAttributesetList200Response attribute_attributeset_list(start=start, count=count, params=params, exclude=exclude, response_fields=response_fields)



Get attribute_set list

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_attributeset_list200_response import AttributeAttributesetList200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    params = 'id,name' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)

    try:
        api_response = api_instance.attribute_attributeset_list(start=start, count=count, params=params, exclude=exclude, response_fields=response_fields)
        print("The response of AttributeApi->attribute_attributeset_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_attributeset_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**AttributeAttributesetList200Response**](AttributeAttributesetList200Response.md)

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

# **attribute_count**
> AttributeCount200Response attribute_count(type=type, store_id=store_id, lang_id=lang_id, visible=visible, required=required, system=system)



Get attributes count

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_count200_response import AttributeCount200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    type = 'type_example' # str | Defines attribute's type (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    visible = True # bool | Filter items by visibility status (optional)
    required = True # bool | Defines if the option is required (optional)
    system = True # bool | True if attribute is system (optional)

    try:
        api_response = api_instance.attribute_count(type=type, store_id=store_id, lang_id=lang_id, visible=visible, required=required, system=system)
        print("The response of AttributeApi->attribute_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Defines attribute&#39;s type | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **visible** | **bool**| Filter items by visibility status | [optional] 
 **required** | **bool**| Defines if the option is required | [optional] 
 **system** | **bool**| True if attribute is system | [optional] 

### Return type

[**AttributeCount200Response**](AttributeCount200Response.md)

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

# **attribute_delete**
> AttributeDelete200Response attribute_delete(id, store_id=store_id)



Delete attribute from store

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_delete200_response import AttributeDelete200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    id = 'id_example' # str | Entity id
    store_id = 'store_id_example' # str | Store Id (optional)

    try:
        api_response = api_instance.attribute_delete(id, store_id=store_id)
        print("The response of AttributeApi->attribute_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **store_id** | **str**| Store Id | [optional] 

### Return type

[**AttributeDelete200Response**](AttributeDelete200Response.md)

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

# **attribute_group_list**
> AttributeAttributesetList200Response attribute_group_list(start=start, count=count, lang_id=lang_id, params=params, exclude=exclude, response_fields=response_fields, attribute_set_id=attribute_set_id)



Get attribute group list

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_attributeset_list200_response import AttributeAttributesetList200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    lang_id = 'lang_id_example' # str | Language id (optional)
    params = 'id,name' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    attribute_set_id = 'attribute_set_id_example' # str | Attribute set id (optional)

    try:
        api_response = api_instance.attribute_group_list(start=start, count=count, lang_id=lang_id, params=params, exclude=exclude, response_fields=response_fields, attribute_set_id=attribute_set_id)
        print("The response of AttributeApi->attribute_group_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_group_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **lang_id** | **str**| Language id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **attribute_set_id** | **str**| Attribute set id | [optional] 

### Return type

[**AttributeAttributesetList200Response**](AttributeAttributesetList200Response.md)

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

# **attribute_info**
> AttributeInfo200Response attribute_info(id, store_id=store_id, lang_id=lang_id, params=params, exclude=exclude, response_fields=response_fields)



Get attribute info

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_info200_response import AttributeInfo200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    id = 'id_example' # str | Entity id
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    params = 'force_all' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'force_all')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)

    try:
        api_response = api_instance.attribute_info(id, store_id=store_id, lang_id=lang_id, params=params, exclude=exclude, response_fields=response_fields)
        print("The response of AttributeApi->attribute_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;force_all&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 

### Return type

[**AttributeInfo200Response**](AttributeInfo200Response.md)

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

# **attribute_list**
> ModelResponseAttributeList attribute_list(start=start, count=count, type=type, attribute_ids=attribute_ids, store_id=store_id, lang_id=lang_id, params=params, exclude=exclude, response_fields=response_fields, visible=visible, required=required, system=system)



Get attributes list

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.model_response_attribute_list import ModelResponseAttributeList
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
    api_instance = openapi_client.AttributeApi(api_client)
    start = 0 # int | This parameter sets the number from which you want to get entities (optional) (default to 0)
    count = 10 # int | This parameter sets the entity amount that has to be retrieved. Max allowed count=250 (optional) (default to 10)
    type = 'type_example' # str | Defines attribute's type (optional)
    attribute_ids = 'attribute_ids_example' # str | Filter attributes by ids (optional)
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Retrieves attributes on specified language id (optional)
    params = 'id,name,code,type' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'id,name,code,type')
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    visible = True # bool | Filter items by visibility status (optional)
    required = True # bool | Defines if the option is required (optional)
    system = True # bool | True if attribute is system (optional)

    try:
        api_response = api_instance.attribute_list(start=start, count=count, type=type, attribute_ids=attribute_ids, store_id=store_id, lang_id=lang_id, params=params, exclude=exclude, response_fields=response_fields, visible=visible, required=required, system=system)
        print("The response of AttributeApi->attribute_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int**| This parameter sets the number from which you want to get entities | [optional] [default to 0]
 **count** | **int**| This parameter sets the entity amount that has to be retrieved. Max allowed count&#x3D;250 | [optional] [default to 10]
 **type** | **str**| Defines attribute&#39;s type | [optional] 
 **attribute_ids** | **str**| Filter attributes by ids | [optional] 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Retrieves attributes on specified language id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;id,name,code,type&#39;]
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **visible** | **bool**| Filter items by visibility status | [optional] 
 **required** | **bool**| Defines if the option is required | [optional] 
 **system** | **bool**| True if attribute is system | [optional] 

### Return type

[**ModelResponseAttributeList**](ModelResponseAttributeList.md)

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

# **attribute_type_list**
> AttributeTypeList200Response attribute_type_list()



Get list of supported attributes types

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_type_list200_response import AttributeTypeList200Response
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
    api_instance = openapi_client.AttributeApi(api_client)

    try:
        api_response = api_instance.attribute_type_list()
        print("The response of AttributeApi->attribute_type_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_type_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AttributeTypeList200Response**](AttributeTypeList200Response.md)

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

# **attribute_unassign_group**
> AttributeUnassignGroup200Response attribute_unassign_group(id, group_id)



Unassign attribute from group

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_unassign_group200_response import AttributeUnassignGroup200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    id = 'id_example' # str | Entity id
    group_id = 'group_id_example' # str | Customer group_id

    try:
        api_response = api_instance.attribute_unassign_group(id, group_id)
        print("The response of AttributeApi->attribute_unassign_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_unassign_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **group_id** | **str**| Customer group_id | 

### Return type

[**AttributeUnassignGroup200Response**](AttributeUnassignGroup200Response.md)

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

# **attribute_unassign_set**
> AttributeUnassignGroup200Response attribute_unassign_set(id, attribute_set_id)



Unassign attribute from attribute set

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_unassign_group200_response import AttributeUnassignGroup200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    id = 'id_example' # str | Entity id
    attribute_set_id = 'attribute_set_id_example' # str | Attribute set id

    try:
        api_response = api_instance.attribute_unassign_set(id, attribute_set_id)
        print("The response of AttributeApi->attribute_unassign_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_unassign_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **attribute_set_id** | **str**| Attribute set id | 

### Return type

[**AttributeUnassignGroup200Response**](AttributeUnassignGroup200Response.md)

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

# **attribute_update**
> AttributeUpdate200Response attribute_update(id, name, store_id=store_id, lang_id=lang_id)



Update attribute data

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.attribute_update200_response import AttributeUpdate200Response
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
    api_instance = openapi_client.AttributeApi(api_client)
    id = 'id_example' # str | Entity id
    name = 'name_example' # str | Defines new attributes's name
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)

    try:
        api_response = api_instance.attribute_update(id, name, store_id=store_id, lang_id=lang_id)
        print("The response of AttributeApi->attribute_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Entity id | 
 **name** | **str**| Defines new attributes&#39;s name | 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 

### Return type

[**AttributeUpdate200Response**](AttributeUpdate200Response.md)

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

