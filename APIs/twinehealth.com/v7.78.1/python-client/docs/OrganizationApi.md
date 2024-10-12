# openapi_client.OrganizationApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_organization**](OrganizationApi.md#fetch_organization) | **GET** /organization/{id} | Get an organization


# **fetch_organization**
> FetchOrganizationResponse fetch_organization(id)

Get an organization

Get an organization record by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_organization_response import FetchOrganizationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationApi(api_client)
    id = 'id_example' # str | Organization identifier

    try:
        # Get an organization
        api_response = api_instance.fetch_organization(id)
        print("The response of OrganizationApi->fetch_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationApi->fetch_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Organization identifier | 

### Return type

[**FetchOrganizationResponse**](FetchOrganizationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

