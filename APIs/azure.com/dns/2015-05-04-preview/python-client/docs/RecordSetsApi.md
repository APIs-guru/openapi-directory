# openapi_client.RecordSetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**record_sets_create_or_update**](RecordSetsApi.md#record_sets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones/{zoneName}/{recordType}/{relativeRecordSetName} | 
[**record_sets_delete**](RecordSetsApi.md#record_sets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones/{zoneName}/{recordType}/{relativeRecordSetName} | 
[**record_sets_get**](RecordSetsApi.md#record_sets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones/{zoneName}/{recordType}/{relativeRecordSetName} | 
[**record_sets_list**](RecordSetsApi.md#record_sets_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones/{zoneName}/{recordType} | 
[**record_sets_list_all**](RecordSetsApi.md#record_sets_list_all) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnszones/{zoneName}/recordsets | 


# **record_sets_create_or_update**
> RecordSet record_sets_create_or_update(resource_group_name, zone_name, record_type, relative_record_set_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)



Creates a RecordSet within a DNS zone.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.record_set import RecordSet
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
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    zone_name = 'zone_name_example' # str | The name of the zone without a terminating dot.
    record_type = 'record_type_example' # str | The type of DNS record.
    relative_record_set_name = 'relative_record_set_name_example' # str | The name of the RecordSet, relative to the name of the zone.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.RecordSet() # RecordSet | Parameters supplied to the CreateOrUpdate operation.
    if_match = 'if_match_example' # str | The etag of RecordSet. (optional)
    if_none_match = 'if_none_match_example' # str | Defines the If-None-Match condition. Set to '*' to force Create-If-Not-Exist. Other values will be ignored. (optional)

    try:
        api_response = api_instance.record_sets_create_or_update(resource_group_name, zone_name, record_type, relative_record_set_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)
        print("The response of RecordSetsApi->record_sets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **zone_name** | **str**| The name of the zone without a terminating dot. | 
 **record_type** | **str**| The type of DNS record. | 
 **relative_record_set_name** | **str**| The name of the RecordSet, relative to the name of the zone. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**RecordSet**](RecordSet.md)| Parameters supplied to the CreateOrUpdate operation. | 
 **if_match** | **str**| The etag of RecordSet. | [optional] 
 **if_none_match** | **str**| Defines the If-None-Match condition. Set to &#39;*&#39; to force Create-If-Not-Exist. Other values will be ignored. | [optional] 

### Return type

[**RecordSet**](RecordSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_delete**
> record_sets_delete(resource_group_name, zone_name, record_type, relative_record_set_name, api_version, subscription_id, if_match=if_match)



Removes a RecordSet from a DNS zone.

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
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    zone_name = 'zone_name_example' # str | The name of the zone without a terminating dot.
    record_type = 'record_type_example' # str | The type of DNS record.
    relative_record_set_name = 'relative_record_set_name_example' # str | The name of the RecordSet, relative to the name of the zone.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    if_match = 'if_match_example' # str | Defines the If-Match condition. The delete operation will be performed only if the ETag of the zone on the server matches this value. (optional)

    try:
        api_instance.record_sets_delete(resource_group_name, zone_name, record_type, relative_record_set_name, api_version, subscription_id, if_match=if_match)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **zone_name** | **str**| The name of the zone without a terminating dot. | 
 **record_type** | **str**| The type of DNS record. | 
 **relative_record_set_name** | **str**| The name of the RecordSet, relative to the name of the zone. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **if_match** | **str**| Defines the If-Match condition. The delete operation will be performed only if the ETag of the zone on the server matches this value. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_get**
> RecordSet record_sets_get(resource_group_name, zone_name, record_type, relative_record_set_name, api_version, subscription_id)



Gets a RecordSet.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.record_set import RecordSet
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
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    zone_name = 'zone_name_example' # str | The name of the zone without a terminating dot.
    record_type = 'record_type_example' # str | The type of DNS record.
    relative_record_set_name = 'relative_record_set_name_example' # str | The name of the RecordSet, relative to the name of the zone.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.record_sets_get(resource_group_name, zone_name, record_type, relative_record_set_name, api_version, subscription_id)
        print("The response of RecordSetsApi->record_sets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **zone_name** | **str**| The name of the zone without a terminating dot. | 
 **record_type** | **str**| The type of DNS record. | 
 **relative_record_set_name** | **str**| The name of the RecordSet, relative to the name of the zone. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**RecordSet**](RecordSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_list**
> RecordSetListResult record_sets_list(resource_group_name, zone_name, record_type, api_version, subscription_id, top=top, filter=filter)



Lists the RecordSets of a specified type in a DNS zone.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.record_set_list_result import RecordSetListResult
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
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    zone_name = 'zone_name_example' # str | The name of the zone from which to enumerate RecordsSets.
    record_type = 'record_type_example' # str | The type of record sets to enumerate.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    top = 'top_example' # str | Query parameters. If null is passed returns the default number of zones. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.record_sets_list(resource_group_name, zone_name, record_type, api_version, subscription_id, top=top, filter=filter)
        print("The response of RecordSetsApi->record_sets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **zone_name** | **str**| The name of the zone from which to enumerate RecordsSets. | 
 **record_type** | **str**| The type of record sets to enumerate. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **top** | **str**| Query parameters. If null is passed returns the default number of zones. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**RecordSetListResult**](RecordSetListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_list_all**
> RecordSetListResult record_sets_list_all(resource_group_name, zone_name, api_version, subscription_id, top=top, filter=filter)



Lists all RecordSets in a DNS zone.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.record_set_list_result import RecordSetListResult
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
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    zone_name = 'zone_name_example' # str | The name of the zone from which to enumerate RecordSets.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    top = 'top_example' # str | Query parameters. If null is passed returns the default number of zones. (optional)
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)

    try:
        api_response = api_instance.record_sets_list_all(resource_group_name, zone_name, api_version, subscription_id, top=top, filter=filter)
        print("The response of RecordSetsApi->record_sets_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **zone_name** | **str**| The name of the zone from which to enumerate RecordSets. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **top** | **str**| Query parameters. If null is passed returns the default number of zones. | [optional] 
 **filter** | **str**| The filter to apply on the operation. | [optional] 

### Return type

[**RecordSetListResult**](RecordSetListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

