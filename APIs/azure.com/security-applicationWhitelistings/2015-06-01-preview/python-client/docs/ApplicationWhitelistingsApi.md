# openapi_client.ApplicationWhitelistingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adaptive_application_controls_get**](ApplicationWhitelistingsApi.md#adaptive_application_controls_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/applicationWhitelistings/{groupName} | 
[**adaptive_application_controls_list**](ApplicationWhitelistingsApi.md#adaptive_application_controls_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/applicationWhitelistings | 
[**adaptive_application_controls_put**](ApplicationWhitelistingsApi.md#adaptive_application_controls_put) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/applicationWhitelistings/{groupName} | 


# **adaptive_application_controls_get**
> AppWhitelistingGroup adaptive_application_controls_get(subscription_id, asc_location, group_name, api_version)



Gets an application control VM/server group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_whitelisting_group import AppWhitelistingGroup
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
    api_instance = openapi_client.ApplicationWhitelistingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    group_name = 'group_name_example' # str | Name of an application control VM/server group
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.adaptive_application_controls_get(subscription_id, asc_location, group_name, api_version)
        print("The response of ApplicationWhitelistingsApi->adaptive_application_controls_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationWhitelistingsApi->adaptive_application_controls_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **group_name** | **str**| Name of an application control VM/server group | 
 **api_version** | **str**| API version for the operation | 

### Return type

[**AppWhitelistingGroup**](AppWhitelistingGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adaptive_application_controls_list**
> AppWhitelistingGroups adaptive_application_controls_list(subscription_id, api_version, include_path_recommendations=include_path_recommendations, summary=summary)



Gets a list of application control VM/server groups for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_whitelisting_groups import AppWhitelistingGroups
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
    api_instance = openapi_client.ApplicationWhitelistingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    api_version = 'api_version_example' # str | API version for the operation
    include_path_recommendations = True # bool | Include the policy rules (optional)
    summary = True # bool | Return output in a summarized form (optional)

    try:
        api_response = api_instance.adaptive_application_controls_list(subscription_id, api_version, include_path_recommendations=include_path_recommendations, summary=summary)
        print("The response of ApplicationWhitelistingsApi->adaptive_application_controls_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationWhitelistingsApi->adaptive_application_controls_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **api_version** | **str**| API version for the operation | 
 **include_path_recommendations** | **bool**| Include the policy rules | [optional] 
 **summary** | **bool**| Return output in a summarized form | [optional] 

### Return type

[**AppWhitelistingGroups**](AppWhitelistingGroups.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **adaptive_application_controls_put**
> AppWhitelistingGroup adaptive_application_controls_put(subscription_id, asc_location, group_name, api_version, body)



Update an application control VM/server group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_whitelisting_group import AppWhitelistingGroup
from openapi_client.models.app_whitelisting_put_group_data import AppWhitelistingPutGroupData
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
    api_instance = openapi_client.ApplicationWhitelistingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    asc_location = 'asc_location_example' # str | The location where ASC stores the data of the subscription. can be retrieved from Get locations
    group_name = 'group_name_example' # str | Name of an application control VM/server group
    api_version = 'api_version_example' # str | API version for the operation
    body = openapi_client.AppWhitelistingPutGroupData() # AppWhitelistingPutGroupData | The updated VM/server group data

    try:
        api_response = api_instance.adaptive_application_controls_put(subscription_id, asc_location, group_name, api_version, body)
        print("The response of ApplicationWhitelistingsApi->adaptive_application_controls_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationWhitelistingsApi->adaptive_application_controls_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID | 
 **asc_location** | **str**| The location where ASC stores the data of the subscription. can be retrieved from Get locations | 
 **group_name** | **str**| Name of an application control VM/server group | 
 **api_version** | **str**| API version for the operation | 
 **body** | [**AppWhitelistingPutGroupData**](AppWhitelistingPutGroupData.md)| The updated VM/server group data | 

### Return type

[**AppWhitelistingGroup**](AppWhitelistingGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

