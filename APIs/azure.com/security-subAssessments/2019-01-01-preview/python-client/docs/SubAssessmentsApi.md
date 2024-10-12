# openapi_client.SubAssessmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sub_assessments_get**](SubAssessmentsApi.md#sub_assessments_get) | **GET** /{scope}/providers/Microsoft.Security/assessments/{assessmentName}/subAssessments/{subAssessmentName} | 
[**sub_assessments_list**](SubAssessmentsApi.md#sub_assessments_list) | **GET** /{scope}/providers/Microsoft.Security/assessments/{assessmentName}/subAssessments | 
[**sub_assessments_list_all**](SubAssessmentsApi.md#sub_assessments_list_all) | **GET** /{scope}/providers/Microsoft.Security/subAssessments | 


# **sub_assessments_get**
> SecuritySubAssessment sub_assessments_get(api_version, scope, assessment_name, sub_assessment_name)



Get a security sub-assessment on your scanned resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_sub_assessment import SecuritySubAssessment
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
    api_instance = openapi_client.SubAssessmentsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
    assessment_name = 'assessment_name_example' # str | The Assessment Key - Unique key for the assessment type
    sub_assessment_name = 'sub_assessment_name_example' # str | The Sub-Assessment Key - Unique key for the sub-assessment type

    try:
        api_response = api_instance.sub_assessments_get(api_version, scope, assessment_name, sub_assessment_name)
        print("The response of SubAssessmentsApi->sub_assessments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubAssessmentsApi->sub_assessments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 
 **assessment_name** | **str**| The Assessment Key - Unique key for the assessment type | 
 **sub_assessment_name** | **str**| The Sub-Assessment Key - Unique key for the sub-assessment type | 

### Return type

[**SecuritySubAssessment**](SecuritySubAssessment.md)

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

# **sub_assessments_list**
> SecuritySubAssessmentList sub_assessments_list(api_version, scope, assessment_name)



Get security sub-assessments on all your scanned resources inside a scope

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_sub_assessment_list import SecuritySubAssessmentList
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
    api_instance = openapi_client.SubAssessmentsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
    assessment_name = 'assessment_name_example' # str | The Assessment Key - Unique key for the assessment type

    try:
        api_response = api_instance.sub_assessments_list(api_version, scope, assessment_name)
        print("The response of SubAssessmentsApi->sub_assessments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubAssessmentsApi->sub_assessments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 
 **assessment_name** | **str**| The Assessment Key - Unique key for the assessment type | 

### Return type

[**SecuritySubAssessmentList**](SecuritySubAssessmentList.md)

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

# **sub_assessments_list_all**
> SecuritySubAssessmentList sub_assessments_list_all(api_version, scope)



Get security sub-assessments on all your scanned resources inside a subscription scope

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_sub_assessment_list import SecuritySubAssessmentList
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
    api_instance = openapi_client.SubAssessmentsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

    try:
        api_response = api_instance.sub_assessments_list_all(api_version, scope)
        print("The response of SubAssessmentsApi->sub_assessments_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubAssessmentsApi->sub_assessments_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 

### Return type

[**SecuritySubAssessmentList**](SecuritySubAssessmentList.md)

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

