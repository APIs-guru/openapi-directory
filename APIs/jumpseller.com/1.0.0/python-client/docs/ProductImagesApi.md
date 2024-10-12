# openapi_client.ProductImagesApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_id_images_count_json_get**](ProductImagesApi.md#products_id_images_count_json_get) | **GET** /products/{id}/images/count.json | Count all Product Images.
[**products_id_images_image_id_json_delete**](ProductImagesApi.md#products_id_images_image_id_json_delete) | **DELETE** /products/{id}/images/{image_id}.json | Delete a Product Image.
[**products_id_images_image_id_json_get**](ProductImagesApi.md#products_id_images_image_id_json_get) | **GET** /products/{id}/images/{image_id}.json | Retrieve a single Product Image.
[**products_id_images_json_get**](ProductImagesApi.md#products_id_images_json_get) | **GET** /products/{id}/images.json | Retrieve all Product Images.
[**products_id_images_json_post**](ProductImagesApi.md#products_id_images_json_post) | **POST** /products/{id}/images.json | Create a new Product Image.


# **products_id_images_count_json_get**
> Count products_id_images_count_json_get(login, authtoken, id)

Count all Product Images.

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
    api_instance = openapi_client.ProductImagesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Count all Product Images.
        api_response = api_instance.products_id_images_count_json_get(login, authtoken, id)
        print("The response of ProductImagesApi->products_id_images_count_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductImagesApi->products_id_images_count_json_get: %s\n" % e)
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

# **products_id_images_image_id_json_delete**
> str products_id_images_image_id_json_delete(login, authtoken, id, image_id)

Delete a Product Image.

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
    api_instance = openapi_client.ProductImagesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    image_id = 56 # int | Id of the Product Image

    try:
        # Delete a Product Image.
        api_response = api_instance.products_id_images_image_id_json_delete(login, authtoken, id, image_id)
        print("The response of ProductImagesApi->products_id_images_image_id_json_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductImagesApi->products_id_images_image_id_json_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **image_id** | **int**| Id of the Product Image | 

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

# **products_id_images_image_id_json_get**
> Image products_id_images_image_id_json_get(login, authtoken, id, image_id)

Retrieve a single Product Image.

### Example


```python
import openapi_client
from openapi_client.models.image import Image
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
    api_instance = openapi_client.ProductImagesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    image_id = 56 # int | Id of the Product Image

    try:
        # Retrieve a single Product Image.
        api_response = api_instance.products_id_images_image_id_json_get(login, authtoken, id, image_id)
        print("The response of ProductImagesApi->products_id_images_image_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductImagesApi->products_id_images_image_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **image_id** | **int**| Id of the Product Image | 

### Return type

[**Image**](Image.md)

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

# **products_id_images_json_get**
> List[Image] products_id_images_json_get(login, authtoken, id)

Retrieve all Product Images.

### Example


```python
import openapi_client
from openapi_client.models.image import Image
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
    api_instance = openapi_client.ProductImagesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | ID of the Product

    try:
        # Retrieve all Product Images.
        api_response = api_instance.products_id_images_json_get(login, authtoken, id)
        print("The response of ProductImagesApi->products_id_images_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductImagesApi->products_id_images_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| ID of the Product | 

### Return type

[**List[Image]**](Image.md)

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

# **products_id_images_json_post**
> Image products_id_images_json_post(login, authtoken, id, image_edit)

Create a new Product Image.

### Example


```python
import openapi_client
from openapi_client.models.image import Image
from openapi_client.models.image_edit import ImageEdit
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
    api_instance = openapi_client.ProductImagesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Product
    image_edit = openapi_client.ImageEdit() # ImageEdit | Product Image parameters.

    try:
        # Create a new Product Image.
        api_response = api_instance.products_id_images_json_post(login, authtoken, id, image_edit)
        print("The response of ProductImagesApi->products_id_images_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductImagesApi->products_id_images_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Product | 
 **image_edit** | [**ImageEdit**](ImageEdit.md)| Product Image parameters. | 

### Return type

[**Image**](Image.md)

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

