# openapi_client.DefaultApi

All URIs are relative to *http://redhat.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletesystem**](DefaultApi.md#deletesystem) | **DELETE** /api/patch/v1/systems/{inventory_id} | Delete system by inventory id
[**detail_advisory**](DefaultApi.md#detail_advisory) | **GET** /api/patch/v1/advisories/{advisory_id} | Show me details an advisory by given advisory name
[**detail_system**](DefaultApi.md#detail_system) | **GET** /api/patch/v1/systems/{inventory_id} | Show me details about a system by given inventory id
[**export_advisories**](DefaultApi.md#export_advisories) | **GET** /api/patch/v1/export/advisories | Export applicable advisories for all my systems
[**export_advisory_systems**](DefaultApi.md#export_advisory_systems) | **GET** /api/patch/v1/export/advisories/{advisory_id}/systems | Export systems for my account
[**export_package_systems**](DefaultApi.md#export_package_systems) | **GET** /api/patch/v1/export/packages/{package_name}/systems | Show me all my systems which have a package installed
[**export_packages**](DefaultApi.md#export_packages) | **GET** /api/patch/v1/export/packages | Show me all installed packages across my systems
[**export_system_advisories**](DefaultApi.md#export_system_advisories) | **GET** /api/patch/v1/export/systems/{inventory_id}/advisories | Export applicable advisories for all my systems
[**export_system_packages**](DefaultApi.md#export_system_packages) | **GET** /api/patch/v1/export/systems/{inventory_id}/packages | Show me details about a system packages by given inventory id
[**export_systems**](DefaultApi.md#export_systems) | **GET** /api/patch/v1/export/systems | Export systems for my account
[**latest_package**](DefaultApi.md#latest_package) | **GET** /api/patch/v1/packages/{package_name} | Show me metadata of selected package
[**list_advisories**](DefaultApi.md#list_advisories) | **GET** /api/patch/v1/advisories | Show me all applicable advisories for all my systems
[**list_advisory_systems**](DefaultApi.md#list_advisory_systems) | **GET** /api/patch/v1/advisories/{advisory_id}/systems | Show me systems on which the given advisory is applicable
[**list_packages**](DefaultApi.md#list_packages) | **GET** /api/patch/v1/packages/ | Show me all installed packages across my systems
[**list_system_advisories**](DefaultApi.md#list_system_advisories) | **GET** /api/patch/v1/systems/{inventory_id}/advisories | Show me advisories for a system by given inventory id
[**list_systems**](DefaultApi.md#list_systems) | **GET** /api/patch/v1/systems | Show me all my systems
[**package_systems**](DefaultApi.md#package_systems) | **GET** /api/patch/v1/packages/{package_name}/systems | Show me all my systems which have a package installed
[**package_versions**](DefaultApi.md#package_versions) | **GET** /api/patch/v1/packages/{package_name}/versions | Show me all package versions installed on some system
[**system_packages**](DefaultApi.md#system_packages) | **GET** /api/patch/v1/systems/{inventory_id}/packages | Show me details about a system packages by given inventory id
[**view_advisories_systems**](DefaultApi.md#view_advisories_systems) | **POST** /api/patch/v1/views/advisories/systems | View advisory-system pairs for selected systems and advisories
[**view_systems_advisories**](DefaultApi.md#view_systems_advisories) | **POST** /api/patch/v1/views/systems/advisories | View system-advisory pairs for selected systems and advisories


# **deletesystem**
> deletesystem(inventory_id)

Delete system by inventory id

Delete system by inventory id

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    inventory_id = 'inventory_id_example' # str | Inventory ID

    try:
        # Delete system by inventory id
        api_instance.deletesystem(inventory_id)
    except Exception as e:
        print("Exception when calling DefaultApi->deletesystem: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventory_id** | **str**| Inventory ID | 

### Return type

void (empty response body)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detail_advisory**
> ControllersAdvisoryDetailResponse detail_advisory(advisory_id)

Show me details an advisory by given advisory name

Show me details an advisory by given advisory name

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_advisory_detail_response import ControllersAdvisoryDetailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    advisory_id = 'advisory_id_example' # str | Advisory ID

    try:
        # Show me details an advisory by given advisory name
        api_response = api_instance.detail_advisory(advisory_id)
        print("The response of DefaultApi->detail_advisory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->detail_advisory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advisory_id** | **str**| Advisory ID | 

### Return type

[**ControllersAdvisoryDetailResponse**](ControllersAdvisoryDetailResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **detail_system**
> ControllersSystemDetailResponse detail_system(inventory_id)

Show me details about a system by given inventory id

Show me details about a system by given inventory id

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_system_detail_response import ControllersSystemDetailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    inventory_id = 'inventory_id_example' # str | Inventory ID

    try:
        # Show me details about a system by given inventory id
        api_response = api_instance.detail_system(inventory_id)
        print("The response of DefaultApi->detail_system:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->detail_system: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventory_id** | **str**| Inventory ID | 

### Return type

[**ControllersSystemDetailResponse**](ControllersSystemDetailResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_advisories**
> List[ControllersAdvisoryInlineItem] export_advisories(search=search, filter_id=filter_id, filter_description=filter_description, filter_public_date=filter_public_date, filter_synopsis=filter_synopsis, filter_advisory_type=filter_advisory_type, filter_severity=filter_severity, filter_applicable_systems=filter_applicable_systems)

Export applicable advisories for all my systems

Export applicable advisories for all my systems

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_advisory_inline_item import ControllersAdvisoryInlineItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    search = 'search_example' # str | Find matching text (optional)
    filter_id = 'filter_id_example' # str | Filter (optional)
    filter_description = 'filter_description_example' # str | Filter (optional)
    filter_public_date = 'filter_public_date_example' # str | Filter (optional)
    filter_synopsis = 'filter_synopsis_example' # str | Filter (optional)
    filter_advisory_type = 'filter_advisory_type_example' # str | Filter (optional)
    filter_severity = 'filter_severity_example' # str | Filter (optional)
    filter_applicable_systems = 'filter_applicable_systems_example' # str | Filter (optional)

    try:
        # Export applicable advisories for all my systems
        api_response = api_instance.export_advisories(search=search, filter_id=filter_id, filter_description=filter_description, filter_public_date=filter_public_date, filter_synopsis=filter_synopsis, filter_advisory_type=filter_advisory_type, filter_severity=filter_severity, filter_applicable_systems=filter_applicable_systems)
        print("The response of DefaultApi->export_advisories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_advisories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Find matching text | [optional] 
 **filter_id** | **str**| Filter | [optional] 
 **filter_description** | **str**| Filter | [optional] 
 **filter_public_date** | **str**| Filter | [optional] 
 **filter_synopsis** | **str**| Filter | [optional] 
 **filter_advisory_type** | **str**| Filter | [optional] 
 **filter_severity** | **str**| Filter | [optional] 
 **filter_applicable_systems** | **str**| Filter | [optional] 

### Return type

[**List[ControllersAdvisoryInlineItem]**](ControllersAdvisoryInlineItem.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_advisory_systems**
> List[ControllersSystemInlineItem] export_advisory_systems(advisory_id, search=search, filter_id=filter_id, filter_display_name=filter_display_name, filter_last_evaluation=filter_last_evaluation, filter_last_upload=filter_last_upload, filter_rhsa_count=filter_rhsa_count, filter_rhba_count=filter_rhba_count, filter_rhea_count=filter_rhea_count, filter_other_count=filter_other_count, filter_stale=filter_stale, filter_packages_installed=filter_packages_installed, filter_packages_updatable=filter_packages_updatable, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in, tags=tags)

Export systems for my account

Export systems for my account

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_system_inline_item import ControllersSystemInlineItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    advisory_id = 'advisory_id_example' # str | Advisory ID
    search = 'search_example' # str | Find matching text (optional)
    filter_id = 'filter_id_example' # str | Filter (optional)
    filter_display_name = 'filter_display_name_example' # str | Filter (optional)
    filter_last_evaluation = 'filter_last_evaluation_example' # str | Filter (optional)
    filter_last_upload = 'filter_last_upload_example' # str | Filter (optional)
    filter_rhsa_count = 'filter_rhsa_count_example' # str | Filter (optional)
    filter_rhba_count = 'filter_rhba_count_example' # str | Filter (optional)
    filter_rhea_count = 'filter_rhea_count_example' # str | Filter (optional)
    filter_other_count = 'filter_other_count_example' # str | Filter (optional)
    filter_stale = 'filter_stale_example' # str | Filter (optional)
    filter_packages_installed = 'filter_packages_installed_example' # str | Filter (optional)
    filter_packages_updatable = 'filter_packages_updatable_example' # str | Filter (optional)
    filter_system_profile_sap_system = 'filter_system_profile_sap_system_example' # str | Filter only SAP systems (optional)
    filter_system_profile_sap_sids_in = ['filter_system_profile_sap_sids_in_example'] # List[str] | Filter systems by their SAP SIDs (optional)
    tags = ['tags_example'] # List[str] | Tag filter (optional)

    try:
        # Export systems for my account
        api_response = api_instance.export_advisory_systems(advisory_id, search=search, filter_id=filter_id, filter_display_name=filter_display_name, filter_last_evaluation=filter_last_evaluation, filter_last_upload=filter_last_upload, filter_rhsa_count=filter_rhsa_count, filter_rhba_count=filter_rhba_count, filter_rhea_count=filter_rhea_count, filter_other_count=filter_other_count, filter_stale=filter_stale, filter_packages_installed=filter_packages_installed, filter_packages_updatable=filter_packages_updatable, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in, tags=tags)
        print("The response of DefaultApi->export_advisory_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_advisory_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advisory_id** | **str**| Advisory ID | 
 **search** | **str**| Find matching text | [optional] 
 **filter_id** | **str**| Filter | [optional] 
 **filter_display_name** | **str**| Filter | [optional] 
 **filter_last_evaluation** | **str**| Filter | [optional] 
 **filter_last_upload** | **str**| Filter | [optional] 
 **filter_rhsa_count** | **str**| Filter | [optional] 
 **filter_rhba_count** | **str**| Filter | [optional] 
 **filter_rhea_count** | **str**| Filter | [optional] 
 **filter_other_count** | **str**| Filter | [optional] 
 **filter_stale** | **str**| Filter | [optional] 
 **filter_packages_installed** | **str**| Filter | [optional] 
 **filter_packages_updatable** | **str**| Filter | [optional] 
 **filter_system_profile_sap_system** | **str**| Filter only SAP systems | [optional] 
 **filter_system_profile_sap_sids_in** | [**List[str]**](str.md)| Filter systems by their SAP SIDs | [optional] 
 **tags** | [**List[str]**](str.md)| Tag filter | [optional] 

### Return type

[**List[ControllersSystemInlineItem]**](ControllersSystemInlineItem.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_package_systems**
> List[ControllersPackageSystemItem] export_package_systems(package_name, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in, tags=tags)

Show me all my systems which have a package installed

Show me all my systems which have a package installed

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_package_system_item import ControllersPackageSystemItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    package_name = 'package_name_example' # str | Package name
    filter_system_profile_sap_system = 'filter_system_profile_sap_system_example' # str | Filter only SAP systems (optional)
    filter_system_profile_sap_sids_in = ['filter_system_profile_sap_sids_in_example'] # List[str] | Filter systems by their SAP SIDs (optional)
    tags = ['tags_example'] # List[str] | Tag filter (optional)

    try:
        # Show me all my systems which have a package installed
        api_response = api_instance.export_package_systems(package_name, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in, tags=tags)
        print("The response of DefaultApi->export_package_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_package_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Package name | 
 **filter_system_profile_sap_system** | **str**| Filter only SAP systems | [optional] 
 **filter_system_profile_sap_sids_in** | [**List[str]**](str.md)| Filter systems by their SAP SIDs | [optional] 
 **tags** | [**List[str]**](str.md)| Tag filter | [optional] 

### Return type

[**List[ControllersPackageSystemItem]**](ControllersPackageSystemItem.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_packages**
> List[ControllersPackageItem] export_packages(sort=sort, search=search, filter_name=filter_name, filter_systems_installed=filter_systems_installed, filter_systems_updatable=filter_systems_updatable, filter_summary=filter_summary)

Show me all installed packages across my systems

Show me all installed packages across my systems

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_package_item import ControllersPackageItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    sort = 'sort_example' # str | Sort field (optional)
    search = 'search_example' # str | Find matching text (optional)
    filter_name = 'filter_name_example' # str | Filter (optional)
    filter_systems_installed = 'filter_systems_installed_example' # str | Filter (optional)
    filter_systems_updatable = 'filter_systems_updatable_example' # str | Filter (optional)
    filter_summary = 'filter_summary_example' # str | Filter (optional)

    try:
        # Show me all installed packages across my systems
        api_response = api_instance.export_packages(sort=sort, search=search, filter_name=filter_name, filter_systems_installed=filter_systems_installed, filter_systems_updatable=filter_systems_updatable, filter_summary=filter_summary)
        print("The response of DefaultApi->export_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sort** | **str**| Sort field | [optional] 
 **search** | **str**| Find matching text | [optional] 
 **filter_name** | **str**| Filter | [optional] 
 **filter_systems_installed** | **str**| Filter | [optional] 
 **filter_systems_updatable** | **str**| Filter | [optional] 
 **filter_summary** | **str**| Filter | [optional] 

### Return type

[**List[ControllersPackageItem]**](ControllersPackageItem.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_system_advisories**
> List[ControllersSystemAdvisoriesDBLookup] export_system_advisories(inventory_id, search=search, filter_id=filter_id, filter_description=filter_description, filter_public_date=filter_public_date, filter_synopsis=filter_synopsis, filter_advisory_type=filter_advisory_type, filter_severity=filter_severity)

Export applicable advisories for all my systems

Export applicable advisories for all my systems

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_system_advisories_db_lookup import ControllersSystemAdvisoriesDBLookup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    inventory_id = 'inventory_id_example' # str | Inventory ID
    search = 'search_example' # str | Find matching text (optional)
    filter_id = 'filter_id_example' # str | Filter (optional)
    filter_description = 'filter_description_example' # str | Filter (optional)
    filter_public_date = 'filter_public_date_example' # str | Filter (optional)
    filter_synopsis = 'filter_synopsis_example' # str | Filter (optional)
    filter_advisory_type = 'filter_advisory_type_example' # str | Filter (optional)
    filter_severity = 'filter_severity_example' # str | Filter (optional)

    try:
        # Export applicable advisories for all my systems
        api_response = api_instance.export_system_advisories(inventory_id, search=search, filter_id=filter_id, filter_description=filter_description, filter_public_date=filter_public_date, filter_synopsis=filter_synopsis, filter_advisory_type=filter_advisory_type, filter_severity=filter_severity)
        print("The response of DefaultApi->export_system_advisories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_system_advisories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventory_id** | **str**| Inventory ID | 
 **search** | **str**| Find matching text | [optional] 
 **filter_id** | **str**| Filter | [optional] 
 **filter_description** | **str**| Filter | [optional] 
 **filter_public_date** | **str**| Filter | [optional] 
 **filter_synopsis** | **str**| Filter | [optional] 
 **filter_advisory_type** | **str**| Filter | [optional] 
 **filter_severity** | **str**| Filter | [optional] 

### Return type

[**List[ControllersSystemAdvisoriesDBLookup]**](ControllersSystemAdvisoriesDBLookup.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_system_packages**
> List[ControllersSystemPackageInline] export_system_packages(inventory_id, search=search, filter_name=filter_name, filter_description=filter_description, filter_evra=filter_evra, filter_summary=filter_summary, filter_updatable=filter_updatable)

Show me details about a system packages by given inventory id

Show me details about a system packages by given inventory id

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_system_package_inline import ControllersSystemPackageInline
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    inventory_id = 'inventory_id_example' # str | Inventory ID
    search = 'search_example' # str | Find matching text (optional)
    filter_name = 'filter_name_example' # str | Filter (optional)
    filter_description = 'filter_description_example' # str | Filter (optional)
    filter_evra = 'filter_evra_example' # str | Filter (optional)
    filter_summary = 'filter_summary_example' # str | Filter (optional)
    filter_updatable = True # bool | Filter (optional)

    try:
        # Show me details about a system packages by given inventory id
        api_response = api_instance.export_system_packages(inventory_id, search=search, filter_name=filter_name, filter_description=filter_description, filter_evra=filter_evra, filter_summary=filter_summary, filter_updatable=filter_updatable)
        print("The response of DefaultApi->export_system_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_system_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventory_id** | **str**| Inventory ID | 
 **search** | **str**| Find matching text | [optional] 
 **filter_name** | **str**| Filter | [optional] 
 **filter_description** | **str**| Filter | [optional] 
 **filter_evra** | **str**| Filter | [optional] 
 **filter_summary** | **str**| Filter | [optional] 
 **filter_updatable** | **bool**| Filter | [optional] 

### Return type

[**List[ControllersSystemPackageInline]**](ControllersSystemPackageInline.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_systems**
> List[ControllersSystemInlineItem] export_systems(search=search, filter_id=filter_id, filter_display_name=filter_display_name, filter_last_evaluation=filter_last_evaluation, filter_last_upload=filter_last_upload, filter_rhsa_count=filter_rhsa_count, filter_rhba_count=filter_rhba_count, filter_rhea_count=filter_rhea_count, filter_other_count=filter_other_count, filter_stale=filter_stale, filter_packages_installed=filter_packages_installed, filter_packages_updatable=filter_packages_updatable, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in, tags=tags)

Export systems for my account

Export systems for my account

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_system_inline_item import ControllersSystemInlineItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    search = 'search_example' # str | Find matching text (optional)
    filter_id = 'filter_id_example' # str | Filter (optional)
    filter_display_name = 'filter_display_name_example' # str | Filter (optional)
    filter_last_evaluation = 'filter_last_evaluation_example' # str | Filter (optional)
    filter_last_upload = 'filter_last_upload_example' # str | Filter (optional)
    filter_rhsa_count = 'filter_rhsa_count_example' # str | Filter (optional)
    filter_rhba_count = 'filter_rhba_count_example' # str | Filter (optional)
    filter_rhea_count = 'filter_rhea_count_example' # str | Filter (optional)
    filter_other_count = 'filter_other_count_example' # str | Filter (optional)
    filter_stale = 'filter_stale_example' # str | Filter (optional)
    filter_packages_installed = 'filter_packages_installed_example' # str | Filter (optional)
    filter_packages_updatable = 'filter_packages_updatable_example' # str | Filter (optional)
    filter_system_profile_sap_system = 'filter_system_profile_sap_system_example' # str | Filter only SAP systems (optional)
    filter_system_profile_sap_sids_in = ['filter_system_profile_sap_sids_in_example'] # List[str] | Filter systems by their SAP SIDs (optional)
    tags = ['tags_example'] # List[str] | Tag filter (optional)

    try:
        # Export systems for my account
        api_response = api_instance.export_systems(search=search, filter_id=filter_id, filter_display_name=filter_display_name, filter_last_evaluation=filter_last_evaluation, filter_last_upload=filter_last_upload, filter_rhsa_count=filter_rhsa_count, filter_rhba_count=filter_rhba_count, filter_rhea_count=filter_rhea_count, filter_other_count=filter_other_count, filter_stale=filter_stale, filter_packages_installed=filter_packages_installed, filter_packages_updatable=filter_packages_updatable, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in, tags=tags)
        print("The response of DefaultApi->export_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Find matching text | [optional] 
 **filter_id** | **str**| Filter | [optional] 
 **filter_display_name** | **str**| Filter | [optional] 
 **filter_last_evaluation** | **str**| Filter | [optional] 
 **filter_last_upload** | **str**| Filter | [optional] 
 **filter_rhsa_count** | **str**| Filter | [optional] 
 **filter_rhba_count** | **str**| Filter | [optional] 
 **filter_rhea_count** | **str**| Filter | [optional] 
 **filter_other_count** | **str**| Filter | [optional] 
 **filter_stale** | **str**| Filter | [optional] 
 **filter_packages_installed** | **str**| Filter | [optional] 
 **filter_packages_updatable** | **str**| Filter | [optional] 
 **filter_system_profile_sap_system** | **str**| Filter only SAP systems | [optional] 
 **filter_system_profile_sap_sids_in** | [**List[str]**](str.md)| Filter systems by their SAP SIDs | [optional] 
 **tags** | [**List[str]**](str.md)| Tag filter | [optional] 

### Return type

[**List[ControllersSystemInlineItem]**](ControllersSystemInlineItem.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **latest_package**
> ControllersPackageDetailResponse latest_package(package_name)

Show me metadata of selected package

Show me metadata of selected package

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_package_detail_response import ControllersPackageDetailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    package_name = 'package_name_example' # str | package_name - latest, nevra - exact version

    try:
        # Show me metadata of selected package
        api_response = api_instance.latest_package(package_name)
        print("The response of DefaultApi->latest_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->latest_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| package_name - latest, nevra - exact version | 

### Return type

[**ControllersPackageDetailResponse**](ControllersPackageDetailResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_advisories**
> ControllersAdvisoriesResponse list_advisories(limit=limit, offset=offset, sort=sort, search=search, filter_id=filter_id, filter_description=filter_description, filter_public_date=filter_public_date, filter_synopsis=filter_synopsis, filter_advisory_type=filter_advisory_type, filter_severity=filter_severity, filter_applicable_systems=filter_applicable_systems, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)

Show me all applicable advisories for all my systems

Show me all applicable advisories for all my systems

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_advisories_response import ControllersAdvisoriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    limit = 56 # int | Limit for paging, set -1 to return all (optional)
    offset = 56 # int | Offset for paging (optional)
    sort = 'sort_example' # str | Sort field (optional)
    search = 'search_example' # str | Find matching text (optional)
    filter_id = 'filter_id_example' # str | Filter  (optional)
    filter_description = 'filter_description_example' # str | Filter (optional)
    filter_public_date = 'filter_public_date_example' # str | Filter (optional)
    filter_synopsis = 'filter_synopsis_example' # str | Filter (optional)
    filter_advisory_type = 'filter_advisory_type_example' # str | Filter (optional)
    filter_severity = 'filter_severity_example' # str | Filter (optional)
    filter_applicable_systems = 'filter_applicable_systems_example' # str | Filter (optional)
    tags = ['tags_example'] # List[str] | Tag filter (optional)
    filter_system_profile_sap_system = 'filter_system_profile_sap_system_example' # str | Filter only SAP systems (optional)
    filter_system_profile_sap_sids_in = ['filter_system_profile_sap_sids_in_example'] # List[str] | Filter systems by their SAP SIDs (optional)

    try:
        # Show me all applicable advisories for all my systems
        api_response = api_instance.list_advisories(limit=limit, offset=offset, sort=sort, search=search, filter_id=filter_id, filter_description=filter_description, filter_public_date=filter_public_date, filter_synopsis=filter_synopsis, filter_advisory_type=filter_advisory_type, filter_severity=filter_severity, filter_applicable_systems=filter_applicable_systems, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)
        print("The response of DefaultApi->list_advisories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_advisories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit for paging, set -1 to return all | [optional] 
 **offset** | **int**| Offset for paging | [optional] 
 **sort** | **str**| Sort field | [optional] 
 **search** | **str**| Find matching text | [optional] 
 **filter_id** | **str**| Filter  | [optional] 
 **filter_description** | **str**| Filter | [optional] 
 **filter_public_date** | **str**| Filter | [optional] 
 **filter_synopsis** | **str**| Filter | [optional] 
 **filter_advisory_type** | **str**| Filter | [optional] 
 **filter_severity** | **str**| Filter | [optional] 
 **filter_applicable_systems** | **str**| Filter | [optional] 
 **tags** | [**List[str]**](str.md)| Tag filter | [optional] 
 **filter_system_profile_sap_system** | **str**| Filter only SAP systems | [optional] 
 **filter_system_profile_sap_sids_in** | [**List[str]**](str.md)| Filter systems by their SAP SIDs | [optional] 

### Return type

[**ControllersAdvisoriesResponse**](ControllersAdvisoriesResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_advisory_systems**
> ControllersAdvisorySystemsResponse list_advisory_systems(advisory_id, limit=limit, offset=offset, sort=sort, search=search, filter_id=filter_id, filter_insights_id=filter_insights_id, filter_display_name=filter_display_name, filter_last_evaluation=filter_last_evaluation, filter_last_upload=filter_last_upload, filter_rhsa_count=filter_rhsa_count, filter_rhba_count=filter_rhba_count, filter_rhea_count=filter_rhea_count, filter_other_count=filter_other_count, filter_stale=filter_stale, filter_stale_timestamp=filter_stale_timestamp, filter_stale_warning_timestamp=filter_stale_warning_timestamp, filter_culled_timestamp=filter_culled_timestamp, filter_created=filter_created, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)

Show me systems on which the given advisory is applicable

Show me systems on which the given advisory is applicable

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_advisory_systems_response import ControllersAdvisorySystemsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    advisory_id = 'advisory_id_example' # str | Advisory ID
    limit = 56 # int | Limit for paging, set -1 to return all (optional)
    offset = 56 # int | Offset for paging (optional)
    sort = 'sort_example' # str | Sort field (optional)
    search = 'search_example' # str | Find matching text (optional)
    filter_id = 'filter_id_example' # str | Filter (optional)
    filter_insights_id = 'filter_insights_id_example' # str | Filter (optional)
    filter_display_name = 'filter_display_name_example' # str | Filter (optional)
    filter_last_evaluation = 'filter_last_evaluation_example' # str | Filter (optional)
    filter_last_upload = 'filter_last_upload_example' # str | Filter (optional)
    filter_rhsa_count = 'filter_rhsa_count_example' # str | Filter (optional)
    filter_rhba_count = 'filter_rhba_count_example' # str | Filter (optional)
    filter_rhea_count = 'filter_rhea_count_example' # str | Filter (optional)
    filter_other_count = 'filter_other_count_example' # str | Filter (optional)
    filter_stale = 'filter_stale_example' # str | Filter (optional)
    filter_stale_timestamp = 'filter_stale_timestamp_example' # str | Filter (optional)
    filter_stale_warning_timestamp = 'filter_stale_warning_timestamp_example' # str | Filter (optional)
    filter_culled_timestamp = 'filter_culled_timestamp_example' # str | Filter (optional)
    filter_created = 'filter_created_example' # str | Filter (optional)
    tags = ['tags_example'] # List[str] | Tag filter (optional)
    filter_system_profile_sap_system = 'filter_system_profile_sap_system_example' # str | Filter only SAP systems (optional)
    filter_system_profile_sap_sids_in = ['filter_system_profile_sap_sids_in_example'] # List[str] | Filter systems by their SAP SIDs (optional)

    try:
        # Show me systems on which the given advisory is applicable
        api_response = api_instance.list_advisory_systems(advisory_id, limit=limit, offset=offset, sort=sort, search=search, filter_id=filter_id, filter_insights_id=filter_insights_id, filter_display_name=filter_display_name, filter_last_evaluation=filter_last_evaluation, filter_last_upload=filter_last_upload, filter_rhsa_count=filter_rhsa_count, filter_rhba_count=filter_rhba_count, filter_rhea_count=filter_rhea_count, filter_other_count=filter_other_count, filter_stale=filter_stale, filter_stale_timestamp=filter_stale_timestamp, filter_stale_warning_timestamp=filter_stale_warning_timestamp, filter_culled_timestamp=filter_culled_timestamp, filter_created=filter_created, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)
        print("The response of DefaultApi->list_advisory_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_advisory_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **advisory_id** | **str**| Advisory ID | 
 **limit** | **int**| Limit for paging, set -1 to return all | [optional] 
 **offset** | **int**| Offset for paging | [optional] 
 **sort** | **str**| Sort field | [optional] 
 **search** | **str**| Find matching text | [optional] 
 **filter_id** | **str**| Filter | [optional] 
 **filter_insights_id** | **str**| Filter | [optional] 
 **filter_display_name** | **str**| Filter | [optional] 
 **filter_last_evaluation** | **str**| Filter | [optional] 
 **filter_last_upload** | **str**| Filter | [optional] 
 **filter_rhsa_count** | **str**| Filter | [optional] 
 **filter_rhba_count** | **str**| Filter | [optional] 
 **filter_rhea_count** | **str**| Filter | [optional] 
 **filter_other_count** | **str**| Filter | [optional] 
 **filter_stale** | **str**| Filter | [optional] 
 **filter_stale_timestamp** | **str**| Filter | [optional] 
 **filter_stale_warning_timestamp** | **str**| Filter | [optional] 
 **filter_culled_timestamp** | **str**| Filter | [optional] 
 **filter_created** | **str**| Filter | [optional] 
 **tags** | [**List[str]**](str.md)| Tag filter | [optional] 
 **filter_system_profile_sap_system** | **str**| Filter only SAP systems | [optional] 
 **filter_system_profile_sap_sids_in** | [**List[str]**](str.md)| Filter systems by their SAP SIDs | [optional] 

### Return type

[**ControllersAdvisorySystemsResponse**](ControllersAdvisorySystemsResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_packages**
> ControllersPackagesResponse list_packages(limit=limit, offset=offset, sort=sort, search=search, filter_name=filter_name, filter_systems_installed=filter_systems_installed, filter_systems_updatable=filter_systems_updatable, filter_summary=filter_summary, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)

Show me all installed packages across my systems

Show me all installed packages across my systems

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_packages_response import ControllersPackagesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    limit = 56 # int | Limit for paging, set -1 to return all (optional)
    offset = 56 # int | Offset for paging (optional)
    sort = 'sort_example' # str | Sort field (optional)
    search = 'search_example' # str | Find matching text (optional)
    filter_name = 'filter_name_example' # str | Filter (optional)
    filter_systems_installed = 'filter_systems_installed_example' # str | Filter (optional)
    filter_systems_updatable = 'filter_systems_updatable_example' # str | Filter (optional)
    filter_summary = 'filter_summary_example' # str | Filter (optional)
    tags = ['tags_example'] # List[str] | Tag filter (optional)
    filter_system_profile_sap_system = 'filter_system_profile_sap_system_example' # str | Filter only SAP systems (optional)
    filter_system_profile_sap_sids_in = ['filter_system_profile_sap_sids_in_example'] # List[str] | Filter systems by their SAP SIDs (optional)

    try:
        # Show me all installed packages across my systems
        api_response = api_instance.list_packages(limit=limit, offset=offset, sort=sort, search=search, filter_name=filter_name, filter_systems_installed=filter_systems_installed, filter_systems_updatable=filter_systems_updatable, filter_summary=filter_summary, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)
        print("The response of DefaultApi->list_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit for paging, set -1 to return all | [optional] 
 **offset** | **int**| Offset for paging | [optional] 
 **sort** | **str**| Sort field | [optional] 
 **search** | **str**| Find matching text | [optional] 
 **filter_name** | **str**| Filter | [optional] 
 **filter_systems_installed** | **str**| Filter | [optional] 
 **filter_systems_updatable** | **str**| Filter | [optional] 
 **filter_summary** | **str**| Filter | [optional] 
 **tags** | [**List[str]**](str.md)| Tag filter | [optional] 
 **filter_system_profile_sap_system** | **str**| Filter only SAP systems | [optional] 
 **filter_system_profile_sap_sids_in** | [**List[str]**](str.md)| Filter systems by their SAP SIDs | [optional] 

### Return type

[**ControllersPackagesResponse**](ControllersPackagesResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_system_advisories**
> ControllersSystemAdvisoriesResponse list_system_advisories(inventory_id, limit=limit, offset=offset, sort=sort, search=search, filter_id=filter_id, filter_description=filter_description, filter_public_date=filter_public_date, filter_synopsis=filter_synopsis, filter_advisory_type=filter_advisory_type, filter_severity=filter_severity)

Show me advisories for a system by given inventory id

Show me advisories for a system by given inventory id

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_system_advisories_response import ControllersSystemAdvisoriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    inventory_id = 'inventory_id_example' # str | Inventory ID
    limit = 56 # int | Limit for paging, set -1 to return all (optional)
    offset = 56 # int | Offset for paging (optional)
    sort = 'sort_example' # str | Sort field (optional)
    search = 'search_example' # str | Find matching text (optional)
    filter_id = 'filter_id_example' # str | Filter (optional)
    filter_description = 'filter_description_example' # str | Filter (optional)
    filter_public_date = 'filter_public_date_example' # str | Filter (optional)
    filter_synopsis = 'filter_synopsis_example' # str | Filter (optional)
    filter_advisory_type = 'filter_advisory_type_example' # str | Filter (optional)
    filter_severity = 'filter_severity_example' # str | Filter (optional)

    try:
        # Show me advisories for a system by given inventory id
        api_response = api_instance.list_system_advisories(inventory_id, limit=limit, offset=offset, sort=sort, search=search, filter_id=filter_id, filter_description=filter_description, filter_public_date=filter_public_date, filter_synopsis=filter_synopsis, filter_advisory_type=filter_advisory_type, filter_severity=filter_severity)
        print("The response of DefaultApi->list_system_advisories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_system_advisories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventory_id** | **str**| Inventory ID | 
 **limit** | **int**| Limit for paging, set -1 to return all | [optional] 
 **offset** | **int**| Offset for paging | [optional] 
 **sort** | **str**| Sort field | [optional] 
 **search** | **str**| Find matching text | [optional] 
 **filter_id** | **str**| Filter | [optional] 
 **filter_description** | **str**| Filter | [optional] 
 **filter_public_date** | **str**| Filter | [optional] 
 **filter_synopsis** | **str**| Filter | [optional] 
 **filter_advisory_type** | **str**| Filter | [optional] 
 **filter_severity** | **str**| Filter | [optional] 

### Return type

[**ControllersSystemAdvisoriesResponse**](ControllersSystemAdvisoriesResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_systems**
> ControllersSystemsResponse list_systems(limit=limit, offset=offset, sort=sort, search=search, filter_insights_id=filter_insights_id, filter_id=filter_id, filter_display_name=filter_display_name, filter_last_evaluation=filter_last_evaluation, filter_last_upload=filter_last_upload, filter_rhsa_count=filter_rhsa_count, filter_rhba_count=filter_rhba_count, filter_rhea_count=filter_rhea_count, filter_other_count=filter_other_count, filter_stale=filter_stale, filter_packages_installed=filter_packages_installed, filter_packages_updatable=filter_packages_updatable, filter_stale_timestamp=filter_stale_timestamp, filter_stale_warning_timestamp=filter_stale_warning_timestamp, filter_culled_timestamp=filter_culled_timestamp, filter_created=filter_created, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)

Show me all my systems

Show me all my systems

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_systems_response import ControllersSystemsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    limit = 56 # int | Limit for paging, set -1 to return all (optional)
    offset = 56 # int | Offset for paging (optional)
    sort = 'sort_example' # str | Sort field (optional)
    search = 'search_example' # str | Find matching text (optional)
    filter_insights_id = 'filter_insights_id_example' # str | Filter (optional)
    filter_id = 'filter_id_example' # str | Filter (optional)
    filter_display_name = 'filter_display_name_example' # str | Filter (optional)
    filter_last_evaluation = 'filter_last_evaluation_example' # str | Filter (optional)
    filter_last_upload = 'filter_last_upload_example' # str | Filter (optional)
    filter_rhsa_count = 'filter_rhsa_count_example' # str | Filter (optional)
    filter_rhba_count = 'filter_rhba_count_example' # str | Filter (optional)
    filter_rhea_count = 'filter_rhea_count_example' # str | Filter (optional)
    filter_other_count = 'filter_other_count_example' # str | Filter (optional)
    filter_stale = 'filter_stale_example' # str | Filter (optional)
    filter_packages_installed = 'filter_packages_installed_example' # str | Filter (optional)
    filter_packages_updatable = 'filter_packages_updatable_example' # str | Filter (optional)
    filter_stale_timestamp = 'filter_stale_timestamp_example' # str | Filter (optional)
    filter_stale_warning_timestamp = 'filter_stale_warning_timestamp_example' # str | Filter (optional)
    filter_culled_timestamp = 'filter_culled_timestamp_example' # str | Filter (optional)
    filter_created = 'filter_created_example' # str | Filter (optional)
    tags = ['tags_example'] # List[str] | Tag filter (optional)
    filter_system_profile_sap_system = 'filter_system_profile_sap_system_example' # str | Filter only SAP systems (optional)
    filter_system_profile_sap_sids_in = ['filter_system_profile_sap_sids_in_example'] # List[str] | Filter systems by their SAP SIDs (optional)

    try:
        # Show me all my systems
        api_response = api_instance.list_systems(limit=limit, offset=offset, sort=sort, search=search, filter_insights_id=filter_insights_id, filter_id=filter_id, filter_display_name=filter_display_name, filter_last_evaluation=filter_last_evaluation, filter_last_upload=filter_last_upload, filter_rhsa_count=filter_rhsa_count, filter_rhba_count=filter_rhba_count, filter_rhea_count=filter_rhea_count, filter_other_count=filter_other_count, filter_stale=filter_stale, filter_packages_installed=filter_packages_installed, filter_packages_updatable=filter_packages_updatable, filter_stale_timestamp=filter_stale_timestamp, filter_stale_warning_timestamp=filter_stale_warning_timestamp, filter_culled_timestamp=filter_culled_timestamp, filter_created=filter_created, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)
        print("The response of DefaultApi->list_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Limit for paging, set -1 to return all | [optional] 
 **offset** | **int**| Offset for paging | [optional] 
 **sort** | **str**| Sort field | [optional] 
 **search** | **str**| Find matching text | [optional] 
 **filter_insights_id** | **str**| Filter | [optional] 
 **filter_id** | **str**| Filter | [optional] 
 **filter_display_name** | **str**| Filter | [optional] 
 **filter_last_evaluation** | **str**| Filter | [optional] 
 **filter_last_upload** | **str**| Filter | [optional] 
 **filter_rhsa_count** | **str**| Filter | [optional] 
 **filter_rhba_count** | **str**| Filter | [optional] 
 **filter_rhea_count** | **str**| Filter | [optional] 
 **filter_other_count** | **str**| Filter | [optional] 
 **filter_stale** | **str**| Filter | [optional] 
 **filter_packages_installed** | **str**| Filter | [optional] 
 **filter_packages_updatable** | **str**| Filter | [optional] 
 **filter_stale_timestamp** | **str**| Filter | [optional] 
 **filter_stale_warning_timestamp** | **str**| Filter | [optional] 
 **filter_culled_timestamp** | **str**| Filter | [optional] 
 **filter_created** | **str**| Filter | [optional] 
 **tags** | [**List[str]**](str.md)| Tag filter | [optional] 
 **filter_system_profile_sap_system** | **str**| Filter only SAP systems | [optional] 
 **filter_system_profile_sap_sids_in** | [**List[str]**](str.md)| Filter systems by their SAP SIDs | [optional] 

### Return type

[**ControllersSystemsResponse**](ControllersSystemsResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_systems**
> ControllersPackageSystemsResponse package_systems(package_name, limit=limit, offset=offset, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)

Show me all my systems which have a package installed

Show me all my systems which have a package installed

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_package_systems_response import ControllersPackageSystemsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    package_name = 'package_name_example' # str | Package name
    limit = 56 # int | Limit for paging, set -1 to return all (optional)
    offset = 56 # int | Offset for paging (optional)
    tags = ['tags_example'] # List[str] | Tag filter (optional)
    filter_system_profile_sap_system = 'filter_system_profile_sap_system_example' # str | Filter only SAP systems (optional)
    filter_system_profile_sap_sids_in = ['filter_system_profile_sap_sids_in_example'] # List[str] | Filter systems by their SAP SIDs (optional)

    try:
        # Show me all my systems which have a package installed
        api_response = api_instance.package_systems(package_name, limit=limit, offset=offset, tags=tags, filter_system_profile_sap_system=filter_system_profile_sap_system, filter_system_profile_sap_sids_in=filter_system_profile_sap_sids_in)
        print("The response of DefaultApi->package_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->package_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Package name | 
 **limit** | **int**| Limit for paging, set -1 to return all | [optional] 
 **offset** | **int**| Offset for paging | [optional] 
 **tags** | [**List[str]**](str.md)| Tag filter | [optional] 
 **filter_system_profile_sap_system** | **str**| Filter only SAP systems | [optional] 
 **filter_system_profile_sap_sids_in** | [**List[str]**](str.md)| Filter systems by their SAP SIDs | [optional] 

### Return type

[**ControllersPackageSystemsResponse**](ControllersPackageSystemsResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_versions**
> ControllersPackageVersionsResponse package_versions(package_name, limit=limit, offset=offset)

Show me all package versions installed on some system

Show me all package versions installed on some system

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_package_versions_response import ControllersPackageVersionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    package_name = 'package_name_example' # str | Package name
    limit = 56 # int | Limit for paging, set -1 to return all (optional)
    offset = 56 # int | Offset for paging (optional)

    try:
        # Show me all package versions installed on some system
        api_response = api_instance.package_versions(package_name, limit=limit, offset=offset)
        print("The response of DefaultApi->package_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->package_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| Package name | 
 **limit** | **int**| Limit for paging, set -1 to return all | [optional] 
 **offset** | **int**| Offset for paging | [optional] 

### Return type

[**ControllersPackageVersionsResponse**](ControllersPackageVersionsResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **system_packages**
> ControllersSystemPackageResponse system_packages(inventory_id, limit=limit, offset=offset, search=search, filter_name=filter_name, filter_description=filter_description, filter_evra=filter_evra, filter_summary=filter_summary, filter_updatable=filter_updatable)

Show me details about a system packages by given inventory id

Show me details about a system packages by given inventory id

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_system_package_response import ControllersSystemPackageResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    inventory_id = 'inventory_id_example' # str | Inventory ID
    limit = 56 # int | Limit for paging, set -1 to return all (optional)
    offset = 56 # int | Offset for paging (optional)
    search = 'search_example' # str | Find matching text (optional)
    filter_name = 'filter_name_example' # str | Filter (optional)
    filter_description = 'filter_description_example' # str | Filter (optional)
    filter_evra = 'filter_evra_example' # str | Filter (optional)
    filter_summary = 'filter_summary_example' # str | Filter (optional)
    filter_updatable = True # bool | Filter (optional)

    try:
        # Show me details about a system packages by given inventory id
        api_response = api_instance.system_packages(inventory_id, limit=limit, offset=offset, search=search, filter_name=filter_name, filter_description=filter_description, filter_evra=filter_evra, filter_summary=filter_summary, filter_updatable=filter_updatable)
        print("The response of DefaultApi->system_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->system_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventory_id** | **str**| Inventory ID | 
 **limit** | **int**| Limit for paging, set -1 to return all | [optional] 
 **offset** | **int**| Offset for paging | [optional] 
 **search** | **str**| Find matching text | [optional] 
 **filter_name** | **str**| Filter | [optional] 
 **filter_description** | **str**| Filter | [optional] 
 **filter_evra** | **str**| Filter | [optional] 
 **filter_summary** | **str**| Filter | [optional] 
 **filter_updatable** | **bool**| Filter | [optional] 

### Return type

[**ControllersSystemPackageResponse**](ControllersSystemPackageResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_advisories_systems**
> ControllersAdvisoriesSystemsResponse view_advisories_systems(body)

View advisory-system pairs for selected systems and advisories

View advisory-system pairs for selected systems and advisories

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_advisories_systems_response import ControllersAdvisoriesSystemsResponse
from openapi_client.models.controllers_systems_advisories_request import ControllersSystemsAdvisoriesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.ControllersSystemsAdvisoriesRequest() # ControllersSystemsAdvisoriesRequest | Request body

    try:
        # View advisory-system pairs for selected systems and advisories
        api_response = api_instance.view_advisories_systems(body)
        print("The response of DefaultApi->view_advisories_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->view_advisories_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ControllersSystemsAdvisoriesRequest**](ControllersSystemsAdvisoriesRequest.md)| Request body | 

### Return type

[**ControllersAdvisoriesSystemsResponse**](ControllersAdvisoriesSystemsResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view_systems_advisories**
> ControllersSystemsAdvisoriesResponse view_systems_advisories(body)

View system-advisory pairs for selected systems and advisories

View system-advisory pairs for selected systems and advisories

### Example

* Api Key Authentication (RhIdentity):

```python
import openapi_client
from openapi_client.models.controllers_systems_advisories_request import ControllersSystemsAdvisoriesRequest
from openapi_client.models.controllers_systems_advisories_response import ControllersSystemsAdvisoriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://redhat.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://redhat.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: RhIdentity
configuration.api_key['RhIdentity'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['RhIdentity'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.ControllersSystemsAdvisoriesRequest() # ControllersSystemsAdvisoriesRequest | Request body

    try:
        # View system-advisory pairs for selected systems and advisories
        api_response = api_instance.view_systems_advisories(body)
        print("The response of DefaultApi->view_systems_advisories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->view_systems_advisories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ControllersSystemsAdvisoriesRequest**](ControllersSystemsAdvisoriesRequest.md)| Request body | 

### Return type

[**ControllersSystemsAdvisoriesResponse**](ControllersSystemsAdvisoriesResponse.md)

### Authorization

[RhIdentity](../README.md#RhIdentity)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

