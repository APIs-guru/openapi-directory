# openapi_client.ProjectFeaturesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_features_for_project**](ProjectFeaturesApi.md#get_features_for_project) | **GET** /rest/api/3/project/{projectIdOrKey}/features | Get project features
[**toggle_feature_for_project**](ProjectFeaturesApi.md#toggle_feature_for_project) | **PUT** /rest/api/3/project/{projectIdOrKey}/features/{featureKey} | Set project feature state


# **get_features_for_project**
> ContainerForProjectFeatures get_features_for_project(project_id_or_key)

Get project features

Returns the list of features for a project.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.container_for_project_features import ContainerForProjectFeatures
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectFeaturesApi(api_client)
    project_id_or_key = 'project_id_or_key_example' # str | The ID or (case-sensitive) key of the project.

    try:
        # Get project features
        api_response = api_instance.get_features_for_project(project_id_or_key)
        print("The response of ProjectFeaturesApi->get_features_for_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectFeaturesApi->get_features_for_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id_or_key** | **str**| The ID or (case-sensitive) key of the project. | 

### Return type

[**ContainerForProjectFeatures**](ContainerForProjectFeatures.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggle_feature_for_project**
> ContainerForProjectFeatures toggle_feature_for_project(project_id_or_key, feature_key, project_feature_state)

Set project feature state

Sets the state of a project feature.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.container_for_project_features import ContainerForProjectFeatures
from openapi_client.models.project_feature_state import ProjectFeatureState
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectFeaturesApi(api_client)
    project_id_or_key = 'project_id_or_key_example' # str | The ID or (case-sensitive) key of the project.
    feature_key = 'feature_key_example' # str | The key of the feature.
    project_feature_state = {"state":"ENABLED"} # ProjectFeatureState | Details of the feature state change.

    try:
        # Set project feature state
        api_response = api_instance.toggle_feature_for_project(project_id_or_key, feature_key, project_feature_state)
        print("The response of ProjectFeaturesApi->toggle_feature_for_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectFeaturesApi->toggle_feature_for_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id_or_key** | **str**| The ID or (case-sensitive) key of the project. | 
 **feature_key** | **str**| The key of the feature. | 
 **project_feature_state** | [**ProjectFeatureState**](ProjectFeatureState.md)| Details of the feature state change. | 

### Return type

[**ContainerForProjectFeatures**](ContainerForProjectFeatures.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the project or project feature is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

