# openapi_client.PicoLoadmanagementGroupApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_pico_loadmanagementgroup_get**](PicoLoadmanagementGroupApi.md#api_pico_loadmanagementgroup_get) | **GET** /api/pico/loadmanagementgroup | GET: api/pico/loadmanagementgroup                            Returns all available load management groups
[**pico_loadmanagement_group_get**](PicoLoadmanagementGroupApi.md#pico_loadmanagement_group_get) | **GET** /api/pico/loadmanagementgroup/{id} | GET: api/pico/loadmanagementgroup                            Returns a pico load management group by it&#39;s id


# **api_pico_loadmanagementgroup_get**
> List[PicoLoadmanagementGroupDto] api_pico_loadmanagementgroup_get()

GET: api/pico/loadmanagementgroup                            Returns all available load management groups

### Example


```python
import openapi_client
from openapi_client.models.pico_loadmanagement_group_dto import PicoLoadmanagementGroupDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PicoLoadmanagementGroupApi(api_client)

    try:
        # GET: api/pico/loadmanagementgroup                            Returns all available load management groups
        api_response = api_instance.api_pico_loadmanagementgroup_get()
        print("The response of PicoLoadmanagementGroupApi->api_pico_loadmanagementgroup_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PicoLoadmanagementGroupApi->api_pico_loadmanagementgroup_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PicoLoadmanagementGroupDto]**](PicoLoadmanagementGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pico_loadmanagement_group_get**
> PicoLoadmanagementGroupDto pico_loadmanagement_group_get(id)

GET: api/pico/loadmanagementgroup                            Returns a pico load management group by it's id

### Example


```python
import openapi_client
from openapi_client.models.pico_loadmanagement_group_dto import PicoLoadmanagementGroupDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PicoLoadmanagementGroupApi(api_client)
    id = 'id_example' # str | 

    try:
        # GET: api/pico/loadmanagementgroup                            Returns a pico load management group by it's id
        api_response = api_instance.pico_loadmanagement_group_get(id)
        print("The response of PicoLoadmanagementGroupApi->pico_loadmanagement_group_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PicoLoadmanagementGroupApi->pico_loadmanagement_group_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**PicoLoadmanagementGroupDto**](PicoLoadmanagementGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

