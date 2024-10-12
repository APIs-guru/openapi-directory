# openapi_client.PrioritiesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_branding_policies_priorities_2**](PrioritiesApi.md#get_organization_branding_policies_priorities_2) | **GET** /organizations/{organizationId}/brandingPolicies/priorities | Return the branding policy IDs of an organization in priority order
[**update_organization_branding_policies_priorities_2**](PrioritiesApi.md#update_organization_branding_policies_priorities_2) | **PUT** /organizations/{organizationId}/brandingPolicies/priorities | Update the priority ordering of an organization&#39;s branding policies.


# **get_organization_branding_policies_priorities_2**
> GetOrganizationBrandingPoliciesPriorities200Response get_organization_branding_policies_priorities_2(organization_id)

Return the branding policy IDs of an organization in priority order

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies_priorities200_response import GetOrganizationBrandingPoliciesPriorities200Response
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
    api_instance = openapi_client.PrioritiesApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the branding policy IDs of an organization in priority order
        api_response = api_instance.get_organization_branding_policies_priorities_2(organization_id)
        print("The response of PrioritiesApi->get_organization_branding_policies_priorities_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrioritiesApi->get_organization_branding_policies_priorities_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationBrandingPoliciesPriorities200Response**](GetOrganizationBrandingPoliciesPriorities200Response.md)

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

# **update_organization_branding_policies_priorities_2**
> GetOrganizationBrandingPoliciesPriorities200Response update_organization_branding_policies_priorities_2(organization_id, update_organization_branding_policies_priorities_request=update_organization_branding_policies_priorities_request)

Update the priority ordering of an organization's branding policies.

Update the priority ordering of an organization's branding policies.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies_priorities200_response import GetOrganizationBrandingPoliciesPriorities200Response
from openapi_client.models.update_organization_branding_policies_priorities_request import UpdateOrganizationBrandingPoliciesPrioritiesRequest
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
    api_instance = openapi_client.PrioritiesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_branding_policies_priorities_request = openapi_client.UpdateOrganizationBrandingPoliciesPrioritiesRequest() # UpdateOrganizationBrandingPoliciesPrioritiesRequest |  (optional)

    try:
        # Update the priority ordering of an organization's branding policies.
        api_response = api_instance.update_organization_branding_policies_priorities_2(organization_id, update_organization_branding_policies_priorities_request=update_organization_branding_policies_priorities_request)
        print("The response of PrioritiesApi->update_organization_branding_policies_priorities_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrioritiesApi->update_organization_branding_policies_priorities_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_branding_policies_priorities_request** | [**UpdateOrganizationBrandingPoliciesPrioritiesRequest**](UpdateOrganizationBrandingPoliciesPrioritiesRequest.md)|  | [optional] 

### Return type

[**GetOrganizationBrandingPoliciesPriorities200Response**](GetOrganizationBrandingPoliciesPriorities200Response.md)

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

