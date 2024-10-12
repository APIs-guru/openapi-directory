# openapi_client.OptInsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_early_access_features_opt_in_3**](OptInsApi.md#create_organization_early_access_features_opt_in_3) | **POST** /organizations/{organizationId}/earlyAccess/features/optIns | Create a new early access feature opt-in for an organization
[**delete_organization_early_access_features_opt_in_3**](OptInsApi.md#delete_organization_early_access_features_opt_in_3) | **DELETE** /organizations/{organizationId}/earlyAccess/features/optIns/{optInId} | Delete an early access feature opt-in
[**get_organization_early_access_features_opt_in_3**](OptInsApi.md#get_organization_early_access_features_opt_in_3) | **GET** /organizations/{organizationId}/earlyAccess/features/optIns/{optInId} | Show an early access feature opt-in for an organization
[**get_organization_early_access_features_opt_ins_3**](OptInsApi.md#get_organization_early_access_features_opt_ins_3) | **GET** /organizations/{organizationId}/earlyAccess/features/optIns | List the early access feature opt-ins for an organization
[**update_organization_early_access_features_opt_in_3**](OptInsApi.md#update_organization_early_access_features_opt_in_3) | **PUT** /organizations/{organizationId}/earlyAccess/features/optIns/{optInId} | Update an early access feature opt-in for an organization


# **create_organization_early_access_features_opt_in_3**
> object create_organization_early_access_features_opt_in_3(organization_id, create_organization_early_access_features_opt_in_request)

Create a new early access feature opt-in for an organization

Create a new early access feature opt-in for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_early_access_features_opt_in_request import CreateOrganizationEarlyAccessFeaturesOptInRequest
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
    api_instance = openapi_client.OptInsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_early_access_features_opt_in_request = openapi_client.CreateOrganizationEarlyAccessFeaturesOptInRequest() # CreateOrganizationEarlyAccessFeaturesOptInRequest | 

    try:
        # Create a new early access feature opt-in for an organization
        api_response = api_instance.create_organization_early_access_features_opt_in_3(organization_id, create_organization_early_access_features_opt_in_request)
        print("The response of OptInsApi->create_organization_early_access_features_opt_in_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OptInsApi->create_organization_early_access_features_opt_in_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_early_access_features_opt_in_request** | [**CreateOrganizationEarlyAccessFeaturesOptInRequest**](CreateOrganizationEarlyAccessFeaturesOptInRequest.md)|  | 

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

# **delete_organization_early_access_features_opt_in_3**
> delete_organization_early_access_features_opt_in_3(organization_id, opt_in_id)

Delete an early access feature opt-in

Delete an early access feature opt-in

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
    api_instance = openapi_client.OptInsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    opt_in_id = 'opt_in_id_example' # str | 

    try:
        # Delete an early access feature opt-in
        api_instance.delete_organization_early_access_features_opt_in_3(organization_id, opt_in_id)
    except Exception as e:
        print("Exception when calling OptInsApi->delete_organization_early_access_features_opt_in_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **opt_in_id** | **str**|  | 

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

# **get_organization_early_access_features_opt_in_3**
> object get_organization_early_access_features_opt_in_3(organization_id, opt_in_id)

Show an early access feature opt-in for an organization

Show an early access feature opt-in for an organization

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
    api_instance = openapi_client.OptInsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    opt_in_id = 'opt_in_id_example' # str | 

    try:
        # Show an early access feature opt-in for an organization
        api_response = api_instance.get_organization_early_access_features_opt_in_3(organization_id, opt_in_id)
        print("The response of OptInsApi->get_organization_early_access_features_opt_in_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OptInsApi->get_organization_early_access_features_opt_in_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **opt_in_id** | **str**|  | 

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

# **get_organization_early_access_features_opt_ins_3**
> List[object] get_organization_early_access_features_opt_ins_3(organization_id)

List the early access feature opt-ins for an organization

List the early access feature opt-ins for an organization

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
    api_instance = openapi_client.OptInsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the early access feature opt-ins for an organization
        api_response = api_instance.get_organization_early_access_features_opt_ins_3(organization_id)
        print("The response of OptInsApi->get_organization_early_access_features_opt_ins_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OptInsApi->get_organization_early_access_features_opt_ins_3: %s\n" % e)
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

# **update_organization_early_access_features_opt_in_3**
> object update_organization_early_access_features_opt_in_3(organization_id, opt_in_id, update_organization_early_access_features_opt_in_request=update_organization_early_access_features_opt_in_request)

Update an early access feature opt-in for an organization

Update an early access feature opt-in for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_early_access_features_opt_in_request import UpdateOrganizationEarlyAccessFeaturesOptInRequest
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
    api_instance = openapi_client.OptInsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    opt_in_id = 'opt_in_id_example' # str | 
    update_organization_early_access_features_opt_in_request = openapi_client.UpdateOrganizationEarlyAccessFeaturesOptInRequest() # UpdateOrganizationEarlyAccessFeaturesOptInRequest |  (optional)

    try:
        # Update an early access feature opt-in for an organization
        api_response = api_instance.update_organization_early_access_features_opt_in_3(organization_id, opt_in_id, update_organization_early_access_features_opt_in_request=update_organization_early_access_features_opt_in_request)
        print("The response of OptInsApi->update_organization_early_access_features_opt_in_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OptInsApi->update_organization_early_access_features_opt_in_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **opt_in_id** | **str**|  | 
 **update_organization_early_access_features_opt_in_request** | [**UpdateOrganizationEarlyAccessFeaturesOptInRequest**](UpdateOrganizationEarlyAccessFeaturesOptInRequest.md)|  | [optional] 

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

