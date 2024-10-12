# openapi_client.InvitationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invitations_create**](InvitationApi.md#invitations_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName} | Sends a new invitation to a recipient to access a share.
[**invitations_delete**](InvitationApi.md#invitations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName} | Delete Invitation in a share.
[**invitations_get**](InvitationApi.md#invitations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations/{invitationName} | Get Invitation in a share.
[**invitations_list_by_share**](InvitationApi.md#invitations_list_by_share) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/invitations | List all Invitations in a share.


# **invitations_create**
> Invitation invitations_create(subscription_id, resource_group_name, account_name, share_name, invitation_name, api_version, invitation)

Sends a new invitation to a recipient to access a share.

Create an invitation 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invitation import Invitation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvitationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share to send the invitation for.
    invitation_name = 'invitation_name_example' # str | The name of the invitation.
    api_version = 'api_version_example' # str | The api version to use.
    invitation = openapi_client.Invitation() # Invitation | Invitation details.

    try:
        # Sends a new invitation to a recipient to access a share.
        api_response = api_instance.invitations_create(subscription_id, resource_group_name, account_name, share_name, invitation_name, api_version, invitation)
        print("The response of InvitationApi->invitations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationApi->invitations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share to send the invitation for. | 
 **invitation_name** | **str**| The name of the invitation. | 
 **api_version** | **str**| The api version to use. | 
 **invitation** | [**Invitation**](Invitation.md)| Invitation details. | 

### Return type

[**Invitation**](Invitation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**201** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invitations_delete**
> invitations_delete(subscription_id, resource_group_name, account_name, share_name, invitation_name, api_version)

Delete Invitation in a share.

Delete an invitation in a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvitationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    invitation_name = 'invitation_name_example' # str | The name of the invitation.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Delete Invitation in a share.
        api_instance.invitations_delete(subscription_id, resource_group_name, account_name, share_name, invitation_name, api_version)
    except Exception as e:
        print("Exception when calling InvitationApi->invitations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **invitation_name** | **str**| The name of the invitation. | 
 **api_version** | **str**| The api version to use. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invitations_get**
> Invitation invitations_get(subscription_id, resource_group_name, account_name, share_name, invitation_name, api_version)

Get Invitation in a share.

Get an invitation in a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invitation import Invitation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvitationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    invitation_name = 'invitation_name_example' # str | The name of the invitation.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get Invitation in a share.
        api_response = api_instance.invitations_get(subscription_id, resource_group_name, account_name, share_name, invitation_name, api_version)
        print("The response of InvitationApi->invitations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationApi->invitations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **invitation_name** | **str**| The name of the invitation. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**Invitation**](Invitation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invitations_list_by_share**
> InvitationList invitations_list_by_share(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)

List all Invitations in a share.

List invitations in a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invitation_list import InvitationList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvitationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | The continuation token (optional)

    try:
        # List all Invitations in a share.
        api_response = api_instance.invitations_list_by_share(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)
        print("The response of InvitationApi->invitations_list_by_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationApi->invitations_list_by_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| The continuation token | [optional] 

### Return type

[**InvitationList**](InvitationList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

