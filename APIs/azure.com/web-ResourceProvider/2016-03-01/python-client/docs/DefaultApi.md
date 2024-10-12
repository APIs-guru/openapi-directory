# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_meters_list**](DefaultApi.md#billing_meters_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/billingMeters | Gets a list of meters for a given location.
[**check_name_availability**](DefaultApi.md#check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Web/checknameavailability | Check if a resource name is available.
[**get_publishing_user**](DefaultApi.md#get_publishing_user) | **GET** /providers/Microsoft.Web/publishingUsers/web | Gets publishing user
[**get_source_control**](DefaultApi.md#get_source_control) | **GET** /providers/Microsoft.Web/sourcecontrols/{sourceControlType} | Gets source control token
[**get_subscription_deployment_locations**](DefaultApi.md#get_subscription_deployment_locations) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/deploymentLocations | Gets list of available geo regions plus ministamps
[**list_geo_regions**](DefaultApi.md#list_geo_regions) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/geoRegions | Get a list of available geographical regions.
[**list_premier_add_on_offers**](DefaultApi.md#list_premier_add_on_offers) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/premieraddonoffers | List all premier add-on offers.
[**list_site_identifiers_assigned_to_host_name**](DefaultApi.md#list_site_identifiers_assigned_to_host_name) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Web/listSitesAssignedToHostName | List all apps that are assigned to a hostname.
[**list_skus**](DefaultApi.md#list_skus) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/skus | List all SKUs.
[**list_source_controls**](DefaultApi.md#list_source_controls) | **GET** /providers/Microsoft.Web/sourcecontrols | Gets the source controls available for Azure websites.
[**move**](DefaultApi.md#move) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources | Move resources between resource groups.
[**update_publishing_user**](DefaultApi.md#update_publishing_user) | **PUT** /providers/Microsoft.Web/publishingUsers/web | Updates publishing user
[**update_source_control**](DefaultApi.md#update_source_control) | **PUT** /providers/Microsoft.Web/sourcecontrols/{sourceControlType} | Updates source control token
[**validate**](DefaultApi.md#validate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/validate | Validate if a resource can be created.
[**validate_move**](DefaultApi.md#validate_move) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/validateMoveResources | Validate whether a resource can be moved.
[**verify_hosting_environment_vnet**](DefaultApi.md#verify_hosting_environment_vnet) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Web/verifyHostingEnvironmentVnet | Verifies if this VNET is compatible with an App Service Environment by analyzing the Network Security Group rules.


# **billing_meters_list**
> BillingMeterCollection billing_meters_list(subscription_id, api_version, billing_location=billing_location)

Gets a list of meters for a given location.

Gets a list of meters for a given location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_meter_collection import BillingMeterCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    billing_location = 'billing_location_example' # str | Azure Location of billable resource (optional)

    try:
        # Gets a list of meters for a given location.
        api_response = api_instance.billing_meters_list(subscription_id, api_version, billing_location=billing_location)
        print("The response of DefaultApi->billing_meters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->billing_meters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **billing_location** | **str**| Azure Location of billable resource | [optional] 

### Return type

[**BillingMeterCollection**](BillingMeterCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **check_name_availability**
> ResourceNameAvailability check_name_availability(subscription_id, api_version, request)

Check if a resource name is available.

Check if a resource name is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_name_availability import ResourceNameAvailability
from openapi_client.models.resource_name_availability_request import ResourceNameAvailabilityRequest
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.ResourceNameAvailabilityRequest() # ResourceNameAvailabilityRequest | Name availability request.

    try:
        # Check if a resource name is available.
        api_response = api_instance.check_name_availability(subscription_id, api_version, request)
        print("The response of DefaultApi->check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **request** | [**ResourceNameAvailabilityRequest**](ResourceNameAvailabilityRequest.md)| Name availability request. | 

### Return type

[**ResourceNameAvailability**](ResourceNameAvailability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_publishing_user**
> GetPublishingUser200Response get_publishing_user(api_version)

Gets publishing user

Gets publishing user

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_publishing_user200_response import GetPublishingUser200Response
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets publishing user
        api_response = api_instance.get_publishing_user(api_version)
        print("The response of DefaultApi->get_publishing_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_publishing_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 

### Return type

[**GetPublishingUser200Response**](GetPublishingUser200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_source_control**
> SourceControl get_source_control(source_control_type, api_version)

Gets source control token

Gets source control token

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_control import SourceControl
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
    api_instance = openapi_client.DefaultApi(api_client)
    source_control_type = 'source_control_type_example' # str | Type of source control
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets source control token
        api_response = api_instance.get_source_control(source_control_type, api_version)
        print("The response of DefaultApi->get_source_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_source_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_control_type** | **str**| Type of source control | 
 **api_version** | **str**| API Version | 

### Return type

[**SourceControl**](SourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_subscription_deployment_locations**
> DeploymentLocations get_subscription_deployment_locations(subscription_id, api_version)

Gets list of available geo regions plus ministamps

Gets list of available geo regions plus ministamps

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_locations import DeploymentLocations
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets list of available geo regions plus ministamps
        api_response = api_instance.get_subscription_deployment_locations(subscription_id, api_version)
        print("The response of DefaultApi->get_subscription_deployment_locations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_subscription_deployment_locations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DeploymentLocations**](DeploymentLocations.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_geo_regions**
> GeoRegionCollection list_geo_regions(subscription_id, api_version, sku=sku, linux_workers_enabled=linux_workers_enabled)

Get a list of available geographical regions.

Get a list of available geographical regions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.geo_region_collection import GeoRegionCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    sku = 'sku_example' # str | Name of SKU used to filter the regions. (optional)
    linux_workers_enabled = True # bool | Specify <code>true</code> if you want to filter to only regions that support Linux workers. (optional)

    try:
        # Get a list of available geographical regions.
        api_response = api_instance.list_geo_regions(subscription_id, api_version, sku=sku, linux_workers_enabled=linux_workers_enabled)
        print("The response of DefaultApi->list_geo_regions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_geo_regions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **sku** | **str**| Name of SKU used to filter the regions. | [optional] 
 **linux_workers_enabled** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; if you want to filter to only regions that support Linux workers. | [optional] 

### Return type

[**GeoRegionCollection**](GeoRegionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_premier_add_on_offers**
> PremierAddOnOfferCollection list_premier_add_on_offers(subscription_id, api_version)

List all premier add-on offers.

List all premier add-on offers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.premier_add_on_offer_collection import PremierAddOnOfferCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List all premier add-on offers.
        api_response = api_instance.list_premier_add_on_offers(subscription_id, api_version)
        print("The response of DefaultApi->list_premier_add_on_offers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_premier_add_on_offers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**PremierAddOnOfferCollection**](PremierAddOnOfferCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_site_identifiers_assigned_to_host_name**
> ListSiteIdentifiersAssignedToHostName200Response list_site_identifiers_assigned_to_host_name(subscription_id, api_version, name_identifier)

List all apps that are assigned to a hostname.

List all apps that are assigned to a hostname.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_site_identifiers_assigned_to_host_name200_response import ListSiteIdentifiersAssignedToHostName200Response
from openapi_client.models.list_site_identifiers_assigned_to_host_name_request import ListSiteIdentifiersAssignedToHostNameRequest
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    name_identifier = openapi_client.ListSiteIdentifiersAssignedToHostNameRequest() # ListSiteIdentifiersAssignedToHostNameRequest | Hostname information.

    try:
        # List all apps that are assigned to a hostname.
        api_response = api_instance.list_site_identifiers_assigned_to_host_name(subscription_id, api_version, name_identifier)
        print("The response of DefaultApi->list_site_identifiers_assigned_to_host_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_site_identifiers_assigned_to_host_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **name_identifier** | [**ListSiteIdentifiersAssignedToHostNameRequest**](ListSiteIdentifiersAssignedToHostNameRequest.md)| Hostname information. | 

### Return type

[**ListSiteIdentifiersAssignedToHostName200Response**](ListSiteIdentifiersAssignedToHostName200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_skus**
> SkuInfos list_skus(subscription_id, api_version)

List all SKUs.

List all SKUs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_infos import SkuInfos
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # List all SKUs.
        api_response = api_instance.list_skus(subscription_id, api_version)
        print("The response of DefaultApi->list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**SkuInfos**](SkuInfos.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_source_controls**
> SourceControlCollection list_source_controls(api_version)

Gets the source controls available for Azure websites.

Gets the source controls available for Azure websites.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_control_collection import SourceControlCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets the source controls available for Azure websites.
        api_response = api_instance.list_source_controls(api_version)
        print("The response of DefaultApi->list_source_controls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_source_controls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 

### Return type

[**SourceControlCollection**](SourceControlCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move**
> move(resource_group_name, subscription_id, api_version, move_resource_envelope)

Move resources between resource groups.

Move resources between resource groups.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_move_resource_envelope import CsmMoveResourceEnvelope
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    move_resource_envelope = openapi_client.CsmMoveResourceEnvelope() # CsmMoveResourceEnvelope | Object that represents the resource to move.

    try:
        # Move resources between resource groups.
        api_instance.move(resource_group_name, subscription_id, api_version, move_resource_envelope)
    except Exception as e:
        print("Exception when calling DefaultApi->move: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **move_resource_envelope** | [**CsmMoveResourceEnvelope**](CsmMoveResourceEnvelope.md)| Object that represents the resource to move. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_publishing_user**
> GetPublishingUser200Response update_publishing_user(api_version, user_details)

Updates publishing user

Updates publishing user

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_publishing_user200_response import GetPublishingUser200Response
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | API Version
    user_details = openapi_client.GetPublishingUser200Response() # GetPublishingUser200Response | Details of publishing user

    try:
        # Updates publishing user
        api_response = api_instance.update_publishing_user(api_version, user_details)
        print("The response of DefaultApi->update_publishing_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_publishing_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API Version | 
 **user_details** | [**GetPublishingUser200Response**](GetPublishingUser200Response.md)| Details of publishing user | 

### Return type

[**GetPublishingUser200Response**](GetPublishingUser200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_source_control**
> SourceControl update_source_control(source_control_type, api_version, request_message)

Updates source control token

Updates source control token

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_control import SourceControl
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
    api_instance = openapi_client.DefaultApi(api_client)
    source_control_type = 'source_control_type_example' # str | Type of source control
    api_version = 'api_version_example' # str | API Version
    request_message = openapi_client.SourceControl() # SourceControl | Source control token information

    try:
        # Updates source control token
        api_response = api_instance.update_source_control(source_control_type, api_version, request_message)
        print("The response of DefaultApi->update_source_control:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_source_control: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_control_type** | **str**| Type of source control | 
 **api_version** | **str**| API Version | 
 **request_message** | [**SourceControl**](SourceControl.md)| Source control token information | 

### Return type

[**SourceControl**](SourceControl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate**
> ValidateResponse validate(resource_group_name, subscription_id, api_version, validate_request)

Validate if a resource can be created.

Validate if a resource can be created.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.validate_request import ValidateRequest
from openapi_client.models.validate_response import ValidateResponse
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    validate_request = openapi_client.ValidateRequest() # ValidateRequest | Request with the resources to validate.

    try:
        # Validate if a resource can be created.
        api_response = api_instance.validate(resource_group_name, subscription_id, api_version, validate_request)
        print("The response of DefaultApi->validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **validate_request** | [**ValidateRequest**](ValidateRequest.md)| Request with the resources to validate. | 

### Return type

[**ValidateResponse**](ValidateResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_move**
> validate_move(resource_group_name, subscription_id, api_version, move_resource_envelope)

Validate whether a resource can be moved.

Validate whether a resource can be moved.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.csm_move_resource_envelope import CsmMoveResourceEnvelope
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    move_resource_envelope = openapi_client.CsmMoveResourceEnvelope() # CsmMoveResourceEnvelope | Object that represents the resource to move.

    try:
        # Validate whether a resource can be moved.
        api_instance.validate_move(resource_group_name, subscription_id, api_version, move_resource_envelope)
    except Exception as e:
        print("Exception when calling DefaultApi->validate_move: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **move_resource_envelope** | [**CsmMoveResourceEnvelope**](CsmMoveResourceEnvelope.md)| Object that represents the resource to move. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_hosting_environment_vnet**
> VnetValidationFailureDetails verify_hosting_environment_vnet(subscription_id, api_version, parameters)

Verifies if this VNET is compatible with an App Service Environment by analyzing the Network Security Group rules.

Verifies if this VNET is compatible with an App Service Environment by analyzing the Network Security Group rules.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vnet_parameters import VnetParameters
from openapi_client.models.vnet_validation_failure_details import VnetValidationFailureDetails
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    parameters = openapi_client.VnetParameters() # VnetParameters | VNET information

    try:
        # Verifies if this VNET is compatible with an App Service Environment by analyzing the Network Security Group rules.
        api_response = api_instance.verify_hosting_environment_vnet(subscription_id, api_version, parameters)
        print("The response of DefaultApi->verify_hosting_environment_vnet:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->verify_hosting_environment_vnet: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **parameters** | [**VnetParameters**](VnetParameters.md)| VNET information | 

### Return type

[**VnetValidationFailureDetails**](VnetValidationFailureDetails.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

