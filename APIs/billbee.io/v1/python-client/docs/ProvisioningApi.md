# openapi_client.ProvisioningApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**automatic_provisioning_create_account**](ProvisioningApi.md#automatic_provisioning_create_account) | **POST** /api/v1/automaticprovision/createaccount | Creates a new Billbee user account with the data passed
[**automatic_provisioning_terms_info**](ProvisioningApi.md#automatic_provisioning_terms_info) | **GET** /api/v1/automaticprovision/termsinfo | Returns infos about Billbee terms and conditions


# **automatic_provisioning_create_account**
> object automatic_provisioning_create_account(rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container)

Creates a new Billbee user account with the data passed

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container import RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProvisioningApi(api_client)
    rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container = openapi_client.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer() # RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer | 

    try:
        # Creates a new Billbee user account with the data passed
        api_response = api_instance.automatic_provisioning_create_account(rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container)
        print("The response of ProvisioningApi->automatic_provisioning_create_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvisioningApi->automatic_provisioning_create_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rechnungsdruck_web_app_controllers_api_automatic_provisioning_controller_create_account_container** | [**RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer**](RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **automatic_provisioning_terms_info**
> object automatic_provisioning_terms_info()

Returns infos about Billbee terms and conditions

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProvisioningApi(api_client)

    try:
        # Returns infos about Billbee terms and conditions
        api_response = api_instance.automatic_provisioning_terms_info()
        print("The response of ProvisioningApi->automatic_provisioning_terms_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProvisioningApi->automatic_provisioning_terms_info: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

