# openapi_client.OrganizationUnitsApi

All URIs are relative to *http://learnifier.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extorgunit_get**](OrganizationUnitsApi.md#extorgunit_get) | **GET** /extorgunit | Get Organization Unit with External Id
[**orgunits_get**](OrganizationUnitsApi.md#orgunits_get) | **GET** /orgunits | Organization Units
[**orgunits_orgid_get**](OrganizationUnitsApi.md#orgunits_orgid_get) | **GET** /orgunits/{orgid} | Get Organization Unit
[**orgunits_orgid_patch**](OrganizationUnitsApi.md#orgunits_orgid_patch) | **PATCH** /orgunits/{orgid} | Updates an Organization Unit
[**orgunits_post**](OrganizationUnitsApi.md#orgunits_post) | **POST** /orgunits | Adds an Organization Unit


# **extorgunit_get**
> OrgUnit extorgunit_get(extid)

Get Organization Unit with External Id

Returns information about the organization unit with the specified external id. 

### Example


```python
import openapi_client
from openapi_client.models.org_unit import OrgUnit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationUnitsApi(api_client)
    extid = 'extid_example' # str | The external id of the organization unit

    try:
        # Get Organization Unit with External Id
        api_response = api_instance.extorgunit_get(extid)
        print("The response of OrganizationUnitsApi->extorgunit_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationUnitsApi->extorgunit_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extid** | **str**| The external id of the organization unit | 

### Return type

[**OrgUnit**](OrgUnit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with an organization unit |  -  |
**404** | Organization Unit not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_get**
> OrgUnits orgunits_get()

Organization Units

The orgunits endpoint returns information about the available organization units (orgunits). The response includes the display name, internal and external id and client number. 

### Example


```python
import openapi_client
from openapi_client.models.org_units import OrgUnits
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationUnitsApi(api_client)

    try:
        # Organization Units
        api_response = api_instance.orgunits_get()
        print("The response of OrganizationUnitsApi->orgunits_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationUnitsApi->orgunits_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OrgUnits**](OrgUnits.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with organization units |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_get**
> OrgUnit orgunits_orgid_get(orgid)

Get Organization Unit

Returns information about the specified organization unit. The response includes the display name, internal and external id and client number. 

### Example


```python
import openapi_client
from openapi_client.models.org_unit import OrgUnit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationUnitsApi(api_client)
    orgid = 56 # int | Id of the organization unit

    try:
        # Get Organization Unit
        api_response = api_instance.orgunits_orgid_get(orgid)
        print("The response of OrganizationUnitsApi->orgunits_orgid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationUnitsApi->orgunits_orgid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 

### Return type

[**OrgUnit**](OrgUnit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with an organization unit |  -  |
**404** | Organization Unit not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_patch**
> orgunits_orgid_patch(orgid, body)

Updates an Organization Unit

Adds an Organization Unit

### Example


```python
import openapi_client
from openapi_client.models.update_organization_unit import UpdateOrganizationUnit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationUnitsApi(api_client)
    orgid = 'orgid_example' # str | 
    body = openapi_client.UpdateOrganizationUnit() # UpdateOrganizationUnit | 

    try:
        # Updates an Organization Unit
        api_instance.orgunits_orgid_patch(orgid, body)
    except Exception as e:
        print("Exception when calling OrganizationUnitsApi->orgunits_orgid_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **str**|  | 
 **body** | [**UpdateOrganizationUnit**](UpdateOrganizationUnit.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Organization Unit was successfully updated |  -  |
**409** | An organization with the same clientNumber or external id already existed. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_post**
> AddOrganizationUnitResponse orgunits_post(body)

Adds an Organization Unit

Adds an Organization Unit

### Example


```python
import openapi_client
from openapi_client.models.add_organization_unit import AddOrganizationUnit
from openapi_client.models.add_organization_unit_response import AddOrganizationUnitResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationUnitsApi(api_client)
    body = openapi_client.AddOrganizationUnit() # AddOrganizationUnit | 

    try:
        # Adds an Organization Unit
        api_response = api_instance.orgunits_post(body)
        print("The response of OrganizationUnitsApi->orgunits_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationUnitsApi->orgunits_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AddOrganizationUnit**](AddOrganizationUnit.md)|  | 

### Return type

[**AddOrganizationUnitResponse**](AddOrganizationUnitResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization Unit was successfully added |  -  |
**409** | An organization with the same clientNumber or external id already existed. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

