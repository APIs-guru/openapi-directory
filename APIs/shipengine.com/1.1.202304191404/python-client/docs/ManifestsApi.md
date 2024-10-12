# openapi_client.ManifestsApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_manifest**](ManifestsApi.md#create_manifest) | **POST** /v1/manifests | Create Manifest
[**get_manifest_by_id**](ManifestsApi.md#get_manifest_by_id) | **GET** /v1/manifests/{manifest_id} | Get Manifest By Id
[**get_manifest_request_by_id**](ManifestsApi.md#get_manifest_request_by_id) | **GET** /v1/manifests/requests/{manifest_request_id} | Get Manifest Request By Id
[**list_manifests**](ManifestsApi.md#list_manifests) | **GET** /v1/manifests | List Manifests


# **create_manifest**
> CreateManifestResponseBody create_manifest(create_manifest_request_body)

Create Manifest

Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_manifest_request_body import CreateManifestRequestBody
from openapi_client.models.create_manifest_response_body import CreateManifestResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestsApi(api_client)
    create_manifest_request_body = openapi_client.CreateManifestRequestBody() # CreateManifestRequestBody | 

    try:
        # Create Manifest
        api_response = api_instance.create_manifest(create_manifest_request_body)
        print("The response of ManifestsApi->create_manifest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManifestsApi->create_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_manifest_request_body** | [**CreateManifestRequestBody**](CreateManifestRequestBody.md)|  | 

### Return type

[**CreateManifestResponseBody**](CreateManifestResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_manifest_by_id**
> GetManifestByIdResponseBody get_manifest_by_id(manifest_id)

Get Manifest By Id

Get Manifest By Id

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_manifest_by_id_response_body import GetManifestByIdResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestsApi(api_client)
    manifest_id = 'manifest_id_example' # str | The Manifest Id

    try:
        # Get Manifest By Id
        api_response = api_instance.get_manifest_by_id(manifest_id)
        print("The response of ManifestsApi->get_manifest_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManifestsApi->get_manifest_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manifest_id** | **str**| The Manifest Id | 

### Return type

[**GetManifestByIdResponseBody**](GetManifestByIdResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_manifest_request_by_id**
> CreateManifestResponseBody get_manifest_request_by_id(manifest_request_id)

Get Manifest Request By Id

Get Manifest Request By Id

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_manifest_response_body import CreateManifestResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestsApi(api_client)
    manifest_request_id = 'manifest_request_id_example' # str | The Manifest Request Id

    try:
        # Get Manifest Request By Id
        api_response = api_instance.get_manifest_request_by_id(manifest_request_id)
        print("The response of ManifestsApi->get_manifest_request_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManifestsApi->get_manifest_request_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **manifest_request_id** | **str**| The Manifest Request Id | 

### Return type

[**CreateManifestResponseBody**](CreateManifestResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_manifests**
> ListManifestsResponseBody list_manifests(warehouse_id=warehouse_id, ship_date_start=ship_date_start, ship_date_end=ship_date_end, created_at_start=created_at_start, created_at_end=created_at_end, carrier_id=carrier_id, page=page, page_size=page_size, label_ids=label_ids)

List Manifests

Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_manifests_response_body import ListManifestsResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ManifestsApi(api_client)
    warehouse_id = 'warehouse_id_example' # str | Warehouse ID (optional)
    ship_date_start = '2018-09-23T15:00:00.000Z' # datetime | ship date start range (optional)
    ship_date_end = '2018-09-23T15:00:00.000Z' # datetime | ship date end range (optional)
    created_at_start = '2019-03-12T19:24:13.657Z' # datetime | Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) (optional)
    created_at_end = '2019-03-12T19:24:13.657Z' # datetime | Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) (optional)
    carrier_id = 'carrier_id_example' # str | Carrier ID (optional)
    page = 1 # int | Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
    page_size = 25 # int | The number of results to return per response. (optional) (default to 25)
    label_ids = ['label_ids_example'] # List[str] |  (optional)

    try:
        # List Manifests
        api_response = api_instance.list_manifests(warehouse_id=warehouse_id, ship_date_start=ship_date_start, ship_date_end=ship_date_end, created_at_start=created_at_start, created_at_end=created_at_end, carrier_id=carrier_id, page=page, page_size=page_size, label_ids=label_ids)
        print("The response of ManifestsApi->list_manifests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManifestsApi->list_manifests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **warehouse_id** | **str**| Warehouse ID | [optional] 
 **ship_date_start** | **datetime**| ship date start range | [optional] 
 **ship_date_end** | **datetime**| ship date end range | [optional] 
 **created_at_start** | **datetime**| Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) | [optional] 
 **created_at_end** | **datetime**| Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) | [optional] 
 **carrier_id** | **str**| Carrier ID | [optional] 
 **page** | **int**| Return a specific page of results. Defaults to the first page. If set to a number that&#39;s greater than the number of pages of results, an empty page is returned.  | [optional] [default to 1]
 **page_size** | **int**| The number of results to return per response. | [optional] [default to 25]
 **label_ids** | [**List[str]**](str.md)|  | [optional] 

### Return type

[**ListManifestsResponseBody**](ListManifestsResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

