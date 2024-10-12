# openapi_client.LicensesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assign_organization_licenses_seats_1**](LicensesApi.md#assign_organization_licenses_seats_1) | **POST** /organizations/{organizationId}/licenses/assignSeats | Assign SM seats to a network
[**get_organization_license_1**](LicensesApi.md#get_organization_license_1) | **GET** /organizations/{organizationId}/licenses/{licenseId} | Display a license
[**get_organization_licenses_1**](LicensesApi.md#get_organization_licenses_1) | **GET** /organizations/{organizationId}/licenses | List the licenses for an organization
[**get_organization_licenses_overview_1**](LicensesApi.md#get_organization_licenses_overview_1) | **GET** /organizations/{organizationId}/licenses/overview | Return an overview of the license state for an organization
[**get_organization_licensing_coterm_licenses_2**](LicensesApi.md#get_organization_licensing_coterm_licenses_2) | **GET** /organizations/{organizationId}/licensing/coterm/licenses | List the licenses in a coterm organization
[**move_organization_licenses_1**](LicensesApi.md#move_organization_licenses_1) | **POST** /organizations/{organizationId}/licenses/move | Move licenses to another organization
[**move_organization_licenses_seats_1**](LicensesApi.md#move_organization_licenses_seats_1) | **POST** /organizations/{organizationId}/licenses/moveSeats | Move SM seats to another organization
[**move_organization_licensing_coterm_licenses_2**](LicensesApi.md#move_organization_licensing_coterm_licenses_2) | **POST** /organizations/{organizationId}/licensing/coterm/licenses/move | Moves a license to a different organization (coterm only)
[**renew_organization_licenses_seats_1**](LicensesApi.md#renew_organization_licenses_seats_1) | **POST** /organizations/{organizationId}/licenses/renewSeats | Renew SM seats of a license
[**update_organization_license_1**](LicensesApi.md#update_organization_license_1) | **PUT** /organizations/{organizationId}/licenses/{licenseId} | Update a license


# **assign_organization_licenses_seats_1**
> AssignOrganizationLicensesSeats200Response assign_organization_licenses_seats_1(organization_id, assign_organization_licenses_seats_request)

Assign SM seats to a network

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.assign_organization_licenses_seats200_response import AssignOrganizationLicensesSeats200Response
from openapi_client.models.assign_organization_licenses_seats_request import AssignOrganizationLicensesSeatsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    assign_organization_licenses_seats_request = openapi_client.AssignOrganizationLicensesSeatsRequest() # AssignOrganizationLicensesSeatsRequest | 

    try:
        # Assign SM seats to a network
        api_response = api_instance.assign_organization_licenses_seats_1(organization_id, assign_organization_licenses_seats_request)
        print("The response of LicensesApi->assign_organization_licenses_seats_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->assign_organization_licenses_seats_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **assign_organization_licenses_seats_request** | [**AssignOrganizationLicensesSeatsRequest**](AssignOrganizationLicensesSeatsRequest.md)|  | 

### Return type

[**AssignOrganizationLicensesSeats200Response**](AssignOrganizationLicensesSeats200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_license_1**
> GetOrganizationLicenses200ResponseInner get_organization_license_1(organization_id, license_id)

Display a license

Display a license

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_licenses200_response_inner import GetOrganizationLicenses200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    license_id = 'license_id_example' # str | 

    try:
        # Display a license
        api_response = api_instance.get_organization_license_1(organization_id, license_id)
        print("The response of LicensesApi->get_organization_license_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->get_organization_license_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **license_id** | **str**|  | 

### Return type

[**GetOrganizationLicenses200ResponseInner**](GetOrganizationLicenses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_licenses_1**
> List[GetOrganizationLicenses200ResponseInner] get_organization_licenses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, device_serial=device_serial, network_id=network_id, state=state)

List the licenses for an organization

List the licenses for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_licenses200_response_inner import GetOrganizationLicenses200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    device_serial = 'device_serial_example' # str | Filter the licenses to those assigned to a particular device. Returned in the same order that they are queued to the device. (optional)
    network_id = 'network_id_example' # str | Filter the licenses to those assigned in a particular network (optional)
    state = 'state_example' # str | Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive' (optional)

    try:
        # List the licenses for an organization
        api_response = api_instance.get_organization_licenses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, device_serial=device_serial, network_id=network_id, state=state)
        print("The response of LicensesApi->get_organization_licenses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->get_organization_licenses_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **device_serial** | **str**| Filter the licenses to those assigned to a particular device. Returned in the same order that they are queued to the device. | [optional] 
 **network_id** | **str**| Filter the licenses to those assigned in a particular network | [optional] 
 **state** | **str**| Filter the licenses to those in a particular state. Can be one of &#39;active&#39;, &#39;expired&#39;, &#39;expiring&#39;, &#39;recentlyQueued&#39;, &#39;unused&#39; or &#39;unusedActive&#39; | [optional] 

### Return type

[**List[GetOrganizationLicenses200ResponseInner]**](GetOrganizationLicenses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_licenses_overview_1**
> object get_organization_licenses_overview_1(organization_id)

Return an overview of the license state for an organization

Return an overview of the license state for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return an overview of the license state for an organization
        api_response = api_instance.get_organization_licenses_overview_1(organization_id)
        print("The response of LicensesApi->get_organization_licenses_overview_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->get_organization_licenses_overview_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_licensing_coterm_licenses_2**
> List[GetOrganizationLicensingCotermLicenses200ResponseInner] get_organization_licensing_coterm_licenses_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, invalidated=invalidated, expired=expired)

List the licenses in a coterm organization

List the licenses in a coterm organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_licensing_coterm_licenses200_response_inner import GetOrganizationLicensingCotermLicenses200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    invalidated = True # bool | Filter for licenses that are invalidated (optional)
    expired = True # bool | Filter for licenses that are expired (optional)

    try:
        # List the licenses in a coterm organization
        api_response = api_instance.get_organization_licensing_coterm_licenses_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, invalidated=invalidated, expired=expired)
        print("The response of LicensesApi->get_organization_licensing_coterm_licenses_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->get_organization_licensing_coterm_licenses_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **invalidated** | **bool**| Filter for licenses that are invalidated | [optional] 
 **expired** | **bool**| Filter for licenses that are expired | [optional] 

### Return type

[**List[GetOrganizationLicensingCotermLicenses200ResponseInner]**](GetOrganizationLicensingCotermLicenses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_organization_licenses_1**
> MoveOrganizationLicenses200Response move_organization_licenses_1(organization_id, move_organization_licenses_request)

Move licenses to another organization

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.move_organization_licenses200_response import MoveOrganizationLicenses200Response
from openapi_client.models.move_organization_licenses_request import MoveOrganizationLicensesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    move_organization_licenses_request = openapi_client.MoveOrganizationLicensesRequest() # MoveOrganizationLicensesRequest | 

    try:
        # Move licenses to another organization
        api_response = api_instance.move_organization_licenses_1(organization_id, move_organization_licenses_request)
        print("The response of LicensesApi->move_organization_licenses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->move_organization_licenses_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **move_organization_licenses_request** | [**MoveOrganizationLicensesRequest**](MoveOrganizationLicensesRequest.md)|  | 

### Return type

[**MoveOrganizationLicenses200Response**](MoveOrganizationLicenses200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_organization_licenses_seats_1**
> MoveOrganizationLicensesSeats200Response move_organization_licenses_seats_1(organization_id, move_organization_licenses_seats_request)

Move SM seats to another organization

Move SM seats to another organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.move_organization_licenses_seats200_response import MoveOrganizationLicensesSeats200Response
from openapi_client.models.move_organization_licenses_seats_request import MoveOrganizationLicensesSeatsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    move_organization_licenses_seats_request = openapi_client.MoveOrganizationLicensesSeatsRequest() # MoveOrganizationLicensesSeatsRequest | 

    try:
        # Move SM seats to another organization
        api_response = api_instance.move_organization_licenses_seats_1(organization_id, move_organization_licenses_seats_request)
        print("The response of LicensesApi->move_organization_licenses_seats_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->move_organization_licenses_seats_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **move_organization_licenses_seats_request** | [**MoveOrganizationLicensesSeatsRequest**](MoveOrganizationLicensesSeatsRequest.md)|  | 

### Return type

[**MoveOrganizationLicensesSeats200Response**](MoveOrganizationLicensesSeats200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_organization_licensing_coterm_licenses_2**
> MoveOrganizationLicensingCotermLicenses200Response move_organization_licensing_coterm_licenses_2(organization_id, move_organization_licensing_coterm_licenses_request)

Moves a license to a different organization (coterm only)

Moves a license to a different organization (coterm only)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.move_organization_licensing_coterm_licenses200_response import MoveOrganizationLicensingCotermLicenses200Response
from openapi_client.models.move_organization_licensing_coterm_licenses_request import MoveOrganizationLicensingCotermLicensesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    move_organization_licensing_coterm_licenses_request = openapi_client.MoveOrganizationLicensingCotermLicensesRequest() # MoveOrganizationLicensingCotermLicensesRequest | 

    try:
        # Moves a license to a different organization (coterm only)
        api_response = api_instance.move_organization_licensing_coterm_licenses_2(organization_id, move_organization_licensing_coterm_licenses_request)
        print("The response of LicensesApi->move_organization_licensing_coterm_licenses_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->move_organization_licensing_coterm_licenses_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **move_organization_licensing_coterm_licenses_request** | [**MoveOrganizationLicensingCotermLicensesRequest**](MoveOrganizationLicensingCotermLicensesRequest.md)|  | 

### Return type

[**MoveOrganizationLicensingCotermLicenses200Response**](MoveOrganizationLicensingCotermLicenses200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renew_organization_licenses_seats_1**
> AssignOrganizationLicensesSeats200Response renew_organization_licenses_seats_1(organization_id, renew_organization_licenses_seats_request)

Renew SM seats of a license

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.assign_organization_licenses_seats200_response import AssignOrganizationLicensesSeats200Response
from openapi_client.models.renew_organization_licenses_seats_request import RenewOrganizationLicensesSeatsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    renew_organization_licenses_seats_request = openapi_client.RenewOrganizationLicensesSeatsRequest() # RenewOrganizationLicensesSeatsRequest | 

    try:
        # Renew SM seats of a license
        api_response = api_instance.renew_organization_licenses_seats_1(organization_id, renew_organization_licenses_seats_request)
        print("The response of LicensesApi->renew_organization_licenses_seats_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->renew_organization_licenses_seats_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **renew_organization_licenses_seats_request** | [**RenewOrganizationLicensesSeatsRequest**](RenewOrganizationLicensesSeatsRequest.md)|  | 

### Return type

[**AssignOrganizationLicensesSeats200Response**](AssignOrganizationLicensesSeats200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_license_1**
> GetOrganizationLicenses200ResponseInner update_organization_license_1(organization_id, license_id, update_organization_license_request=update_organization_license_request)

Update a license

Update a license

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_licenses200_response_inner import GetOrganizationLicenses200ResponseInner
from openapi_client.models.update_organization_license_request import UpdateOrganizationLicenseRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    license_id = 'license_id_example' # str | 
    update_organization_license_request = openapi_client.UpdateOrganizationLicenseRequest() # UpdateOrganizationLicenseRequest |  (optional)

    try:
        # Update a license
        api_response = api_instance.update_organization_license_1(organization_id, license_id, update_organization_license_request=update_organization_license_request)
        print("The response of LicensesApi->update_organization_license_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->update_organization_license_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **license_id** | **str**|  | 
 **update_organization_license_request** | [**UpdateOrganizationLicenseRequest**](UpdateOrganizationLicenseRequest.md)|  | [optional] 

### Return type

[**GetOrganizationLicenses200ResponseInner**](GetOrganizationLicenses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

