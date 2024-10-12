# openapi_client.ApplicantApi

All URIs are relative to *https://api.slideroom.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicant_delete_attributes_v2**](ApplicantApi.md#applicant_delete_attributes_v2) | **DELETE** /api/v2/applicant/attributes | Deletes a custom attribute for an applicant.
[**applicant_get_attribute_names_v2**](ApplicantApi.md#applicant_get_attribute_names_v2) | **GET** /api/v2/applicant/attributes/names | Gets the custom applicant attributes used by the organization.
[**applicant_get_attributes_v2**](ApplicantApi.md#applicant_get_attributes_v2) | **GET** /api/v2/applicant/attributes | Gets the custom attributes for an applicant.
[**applicant_post_attributes_v2**](ApplicantApi.md#applicant_post_attributes_v2) | **POST** /api/v2/applicant/attributes | Updates the custom attributes for an applicant.


# **applicant_delete_attributes_v2**
> str applicant_delete_attributes_v2(email, name, pool=pool, common_app_year=common_app_year)

Deletes a custom attribute for an applicant.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicantApi(api_client)
    email = 'email_example' # str | The email address of the applicant.
    name = 'name_example' # str | The name of the attribute to be deleted.
    pool = 'pool_example' # str |  (optional)
    common_app_year = 56 # int |  (optional)

    try:
        # Deletes a custom attribute for an applicant.
        api_response = api_instance.applicant_delete_attributes_v2(email, name, pool=pool, common_app_year=common_app_year)
        print("The response of ApplicantApi->applicant_delete_attributes_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicantApi->applicant_delete_attributes_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| The email address of the applicant. | 
 **name** | **str**| The name of the attribute to be deleted. | 
 **pool** | **str**|  | [optional] 
 **common_app_year** | **int**|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicant_get_attribute_names_v2**
> List[str] applicant_get_attribute_names_v2()

Gets the custom applicant attributes used by the organization.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicantApi(api_client)

    try:
        # Gets the custom applicant attributes used by the organization.
        api_response = api_instance.applicant_get_attribute_names_v2()
        print("The response of ApplicantApi->applicant_get_attribute_names_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicantApi->applicant_get_attribute_names_v2: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicant_get_attributes_v2**
> Dict[str, str] applicant_get_attributes_v2(email, pool=pool, common_app_year=common_app_year)

Gets the custom attributes for an applicant.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicantApi(api_client)
    email = 'email_example' # str | The email address of the applicant.
    pool = 'pool_example' # str |  (optional)
    common_app_year = 56 # int |  (optional)

    try:
        # Gets the custom attributes for an applicant.
        api_response = api_instance.applicant_get_attributes_v2(email, pool=pool, common_app_year=common_app_year)
        print("The response of ApplicantApi->applicant_get_attributes_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicantApi->applicant_get_attributes_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| The email address of the applicant. | 
 **pool** | **str**|  | [optional] 
 **common_app_year** | **int**|  | [optional] 

### Return type

**Dict[str, str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applicant_post_attributes_v2**
> str applicant_post_attributes_v2(email, data, pool=pool, common_app_year=common_app_year)

Updates the custom attributes for an applicant.

This method only adds or updates attributes. Null values will be updated as nulls, but not deleted. API Import is available in the Advanced Plan.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.slideroom.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.slideroom.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicantApi(api_client)
    email = 'email_example' # str | The email address of the applicant.
    data = {'key': 'data_example'} # Dict[str, str] | The name/value pairs of the attributes.
    pool = 'pool_example' # str |  (optional)
    common_app_year = 56 # int |  (optional)

    try:
        # Updates the custom attributes for an applicant.
        api_response = api_instance.applicant_post_attributes_v2(email, data, pool=pool, common_app_year=common_app_year)
        print("The response of ApplicantApi->applicant_post_attributes_v2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicantApi->applicant_post_attributes_v2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| The email address of the applicant. | 
 **data** | [**Dict[str, str]**](str.md)| The name/value pairs of the attributes. | 
 **pool** | **str**|  | [optional] 
 **common_app_year** | **int**|  | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

