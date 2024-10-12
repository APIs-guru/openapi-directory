# openapi_client.AssessmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assessments_create_or_update**](AssessmentsApi.md#assessments_create_or_update) | **PUT** /{resourceId}/providers/Microsoft.Security/assessments/{assessmentName} | 
[**assessments_delete**](AssessmentsApi.md#assessments_delete) | **DELETE** /{resourceId}/providers/Microsoft.Security/assessments/{assessmentName} | 
[**assessments_get**](AssessmentsApi.md#assessments_get) | **GET** /{resourceId}/providers/Microsoft.Security/assessments/{assessmentName} | 
[**assessments_list**](AssessmentsApi.md#assessments_list) | **GET** /{scope}/providers/Microsoft.Security/assessments | 


# **assessments_create_or_update**
> SecurityAssessment assessments_create_or_update(api_version, resource_id, assessment_name, assessment)



Create a security assessment on your resource. An assessment metadata that describes this assessment must be predefined with the same name before inserting the assessment result

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_assessment import SecurityAssessment
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
    api_instance = openapi_client.AssessmentsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    assessment_name = 'assessment_name_example' # str | The Assessment Key - Unique key for the assessment type
    assessment = openapi_client.SecurityAssessment() # SecurityAssessment | Calculated assessment on a pre-defined assessment metadata

    try:
        api_response = api_instance.assessments_create_or_update(api_version, resource_id, assessment_name, assessment)
        print("The response of AssessmentsApi->assessments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentsApi->assessments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **assessment_name** | **str**| The Assessment Key - Unique key for the assessment type | 
 **assessment** | [**SecurityAssessment**](SecurityAssessment.md)| Calculated assessment on a pre-defined assessment metadata | 

### Return type

[**SecurityAssessment**](SecurityAssessment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Updated |  -  |
**201** | Created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessments_delete**
> assessments_delete(api_version, resource_id, assessment_name)



Delete a security assessment on your resource. An assessment metadata that describes this assessment must be predefined with the same name before inserting the assessment result

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
    api_instance = openapi_client.AssessmentsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    assessment_name = 'assessment_name_example' # str | The Assessment Key - Unique key for the assessment type

    try:
        api_instance.assessments_delete(api_version, resource_id, assessment_name)
    except Exception as e:
        print("Exception when calling AssessmentsApi->assessments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **assessment_name** | **str**| The Assessment Key - Unique key for the assessment type | 

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
**200** | OK - Assessment was deleted |  -  |
**204** | No Content - Assessment does not exist |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessments_get**
> SecurityAssessment assessments_get(api_version, resource_id, assessment_name, expand=expand)



Get a security assessment on your scanned resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_assessment import SecurityAssessment
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
    api_instance = openapi_client.AssessmentsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    assessment_name = 'assessment_name_example' # str | The Assessment Key - Unique key for the assessment type
    expand = 'expand_example' # str | OData expand. Optional. (optional)

    try:
        api_response = api_instance.assessments_get(api_version, resource_id, assessment_name, expand=expand)
        print("The response of AssessmentsApi->assessments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentsApi->assessments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **assessment_name** | **str**| The Assessment Key - Unique key for the assessment type | 
 **expand** | **str**| OData expand. Optional. | [optional] 

### Return type

[**SecurityAssessment**](SecurityAssessment.md)

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

# **assessments_list**
> SecurityAssessmentList assessments_list(api_version, scope)



Get security assessments on all your scanned resources inside a scope

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_assessment_list import SecurityAssessmentList
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
    api_instance = openapi_client.AssessmentsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

    try:
        api_response = api_instance.assessments_list(api_version, scope)
        print("The response of AssessmentsApi->assessments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssessmentsApi->assessments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 

### Return type

[**SecurityAssessmentList**](SecurityAssessmentList.md)

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

