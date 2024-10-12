# openapi_client.AttributeTraitApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attribute_trait_get**](AttributeTraitApi.md#attribute_trait_get) | **GET** /attributetraits/{name} | Retrieve an attribute trait.
[**attribute_trait_get_by_category**](AttributeTraitApi.md#attribute_trait_get_by_category) | **GET** /attributetraits | Retrieve all attribute traits of the specified category/categories.


# **attribute_trait_get**
> AttributeTrait attribute_trait_get(name, selected_fields=selected_fields)

Retrieve an attribute trait.

### Example


```python
import openapi_client
from openapi_client.models.attribute_trait import AttributeTrait
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttributeTraitApi(api_client)
    name = 'name_example' # str | The name or abbreviation of the attribute trait.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)

    try:
        # Retrieve an attribute trait.
        api_response = api_instance.attribute_trait_get(name, selected_fields=selected_fields)
        print("The response of AttributeTraitApi->attribute_trait_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeTraitApi->attribute_trait_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name or abbreviation of the attribute trait. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 

### Return type

[**AttributeTrait**](AttributeTrait.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested attribute trait. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_trait_get_by_category**
> ItemsAttributeTrait attribute_trait_get_by_category(category, selected_fields=selected_fields)

Retrieve all attribute traits of the specified category/categories.

### Example


```python
import openapi_client
from openapi_client.models.items_attribute_trait import ItemsAttributeTrait
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttributeTraitApi(api_client)
    category = ['category_example'] # List[str] | The category of the attribute traits. Multiple categories may be specified with multiple instances of the parameter. If the parameter is not specified, or if its value is \"all\", then all attribute traits of all categories will be returned.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)

    try:
        # Retrieve all attribute traits of the specified category/categories.
        api_response = api_instance.attribute_trait_get_by_category(category, selected_fields=selected_fields)
        print("The response of AttributeTraitApi->attribute_trait_get_by_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeTraitApi->attribute_trait_get_by_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | [**List[str]**](str.md)| The category of the attribute traits. Multiple categories may be specified with multiple instances of the parameter. If the parameter is not specified, or if its value is \&quot;all\&quot;, then all attribute traits of all categories will be returned. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 

### Return type

[**ItemsAttributeTrait**](ItemsAttributeTrait.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of attribute traits. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

