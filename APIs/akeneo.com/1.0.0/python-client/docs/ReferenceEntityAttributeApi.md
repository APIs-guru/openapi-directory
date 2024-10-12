# openapi_client.ReferenceEntityAttributeApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_reference_entities_code_attributes**](ReferenceEntityAttributeApi.md#get_reference_entities_code_attributes) | **GET** /api/rest/v1/reference-entities/{reference_entity_code}/attributes | Get the list of attributes of a given reference entity
[**get_reference_entity_attributes_code**](ReferenceEntityAttributeApi.md#get_reference_entity_attributes_code) | **GET** /api/rest/v1/reference-entities/{reference_entity_code}/attributes/{code} | Get an attribute of a given reference entity
[**patch_reference_entity_attributes_code**](ReferenceEntityAttributeApi.md#patch_reference_entity_attributes_code) | **PATCH** /api/rest/v1/reference-entities/{reference_entity_code}/attributes/{code} | Update/create an attribute of a given reference entity


# **get_reference_entities_code_attributes**
> List[GetReferenceEntitiesCodeAttributes200ResponseInner] get_reference_entities_code_attributes(reference_entity_code)

Get the list of attributes of a given reference entity

This endpoint allows you to get the list of attributes of a given reference entity.

### Example


```python
import openapi_client
from openapi_client.models.get_reference_entities_code_attributes200_response_inner import GetReferenceEntitiesCodeAttributes200ResponseInner
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
    api_instance = openapi_client.ReferenceEntityAttributeApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity

    try:
        # Get the list of attributes of a given reference entity
        api_response = api_instance.get_reference_entities_code_attributes(reference_entity_code)
        print("The response of ReferenceEntityAttributeApi->get_reference_entities_code_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityAttributeApi->get_reference_entities_code_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 

### Return type

[**List[GetReferenceEntitiesCodeAttributes200ResponseInner]**](GetReferenceEntitiesCodeAttributes200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the attributes of the given reference entity |  -  |
**401** | Authentication required |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_reference_entity_attributes_code**
> GetReferenceEntitiesCodeAttributes200ResponseInner get_reference_entity_attributes_code(reference_entity_code, code)

Get an attribute of a given reference entity

This endpoint allows you to get the information about a given attribute for a given reference entity.

### Example


```python
import openapi_client
from openapi_client.models.get_reference_entities_code_attributes200_response_inner import GetReferenceEntitiesCodeAttributes200ResponseInner
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
    api_instance = openapi_client.ReferenceEntityAttributeApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    code = 'code_example' # str | Code of the resource

    try:
        # Get an attribute of a given reference entity
        api_response = api_instance.get_reference_entity_attributes_code(reference_entity_code, code)
        print("The response of ReferenceEntityAttributeApi->get_reference_entity_attributes_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReferenceEntityAttributeApi->get_reference_entity_attributes_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **code** | **str**| Code of the resource | 

### Return type

[**GetReferenceEntitiesCodeAttributes200ResponseInner**](GetReferenceEntitiesCodeAttributes200ResponseInner.md)

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

# **patch_reference_entity_attributes_code**
> patch_reference_entity_attributes_code(reference_entity_code, code, body)

Update/create an attribute of a given reference entity

This endpoint allows you to update a given attribute for a given renference entity. Note that if the attribute does not already exist for the given reference entity, it creates it.

### Example


```python
import openapi_client
from openapi_client.models.get_reference_entities_code_attributes200_response_inner import GetReferenceEntitiesCodeAttributes200ResponseInner
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
    api_instance = openapi_client.ReferenceEntityAttributeApi(api_client)
    reference_entity_code = 'reference_entity_code_example' # str | Code of the reference entity
    code = 'code_example' # str | Code of the resource
    body = openapi_client.GetReferenceEntitiesCodeAttributes200ResponseInner() # GetReferenceEntitiesCodeAttributes200ResponseInner | 

    try:
        # Update/create an attribute of a given reference entity
        api_instance.patch_reference_entity_attributes_code(reference_entity_code, code, body)
    except Exception as e:
        print("Exception when calling ReferenceEntityAttributeApi->patch_reference_entity_attributes_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference_entity_code** | **str**| Code of the reference entity | 
 **code** | **str**| Code of the resource | 
 **body** | [**GetReferenceEntitiesCodeAttributes200ResponseInner**](GetReferenceEntitiesCodeAttributes200ResponseInner.md)|  | 

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

