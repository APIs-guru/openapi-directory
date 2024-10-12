# openapi_client.ProfileImagesApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_profile_image**](ProfileImagesApi.md#get_profile_image) | **GET** /api/profile_images/{username} | A Users or organizations profile image


# **get_profile_image**
> List[ProfileImage] get_profile_image(username)

A Users or organizations profile image

This endpoint allows the client to retrieve a user or organization profile image information by its         corresponding username.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.profile_image import ProfileImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfileImagesApi(api_client)
    username = 'janedoe' # str | The parameter is the username of the user or the username of the organization.

    try:
        # A Users or organizations profile image
        api_response = api_instance.get_profile_image(username)
        print("The response of ProfileImagesApi->get_profile_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileImagesApi->get_profile_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| The parameter is the username of the user or the username of the organization. | 

### Return type

[**List[ProfileImage]**](ProfileImage.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object containing profile image details |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

