# openapi_client.PackageApi

All URIs are relative to *https://tl-api.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**package_delete**](PackageApi.md#package_delete) | **DELETE** /api/Package | Delete existing package             
[**package_get**](PackageApi.md#package_get) | **GET** /api/Package | Get package details by packageId             
[**package_post**](PackageApi.md#package_post) | **POST** /api/Package | Insert new package into the system             
[**package_put**](PackageApi.md#package_put) | **PUT** /api/Package | Update existing package by its ID             
[**package_search**](PackageApi.md#package_search) | **GET** /api/Package/Search | Search packages             
[**package_update_status**](PackageApi.md#package_update_status) | **PUT** /api/Package/UpdateStatus | Status update of existing package 


# **package_delete**
> DefaultResponseDTOOfBoolean package_delete(package_id=package_id)

Delete existing package             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_boolean import DefaultResponseDTOOfBoolean
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
    api_instance = openapi_client.PackageApi(api_client)
    package_id = 56 # int | primary key of package entity (optional)

    try:
        # Delete existing package             
        api_response = api_instance.package_delete(package_id=package_id)
        print("The response of PackageApi->package_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageApi->package_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_id** | **int**| primary key of package entity | [optional] 

### Return type

[**DefaultResponseDTOOfBoolean**](DefaultResponseDTOOfBoolean.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | status 1  : success, status 404 : package not found, status -2: package already in use  |  -  |
**400** |  |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_get**
> DefaultResponseDTOOfPackageDTO package_get(package_id=package_id)

Get package details by packageId             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_package_dto import DefaultResponseDTOOfPackageDTO
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
    api_instance = openapi_client.PackageApi(api_client)
    package_id = 56 # int | primary key of package entity (optional)

    try:
        # Get package details by packageId             
        api_response = api_instance.package_get(package_id=package_id)
        print("The response of PackageApi->package_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageApi->package_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_id** | **int**| primary key of package entity | [optional] 

### Return type

[**DefaultResponseDTOOfPackageDTO**](DefaultResponseDTOOfPackageDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | all the fields that related to the package |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_post**
> DefaultResponseDTOOfStatusDTO package_post(package_dto)

Insert new package into the system             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_status_dto import DefaultResponseDTOOfStatusDTO
from openapi_client.models.package_dto import PackageDTO
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
    api_instance = openapi_client.PackageApi(api_client)
    package_dto = openapi_client.PackageDTO() # PackageDTO | package object

    try:
        # Insert new package into the system             
        api_response = api_instance.package_post(package_dto)
        print("The response of PackageApi->package_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageApi->package_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_dto** | [**PackageDTO**](PackageDTO.md)| package object | 

### Return type

[**DefaultResponseDTOOfStatusDTO**](DefaultResponseDTOOfStatusDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | messageId that can use to get the status of import later on.! |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_put**
> DefaultResponseDTOOfStatusDTO package_put(package_dto)

Update existing package by its ID             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_status_dto import DefaultResponseDTOOfStatusDTO
from openapi_client.models.package_dto import PackageDTO
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
    api_instance = openapi_client.PackageApi(api_client)
    package_dto = openapi_client.PackageDTO() # PackageDTO | package object

    try:
        # Update existing package by its ID             
        api_response = api_instance.package_put(package_dto)
        print("The response of PackageApi->package_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageApi->package_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_dto** | [**PackageDTO**](PackageDTO.md)| package object | 

### Return type

[**DefaultResponseDTOOfStatusDTO**](DefaultResponseDTOOfStatusDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | messageId that can use to get the status of import later on.! |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_search**
> List[DefaultResponseDTOOfPackageSearchDTO] package_search(search_text=search_text, gym_id=gym_id, type=type, order_by=order_by, limit=limit, offset=offset, active_status=active_status, category_id=category_id, startp_price=startp_price, end_price=end_price, request_source=request_source)

Search packages             

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_package_search_dto import DefaultResponseDTOOfPackageSearchDTO
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
    api_instance = openapi_client.PackageApi(api_client)
    search_text = 'search_text_example' # str | part of package name (optional)
    gym_id = -1 # int | primary key of TL gym entity (optional) (default to -1)
    type = 'all' # str | filter package type.!-- default is 'all' (optional) (default to 'all')
    order_by = '1' # str | order by column.!-- invalid column will give internal server error (optional) (default to '1')
    limit = 100 # int | number of recode in result and default is 100. use negative numbers to order by desc (optional) (default to 100)
    offset = 0 # int | number of recodes to skip (optional) (default to 0)
    active_status = 1 # int | active status active : 1, inactive : 2, all 3, deafult : 1 (optional) (default to 1)
    category_id = -1 # int | Packge Category Id (optional) (default to -1)
    startp_price = 0 # float | Start price of the price Range (optional) (default to 0)
    end_price = 9999999 # float | End Price of the price Range (optional) (default to 9999999)
    request_source = 1 # int | 1 : MRM, 2 : Mobile  (optional) (default to 1)

    try:
        # Search packages             
        api_response = api_instance.package_search(search_text=search_text, gym_id=gym_id, type=type, order_by=order_by, limit=limit, offset=offset, active_status=active_status, category_id=category_id, startp_price=startp_price, end_price=end_price, request_source=request_source)
        print("The response of PackageApi->package_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageApi->package_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_text** | **str**| part of package name | [optional] 
 **gym_id** | **int**| primary key of TL gym entity | [optional] [default to -1]
 **type** | **str**| filter package type.!-- default is &#39;all&#39; | [optional] [default to &#39;all&#39;]
 **order_by** | **str**| order by column.!-- invalid column will give internal server error | [optional] [default to &#39;1&#39;]
 **limit** | **int**| number of recode in result and default is 100. use negative numbers to order by desc | [optional] [default to 100]
 **offset** | **int**| number of recodes to skip | [optional] [default to 0]
 **active_status** | **int**| active status active : 1, inactive : 2, all 3, deafult : 1 | [optional] [default to 1]
 **category_id** | **int**| Packge Category Id | [optional] [default to -1]
 **startp_price** | **float**| Start price of the price Range | [optional] [default to 0]
 **end_price** | **float**| End Price of the price Range | [optional] [default to 9999999]
 **request_source** | **int**| 1 : MRM, 2 : Mobile  | [optional] [default to 1]

### Return type

[**List[DefaultResponseDTOOfPackageSearchDTO]**](DefaultResponseDTOOfPackageSearchDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | basic information of package entity |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_update_status**
> DefaultResponseDTOOfBoolean package_update_status(package_id=package_id, status=status, user_name=user_name)

Status update of existing package 

### Example

* OAuth Authentication (bearer):

```python
import openapi_client
from openapi_client.models.default_response_dtoof_boolean import DefaultResponseDTOOfBoolean
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
    api_instance = openapi_client.PackageApi(api_client)
    package_id = 56 # int | package Id (optional)
    status = 1 # int | status : 1 activate, 2 : deactivate (optional) (default to 1)
    user_name = 'system' # str | Status updated User (optional) (default to 'system')

    try:
        # Status update of existing package 
        api_response = api_instance.package_update_status(package_id=package_id, status=status, user_name=user_name)
        print("The response of PackageApi->package_update_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageApi->package_update_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_id** | **int**| package Id | [optional] 
 **status** | **int**| status : 1 activate, 2 : deactivate | [optional] [default to 1]
 **user_name** | **str**| Status updated User | [optional] [default to &#39;system&#39;]

### Return type

[**DefaultResponseDTOOfBoolean**](DefaultResponseDTOOfBoolean.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | status 1 : success, status 404 : package not found, status -2: package already in use  |  -  |
**400** |  |  -  |
**404** |  |  -  |
**500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

