# openapi_client.ProfilesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_sensor_alerts_profile_2**](ProfilesApi.md#create_network_sensor_alerts_profile_2) | **POST** /networks/{networkId}/sensor/alerts/profiles | Creates a sensor alert profile for a network.
[**create_organization_alerts_profile_2**](ProfilesApi.md#create_organization_alerts_profile_2) | **POST** /organizations/{organizationId}/alerts/profiles | Create an organization-wide alert configuration
[**delete_network_sensor_alerts_profile_2**](ProfilesApi.md#delete_network_sensor_alerts_profile_2) | **DELETE** /networks/{networkId}/sensor/alerts/profiles/{id} | Deletes a sensor alert profile from a network.
[**delete_organization_alerts_profile_2**](ProfilesApi.md#delete_organization_alerts_profile_2) | **DELETE** /organizations/{organizationId}/alerts/profiles/{alertConfigId} | Removes an organization-wide alert config
[**get_network_sensor_alerts_profile_2**](ProfilesApi.md#get_network_sensor_alerts_profile_2) | **GET** /networks/{networkId}/sensor/alerts/profiles/{id} | Show details of a sensor alert profile for a network.
[**get_network_sensor_alerts_profiles_2**](ProfilesApi.md#get_network_sensor_alerts_profiles_2) | **GET** /networks/{networkId}/sensor/alerts/profiles | Lists all sensor alert profiles for a network.
[**get_network_sm_profiles_1**](ProfilesApi.md#get_network_sm_profiles_1) | **GET** /networks/{networkId}/sm/profiles | List all profiles in a network
[**get_organization_alerts_profiles_2**](ProfilesApi.md#get_organization_alerts_profiles_2) | **GET** /organizations/{organizationId}/alerts/profiles | List all organization-wide alert configurations
[**get_organization_config_template_switch_profile_port_2**](ProfilesApi.md#get_organization_config_template_switch_profile_port_2) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Return a switch profile port
[**get_organization_config_template_switch_profile_ports_2**](ProfilesApi.md#get_organization_config_template_switch_profile_ports_2) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports | Return all the ports of a switch profile
[**get_organization_config_template_switch_profiles_2**](ProfilesApi.md#get_organization_config_template_switch_profiles_2) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles | List the switch profiles for your switch template configuration
[**update_network_sensor_alerts_profile_2**](ProfilesApi.md#update_network_sensor_alerts_profile_2) | **PUT** /networks/{networkId}/sensor/alerts/profiles/{id} | Updates a sensor alert profile for a network.
[**update_organization_alerts_profile_2**](ProfilesApi.md#update_organization_alerts_profile_2) | **PUT** /organizations/{organizationId}/alerts/profiles/{alertConfigId} | Update an organization-wide alert config
[**update_organization_config_template_switch_profile_port_2**](ProfilesApi.md#update_organization_config_template_switch_profile_port_2) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId} | Update a switch profile port


# **create_network_sensor_alerts_profile_2**
> GetNetworkSensorAlertsProfiles200ResponseInner create_network_sensor_alerts_profile_2(network_id, create_network_sensor_alerts_profile_request)

Creates a sensor alert profile for a network.

Creates a sensor alert profile for a network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_sensor_alerts_profile_request import CreateNetworkSensorAlertsProfileRequest
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner
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
    api_instance = openapi_client.ProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_sensor_alerts_profile_request = openapi_client.CreateNetworkSensorAlertsProfileRequest() # CreateNetworkSensorAlertsProfileRequest | 

    try:
        # Creates a sensor alert profile for a network.
        api_response = api_instance.create_network_sensor_alerts_profile_2(network_id, create_network_sensor_alerts_profile_request)
        print("The response of ProfilesApi->create_network_sensor_alerts_profile_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->create_network_sensor_alerts_profile_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_sensor_alerts_profile_request** | [**CreateNetworkSensorAlertsProfileRequest**](CreateNetworkSensorAlertsProfileRequest.md)|  | 

### Return type

[**GetNetworkSensorAlertsProfiles200ResponseInner**](GetNetworkSensorAlertsProfiles200ResponseInner.md)

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

# **create_organization_alerts_profile_2**
> object create_organization_alerts_profile_2(organization_id, create_organization_alerts_profile_request)

Create an organization-wide alert configuration

Create an organization-wide alert configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_alerts_profile_request import CreateOrganizationAlertsProfileRequest
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
    api_instance = openapi_client.ProfilesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_alerts_profile_request = openapi_client.CreateOrganizationAlertsProfileRequest() # CreateOrganizationAlertsProfileRequest | 

    try:
        # Create an organization-wide alert configuration
        api_response = api_instance.create_organization_alerts_profile_2(organization_id, create_organization_alerts_profile_request)
        print("The response of ProfilesApi->create_organization_alerts_profile_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->create_organization_alerts_profile_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_alerts_profile_request** | [**CreateOrganizationAlertsProfileRequest**](CreateOrganizationAlertsProfileRequest.md)|  | 

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

# **delete_network_sensor_alerts_profile_2**
> delete_network_sensor_alerts_profile_2(network_id, id)

Deletes a sensor alert profile from a network.

Deletes a sensor alert profile from a network.

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
    api_instance = openapi_client.ProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Deletes a sensor alert profile from a network.
        api_instance.delete_network_sensor_alerts_profile_2(network_id, id)
    except Exception as e:
        print("Exception when calling ProfilesApi->delete_network_sensor_alerts_profile_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **id** | **str**|  | 

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

# **delete_organization_alerts_profile_2**
> delete_organization_alerts_profile_2(organization_id, alert_config_id)

Removes an organization-wide alert config

Removes an organization-wide alert config

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
    api_instance = openapi_client.ProfilesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    alert_config_id = 'alert_config_id_example' # str | 

    try:
        # Removes an organization-wide alert config
        api_instance.delete_organization_alerts_profile_2(organization_id, alert_config_id)
    except Exception as e:
        print("Exception when calling ProfilesApi->delete_organization_alerts_profile_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **alert_config_id** | **str**|  | 

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

# **get_network_sensor_alerts_profile_2**
> GetNetworkSensorAlertsProfiles200ResponseInner get_network_sensor_alerts_profile_2(network_id, id)

Show details of a sensor alert profile for a network.

Show details of a sensor alert profile for a network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner
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
    api_instance = openapi_client.ProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Show details of a sensor alert profile for a network.
        api_response = api_instance.get_network_sensor_alerts_profile_2(network_id, id)
        print("The response of ProfilesApi->get_network_sensor_alerts_profile_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->get_network_sensor_alerts_profile_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**GetNetworkSensorAlertsProfiles200ResponseInner**](GetNetworkSensorAlertsProfiles200ResponseInner.md)

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

# **get_network_sensor_alerts_profiles_2**
> List[GetNetworkSensorAlertsProfiles200ResponseInner] get_network_sensor_alerts_profiles_2(network_id)

Lists all sensor alert profiles for a network.

Lists all sensor alert profiles for a network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner
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
    api_instance = openapi_client.ProfilesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Lists all sensor alert profiles for a network.
        api_response = api_instance.get_network_sensor_alerts_profiles_2(network_id)
        print("The response of ProfilesApi->get_network_sensor_alerts_profiles_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->get_network_sensor_alerts_profiles_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkSensorAlertsProfiles200ResponseInner]**](GetNetworkSensorAlertsProfiles200ResponseInner.md)

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

# **get_network_sm_profiles_1**
> List[GetNetworkSmProfiles200ResponseInner] get_network_sm_profiles_1(network_id)

List all profiles in a network

List all profiles in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_profiles200_response_inner import GetNetworkSmProfiles200ResponseInner
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
    api_instance = openapi_client.ProfilesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List all profiles in a network
        api_response = api_instance.get_network_sm_profiles_1(network_id)
        print("The response of ProfilesApi->get_network_sm_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->get_network_sm_profiles_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkSmProfiles200ResponseInner]**](GetNetworkSmProfiles200ResponseInner.md)

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

# **get_organization_alerts_profiles_2**
> List[object] get_organization_alerts_profiles_2(organization_id)

List all organization-wide alert configurations

List all organization-wide alert configurations

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
    api_instance = openapi_client.ProfilesApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List all organization-wide alert configurations
        api_response = api_instance.get_organization_alerts_profiles_2(organization_id)
        print("The response of ProfilesApi->get_organization_alerts_profiles_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->get_organization_alerts_profiles_2: %s\n" % e)
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

# **get_organization_config_template_switch_profile_port_2**
> GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner get_organization_config_template_switch_profile_port_2(organization_id, config_template_id, profile_id, port_id)

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
    api_instance = openapi_client.ProfilesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 
    port_id = 'port_id_example' # str | 

    try:
        # Return a switch profile port
        api_response = api_instance.get_organization_config_template_switch_profile_port_2(organization_id, config_template_id, profile_id, port_id)
        print("The response of ProfilesApi->get_organization_config_template_switch_profile_port_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->get_organization_config_template_switch_profile_port_2: %s\n" % e)
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

# **get_organization_config_template_switch_profile_ports_2**
> List[GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner] get_organization_config_template_switch_profile_ports_2(organization_id, config_template_id, profile_id)

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
    api_instance = openapi_client.ProfilesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 

    try:
        # Return all the ports of a switch profile
        api_response = api_instance.get_organization_config_template_switch_profile_ports_2(organization_id, config_template_id, profile_id)
        print("The response of ProfilesApi->get_organization_config_template_switch_profile_ports_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->get_organization_config_template_switch_profile_ports_2: %s\n" % e)
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

# **get_organization_config_template_switch_profiles_2**
> GetOrganizationConfigTemplateSwitchProfiles200Response get_organization_config_template_switch_profiles_2(organization_id, config_template_id)

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
    api_instance = openapi_client.ProfilesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 

    try:
        # List the switch profiles for your switch template configuration
        api_response = api_instance.get_organization_config_template_switch_profiles_2(organization_id, config_template_id)
        print("The response of ProfilesApi->get_organization_config_template_switch_profiles_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->get_organization_config_template_switch_profiles_2: %s\n" % e)
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

# **update_network_sensor_alerts_profile_2**
> GetNetworkSensorAlertsProfiles200ResponseInner update_network_sensor_alerts_profile_2(network_id, id, update_network_sensor_alerts_profile_request=update_network_sensor_alerts_profile_request)

Updates a sensor alert profile for a network.

Updates a sensor alert profile for a network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_profiles200_response_inner import GetNetworkSensorAlertsProfiles200ResponseInner
from openapi_client.models.update_network_sensor_alerts_profile_request import UpdateNetworkSensorAlertsProfileRequest
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
    api_instance = openapi_client.ProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    id = 'id_example' # str | 
    update_network_sensor_alerts_profile_request = openapi_client.UpdateNetworkSensorAlertsProfileRequest() # UpdateNetworkSensorAlertsProfileRequest |  (optional)

    try:
        # Updates a sensor alert profile for a network.
        api_response = api_instance.update_network_sensor_alerts_profile_2(network_id, id, update_network_sensor_alerts_profile_request=update_network_sensor_alerts_profile_request)
        print("The response of ProfilesApi->update_network_sensor_alerts_profile_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->update_network_sensor_alerts_profile_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **id** | **str**|  | 
 **update_network_sensor_alerts_profile_request** | [**UpdateNetworkSensorAlertsProfileRequest**](UpdateNetworkSensorAlertsProfileRequest.md)|  | [optional] 

### Return type

[**GetNetworkSensorAlertsProfiles200ResponseInner**](GetNetworkSensorAlertsProfiles200ResponseInner.md)

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

# **update_organization_alerts_profile_2**
> object update_organization_alerts_profile_2(organization_id, alert_config_id, update_organization_alerts_profile_request=update_organization_alerts_profile_request)

Update an organization-wide alert config

Update an organization-wide alert config

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_alerts_profile_request import UpdateOrganizationAlertsProfileRequest
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
    api_instance = openapi_client.ProfilesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    alert_config_id = 'alert_config_id_example' # str | 
    update_organization_alerts_profile_request = openapi_client.UpdateOrganizationAlertsProfileRequest() # UpdateOrganizationAlertsProfileRequest |  (optional)

    try:
        # Update an organization-wide alert config
        api_response = api_instance.update_organization_alerts_profile_2(organization_id, alert_config_id, update_organization_alerts_profile_request=update_organization_alerts_profile_request)
        print("The response of ProfilesApi->update_organization_alerts_profile_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->update_organization_alerts_profile_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **alert_config_id** | **str**|  | 
 **update_organization_alerts_profile_request** | [**UpdateOrganizationAlertsProfileRequest**](UpdateOrganizationAlertsProfileRequest.md)|  | [optional] 

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

# **update_organization_config_template_switch_profile_port_2**
> GetOrganizationConfigTemplateSwitchProfilePorts200ResponseInner update_organization_config_template_switch_profile_port_2(organization_id, config_template_id, profile_id, port_id, update_organization_config_template_switch_profile_port_request=update_organization_config_template_switch_profile_port_request)

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
    api_instance = openapi_client.ProfilesApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    profile_id = 'profile_id_example' # str | 
    port_id = 'port_id_example' # str | 
    update_organization_config_template_switch_profile_port_request = openapi_client.UpdateOrganizationConfigTemplateSwitchProfilePortRequest() # UpdateOrganizationConfigTemplateSwitchProfilePortRequest |  (optional)

    try:
        # Update a switch profile port
        api_response = api_instance.update_organization_config_template_switch_profile_port_2(organization_id, config_template_id, profile_id, port_id, update_organization_config_template_switch_profile_port_request=update_organization_config_template_switch_profile_port_request)
        print("The response of ProfilesApi->update_organization_config_template_switch_profile_port_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfilesApi->update_organization_config_template_switch_profile_port_2: %s\n" % e)
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

