# openapi_client.AttachmentsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachments_id_delete**](AttachmentsApi.md#attachments_id_delete) | **DELETE** /attachments/{id} | Delete attachment
[**maps_id_attachments_get**](AttachmentsApi.md#maps_id_attachments_get) | **GET** /maps/{id}/attachments | List attachments for a given map
[**maps_id_attachments_post**](AttachmentsApi.md#maps_id_attachments_post) | **POST** /maps/{id}/attachments | Upload map attachment
[**spots_id_attachments_get**](AttachmentsApi.md#spots_id_attachments_get) | **GET** /spots/{id}/attachments | List attachments for a given spot
[**spots_id_attachments_post**](AttachmentsApi.md#spots_id_attachments_post) | **POST** /spots/{id}/attachments | Upload spot attachment


# **attachments_id_delete**
> Attachment attachments_id_delete(id)

Delete attachment

Delete attachment.

### Example


```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachmentsApi(api_client)
    id = 56 # int | Attachment id

    try:
        # Delete attachment
        api_response = api_instance.attachments_id_delete(id)
        print("The response of AttachmentsApi->attachments_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttachmentsApi->attachments_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Attachment id | 

### Return type

[**Attachment**](Attachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains deleted attachment. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_attachments_get**
> List[Attachment] maps_id_attachments_get(id)

List attachments for a given map

List attachments for a given map.

### Example


```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachmentsApi(api_client)
    id = 56 # int | Map id

    try:
        # List attachments for a given map
        api_response = api_instance.maps_id_attachments_get(id)
        print("The response of AttachmentsApi->maps_id_attachments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttachmentsApi->maps_id_attachments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Map id | 

### Return type

[**List[Attachment]**](Attachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of attachments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_attachments_post**
> Attachment maps_id_attachments_post(id, image)

Upload map attachment

Upload map attachment. Wrap attachment parameters in [attachment]

### Example


```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachmentsApi(api_client)
    id = 56 # int | Map id
    image = 'image_example' # str | Base64 encoded image

    try:
        # Upload map attachment
        api_response = api_instance.maps_id_attachments_post(id, image)
        print("The response of AttachmentsApi->maps_id_attachments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttachmentsApi->maps_id_attachments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Map id | 
 **image** | **str**| Base64 encoded image | 

### Return type

[**Attachment**](Attachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains attachment data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_attachments_get**
> List[Attachment] spots_id_attachments_get(id)

List attachments for a given spot

List attachments for a given spot.

### Example


```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachmentsApi(api_client)
    id = 56 # int | Spot id

    try:
        # List attachments for a given spot
        api_response = api_instance.spots_id_attachments_get(id)
        print("The response of AttachmentsApi->spots_id_attachments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttachmentsApi->spots_id_attachments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Spot id | 

### Return type

[**List[Attachment]**](Attachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of attachments. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_attachments_post**
> Attachment spots_id_attachments_post(id, image)

Upload spot attachment

Upload spot attachment. Wrap attachment parameters in [attachment]

### Example


```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttachmentsApi(api_client)
    id = 56 # int | Spot id
    image = 'image_example' # str | Base64 encoded image

    try:
        # Upload spot attachment
        api_response = api_instance.spots_id_attachments_post(id, image)
        print("The response of AttachmentsApi->spots_id_attachments_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttachmentsApi->spots_id_attachments_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Spot id | 
 **image** | **str**| Base64 encoded image | 

### Return type

[**Attachment**](Attachment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains attachment data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

