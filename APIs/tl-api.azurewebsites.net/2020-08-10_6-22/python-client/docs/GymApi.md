# openapi_client.GymApi

All URIs are relative to *https://tl-api.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gym_get**](GymApi.md#gym_get) | **GET** /api/Gym/{gymID} | Get gym details This will return all properties related to gym entity             


# **gym_get**
> DefaultResponseDTOOfGymDTO gym_get(gym_id)

Get gym details This will return all properties related to gym entity             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_gym_dto import DefaultResponseDTOOfGymDTO
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
    api_instance = openapi_client.GymApi(api_client)
    gym_id = 56 # int | indentity number (primary key) for gym object

    try:
        # Get gym details This will return all properties related to gym entity             
        api_response = api_instance.gym_get(gym_id)
        print("The response of GymApi->gym_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GymApi->gym_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gym_id** | **int**| indentity number (primary key) for gym object | 

### Return type

[**DefaultResponseDTOOfGymDTO**](DefaultResponseDTOOfGymDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API Response with Gym entity |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

