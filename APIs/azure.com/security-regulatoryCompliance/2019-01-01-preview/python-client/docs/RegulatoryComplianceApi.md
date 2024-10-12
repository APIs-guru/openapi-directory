# openapi_client.RegulatoryComplianceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**regulatory_compliance_assessments_get**](RegulatoryComplianceApi.md#regulatory_compliance_assessments_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments/{regulatoryComplianceAssessmentName} | 
[**regulatory_compliance_assessments_list**](RegulatoryComplianceApi.md#regulatory_compliance_assessments_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments | 
[**regulatory_compliance_controls_get**](RegulatoryComplianceApi.md#regulatory_compliance_controls_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName} | 
[**regulatory_compliance_controls_list**](RegulatoryComplianceApi.md#regulatory_compliance_controls_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls | 
[**regulatory_compliance_standards_get**](RegulatoryComplianceApi.md#regulatory_compliance_standards_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName} | 
[**regulatory_compliance_standards_list**](RegulatoryComplianceApi.md#regulatory_compliance_standards_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards | 


# **regulatory_compliance_assessments_get**
> RegulatoryComplianceAssessment regulatory_compliance_assessments_get(api_version, subscription_id, regulatory_compliance_standard_name, regulatory_compliance_control_name, regulatory_compliance_assessment_name)



Supported regulatory compliance details and state for selected assessment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regulatory_compliance_assessment import RegulatoryComplianceAssessment
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
    api_instance = openapi_client.RegulatoryComplianceApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    regulatory_compliance_standard_name = 'regulatory_compliance_standard_name_example' # str | Name of the regulatory compliance standard object
    regulatory_compliance_control_name = 'regulatory_compliance_control_name_example' # str | Name of the regulatory compliance control object
    regulatory_compliance_assessment_name = 'regulatory_compliance_assessment_name_example' # str | Name of the regulatory compliance assessment object

    try:
        api_response = api_instance.regulatory_compliance_assessments_get(api_version, subscription_id, regulatory_compliance_standard_name, regulatory_compliance_control_name, regulatory_compliance_assessment_name)
        print("The response of RegulatoryComplianceApi->regulatory_compliance_assessments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegulatoryComplianceApi->regulatory_compliance_assessments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **regulatory_compliance_standard_name** | **str**| Name of the regulatory compliance standard object | 
 **regulatory_compliance_control_name** | **str**| Name of the regulatory compliance control object | 
 **regulatory_compliance_assessment_name** | **str**| Name of the regulatory compliance assessment object | 

### Return type

[**RegulatoryComplianceAssessment**](RegulatoryComplianceAssessment.md)

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

# **regulatory_compliance_assessments_list**
> RegulatoryComplianceAssessmentList regulatory_compliance_assessments_list(api_version, subscription_id, regulatory_compliance_standard_name, regulatory_compliance_control_name, filter=filter)



Details and state of assessments mapped to selected regulatory compliance control

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regulatory_compliance_assessment_list import RegulatoryComplianceAssessmentList
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
    api_instance = openapi_client.RegulatoryComplianceApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    regulatory_compliance_standard_name = 'regulatory_compliance_standard_name_example' # str | Name of the regulatory compliance standard object
    regulatory_compliance_control_name = 'regulatory_compliance_control_name_example' # str | Name of the regulatory compliance control object
    filter = 'filter_example' # str | OData filter. Optional. (optional)

    try:
        api_response = api_instance.regulatory_compliance_assessments_list(api_version, subscription_id, regulatory_compliance_standard_name, regulatory_compliance_control_name, filter=filter)
        print("The response of RegulatoryComplianceApi->regulatory_compliance_assessments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegulatoryComplianceApi->regulatory_compliance_assessments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **regulatory_compliance_standard_name** | **str**| Name of the regulatory compliance standard object | 
 **regulatory_compliance_control_name** | **str**| Name of the regulatory compliance control object | 
 **filter** | **str**| OData filter. Optional. | [optional] 

### Return type

[**RegulatoryComplianceAssessmentList**](RegulatoryComplianceAssessmentList.md)

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

# **regulatory_compliance_controls_get**
> RegulatoryComplianceControl regulatory_compliance_controls_get(api_version, subscription_id, regulatory_compliance_standard_name, regulatory_compliance_control_name)



Selected regulatory compliance control details and state

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regulatory_compliance_control import RegulatoryComplianceControl
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
    api_instance = openapi_client.RegulatoryComplianceApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    regulatory_compliance_standard_name = 'regulatory_compliance_standard_name_example' # str | Name of the regulatory compliance standard object
    regulatory_compliance_control_name = 'regulatory_compliance_control_name_example' # str | Name of the regulatory compliance control object

    try:
        api_response = api_instance.regulatory_compliance_controls_get(api_version, subscription_id, regulatory_compliance_standard_name, regulatory_compliance_control_name)
        print("The response of RegulatoryComplianceApi->regulatory_compliance_controls_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegulatoryComplianceApi->regulatory_compliance_controls_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **regulatory_compliance_standard_name** | **str**| Name of the regulatory compliance standard object | 
 **regulatory_compliance_control_name** | **str**| Name of the regulatory compliance control object | 

### Return type

[**RegulatoryComplianceControl**](RegulatoryComplianceControl.md)

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

# **regulatory_compliance_controls_list**
> RegulatoryComplianceControlList regulatory_compliance_controls_list(api_version, subscription_id, regulatory_compliance_standard_name, filter=filter)



All supported regulatory compliance controls details and state for selected standard

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regulatory_compliance_control_list import RegulatoryComplianceControlList
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
    api_instance = openapi_client.RegulatoryComplianceApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    regulatory_compliance_standard_name = 'regulatory_compliance_standard_name_example' # str | Name of the regulatory compliance standard object
    filter = 'filter_example' # str | OData filter. Optional. (optional)

    try:
        api_response = api_instance.regulatory_compliance_controls_list(api_version, subscription_id, regulatory_compliance_standard_name, filter=filter)
        print("The response of RegulatoryComplianceApi->regulatory_compliance_controls_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegulatoryComplianceApi->regulatory_compliance_controls_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **regulatory_compliance_standard_name** | **str**| Name of the regulatory compliance standard object | 
 **filter** | **str**| OData filter. Optional. | [optional] 

### Return type

[**RegulatoryComplianceControlList**](RegulatoryComplianceControlList.md)

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

# **regulatory_compliance_standards_get**
> RegulatoryComplianceStandard regulatory_compliance_standards_get(api_version, subscription_id, regulatory_compliance_standard_name)



Supported regulatory compliance details state for selected standard

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regulatory_compliance_standard import RegulatoryComplianceStandard
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
    api_instance = openapi_client.RegulatoryComplianceApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    regulatory_compliance_standard_name = 'regulatory_compliance_standard_name_example' # str | Name of the regulatory compliance standard object

    try:
        api_response = api_instance.regulatory_compliance_standards_get(api_version, subscription_id, regulatory_compliance_standard_name)
        print("The response of RegulatoryComplianceApi->regulatory_compliance_standards_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegulatoryComplianceApi->regulatory_compliance_standards_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **regulatory_compliance_standard_name** | **str**| Name of the regulatory compliance standard object | 

### Return type

[**RegulatoryComplianceStandard**](RegulatoryComplianceStandard.md)

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

# **regulatory_compliance_standards_list**
> RegulatoryComplianceStandardList regulatory_compliance_standards_list(api_version, subscription_id, filter=filter)



Supported regulatory compliance standards details and state

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regulatory_compliance_standard_list import RegulatoryComplianceStandardList
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
    api_instance = openapi_client.RegulatoryComplianceApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    filter = 'filter_example' # str | OData filter. Optional. (optional)

    try:
        api_response = api_instance.regulatory_compliance_standards_list(api_version, subscription_id, filter=filter)
        print("The response of RegulatoryComplianceApi->regulatory_compliance_standards_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegulatoryComplianceApi->regulatory_compliance_standards_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **filter** | **str**| OData filter. Optional. | [optional] 

### Return type

[**RegulatoryComplianceStandardList**](RegulatoryComplianceStandardList.md)

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

