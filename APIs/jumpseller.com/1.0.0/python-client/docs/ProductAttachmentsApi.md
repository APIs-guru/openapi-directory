# openapi_client.ProductAttachmentsApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_id_attachments_attachment_id_json_delete**](ProductAttachmentsApi.md#products_id_attachments_attachment_id_json_delete) | **DELETE** /products/{id}/attachments/{attachment_id}.json | Delete a Product Attachment.
[**products_id_attachments_attachment_id_json_get**](ProductAttachmentsApi.md#products_id_attachments_attachment_id_json_get) | **GET** /products/{id}/attachments/{attachment_id}.json | Retrieve a single Product Attachment.
[**products_id_attachments_count_json_get**](ProductAttachmentsApi.md#products_id_attachments_count_json_get) | **GET** /products/{id}/attachments/count.json | Count all Product Attachments.
[**products_id_attachments_json_get**](ProductAttachmentsApi.md#products_id_attachments_json_get) | **GET** /products/{id}/attachments.json | Retrieve all Product Attachments.
[**products_id_attachments_json_post**](ProductAttachmentsApi.md#products_id_attachments_json_post) | **POST** /products/{id}/attachments.json | Create a new Product Attachment.


# **products_id_attachments_attachment_id_json_delete**
> str products_id_attachments_attachment_id_json_delete(login, authtoken, id, attachment_id)

Delete a Product Attachment.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductAttachmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    attachment_id = 56 # int | Id of the Product Attachment

    try:
        # Delete a Product Attachment.
        api_response = api_instance.products_id_attachments_attachment_id_json_delete(login, authtoken, id, attachment_id)
        print("The response of ProductAttachmentsApi->products_id_attachments_attachment_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductAttachmentsApi->products_id_attachments_attachment_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **attachment_id** | **int**| Id of the Product Attachment | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_attachments_attachment_id_json_get**
> Attachment products_id_attachments_attachment_id_json_get(login, authtoken, id, attachment_id)

Retrieve a single Product Attachment.

### Example


```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductAttachmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    attachment_id = 56 # int | Id of the Product Attachment

    try:
        # Retrieve a single Product Attachment.
        api_response = api_instance.products_id_attachments_attachment_id_json_get(login, authtoken, id, attachment_id)
        print("The response of ProductAttachmentsApi->products_id_attachments_attachment_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductAttachmentsApi->products_id_attachments_attachment_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **attachment_id** | **int**| Id of the Product Attachment | 

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
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_attachments_count_json_get**
> Count products_id_attachments_count_json_get(login, authtoken, id)

Count all Product Attachments.

### Example


```python
import openapi_client
from openapi_client.models.count import Count
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductAttachmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Count all Product Attachments.
        api_response = api_instance.products_id_attachments_count_json_get(login, authtoken, id)
        print("The response of ProductAttachmentsApi->products_id_attachments_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductAttachmentsApi->products_id_attachments_count_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 

### Return type

[**Count**](Count.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_attachments_json_get**
> List[Attachment] products_id_attachments_json_get(login, authtoken, id)

Retrieve all Product Attachments.

### Example


```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductAttachmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Retrieve all Product Attachments.
        api_response = api_instance.products_id_attachments_json_get(login, authtoken, id)
        print("The response of ProductAttachmentsApi->products_id_attachments_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductAttachmentsApi->products_id_attachments_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 

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
**200** | OK |  -  |
**404** | Product Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_id_attachments_json_post**
> Attachment products_id_attachments_json_post(login, authtoken, id, attachment_edit)

Create a new Product Attachment.

### Example


```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.models.attachment_edit import AttachmentEdit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.jumpseller.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.jumpseller.com/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductAttachmentsApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    attachment_edit = openapi_client.AttachmentEdit() # AttachmentEdit | Product Attachment parameters.

    try:
        # Create a new Product Attachment.
        api_response = api_instance.products_id_attachments_json_post(login, authtoken, id, attachment_edit)
        print("The response of ProductAttachmentsApi->products_id_attachments_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductAttachmentsApi->products_id_attachments_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **attachment_edit** | [**AttachmentEdit**](AttachmentEdit.md)| Product Attachment parameters. | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

