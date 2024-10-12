# openapi_client.BatchesApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_to_batch**](BatchesApi.md#add_to_batch) | **POST** /v1/batches/{batch_id}/add | Add to a Batch
[**create_batch**](BatchesApi.md#create_batch) | **POST** /v1/batches | Create A Batch
[**delete_batch**](BatchesApi.md#delete_batch) | **DELETE** /v1/batches/{batch_id} | Delete Batch By Id
[**get_batch_by_external_id**](BatchesApi.md#get_batch_by_external_id) | **GET** /v1/batches/external_batch_id/{external_batch_id} | Get Batch By External ID
[**get_batch_by_id**](BatchesApi.md#get_batch_by_id) | **GET** /v1/batches/{batch_id} | Get Batch By ID
[**list_batch_errors**](BatchesApi.md#list_batch_errors) | **GET** /v1/batches/{batch_id}/errors | Get Batch Errors
[**list_batches**](BatchesApi.md#list_batches) | **GET** /v1/batches | List Batches
[**process_batch**](BatchesApi.md#process_batch) | **POST** /v1/batches/{batch_id}/process/labels | Process Batch ID Labels
[**remove_from_batch**](BatchesApi.md#remove_from_batch) | **POST** /v1/batches/{batch_id}/remove | Remove From Batch
[**update_batch**](BatchesApi.md#update_batch) | **PUT** /v1/batches/{batch_id} | Update Batch By Id


# **add_to_batch**
> str add_to_batch(batch_id, add_to_batch_request_body)

Add to a Batch

Add a Shipment or Rate to a Batch

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.add_to_batch_request_body import AddToBatchRequestBody
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
    api_instance = openapi_client.BatchesApi(api_client)
    batch_id = 'batch_id_example' # str | Batch ID
    add_to_batch_request_body = openapi_client.AddToBatchRequestBody() # AddToBatchRequestBody | 

    try:
        # Add to a Batch
        api_response = api_instance.add_to_batch(batch_id, add_to_batch_request_body)
        print("The response of BatchesApi->add_to_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->add_to_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_id** | **str**| Batch ID | 
 **add_to_batch_request_body** | [**AddToBatchRequestBody**](AddToBatchRequestBody.md)|  | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_batch**
> CreateBatchResponseBody create_batch(create_batch_request_body)

Create A Batch

Create a Batch

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_batch_request_body import CreateBatchRequestBody
from openapi_client.models.create_batch_response_body import CreateBatchResponseBody
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
    api_instance = openapi_client.BatchesApi(api_client)
    create_batch_request_body = openapi_client.CreateBatchRequestBody() # CreateBatchRequestBody | 

    try:
        # Create A Batch
        api_response = api_instance.create_batch(create_batch_request_body)
        print("The response of BatchesApi->create_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->create_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_batch_request_body** | [**CreateBatchRequestBody**](CreateBatchRequestBody.md)|  | 

### Return type

[**CreateBatchResponseBody**](CreateBatchResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested object creation was a success. |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_batch**
> str delete_batch(batch_id)

Delete Batch By Id

Delete Batch By Id

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
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
    api_instance = openapi_client.BatchesApi(api_client)
    batch_id = 'batch_id_example' # str | Batch ID

    try:
        # Delete Batch By Id
        api_response = api_instance.delete_batch(batch_id)
        print("The response of BatchesApi->delete_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->delete_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_id** | **str**| Batch ID | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_batch_by_external_id**
> GetBatchByExternalIdResponseBody get_batch_by_external_id(external_batch_id)

Get Batch By External ID

Get Batch By External ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_batch_by_external_id_response_body import GetBatchByExternalIdResponseBody
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
    api_instance = openapi_client.BatchesApi(api_client)
    external_batch_id = '13553d7f-3c87-4771-bae1-c49bacef11cb' # str | 

    try:
        # Get Batch By External ID
        api_response = api_instance.get_batch_by_external_id(external_batch_id)
        print("The response of BatchesApi->get_batch_by_external_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->get_batch_by_external_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_batch_id** | **str**|  | 

### Return type

[**GetBatchByExternalIdResponseBody**](GetBatchByExternalIdResponseBody.md)

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

# **get_batch_by_id**
> GetBatchByIdResponseBody get_batch_by_id(batch_id)

Get Batch By ID

Get Batch By ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_batch_by_id_response_body import GetBatchByIdResponseBody
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
    api_instance = openapi_client.BatchesApi(api_client)
    batch_id = 'batch_id_example' # str | Batch ID

    try:
        # Get Batch By ID
        api_response = api_instance.get_batch_by_id(batch_id)
        print("The response of BatchesApi->get_batch_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->get_batch_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_id** | **str**| Batch ID | 

### Return type

[**GetBatchByIdResponseBody**](GetBatchByIdResponseBody.md)

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

# **list_batch_errors**
> ListBatchErrorsResponseBody list_batch_errors(batch_id, page=page, pagesize=pagesize)

Get Batch Errors

Error handling in batches are handled differently than in a single synchronous request. You must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_batch_errors_response_body import ListBatchErrorsResponseBody
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
    api_instance = openapi_client.BatchesApi(api_client)
    batch_id = 'batch_id_example' # str | Batch ID
    page = 1 # int | Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
    pagesize = 56 # int |  (optional)

    try:
        # Get Batch Errors
        api_response = api_instance.list_batch_errors(batch_id, page=page, pagesize=pagesize)
        print("The response of BatchesApi->list_batch_errors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->list_batch_errors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_id** | **str**| Batch ID | 
 **page** | **int**| Return a specific page of results. Defaults to the first page. If set to a number that&#39;s greater than the number of pages of results, an empty page is returned.  | [optional] [default to 1]
 **pagesize** | **int**|  | [optional] 

### Return type

[**ListBatchErrorsResponseBody**](ListBatchErrorsResponseBody.md)

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

# **list_batches**
> ListBatchesResponseBody list_batches(status=status, page=page, page_size=page_size, sort_dir=sort_dir, batch_number=batch_number, sort_by=sort_by)

List Batches

List Batches associated with your Shipengine account

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.batch_status import BatchStatus
from openapi_client.models.batches_sort_by import BatchesSortBy
from openapi_client.models.list_batches_response_body import ListBatchesResponseBody
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
    api_instance = openapi_client.BatchesApi(api_client)
    status = openapi_client.BatchStatus() # BatchStatus |  (optional)
    page = 1 # int | Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
    page_size = 25 # int | The number of results to return per response. (optional) (default to 25)
    sort_dir = openapi_client.SortDir() # SortDir | Controls the sort order of the query. (optional)
    batch_number = 'batch_number_example' # str | Batch Number (optional)
    sort_by = openapi_client.BatchesSortBy() # BatchesSortBy |  (optional)

    try:
        # List Batches
        api_response = api_instance.list_batches(status=status, page=page, page_size=page_size, sort_dir=sort_dir, batch_number=batch_number, sort_by=sort_by)
        print("The response of BatchesApi->list_batches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->list_batches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | [**BatchStatus**](.md)|  | [optional] 
 **page** | **int**| Return a specific page of results. Defaults to the first page. If set to a number that&#39;s greater than the number of pages of results, an empty page is returned.  | [optional] [default to 1]
 **page_size** | **int**| The number of results to return per response. | [optional] [default to 25]
 **sort_dir** | [**SortDir**](.md)| Controls the sort order of the query. | [optional] 
 **batch_number** | **str**| Batch Number | [optional] 
 **sort_by** | [**BatchesSortBy**](.md)|  | [optional] 

### Return type

[**ListBatchesResponseBody**](ListBatchesResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **process_batch**
> str process_batch(batch_id, process_batch_request_body)

Process Batch ID Labels

Process Batch ID Labels

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.process_batch_request_body import ProcessBatchRequestBody
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
    api_instance = openapi_client.BatchesApi(api_client)
    batch_id = 'batch_id_example' # str | Batch ID
    process_batch_request_body = openapi_client.ProcessBatchRequestBody() # ProcessBatchRequestBody | 

    try:
        # Process Batch ID Labels
        api_response = api_instance.process_batch(batch_id, process_batch_request_body)
        print("The response of BatchesApi->process_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->process_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_id** | **str**| Batch ID | 
 **process_batch_request_body** | [**ProcessBatchRequestBody**](ProcessBatchRequestBody.md)|  | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_from_batch**
> str remove_from_batch(batch_id, remove_from_batch_request_body)

Remove From Batch

Remove a shipment or rate from a batch

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.remove_from_batch_request_body import RemoveFromBatchRequestBody
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
    api_instance = openapi_client.BatchesApi(api_client)
    batch_id = 'batch_id_example' # str | Batch ID
    remove_from_batch_request_body = openapi_client.RemoveFromBatchRequestBody() # RemoveFromBatchRequestBody | 

    try:
        # Remove From Batch
        api_response = api_instance.remove_from_batch(batch_id, remove_from_batch_request_body)
        print("The response of BatchesApi->remove_from_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->remove_from_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_id** | **str**| Batch ID | 
 **remove_from_batch_request_body** | [**RemoveFromBatchRequestBody**](RemoveFromBatchRequestBody.md)|  | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_batch**
> str update_batch(batch_id)

Update Batch By Id

Update Batch By Id

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
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
    api_instance = openapi_client.BatchesApi(api_client)
    batch_id = 'batch_id_example' # str | Batch ID

    try:
        # Update Batch By Id
        api_response = api_instance.update_batch(batch_id)
        print("The response of BatchesApi->update_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BatchesApi->update_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_id** | **str**| Batch ID | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

