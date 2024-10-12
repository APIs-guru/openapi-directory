# openapi_client.GlobalApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_check_name_availability**](GlobalApi.md#global_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Web/checknameavailability | Check if resource name is available
[**global_get_all_certificates**](GlobalApi.md#global_get_all_certificates) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/certificates | Get all certificates for a subscription
[**global_get_all_classic_mobile_services**](GlobalApi.md#global_get_all_classic_mobile_services) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/classicMobileServices | Gets all mobile services for a subscription
[**global_get_all_hosting_environments**](GlobalApi.md#global_get_all_hosting_environments) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/hostingEnvironments | Gets all hostingEnvironments (App Service Environment) for a subscription
[**global_get_all_managed_hosting_environments**](GlobalApi.md#global_get_all_managed_hosting_environments) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/managedHostingEnvironments | Gets all managed hosting environments for a subscription
[**global_get_all_server_farms**](GlobalApi.md#global_get_all_server_farms) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/serverfarms | Gets all App Service Plans for a subscription
[**global_get_all_sites**](GlobalApi.md#global_get_all_sites) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/sites | Gets all Web Apps for a subscription
[**global_get_subscription_geo_regions**](GlobalApi.md#global_get_subscription_geo_regions) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/geoRegions | Gets list of available geo regions
[**global_get_subscription_publishing_credentials**](GlobalApi.md#global_get_subscription_publishing_credentials) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/publishingCredentials | Gets publishing credentials for the subscription owner
[**global_is_hosting_environment_name_available**](GlobalApi.md#global_is_hosting_environment_name_available) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/ishostingenvironmentnameavailable | Whether hosting environment name is available
[**global_is_hosting_environment_with_legacy_name_available**](GlobalApi.md#global_is_hosting_environment_with_legacy_name_available) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/ishostingenvironmentnameavailable/{name} | Whether hosting environment name is available
[**global_list_premier_add_on_offers**](GlobalApi.md#global_list_premier_add_on_offers) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/premieraddonoffers | List premier add on offers
[**global_update_subscription_publishing_credentials**](GlobalApi.md#global_update_subscription_publishing_credentials) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Web/publishingCredentials | Updates publishing credentials for the subscription owner


# **global_check_name_availability**
> ResourceNameAvailability global_check_name_availability(subscription_id, api_version, request)

Check if resource name is available

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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request = openapi_client.ResourceNameAvailabilityRequest() # ResourceNameAvailabilityRequest | Name availability request

    try:
        # Check if resource name is available
        api_response = api_instance.global_check_name_availability(subscription_id, api_version, request)
        print("The response of GlobalApi->global_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request** | [**ResourceNameAvailabilityRequest**](ResourceNameAvailabilityRequest.md)| Name availability request | 

### Return type

[**ResourceNameAvailability**](ResourceNameAvailability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_get_all_certificates**
> CertificateCollection global_get_all_certificates(subscription_id, api_version)

Get all certificates for a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_collection import CertificateCollection
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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all certificates for a subscription
        api_response = api_instance.global_get_all_certificates(subscription_id, api_version)
        print("The response of GlobalApi->global_get_all_certificates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_get_all_certificates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**CertificateCollection**](CertificateCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_get_all_classic_mobile_services**
> ClassicMobileServiceCollection global_get_all_classic_mobile_services(subscription_id, api_version)

Gets all mobile services for a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.classic_mobile_service_collection import ClassicMobileServiceCollection
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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets all mobile services for a subscription
        api_response = api_instance.global_get_all_classic_mobile_services(subscription_id, api_version)
        print("The response of GlobalApi->global_get_all_classic_mobile_services:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_get_all_classic_mobile_services: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ClassicMobileServiceCollection**](ClassicMobileServiceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_get_all_hosting_environments**
> HostingEnvironmentCollection global_get_all_hosting_environments(subscription_id, api_version)

Gets all hostingEnvironments (App Service Environment) for a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hosting_environment_collection import HostingEnvironmentCollection
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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets all hostingEnvironments (App Service Environment) for a subscription
        api_response = api_instance.global_get_all_hosting_environments(subscription_id, api_version)
        print("The response of GlobalApi->global_get_all_hosting_environments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_get_all_hosting_environments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**HostingEnvironmentCollection**](HostingEnvironmentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_get_all_managed_hosting_environments**
> ManagedHostingEnvironmentCollection global_get_all_managed_hosting_environments(subscription_id, api_version)

Gets all managed hosting environments for a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.managed_hosting_environment_collection import ManagedHostingEnvironmentCollection
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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets all managed hosting environments for a subscription
        api_response = api_instance.global_get_all_managed_hosting_environments(subscription_id, api_version)
        print("The response of GlobalApi->global_get_all_managed_hosting_environments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_get_all_managed_hosting_environments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**ManagedHostingEnvironmentCollection**](ManagedHostingEnvironmentCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_get_all_server_farms**
> ServerFarmCollection global_get_all_server_farms(subscription_id, api_version, detailed=detailed)

Gets all App Service Plans for a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.server_farm_collection import ServerFarmCollection
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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    detailed = True # bool | False to return a subset of App Service Plan properties, true to return all of the properties.              Retrieval of all properties may increase the API latency. (optional)

    try:
        # Gets all App Service Plans for a subscription
        api_response = api_instance.global_get_all_server_farms(subscription_id, api_version, detailed=detailed)
        print("The response of GlobalApi->global_get_all_server_farms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_get_all_server_farms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **detailed** | **bool**| False to return a subset of App Service Plan properties, true to return all of the properties.              Retrieval of all properties may increase the API latency. | [optional] 

### Return type

[**ServerFarmCollection**](ServerFarmCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_get_all_sites**
> SiteCollection global_get_all_sites(subscription_id, api_version)

Gets all Web Apps for a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.site_collection import SiteCollection
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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets all Web Apps for a subscription
        api_response = api_instance.global_get_all_sites(subscription_id, api_version)
        print("The response of GlobalApi->global_get_all_sites:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_get_all_sites: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**SiteCollection**](SiteCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_get_subscription_geo_regions**
> GeoRegionCollection global_get_subscription_geo_regions(subscription_id, api_version, sku=sku, linux_workers_enabled=linux_workers_enabled)

Gets list of available geo regions

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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    sku = 'sku_example' # str | Filter only to regions that support this sku (optional)
    linux_workers_enabled = True # bool | Filter only to regions that support linux workers (optional)

    try:
        # Gets list of available geo regions
        api_response = api_instance.global_get_subscription_geo_regions(subscription_id, api_version, sku=sku, linux_workers_enabled=linux_workers_enabled)
        print("The response of GlobalApi->global_get_subscription_geo_regions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_get_subscription_geo_regions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **sku** | **str**| Filter only to regions that support this sku | [optional] 
 **linux_workers_enabled** | **bool**| Filter only to regions that support linux workers | [optional] 

### Return type

[**GeoRegionCollection**](GeoRegionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_get_subscription_publishing_credentials**
> User global_get_subscription_publishing_credentials(subscription_id, api_version)

Gets publishing credentials for the subscription owner

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets publishing credentials for the subscription owner
        api_response = api_instance.global_get_subscription_publishing_credentials(subscription_id, api_version)
        print("The response of GlobalApi->global_get_subscription_publishing_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_get_subscription_publishing_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**User**](User.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_is_hosting_environment_name_available**
> object global_is_hosting_environment_name_available(name, subscription_id, api_version)

Whether hosting environment name is available

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
    api_instance = openapi_client.GlobalApi(api_client)
    name = 'name_example' # str | Hosting environment name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Whether hosting environment name is available
        api_response = api_instance.global_is_hosting_environment_name_available(name, subscription_id, api_version)
        print("The response of GlobalApi->global_is_hosting_environment_name_available:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_is_hosting_environment_name_available: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Hosting environment name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_is_hosting_environment_with_legacy_name_available**
> object global_is_hosting_environment_with_legacy_name_available(name, subscription_id, api_version)

Whether hosting environment name is available

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
    api_instance = openapi_client.GlobalApi(api_client)
    name = 'name_example' # str | Hosting environment name
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Whether hosting environment name is available
        api_response = api_instance.global_is_hosting_environment_with_legacy_name_available(name, subscription_id, api_version)
        print("The response of GlobalApi->global_is_hosting_environment_with_legacy_name_available:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_is_hosting_environment_with_legacy_name_available: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Hosting environment name | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_list_premier_add_on_offers**
> object global_list_premier_add_on_offers(subscription_id, api_version)

List premier add on offers

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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # List premier add on offers
        api_response = api_instance.global_list_premier_add_on_offers(subscription_id, api_version)
        print("The response of GlobalApi->global_list_premier_add_on_offers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_list_premier_add_on_offers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_update_subscription_publishing_credentials**
> User global_update_subscription_publishing_credentials(subscription_id, api_version, request_message)

Updates publishing credentials for the subscription owner

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
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
    api_instance = openapi_client.GlobalApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    request_message = openapi_client.User() # User | requestMessage with new publishing credentials

    try:
        # Updates publishing credentials for the subscription owner
        api_response = api_instance.global_update_subscription_publishing_credentials(subscription_id, api_version, request_message)
        print("The response of GlobalApi->global_update_subscription_publishing_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalApi->global_update_subscription_publishing_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **request_message** | [**User**](User.md)| requestMessage with new publishing credentials | 

### Return type

[**User**](User.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

