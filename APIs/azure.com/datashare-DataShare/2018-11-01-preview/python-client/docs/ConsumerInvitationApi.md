# openapi_client.ConsumerInvitationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumer_invitations_get**](ConsumerInvitationApi.md#consumer_invitations_get) | **GET** /providers/Microsoft.DataShare/locations/{location}/consumerInvitations/{invitationId} | Gets the invitation identified by invitationId
[**consumer_invitations_list_invitations**](ConsumerInvitationApi.md#consumer_invitations_list_invitations) | **GET** /providers/Microsoft.DataShare/ListInvitations | List the invitations
[**consumer_invitations_reject_invitation**](ConsumerInvitationApi.md#consumer_invitations_reject_invitation) | **POST** /providers/Microsoft.DataShare/locations/{location}/RejectInvitation | Rejects the invitation identified by invitationId


# **consumer_invitations_get**
> ConsumerInvitation consumer_invitations_get(location, invitation_id, api_version)

Gets the invitation identified by invitationId

Get an invitation

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consumer_invitation import ConsumerInvitation
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
    api_instance = openapi_client.ConsumerInvitationApi(api_client)
    location = 'location_example' # str | Location of the invitation
    invitation_id = 'invitation_id_example' # str | An invitation id
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Gets the invitation identified by invitationId
        api_response = api_instance.consumer_invitations_get(location, invitation_id, api_version)
        print("The response of ConsumerInvitationApi->consumer_invitations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumerInvitationApi->consumer_invitations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| Location of the invitation | 
 **invitation_id** | **str**| An invitation id | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**ConsumerInvitation**](ConsumerInvitation.md)

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

# **consumer_invitations_list_invitations**
> ConsumerInvitationList consumer_invitations_list_invitations(api_version, skip_token=skip_token)

List the invitations

Lists invitations

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consumer_invitation_list import ConsumerInvitationList
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
    api_instance = openapi_client.ConsumerInvitationApi(api_client)
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | The continuation token (optional)

    try:
        # List the invitations
        api_response = api_instance.consumer_invitations_list_invitations(api_version, skip_token=skip_token)
        print("The response of ConsumerInvitationApi->consumer_invitations_list_invitations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumerInvitationApi->consumer_invitations_list_invitations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| The continuation token | [optional] 

### Return type

[**ConsumerInvitationList**](ConsumerInvitationList.md)

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

# **consumer_invitations_reject_invitation**
> ConsumerInvitation consumer_invitations_reject_invitation(location, api_version, invitation)

Rejects the invitation identified by invitationId

Reject an invitation

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consumer_invitation import ConsumerInvitation
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
    api_instance = openapi_client.ConsumerInvitationApi(api_client)
    location = 'location_example' # str | Location of the invitation
    api_version = 'api_version_example' # str | The api version to use.
    invitation = openapi_client.ConsumerInvitation() # ConsumerInvitation | An invitation payload

    try:
        # Rejects the invitation identified by invitationId
        api_response = api_instance.consumer_invitations_reject_invitation(location, api_version, invitation)
        print("The response of ConsumerInvitationApi->consumer_invitations_reject_invitation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumerInvitationApi->consumer_invitations_reject_invitation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| Location of the invitation | 
 **api_version** | **str**| The api version to use. | 
 **invitation** | [**ConsumerInvitation**](ConsumerInvitation.md)| An invitation payload | 

### Return type

[**ConsumerInvitation**](ConsumerInvitation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

