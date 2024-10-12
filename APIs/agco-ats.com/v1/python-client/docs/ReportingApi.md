# openapi_client.ReportingApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reporting_bundle_status_summary**](ReportingApi.md#reporting_bundle_status_summary) | **GET** /api/v2/Reporting/BundleStatusSummary | Get a summary of all Packages in a Bundle
[**reporting_bundles_in_update_group**](ReportingApi.md#reporting_bundles_in_update_group) | **GET** /api/v2/Reporting/BundlesInUpdateGroup | Get a list of bundles for UpdateGroup.
[**reporting_client_info**](ReportingApi.md#reporting_client_info) | **GET** /api/v2/Reporting/ClientInfo | Get Client Information
[**reporting_current_packages_in_update_group**](ReportingApi.md#reporting_current_packages_in_update_group) | **GET** /api/v2/Reporting/CurrentPackagesInUpdateGroup | Get the current packages for an update group.
[**reporting_get_client**](ReportingApi.md#reporting_get_client) | **GET** /api/v2/Reporting/GetClient | Get a Client in the Update System.
[**reporting_get_subscriptions**](ReportingApi.md#reporting_get_subscriptions) | **GET** /api/v2/Reporting/GetSubscriptions | Get a list of current Client Subscriptions.
[**reporting_package_status_summary**](ReportingApi.md#reporting_package_status_summary) | **GET** /api/v2/Reporting/PackageStatusSummary | Get a summary report for a Specific Package
[**reporting_registered_clients**](ReportingApi.md#reporting_registered_clients) | **GET** /api/v2/Reporting/RegisteredClients | Get a list of subscribed clients
[**reporting_update_groups**](ReportingApi.md#reporting_update_groups) | **GET** /api/v2/Reporting/UpdateGroups | Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
[**reporting_update_metrics**](ReportingApi.md#reporting_update_metrics) | **GET** /api/v2/Reporting/UpdateMetrics | Get data for pie charts in UpdateMetrics.


# **reporting_bundle_status_summary**
> APIPagedResponseUpdateSystemModelsPackageStatusSummary reporting_bundle_status_summary(bundle_id, limit=limit, offset=offset)

Get a summary of all Packages in a Bundle

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_package_status_summary import APIPagedResponseUpdateSystemModelsPackageStatusSummary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    bundle_id = 'bundle_id_example' # str | The BundleID
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a summary of all Packages in a Bundle
        api_response = api_instance.reporting_bundle_status_summary(bundle_id, limit=limit, offset=offset)
        print("The response of ReportingApi->reporting_bundle_status_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_bundle_status_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundle_id** | **str**| The BundleID | 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsPackageStatusSummary**](APIPagedResponseUpdateSystemModelsPackageStatusSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_bundles_in_update_group**
> APIPagedResponseUpdateSystemModelsBundle reporting_bundles_in_update_group(id, include_inactive, limit=limit, offset=offset)

Get a list of bundles for UpdateGroup.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_bundle import APIPagedResponseUpdateSystemModelsBundle
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    id = 'id_example' # str | The UpdateGroupID
    include_inactive = True # bool | Include Inactive Bundles (true|false)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a list of bundles for UpdateGroup.
        api_response = api_instance.reporting_bundles_in_update_group(id, include_inactive, limit=limit, offset=offset)
        print("The response of ReportingApi->reporting_bundles_in_update_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_bundles_in_update_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UpdateGroupID | 
 **include_inactive** | **bool**| Include Inactive Bundles (true|false) | 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsBundle**](APIPagedResponseUpdateSystemModelsBundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_client_info**
> UpdateSystemModelsClientInfo reporting_client_info(client_id)

Get Client Information

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_client_info import UpdateSystemModelsClientInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    client_id = 'client_id_example' # str | The Client ID

    try:
        # Get Client Information
        api_response = api_instance.reporting_client_info(client_id)
        print("The response of ReportingApi->reporting_client_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_client_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| The Client ID | 

### Return type

[**UpdateSystemModelsClientInfo**](UpdateSystemModelsClientInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_current_packages_in_update_group**
> List[UpdateSystemModelsPackage] reporting_current_packages_in_update_group(id, subscription_type_filter=subscription_type_filter)

Get the current packages for an update group.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package import UpdateSystemModelsPackage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    id = 'id_example' # str | The UpdateGroupID
    subscription_type_filter = 'subscription_type_filter_example' # str | Optional.  The subscription type filter to use.  By default the Default packages (Required and IncludeByDefault) will be returned. (optional)

    try:
        # Get the current packages for an update group.
        api_response = api_instance.reporting_current_packages_in_update_group(id, subscription_type_filter=subscription_type_filter)
        print("The response of ReportingApi->reporting_current_packages_in_update_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_current_packages_in_update_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UpdateGroupID | 
 **subscription_type_filter** | **str**| Optional.  The subscription type filter to use.  By default the Default packages (Required and IncludeByDefault) will be returned. | [optional] 

### Return type

[**List[UpdateSystemModelsPackage]**](UpdateSystemModelsPackage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_get_client**
> UpdateSystemModelsClient reporting_get_client(id)

Get a Client in the Update System.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_client import UpdateSystemModelsClient
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    id = 'id_example' # str | The Client ID

    try:
        # Get a Client in the Update System.
        api_response = api_instance.reporting_get_client(id)
        print("The response of ReportingApi->reporting_get_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_get_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Client ID | 

### Return type

[**UpdateSystemModelsClient**](UpdateSystemModelsClient.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_get_subscriptions**
> APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship reporting_get_subscriptions(client_id=client_id, update_group_id=update_group_id, limit=limit, offset=offset)

Get a list of current Client Subscriptions.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_update_group_client_relationship import APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    client_id = 'client_id_example' # str | Optional. Filter by Client ID (optional)
    update_group_id = 'update_group_id_example' # str | Optional. Filter by Update Group ID (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a list of current Client Subscriptions.
        api_response = api_instance.reporting_get_subscriptions(client_id=client_id, update_group_id=update_group_id, limit=limit, offset=offset)
        print("The response of ReportingApi->reporting_get_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_get_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Optional. Filter by Client ID | [optional] 
 **update_group_id** | **str**| Optional. Filter by Update Group ID | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship**](APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_package_status_summary**
> UpdateSystemModelsPackageStatusSummary reporting_package_status_summary(package_id)

Get a summary report for a Specific Package

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_status_summary import UpdateSystemModelsPackageStatusSummary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    package_id = 'package_id_example' # str | The Package ID

    try:
        # Get a summary report for a Specific Package
        api_response = api_instance.reporting_package_status_summary(package_id)
        print("The response of ReportingApi->reporting_package_status_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_package_status_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_id** | **str**| The Package ID | 

### Return type

[**UpdateSystemModelsPackageStatusSummary**](UpdateSystemModelsPackageStatusSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_registered_clients**
> APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata reporting_registered_clients(update_group_id=update_group_id, client_id=client_id, tag=tag, report_result=report_result, report_result_is_valid=report_result_is_valid, report_value=report_value, last_check_in_before=last_check_in_before, last_check_in_after=last_check_in_after, order_by=order_by, limit=limit, offset=offset)

Get a list of subscribed clients

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_client_status_update_system_models_paged_client_status_metadata import APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    update_group_id = 'update_group_id_example' # str | Optional but required when including any or all of following parameters: ReportValue, ReportResult, ReportResultIsValid. The Update Group ID. If not provided, all clients will be returned. (optional)
    client_id = 'client_id_example' # str | Optional. Filter where ClientID matches a value. Wildcards are supported (*). (optional)
    tag = 'tag_example' # str | Optional. Filter where Tag matches a value. Wildcards are supported (*). (optional)
    report_result = 'report_result_example' # str | Optional and UpdateGroupID must be included. Filter where ReportResult matches a value. Wildcards are supported (*). (optional)
    report_result_is_valid = True # bool | Optional and UpdateGroupID must be included. When 'true' filters results where ReportResult equals ReportResultExpected.  When 'false' filters results where ValueToValidate does not equal ReportResults. (optional)
    report_value = 'report_value_example' # str | Optional and UpdateGroupID must be included. Filter where ReportValue matches a value. Wildcards are supported (*). (optional)
    last_check_in_before = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter where LastCheckIn occured before the provided date. (optional)
    last_check_in_after = '2013-10-20T19:20:30+01:00' # datetime | Optional. Filter where LastCheckIn occured after the provided date. (optional)
    order_by = 'order_by_example' # str | Optional. Specify the order in which results should be returned. Use this format: [FieldName] [ASC|ASCENDING|DESC|DESCENDING],...                 If sort direction is not provided for a field, it will be sorted ascending. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a list of subscribed clients
        api_response = api_instance.reporting_registered_clients(update_group_id=update_group_id, client_id=client_id, tag=tag, report_result=report_result, report_result_is_valid=report_result_is_valid, report_value=report_value, last_check_in_before=last_check_in_before, last_check_in_after=last_check_in_after, order_by=order_by, limit=limit, offset=offset)
        print("The response of ReportingApi->reporting_registered_clients:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_registered_clients: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_group_id** | **str**| Optional but required when including any or all of following parameters: ReportValue, ReportResult, ReportResultIsValid. The Update Group ID. If not provided, all clients will be returned. | [optional] 
 **client_id** | **str**| Optional. Filter where ClientID matches a value. Wildcards are supported (*). | [optional] 
 **tag** | **str**| Optional. Filter where Tag matches a value. Wildcards are supported (*). | [optional] 
 **report_result** | **str**| Optional and UpdateGroupID must be included. Filter where ReportResult matches a value. Wildcards are supported (*). | [optional] 
 **report_result_is_valid** | **bool**| Optional and UpdateGroupID must be included. When &#39;true&#39; filters results where ReportResult equals ReportResultExpected.  When &#39;false&#39; filters results where ValueToValidate does not equal ReportResults. | [optional] 
 **report_value** | **str**| Optional and UpdateGroupID must be included. Filter where ReportValue matches a value. Wildcards are supported (*). | [optional] 
 **last_check_in_before** | **datetime**| Optional. Filter where LastCheckIn occured before the provided date. | [optional] 
 **last_check_in_after** | **datetime**| Optional. Filter where LastCheckIn occured after the provided date. | [optional] 
 **order_by** | **str**| Optional. Specify the order in which results should be returned. Use this format: [FieldName] [ASC|ASCENDING|DESC|DESCENDING],...                 If sort direction is not provided for a field, it will be sorted ascending. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata**](APIPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_update_groups**
> APIPagedResponseUpdateSystemModelsUpdateGroup reporting_update_groups(limit=limit, offset=offset)

Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_update_group import APIPagedResponseUpdateSystemModelsUpdateGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
        api_response = api_instance.reporting_update_groups(limit=limit, offset=offset)
        print("The response of ReportingApi->reporting_update_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_update_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsUpdateGroup**](APIPagedResponseUpdateSystemModelsUpdateGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reporting_update_metrics**
> UpdateSystemModelsUpdateMetricsData reporting_update_metrics(update_group_id, bundle_number=bundle_number)

Get data for pie charts in UpdateMetrics.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_update_metrics_data import UpdateSystemModelsUpdateMetricsData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingApi(api_client)
    update_group_id = 'update_group_id_example' # str | The UpdateType in which clients must be for the report to include them.
    bundle_number = 56 # int | Optional. Tells us which chart to show based upon filter. (optional)

    try:
        # Get data for pie charts in UpdateMetrics.
        api_response = api_instance.reporting_update_metrics(update_group_id, bundle_number=bundle_number)
        print("The response of ReportingApi->reporting_update_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingApi->reporting_update_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_group_id** | **str**| The UpdateType in which clients must be for the report to include them. | 
 **bundle_number** | **int**| Optional. Tells us which chart to show based upon filter. | [optional] 

### Return type

[**UpdateSystemModelsUpdateMetricsData**](UpdateSystemModelsUpdateMetricsData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

