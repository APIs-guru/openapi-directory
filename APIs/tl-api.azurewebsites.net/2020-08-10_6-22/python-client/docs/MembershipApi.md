# openapi_client.MembershipApi

All URIs are relative to *https://tl-api.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**membership_get**](MembershipApi.md#membership_get) | **GET** /api/Membership | Get all of the members details This will return all properties related to member entity             
[**membership_post**](MembershipApi.md#membership_post) | **POST** /api/Membership | Add new Member             


# **membership_get**
> List[MemberDTO] membership_get()

Get all of the members details This will return all properties related to member entity             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.member_dto import MemberDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MembershipApi(api_client)

    try:
        # Get all of the members details This will return all properties related to member entity             
        api_response = api_instance.membership_get()
        print("The response of MembershipApi->membership_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MembershipApi->membership_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[MemberDTO]**](MemberDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response with all Members entity as a list. |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **membership_post**
> bool membership_post(member_dto)

Add new Member             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.member_dto import MemberDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://tl-api.azurewebsites.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://tl-api.azurewebsites.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MembershipApi(api_client)
    member_dto = openapi_client.MemberDTO() # MemberDTO | member object

    try:
        # Add new Member             
        api_response = api_instance.membership_post(member_dto)
        print("The response of MembershipApi->membership_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MembershipApi->membership_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **member_dto** | [**MemberDTO**](MemberDTO.md)| member object | 

### Return type

**bool**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | newly created member entity |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

