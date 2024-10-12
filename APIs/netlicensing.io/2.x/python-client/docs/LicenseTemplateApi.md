# openapi_client.LicenseTemplateApi

All URIs are relative to *https://go.netlicensing.io/core/v2/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_license_template**](LicenseTemplateApi.md#create_license_template) | **POST** /licensetemplate | Create License Template
[**delete_license_template**](LicenseTemplateApi.md#delete_license_template) | **DELETE** /licensetemplate/{licenseTemplateNumber} | Delete License Template
[**get_license_template**](LicenseTemplateApi.md#get_license_template) | **GET** /licensetemplate/{licenseTemplateNumber} | Get License Template
[**list_license_templates**](LicenseTemplateApi.md#list_license_templates) | **GET** /licensetemplate | List License Templates
[**update_license_template**](LicenseTemplateApi.md#update_license_template) | **POST** /licensetemplate/{licenseTemplateNumber} | Update License Template


# **create_license_template**
> Netlicensing create_license_template(active, license_type, name, product_module_number, automatic=automatic, currency=currency, hidden=hidden, hide_licenses=hide_licenses, max_sessions=max_sessions, number=number, price=price, quantity=quantity, quota=quota, time_volume=time_volume, time_volume_period=time_volume_period)

Create License Template

Creates a new License Template

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
    api_instance = openapi_client.LicenseTemplateApi(api_client)
    active = True # bool | If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.
    license_type = 'license_type_example' # str | Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY
    name = 'name_example' # str | License Template name to create License Template object
    product_module_number = 'product_module_number_example' # str | Number of Product Module to create License Template object
    automatic = True # bool | If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0. (optional)
    currency = 'currency_example' # str | Specifies currency for the License price. Check data types to discover which currencies are supported. (optional)
    hidden = True # bool | If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase. (optional)
    hide_licenses = True # bool | If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation. (optional)
    max_sessions = 'max_sessions_example' # str | Mandatory for 'FLOATING' License Type. (optional)
    number = 'number_example' # str | Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template. (optional)
    price = 3.4 # float | Price for the License. If >0, it must always be accompanied by the currency specification. (optional)
    quantity = 'quantity_example' # str | Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model. (optional)
    quota = 'quota_example' # str | Mandatory for 'Quota' License Model. (optional)
    time_volume = 'time_volume_example' # str | Mandatory for 'TIMEVOLUME' License Type. (optional)
    time_volume_period = 'time_volume_period_example' # str | For 'TIMEVOLUME' License Type. (optional)

    try:
        # Create License Template
        api_response = api_instance.create_license_template(active, license_type, name, product_module_number, automatic=automatic, currency=currency, hidden=hidden, hide_licenses=hide_licenses, max_sessions=max_sessions, number=number, price=price, quantity=quantity, quota=quota, time_volume=time_volume, time_volume_period=time_volume_period)
        print("The response of LicenseTemplateApi->create_license_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseTemplateApi->create_license_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| If set to &#39;false&#39;, the License Template is disabled. Licensee can not obtain any new Licenses off this License Template. | 
 **license_type** | **str**| Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY | 
 **name** | **str**| License Template name to create License Template object | 
 **product_module_number** | **str**| Number of Product Module to create License Template object | 
 **automatic** | **bool**| If set to &#39;true&#39;, every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0. | [optional] 
 **currency** | **str**| Specifies currency for the License price. Check data types to discover which currencies are supported. | [optional] 
 **hidden** | **bool**| If set to &#39;true&#39;, this License Template is not shown in NetLicensing Shop as offered for purchase. | [optional] 
 **hide_licenses** | **bool**| If set to &#39;true&#39;, Licenses from this License Template are not visible to the end customer, but participate in validation. | [optional] 
 **max_sessions** | **str**| Mandatory for &#39;FLOATING&#39; License Type. | [optional] 
 **number** | **str**| Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template. | [optional] 
 **price** | **float**| Price for the License. If &gt;0, it must always be accompanied by the currency specification. | [optional] 
 **quantity** | **str**| Mandatory for &#39;Pay-per-Use&#39; and &#39;Node-Locked&#39; License Model. | [optional] 
 **quota** | **str**| Mandatory for &#39;Quota&#39; License Model. | [optional] 
 **time_volume** | **str**| Mandatory for &#39;TIMEVOLUME&#39; License Type. | [optional] 
 **time_volume_period** | **str**| For &#39;TIMEVOLUME&#39; License Type. | [optional] 

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

# **delete_license_template**
> Netlicensing delete_license_template(license_template_number, force_cascade=force_cascade)

Delete License Template

Delete a License Template by 'number'.

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
    api_instance = openapi_client.LicenseTemplateApi(api_client)
    license_template_number = 'license_template_number_example' # str | Unique number (across all Products of a Vendor) that identifies the License Template.
    force_cascade = True # bool | Force object deletion and all descendants. (optional)

    try:
        # Delete License Template
        api_response = api_instance.delete_license_template(license_template_number, force_cascade=force_cascade)
        print("The response of LicenseTemplateApi->delete_license_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseTemplateApi->delete_license_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license_template_number** | **str**| Unique number (across all Products of a Vendor) that identifies the License Template. | 
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

# **get_license_template**
> Netlicensing get_license_template(license_template_number)

Get License Template

Return a License Template by 'licenseTemplateNumber'

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
    api_instance = openapi_client.LicenseTemplateApi(api_client)
    license_template_number = 'license_template_number_example' # str | Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.

    try:
        # Get License Template
        api_response = api_instance.get_license_template(license_template_number)
        print("The response of LicenseTemplateApi->get_license_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseTemplateApi->get_license_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license_template_number** | **str**| Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template. | 

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

# **list_license_templates**
> List[Netlicensing] list_license_templates()

List License Templates

Return a list of all License Templates for the current Vendor

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
    api_instance = openapi_client.LicenseTemplateApi(api_client)

    try:
        # List License Templates
        api_response = api_instance.list_license_templates()
        print("The response of LicenseTemplateApi->list_license_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseTemplateApi->list_license_templates: %s\n" % e)
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

# **update_license_template**
> Netlicensing update_license_template(license_template_number, active=active, automatic=automatic, currency=currency, hidden=hidden, hide_licenses=hide_licenses, license_type=license_type, max_sessions=max_sessions, name=name, number=number, price=price, quantity=quantity, quota=quota, time_volume=time_volume, time_volume_period=time_volume_period)

Update License Template

Sets the provided properties to a License Template. Return an updated License Template

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
    api_instance = openapi_client.LicenseTemplateApi(api_client)
    license_template_number = 'license_template_number_example' # str | Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.
    active = True # bool | If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template. (optional)
    automatic = True # bool | If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0. (optional)
    currency = 'currency_example' # str | Specifies currency for the License price. Check data types to discover which currencies are supported. (optional)
    hidden = True # bool | If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase. (optional)
    hide_licenses = True # bool | If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation. (optional)
    license_type = 'license_type_example' # str | Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY (optional)
    max_sessions = 'max_sessions_example' # str | Mandatory for 'FLOATING' License Type. (optional)
    name = 'name_example' # str | Name for the Licensed item (optional)
    number = 'number_example' # str | New License Template number (update). (optional)
    price = 3.4 # float | Price for the License. If >0, it must always be accompanied by the currency specification. (optional)
    quantity = 'quantity_example' # str | Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model. (optional)
    quota = 'quota_example' # str | Mandatory for 'Quota' License Model. (optional)
    time_volume = 'time_volume_example' # str | Mandatory for 'TIMEVOLUME' License Type. (optional)
    time_volume_period = 'time_volume_period_example' # str | For 'TIMEVOLUME' License Type. (optional)

    try:
        # Update License Template
        api_response = api_instance.update_license_template(license_template_number, active=active, automatic=automatic, currency=currency, hidden=hidden, hide_licenses=hide_licenses, license_type=license_type, max_sessions=max_sessions, name=name, number=number, price=price, quantity=quantity, quota=quota, time_volume=time_volume, time_volume_period=time_volume_period)
        print("The response of LicenseTemplateApi->update_license_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseTemplateApi->update_license_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license_template_number** | **str**| Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template. | 
 **active** | **bool**| If set to &#39;false&#39;, the License Template is disabled. Licensee can not obtain any new Licenses off this License Template. | [optional] 
 **automatic** | **bool**| If set to &#39;true&#39;, every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0. | [optional] 
 **currency** | **str**| Specifies currency for the License price. Check data types to discover which currencies are supported. | [optional] 
 **hidden** | **bool**| If set to &#39;true&#39;, this License Template is not shown in NetLicensing Shop as offered for purchase. | [optional] 
 **hide_licenses** | **bool**| If set to &#39;true&#39;, Licenses from this License Template are not visible to the end customer, but participate in validation. | [optional] 
 **license_type** | **str**| Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY | [optional] 
 **max_sessions** | **str**| Mandatory for &#39;FLOATING&#39; License Type. | [optional] 
 **name** | **str**| Name for the Licensed item | [optional] 
 **number** | **str**| New License Template number (update). | [optional] 
 **price** | **float**| Price for the License. If &gt;0, it must always be accompanied by the currency specification. | [optional] 
 **quantity** | **str**| Mandatory for &#39;Pay-per-Use&#39; and &#39;Node-Locked&#39; License Model. | [optional] 
 **quota** | **str**| Mandatory for &#39;Quota&#39; License Model. | [optional] 
 **time_volume** | **str**| Mandatory for &#39;TIMEVOLUME&#39; License Type. | [optional] 
 **time_volume_period** | **str**| For &#39;TIMEVOLUME&#39; License Type. | [optional] 

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

