# openapi_client.TaxApi

All URIs are relative to *https://api.api2cart.com/v1.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tax_class_info**](TaxApi.md#tax_class_info) | **GET** /tax.class.info.json | 


# **tax_class_info**
> TaxClassInfo200Response tax_class_info(tax_class_id, store_id=store_id, lang_id=lang_id, params=params, response_fields=response_fields, exclude=exclude)



Get info about tax

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (store_key):

```python
import openapi_client
from openapi_client.models.tax_class_info200_response import TaxClassInfo200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.api2cart.com/v1.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.api2cart.com/v1.1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: store_key
configuration.api_key['store_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['store_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TaxApi(api_client)
    tax_class_id = 'tax_class_id_example' # str | Retrieves taxes specified by class id
    store_id = 'store_id_example' # str | Store Id (optional)
    lang_id = 'lang_id_example' # str | Language id (optional)
    params = 'tax_class_id,name,avail' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional) (default to 'tax_class_id,name,avail')
    response_fields = 'response_fields_example' # str | Set this parameter in order to choose which entity fields you want to retrieve (optional)
    exclude = 'exclude_example' # str | Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter `params` equal force_all (optional)

    try:
        api_response = api_instance.tax_class_info(tax_class_id, store_id=store_id, lang_id=lang_id, params=params, response_fields=response_fields, exclude=exclude)
        print("The response of TaxApi->tax_class_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxApi->tax_class_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tax_class_id** | **str**| Retrieves taxes specified by class id | 
 **store_id** | **str**| Store Id | [optional] 
 **lang_id** | **str**| Language id | [optional] 
 **params** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] [default to &#39;tax_class_id,name,avail&#39;]
 **response_fields** | **str**| Set this parameter in order to choose which entity fields you want to retrieve | [optional] 
 **exclude** | **str**| Set this parameter in order to choose which entity fields you want to ignore. Works only if parameter &#x60;params&#x60; equal force_all | [optional] 

### Return type

[**TaxClassInfo200Response**](TaxClassInfo200Response.md)

### Authorization

[api_key](../README.md#api_key), [store_key](../README.md#store_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

