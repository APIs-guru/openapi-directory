# openapi_client.SocialNumberApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_social_number_get**](SocialNumberApi.md#api_social_number_get) | **GET** /api/SocialNumber | Generate a social security number
[**api_social_number_post**](SocialNumberApi.md#api_social_number_post) | **POST** /api/SocialNumber | Validate VAT/identity numbers


# **api_social_number_get**
> api_social_number_get(x_api_key=x_api_key)

Generate a social security number

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SocialNumberApi(api_client)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Generate a social security number
        api_instance.api_social_number_get(x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling SocialNumberApi->api_social_number_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api_key** | **str**| Enter your key | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_social_number_post**
> api_social_number_post(id_type, number_validation, x_api_key=x_api_key)

Validate VAT/identity numbers

### Example


```python
import openapi_client
from openapi_client.models.id_type import IdType
from openapi_client.models.number_validation import NumberValidation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SocialNumberApi(api_client)
    id_type = openapi_client.IdType() # IdType | 
    number_validation = openapi_client.NumberValidation() # NumberValidation | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Validate VAT/identity numbers
        api_instance.api_social_number_post(id_type, number_validation, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling SocialNumberApi->api_social_number_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id_type** | [**IdType**](.md)|  | 
 **number_validation** | [**NumberValidation**](NumberValidation.md)|  | 
 **x_api_key** | **str**| Enter your key | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

