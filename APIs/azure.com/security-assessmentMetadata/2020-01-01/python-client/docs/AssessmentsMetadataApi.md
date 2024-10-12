# openapi_client.AssessmentsMetadataApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assessments_metadata_get**](AssessmentsMetadataApi.md#assessments_metadata_get) | **GET** /providers/Microsoft.Security/assessmentMetadata/{assessmentMetadataName} | 
[**assessments_metadata_list**](AssessmentsMetadataApi.md#assessments_metadata_list) | **GET** /providers/Microsoft.Security/assessmentMetadata | 
[**assessments_metadata_subscription_create**](AssessmentsMetadataApi.md#assessments_metadata_subscription_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Security/assessmentMetadata/{assessmentMetadataName} | 
[**assessments_metadata_subscription_delete**](AssessmentsMetadataApi.md#assessments_metadata_subscription_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Security/assessmentMetadata/{assessmentMetadataName} | 
[**assessments_metadata_subscription_get**](AssessmentsMetadataApi.md#assessments_metadata_subscription_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/assessmentMetadata/{assessmentMetadataName} | 
[**assessments_metadata_subscription_list**](AssessmentsMetadataApi.md#assessments_metadata_subscription_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/assessmentMetadata | 


# **assessments_metadata_get**
> SecurityAssessmentMetadata assessments_metadata_get(api_version, assessment_metadata_name)



Get metadata information on an assessment type

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_assessment_metadata import SecurityAssessmentMetadata
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
    api_instance = openapi_client.AssessmentsMetadataApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    assessment_metadata_name = 'assessment_metadata_name_example' # str | The Assessment Key - Unique key for the assessment type

    try:
        api_response = api_instance.assessments_metadata_get(api_version, assessment_metadata_name)
        print("The response of AssessmentsMetadataApi->assessments_metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentsMetadataApi->assessments_metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **assessment_metadata_name** | **str**| The Assessment Key - Unique key for the assessment type | 

### Return type

[**SecurityAssessmentMetadata**](SecurityAssessmentMetadata.md)

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

# **assessments_metadata_list**
> SecurityAssessmentMetadataList assessments_metadata_list(api_version)



Get metadata information on all assessment types

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_assessment_metadata_list import SecurityAssessmentMetadataList
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
    api_instance = openapi_client.AssessmentsMetadataApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation

    try:
        api_response = api_instance.assessments_metadata_list(api_version)
        print("The response of AssessmentsMetadataApi->assessments_metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentsMetadataApi->assessments_metadata_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 

### Return type

[**SecurityAssessmentMetadataList**](SecurityAssessmentMetadataList.md)

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

# **assessments_metadata_subscription_create**
> SecurityAssessmentMetadata assessments_metadata_subscription_create(api_version, assessment_metadata_name, subscription_id, assessment_metadata)



Create metadata information on an assessment type in a specific subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_assessment_metadata import SecurityAssessmentMetadata
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
    api_instance = openapi_client.AssessmentsMetadataApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    assessment_metadata_name = 'assessment_metadata_name_example' # str | The Assessment Key - Unique key for the assessment type
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    assessment_metadata = openapi_client.SecurityAssessmentMetadata() # SecurityAssessmentMetadata | AssessmentMetadata object

    try:
        api_response = api_instance.assessments_metadata_subscription_create(api_version, assessment_metadata_name, subscription_id, assessment_metadata)
        print("The response of AssessmentsMetadataApi->assessments_metadata_subscription_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentsMetadataApi->assessments_metadata_subscription_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **assessment_metadata_name** | **str**| The Assessment Key - Unique key for the assessment type | 
 **subscription_id** | **str**| Azure subscription ID | 
 **assessment_metadata** | [**SecurityAssessmentMetadata**](SecurityAssessmentMetadata.md)| AssessmentMetadata object | 

### Return type

[**SecurityAssessmentMetadata**](SecurityAssessmentMetadata.md)

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

# **assessments_metadata_subscription_delete**
> assessments_metadata_subscription_delete(api_version, assessment_metadata_name, subscription_id)



Delete metadata information on an assessment type in a specific subscription, will cause the deletion of all the assessments of that type in that subscription

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
    api_instance = openapi_client.AssessmentsMetadataApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    assessment_metadata_name = 'assessment_metadata_name_example' # str | The Assessment Key - Unique key for the assessment type
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_instance.assessments_metadata_subscription_delete(api_version, assessment_metadata_name, subscription_id)
    except Exception as e:
        print("Exception when calling AssessmentsMetadataApi->assessments_metadata_subscription_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **assessment_metadata_name** | **str**| The Assessment Key - Unique key for the assessment type | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

void (empty response body)

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

# **assessments_metadata_subscription_get**
> SecurityAssessmentMetadata assessments_metadata_subscription_get(api_version, assessment_metadata_name, subscription_id)



Get metadata information on an assessment type in a specific subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_assessment_metadata import SecurityAssessmentMetadata
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
    api_instance = openapi_client.AssessmentsMetadataApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    assessment_metadata_name = 'assessment_metadata_name_example' # str | The Assessment Key - Unique key for the assessment type
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.assessments_metadata_subscription_get(api_version, assessment_metadata_name, subscription_id)
        print("The response of AssessmentsMetadataApi->assessments_metadata_subscription_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentsMetadataApi->assessments_metadata_subscription_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **assessment_metadata_name** | **str**| The Assessment Key - Unique key for the assessment type | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**SecurityAssessmentMetadata**](SecurityAssessmentMetadata.md)

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

# **assessments_metadata_subscription_list**
> SecurityAssessmentMetadataList assessments_metadata_subscription_list(api_version, subscription_id)



Get metadata information on all assessment types in a specific subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_assessment_metadata_list import SecurityAssessmentMetadataList
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
    api_instance = openapi_client.AssessmentsMetadataApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.assessments_metadata_subscription_list(api_version, subscription_id)
        print("The response of AssessmentsMetadataApi->assessments_metadata_subscription_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentsMetadataApi->assessments_metadata_subscription_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**SecurityAssessmentMetadataList**](SecurityAssessmentMetadataList.md)

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

