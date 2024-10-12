# openapi_client.ReplicationAlertSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_alert_settings_create**](ReplicationAlertSettingsApi.md#replication_alert_settings_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings/{alertSettingName} | Configures email notifications for this vault.
[**replication_alert_settings_get**](ReplicationAlertSettingsApi.md#replication_alert_settings_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings/{alertSettingName} | Gets an email notification(alert) configuration.
[**replication_alert_settings_list**](ReplicationAlertSettingsApi.md#replication_alert_settings_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationAlertSettings | Gets the list of configured email notification(alert) configurations.


# **replication_alert_settings_create**
> Alert replication_alert_settings_create(api_version, resource_name, resource_group_name, subscription_id, alert_setting_name, request)

Configures email notifications for this vault.

Create or update an email notification(alert) configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
from openapi_client.models.configure_alert_request import ConfigureAlertRequest
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
    api_instance = openapi_client.ReplicationAlertSettingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    alert_setting_name = 'alert_setting_name_example' # str | The name of the email notification(alert) configuration.
    request = openapi_client.ConfigureAlertRequest() # ConfigureAlertRequest | The input to configure the email notification(alert).

    try:
        # Configures email notifications for this vault.
        api_response = api_instance.replication_alert_settings_create(api_version, resource_name, resource_group_name, subscription_id, alert_setting_name, request)
        print("The response of ReplicationAlertSettingsApi->replication_alert_settings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationAlertSettingsApi->replication_alert_settings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **alert_setting_name** | **str**| The name of the email notification(alert) configuration. | 
 **request** | [**ConfigureAlertRequest**](ConfigureAlertRequest.md)| The input to configure the email notification(alert). | 

### Return type

[**Alert**](Alert.md)

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

# **replication_alert_settings_get**
> Alert replication_alert_settings_get(api_version, resource_name, resource_group_name, subscription_id, alert_setting_name)

Gets an email notification(alert) configuration.

Gets the details of the specified email notification(alert) configuration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.ReplicationAlertSettingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    alert_setting_name = 'alert_setting_name_example' # str | The name of the email notification configuration.

    try:
        # Gets an email notification(alert) configuration.
        api_response = api_instance.replication_alert_settings_get(api_version, resource_name, resource_group_name, subscription_id, alert_setting_name)
        print("The response of ReplicationAlertSettingsApi->replication_alert_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationAlertSettingsApi->replication_alert_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **alert_setting_name** | **str**| The name of the email notification configuration. | 

### Return type

[**Alert**](Alert.md)

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

# **replication_alert_settings_list**
> AlertCollection replication_alert_settings_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of configured email notification(alert) configurations.

Gets the list of email notification(alert) configurations for the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_collection import AlertCollection
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
    api_instance = openapi_client.ReplicationAlertSettingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of configured email notification(alert) configurations.
        api_response = api_instance.replication_alert_settings_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationAlertSettingsApi->replication_alert_settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationAlertSettingsApi->replication_alert_settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**AlertCollection**](AlertCollection.md)

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

