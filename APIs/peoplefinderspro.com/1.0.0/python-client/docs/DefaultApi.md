# openapi_client.DefaultApi

All URIs are relative to *https://api.peoplefinderspro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**address_autocomplete_post**](DefaultApi.md#address_autocomplete_post) | **POST** /address/autocomplete | Search
[**contact_enrich_post**](DefaultApi.md#contact_enrich_post) | **POST** /contact/enrich | Search
[**email_enrich_post**](DefaultApi.md#email_enrich_post) | **POST** /email/enrich | Search
[**phone_enrich_post**](DefaultApi.md#phone_enrich_post) | **POST** /phone/enrich | Search
[**search**](DefaultApi.md#search) | **POST** /identity/verify_id | Search


# **address_autocomplete_post**
> address_autocomplete_post(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, address_autocomplete_post_request=address_autocomplete_post_request)

Search

###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*  Perform a search:  1. Add your key and key secret to the request headers.     + galaxy-ap-name: [Key]     + galaxy-ap-password: [Secret]     + galaxy-search-type: DevAPIAddressAutoComplete  2.  Add search criteria to your request.     ~~~html             {                 \"Input\":\"1821 Q\"             }     ~~~  3.  Submit your search  The JSON request should have parts of the address.  + <code>Input</code> = null (optional, string) ... address.

### Example


```python
import openapi_client
from openapi_client.models.address_autocomplete_post_request import AddressAutocompletePostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.peoplefinderspro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.peoplefinderspro.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    galaxy_ap_name = 'Key' # str | e.g. Key (optional)
    galaxy_ap_password = 'Secret' # str | e.g. Secret (optional)
    galaxy_search_type = 'DevAPIAddressAutoComplete' # str | e.g. DevAPIAddressAutoComplete (optional)
    address_autocomplete_post_request = openapi_client.AddressAutocompletePostRequest() # AddressAutocompletePostRequest |  (optional)

    try:
        # Search
        api_instance.address_autocomplete_post(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, address_autocomplete_post_request=address_autocomplete_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->address_autocomplete_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **galaxy_ap_name** | **str**| e.g. Key | [optional] 
 **galaxy_ap_password** | **str**| e.g. Secret | [optional] 
 **galaxy_search_type** | **str**| e.g. DevAPIAddressAutoComplete | [optional] 
 **address_autocomplete_post_request** | [**AddressAutocompletePostRequest**](AddressAutocompletePostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contact_enrich_post**
> contact_enrich_post(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, contact_enrich_post_request=contact_enrich_post_request)

Search

###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*  Perform a search:  1. Add your key and key secret to the request headers.     + galaxy-ap-name: [Key]     + galaxy-ap-password: [Secret]     + galaxy-search-type: DevAPIContactEnrich  2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.     ~~~html             {                 \"FirstName\": \"John\",                 \"MiddleName\": \"T\",                 \"LastName\": \"Lawrence\",                 \"Dob\":\"\",                 \"Age\": 0,                 \"Address\": {                     \"addressLine1\":\"123 Q Street\",                     \"addressLine2\":\"Sacramento, CA\"                 },                 \"PhoneNumber\":\"\",                 \"Email\":\"\"             }     ~~~  3.  Submit your search  A complete list of JSON request properties follows.  + <code>FirstName</code>= null (optional, string) ... First name.  + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.  + <code>LastName</code> = null (optional, string) ... Last name.  + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).  + <code>Age</code> = null (optional, int) ... Age.  + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.     + <code>Members</code>         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).  + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).  + <code>Email</code> = null (optional, string) ... E-mail address.

### Example


```python
import openapi_client
from openapi_client.models.contact_enrich_post_request import ContactEnrichPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.peoplefinderspro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.peoplefinderspro.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    galaxy_ap_name = 'Key' # str | e.g. Key (optional)
    galaxy_ap_password = 'Secret' # str | e.g. Secret (optional)
    galaxy_search_type = 'DevAPIContactEnrich' # str | e.g. DevAPIContactEnrich (optional)
    contact_enrich_post_request = openapi_client.ContactEnrichPostRequest() # ContactEnrichPostRequest |  (optional)

    try:
        # Search
        api_instance.contact_enrich_post(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, contact_enrich_post_request=contact_enrich_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->contact_enrich_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **galaxy_ap_name** | **str**| e.g. Key | [optional] 
 **galaxy_ap_password** | **str**| e.g. Secret | [optional] 
 **galaxy_search_type** | **str**| e.g. DevAPIContactEnrich | [optional] 
 **contact_enrich_post_request** | [**ContactEnrichPostRequest**](ContactEnrichPostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **email_enrich_post**
> email_enrich_post(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, email_enrich_post_request=email_enrich_post_request)

Search

###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*  Perform a search:  1. Add your Access Profile username and password to the request headers.     + galaxy-ap-name: [Key]     + galaxy-ap-password: [Secret]     + galaxy-search-type: DevAPIEmailID  2.  Add search criteria to your request.     ~~~html             {                 \"Email\":\"johnsmith@somedomain\"             }     ~~~  3.  Submit your search  The JSON request should have an email.  + <code>Email</code> = null (optional, string) ... E-mail address.

### Example


```python
import openapi_client
from openapi_client.models.email_enrich_post_request import EmailEnrichPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.peoplefinderspro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.peoplefinderspro.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    galaxy_ap_name = 'Key' # str | e.g. Key (optional)
    galaxy_ap_password = 'Secret' # str | e.g. Secret (optional)
    galaxy_search_type = 'DevAPIEmailID' # str | e.g. DevAPIEmailID (optional)
    email_enrich_post_request = openapi_client.EmailEnrichPostRequest() # EmailEnrichPostRequest |  (optional)

    try:
        # Search
        api_instance.email_enrich_post(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, email_enrich_post_request=email_enrich_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->email_enrich_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **galaxy_ap_name** | **str**| e.g. Key | [optional] 
 **galaxy_ap_password** | **str**| e.g. Secret | [optional] 
 **galaxy_search_type** | **str**| e.g. DevAPIEmailID | [optional] 
 **email_enrich_post_request** | [**EmailEnrichPostRequest**](EmailEnrichPostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_enrich_post**
> phone_enrich_post(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, phone_enrich_post_request=phone_enrich_post_request)

Search

###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*  Perform a search:  1. Add your key and key secret to the request headers.     + galaxy-ap-name: [Key]     + galaxy-ap-password: [Secret]     + galaxy-search-type: DevAPICallerID  2.  Add search criteria to your request.     ~~~html             {                 \"Phone\":\"(123) 456-7890\"             }     ~~~  3.  Submit your search  The JSON request should have a phone number.  + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

### Example


```python
import openapi_client
from openapi_client.models.phone_enrich_post_request import PhoneEnrichPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.peoplefinderspro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.peoplefinderspro.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    galaxy_ap_name = 'Key' # str | e.g. Key (optional)
    galaxy_ap_password = 'Secret' # str | e.g. Secret (optional)
    galaxy_search_type = 'DevAPICallerID' # str | e.g. DevAPICallerID (optional)
    phone_enrich_post_request = openapi_client.PhoneEnrichPostRequest() # PhoneEnrichPostRequest |  (optional)

    try:
        # Search
        api_instance.phone_enrich_post(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, phone_enrich_post_request=phone_enrich_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->phone_enrich_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **galaxy_ap_name** | **str**| e.g. Key | [optional] 
 **galaxy_ap_password** | **str**| e.g. Secret | [optional] 
 **galaxy_search_type** | **str**| e.g. DevAPICallerID | [optional] 
 **phone_enrich_post_request** | [**PhoneEnrichPostRequest**](PhoneEnrichPostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> search(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, contact_enrich_post_request=contact_enrich_post_request)

Search

###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*  Perform a search:  1. Add your key and key secret to the request headers.     + galaxy-ap-name: [Key]     + galaxy-ap-password: [Secret]     + galaxy-search-type: DevAPIIDVerification  2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.     ~~~html             {                 \"FirstName\": \"John\",                 \"MiddleName\": \"T\",                 \"LastName\": \"Lawrence\",                 \"Dob\":\"\",                 \"Age\": 0,                 \"Address\": {                     \"addressLine1\":\"123 Q Street, Unit 102\",                     \"addressLine2\":\"Sacramento, CA\"                 },                 \"PhoneNumber\":\"\",                 \"Email\":\"\"             }     ~~~  3.  Submit your search  A complete list of JSON request properties follows.  + <code>FirstName</code>= null (optional, string) ... First name.  + <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.  + <code>LastName</code> = null (optional, string) ... Last name.  + <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).  + <code>Age</code> = null (optional, int) ... Age.  + <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.     + <code>Members</code>         + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).         + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).  + <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).  + <code>Email</code> = null (optional, string) ... E-mail address.

### Example


```python
import openapi_client
from openapi_client.models.contact_enrich_post_request import ContactEnrichPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.peoplefinderspro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.peoplefinderspro.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    galaxy_ap_name = 'Key' # str | e.g. Key (optional)
    galaxy_ap_password = 'Secret' # str | e.g. Secret (optional)
    galaxy_search_type = 'DevAPIIDVerification' # str | e.g. DevAPIIDVerification (optional)
    contact_enrich_post_request = openapi_client.ContactEnrichPostRequest() # ContactEnrichPostRequest |  (optional)

    try:
        # Search
        api_instance.search(galaxy_ap_name=galaxy_ap_name, galaxy_ap_password=galaxy_ap_password, galaxy_search_type=galaxy_search_type, contact_enrich_post_request=contact_enrich_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **galaxy_ap_name** | **str**| e.g. Key | [optional] 
 **galaxy_ap_password** | **str**| e.g. Secret | [optional] 
 **galaxy_search_type** | **str**| e.g. DevAPIIDVerification | [optional] 
 **contact_enrich_post_request** | [**ContactEnrichPostRequest**](ContactEnrichPostRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

