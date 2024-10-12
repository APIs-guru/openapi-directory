# openapi_client.ReferenceEntityAttributeOptionApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_reference_entity_attributes_attribute_code_options**](ReferenceEntityAttributeOptionApi.md#get_reference_entity_attributes_attribute_code_options) | **GET** /api/rest/v1/reference-entities/{reference_entity_code}/attributes/{attribute_code}/options | Get a list of attribute options of a given attribute for a given reference entity
[**get_reference_entity_attributes_attribute_code_options_code**](ReferenceEntityAttributeOptionApi.md#get_reference_entity_attributes_attribute_code_options_code) | **GET** /api/rest/v1/reference-entities/{reference_entity_code}/attributes/{attribute_code}/options/{code} | Get an attribute option for a given attribute of a given reference entity
[**patch_reference_entity_attributes_attribute_code_options_code**](ReferenceEntityAttributeOptionApi.md#patch_reference_entity_attributes_attribute_code_options_code) | **PATCH** /api/rest/v1/reference-entities/{reference_entity_code}/attributes/{attribute_code}/options/{code} | Update/create a reference entity attribute option


# **get_reference_entity_attributes_attribute_code_options**
> List[GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner] get_reference_entity_attributes_attribute_code_options(reference_entity_code, attribute_code)

Get a list of attribute options of a given attribute for a given reference entity

This endpoint allows you to get a list of attribute options for a given reference entity.

### Example


```python
import openapi_client
from openapi_client.models.get_reference_entity_attributes_attribute_code_options200_response_inner import GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceEntityAttributeOptionApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    attribute_code = 'attribute_code_example' # str | Code of the attribute

    try:
        # Get a list of attribute options of a given attribute for a given reference entity
        api_response = api_instance.get_reference_entity_attributes_attribute_code_options(reference_entity_code, attribute_code)
        print("The response of ReferenceEntityAttributeOptionApi->get_reference_entity_attributes_attribute_code_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityAttributeOptionApi->get_reference_entity_attributes_attribute_code_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **attribute_code** | **str**| Code of the attribute | 

### Return type

[**List[GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner]**](GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the options of the given attributes of the given reference entity |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_reference_entity_attributes_attribute_code_options_code**
> GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner get_reference_entity_attributes_attribute_code_options_code(reference_entity_code, attribute_code, code)

Get an attribute option for a given attribute of a given reference entity

This endpoint allows you to get the information about a given attribute option.

### Example


```python
import openapi_client
from openapi_client.models.get_reference_entity_attributes_attribute_code_options200_response_inner import GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceEntityAttributeOptionApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    code = 'code_example' # str | Code of the resource

    try:
        # Get an attribute option for a given attribute of a given reference entity
        api_response = api_instance.get_reference_entity_attributes_attribute_code_options_code(reference_entity_code, attribute_code, code)
        print("The response of ReferenceEntityAttributeOptionApi->get_reference_entity_attributes_attribute_code_options_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityAttributeOptionApi->get_reference_entity_attributes_attribute_code_options_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **attribute_code** | **str**| Code of the attribute | 
 **code** | **str**| Code of the resource | 

### Return type

[**GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner**](GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**404** | Resource not found |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_reference_entity_attributes_attribute_code_options_code**
> patch_reference_entity_attributes_attribute_code_options_code(reference_entity_code, attribute_code, code, body)

Update/create a reference entity attribute option

This endpoint allows you to update a given option for a given attribute and a given reference entity. Learn more about <a href=\"/documentation/update.html#patch-reference-entity-record-values\">Update behavior</a>. Note that if the option does not already exist for the given attribute of the given reference entity, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.get_reference_entity_attributes_attribute_code_options200_response_inner import GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReferenceEntityAttributeOptionApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    attribute_code = 'attribute_code_example' # str | Code of the attribute
    code = 'code_example' # str | Code of the resource
    body = openapi_client.GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner() # GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner | 

    try:
        # Update/create a reference entity attribute option
        api_instance.patch_reference_entity_attributes_attribute_code_options_code(reference_entity_code, attribute_code, code, body)
    except Exception as e:
        print("Exception when calling ReferenceEntityAttributeOptionApi->patch_reference_entity_attributes_attribute_code_options_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **attribute_code** | **str**| Code of the attribute | 
 **code** | **str**| Code of the resource | 
 **body** | [**GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner**](GetReferenceEntityAttributesAttributeCodeOptions200ResponseInner.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - URI of the created resource <br>  |
**204** | No content to return |  * Location - URI of the created resource <br>  |
**401** | Authentication required |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

