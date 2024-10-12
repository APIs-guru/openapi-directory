# openapi_client.ImportProjectsApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_import_job_details**](ImportProjectsApi.md#get_import_job_details) | **GET** /org/{orgId}/integrations/{integrationId}/import/{jobId} | Get import job details
[**import_targets**](ImportProjectsApi.md#import_targets) | **POST** /org/{orgId}/integrations/{integrationId}/import | Import targets


# **get_import_job_details**
> GetImportJobDetails200Response get_import_job_details(org_id, integration_id, job_id)

Get import job details



### Example


```python
import openapi_client
from openapi_client.models.get_import_job_details200_response import GetImportJobDetails200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImportProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    integration_id = '9a3e5d90-b782-468a-a042-9a2073736f0b' # str | The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.
    job_id = '1a325d9d-b782-468a-a242-9a2073734f0b' # str | The ID of the job. This can be found in the Location response header from the corresponding POST request that triggered the import job.

    try:
        # Get import job details
        api_response = api_instance.get_import_job_details(org_id, integration_id, job_id)
        print("The response of ImportProjectsApi->get_import_job_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportProjectsApi->get_import_job_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **integration_id** | **str**| The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured. | 
 **job_id** | **str**| The ID of the job. This can be found in the Location response header from the corresponding POST request that triggered the import job. | 

### Return type

[**GetImportJobDetails200Response**](GetImportJobDetails200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_targets**
> import_targets(org_id, integration_id, import_targets_request=import_targets_request)

Import targets



### Example


```python
import openapi_client
from openapi_client.models.import_targets_request import ImportTargetsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImportProjectsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have admin access to this organization.
    integration_id = '9a3e5d90-b782-468a-a042-9a2073736f0b' # str | The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured.
    import_targets_request = openapi_client.ImportTargetsRequest() # ImportTargetsRequest |  (optional)

    try:
        # Import targets
        api_instance.import_targets(org_id, integration_id, import_targets_request=import_targets_request)
    except Exception as e:
        print("Exception when calling ImportProjectsApi->import_targets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have admin access to this organization. | 
 **integration_id** | **str**| The unique identifier for the configured integration. This can be found on the [Integration page in the Settings area](https://app.snyk.io/manage/integrations) for all integrations that have been configured. | 
 **import_targets_request** | [**ImportTargetsRequest**](ImportTargetsRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

