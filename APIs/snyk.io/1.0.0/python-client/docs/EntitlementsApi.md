# openapi_client.EntitlementsApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_an_organizations_entitlement_value**](EntitlementsApi.md#get_an_organizations_entitlement_value) | **GET** /org/{orgId}/entitlement/{entitlementKey} | Get an organization&#39;s entitlement value
[**list_all_entitlements**](EntitlementsApi.md#list_all_entitlements) | **GET** /org/{orgId}/entitlements | List all entitlements


# **get_an_organizations_entitlement_value**
> get_an_organizations_entitlement_value(org_id, entitlement_key)

Get an organization's entitlement value



### Example


```python
import openapi_client
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
    api_instance = openapi_client.EntitlementsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to query the entitlement for. The `API_KEY` must have access to this organization.
    entitlement_key = 'reports' # str | The entitlement to query.

    try:
        # Get an organization's entitlement value
        api_instance.get_an_organizations_entitlement_value(org_id, entitlement_key)
    except Exception as e:
        print("Exception when calling EntitlementsApi->get_an_organizations_entitlement_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to query the entitlement for. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **entitlement_key** | **str**| The entitlement to query. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_entitlements**
> list_all_entitlements(org_id)

List all entitlements



### Example


```python
import openapi_client
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
    api_instance = openapi_client.EntitlementsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID to list entitlements for. The `API_KEY` must have access to this organization.

    try:
        # List all entitlements
        api_instance.list_all_entitlements(org_id)
    except Exception as e:
        print("Exception when calling EntitlementsApi->list_all_entitlements: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID to list entitlements for. The &#x60;API_KEY&#x60; must have access to this organization. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

