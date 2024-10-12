# openapi_client.LicenseesApi

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_licensee**](LicenseesApi.md#create_licensee) | **POST** /keys/{key}/licensees | Create
[**delete_licensee**](LicenseesApi.md#delete_licensee) | **DELETE** /keys/{key}/licensees/{licensee} | Cancel
[**list_licensees**](LicenseesApi.md#list_licensees) | **GET** /keys/{key}/licensees | List
[**retrieve_licensee**](LicenseesApi.md#retrieve_licensee) | **GET** /keys/{key}/licensees/{licensee} | Retrieve
[**update_licensee**](LicenseesApi.md#update_licensee) | **PUT** /keys/{key}/licensees/{licensee} | Update


# **create_licensee**
> LicenseeResponse create_licensee(key, licensee_editable, user_token=user_token)

Create

Create a licensee for the specified API Key.

### Example


```python
import openapi_client
from openapi_client.models.licensee_editable import LicenseeEditable
from openapi_client.models.licensee_response import LicenseeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicenseesApi(api_client)
    key = 'key_example' # str | 
    licensee_editable = openapi_client.LicenseeEditable() # LicenseeEditable | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # Create
        api_response = api_instance.create_licensee(key, licensee_editable, user_token=user_token)
        print("The response of LicenseesApi->create_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseesApi->create_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **licensee_editable** | [**LicenseeEditable**](LicenseeEditable.md)|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**LicenseeResponse**](LicenseeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_licensee**
> LicenseeDeleteResponse delete_licensee(key, licensee, user_token=user_token)

Cancel

Cancels a licensee key. This renders a licensee unusable. This action can be reversed if you get in contact with us.

### Example


```python
import openapi_client
from openapi_client.models.licensee_delete_response import LicenseeDeleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicenseesApi(api_client)
    key = 'key_example' # str | 
    licensee = 'licensee_example' # str | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # Cancel
        api_response = api_instance.delete_licensee(key, licensee, user_token=user_token)
        print("The response of LicenseesApi->delete_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseesApi->delete_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **licensee** | **str**|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**LicenseeDeleteResponse**](LicenseeDeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_licensees**
> LicenseesResponse list_licensees(key, starting_after=starting_after, user_token=user_token, limit=limit, query=query)

List

Returns a list of licensees for a key.

### Example


```python
import openapi_client
from openapi_client.models.licensees_response import LicenseesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicenseesApi(api_client)
    key = 'key_example' # str | 
    starting_after = 56 # int | Specify ID of the licensee after which you would like to list results (optional)
    user_token = 'user_token_example' # str |  (optional)
    limit = 10 # int | Specify the maximum number of results to return per page. Default and maximum is `100`. (optional) (default to 10)
    query = 'query_example' # str | Filter result by licensee name. Query can be shortened to `q=` (optional)

    try:
        # List
        api_response = api_instance.list_licensees(key, starting_after=starting_after, user_token=user_token, limit=limit, query=query)
        print("The response of LicenseesApi->list_licensees:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseesApi->list_licensees: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **starting_after** | **int**| Specify ID of the licensee after which you would like to list results | [optional] 
 **user_token** | **str**|  | [optional] 
 **limit** | **int**| Specify the maximum number of results to return per page. Default and maximum is &#x60;100&#x60;. | [optional] [default to 10]
 **query** | **str**| Filter result by licensee name. Query can be shortened to &#x60;q&#x3D;&#x60; | [optional] 

### Return type

[**LicenseesResponse**](LicenseesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_licensee**
> LicenseeResponse retrieve_licensee(key, licensee, user_token=user_token)

Retrieve

Returns licensee information as identified by the licensee key.

### Example


```python
import openapi_client
from openapi_client.models.licensee_response import LicenseeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicenseesApi(api_client)
    key = 'key_example' # str | 
    licensee = 'licensee_example' # str | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # Retrieve
        api_response = api_instance.retrieve_licensee(key, licensee, user_token=user_token)
        print("The response of LicenseesApi->retrieve_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseesApi->retrieve_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **licensee** | **str**|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**LicenseeResponse**](LicenseeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_licensee**
> LicenseeResponse update_licensee(key, licensee, licensee_editable, user_token=user_token)

Update

Update Licensee

### Example


```python
import openapi_client
from openapi_client.models.licensee_editable import LicenseeEditable
from openapi_client.models.licensee_response import LicenseeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicenseesApi(api_client)
    key = 'key_example' # str | 
    licensee = 'licensee_example' # str | 
    licensee_editable = openapi_client.LicenseeEditable() # LicenseeEditable | 
    user_token = 'user_token_example' # str |  (optional)

    try:
        # Update
        api_response = api_instance.update_licensee(key, licensee, licensee_editable, user_token=user_token)
        print("The response of LicenseesApi->update_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseesApi->update_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **licensee** | **str**|  | 
 **licensee_editable** | [**LicenseeEditable**](LicenseeEditable.md)|  | 
 **user_token** | **str**|  | [optional] 

### Return type

[**LicenseeResponse**](LicenseeResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

