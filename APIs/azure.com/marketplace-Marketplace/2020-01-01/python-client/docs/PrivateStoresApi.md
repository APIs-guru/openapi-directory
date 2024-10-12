# openapi_client.PrivateStoresApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**private_store_create_or_update**](PrivateStoresApi.md#private_store_create_or_update) | **PUT** /providers/Microsoft.Marketplace/privateStores/{PrivateStoreId} | 
[**private_store_delete**](PrivateStoresApi.md#private_store_delete) | **DELETE** /providers/Microsoft.Marketplace/privateStores/{PrivateStoreId} | 
[**private_store_get**](PrivateStoresApi.md#private_store_get) | **GET** /providers/Microsoft.Marketplace/privateStores/{PrivateStoreId} | 
[**private_store_list**](PrivateStoresApi.md#private_store_list) | **GET** /providers/Microsoft.Marketplace/privateStores | 
[**private_store_offer_create_or_update**](PrivateStoresApi.md#private_store_offer_create_or_update) | **PUT** /providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId} | 
[**private_store_offer_delete**](PrivateStoresApi.md#private_store_offer_delete) | **DELETE** /providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId} | 
[**private_store_offer_get**](PrivateStoresApi.md#private_store_offer_get) | **GET** /providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers/{OfferId} | 
[**private_store_offers_list**](PrivateStoresApi.md#private_store_offers_list) | **GET** /providers/Microsoft.Marketplace/privateStores/{PrivateStoreId}/offers | 


# **private_store_create_or_update**
> PrivateStoreProperties private_store_create_or_update(private_store_id, api_version, payload=payload)



Changes private store properties

### Example


```python
import openapi_client
from openapi_client.models.private_store_properties import PrivateStoreProperties
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateStoresApi(api_client)
    private_store_id = 'private_store_id_example' # str | The store ID - must use the tenant ID
    api_version = 'api_version_example' # str | The API version to use for the request.
    payload = openapi_client.PrivateStoreProperties() # PrivateStoreProperties |  (optional)

    try:
        api_response = api_instance.private_store_create_or_update(private_store_id, api_version, payload=payload)
        print("The response of PrivateStoresApi->private_store_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateStoresApi->private_store_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **private_store_id** | **str**| The store ID - must use the tenant ID | 
 **api_version** | **str**| The API version to use for the request. | 
 **payload** | [**PrivateStoreProperties**](PrivateStoreProperties.md)|  | [optional] 

### Return type

[**PrivateStoreProperties**](PrivateStoreProperties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Change successful |  -  |
**0** | Microsoft.Marketplace error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_store_delete**
> private_store_delete(private_store_id, api_version)



Deletes the private store. All that is not saved will be lost.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateStoresApi(api_client)
    private_store_id = 'private_store_id_example' # str | The store ID - must use the tenant ID
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.private_store_delete(private_store_id, api_version)
    except Exception as e:
        print("Exception when calling PrivateStoresApi->private_store_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **private_store_id** | **str**| The store ID - must use the tenant ID | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | Private store was deleted successfully . |  -  |
**0** | Microsoft.Marketplace error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_store_get**
> PrivateStoreProperties private_store_get(private_store_id, api_version)



Get information about the private store

### Example


```python
import openapi_client
from openapi_client.models.private_store_properties import PrivateStoreProperties
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateStoresApi(api_client)
    private_store_id = 'private_store_id_example' # str | The store ID - must use the tenant ID
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.private_store_get(private_store_id, api_version)
        print("The response of PrivateStoresApi->private_store_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateStoresApi->private_store_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **private_store_id** | **str**| The store ID - must use the tenant ID | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**PrivateStoreProperties**](PrivateStoreProperties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Microsoft.Marketplace error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_store_list**
> PrivateStoreList private_store_list(api_version)



Gets the list of available private stores

### Example


```python
import openapi_client
from openapi_client.models.private_store_list import PrivateStoreList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateStoresApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.private_store_list(api_version)
        print("The response of PrivateStoresApi->private_store_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateStoresApi->private_store_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**PrivateStoreList**](PrivateStoreList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_store_offer_create_or_update**
> Offer private_store_offer_create_or_update(offer_id, private_store_id, api_version, payload=payload)



Update or add an offer to the default collection of the private store.

### Example


```python
import openapi_client
from openapi_client.models.offer import Offer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateStoresApi(api_client)
    offer_id = 'offer_id_example' # str | The offer ID to update or delete
    private_store_id = 'private_store_id_example' # str | The store ID - must use the tenant ID
    api_version = 'api_version_example' # str | The API version to use for the request.
    payload = openapi_client.Offer() # Offer |  (optional)

    try:
        api_response = api_instance.private_store_offer_create_or_update(offer_id, private_store_id, api_version, payload=payload)
        print("The response of PrivateStoresApi->private_store_offer_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateStoresApi->private_store_offer_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offer_id** | **str**| The offer ID to update or delete | 
 **private_store_id** | **str**| The store ID - must use the tenant ID | 
 **api_version** | **str**| The API version to use for the request. | 
 **payload** | [**Offer**](Offer.md)|  | [optional] 

### Return type

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Microsoft.Marketplace error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_store_offer_delete**
> private_store_offer_delete(offer_id, private_store_id, api_version)



Deletes an offer from the given private store.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateStoresApi(api_client)
    offer_id = 'offer_id_example' # str | The offer ID to update or delete
    private_store_id = 'private_store_id_example' # str | The store ID - must use the tenant ID
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.private_store_offer_delete(offer_id, private_store_id, api_version)
    except Exception as e:
        print("Exception when calling PrivateStoresApi->private_store_offer_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offer_id** | **str**| The offer ID to update or delete | 
 **private_store_id** | **str**| The store ID - must use the tenant ID | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Offer was deleted successfully |  -  |
**0** | Microsoft.Marketplace error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_store_offer_get**
> Offer private_store_offer_get(offer_id, private_store_id, api_version)



Gets information about a specific offer.

### Example


```python
import openapi_client
from openapi_client.models.offer import Offer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateStoresApi(api_client)
    offer_id = 'offer_id_example' # str | The offer ID to update or delete
    private_store_id = 'private_store_id_example' # str | The store ID - must use the tenant ID
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.private_store_offer_get(offer_id, private_store_id, api_version)
        print("The response of PrivateStoresApi->private_store_offer_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateStoresApi->private_store_offer_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offer_id** | **str**| The offer ID to update or delete | 
 **private_store_id** | **str**| The store ID - must use the tenant ID | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**Offer**](Offer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Offer information retrieved |  -  |
**0** | Microsoft.Marketplace error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **private_store_offers_list**
> OfferListResponse private_store_offers_list(private_store_id, api_version)



Get a list of all private offers in the given private store

### Example


```python
import openapi_client
from openapi_client.models.offer_list_response import OfferListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PrivateStoresApi(api_client)
    private_store_id = 'private_store_id_example' # str | The store ID - must use the tenant ID
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.private_store_offers_list(private_store_id, api_version)
        print("The response of PrivateStoresApi->private_store_offers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateStoresApi->private_store_offers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **private_store_id** | **str**| The store ID - must use the tenant ID | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**OfferListResponse**](OfferListResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Microsoft.Marketplace error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

