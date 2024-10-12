# openapi_client.PasswordApi

All URIs are relative to *http://passwordutility.net:80*

Method | HTTP request | Description
------------- | ------------- | -------------
[**password_generate**](PasswordApi.md#password_generate) | **POST** /api/password/generate | 
[**password_validate**](PasswordApi.md#password_validate) | **POST** /api/password/validate | 


# **password_generate**
> object password_generate(length, upper_case=upper_case, digits=digits, special_characters=special_characters)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://passwordutility.net:80
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://passwordutility.net:80"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordApi(api_client)
    length = 56 # int | 
    upper_case = True # bool |  (optional)
    digits = True # bool |  (optional)
    special_characters = True # bool |  (optional)

    try:
        api_response = api_instance.password_generate(length, upper_case=upper_case, digits=digits, special_characters=special_characters)
        print("The response of PasswordApi->password_generate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PasswordApi->password_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **int**|  | 
 **upper_case** | **bool**|  | [optional] 
 **digits** | **bool**|  | [optional] 
 **special_characters** | **bool**|  | [optional] 

### Return type

**object**

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

# **password_validate**
> object password_validate(password)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://passwordutility.net:80
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://passwordutility.net:80"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PasswordApi(api_client)
    password = 'password_example' # str | 

    try:
        api_response = api_instance.password_validate(password)
        print("The response of PasswordApi->password_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PasswordApi->password_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | **str**|  | 

### Return type

**object**

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

