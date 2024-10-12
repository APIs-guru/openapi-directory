# openapi_client.StoresApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stores_one**](StoresApi.md#stores_one) | **GET** /ecommerce/store | Get Store


# **stores_one**
> GetStoreResponse stores_one(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw, fields=fields)

Get Store

Get Store

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_store_response import GetStoreResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StoresApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # Get Store
        api_response = api_instance.stores_one(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw, fields=fields)
        print("The response of StoresApi->stores_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StoresApi->stores_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetStoreResponse**](GetStoreResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stores |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

