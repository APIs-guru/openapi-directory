# openapi_client.FeaturesApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_features**](FeaturesApi.md#get_features) | **GET** /features.{content_type} | Retrieve supported features


# **get_features**
> List[Feature] get_features(content_type, language=language)

Retrieve supported features

This method returns list of supported features per languages supported by Semantria API. Let the users know about API capabilities.

### Example


```python
import openapi_client
from openapi_client.models.feature import Feature
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FeaturesApi(api_client)
    content_type = 'content_type_example' # str | 
    language = 'language_example' # str | Filter features by specified language (optional)

    try:
        # Retrieve supported features
        api_response = api_instance.get_features(content_type, language=language)
        print("The response of FeaturesApi->get_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeaturesApi->get_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **language** | **str**| Filter features by specified language | [optional] 

### Return type

[**List[Feature]**](Feature.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with subscription details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

