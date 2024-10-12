# openapi_client.BucketsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_buckets_id**](BucketsApi.md#delete_buckets_id) | **DELETE** /buckets/{bucketID} | Delete a bucket
[**delete_buckets_id_labels_id**](BucketsApi.md#delete_buckets_id_labels_id) | **DELETE** /buckets/{bucketID}/labels/{labelID} | Delete a label from a bucket
[**delete_buckets_id_members_id**](BucketsApi.md#delete_buckets_id_members_id) | **DELETE** /buckets/{bucketID}/members/{userID} | Remove a member from a bucket
[**delete_buckets_id_owners_id**](BucketsApi.md#delete_buckets_id_owners_id) | **DELETE** /buckets/{bucketID}/owners/{userID} | Remove an owner from a bucket
[**get_buckets**](BucketsApi.md#get_buckets) | **GET** /buckets | List all buckets
[**get_buckets_id**](BucketsApi.md#get_buckets_id) | **GET** /buckets/{bucketID} | Retrieve a bucket
[**get_buckets_id_labels**](BucketsApi.md#get_buckets_id_labels) | **GET** /buckets/{bucketID}/labels | List all labels for a bucket
[**get_buckets_id_members**](BucketsApi.md#get_buckets_id_members) | **GET** /buckets/{bucketID}/members | List all users with member privileges for a bucket
[**get_buckets_id_owners**](BucketsApi.md#get_buckets_id_owners) | **GET** /buckets/{bucketID}/owners | List all owners of a bucket
[**get_sources_id_buckets_0**](BucketsApi.md#get_sources_id_buckets_0) | **GET** /sources/{sourceID}/buckets | Get buckets in a source
[**patch_buckets_id**](BucketsApi.md#patch_buckets_id) | **PATCH** /buckets/{bucketID} | Update a bucket
[**post_buckets**](BucketsApi.md#post_buckets) | **POST** /buckets | Create a bucket
[**post_buckets_id_labels**](BucketsApi.md#post_buckets_id_labels) | **POST** /buckets/{bucketID}/labels | Add a label to a bucket
[**post_buckets_id_members**](BucketsApi.md#post_buckets_id_members) | **POST** /buckets/{bucketID}/members | Add a member to a bucket
[**post_buckets_id_owners**](BucketsApi.md#post_buckets_id_owners) | **POST** /buckets/{bucketID}/owners | Add an owner to a bucket


# **delete_buckets_id**
> delete_buckets_id(bucket_id, zap_trace_span=zap_trace_span)

Delete a bucket

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The ID of the bucket to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a bucket
        api_instance.delete_buckets_id(bucket_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling BucketsApi->delete_buckets_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The ID of the bucket to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | Bucket not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_buckets_id_labels_id**
> delete_buckets_id_labels_id(bucket_id, label_id, zap_trace_span=zap_trace_span)

Delete a label from a bucket

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    label_id = 'label_id_example' # str | The ID of the label to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label from a bucket
        api_instance.delete_buckets_id_labels_id(bucket_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling BucketsApi->delete_buckets_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **label_id** | **str**| The ID of the label to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Delete has been accepted |  -  |
**404** | Bucket not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_buckets_id_members_id**
> delete_buckets_id_members_id(user_id, bucket_id, zap_trace_span=zap_trace_span)

Remove a member from a bucket

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    user_id = 'user_id_example' # str | The ID of the member to remove.
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove a member from a bucket
        api_instance.delete_buckets_id_members_id(user_id, bucket_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling BucketsApi->delete_buckets_id_members_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the member to remove. | 
 **bucket_id** | **str**| The bucket ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Member removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_buckets_id_owners_id**
> delete_buckets_id_owners_id(user_id, bucket_id, zap_trace_span=zap_trace_span)

Remove an owner from a bucket

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    user_id = 'user_id_example' # str | The ID of the owner to remove.
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove an owner from a bucket
        api_instance.delete_buckets_id_owners_id(user_id, bucket_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling BucketsApi->delete_buckets_id_owners_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the owner to remove. | 
 **bucket_id** | **str**| The bucket ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Owner removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_buckets**
> Buckets get_buckets(zap_trace_span=zap_trace_span, offset=offset, limit=limit, after=after, org=org, org_id=org_id, name=name, id=id)

List all buckets

### Example


```python
import openapi_client
from openapi_client.models.buckets import Buckets
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    offset = 56 # int |  (optional)
    limit = 20 # int |  (optional) (default to 20)
    after = 'after_example' # str | The last resource ID from which to seek from (but not including). This is to be used instead of `offset`.  (optional)
    org = 'org_example' # str | The name of the organization. (optional)
    org_id = 'org_id_example' # str | The organization ID. (optional)
    name = 'name_example' # str | Only returns buckets with a specific name. (optional)
    id = 'id_example' # str | Only returns buckets with a specific ID. (optional)

    try:
        # List all buckets
        api_response = api_instance.get_buckets(zap_trace_span=zap_trace_span, offset=offset, limit=limit, after=after, org=org, org_id=org_id, name=name, id=id)
        print("The response of BucketsApi->get_buckets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->get_buckets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]
 **after** | **str**| The last resource ID from which to seek from (but not including). This is to be used instead of &#x60;offset&#x60;.  | [optional] 
 **org** | **str**| The name of the organization. | [optional] 
 **org_id** | **str**| The organization ID. | [optional] 
 **name** | **str**| Only returns buckets with a specific name. | [optional] 
 **id** | **str**| Only returns buckets with a specific ID. | [optional] 

### Return type

[**Buckets**](Buckets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of buckets |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_buckets_id**
> Bucket get_buckets_id(bucket_id, zap_trace_span=zap_trace_span)

Retrieve a bucket

### Example


```python
import openapi_client
from openapi_client.models.bucket import Bucket
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a bucket
        api_response = api_instance.get_buckets_id(bucket_id, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->get_buckets_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->get_buckets_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Bucket**](Bucket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bucket details |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_buckets_id_labels**
> LabelsResponse get_buckets_id_labels(bucket_id, zap_trace_span=zap_trace_span)

List all labels for a bucket

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a bucket
        api_response = api_instance.get_buckets_id_labels(bucket_id, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->get_buckets_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->get_buckets_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all labels for a bucket |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_buckets_id_members**
> ResourceMembers get_buckets_id_members(bucket_id, zap_trace_span=zap_trace_span)

List all users with member privileges for a bucket

### Example


```python
import openapi_client
from openapi_client.models.resource_members import ResourceMembers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all users with member privileges for a bucket
        api_response = api_instance.get_buckets_id_members(bucket_id, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->get_buckets_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->get_buckets_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMembers**](ResourceMembers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of bucket members |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_buckets_id_owners**
> ResourceOwners get_buckets_id_owners(bucket_id, zap_trace_span=zap_trace_span)

List all owners of a bucket

### Example


```python
import openapi_client
from openapi_client.models.resource_owners import ResourceOwners
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all owners of a bucket
        api_response = api_instance.get_buckets_id_owners(bucket_id, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->get_buckets_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->get_buckets_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwners**](ResourceOwners.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of bucket owners |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sources_id_buckets_0**
> Buckets get_sources_id_buckets_0(source_id, zap_trace_span=zap_trace_span, org=org)

Get buckets in a source

### Example


```python
import openapi_client
from openapi_client.models.buckets import Buckets
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    source_id = 'source_id_example' # str | The source ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    org = 'org_example' # str | The name of the organization. (optional)

    try:
        # Get buckets in a source
        api_response = api_instance.get_sources_id_buckets_0(source_id, zap_trace_span=zap_trace_span, org=org)
        print("The response of BucketsApi->get_sources_id_buckets_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->get_sources_id_buckets_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**| The source ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **org** | **str**| The name of the organization. | [optional] 

### Return type

[**Buckets**](Buckets.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A source |  -  |
**404** | Source not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_buckets_id**
> Bucket patch_buckets_id(bucket_id, patch_bucket_request, zap_trace_span=zap_trace_span)

Update a bucket

### Example


```python
import openapi_client
from openapi_client.models.bucket import Bucket
from openapi_client.models.patch_bucket_request import PatchBucketRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    patch_bucket_request = openapi_client.PatchBucketRequest() # PatchBucketRequest | Bucket update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a bucket
        api_response = api_instance.patch_buckets_id(bucket_id, patch_bucket_request, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->patch_buckets_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->patch_buckets_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **patch_bucket_request** | [**PatchBucketRequest**](PatchBucketRequest.md)| Bucket update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Bucket**](Bucket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated bucket |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_buckets**
> Bucket post_buckets(post_bucket_request, zap_trace_span=zap_trace_span)

Create a bucket

### Example


```python
import openapi_client
from openapi_client.models.bucket import Bucket
from openapi_client.models.post_bucket_request import PostBucketRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    post_bucket_request = openapi_client.PostBucketRequest() # PostBucketRequest | Bucket to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a bucket
        api_response = api_instance.post_buckets(post_bucket_request, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->post_buckets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->post_buckets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_bucket_request** | [**PostBucketRequest**](PostBucketRequest.md)| Bucket to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Bucket**](Bucket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Bucket created |  -  |
**422** | Request body failed validation |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_buckets_id_labels**
> LabelResponse post_buckets_id_labels(bucket_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a bucket

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a bucket
        api_response = api_instance.post_buckets_id_labels(bucket_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->post_buckets_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->post_buckets_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The newly added label |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_buckets_id_members**
> ResourceMember post_buckets_id_members(bucket_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add a member to a bucket

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_member import ResourceMember
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as member
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a member to a bucket
        api_response = api_instance.post_buckets_id_members(bucket_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->post_buckets_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->post_buckets_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as member | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMember**](ResourceMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Member added to bucket |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_buckets_id_owners**
> ResourceOwner post_buckets_id_owners(bucket_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add an owner to a bucket

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_owner import ResourceOwner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BucketsApi(api_client)
    bucket_id = 'bucket_id_example' # str | The bucket ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as owner
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add an owner to a bucket
        api_response = api_instance.post_buckets_id_owners(bucket_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of BucketsApi->post_buckets_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BucketsApi->post_buckets_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucket_id** | **str**| The bucket ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as owner | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwner**](ResourceOwner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Bucket owner added |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

