# openapi_client.LicensesApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_all_licenses**](LicensesApi.md#list_all_licenses) | **POST** /org/{orgId}/licenses | List all licenses


# **list_all_licenses**
> ListAllLicenses200Response list_all_licenses(org_id, sort_by=sort_by, order=order, list_all_licenses_request=list_all_licenses_request)

List all licenses



### Example


```python
import openapi_client
from openapi_client.models.list_all_licenses200_response import ListAllLicenses200Response
from openapi_client.models.list_all_licenses_request import ListAllLicensesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LicensesApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to list projects for. The `API_KEY` must have access to this organization.
    sort_by = license # str | The field to sort results by. (optional) (default to license)
    order = asc # str | The direction to sort results by. (optional) (default to asc)
    list_all_licenses_request = openapi_client.ListAllLicensesRequest() # ListAllLicensesRequest |  (optional)

    try:
        # List all licenses
        api_response = api_instance.list_all_licenses(org_id, sort_by=sort_by, order=order, list_all_licenses_request=list_all_licenses_request)
        print("The response of LicensesApi->list_all_licenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicensesApi->list_all_licenses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to list projects for. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **sort_by** | **str**| The field to sort results by. | [optional] [default to license]
 **order** | **str**| The direction to sort results by. | [optional] [default to asc]
 **list_all_licenses_request** | [**ListAllLicensesRequest**](ListAllLicensesRequest.md)|  | [optional] 

### Return type

[**ListAllLicenses200Response**](ListAllLicenses200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

