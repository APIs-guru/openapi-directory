# openapi_client.ProductModuleApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_product_module**](ProductModuleApi.md#create_product_module) | **POST** /productmodule | Create Product Module
[**delete_product_module**](ProductModuleApi.md#delete_product_module) | **DELETE** /productmodule/{productModuleNumber} | Delete Product Module
[**get_product_module**](ProductModuleApi.md#get_product_module) | **GET** /productmodule/{productModuleNumber} | Get Product Module
[**list_product_modules**](ProductModuleApi.md#list_product_modules) | **GET** /productmodule | List Product Modules
[**update_product_module**](ProductModuleApi.md#update_product_module) | **POST** /productmodule/{productModuleNumber} | Update Product Module


# **create_product_module**
> Netlicensing create_product_module(active, licensing_model, name, product_number, license_template=license_template, max_checkout_validity=max_checkout_validity, node_secret_mode=node_secret_mode, number=number, red_threshold=red_threshold, yellow_threshold=yellow_threshold)

Create Product Module

Creates a new Product Module

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
    api_instance = openapi_client.ProductModuleApi(api_client)
    active = True # bool | If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.
    licensing_model = 'licensing_model_example' # str | Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.
    name = 'name_example' # str | Product Module name that is visible to the end customers in NetLicensing Shop.
    product_number = 'product_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
    license_template = TIMEVOLUME # List[str] | License Template. Mandatory for 'Try &amp; Buy' licensing model. (optional) (default to TIMEVOLUME)
    max_checkout_validity = 56 # int | Maximum checkout validity (days). Mandatory for 'Floating' licensing model. (optional)
    node_secret_mode = PREDEFINED # List[str] | Secret Mode. Mandatory for 'Node-Locked' licensing model. (optional) (default to PREDEFINED)
    number = 'number_example' # str | Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. (optional)
    red_threshold = 56 # int | Remaining time volume for red level. Mandatory for 'Rental' licensing model. (optional)
    yellow_threshold = 56 # int | Remaining time volume for yellow level. Mandatory for 'Rental' licensing model. (optional)

    try:
        # Create Product Module
        api_response = api_instance.create_product_module(active, licensing_model, name, product_number, license_template=license_template, max_checkout_validity=max_checkout_validity, node_secret_mode=node_secret_mode, number=number, red_threshold=red_threshold, yellow_threshold=yellow_threshold)
        print("The response of ProductModuleApi->create_product_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModuleApi->create_product_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| If set to &#39;false&#39;, the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module. | 
 **licensing_model** | **str**| Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation. | 
 **name** | **str**| Product Module name that is visible to the end customers in NetLicensing Shop. | 
 **product_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. | 
 **license_template** | [**List[str]**](str.md)| License Template. Mandatory for &#39;Try &amp;amp; Buy&#39; licensing model. | [optional] [default to TIMEVOLUME]
 **max_checkout_validity** | **int**| Maximum checkout validity (days). Mandatory for &#39;Floating&#39; licensing model. | [optional] 
 **node_secret_mode** | [**List[str]**](str.md)| Secret Mode. Mandatory for &#39;Node-Locked&#39; licensing model. | [optional] [default to PREDEFINED]
 **number** | **str**| Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. | [optional] 
 **red_threshold** | **int**| Remaining time volume for red level. Mandatory for &#39;Rental&#39; licensing model. | [optional] 
 **yellow_threshold** | **int**| Remaining time volume for yellow level. Mandatory for &#39;Rental&#39; licensing model. | [optional] 

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

# **delete_product_module**
> Netlicensing delete_product_module(product_module_number, force_cascade=force_cascade)

Delete Product Module

Delete a Product Module by 'number'

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
    api_instance = openapi_client.ProductModuleApi(api_client)
    product_module_number = 'product_module_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Product Module.
    force_cascade = True # bool | Force object deletion and all descendants. (optional)

    try:
        # Delete Product Module
        api_response = api_instance.delete_product_module(product_module_number, force_cascade=force_cascade)
        print("The response of ProductModuleApi->delete_product_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModuleApi->delete_product_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_module_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Product Module. | 
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

# **get_product_module**
> Netlicensing get_product_module(product_module_number)

Get Product Module

Return a Product Module by 'productModuleNumber'

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
    api_instance = openapi_client.ProductModuleApi(api_client)
    product_module_number = 'product_module_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.

    try:
        # Get Product Module
        api_response = api_instance.get_product_module(product_module_number)
        print("The response of ProductModuleApi->get_product_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModuleApi->get_product_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_module_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. | 

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

# **list_product_modules**
> List[Netlicensing] list_product_modules()

List Product Modules

Return a list of all Product Modules for the current Vendor

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
    api_instance = openapi_client.ProductModuleApi(api_client)

    try:
        # List Product Modules
        api_response = api_instance.list_product_modules()
        print("The response of ProductModuleApi->list_product_modules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModuleApi->list_product_modules: %s\n" % e)
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

# **update_product_module**
> Netlicensing update_product_module(product_module_number, active=active, license_template=license_template, licensing_model=licensing_model, max_checkout_validity=max_checkout_validity, name=name, node_secret_mode=node_secret_mode, number=number, red_threshold=red_threshold, yellow_threshold=yellow_threshold)

Update Product Module

Sets the provided properties to a Product Module. Return an updated Product Module

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
    api_instance = openapi_client.ProductModuleApi(api_client)
    product_module_number = 'product_module_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
    active = True # bool | If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module. (optional)
    license_template = TIMEVOLUME # List[str] | License Template. Mandatory for 'Try &amp; Buy' licensing model. (optional) (default to TIMEVOLUME)
    licensing_model = 'licensing_model_example' # str | Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation. (optional)
    max_checkout_validity = 56 # int | Maximum checkout validity (days). Mandatory for 'Floating' licensing model. (optional)
    name = 'name_example' # str | Product Module name that is visible to the end customers in NetLicensing Shop. (optional)
    node_secret_mode = PREDEFINED # List[str] | Secret Mode. Mandatory for 'Node-Locked' licensing model. (optional) (default to PREDEFINED)
    number = 'number_example' # str | New Product Module number (update). (optional)
    red_threshold = 56 # int | Remaining time volume for red level. Mandatory for 'Rental' licensing model. (optional)
    yellow_threshold = 56 # int | Remaining time volume for yellow level. Mandatory for 'Rental' licensing model. (optional)

    try:
        # Update Product Module
        api_response = api_instance.update_product_module(product_module_number, active=active, license_template=license_template, licensing_model=licensing_model, max_checkout_validity=max_checkout_validity, name=name, node_secret_mode=node_secret_mode, number=number, red_threshold=red_threshold, yellow_threshold=yellow_threshold)
        print("The response of ProductModuleApi->update_product_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductModuleApi->update_product_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_module_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product. | 
 **active** | **bool**| If set to &#39;false&#39;, the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module. | [optional] 
 **license_template** | [**List[str]**](str.md)| License Template. Mandatory for &#39;Try &amp;amp; Buy&#39; licensing model. | [optional] [default to TIMEVOLUME]
 **licensing_model** | **str**| Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation. | [optional] 
 **max_checkout_validity** | **int**| Maximum checkout validity (days). Mandatory for &#39;Floating&#39; licensing model. | [optional] 
 **name** | **str**| Product Module name that is visible to the end customers in NetLicensing Shop. | [optional] 
 **node_secret_mode** | [**List[str]**](str.md)| Secret Mode. Mandatory for &#39;Node-Locked&#39; licensing model. | [optional] [default to PREDEFINED]
 **number** | **str**| New Product Module number (update). | [optional] 
 **red_threshold** | **int**| Remaining time volume for red level. Mandatory for &#39;Rental&#39; licensing model. | [optional] 
 **yellow_threshold** | **int**| Remaining time volume for yellow level. Mandatory for &#39;Rental&#39; licensing model. | [optional] 

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

