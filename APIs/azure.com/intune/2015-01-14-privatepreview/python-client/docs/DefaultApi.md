# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**android_add_app_for_mam_policy**](DefaultApi.md#android_add_app_for_mam_policy) | **PUT** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/apps/{appName} | 
[**android_add_group_for_mam_policy**](DefaultApi.md#android_add_group_for_mam_policy) | **PUT** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/groups/{groupId} | 
[**android_create_or_update_mam_policy**](DefaultApi.md#android_create_or_update_mam_policy) | **PUT** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName} | 
[**android_delete_app_for_mam_policy**](DefaultApi.md#android_delete_app_for_mam_policy) | **DELETE** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/apps/{appName} | 
[**android_delete_group_for_mam_policy**](DefaultApi.md#android_delete_group_for_mam_policy) | **DELETE** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/groups/{groupId} | 
[**android_delete_mam_policy**](DefaultApi.md#android_delete_mam_policy) | **DELETE** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName} | 
[**android_get_app_for_mam_policy**](DefaultApi.md#android_get_app_for_mam_policy) | **GET** /providers/Microsoft.Intune/locations/{hostName}/AndroidPolicies/{policyName}/apps | 
[**android_get_groups_for_mam_policy**](DefaultApi.md#android_get_groups_for_mam_policy) | **GET** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName}/groups | 
[**android_get_mam_policies**](DefaultApi.md#android_get_mam_policies) | **GET** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies | 
[**android_get_mam_policy_by_name**](DefaultApi.md#android_get_mam_policy_by_name) | **GET** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName} | 
[**android_patch_mam_policy**](DefaultApi.md#android_patch_mam_policy) | **PATCH** /providers/Microsoft.Intune/locations/{hostName}/androidPolicies/{policyName} | 
[**get_apps**](DefaultApi.md#get_apps) | **GET** /providers/Microsoft.Intune/locations/{hostName}/apps | 
[**get_location_by_host_name**](DefaultApi.md#get_location_by_host_name) | **GET** /providers/Microsoft.Intune/locations/hostName | 
[**get_locations**](DefaultApi.md#get_locations) | **GET** /providers/Microsoft.Intune/locations | 
[**get_mam_flagged_user_by_name**](DefaultApi.md#get_mam_flagged_user_by_name) | **GET** /providers/Microsoft.Intune/locations/{hostName}/flaggedUsers/{userName} | 
[**get_mam_flagged_users**](DefaultApi.md#get_mam_flagged_users) | **GET** /providers/Microsoft.Intune/locations/{hostName}/flaggedUsers | 
[**get_mam_statuses**](DefaultApi.md#get_mam_statuses) | **GET** /providers/Microsoft.Intune/locations/{hostName}/statuses/default | 
[**get_mam_user_device_by_device_name**](DefaultApi.md#get_mam_user_device_by_device_name) | **GET** /providers/Microsoft.Intune/locations/{hostName}/users/{userName}/devices/{deviceName} | 
[**get_mam_user_devices**](DefaultApi.md#get_mam_user_devices) | **GET** /providers/Microsoft.Intune/locations/{hostName}/users/{userName}/devices | 
[**get_mam_user_flagged_enrolled_apps**](DefaultApi.md#get_mam_user_flagged_enrolled_apps) | **GET** /providers/Microsoft.Intune/locations/{hostName}/flaggedUsers/{userName}/flaggedEnrolledApps | 
[**get_operation_results**](DefaultApi.md#get_operation_results) | **GET** /providers/Microsoft.Intune/locations/{hostName}/operationResults | 
[**ios_add_app_for_mam_policy**](DefaultApi.md#ios_add_app_for_mam_policy) | **PUT** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/apps/{appName} | 
[**ios_add_group_for_mam_policy**](DefaultApi.md#ios_add_group_for_mam_policy) | **PUT** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/groups/{groupId} | 
[**ios_create_or_update_mam_policy**](DefaultApi.md#ios_create_or_update_mam_policy) | **PUT** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName} | 
[**ios_delete_app_for_mam_policy**](DefaultApi.md#ios_delete_app_for_mam_policy) | **DELETE** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/apps/{appName} | 
[**ios_delete_group_for_mam_policy**](DefaultApi.md#ios_delete_group_for_mam_policy) | **DELETE** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/groups/{groupId} | 
[**ios_delete_mam_policy**](DefaultApi.md#ios_delete_mam_policy) | **DELETE** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName} | 
[**ios_get_app_for_mam_policy**](DefaultApi.md#ios_get_app_for_mam_policy) | **GET** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/apps | 
[**ios_get_groups_for_mam_policy**](DefaultApi.md#ios_get_groups_for_mam_policy) | **GET** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName}/groups | 
[**ios_get_mam_policies**](DefaultApi.md#ios_get_mam_policies) | **GET** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies | 
[**ios_get_mam_policy_by_name**](DefaultApi.md#ios_get_mam_policy_by_name) | **GET** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName} | 
[**ios_patch_mam_policy**](DefaultApi.md#ios_patch_mam_policy) | **PATCH** /providers/Microsoft.Intune/locations/{hostName}/iosPolicies/{policyName} | 
[**wipe_mam_user_device**](DefaultApi.md#wipe_mam_user_device) | **POST** /providers/Microsoft.Intune/locations/{hostName}/users/{userName}/devices/{deviceName}/wipe | 


# **android_add_app_for_mam_policy**
> android_add_app_for_mam_policy(host_name, policy_name, app_name, api_version, parameters)



Add app to an AndroidMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.mam_policy_app_id_or_group_id_payload import MAMPolicyAppIdOrGroupIdPayload
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    app_name = 'app_name_example' # str | application unique Name
    api_version = 'api_version_example' # str | Service Api Version.
    parameters = openapi_client.MAMPolicyAppIdOrGroupIdPayload() # MAMPolicyAppIdOrGroupIdPayload | Parameters supplied to the Create or update app to an android policy operation.

    try:
        api_instance.android_add_app_for_mam_policy(host_name, policy_name, app_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling DefaultApi->android_add_app_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **app_name** | **str**| application unique Name | 
 **api_version** | **str**| Service Api Version. | 
 **parameters** | [**MAMPolicyAppIdOrGroupIdPayload**](MAMPolicyAppIdOrGroupIdPayload.md)| Parameters supplied to the Create or update app to an android policy operation. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_add_group_for_mam_policy**
> android_add_group_for_mam_policy(host_name, policy_name, group_id, api_version, parameters)



Add group to an AndroidMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.mam_policy_app_id_or_group_id_payload import MAMPolicyAppIdOrGroupIdPayload
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    group_id = 'group_id_example' # str | group Id
    api_version = 'api_version_example' # str | Service Api Version.
    parameters = openapi_client.MAMPolicyAppIdOrGroupIdPayload() # MAMPolicyAppIdOrGroupIdPayload | Parameters supplied to the Create or update app to an android policy operation.

    try:
        api_instance.android_add_group_for_mam_policy(host_name, policy_name, group_id, api_version, parameters)
    except Exception as e:
        print("Exception when calling DefaultApi->android_add_group_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **group_id** | **str**| group Id | 
 **api_version** | **str**| Service Api Version. | 
 **parameters** | [**MAMPolicyAppIdOrGroupIdPayload**](MAMPolicyAppIdOrGroupIdPayload.md)| Parameters supplied to the Create or update app to an android policy operation. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_create_or_update_mam_policy**
> AndroidMAMPolicy android_create_or_update_mam_policy(host_name, policy_name, api_version, parameters)



Creates or updates AndroidMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.android_mam_policy import AndroidMAMPolicy
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.
    parameters = openapi_client.AndroidMAMPolicy() # AndroidMAMPolicy | Parameters supplied to the Create or update an android policy operation.

    try:
        api_response = api_instance.android_create_or_update_mam_policy(host_name, policy_name, api_version, parameters)
        print("The response of DefaultApi->android_create_or_update_mam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->android_create_or_update_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 
 **parameters** | [**AndroidMAMPolicy**](AndroidMAMPolicy.md)| Parameters supplied to the Create or update an android policy operation. | 

### Return type

[**AndroidMAMPolicy**](AndroidMAMPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | android entity. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_delete_app_for_mam_policy**
> android_delete_app_for_mam_policy(host_name, policy_name, app_name, api_version)



Delete App for Android Policy

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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    app_name = 'app_name_example' # str | application unique Name
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_instance.android_delete_app_for_mam_policy(host_name, policy_name, app_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->android_delete_app_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **app_name** | **str**| application unique Name | 
 **api_version** | **str**| Service Api Version. | 

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
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_delete_group_for_mam_policy**
> android_delete_group_for_mam_policy(host_name, policy_name, group_id, api_version)



Delete Group for Android Policy

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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    group_id = 'group_id_example' # str | application unique Name
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_instance.android_delete_group_for_mam_policy(host_name, policy_name, group_id, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->android_delete_group_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **group_id** | **str**| application unique Name | 
 **api_version** | **str**| Service Api Version. | 

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
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_delete_mam_policy**
> android_delete_mam_policy(host_name, policy_name, api_version)



Delete Android Policy

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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_instance.android_delete_mam_policy(host_name, policy_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->android_delete_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 

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
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_get_app_for_mam_policy**
> ApplicationCollection android_get_app_for_mam_policy(host_name, policy_name, api_version, filter=filter, top=top, select=select)



Get apps for an AndroidMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.application_collection import ApplicationCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.android_get_app_for_mam_policy(host_name, policy_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->android_get_app_for_mam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->android_get_app_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**ApplicationCollection**](ApplicationCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | applications as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_get_groups_for_mam_policy**
> GroupsCollection android_get_groups_for_mam_policy(host_name, policy_name, api_version)



Returns groups for a given AndroidMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.groups_collection import GroupsCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | policy name for the tenant
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_response = api_instance.android_get_groups_for_mam_policy(host_name, policy_name, api_version)
        print("The response of DefaultApi->android_get_groups_for_mam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->android_get_groups_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| policy name for the tenant | 
 **api_version** | **str**| Service Api Version. | 

### Return type

[**GroupsCollection**](GroupsCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | groups as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_get_mam_policies**
> AndroidMAMPolicyCollection android_get_mam_policies(host_name, api_version, filter=filter, top=top, select=select)



Returns Intune Android policies.

### Example


```python
import openapi_client
from openapi_client.models.android_mam_policy_collection import AndroidMAMPolicyCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.android_get_mam_policies(host_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->android_get_mam_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->android_get_mam_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**AndroidMAMPolicyCollection**](AndroidMAMPolicyCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | android Policies response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_get_mam_policy_by_name**
> AndroidMAMPolicy android_get_mam_policy_by_name(host_name, policy_name, api_version, select=select)



Returns AndroidMAMPolicy with given name.

### Example


```python
import openapi_client
from openapi_client.models.android_mam_policy import AndroidMAMPolicy
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.android_get_mam_policy_by_name(host_name, policy_name, api_version, select=select)
        print("The response of DefaultApi->android_get_mam_policy_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->android_get_mam_policy_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**AndroidMAMPolicy**](AndroidMAMPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | iOSMAMPolicy entity. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **android_patch_mam_policy**
> AndroidMAMPolicy android_patch_mam_policy(host_name, policy_name, api_version, parameters)



Patch AndroidMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.android_mam_policy import AndroidMAMPolicy
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.
    parameters = openapi_client.AndroidMAMPolicy() # AndroidMAMPolicy | Parameters supplied to the Create or update an android policy operation.

    try:
        api_response = api_instance.android_patch_mam_policy(host_name, policy_name, api_version, parameters)
        print("The response of DefaultApi->android_patch_mam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->android_patch_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 
 **parameters** | [**AndroidMAMPolicy**](AndroidMAMPolicy.md)| Parameters supplied to the Create or update an android policy operation. | 

### Return type

[**AndroidMAMPolicy**](AndroidMAMPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | android entity. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_apps**
> ApplicationCollection get_apps(host_name, api_version, filter=filter, top=top, select=select)



Returns Intune Manageable apps.

### Example


```python
import openapi_client
from openapi_client.models.application_collection import ApplicationCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.get_apps(host_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->get_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**ApplicationCollection**](ApplicationCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | applications as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_location_by_host_name**
> Location get_location_by_host_name(api_version)



Returns location for given tenant.

### Example


```python
import openapi_client
from openapi_client.models.location import Location
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_response = api_instance.get_location_by_host_name(api_version)
        print("The response of DefaultApi->get_location_by_host_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_location_by_host_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Service Api Version. | 

### Return type

[**Location**](Location.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | single location response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_locations**
> LocationCollection get_locations(api_version)



Returns location for user tenant.

### Example


```python
import openapi_client
from openapi_client.models.location_collection import LocationCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_response = api_instance.get_locations(api_version)
        print("The response of DefaultApi->get_locations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_locations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Service Api Version. | 

### Return type

[**LocationCollection**](LocationCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | location response as a collection |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mam_flagged_user_by_name**
> FlaggedUser get_mam_flagged_user_by_name(host_name, user_name, api_version, select=select)



Returns Intune flagged user details

### Example


```python
import openapi_client
from openapi_client.models.flagged_user import FlaggedUser
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    user_name = 'user_name_example' # str | Flagged userName
    api_version = 'api_version_example' # str | Service Api Version.
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.get_mam_flagged_user_by_name(host_name, user_name, api_version, select=select)
        print("The response of DefaultApi->get_mam_flagged_user_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_mam_flagged_user_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **user_name** | **str**| Flagged userName | 
 **api_version** | **str**| Service Api Version. | 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**FlaggedUser**](FlaggedUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Flagged user details in response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mam_flagged_users**
> FlaggedUserCollection get_mam_flagged_users(host_name, api_version, filter=filter, top=top, select=select)



Returns Intune flagged user collection

### Example


```python
import openapi_client
from openapi_client.models.flagged_user_collection import FlaggedUserCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.get_mam_flagged_users(host_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->get_mam_flagged_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_mam_flagged_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**FlaggedUserCollection**](FlaggedUserCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Flagged users as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mam_statuses**
> StatusesDefault get_mam_statuses(host_name, api_version)



Returns Intune Tenant level statuses.

### Example


```python
import openapi_client
from openapi_client.models.statuses_default import StatusesDefault
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_response = api_instance.get_mam_statuses(host_name, api_version)
        print("The response of DefaultApi->get_mam_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_mam_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **api_version** | **str**| Service Api Version. | 

### Return type

[**StatusesDefault**](StatusesDefault.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | applications as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mam_user_device_by_device_name**
> Device get_mam_user_device_by_device_name(host_name, user_name, device_name, api_version, select=select)



Get a unique device for a user.

### Example


```python
import openapi_client
from openapi_client.models.device import Device
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    user_name = 'user_name_example' # str | unique user name
    device_name = 'device_name_example' # str | device name
    api_version = 'api_version_example' # str | Service Api Version.
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.get_mam_user_device_by_device_name(host_name, user_name, device_name, api_version, select=select)
        print("The response of DefaultApi->get_mam_user_device_by_device_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_mam_user_device_by_device_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **user_name** | **str**| unique user name | 
 **device_name** | **str**| device name | 
 **api_version** | **str**| Service Api Version. | 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device entity. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mam_user_devices**
> DeviceCollection get_mam_user_devices(host_name, user_name, api_version, filter=filter, top=top, select=select)



Get devices for a user.

### Example


```python
import openapi_client
from openapi_client.models.device_collection import DeviceCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    user_name = 'user_name_example' # str | user unique Name
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.get_mam_user_devices(host_name, user_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->get_mam_user_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_mam_user_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **user_name** | **str**| user unique Name | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**DeviceCollection**](DeviceCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | devices as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mam_user_flagged_enrolled_apps**
> FlaggedEnrolledAppCollection get_mam_user_flagged_enrolled_apps(host_name, user_name, api_version, filter=filter, top=top, select=select)



Returns Intune flagged enrolled app collection for the User

### Example


```python
import openapi_client
from openapi_client.models.flagged_enrolled_app_collection import FlaggedEnrolledAppCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    user_name = 'user_name_example' # str | User name for the tenant
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.get_mam_user_flagged_enrolled_apps(host_name, user_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->get_mam_user_flagged_enrolled_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_mam_user_flagged_enrolled_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **user_name** | **str**| User name for the tenant | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**FlaggedEnrolledAppCollection**](FlaggedEnrolledAppCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Flagged enrolled Apps as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_operation_results**
> OperationResultCollection get_operation_results(host_name, api_version, filter=filter, top=top, select=select)



Returns operationResults.

### Example


```python
import openapi_client
from openapi_client.models.operation_result_collection import OperationResultCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.get_operation_results(host_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->get_operation_results:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_operation_results: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**OperationResultCollection**](OperationResultCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | applications as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_add_app_for_mam_policy**
> ios_add_app_for_mam_policy(host_name, policy_name, app_name, api_version, parameters)



Add app to an iOSMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.mam_policy_app_id_or_group_id_payload import MAMPolicyAppIdOrGroupIdPayload
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    app_name = 'app_name_example' # str | application unique Name
    api_version = 'api_version_example' # str | Service Api Version.
    parameters = openapi_client.MAMPolicyAppIdOrGroupIdPayload() # MAMPolicyAppIdOrGroupIdPayload | Parameters supplied to add an app to an ios policy.

    try:
        api_instance.ios_add_app_for_mam_policy(host_name, policy_name, app_name, api_version, parameters)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_add_app_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **app_name** | **str**| application unique Name | 
 **api_version** | **str**| Service Api Version. | 
 **parameters** | [**MAMPolicyAppIdOrGroupIdPayload**](MAMPolicyAppIdOrGroupIdPayload.md)| Parameters supplied to add an app to an ios policy. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_add_group_for_mam_policy**
> ios_add_group_for_mam_policy(host_name, policy_name, group_id, api_version, parameters)



Add group to an iOSMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.mam_policy_app_id_or_group_id_payload import MAMPolicyAppIdOrGroupIdPayload
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    group_id = 'group_id_example' # str | group Id
    api_version = 'api_version_example' # str | Service Api Version.
    parameters = openapi_client.MAMPolicyAppIdOrGroupIdPayload() # MAMPolicyAppIdOrGroupIdPayload | Parameters supplied to the Create or update app to an android policy operation.

    try:
        api_instance.ios_add_group_for_mam_policy(host_name, policy_name, group_id, api_version, parameters)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_add_group_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **group_id** | **str**| group Id | 
 **api_version** | **str**| Service Api Version. | 
 **parameters** | [**MAMPolicyAppIdOrGroupIdPayload**](MAMPolicyAppIdOrGroupIdPayload.md)| Parameters supplied to the Create or update app to an android policy operation. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_create_or_update_mam_policy**
> IOSMAMPolicy ios_create_or_update_mam_policy(host_name, policy_name, api_version, parameters)



Creates or updates iOSMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.iosmam_policy import IOSMAMPolicy
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.
    parameters = openapi_client.IOSMAMPolicy() # IOSMAMPolicy | Parameters supplied to the Create or update an android policy operation.

    try:
        api_response = api_instance.ios_create_or_update_mam_policy(host_name, policy_name, api_version, parameters)
        print("The response of DefaultApi->ios_create_or_update_mam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_create_or_update_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 
 **parameters** | [**IOSMAMPolicy**](IOSMAMPolicy.md)| Parameters supplied to the Create or update an android policy operation. | 

### Return type

[**IOSMAMPolicy**](IOSMAMPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | iOSMAMPolicy entity. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_delete_app_for_mam_policy**
> ios_delete_app_for_mam_policy(host_name, policy_name, app_name, api_version)



Delete App for Ios Policy

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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    app_name = 'app_name_example' # str | application unique Name
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_instance.ios_delete_app_for_mam_policy(host_name, policy_name, app_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_delete_app_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **app_name** | **str**| application unique Name | 
 **api_version** | **str**| Service Api Version. | 

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
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_delete_group_for_mam_policy**
> ios_delete_group_for_mam_policy(host_name, policy_name, group_id, api_version)



Delete Group for iOS Policy

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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    group_id = 'group_id_example' # str | application unique Name
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_instance.ios_delete_group_for_mam_policy(host_name, policy_name, group_id, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_delete_group_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **group_id** | **str**| application unique Name | 
 **api_version** | **str**| Service Api Version. | 

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
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_delete_mam_policy**
> ios_delete_mam_policy(host_name, policy_name, api_version)



Delete Ios Policy

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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_instance.ios_delete_mam_policy(host_name, policy_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_delete_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 

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
**200** | No-Content. |  -  |
**204** | No-Content. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_get_app_for_mam_policy**
> ApplicationCollection ios_get_app_for_mam_policy(host_name, policy_name, api_version, filter=filter, top=top, select=select)



Get apps for an iOSMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.application_collection import ApplicationCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.ios_get_app_for_mam_policy(host_name, policy_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->ios_get_app_for_mam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_get_app_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**ApplicationCollection**](ApplicationCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | applications as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_get_groups_for_mam_policy**
> GroupsCollection ios_get_groups_for_mam_policy(host_name, policy_name, api_version)



Returns groups for a given iOSMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.groups_collection import GroupsCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | policy name for the tenant
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_response = api_instance.ios_get_groups_for_mam_policy(host_name, policy_name, api_version)
        print("The response of DefaultApi->ios_get_groups_for_mam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_get_groups_for_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| policy name for the tenant | 
 **api_version** | **str**| Service Api Version. | 

### Return type

[**GroupsCollection**](GroupsCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | groups as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_get_mam_policies**
> IOSMAMPolicyCollection ios_get_mam_policies(host_name, api_version, filter=filter, top=top, select=select)



Returns Intune iOSPolicies.

### Example


```python
import openapi_client
from openapi_client.models.iosmam_policy_collection import IOSMAMPolicyCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    api_version = 'api_version_example' # str | Service Api Version.
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.ios_get_mam_policies(host_name, api_version, filter=filter, top=top, select=select)
        print("The response of DefaultApi->ios_get_mam_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_get_mam_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **api_version** | **str**| Service Api Version. | 
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**IOSMAMPolicyCollection**](IOSMAMPolicyCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | applications as collection response |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_get_mam_policy_by_name**
> IOSMAMPolicy ios_get_mam_policy_by_name(host_name, policy_name, api_version, select=select)



Returns Intune iOS policies.

### Example


```python
import openapi_client
from openapi_client.models.iosmam_policy import IOSMAMPolicy
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.
    select = 'select_example' # str | select specific fields in entity. (optional)

    try:
        api_response = api_instance.ios_get_mam_policy_by_name(host_name, policy_name, api_version, select=select)
        print("The response of DefaultApi->ios_get_mam_policy_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_get_mam_policy_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 
 **select** | **str**| select specific fields in entity. | [optional] 

### Return type

[**IOSMAMPolicy**](IOSMAMPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | iOSMAMPolicy entity. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ios_patch_mam_policy**
> IOSMAMPolicy ios_patch_mam_policy(host_name, policy_name, api_version, parameters)



 patch an iOSMAMPolicy.

### Example


```python
import openapi_client
from openapi_client.models.iosmam_policy import IOSMAMPolicy
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    policy_name = 'policy_name_example' # str | Unique name for the policy
    api_version = 'api_version_example' # str | Service Api Version.
    parameters = openapi_client.IOSMAMPolicy() # IOSMAMPolicy | Parameters supplied to the Create or update an android policy operation.

    try:
        api_response = api_instance.ios_patch_mam_policy(host_name, policy_name, api_version, parameters)
        print("The response of DefaultApi->ios_patch_mam_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->ios_patch_mam_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **policy_name** | **str**| Unique name for the policy | 
 **api_version** | **str**| Service Api Version. | 
 **parameters** | [**IOSMAMPolicy**](IOSMAMPolicy.md)| Parameters supplied to the Create or update an android policy operation. | 

### Return type

[**IOSMAMPolicy**](IOSMAMPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | iOSMAMPolicy entity. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wipe_mam_user_device**
> WipeDeviceOperationResult wipe_mam_user_device(host_name, user_name, device_name, api_version)



Wipe a device for a user.

### Example


```python
import openapi_client
from openapi_client.models.wipe_device_operation_result import WipeDeviceOperationResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    host_name = 'host_name_example' # str | Location hostName for the tenant
    user_name = 'user_name_example' # str | unique user name
    device_name = 'device_name_example' # str | device name
    api_version = 'api_version_example' # str | Service Api Version.

    try:
        api_response = api_instance.wipe_mam_user_device(host_name, user_name, device_name, api_version)
        print("The response of DefaultApi->wipe_mam_user_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->wipe_mam_user_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host_name** | **str**| Location hostName for the tenant | 
 **user_name** | **str**| unique user name | 
 **device_name** | **str**| device name | 
 **api_version** | **str**| Service Api Version. | 

### Return type

[**WipeDeviceOperationResult**](WipeDeviceOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Wipe operation result. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

