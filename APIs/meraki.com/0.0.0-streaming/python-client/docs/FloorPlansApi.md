# openapi_client.FloorPlansApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_floor_plan**](FloorPlansApi.md#create_network_floor_plan) | **POST** /networks/{networkId}/floorPlans | Upload a floor plan
[**delete_network_floor_plan**](FloorPlansApi.md#delete_network_floor_plan) | **DELETE** /networks/{networkId}/floorPlans/{floorPlanId} | Destroy a floor plan
[**get_network_floor_plan**](FloorPlansApi.md#get_network_floor_plan) | **GET** /networks/{networkId}/floorPlans/{floorPlanId} | Find a floor plan by ID
[**get_network_floor_plans**](FloorPlansApi.md#get_network_floor_plans) | **GET** /networks/{networkId}/floorPlans | List the floor plans that belong to your network
[**update_network_floor_plan**](FloorPlansApi.md#update_network_floor_plan) | **PUT** /networks/{networkId}/floorPlans/{floorPlanId} | Update a floor plan&#39;s geolocation and other meta data


# **create_network_floor_plan**
> object create_network_floor_plan(network_id, create_network_floor_plan_request)

Upload a floor plan

Upload a floor plan

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_floor_plan_request import CreateNetworkFloorPlanRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FloorPlansApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_floor_plan_request = openapi_client.CreateNetworkFloorPlanRequest() # CreateNetworkFloorPlanRequest | 

    try:
        # Upload a floor plan
        api_response = api_instance.create_network_floor_plan(network_id, create_network_floor_plan_request)
        print("The response of FloorPlansApi->create_network_floor_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloorPlansApi->create_network_floor_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_floor_plan_request** | [**CreateNetworkFloorPlanRequest**](CreateNetworkFloorPlanRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_floor_plan**
> delete_network_floor_plan(network_id, floor_plan_id)

Destroy a floor plan

Destroy a floor plan

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FloorPlansApi(api_client)
    network_id = 'network_id_example' # str | 
    floor_plan_id = 'floor_plan_id_example' # str | 

    try:
        # Destroy a floor plan
        api_instance.delete_network_floor_plan(network_id, floor_plan_id)
    except Exception as e:
        print("Exception when calling FloorPlansApi->delete_network_floor_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **floor_plan_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_floor_plan**
> object get_network_floor_plan(network_id, floor_plan_id)

Find a floor plan by ID

Find a floor plan by ID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FloorPlansApi(api_client)
    network_id = 'network_id_example' # str | 
    floor_plan_id = 'floor_plan_id_example' # str | 

    try:
        # Find a floor plan by ID
        api_response = api_instance.get_network_floor_plan(network_id, floor_plan_id)
        print("The response of FloorPlansApi->get_network_floor_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloorPlansApi->get_network_floor_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **floor_plan_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_floor_plans**
> List[object] get_network_floor_plans(network_id)

List the floor plans that belong to your network

List the floor plans that belong to your network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FloorPlansApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the floor plans that belong to your network
        api_response = api_instance.get_network_floor_plans(network_id)
        print("The response of FloorPlansApi->get_network_floor_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloorPlansApi->get_network_floor_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_floor_plan**
> object update_network_floor_plan(network_id, floor_plan_id, update_network_floor_plan_request=update_network_floor_plan_request)

Update a floor plan's geolocation and other meta data

Update a floor plan's geolocation and other meta data

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_floor_plan_request import UpdateNetworkFloorPlanRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FloorPlansApi(api_client)
    network_id = 'network_id_example' # str | 
    floor_plan_id = 'floor_plan_id_example' # str | 
    update_network_floor_plan_request = openapi_client.UpdateNetworkFloorPlanRequest() # UpdateNetworkFloorPlanRequest |  (optional)

    try:
        # Update a floor plan's geolocation and other meta data
        api_response = api_instance.update_network_floor_plan(network_id, floor_plan_id, update_network_floor_plan_request=update_network_floor_plan_request)
        print("The response of FloorPlansApi->update_network_floor_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FloorPlansApi->update_network_floor_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **floor_plan_id** | **str**|  | 
 **update_network_floor_plan_request** | [**UpdateNetworkFloorPlanRequest**](UpdateNetworkFloorPlanRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

