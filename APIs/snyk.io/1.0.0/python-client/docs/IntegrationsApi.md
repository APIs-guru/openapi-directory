# openapi_client.IntegrationsApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_new_integration**](IntegrationsApi.md#add_new_integration) | **POST** /org/{orgId}/integrations | Add new integration
[**clone_an_integration__with_settings_and_credentials**](IntegrationsApi.md#clone_an_integration__with_settings_and_credentials) | **POST** /org/{orgId}/integrations/{integrationId}/clone | Clone an integration (with settings and credentials)
[**delete_credentials**](IntegrationsApi.md#delete_credentials) | **DELETE** /org/{orgId}/integrations/{integrationId}/authentication | Delete credentials
[**get_existing_integration_by_type**](IntegrationsApi.md#get_existing_integration_by_type) | **GET** /org/{orgId}/integrations/{type} | Get existing integration by type
[**list**](IntegrationsApi.md#list) | **GET** /org/{orgId}/integrations | List
[**provision_new_broker_token**](IntegrationsApi.md#provision_new_broker_token) | **POST** /org/{orgId}/integrations/{integrationId}/authentication/provision-token | Provision new broker token
[**retrieve**](IntegrationsApi.md#retrieve) | **GET** /org/{orgId}/integrations/{integrationId}/settings | Retrieve
[**switch_between_broker_tokens**](IntegrationsApi.md#switch_between_broker_tokens) | **POST** /org/{orgId}/integrations/{integrationId}/authentication/switch-token | Switch between broker tokens
[**update**](IntegrationsApi.md#update) | **PUT** /org/{orgId}/integrations/{integrationId}/settings | Update
[**update_existing_integration**](IntegrationsApi.md#update_existing_integration) | **PUT** /org/{orgId}/integrations/{integrationId} | Update existing integration


# **add_new_integration**
> add_new_integration(org_id, add_new_integration_request=add_new_integration_request)

Add new integration

Add new integration for given organization.

### Example


```python
import openapi_client
from openapi_client.models.add_new_integration_request import AddNewIntegrationRequest
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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    add_new_integration_request = openapi_client.AddNewIntegrationRequest() # AddNewIntegrationRequest |  (optional)

    try:
        # Add new integration
        api_instance.add_new_integration(org_id, add_new_integration_request=add_new_integration_request)
    except Exception as e:
        print("Exception when calling IntegrationsApi->add_new_integration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **add_new_integration_request** | [**AddNewIntegrationRequest**](AddNewIntegrationRequest.md)|  | [optional] 

### Return type

void (empty response body)

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

# **clone_an_integration__with_settings_and_credentials**
> clone_an_integration__with_settings_and_credentials(org_id, integration_id, clone_an_integration_with_settings_and_credentials_request=clone_an_integration_with_settings_and_credentials_request)

Clone an integration (with settings and credentials)

Clone an integration, including all of its settings and credentials from one organization to another organization in the same group. This API supports both brokered and non-brokered integrations.  Use this API for when you want to share a Broker token between several Snyk organizations (integrations).

### Example


```python
import openapi_client
from openapi_client.models.clone_an_integration_with_settings_and_credentials_request import CloneAnIntegrationWithSettingsAndCredentialsRequest
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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | Source organization public ID to clone integration settings from. The `API_KEY` must have access to this organization.
    integration_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | Source integration public ID to clone.
    clone_an_integration_with_settings_and_credentials_request = openapi_client.CloneAnIntegrationWithSettingsAndCredentialsRequest() # CloneAnIntegrationWithSettingsAndCredentialsRequest |  (optional)

    try:
        # Clone an integration (with settings and credentials)
        api_instance.clone_an_integration__with_settings_and_credentials(org_id, integration_id, clone_an_integration_with_settings_and_credentials_request=clone_an_integration_with_settings_and_credentials_request)
    except Exception as e:
        print("Exception when calling IntegrationsApi->clone_an_integration__with_settings_and_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Source organization public ID to clone integration settings from. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **integration_id** | **str**| Source integration public ID to clone. | 
 **clone_an_integration_with_settings_and_credentials_request** | [**CloneAnIntegrationWithSettingsAndCredentialsRequest**](CloneAnIntegrationWithSettingsAndCredentialsRequest.md)|  | [optional] 

### Return type

void (empty response body)

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

# **delete_credentials**
> delete_credentials(org_id, integration_id)

Delete credentials

Removes any credentials set for this integration. If this is a brokered connection the operation will have no effect.

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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    integration_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The integration ID.

    try:
        # Delete credentials
        api_instance.delete_credentials(org_id, integration_id)
    except Exception as e:
        print("Exception when calling IntegrationsApi->delete_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **integration_id** | **str**| The integration ID. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_existing_integration_by_type**
> GetExistingIntegrationByType200Response get_existing_integration_by_type(org_id, type)

Get existing integration by type



### Example


```python
import openapi_client
from openapi_client.models.get_existing_integration_by_type200_response import GetExistingIntegrationByType200Response
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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The `API_KEY` must have admin access to this organization.
    type = 'github' # str | Integration type.

    try:
        # Get existing integration by type
        api_response = api_instance.get_existing_integration_by_type(org_id, type)
        print("The response of IntegrationsApi->get_existing_integration_by_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->get_existing_integration_by_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **type** | **str**| Integration type. | 

### Return type

[**GetExistingIntegrationByType200Response**](GetExistingIntegrationByType200Response.md)

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

# **list**
> object list(org_id)

List



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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization public ID. The `API_KEY` must have admin access to this organization.

    try:
        # List
        api_response = api_instance.list(org_id)
        print("The response of IntegrationsApi->list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization public ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 

### Return type

**object**

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

# **provision_new_broker_token**
> provision_new_broker_token(org_id, integration_id)

Provision new broker token

Issue a new and unique provisional broker token for the brokered integration.  Used for zero down-time token rotation with the Snyk Broker. Once provisioned, the token can be used to initialize a new broker client before using the switch API to update the token in use by the integration.  The new provisional token will fail to be created if the integration, or any other integration in the same group, already has one provisioned.

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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The `API_KEY` must have access to this organization.
    integration_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | 

    try:
        # Provision new broker token
        api_instance.provision_new_broker_token(org_id, integration_id)
    except Exception as e:
        print("Exception when calling IntegrationsApi->provision_new_broker_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The &#x60;API_KEY&#x60; must have access to this organization. | 
 **integration_id** | **str**|  | 

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

# **retrieve**
> Retrieve200Response retrieve(org_id, integration_id)

Retrieve



### Example


```python
import openapi_client
from openapi_client.models.retrieve200_response import Retrieve200Response
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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    integration_id = '9a3e5d90-b782-468a-a042-9a2073736f0b' # str | The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.

    try:
        # Retrieve
        api_response = api_instance.retrieve(org_id, integration_id)
        print("The response of IntegrationsApi->retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **integration_id** | **str**| The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured. | 

### Return type

[**Retrieve200Response**](Retrieve200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **switch_between_broker_tokens**
> switch_between_broker_tokens(org_id, integration_id)

Switch between broker tokens

Switch the existing broker token with the provisioned token for this integration and any other in the same group. Only perform this action when you have a Broker client running with the provisioned token. This action will fail if there is no token provisioned for this integration or any integration in the same group.

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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The `API_KEY` must have access to this organization.
    integration_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | 

    try:
        # Switch between broker tokens
        api_instance.switch_between_broker_tokens(org_id, integration_id)
    except Exception as e:
        print("Exception when calling IntegrationsApi->switch_between_broker_tokens: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The &#x60;API_KEY&#x60; must have access to this organization. | 
 **integration_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> Retrieve200Response update(org_id, integration_id, update_request=update_request)

Update



### Example


```python
import openapi_client
from openapi_client.models.retrieve200_response import Retrieve200Response
from openapi_client.models.update_request import UpdateRequest
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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    integration_id = '9a3e5d90-b782-468a-a042-9a2073736f0b' # str | The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.
    update_request = openapi_client.UpdateRequest() # UpdateRequest |  (optional)

    try:
        # Update
        api_response = api_instance.update(org_id, integration_id, update_request=update_request)
        print("The response of IntegrationsApi->update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationsApi->update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **integration_id** | **str**| The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured. | 
 **update_request** | [**UpdateRequest**](UpdateRequest.md)|  | [optional] 

### Return type

[**Retrieve200Response**](Retrieve200Response.md)

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

# **update_existing_integration**
> update_existing_integration(org_id, integration_id, update_existing_integration_request=update_existing_integration_request)

Update existing integration

+ Update integration's credentials for given organization. Integration must be **not brokered**  + Enable or disable brokered integration for given organization. *Credentials required for disabling brokered integration*  Examples in right section:  1. Set up a broker for an existing integration  2. Update credentials for an existing non-brokered integration  3. Disable broker for an existing integration

### Example


```python
import openapi_client
from openapi_client.models.update_existing_integration_request import UpdateExistingIntegrationRequest
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
    api_instance = openapi_client.IntegrationsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    integration_id = '9a3e5d90-b782-468a-a042-9a2073736f0b' # str | The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.
    update_existing_integration_request = openapi_client.UpdateExistingIntegrationRequest() # UpdateExistingIntegrationRequest |  (optional)

    try:
        # Update existing integration
        api_instance.update_existing_integration(org_id, integration_id, update_existing_integration_request=update_existing_integration_request)
    except Exception as e:
        print("Exception when calling IntegrationsApi->update_existing_integration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **integration_id** | **str**| The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured. | 
 **update_existing_integration_request** | [**UpdateExistingIntegrationRequest**](UpdateExistingIntegrationRequest.md)|  | [optional] 

### Return type

void (empty response body)

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

