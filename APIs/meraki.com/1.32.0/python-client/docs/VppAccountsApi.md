# openapi_client.VppAccountsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_organization_sm_vpp_account_1**](VppAccountsApi.md#get_organization_sm_vpp_account_1) | **GET** /organizations/{organizationId}/sm/vppAccounts/{vppAccountId} | Get a hash containing the unparsed token of the VPP account with the given ID
[**get_organization_sm_vpp_accounts_1**](VppAccountsApi.md#get_organization_sm_vpp_accounts_1) | **GET** /organizations/{organizationId}/sm/vppAccounts | List the VPP accounts in the organization


# **get_organization_sm_vpp_account_1**
> GetOrganizationSmVppAccounts200ResponseInner get_organization_sm_vpp_account_1(organization_id, vpp_account_id)

Get a hash containing the unparsed token of the VPP account with the given ID

Get a hash containing the unparsed token of the VPP account with the given ID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sm_vpp_accounts200_response_inner import GetOrganizationSmVppAccounts200ResponseInner
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
    api_instance = openapi_client.VppAccountsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    vpp_account_id = 'vpp_account_id_example' # str | 

    try:
        # Get a hash containing the unparsed token of the VPP account with the given ID
        api_response = api_instance.get_organization_sm_vpp_account_1(organization_id, vpp_account_id)
        print("The response of VppAccountsApi->get_organization_sm_vpp_account_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VppAccountsApi->get_organization_sm_vpp_account_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **vpp_account_id** | **str**|  | 

### Return type

[**GetOrganizationSmVppAccounts200ResponseInner**](GetOrganizationSmVppAccounts200ResponseInner.md)

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

# **get_organization_sm_vpp_accounts_1**
> List[GetOrganizationSmVppAccounts200ResponseInner] get_organization_sm_vpp_accounts_1(organization_id)

List the VPP accounts in the organization

List the VPP accounts in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_sm_vpp_accounts200_response_inner import GetOrganizationSmVppAccounts200ResponseInner
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
    api_instance = openapi_client.VppAccountsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the VPP accounts in the organization
        api_response = api_instance.get_organization_sm_vpp_accounts_1(organization_id)
        print("The response of VppAccountsApi->get_organization_sm_vpp_accounts_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VppAccountsApi->get_organization_sm_vpp_accounts_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**List[GetOrganizationSmVppAccounts200ResponseInner]**](GetOrganizationSmVppAccounts200ResponseInner.md)

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

