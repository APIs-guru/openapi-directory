# openapi_client.RecordSetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**record_sets_create_or_update**](RecordSetsApi.md#record_sets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName} | 
[**record_sets_delete**](RecordSetsApi.md#record_sets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName} | 
[**record_sets_get**](RecordSetsApi.md#record_sets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName} | 
[**record_sets_list**](RecordSetsApi.md#record_sets_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/ALL | 
[**record_sets_list_by_type**](RecordSetsApi.md#record_sets_list_by_type) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType} | 
[**record_sets_update**](RecordSetsApi.md#record_sets_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateZoneName}/{recordType}/{relativeRecordSetName} | 


# **record_sets_create_or_update**
> RecordSet record_sets_create_or_update(resource_group_name, private_zone_name, record_type, relative_record_set_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)



Creates or updates a record set within a Private DNS zone.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    record_type = 'record_type_example' # str | The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the Private DNS zone is created).
    relative_record_set_name = 'relative_record_set_name_example' # str | The name of the record set, relative to the name of the zone.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RecordSet() # RecordSet | Parameters supplied to the CreateOrUpdate operation.
    if_match = 'if_match_example' # str | The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. (optional)
    if_none_match = 'if_none_match_example' # str | Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored. (optional)

    try:
        api_response = api_instance.record_sets_create_or_update(resource_group_name, private_zone_name, record_type, relative_record_set_name, api_version, subscription_id, parameters, if_match=if_match, if_none_match=if_none_match)
        print("The response of RecordSetsApi->record_sets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **record_type** | **str**| The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the Private DNS zone is created). | 
 **relative_record_set_name** | **str**| The name of the record set, relative to the name of the zone. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RecordSet**](RecordSet.md)| Parameters supplied to the CreateOrUpdate operation. | 
 **if_match** | **str**| The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting any concurrent changes. | [optional] 
 **if_none_match** | **str**| Set to &#39;*&#39; to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored. | [optional] 

### Return type

[**RecordSet**](RecordSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The record set has been updated. |  -  |
**201** | The record set has been created. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_delete**
> record_sets_delete(resource_group_name, private_zone_name, record_type, relative_record_set_name, api_version, subscription_id, if_match=if_match)



Deletes a record set from a Private DNS zone. This operation cannot be undone.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    record_type = 'record_type_example' # str | The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the Private DNS zone is deleted).
    relative_record_set_name = 'relative_record_set_name_example' # str | The name of the record set, relative to the name of the zone.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    if_match = 'if_match_example' # str | The ETag of the record set. Omit this value to always delete the current record set. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. (optional)

    try:
        api_instance.record_sets_delete(resource_group_name, private_zone_name, record_type, relative_record_set_name, api_version, subscription_id, if_match=if_match)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **record_type** | **str**| The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the Private DNS zone is deleted). | 
 **relative_record_set_name** | **str**| The name of the record set, relative to the name of the zone. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **if_match** | **str**| The ETag of the record set. Omit this value to always delete the current record set. Specify the last-seen ETag value to prevent accidentally deleting any concurrent changes. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The record set has been deleted. |  -  |
**204** | The record set was not found. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_get**
> RecordSet record_sets_get(resource_group_name, private_zone_name, record_type, relative_record_set_name, api_version, subscription_id)



Gets a record set.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    record_type = 'record_type_example' # str | The type of DNS record in this record set.
    relative_record_set_name = 'relative_record_set_name_example' # str | The name of the record set, relative to the name of the zone.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.record_sets_get(resource_group_name, private_zone_name, record_type, relative_record_set_name, api_version, subscription_id)
        print("The response of RecordSetsApi->record_sets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **record_type** | **str**| The type of DNS record in this record set. | 
 **relative_record_set_name** | **str**| The name of the record set, relative to the name of the zone. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RecordSet**](RecordSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_list**
> RecordSetListResult record_sets_list(resource_group_name, private_zone_name, api_version, subscription_id, top=top, recordsetnamesuffix=recordsetnamesuffix)



Lists all record sets in a Private DNS zone.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | The maximum number of record sets to return. If not specified, returns up to 100 record sets. (optional)
    recordsetnamesuffix = 'recordsetnamesuffix_example' # str | The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with \".<recordsetnamesuffix>\". (optional)

    try:
        api_response = api_instance.record_sets_list(resource_group_name, private_zone_name, api_version, subscription_id, top=top, recordsetnamesuffix=recordsetnamesuffix)
        print("The response of RecordSetsApi->record_sets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| The maximum number of record sets to return. If not specified, returns up to 100 record sets. | [optional] 
 **recordsetnamesuffix** | **str**| The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with \&quot;.&lt;recordsetnamesuffix&gt;\&quot;. | [optional] 

### Return type

[**RecordSetListResult**](RecordSetListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_list_by_type**
> RecordSetListResult record_sets_list_by_type(resource_group_name, private_zone_name, record_type, api_version, subscription_id, top=top, recordsetnamesuffix=recordsetnamesuffix)



Lists the record sets of a specified type in a Private DNS zone.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    record_type = 'record_type_example' # str | The type of record sets to enumerate.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | The maximum number of record sets to return. If not specified, returns up to 100 record sets. (optional)
    recordsetnamesuffix = 'recordsetnamesuffix_example' # str | The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with \".<recordsetnamesuffix>\". (optional)

    try:
        api_response = api_instance.record_sets_list_by_type(resource_group_name, private_zone_name, record_type, api_version, subscription_id, top=top, recordsetnamesuffix=recordsetnamesuffix)
        print("The response of RecordSetsApi->record_sets_list_by_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_list_by_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **record_type** | **str**| The type of record sets to enumerate. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| The maximum number of record sets to return. If not specified, returns up to 100 record sets. | [optional] 
 **recordsetnamesuffix** | **str**| The suffix label of the record set name to be used to filter the record set enumeration. If this parameter is specified, the returned enumeration will only contain records that end with \&quot;.&lt;recordsetnamesuffix&gt;\&quot;. | [optional] 

### Return type

[**RecordSetListResult**](RecordSetListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **record_sets_update**
> RecordSet record_sets_update(resource_group_name, private_zone_name, record_type, relative_record_set_name, api_version, subscription_id, parameters, if_match=if_match)



Updates a record set within a Private DNS zone.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RecordSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    private_zone_name = 'private_zone_name_example' # str | The name of the Private DNS zone (without a terminating dot).
    record_type = 'record_type_example' # str | The type of DNS record in this record set.
    relative_record_set_name = 'relative_record_set_name_example' # str | The name of the record set, relative to the name of the zone.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RecordSet() # RecordSet | Parameters supplied to the Update operation.
    if_match = 'if_match_example' # str | The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. (optional)

    try:
        api_response = api_instance.record_sets_update(resource_group_name, private_zone_name, record_type, relative_record_set_name, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of RecordSetsApi->record_sets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecordSetsApi->record_sets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **private_zone_name** | **str**| The name of the Private DNS zone (without a terminating dot). | 
 **record_type** | **str**| The type of DNS record in this record set. | 
 **relative_record_set_name** | **str**| The name of the record set, relative to the name of the zone. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RecordSet**](RecordSet.md)| Parameters supplied to the Update operation. | 
 **if_match** | **str**| The ETag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes. | [optional] 

### Return type

[**RecordSet**](RecordSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The record set has been updated. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

