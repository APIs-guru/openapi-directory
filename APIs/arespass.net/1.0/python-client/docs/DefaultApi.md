# openapi_client.DefaultApi

All URIs are relative to *http://arespass.net/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**about_get**](DefaultApi.md#about_get) | **GET** /about | Metadata about this API&amp;#58; version number, release date and available languages.  Metadata requests are NOT billed. 
[**ec_get**](DefaultApi.md#ec_get) | **GET** /ec | The entropy calculator - alias ec -, analyzes a password and calculates its entropy.  Entropy calculator requests are billed. 


# **about_get**
> About about_get(output_format=output_format)

Metadata about this API&#58; version number, release date and available languages.  Metadata requests are NOT billed. 

### Example


```python
import openapi_client
from openapi_client.models.about import About
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://arespass.net/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://arespass.net/v1.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    output_format = 'output_format_example' # str | **The format of the returned metadata.**  Allowed values are *json*, *xml* and *yaml*.  The default value is *xml*.  (optional)

    try:
        # Metadata about this API&#58; version number, release date and available languages.  Metadata requests are NOT billed. 
        api_response = api_instance.about_get(output_format=output_format)
        print("The response of DefaultApi->about_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->about_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **output_format** | **str**| **The format of the returned metadata.**  Allowed values are *json*, *xml* and *yaml*.  The default value is *xml*.  | [optional] 

### Return type

[**About**](About.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-yaml, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | **The metadata about this API&amp;#58; version number, release date and available languages.**  |  -  |
**400** | **At least one error was found in the request parameters.**  |  -  |
**405** | **HTTP method POST is not allowed.**  |  -  |
**500** | **Unexpected server error.**                  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ec_get**
> Ec ec_get(password, output_format=output_format, penalty=penalty, req_id=req_id)

The entropy calculator - alias ec -, analyzes a password and calculates its entropy.  Entropy calculator requests are billed. 

### Example


```python
import openapi_client
from openapi_client.models.ec import Ec
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://arespass.net/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://arespass.net/v1.0"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    password = 'password_example' # str | **The password to be analyzed.**  Minimum length is 4 characters; maximum length is 128 characters.  Beware that certain characters like '&#35;', '&#61;' or '&#63;' must be properly encoded.  For more information about this issue, please refer to RFC 3986 (\"*Uniform Resource Identifier (URI): Generic Syntax*\"), sections 2.1, 2.2 and 2.4. 
    output_format = 'output_format_example' # str | **The format of the returned analysis.**  Allowed values are *json*, *xml* and *yaml*.  The default value is *xml*.  (optional)
    penalty = 3.4 # float | **The penalty applied to each character that is part of a word, number sequence, alphabet sequence, etc.**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  The character used as decimal separator is always '&#46;'. Hence, a parameter value like *0,33* would be illegal.  The default value is *0.25*.  (optional)
    req_id = 'req_id_example' # str | **An identifier for this request.**  The request identifier is a string that must match the regular expression */(?i)^[a-z0-9]{8,16}$/*.  This identifier is echoed in the returned response. Its value has no effect on the password analysis.  If this parameter is unset, a randomly generated identifier will be automatically assigned to this request.  (optional)

    try:
        # The entropy calculator - alias ec -, analyzes a password and calculates its entropy.  Entropy calculator requests are billed. 
        api_response = api_instance.ec_get(password, output_format=output_format, penalty=penalty, req_id=req_id)
        print("The response of DefaultApi->ec_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ec_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | **str**| **The password to be analyzed.**  Minimum length is 4 characters; maximum length is 128 characters.  Beware that certain characters like &#39;&amp;#35;&#39;, &#39;&amp;#61;&#39; or &#39;&amp;#63;&#39; must be properly encoded.  For more information about this issue, please refer to RFC 3986 (\&quot;*Uniform Resource Identifier (URI): Generic Syntax*\&quot;), sections 2.1, 2.2 and 2.4.  | 
 **output_format** | **str**| **The format of the returned analysis.**  Allowed values are *json*, *xml* and *yaml*.  The default value is *xml*.  | [optional] 
 **penalty** | **float**| **The penalty applied to each character that is part of a word, number sequence, alphabet sequence, etc.**  The penalty is a float number in the range [0, 1]. Full penalty, 0; no penalty, 1.  The character used as decimal separator is always &#39;&amp;#46;&#39;. Hence, a parameter value like *0,33* would be illegal.  The default value is *0.25*.  | [optional] 
 **req_id** | **str**| **An identifier for this request.**  The request identifier is a string that must match the regular expression */(?i)^[a-z0-9]{8,16}$/*.  This identifier is echoed in the returned response. Its value has no effect on the password analysis.  If this parameter is unset, a randomly generated identifier will be automatically assigned to this request.  | [optional] 

### Return type

[**Ec**](Ec.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-yaml, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The password analysis, including the calculated entropy. |  -  |
**400** | **At least one error was found in the request parameters.**  |  -  |
**405** | **HTTP method POST is not allowed.**  |  -  |
**500** | **Unexpected server error.**  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

