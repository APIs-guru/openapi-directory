# openapi_client.TaxesApi

All URIs are relative to *https://api.jumpseller.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxes_id_json_get**](TaxesApi.md#taxes_id_json_get) | **GET** /taxes/{id}.json | Retrieve a single Tax information.
[**taxes_json_get**](TaxesApi.md#taxes_json_get) | **GET** /taxes.json | Retrieve all Taxes.
[**taxes_json_post**](TaxesApi.md#taxes_json_post) | **POST** /taxes.json | Create a new Tax.


# **taxes_id_json_get**
> Tax taxes_id_json_get(login, authtoken, id)

Retrieve a single Tax information.

### Example


```python
import openapi_client
from openapi_client.models.tax import Tax
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
    api_instance = openapi_client.TaxesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    id = 56 # int | Id of the Tax

    try:
        # Retrieve a single Tax information.
        api_response = api_instance.taxes_id_json_get(login, authtoken, id)
        print("The response of TaxesApi->taxes_id_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxesApi->taxes_id_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **id** | **int**| Id of the Tax | 

### Return type

[**Tax**](Tax.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Tax information object |  -  |
**404** | Tax Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **taxes_json_get**
> List[Tax] taxes_json_get(login, authtoken)

Retrieve all Taxes.

### Example


```python
import openapi_client
from openapi_client.models.tax import Tax
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
    api_instance = openapi_client.TaxesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.

    try:
        # Retrieve all Taxes.
        api_response = api_instance.taxes_json_get(login, authtoken)
        print("The response of TaxesApi->taxes_json_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxesApi->taxes_json_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 

### Return type

[**List[Tax]**](Tax.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Taxes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **taxes_json_post**
> Tax taxes_json_post(login, authtoken, tax_edit)

Create a new Tax.

### Example


```python
import openapi_client
from openapi_client.models.tax import Tax
from openapi_client.models.tax_edit import TaxEdit
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
    api_instance = openapi_client.TaxesApi(api_client)
    login = 'login_example' # str | API OAuth login.
    authtoken = 'authtoken_example' # str | API OAuth token.
    tax_edit = openapi_client.TaxEdit() # TaxEdit | Tax parameters.

    try:
        # Create a new Tax.
        api_response = api_instance.taxes_json_post(login, authtoken, tax_edit)
        print("The response of TaxesApi->taxes_json_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxesApi->taxes_json_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**| API OAuth login. | 
 **authtoken** | **str**| API OAuth token. | 
 **tax_edit** | [**TaxEdit**](TaxEdit.md)| Tax parameters. | 

### Return type

[**Tax**](Tax.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Tax Not Found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

