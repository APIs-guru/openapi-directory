# openapi_client.PUTApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dps_certificate_create_or_update**](PUTApi.md#dps_certificate_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName} | Upload the certificate to the provisioning service.
[**iot_dps_resource_create_or_update**](PUTApi.md#iot_dps_resource_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName} | Create or update the metadata of the provisioning service.


# **dps_certificate_create_or_update**
> CertificateResponse dps_certificate_create_or_update(api_version, subscription_id, resource_group_name, provisioning_service_name, certificate_name, certificate_description, if_match=if_match)

Upload the certificate to the provisioning service.

Add new certificate or update an existing certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_body_description import CertificateBodyDescription
from openapi_client.models.certificate_response import CertificateResponse
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
    api_instance = openapi_client.PUTApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group identifier.
    provisioning_service_name = 'provisioning_service_name_example' # str | The name of the provisioning service.
    certificate_name = 'certificate_name_example' # str | The name of the certificate create or update.
    certificate_description = openapi_client.CertificateBodyDescription() # CertificateBodyDescription | The certificate body.
    if_match = 'if_match_example' # str | ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate. (optional)

    try:
        # Upload the certificate to the provisioning service.
        api_response = api_instance.dps_certificate_create_or_update(api_version, subscription_id, resource_group_name, provisioning_service_name, certificate_name, certificate_description, if_match=if_match)
        print("The response of PUTApi->dps_certificate_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PUTApi->dps_certificate_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **provisioning_service_name** | **str**| The name of the provisioning service. | 
 **certificate_name** | **str**| The name of the certificate create or update. | 
 **certificate_description** | [**CertificateBodyDescription**](CertificateBodyDescription.md)| The certificate body. | 
 **if_match** | **str**| ETag of the certificate. This is required to update an existing certificate, and ignored while creating a brand new certificate. | [optional] 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If certificate already exist and update was successful, the operation returns HTTP status code of 201 (OK). |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_create_or_update**
> ProvisioningServiceDescription iot_dps_resource_create_or_update(subscription_id, resource_group_name, provisioning_service_name, api_version, iot_dps_description)

Create or update the metadata of the provisioning service.

Create or update the metadata of the provisioning service. The usual pattern to modify a property is to retrieve the provisioning service metadata and security metadata, and then combine them with the modified values in a new body to update the provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provisioning_service_description import ProvisioningServiceDescription
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
    api_instance = openapi_client.PUTApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group identifier.
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of provisioning service to create or update.
    api_version = 'api_version_example' # str | The version of the API.
    iot_dps_description = openapi_client.ProvisioningServiceDescription() # ProvisioningServiceDescription | Description of the provisioning service to create or update.

    try:
        # Create or update the metadata of the provisioning service.
        api_response = api_instance.iot_dps_resource_create_or_update(subscription_id, resource_group_name, provisioning_service_name, api_version, iot_dps_description)
        print("The response of PUTApi->iot_dps_resource_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PUTApi->iot_dps_resource_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **provisioning_service_name** | **str**| Name of provisioning service to create or update. | 
 **api_version** | **str**| The version of the API. | 
 **iot_dps_description** | [**ProvisioningServiceDescription**](ProvisioningServiceDescription.md)| Description of the provisioning service to create or update. | 

### Return type

[**ProvisioningServiceDescription**](ProvisioningServiceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the non-security properties of the provisioning service. Security-related properties are set to null. |  -  |
**201** | This is a long running operation. The operation returns a 201 if the validation is complete. The response includes an Azure-AsyncOperation header that contains a status URL. Clients are expected to poll the status URL for the status of the operation. If successful, the operation returns HTTP status code of 201 (OK). |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

