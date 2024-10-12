# openapi_client.DefaultApi

All URIs are relative to *https://api.stoplight.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**p_ost_versions_publish_anon**](DefaultApi.md#p_ost_versions_publish_anon) | **POST** /versions/publish/anon | Publish Anonymous


# **p_ost_versions_publish_anon**
> POSTVersionsPublishAnon200Response p_ost_versions_publish_anon(post_versions_publish_anon_request=post_versions_publish_anon_request)

Publish Anonymous

Anonymously publish to API Docs.  This endpoint will take a JSON spec or a URL to a swagger or raml spec.  ``` {   \"specData\": {...} } ```  or  ``` {   \"url\": \"http://petstore.swagger.io/v2/swagger.json\" } ```  The spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this documentation.  The response will contain a url to the published documentation.  ``` {   \"url\": \"https://swagger-petstore.api-docs.io/v1.0.0\" } ```   The limitations of anonymous publishing * Cannot update/remove the documentation * Cannot choose the subdomain * Cannot choose the version * Cannot add theming

### Example


```python
import openapi_client
from openapi_client.models.post_versions_publish_anon200_response import POSTVersionsPublishAnon200Response
from openapi_client.models.post_versions_publish_anon_request import POSTVersionsPublishAnonRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stoplight.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.stoplight.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    post_versions_publish_anon_request = openapi_client.POSTVersionsPublishAnonRequest() # POSTVersionsPublishAnonRequest |  (optional)

    try:
        # Publish Anonymous
        api_response = api_instance.p_ost_versions_publish_anon(post_versions_publish_anon_request=post_versions_publish_anon_request)
        print("The response of DefaultApi->p_ost_versions_publish_anon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->p_ost_versions_publish_anon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_versions_publish_anon_request** | [**POSTVersionsPublishAnonRequest**](POSTVersionsPublishAnonRequest.md)|  | [optional] 

### Return type

[**POSTVersionsPublishAnon200Response**](POSTVersionsPublishAnon200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

