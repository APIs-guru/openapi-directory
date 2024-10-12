# openapi_client.CotermApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_licensing_coterm_licenses_1**](CotermApi.md#get_organization_licensing_coterm_licenses_1) | **GET** /organizations/{organizationId}/licensing/coterm/licenses | List the licenses in a coterm organization
[**move_organization_licensing_coterm_licenses_1**](CotermApi.md#move_organization_licensing_coterm_licenses_1) | **POST** /organizations/{organizationId}/licensing/coterm/licenses/move | Moves a license to a different organization (coterm only)


# **get_organization_licensing_coterm_licenses_1**
> List[GetOrganizationLicensingCotermLicenses200ResponseInner] get_organization_licensing_coterm_licenses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, invalidated=invalidated, expired=expired)

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
    api_instance = openapi_client.CotermApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    invalidated = True # bool | Filter for licenses that are invalidated (optional)
    expired = True # bool | Filter for licenses that are expired (optional)

    try:
        # List the licenses in a coterm organization
        api_response = api_instance.get_organization_licensing_coterm_licenses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, invalidated=invalidated, expired=expired)
        print("The response of CotermApi->get_organization_licensing_coterm_licenses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CotermApi->get_organization_licensing_coterm_licenses_1: %s\n" % e)
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

# **move_organization_licensing_coterm_licenses_1**
> MoveOrganizationLicensingCotermLicenses200Response move_organization_licensing_coterm_licenses_1(organization_id, move_organization_licensing_coterm_licenses_request)

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
    api_instance = openapi_client.CotermApi(api_client)
    organization_id = 'organization_id_example' # str | 
    move_organization_licensing_coterm_licenses_request = openapi_client.MoveOrganizationLicensingCotermLicensesRequest() # MoveOrganizationLicensingCotermLicensesRequest | 

    try:
        # Moves a license to a different organization (coterm only)
        api_response = api_instance.move_organization_licensing_coterm_licenses_1(organization_id, move_organization_licensing_coterm_licenses_request)
        print("The response of CotermApi->move_organization_licensing_coterm_licenses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CotermApi->move_organization_licensing_coterm_licenses_1: %s\n" % e)
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

