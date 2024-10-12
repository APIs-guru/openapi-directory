# openapi_client.LicenseeApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_licensee**](LicenseeApi.md#create_licensee) | **POST** /licensee | Create Licensee
[**delete_licensee**](LicenseeApi.md#delete_licensee) | **DELETE** /licensee/{licenseeNumber} | Delete Licensee
[**get_licensee**](LicenseeApi.md#get_licensee) | **GET** /licensee/{licenseeNumber} | Get Licensee
[**list_licensees**](LicenseeApi.md#list_licensees) | **GET** /licensee | List Licensees
[**transfer_licenses**](LicenseeApi.md#transfer_licenses) | **POST** /licensee/{licenseeNumber}/transfer | Transfer Licenses
[**update_licensee**](LicenseeApi.md#update_licensee) | **POST** /licensee/{licenseeNumber} | Update Licensee
[**validate_licensee**](LicenseeApi.md#validate_licensee) | **POST** /licensee/{licenseeNumber}/validate | Validate Licensee


# **create_licensee**
> Netlicensing create_licensee(active, product_number, marked_for_transfer=marked_for_transfer, name=name, number=number)

Create Licensee

Creates a new Licensee

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
    api_instance = openapi_client.LicenseeApi(api_client)
    active = True # bool | If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled
    product_number = 'product_number_example' # str | 'productNumber' to assign new Licensee object
    marked_for_transfer = True # bool | Mark Licensee for transfer. (optional)
    name = 'name_example' # str |  (optional)
    number = 'number_example' # str | Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee (optional)

    try:
        # Create Licensee
        api_response = api_instance.create_licensee(active, product_number, marked_for_transfer=marked_for_transfer, name=name, number=number)
        print("The response of LicenseeApi->create_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseeApi->create_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| If set to &#39;false&#39;, the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled | 
 **product_number** | **str**| &#39;productNumber&#39; to assign new Licensee object | 
 **marked_for_transfer** | **bool**| Mark Licensee for transfer. | [optional] 
 **name** | **str**|  | [optional] 
 **number** | **str**| Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee | [optional] 

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

# **delete_licensee**
> Netlicensing delete_licensee(licensee_number, force_cascade=force_cascade)

Delete Licensee

Delete a Licensee by 'number'

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
    api_instance = openapi_client.LicenseeApi(api_client)
    licensee_number = 'licensee_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Licensee.
    force_cascade = True # bool | Force object deletion and all descendants. (optional)

    try:
        # Delete Licensee
        api_response = api_instance.delete_licensee(licensee_number, force_cascade=force_cascade)
        print("The response of LicenseeApi->delete_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseeApi->delete_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **licensee_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Licensee. | 
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

# **get_licensee**
> Netlicensing get_licensee(licensee_number)

Get Licensee

Return a Licensee by 'licenseeNumber'

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
    api_instance = openapi_client.LicenseeApi(api_client)
    licensee_number = 'licensee_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.

    try:
        # Get Licensee
        api_response = api_instance.get_licensee(licensee_number)
        print("The response of LicenseeApi->get_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseeApi->get_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **licensee_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee. | 

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

# **list_licensees**
> List[Netlicensing] list_licensees()

List Licensees

Return a list of all Licensees for the current Vendor

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
    api_instance = openapi_client.LicenseeApi(api_client)

    try:
        # List Licensees
        api_response = api_instance.list_licensees()
        print("The response of LicenseeApi->list_licensees:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseeApi->list_licensees: %s\n" % e)
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

# **transfer_licenses**
> Netlicensing transfer_licenses(licensee_number, source_licensee_number)

Transfer Licenses

Licenses transfer between Licensees

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
    api_instance = openapi_client.LicenseeApi(api_client)
    licensee_number = 'licensee_number_example' # str | Licensee number with a maximum length of 1000 characters
    source_licensee_number = 'source_licensee_number_example' # str | Licensee number which Licenses to be transferred

    try:
        # Transfer Licenses
        api_response = api_instance.transfer_licenses(licensee_number, source_licensee_number)
        print("The response of LicenseeApi->transfer_licenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseeApi->transfer_licenses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **licensee_number** | **str**| Licensee number with a maximum length of 1000 characters | 
 **source_licensee_number** | **str**| Licensee number which Licenses to be transferred | 

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

# **update_licensee**
> Netlicensing update_licensee(licensee_number, active=active, marked_for_transfer=marked_for_transfer, name=name, number=number)

Update Licensee

Sets the provided properties to a Licensee. Return an updated Licensee

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
    api_instance = openapi_client.LicenseeApi(api_client)
    licensee_number = 'licensee_number_example' # str | Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.
    active = True # bool | If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled (optional)
    marked_for_transfer = True # bool | Mark Licensee for transfer. (optional)
    name = 'name_example' # str |  (optional)
    number = 'number_example' # str | New Licensee number (update). (optional)

    try:
        # Update Licensee
        api_response = api_instance.update_licensee(licensee_number, active=active, marked_for_transfer=marked_for_transfer, name=name, number=number)
        print("The response of LicenseeApi->update_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseeApi->update_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **licensee_number** | **str**| Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee. | 
 **active** | **bool**| If set to &#39;false&#39;, the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled | [optional] 
 **marked_for_transfer** | **bool**| Mark Licensee for transfer. | [optional] 
 **name** | **str**|  | [optional] 
 **number** | **str**| New Licensee number (update). | [optional] 

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

# **validate_licensee**
> Netlicensing validate_licensee(licensee_number, action=action, licensee_name=licensee_name, node_secret=node_secret, product_module_number=product_module_number, product_number=product_number, session_id=session_id)

Validate Licensee

Validates active Licenses of the Licensee

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
    api_instance = openapi_client.LicenseeApi(api_client)
    licensee_number = 'licensee_number_example' # str | Licensee number with a maximum length of 1000 characters
    action = 'action_example' # str | 'Floating' licensing model: check-out or check-in session action, to allocate or return it from/to the pool of available sessions (optional)
    licensee_name = 'licensee_name_example' # str | Human-readable name for the auto-created Licensee (will be set as custom Licensee property) (optional)
    node_secret = 'node_secret_example' # str | 'Node-Locked' licensing model: specifies unique secret (optional)
    product_module_number = 'product_module_number_example' # str | 'Node-Locked' licensing model: product module number (optional)
    product_number = 'product_number_example' # str | Product number, must be provided when 'Licensee auto-create' is enabled (see also Product JavaDoc). Identifies the Product to which new Licensee should be added (optional)
    session_id = 'session_id_example' # str | 'Floating' licensing model: specifies unique session identifier (optional)

    try:
        # Validate Licensee
        api_response = api_instance.validate_licensee(licensee_number, action=action, licensee_name=licensee_name, node_secret=node_secret, product_module_number=product_module_number, product_number=product_number, session_id=session_id)
        print("The response of LicenseeApi->validate_licensee:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseeApi->validate_licensee: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **licensee_number** | **str**| Licensee number with a maximum length of 1000 characters | 
 **action** | **str**| &#39;Floating&#39; licensing model: check-out or check-in session action, to allocate or return it from/to the pool of available sessions | [optional] 
 **licensee_name** | **str**| Human-readable name for the auto-created Licensee (will be set as custom Licensee property) | [optional] 
 **node_secret** | **str**| &#39;Node-Locked&#39; licensing model: specifies unique secret | [optional] 
 **product_module_number** | **str**| &#39;Node-Locked&#39; licensing model: product module number | [optional] 
 **product_number** | **str**| Product number, must be provided when &#39;Licensee auto-create&#39; is enabled (see also Product JavaDoc). Identifies the Product to which new Licensee should be added | [optional] 
 **session_id** | **str**| &#39;Floating&#39; licensing model: specifies unique session identifier | [optional] 

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

