# openapi_client.ConfigTemplatesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_config_template_1**](ConfigTemplatesApi.md#create_organization_config_template_1) | **POST** /organizations/{organizationId}/configTemplates | Create a new configuration template
[**delete_organization_config_template_1**](ConfigTemplatesApi.md#delete_organization_config_template_1) | **DELETE** /organizations/{organizationId}/configTemplates/{configTemplateId} | Remove a configuration template
[**get_organization_config_template_1**](ConfigTemplatesApi.md#get_organization_config_template_1) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId} | Return a single configuration template
[**get_organization_config_template_switch_profile_port_1**](ConfigTemplatesApi.md#get_organization_config_template_switch_profile_port_1) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Return a switch profile port
[**get_organization_config_template_switch_profile_ports_1**](ConfigTemplatesApi.md#get_organization_config_template_switch_profile_ports_1) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports | Return all the ports of a switch profile
[**get_organization_config_template_switch_profiles_1**](ConfigTemplatesApi.md#get_organization_config_template_switch_profiles_1) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles | List the switch profiles for your switch template configuration
[**get_organization_config_templates_1**](ConfigTemplatesApi.md#get_organization_config_templates_1) | **GET** /organizations/{organizationId}/configTemplates | List the configuration templates for this organization
[**update_organization_config_template_1**](ConfigTemplatesApi.md#update_organization_config_template_1) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId} | Update a configuration template
[**update_organization_config_template_switch_profile_port_1**](ConfigTemplatesApi.md#update_organization_config_template_switch_profile_port_1) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Update a switch profile port


# **create_organization_config_template_1**
> object create_organization_config_template_1(organization_id, create_organization_config_template_request)

Create a new configuration template

Create a new configuration template

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_config_template_request import CreateOrganizationConfigTemplateRequest
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_config_template_request = openapi_client.CreateOrganizationConfigTemplateRequest() # CreateOrganizationConfigTemplateRequest | 

    try:
        # Create a new configuration template
        api_response = api_instance.create_organization_config_template_1(organization_id, create_organization_config_template_request)
        print("The response of ConfigTemplatesApi->create_organization_config_template_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->create_organization_config_template_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_config_template_request** | [**CreateOrganizationConfigTemplateRequest**](CreateOrganizationConfigTemplateRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_config_template_1**
> delete_organization_config_template_1(organization_id, config_template_id)

Remove a configuration template

Remove a configuration template

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 

    try:
        # Remove a configuration template
        api_instance.delete_organization_config_template_1(organization_id, config_template_id)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->delete_organization_config_template_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_config_template_1**
> object get_organization_config_template_1(organization_id, config_template_id)

Return a single configuration template

Return a single configuration template

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 

    try:
        # Return a single configuration template
        api_response = api_instance.get_organization_config_template_1(organization_id, config_template_id)
        print("The response of ConfigTemplatesApi->get_organization_config_template_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->get_organization_config_template_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 

### Return type

**object**

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

# **get_organization_config_template_switch_profile_port_1**
> GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner get_organization_config_template_switch_profile_port_1(organization_id, config_template_id, profile_id, port_id)

Return a switch profile port

Return a switch profile port

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_config_template_switch_profile_ports200_response_inner import GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 
    port_id = 'port_id_example' # str | 

    try:
        # Return a switch profile port
        api_response = api_instance.get_organization_config_template_switch_profile_port_1(organization_id, config_template_id, profile_id, port_id)
        print("The response of ConfigTemplatesApi->get_organization_config_template_switch_profile_port_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->get_organization_config_template_switch_profile_port_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 
 **profile_id** | **str**|  | 
 **port_id** | **str**|  | 

### Return type

[**GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner**](GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.md)

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

# **get_organization_config_template_switch_profile_ports_1**
> List[GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner] get_organization_config_template_switch_profile_ports_1(organization_id, config_template_id, profile_id)

Return all the ports of a switch profile

Return all the ports of a switch profile

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_config_template_switch_profile_ports200_response_inner import GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 

    try:
        # Return all the ports of a switch profile
        api_response = api_instance.get_organization_config_template_switch_profile_ports_1(organization_id, config_template_id, profile_id)
        print("The response of ConfigTemplatesApi->get_organization_config_template_switch_profile_ports_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->get_organization_config_template_switch_profile_ports_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 
 **profile_id** | **str**|  | 

### Return type

[**List[GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner]**](GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.md)

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

# **get_organization_config_template_switch_profiles_1**
> GetOrganizationConfigTemplateSwitchProfiles200Response get_organization_config_template_switch_profiles_1(organization_id, config_template_id)

List the switch profiles for your switch template configuration

List the switch profiles for your switch template configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_config_template_switch_profiles200_response import GetOrganizationConfigTemplateSwitchProfiles200Response
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 

    try:
        # List the switch profiles for your switch template configuration
        api_response = api_instance.get_organization_config_template_switch_profiles_1(organization_id, config_template_id)
        print("The response of ConfigTemplatesApi->get_organization_config_template_switch_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->get_organization_config_template_switch_profiles_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 

### Return type

[**GetOrganizationConfigTemplateSwitchProfiles200Response**](GetOrganizationConfigTemplateSwitchProfiles200Response.md)

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

# **get_organization_config_templates_1**
> List[object] get_organization_config_templates_1(organization_id)

List the configuration templates for this organization

List the configuration templates for this organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the configuration templates for this organization
        api_response = api_instance.get_organization_config_templates_1(organization_id)
        print("The response of ConfigTemplatesApi->get_organization_config_templates_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->get_organization_config_templates_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

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

# **update_organization_config_template_1**
> object update_organization_config_template_1(organization_id, config_template_id, update_organization_config_template_request=update_organization_config_template_request)

Update a configuration template

Update a configuration template

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_config_template_request import UpdateOrganizationConfigTemplateRequest
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    update_organization_config_template_request = openapi_client.UpdateOrganizationConfigTemplateRequest() # UpdateOrganizationConfigTemplateRequest |  (optional)

    try:
        # Update a configuration template
        api_response = api_instance.update_organization_config_template_1(organization_id, config_template_id, update_organization_config_template_request=update_organization_config_template_request)
        print("The response of ConfigTemplatesApi->update_organization_config_template_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->update_organization_config_template_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 
 **update_organization_config_template_request** | [**UpdateOrganizationConfigTemplateRequest**](UpdateOrganizationConfigTemplateRequest.md)|  | [optional] 

### Return type

**object**

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

# **update_organization_config_template_switch_profile_port_1**
> GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner update_organization_config_template_switch_profile_port_1(organization_id, config_template_id, profile_id, port_id, update_organization_config_template_switch_profile_port_request=update_organization_config_template_switch_profile_port_request)

Update a switch profile port

Update a switch profile port

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_config_template_switch_profile_ports200_response_inner import GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner
from openapi_client.models.update_organization_config_template_switch_profile_port_request import UpdateOrganizationConfigTemplateSwitchProfilePortRequest
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
    api_instance = openapi_client.ConfigTemplatesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 
    port_id = 'port_id_example' # str | 
    update_organization_config_template_switch_profile_port_request = openapi_client.UpdateOrganizationConfigTemplateSwitchProfilePortRequest() # UpdateOrganizationConfigTemplateSwitchProfilePortRequest |  (optional)

    try:
        # Update a switch profile port
        api_response = api_instance.update_organization_config_template_switch_profile_port_1(organization_id, config_template_id, profile_id, port_id, update_organization_config_template_switch_profile_port_request=update_organization_config_template_switch_profile_port_request)
        print("The response of ConfigTemplatesApi->update_organization_config_template_switch_profile_port_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConfigTemplatesApi->update_organization_config_template_switch_profile_port_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 
 **profile_id** | **str**|  | 
 **port_id** | **str**|  | 
 **update_organization_config_template_switch_profile_port_request** | [**UpdateOrganizationConfigTemplateSwitchProfilePortRequest**](UpdateOrganizationConfigTemplateSwitchProfilePortRequest.md)|  | [optional] 

### Return type

[**GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner**](GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner.md)

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

