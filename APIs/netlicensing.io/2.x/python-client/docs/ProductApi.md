# openapi_client.ProductApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_product**](ProductApi.md#create_product) | **POST** /product | Create Product
[**delete_product**](ProductApi.md#delete_product) | **DELETE** /product/{productNumber} | Delete Product
[**list_products**](ProductApi.md#list_products) | **GET** /product | List Products
[**product_number**](ProductApi.md#product_number) | **GET** /product/{productNumber} | Get Product
[**update_product**](ProductApi.md#update_product) | **POST** /product/{productNumber} | Update Product


# **create_product**
> Netlicensing create_product(active, name, version, description=description, licensee_auto_create=licensee_auto_create, licensing_info=licensing_info, number=number, vat_mode=vat_mode)

Create Product

Creates a new Product

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
    api_instance = openapi_client.ProductApi(api_client)
    active = True # bool | If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.
    name = 'name_example' # str | Product name. Together with the version identifies the Product for the end customer.
    version = 'version_example' # str | Product version. Convenience parameter, additional to the Product name.
    description = 'description_example' # str | Product description. (optional)
    licensee_auto_create = True # bool | If set to 'true', non-existing Licensees will be created at first validation attempt. (optional)
    licensing_info = 'licensing_info_example' # str | Licensing information. (optional)
    number = 'number_example' # str | Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one. (optional)
    vat_mode = 'vat_mode_example' # str | Vat mode for Product. Supported types: GROSS, NET (optional)

    try:
        # Create Product
        api_response = api_instance.create_product(active, name, version, description=description, licensee_auto_create=licensee_auto_create, licensing_info=licensing_info, number=number, vat_mode=vat_mode)
        print("The response of ProductApi->create_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->create_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| If set to &#39;false&#39;, the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses. | 
 **name** | **str**| Product name. Together with the version identifies the Product for the end customer. | 
 **version** | **str**| Product version. Convenience parameter, additional to the Product name. | 
 **description** | **str**| Product description. | [optional] 
 **licensee_auto_create** | **bool**| If set to &#39;true&#39;, non-existing Licensees will be created at first validation attempt. | [optional] 
 **licensing_info** | **str**| Licensing information. | [optional] 
 **number** | **str**| Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one. | [optional] 
 **vat_mode** | **str**| Vat mode for Product. Supported types: GROSS, NET | [optional] 

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
**402** | Quota exceeded |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_product**
> Netlicensing delete_product(product_number, force_cascade=force_cascade)

Delete Product

Delete a Product by 'number'

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
    api_instance = openapi_client.ProductApi(api_client)
    product_number = 'product_number_example' # str | Unique number that identifies the Product.
    force_cascade = True # bool | Force object deletion and all descendants. (optional)

    try:
        # Delete Product
        api_response = api_instance.delete_product(product_number, force_cascade=force_cascade)
        print("The response of ProductApi->delete_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->delete_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_number** | **str**| Unique number that identifies the Product. | 
 **force_cascade** | **bool**| Force object deletion and all descendants. | [optional] 

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

# **list_products**
> List[Netlicensing] list_products()

List Products

Return a list of all configured Products for the current Vendor

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
    api_instance = openapi_client.ProductApi(api_client)

    try:
        # List Products
        api_response = api_instance.list_products()
        print("The response of ProductApi->list_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->list_products: %s\n" % e)
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

# **product_number**
> Netlicensing product_number(product_number)

Get Product

Return a Product by 'productNumber'

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
    api_instance = openapi_client.ProductApi(api_client)
    product_number = 'product_number_example' # str | Unique number that identifies the Product.

    try:
        # Get Product
        api_response = api_instance.product_number(product_number)
        print("The response of ProductApi->product_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->product_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_number** | **str**| Unique number that identifies the Product. | 

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

# **update_product**
> Netlicensing update_product(product_number, active=active, description=description, licensee_auto_create=licensee_auto_create, licensing_info=licensing_info, name=name, number=number, vat_mode=vat_mode, version=version)

Update Product

Sets the provided properties to a Product. Return an updated Product

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
    api_instance = openapi_client.ProductApi(api_client)
    product_number = 'product_number_example' # str | Unique number that identifies the Product.
    active = True # bool | If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses. (optional)
    description = 'description_example' # str | Product description. (optional)
    licensee_auto_create = True # bool | If set to 'true', non-existing Licensees will be created at first validation attempt. (optional)
    licensing_info = 'licensing_info_example' # str | Licensing information. (optional)
    name = 'name_example' # str | Product name. Together with the version identifies the Product for the end customer. (optional)
    number = 'number_example' # str | New Product number (update) (optional)
    vat_mode = 'vat_mode_example' # str | Vat mode for Product. Supported types: GROSS, NET (optional)
    version = 'version_example' # str | Product version. Convenience parameter, additional to the Product name. (optional)

    try:
        # Update Product
        api_response = api_instance.update_product(product_number, active=active, description=description, licensee_auto_create=licensee_auto_create, licensing_info=licensing_info, name=name, number=number, vat_mode=vat_mode, version=version)
        print("The response of ProductApi->update_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->update_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_number** | **str**| Unique number that identifies the Product. | 
 **active** | **bool**| If set to &#39;false&#39;, the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses. | [optional] 
 **description** | **str**| Product description. | [optional] 
 **licensee_auto_create** | **bool**| If set to &#39;true&#39;, non-existing Licensees will be created at first validation attempt. | [optional] 
 **licensing_info** | **str**| Licensing information. | [optional] 
 **name** | **str**| Product name. Together with the version identifies the Product for the end customer. | [optional] 
 **number** | **str**| New Product number (update) | [optional] 
 **vat_mode** | **str**| Vat mode for Product. Supported types: GROSS, NET | [optional] 
 **version** | **str**| Product version. Convenience parameter, additional to the Product name. | [optional] 

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
**402** | Quota exceeded |  -  |
**403** | Access is denied |  -  |
**404** | Resource not found |  -  |
**500** | Internal service error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

