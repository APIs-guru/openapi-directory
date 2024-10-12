# openapi_client.SamlApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_saml_idp_1**](SamlApi.md#create_organization_saml_idp_1) | **POST** /organizations/{organizationId}/saml/idps | Create a SAML IdP for your organization.
[**delete_organization_saml_idp_1**](SamlApi.md#delete_organization_saml_idp_1) | **DELETE** /organizations/{organizationId}/saml/idps/{idpId} | Remove a SAML IdP in your organization.
[**get_organization_saml_1**](SamlApi.md#get_organization_saml_1) | **GET** /organizations/{organizationId}/saml | Returns the SAML SSO enabled settings for an organization.
[**get_organization_saml_idp_1**](SamlApi.md#get_organization_saml_idp_1) | **GET** /organizations/{organizationId}/saml/idps/{idpId} | Get a SAML IdP from your organization.
[**get_organization_saml_idps_1**](SamlApi.md#get_organization_saml_idps_1) | **GET** /organizations/{organizationId}/saml/idps | List the SAML IdPs in your organization.
[**update_organization_saml_1**](SamlApi.md#update_organization_saml_1) | **PUT** /organizations/{organizationId}/saml | Updates the SAML SSO enabled settings for an organization.
[**update_organization_saml_idp_1**](SamlApi.md#update_organization_saml_idp_1) | **PUT** /organizations/{organizationId}/saml/idps/{idpId} | Update a SAML IdP in your organization


# **create_organization_saml_idp_1**
> List[GetOrganizationSamlIdps200ResponseInner] create_organization_saml_idp_1(organization_id, create_organization_saml_idp_request)

Create a SAML IdP for your organization.

Create a SAML IdP for your organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_saml_idp_request import CreateOrganizationSamlIdpRequest
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner
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
    api_instance = openapi_client.SamlApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_saml_idp_request = openapi_client.CreateOrganizationSamlIdpRequest() # CreateOrganizationSamlIdpRequest | 

    try:
        # Create a SAML IdP for your organization.
        api_response = api_instance.create_organization_saml_idp_1(organization_id, create_organization_saml_idp_request)
        print("The response of SamlApi->create_organization_saml_idp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SamlApi->create_organization_saml_idp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_saml_idp_request** | [**CreateOrganizationSamlIdpRequest**](CreateOrganizationSamlIdpRequest.md)|  | 

### Return type

[**List[GetOrganizationSamlIdps200ResponseInner]**](GetOrganizationSamlIdps200ResponseInner.md)

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

# **delete_organization_saml_idp_1**
> delete_organization_saml_idp_1(organization_id, idp_id)

Remove a SAML IdP in your organization.

Remove a SAML IdP in your organization.

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
    api_instance = openapi_client.SamlApi(api_client)
    organization_id = 'organization_id_example' # str | 
    idp_id = 'idp_id_example' # str | 

    try:
        # Remove a SAML IdP in your organization.
        api_instance.delete_organization_saml_idp_1(organization_id, idp_id)
    except Exception as e:
        print("Exception when calling SamlApi->delete_organization_saml_idp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **idp_id** | **str**|  | 

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

# **get_organization_saml_1**
> GetOrganizationSaml200Response get_organization_saml_1(organization_id)

Returns the SAML SSO enabled settings for an organization.

Returns the SAML SSO enabled settings for an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml200_response import GetOrganizationSaml200Response
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
    api_instance = openapi_client.SamlApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns the SAML SSO enabled settings for an organization.
        api_response = api_instance.get_organization_saml_1(organization_id)
        print("The response of SamlApi->get_organization_saml_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SamlApi->get_organization_saml_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationSaml200Response**](GetOrganizationSaml200Response.md)

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

# **get_organization_saml_idp_1**
> GetOrganizationSamlIdps200ResponseInner get_organization_saml_idp_1(organization_id, idp_id)

Get a SAML IdP from your organization.

Get a SAML IdP from your organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner
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
    api_instance = openapi_client.SamlApi(api_client)
    organization_id = 'organization_id_example' # str | 
    idp_id = 'idp_id_example' # str | 

    try:
        # Get a SAML IdP from your organization.
        api_response = api_instance.get_organization_saml_idp_1(organization_id, idp_id)
        print("The response of SamlApi->get_organization_saml_idp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SamlApi->get_organization_saml_idp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **idp_id** | **str**|  | 

### Return type

[**GetOrganizationSamlIdps200ResponseInner**](GetOrganizationSamlIdps200ResponseInner.md)

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

# **get_organization_saml_idps_1**
> List[GetOrganizationSamlIdps200ResponseInner] get_organization_saml_idps_1(organization_id)

List the SAML IdPs in your organization.

List the SAML IdPs in your organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner
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
    api_instance = openapi_client.SamlApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the SAML IdPs in your organization.
        api_response = api_instance.get_organization_saml_idps_1(organization_id)
        print("The response of SamlApi->get_organization_saml_idps_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SamlApi->get_organization_saml_idps_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**List[GetOrganizationSamlIdps200ResponseInner]**](GetOrganizationSamlIdps200ResponseInner.md)

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

# **update_organization_saml_1**
> GetOrganizationSaml200Response update_organization_saml_1(organization_id, update_organization_saml_request=update_organization_saml_request)

Updates the SAML SSO enabled settings for an organization.

Updates the SAML SSO enabled settings for an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml200_response import GetOrganizationSaml200Response
from openapi_client.models.update_organization_saml_request import UpdateOrganizationSamlRequest
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
    api_instance = openapi_client.SamlApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_saml_request = openapi_client.UpdateOrganizationSamlRequest() # UpdateOrganizationSamlRequest |  (optional)

    try:
        # Updates the SAML SSO enabled settings for an organization.
        api_response = api_instance.update_organization_saml_1(organization_id, update_organization_saml_request=update_organization_saml_request)
        print("The response of SamlApi->update_organization_saml_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SamlApi->update_organization_saml_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_saml_request** | [**UpdateOrganizationSamlRequest**](UpdateOrganizationSamlRequest.md)|  | [optional] 

### Return type

[**GetOrganizationSaml200Response**](GetOrganizationSaml200Response.md)

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

# **update_organization_saml_idp_1**
> List[GetOrganizationSamlIdps200ResponseInner] update_organization_saml_idp_1(organization_id, idp_id, update_organization_saml_idp_request=update_organization_saml_idp_request)

Update a SAML IdP in your organization

Update a SAML IdP in your organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner
from openapi_client.models.update_organization_saml_idp_request import UpdateOrganizationSamlIdpRequest
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
    api_instance = openapi_client.SamlApi(api_client)
    organization_id = 'organization_id_example' # str | 
    idp_id = 'idp_id_example' # str | 
    update_organization_saml_idp_request = openapi_client.UpdateOrganizationSamlIdpRequest() # UpdateOrganizationSamlIdpRequest |  (optional)

    try:
        # Update a SAML IdP in your organization
        api_response = api_instance.update_organization_saml_idp_1(organization_id, idp_id, update_organization_saml_idp_request=update_organization_saml_idp_request)
        print("The response of SamlApi->update_organization_saml_idp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SamlApi->update_organization_saml_idp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **idp_id** | **str**|  | 
 **update_organization_saml_idp_request** | [**UpdateOrganizationSamlIdpRequest**](UpdateOrganizationSamlIdpRequest.md)|  | [optional] 

### Return type

[**List[GetOrganizationSamlIdps200ResponseInner]**](GetOrganizationSamlIdps200ResponseInner.md)

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

