# openapi_client.LicenseActivationsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**license_activations_post**](LicenseActivationsApi.md#license_activations_post) | **POST** /api/v2/LicenseActivations | Create a license activation.
[**license_activations_post_register_edt_lite**](LicenseActivationsApi.md#license_activations_post_register_edt_lite) | **POST** /api/v2/LicenseActivations/RegisterEDTLite | Register an EDT Lite with the Server
[**license_activations_put**](LicenseActivationsApi.md#license_activations_put) | **PUT** /api/v2/LicenseActivations/{ID} | Update a license activiation.
[**license_activations_put_confirm**](LicenseActivationsApi.md#license_activations_put_confirm) | **PUT** /api/v2/LicenseActivations/{ID}/Confirm | Confirm that the client has applied the updated license.


# **license_activations_post**
> DealerDBModelsLicenseActivation license_activations_post(dealer_db_models_license_activation_create)

Create a license activation.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_license_activation import DealerDBModelsLicenseActivation
from openapi_client.models.dealer_db_models_license_activation_create import DealerDBModelsLicenseActivationCreate
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
    api_instance = openapi_client.LicenseActivationsApi(api_client)
    dealer_db_models_license_activation_create = openapi_client.DealerDBModelsLicenseActivationCreate() # DealerDBModelsLicenseActivationCreate | The data required for creating the license.

    try:
        # Create a license activation.
        api_response = api_instance.license_activations_post(dealer_db_models_license_activation_create)
        print("The response of LicenseActivationsApi->license_activations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseActivationsApi->license_activations_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealer_db_models_license_activation_create** | [**DealerDBModelsLicenseActivationCreate**](DealerDBModelsLicenseActivationCreate.md)| The data required for creating the license. | 

### Return type

[**DealerDBModelsLicenseActivation**](DealerDBModelsLicenseActivation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **license_activations_post_register_edt_lite**
> bool license_activations_post_register_edt_lite(dealer_db_models_edt_lite_registration)

Register an EDT Lite with the Server

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_edt_lite_registration import DealerDBModelsEDTLiteRegistration
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
    api_instance = openapi_client.LicenseActivationsApi(api_client)
    dealer_db_models_edt_lite_registration = openapi_client.DealerDBModelsEDTLiteRegistration() # DealerDBModelsEDTLiteRegistration | The information required for registration.

    try:
        # Register an EDT Lite with the Server
        api_response = api_instance.license_activations_post_register_edt_lite(dealer_db_models_edt_lite_registration)
        print("The response of LicenseActivationsApi->license_activations_post_register_edt_lite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseActivationsApi->license_activations_post_register_edt_lite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dealer_db_models_edt_lite_registration** | [**DealerDBModelsEDTLiteRegistration**](DealerDBModelsEDTLiteRegistration.md)| The information required for registration. | 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **license_activations_put**
> DealerDBModelsLicenseActivation license_activations_put(id, dealer_db_models_license_activation_update)

Update a license activiation.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_license_activation import DealerDBModelsLicenseActivation
from openapi_client.models.dealer_db_models_license_activation_update import DealerDBModelsLicenseActivationUpdate
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
    api_instance = openapi_client.LicenseActivationsApi(api_client)
    id = 'id_example' # str | The ID of the license.
    dealer_db_models_license_activation_update = openapi_client.DealerDBModelsLicenseActivationUpdate() # DealerDBModelsLicenseActivationUpdate | The data required for updating the license.

    try:
        # Update a license activiation.
        api_response = api_instance.license_activations_put(id, dealer_db_models_license_activation_update)
        print("The response of LicenseActivationsApi->license_activations_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LicenseActivationsApi->license_activations_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the license. | 
 **dealer_db_models_license_activation_update** | [**DealerDBModelsLicenseActivationUpdate**](DealerDBModelsLicenseActivationUpdate.md)| The data required for updating the license. | 

### Return type

[**DealerDBModelsLicenseActivation**](DealerDBModelsLicenseActivation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **license_activations_put_confirm**
> license_activations_put_confirm(id, dealer_db_models_license_activation_confirm)

Confirm that the client has applied the updated license.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.dealer_db_models_license_activation_confirm import DealerDBModelsLicenseActivationConfirm
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
    api_instance = openapi_client.LicenseActivationsApi(api_client)
    id = 'id_example' # str | The ID of the license
    dealer_db_models_license_activation_confirm = openapi_client.DealerDBModelsLicenseActivationConfirm() # DealerDBModelsLicenseActivationConfirm | The license data.

    try:
        # Confirm that the client has applied the updated license.
        api_instance.license_activations_put_confirm(id, dealer_db_models_license_activation_confirm)
    except Exception as e:
        print("Exception when calling LicenseActivationsApi->license_activations_put_confirm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the license | 
 **dealer_db_models_license_activation_confirm** | [**DealerDBModelsLicenseActivationConfirm**](DealerDBModelsLicenseActivationConfirm.md)| The license data. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

