# openapi_client.TextApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_text_humanize_post**](TextApi.md#api_text_humanize_post) | **POST** /api/Text/Humanize | Humanize text
[**api_text_lorem_ipsum_get**](TextApi.md#api_text_lorem_ipsum_get) | **GET** /api/Text/LoremIpsum | Generate lorem ipsum
[**api_text_password_get**](TextApi.md#api_text_password_get) | **GET** /api/Text/Password | Generate password
[**api_text_review_post**](TextApi.md#api_text_review_post) | **POST** /api/Text/Review | Get reviews (max quantity&#x3D;500)
[**api_text_transform_post**](TextApi.md#api_text_transform_post) | **POST** /api/Text/Transform | Transform text


# **api_text_humanize_post**
> api_text_humanize_post(text_dto, x_api_key=x_api_key)

Humanize text

### Example


```python
import openapi_client
from openapi_client.models.text_dto import TextDto
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
    api_instance = openapi_client.TextApi(api_client)
    text_dto = openapi_client.TextDto() # TextDto | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Humanize text
        api_instance.api_text_humanize_post(text_dto, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling TextApi->api_text_humanize_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text_dto** | [**TextDto**](TextDto.md)|  | 
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

# **api_text_lorem_ipsum_get**
> api_text_lorem_ipsum_get(lorem_type, type, number, x_api_key=x_api_key)

Generate lorem ipsum

### Example


```python
import openapi_client
from openapi_client.models.lorem_type import LoremType
from openapi_client.models.text_type import TextType
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
    api_instance = openapi_client.TextApi(api_client)
    lorem_type = openapi_client.LoremType() # LoremType | 
    type = openapi_client.TextType() # TextType | 
    number = 56 # int | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Generate lorem ipsum
        api_instance.api_text_lorem_ipsum_get(lorem_type, type, number, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling TextApi->api_text_lorem_ipsum_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lorem_type** | [**LoremType**](.md)|  | 
 **type** | [**TextType**](.md)|  | 
 **number** | **int**|  | 
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

# **api_text_password_get**
> api_text_password_get(length, has_digits, has_uppercase, has_special, x_api_key=x_api_key)

Generate password

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
    api_instance = openapi_client.TextApi(api_client)
    length = 56 # int | 
    has_digits = True # bool | 
    has_uppercase = True # bool | 
    has_special = True # bool | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Generate password
        api_instance.api_text_password_get(length, has_digits, has_uppercase, has_special, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling TextApi->api_text_password_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **int**|  | 
 **has_digits** | **bool**|  | 
 **has_uppercase** | **bool**|  | 
 **has_special** | **bool**|  | 
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

# **api_text_review_post**
> api_text_review_post(product, quantity, x_api_key=x_api_key)

Get reviews (max quantity=500)

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
    api_instance = openapi_client.TextApi(api_client)
    product = 'product_example' # str | 
    quantity = 56 # int | 
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get reviews (max quantity=500)
        api_instance.api_text_review_post(product, quantity, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling TextApi->api_text_review_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product** | **str**|  | 
 **quantity** | **int**|  | 
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

# **api_text_transform_post**
> api_text_transform_post(text_action_type, text_dto, case_type=case_type, find=find, replace=replace, x_api_key=x_api_key)

Transform text

### Example


```python
import openapi_client
from openapi_client.models.case_type import CaseType
from openapi_client.models.text_action_type import TextActionType
from openapi_client.models.text_dto import TextDto
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
    api_instance = openapi_client.TextApi(api_client)
    text_action_type = openapi_client.TextActionType() # TextActionType | 
    text_dto = openapi_client.TextDto() # TextDto | 
    case_type = openapi_client.CaseType() # CaseType |  (optional)
    find = 'find_example' # str |  (optional)
    replace = 'replace_example' # str |  (optional)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Transform text
        api_instance.api_text_transform_post(text_action_type, text_dto, case_type=case_type, find=find, replace=replace, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling TextApi->api_text_transform_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text_action_type** | [**TextActionType**](.md)|  | 
 **text_dto** | [**TextDto**](TextDto.md)|  | 
 **case_type** | [**CaseType**](.md)|  | [optional] 
 **find** | **str**|  | [optional] 
 **replace** | **str**|  | [optional] 
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

