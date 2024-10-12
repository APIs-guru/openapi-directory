# openapi_client.LicenseApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_license**](LicenseApi.md#create_license) | **POST** /license | Create License
[**delete_license**](LicenseApi.md#delete_license) | **DELETE** /license/{licenseNumber} | Delete License
[**get_license**](LicenseApi.md#get_license) | **GET** /license/{licenseNumber} | Get License
[**list_licenses**](LicenseApi.md#list_licenses) | **GET** /license | List Licenses
[**update_license**](LicenseApi.md#update_license) | **POST** /license/{licenseNumber} | Update License


# **create_license**
> Netlicensing create_license(active, license_template_number, licensee_number, currency=currency, hidden=hidden, name=name, number=number, parentfeature=parentfeature, price=price, quantity=quantity, start_date=start_date, time_volume=time_volume, time_volume_period=time_volume_period, used_quantity=used_quantity)

Create License

Creates a new License

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
    api_instance = openapi_client.LicenseApi(api_client)
    active = True # bool | 
    license_template_number = 'license_template_number_example' # str | 
    licensee_number = 'licensee_number_example' # str | 
    currency = 'currency_example' # str | Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation (optional)
    hidden = True # bool | If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly (optional)
    name = 'name_example' # str | Name for the Licensed item. Set from License Template on creation, if not specified explicitly. (optional)
    number = 'number_example' # str |  (optional)
    parentfeature = 'parentfeature_example' # str | Mandatory for 'TIMEVOLUME' License Type and 'RENTAL' licensing model (optional)
    price = 3.4 # float | Price for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation (optional)
    quantity = 'quantity_example' # str | Mandatory for 'Pay-per-Use' License Model. (optional)
    start_date = '2013-10-20T19:20:30+01:00' # datetime | Mandatory for 'TIMEVOLUME' License Type. (optional)
    time_volume = 'time_volume_example' # str | Mandatory for 'TIMEVOLUME' License Type. (optional)
    time_volume_period = 'time_volume_period_example' # str | For 'TIMEVOLUME' License Type. (optional)
    used_quantity = 'used_quantity_example' # str | Mandatory for 'Pay-per-Use' License Model. (optional)

    try:
        # Create License
        api_response = api_instance.create_license(active, license_template_number, licensee_number, currency=currency, hidden=hidden, name=name, number=number, parentfeature=parentfeature, price=price, quantity=quantity, start_date=start_date, time_volume=time_volume, time_volume_period=time_volume_period, used_quantity=used_quantity)
        print("The response of LicenseApi->create_license:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseApi->create_license: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**|  | 
 **license_template_number** | **str**|  | 
 **licensee_number** | **str**|  | 
 **currency** | **str**| Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation | [optional] 
 **hidden** | **bool**| If set to &#39;true&#39;, this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly | [optional] 
 **name** | **str**| Name for the Licensed item. Set from License Template on creation, if not specified explicitly. | [optional] 
 **number** | **str**|  | [optional] 
 **parentfeature** | **str**| Mandatory for &#39;TIMEVOLUME&#39; License Type and &#39;RENTAL&#39; licensing model | [optional] 
 **price** | **float**| Price for the License. If &gt;0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation | [optional] 
 **quantity** | **str**| Mandatory for &#39;Pay-per-Use&#39; License Model. | [optional] 
 **start_date** | **datetime**| Mandatory for &#39;TIMEVOLUME&#39; License Type. | [optional] 
 **time_volume** | **str**| Mandatory for &#39;TIMEVOLUME&#39; License Type. | [optional] 
 **time_volume_period** | **str**| For &#39;TIMEVOLUME&#39; License Type. | [optional] 
 **used_quantity** | **str**| Mandatory for &#39;Pay-per-Use&#39; License Model. | [optional] 

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

# **delete_license**
> Netlicensing delete_license(license_number)

Delete License

Delete License by a 'licenseNumber'

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
    api_instance = openapi_client.LicenseApi(api_client)
    license_number = 'license_number_example' # str | Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.

    try:
        # Delete License
        api_response = api_instance.delete_license(license_number)
        print("The response of LicenseApi->delete_license:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseApi->delete_license: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license_number** | **str**| Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed. | 

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

# **get_license**
> Netlicensing get_license(license_number)

Get License

Get License by a 'licenseNumber'

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
    api_instance = openapi_client.LicenseApi(api_client)
    license_number = 'license_number_example' # str | Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.

    try:
        # Get License
        api_response = api_instance.get_license(license_number)
        print("The response of LicenseApi->get_license:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseApi->get_license: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license_number** | **str**| Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed. | 

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

# **list_licenses**
> List[Netlicensing] list_licenses()

List Licenses

Return a list of all Licenses for the current Vendor

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
    api_instance = openapi_client.LicenseApi(api_client)

    try:
        # List Licenses
        api_response = api_instance.list_licenses()
        print("The response of LicenseApi->list_licenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseApi->list_licenses: %s\n" % e)
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

# **update_license**
> Netlicensing update_license(license_number, active=active, currency=currency, hidden=hidden, name=name, number=number, parentfeature=parentfeature, price=price, quantity=quantity, start_date=start_date, time_volume=time_volume, time_volume_period=time_volume_period, used_quantity=used_quantity)

Update License

Update License by a 'licenseNumber'

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
    api_instance = openapi_client.LicenseApi(api_client)
    license_number = 'license_number_example' # str | Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
    active = True # bool |  (optional)
    currency = 'currency_example' # str | Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation (optional)
    hidden = True # bool | If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly (optional)
    name = 'name_example' # str | Name for the Licensed item. Set from License Template on creation, if not specified explicitly. (optional)
    number = 'number_example' # str | Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed. (optional)
    parentfeature = 'parentfeature_example' # str |  (optional)
    price = 3.4 # float | Price for the License. If > 0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation (optional)
    quantity = 'quantity_example' # str | Mandatory for 'Pay-per-Use' License Model. (optional)
    start_date = '2013-10-20T19:20:30+01:00' # datetime | For 'TIMEVOLUME' License type (optional)
    time_volume = 'time_volume_example' # str | Mandatory for 'TIMEVOLUME' License Type. (optional)
    time_volume_period = 'time_volume_period_example' # str | For 'TIMEVOLUME' License Type. (optional)
    used_quantity = 'used_quantity_example' # str | Mandatory for 'Pay-per-Use' License Model. (optional)

    try:
        # Update License
        api_response = api_instance.update_license(license_number, active=active, currency=currency, hidden=hidden, name=name, number=number, parentfeature=parentfeature, price=price, quantity=quantity, start_date=start_date, time_volume=time_volume, time_volume_period=time_volume_period, used_quantity=used_quantity)
        print("The response of LicenseApi->update_license:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseApi->update_license: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license_number** | **str**| Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed. | 
 **active** | **bool**|  | [optional] 
 **currency** | **str**| Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation | [optional] 
 **hidden** | **bool**| If set to &#39;true&#39;, this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly | [optional] 
 **name** | **str**| Name for the Licensed item. Set from License Template on creation, if not specified explicitly. | [optional] 
 **number** | **str**| Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed. | [optional] 
 **parentfeature** | **str**|  | [optional] 
 **price** | **float**| Price for the License. If &gt; 0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation | [optional] 
 **quantity** | **str**| Mandatory for &#39;Pay-per-Use&#39; License Model. | [optional] 
 **start_date** | **datetime**| For &#39;TIMEVOLUME&#39; License type | [optional] 
 **time_volume** | **str**| Mandatory for &#39;TIMEVOLUME&#39; License Type. | [optional] 
 **time_volume_period** | **str**| For &#39;TIMEVOLUME&#39; License Type. | [optional] 
 **used_quantity** | **str**| Mandatory for &#39;Pay-per-Use&#39; License Model. | [optional] 

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

