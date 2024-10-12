# openapi_client.ApnsCertApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_sm_apns_cert_1**](ApnsCertApi.md#get_organization_sm_apns_cert_1) | **GET** /organizations/{organizationId}/sm/apnsCert | Get the organization&#39;s APNS certificate


# **get_organization_sm_apns_cert_1**
> GetOrganizationSmApnsCert200Response get_organization_sm_apns_cert_1(organization_id)

Get the organization's APNS certificate

Get the organization's APNS certificate

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sm_apns_cert200_response import GetOrganizationSmApnsCert200Response
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
    api_instance = openapi_client.ApnsCertApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Get the organization's APNS certificate
        api_response = api_instance.get_organization_sm_apns_cert_1(organization_id)
        print("The response of ApnsCertApi->get_organization_sm_apns_cert_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApnsCertApi->get_organization_sm_apns_cert_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationSmApnsCert200Response**](GetOrganizationSmApnsCert200Response.md)

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

