# openapi_client.TokenApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_token**](TokenApi.md#create_token) | **POST** /token | Create token
[**delete_token**](TokenApi.md#delete_token) | **DELETE** /token/{tokenNumber} | Delete token
[**get_token**](TokenApi.md#get_token) | **GET** /token/{tokenNumber} | Get token
[**list_tokens**](TokenApi.md#list_tokens) | **GET** /token | List Tokens


# **create_token**
> Netlicensing create_token(token_type, action=action, api_key_role=api_key_role, cancel_url=cancel_url, cancel_url_title=cancel_url_title, license_template_number=license_template_number, licensee_number=licensee_number, predefined_shopping_item=predefined_shopping_item, private_key=private_key, product_number=product_number, success_url=success_url, success_url_title=success_url_title, type=type)

Create token

Create token by 'tokenType' and additional token parameters

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokenApi(api_client)
    token_type = 'token_type_example' # str | Token type to be generated
    action = 'action_example' # str | For <i>type=ACTION</i> only; defines token action to be perfromed (optional)
    api_key_role = 'api_key_role_example' # str | For <i>tokenType=APIKEY</i> only (default: ROLE_APIKEY_LICENSEE); defines token RoleID (optional)
    cancel_url = 'cancel_url_example' # str | For <i>tokenType=SHOP</i> only; take customers to this URL when they cancel their checkout (optional)
    cancel_url_title = 'cancel_url_title_example' # str | For <i>tokenType=SHOP</i> only; shop link title for cancel checkout process (optional)
    license_template_number = 'license_template_number_example' # str | For <i>tokenType=SHOP</i> only; identifies LicenseTemplate that will be assigned to the shop token (optional)
    licensee_number = 'licensee_number_example' # str | For <i>tokenType=SHOP</i> or <i>type=ACTION</i> only (mandatory); identifies Licensee that will be assigned to the shop token (optional)
    predefined_shopping_item = 'predefined_shopping_item_example' # str | For <i>tokenType=SHOP</i> only; identifies Shopping Item name that will be shown to the customer (optional)
    private_key = 'private_key_example' # str | For <i>tokenType=APIKEY</i> only (optional); defines PrivateKey to be used with the validate method<br/><strong>Please Note:</strong> PrivateKey need to be provided as one line without spaces (optional)
    product_number = 'product_number_example' # str | For <i>tokenType=SHOP</i> only (mandatory); identifies Product that will be assigned to the shop token (optional)
    success_url = 'success_url_example' # str | For <i>tokenType=SHOP</i> only; take customers to this URL when they finish checkout (optional)
    success_url_title = 'success_url_title_example' # str | For <i>tokenType=SHOP</i> only; shop link title for successful checkout process (optional)
    type = 'type_example' # str | For <i>tokenType=DEFAULT</i> only; action type to be set (optional)

    try:
        # Create token
        api_response = api_instance.create_token(token_type, action=action, api_key_role=api_key_role, cancel_url=cancel_url, cancel_url_title=cancel_url_title, license_template_number=license_template_number, licensee_number=licensee_number, predefined_shopping_item=predefined_shopping_item, private_key=private_key, product_number=product_number, success_url=success_url, success_url_title=success_url_title, type=type)
        print("The response of TokenApi->create_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->create_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_type** | **str**| Token type to be generated | 
 **action** | **str**| For &lt;i&gt;type&#x3D;ACTION&lt;/i&gt; only; defines token action to be perfromed | [optional] 
 **api_key_role** | **str**| For &lt;i&gt;tokenType&#x3D;APIKEY&lt;/i&gt; only (default: ROLE_APIKEY_LICENSEE); defines token RoleID | [optional] 
 **cancel_url** | **str**| For &lt;i&gt;tokenType&#x3D;SHOP&lt;/i&gt; only; take customers to this URL when they cancel their checkout | [optional] 
 **cancel_url_title** | **str**| For &lt;i&gt;tokenType&#x3D;SHOP&lt;/i&gt; only; shop link title for cancel checkout process | [optional] 
 **license_template_number** | **str**| For &lt;i&gt;tokenType&#x3D;SHOP&lt;/i&gt; only; identifies LicenseTemplate that will be assigned to the shop token | [optional] 
 **licensee_number** | **str**| For &lt;i&gt;tokenType&#x3D;SHOP&lt;/i&gt; or &lt;i&gt;type&#x3D;ACTION&lt;/i&gt; only (mandatory); identifies Licensee that will be assigned to the shop token | [optional] 
 **predefined_shopping_item** | **str**| For &lt;i&gt;tokenType&#x3D;SHOP&lt;/i&gt; only; identifies Shopping Item name that will be shown to the customer | [optional] 
 **private_key** | **str**| For &lt;i&gt;tokenType&#x3D;APIKEY&lt;/i&gt; only (optional); defines PrivateKey to be used with the validate method&lt;br/&gt;&lt;strong&gt;Please Note:&lt;/strong&gt; PrivateKey need to be provided as one line without spaces | [optional] 
 **product_number** | **str**| For &lt;i&gt;tokenType&#x3D;SHOP&lt;/i&gt; only (mandatory); identifies Product that will be assigned to the shop token | [optional] 
 **success_url** | **str**| For &lt;i&gt;tokenType&#x3D;SHOP&lt;/i&gt; only; take customers to this URL when they finish checkout | [optional] 
 **success_url_title** | **str**| For &lt;i&gt;tokenType&#x3D;SHOP&lt;/i&gt; only; shop link title for successful checkout process | [optional] 
 **type** | **str**| For &lt;i&gt;tokenType&#x3D;DEFAULT&lt;/i&gt; only; action type to be set | [optional] 

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_token**
> Netlicensing delete_token(token_number)

Delete token

Delete a token by 'number'

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokenApi(api_client)
    token_number = 'token_number_example' # str | Token number

    try:
        # Delete token
        api_response = api_instance.delete_token(token_number)
        print("The response of TokenApi->delete_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->delete_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_number** | **str**| Token number | 

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_token**
> Netlicensing get_token(token_number)

Get token

Return a token by 'tokenNumber'

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokenApi(api_client)
    token_number = 'token_number_example' # str | Token number

    try:
        # Get token
        api_response = api_instance.get_token(token_number)
        print("The response of TokenApi->get_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->get_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_number** | **str**| Token number | 

### Return type

[**Netlicensing**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_tokens**
> List[Netlicensing] list_tokens()

List Tokens

Return a list of all tokens for the current Vendor

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.netlicensing import Netlicensing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go.netlicensing.io/core/v2/rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go.netlicensing.io/core/v2/rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TokenApi(api_client)

    try:
        # List Tokens
        api_response = api_instance.list_tokens()
        print("The response of TokenApi->list_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TokenApi->list_tokens: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Netlicensing]**](Netlicensing.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request |  -  |
**400** | Malformed or illegal request |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

