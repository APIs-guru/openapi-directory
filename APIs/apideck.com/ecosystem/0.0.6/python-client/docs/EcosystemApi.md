# openapi_client.EcosystemApi

All URIs are relative to *https://api.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ecosystems_one**](EcosystemApi.md#ecosystems_one) | **GET** /ecosystems/{ecosystem_id} | Get ecosystem


# **ecosystems_one**
> GetEcosystemResponse ecosystems_one(ecosystem_id)

Get ecosystem

Get ecosystem

### Example


```python
import openapi_client
from openapi_client.models.get_ecosystem_response import GetEcosystemResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.apideck.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EcosystemApi(api_client)
    ecosystem_id = 'ecosystem_id_example' # str | 

    try:
        # Get ecosystem
        api_response = api_instance.ecosystems_one(ecosystem_id)
        print("The response of EcosystemApi->ecosystems_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EcosystemApi->ecosystems_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem_id** | **str**|  | 

### Return type

[**GetEcosystemResponse**](GetEcosystemResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ecosystems |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

