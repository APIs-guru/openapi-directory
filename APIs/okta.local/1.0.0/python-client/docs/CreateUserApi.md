# openapi_client.CreateUserApi

All URIs are relative to *http://okta.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_user_in_group**](CreateUserApi.md#create_user_in_group) | **POST** /api/v1/users | Create User in Group


# **create_user_in_group**
> create_user_in_group(activate=activate, create_user_in_group_request=create_user_in_group_request)

Create User in Group

Create User in Group

### Example


```python
import openapi_client
from openapi_client.models.create_user_in_group_request import CreateUserInGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://okta.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://okta.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CreateUserApi(api_client)
    activate = 'false' # str |  (optional)
    create_user_in_group_request = {"groupIds":["{{groupId}}"],"profile":{"email":"isaac@{{email-suffix}}","firstName":"Isaac","lastName":"Brock","login":"isaac@{{email-suffix}}"}} # CreateUserInGroupRequest |  (optional)

    try:
        # Create User in Group
        api_instance.create_user_in_group(activate=activate, create_user_in_group_request=create_user_in_group_request)
    except Exception as e:
        print("Exception when calling CreateUserApi->create_user_in_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activate** | **str**|  | [optional] 
 **create_user_in_group_request** | [**CreateUserInGroupRequest**](CreateUserInGroupRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

