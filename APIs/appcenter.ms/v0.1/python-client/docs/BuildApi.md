# openapi_client.BuildApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**branch_configurations_create**](BuildApi.md#branch_configurations_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/branches/{branch}/config | 
[**branch_configurations_delete**](BuildApi.md#branch_configurations_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/branches/{branch}/config | 
[**branch_configurations_get**](BuildApi.md#branch_configurations_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/branches/{branch}/config | 
[**branch_configurations_update**](BuildApi.md#branch_configurations_update) | **PUT** /v0.1/apps/{owner_name}/{app_name}/branches/{branch}/config | 
[**build_configurations_get**](BuildApi.md#build_configurations_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/branches/{branch}/export_config | 
[**builds_create**](BuildApi.md#builds_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/branches/{branch}/builds | 
[**builds_distribute**](BuildApi.md#builds_distribute) | **POST** /v0.1/apps/{owner_name}/{app_name}/builds/{build_id}/distribute | 
[**builds_get**](BuildApi.md#builds_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/builds/{build_id} | 
[**builds_get_download_uri**](BuildApi.md#builds_get_download_uri) | **GET** /v0.1/apps/{owner_name}/{app_name}/builds/{build_id}/downloads/{download_type} | 
[**builds_get_log**](BuildApi.md#builds_get_log) | **GET** /v0.1/apps/{owner_name}/{app_name}/builds/{build_id}/logs | 
[**builds_get_status_by_app_id**](BuildApi.md#builds_get_status_by_app_id) | **GET** /v0.1/apps/{owner_name}/{app_name}/build_service_status | 
[**builds_list_branches**](BuildApi.md#builds_list_branches) | **GET** /v0.1/apps/{owner_name}/{app_name}/branches | 
[**builds_list_by_branch**](BuildApi.md#builds_list_by_branch) | **GET** /v0.1/apps/{owner_name}/{app_name}/branches/{branch}/builds | 
[**builds_list_toolset_projects**](BuildApi.md#builds_list_toolset_projects) | **GET** /v0.1/apps/{owner_name}/{app_name}/branches/{branch}/toolset_projects | 
[**builds_list_toolsets**](BuildApi.md#builds_list_toolsets) | **GET** /v0.1/apps/{owner_name}/{app_name}/toolsets | 
[**builds_list_xamarin_sdk_bundles**](BuildApi.md#builds_list_xamarin_sdk_bundles) | **GET** /v0.1/apps/{owner_name}/{app_name}/xamarin_sdk_bundles | 
[**builds_list_xcode_versions**](BuildApi.md#builds_list_xcode_versions) | **GET** /v0.1/apps/{owner_name}/{app_name}/xcode_versions | 
[**builds_update**](BuildApi.md#builds_update) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/builds/{build_id} | 
[**builds_webhook**](BuildApi.md#builds_webhook) | **POST** /v0.1/public/hooks | 
[**commits_list_by_sha_list**](BuildApi.md#commits_list_by_sha_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/commits/batch | 
[**file_assets_create**](BuildApi.md#file_assets_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/file_asset | 
[**repositories_list**](BuildApi.md#repositories_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/source_hosts/{source_host}/repositories | 
[**repository_configurations_create_or_update**](BuildApi.md#repository_configurations_create_or_update) | **POST** /v0.1/apps/{owner_name}/{app_name}/repo_config | 
[**repository_configurations_delete**](BuildApi.md#repository_configurations_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/repo_config | 
[**repository_configurations_list**](BuildApi.md#repository_configurations_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/repo_config | 


# **branch_configurations_create**
> BranchConfigurationsGet200Response branch_configurations_create(branch, owner_name, app_name, branch_configurations_update_request)



Configures the branch for build

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.branch_configurations_get200_response import BranchConfigurationsGet200Response
from openapi_client.models.branch_configurations_update_request import BranchConfigurationsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    branch = 'branch_example' # str | The branch name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    branch_configurations_update_request = openapi_client.BranchConfigurationsUpdateRequest() # BranchConfigurationsUpdateRequest | Parameters of the configuration

    try:
        api_response = api_instance.branch_configurations_create(branch, owner_name, app_name, branch_configurations_update_request)
        print("The response of BuildApi->branch_configurations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->branch_configurations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **str**| The branch name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **branch_configurations_update_request** | [**BranchConfigurationsUpdateRequest**](BranchConfigurationsUpdateRequest.md)| Parameters of the configuration | 

### Return type

[**BranchConfigurationsGet200Response**](BranchConfigurationsGet200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branch_configurations_delete**
> BranchConfigurationsDelete200Response branch_configurations_delete(branch, owner_name, app_name, body=body)



Deletes the branch build configuration

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.branch_configurations_delete200_response import BranchConfigurationsDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    branch = 'branch_example' # str | The branch name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    body = None # object |  (optional)

    try:
        api_response = api_instance.branch_configurations_delete(branch, owner_name, app_name, body=body)
        print("The response of BuildApi->branch_configurations_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->branch_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **str**| The branch name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **body** | **object**|  | [optional] 

### Return type

[**BranchConfigurationsDelete200Response**](BranchConfigurationsDelete200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branch_configurations_get**
> BranchConfigurationsGet200Response branch_configurations_get(branch, owner_name, app_name)



Gets the branch configuration

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.branch_configurations_get200_response import BranchConfigurationsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    branch = 'branch_example' # str | The branch name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.branch_configurations_get(branch, owner_name, app_name)
        print("The response of BuildApi->branch_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->branch_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **str**| The branch name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**BranchConfigurationsGet200Response**](BranchConfigurationsGet200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branch_configurations_update**
> BranchConfigurationsGet200Response branch_configurations_update(branch, owner_name, app_name, branch_configurations_update_request)



Reconfigures the branch for build

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.branch_configurations_get200_response import BranchConfigurationsGet200Response
from openapi_client.models.branch_configurations_update_request import BranchConfigurationsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    branch = 'branch_example' # str | The branch name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    branch_configurations_update_request = openapi_client.BranchConfigurationsUpdateRequest() # BranchConfigurationsUpdateRequest | Parameters of the configuration

    try:
        api_response = api_instance.branch_configurations_update(branch, owner_name, app_name, branch_configurations_update_request)
        print("The response of BuildApi->branch_configurations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->branch_configurations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **str**| The branch name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **branch_configurations_update_request** | [**BranchConfigurationsUpdateRequest**](BranchConfigurationsUpdateRequest.md)| Parameters of the configuration | 

### Return type

[**BranchConfigurationsGet200Response**](BranchConfigurationsGet200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **build_configurations_get**
> BuildConfigurationsGet200Response build_configurations_get(branch, owner_name, app_name, format=format)



Gets the build configuration in Azure pipeline YAML format

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.build_configurations_get200_response import BuildConfigurationsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    branch = 'branch_example' # str | The branch name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    format = yaml # str | Configuration format (optional) (default to yaml)

    try:
        api_response = api_instance.build_configurations_get(branch, owner_name, app_name, format=format)
        print("The response of BuildApi->build_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->build_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **str**| The branch name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **format** | **str**| Configuration format | [optional] [default to yaml]

### Return type

[**BuildConfigurationsGet200Response**](BuildConfigurationsGet200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_create**
> BuildsListBranches200ResponseInnerLastBuild builds_create(branch, owner_name, app_name, builds_create_request=builds_create_request)



Create a build

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_create_request import BuildsCreateRequest
from openapi_client.models.builds_list_branches200_response_inner_last_build import BuildsListBranches200ResponseInnerLastBuild
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    branch = 'branch_example' # str | The branch name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    builds_create_request = openapi_client.BuildsCreateRequest() # BuildsCreateRequest | Parameters of the build (optional)

    try:
        api_response = api_instance.builds_create(branch, owner_name, app_name, builds_create_request=builds_create_request)
        print("The response of BuildApi->builds_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **str**| The branch name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **builds_create_request** | [**BuildsCreateRequest**](BuildsCreateRequest.md)| Parameters of the build | [optional] 

### Return type

[**BuildsListBranches200ResponseInnerLastBuild**](BuildsListBranches200ResponseInnerLastBuild.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created build(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_distribute**
> BuildsDistribute200Response builds_distribute(build_id, owner_name, app_name, builds_distribute_request)



Distribute a build

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_distribute200_response import BuildsDistribute200Response
from openapi_client.models.builds_distribute_request import BuildsDistributeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    build_id = 56 # int | The build ID
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    builds_distribute_request = openapi_client.BuildsDistributeRequest() # BuildsDistributeRequest | The distribution details

    try:
        api_response = api_instance.builds_distribute(build_id, owner_name, app_name, builds_distribute_request)
        print("The response of BuildApi->builds_distribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_distribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_id** | **int**| The build ID | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **builds_distribute_request** | [**BuildsDistributeRequest**](BuildsDistributeRequest.md)| The distribution details | 

### Return type

[**BuildsDistribute200Response**](BuildsDistribute200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_get**
> BuildsListBranches200ResponseInnerLastBuild builds_get(build_id, owner_name, app_name)



Returns the build detail for the given build ID

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_list_branches200_response_inner_last_build import BuildsListBranches200ResponseInnerLastBuild
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    build_id = 56 # int | The build ID
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.builds_get(build_id, owner_name, app_name)
        print("The response of BuildApi->builds_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_id** | **int**| The build ID | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**BuildsListBranches200ResponseInnerLastBuild**](BuildsListBranches200ResponseInnerLastBuild.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_get_download_uri**
> BuildsGetDownloadUri200Response builds_get_download_uri(build_id, download_type, owner_name, app_name)



Gets the download URI

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_get_download_uri200_response import BuildsGetDownloadUri200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    build_id = 56 # int | The build ID
    download_type = 'download_type_example' # str | The download type
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.builds_get_download_uri(build_id, download_type, owner_name, app_name)
        print("The response of BuildApi->builds_get_download_uri:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_get_download_uri: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_id** | **int**| The build ID | 
 **download_type** | **str**| The download type | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**BuildsGetDownloadUri200Response**](BuildsGetDownloadUri200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_get_log**
> BuildsGetLog200Response builds_get_log(build_id, owner_name, app_name)



Get the build log

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_get_log200_response import BuildsGetLog200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    build_id = 56 # int | The build ID
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.builds_get_log(build_id, owner_name, app_name)
        print("The response of BuildApi->builds_get_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_get_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_id** | **int**| The build ID | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**BuildsGetLog200Response**](BuildsGetLog200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_get_status_by_app_id**
> BuildsGetStatusByAppId200Response builds_get_status_by_app_id(owner_name, app_name)



Application specific build service status

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_get_status_by_app_id200_response import BuildsGetStatusByAppId200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.builds_get_status_by_app_id(owner_name, app_name)
        print("The response of BuildApi->builds_get_status_by_app_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_get_status_by_app_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**BuildsGetStatusByAppId200Response**](BuildsGetStatusByAppId200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. Availability for build service status is stored in response schema. |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_list_branches**
> List[BuildsListBranches200ResponseInner] builds_list_branches(owner_name, app_name)



Returns the list of Git branches for this application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_list_branches200_response_inner import BuildsListBranches200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.builds_list_branches(owner_name, app_name)
        print("The response of BuildApi->builds_list_branches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_list_branches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[BuildsListBranches200ResponseInner]**](BuildsListBranches200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_list_by_branch**
> List[BuildsListBranches200ResponseInnerLastBuild] builds_list_by_branch(branch, owner_name, app_name)



Returns the list of builds for the branch

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_list_branches200_response_inner_last_build import BuildsListBranches200ResponseInnerLastBuild
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    branch = 'branch_example' # str | The branch name
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.builds_list_by_branch(branch, owner_name, app_name)
        print("The response of BuildApi->builds_list_by_branch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_list_by_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **str**| The branch name | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[BuildsListBranches200ResponseInnerLastBuild]**](BuildsListBranches200ResponseInnerLastBuild.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_list_toolset_projects**
> BuildsListToolsetProjects200Response builds_list_toolset_projects(branch, os, platform, owner_name, app_name, max_search_depth=max_search_depth)



Returns the projects in the repository for the branch, for all toolsets

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_list_toolset_projects200_response import BuildsListToolsetProjects200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    branch = 'branch_example' # str | The branch name
    os = 'os_example' # str | The desired OS for the project scan; normally the same as the app OS
    platform = 'platform_example' # str | The desired platform for the project scan
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    max_search_depth = 56 # int | The depth of the repository to search for project files (optional)

    try:
        api_response = api_instance.builds_list_toolset_projects(branch, os, platform, owner_name, app_name, max_search_depth=max_search_depth)
        print("The response of BuildApi->builds_list_toolset_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_list_toolset_projects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **branch** | **str**| The branch name | 
 **os** | **str**| The desired OS for the project scan; normally the same as the app OS | 
 **platform** | **str**| The desired platform for the project scan | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **max_search_depth** | **int**| The depth of the repository to search for project files | [optional] 

### Return type

[**BuildsListToolsetProjects200Response**](BuildsListToolsetProjects200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_list_toolsets**
> BuildsListToolsets200Response builds_list_toolsets(owner_name, app_name, tools=tools)



Returns available toolsets for application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_list_toolsets200_response import BuildsListToolsets200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    tools = 'tools_example' # str | Toolset name (optional)

    try:
        api_response = api_instance.builds_list_toolsets(owner_name, app_name, tools=tools)
        print("The response of BuildApi->builds_list_toolsets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_list_toolsets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **tools** | **str**| Toolset name | [optional] 

### Return type

[**BuildsListToolsets200Response**](BuildsListToolsets200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_list_xamarin_sdk_bundles**
> List[BuildsListToolsets200ResponseXamarinInner] builds_list_xamarin_sdk_bundles(owner_name, app_name)



Gets the Xamarin SDK bundles available to this app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_list_toolsets200_response_xamarin_inner import BuildsListToolsets200ResponseXamarinInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.builds_list_xamarin_sdk_bundles(owner_name, app_name)
        print("The response of BuildApi->builds_list_xamarin_sdk_bundles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_list_xamarin_sdk_bundles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[BuildsListToolsets200ResponseXamarinInner]**](BuildsListToolsets200ResponseXamarinInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_list_xcode_versions**
> List[BuildsListToolsets200ResponseXcodeInner] builds_list_xcode_versions(owner_name, app_name)



Gets the Xcode versions available to this app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_list_toolsets200_response_xcode_inner import BuildsListToolsets200ResponseXcodeInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.builds_list_xcode_versions(owner_name, app_name)
        print("The response of BuildApi->builds_list_xcode_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_list_xcode_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[BuildsListToolsets200ResponseXcodeInner]**](BuildsListToolsets200ResponseXcodeInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_update**
> BuildsListBranches200ResponseInnerLastBuild builds_update(build_id, owner_name, app_name, builds_update_request)



Cancels a build

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.builds_list_branches200_response_inner_last_build import BuildsListBranches200ResponseInnerLastBuild
from openapi_client.models.builds_update_request import BuildsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    build_id = 56 # int | The build ID
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    builds_update_request = openapi_client.BuildsUpdateRequest() # BuildsUpdateRequest | 

    try:
        api_response = api_instance.builds_update(build_id, owner_name, app_name, builds_update_request)
        print("The response of BuildApi->builds_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->builds_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_id** | **int**| The build ID | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **builds_update_request** | [**BuildsUpdateRequest**](BuildsUpdateRequest.md)|  | 

### Return type

[**BuildsListBranches200ResponseInnerLastBuild**](BuildsListBranches200ResponseInnerLastBuild.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **builds_webhook**
> builds_webhook(body=body)



Public webhook sink

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    body = None # object |  (optional)

    try:
        api_instance.builds_webhook(body=body)
    except Exception as e:
        print("Exception when calling BuildApi->builds_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **commits_list_by_sha_list**
> List[CommitsListByShaList200ResponseInner] commits_list_by_sha_list(hashes, owner_name, app_name)



Returns commit information for a batch of shas

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.commits_list_by_sha_list200_response_inner import CommitsListByShaList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    hashes = ['hashes_example'] # List[str] | A collection of commit SHAs comma-delimited
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.commits_list_by_sha_list(hashes, owner_name, app_name)
        print("The response of BuildApi->commits_list_by_sha_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->commits_list_by_sha_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hashes** | [**List[str]**](str.md)| A collection of commit SHAs comma-delimited | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[CommitsListByShaList200ResponseInner]**](CommitsListByShaList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **file_assets_create**
> FileAssetsCreate200Response file_assets_create(owner_name, app_name, body=body)



Create a new asset to upload a file

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.file_assets_create200_response import FileAssetsCreate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    body = None # object |  (optional)

    try:
        api_response = api_instance.file_assets_create(owner_name, app_name, body=body)
        print("The response of BuildApi->file_assets_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->file_assets_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **body** | **object**|  | [optional] 

### Return type

[**FileAssetsCreate200Response**](FileAssetsCreate200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repositories_list**
> List[RepositoriesList200ResponseInner] repositories_list(source_host, owner_name, app_name, vsts_account_name=vsts_account_name, vsts_project_id=vsts_project_id, service_connection_id=service_connection_id, form=form)



Gets the repositories available from the source code host

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.repositories_list200_response_inner import RepositoriesList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    source_host = 'source_host_example' # str | The source host
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    vsts_account_name = 'vsts_account_name_example' # str | Filter repositories only for specified account and project, \"vstsProjectId\" is required (optional)
    vsts_project_id = 'vsts_project_id_example' # str | Filter repositories only for specified account and project, \"vstsAccountName\" is required (optional)
    service_connection_id = 'service_connection_id_example' # str | The id of the service connection (private). Required for GitLab self-hosted repositories (optional)
    form = 'form_example' # str | The selected form of the object (optional)

    try:
        api_response = api_instance.repositories_list(source_host, owner_name, app_name, vsts_account_name=vsts_account_name, vsts_project_id=vsts_project_id, service_connection_id=service_connection_id, form=form)
        print("The response of BuildApi->repositories_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->repositories_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_host** | **str**| The source host | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **vsts_account_name** | **str**| Filter repositories only for specified account and project, \&quot;vstsProjectId\&quot; is required | [optional] 
 **vsts_project_id** | **str**| Filter repositories only for specified account and project, \&quot;vstsAccountName\&quot; is required | [optional] 
 **service_connection_id** | **str**| The id of the service connection (private). Required for GitLab self-hosted repositories | [optional] 
 **form** | **str**| The selected form of the object | [optional] 

### Return type

[**List[RepositoriesList200ResponseInner]**](RepositoriesList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repository_configurations_create_or_update**
> BranchConfigurationsDelete200Response repository_configurations_create_or_update(owner_name, app_name, repository_configurations_create_or_update_request)



Configures the repository for build

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.branch_configurations_delete200_response import BranchConfigurationsDelete200Response
from openapi_client.models.repository_configurations_create_or_update_request import RepositoryConfigurationsCreateOrUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    repository_configurations_create_or_update_request = openapi_client.RepositoryConfigurationsCreateOrUpdateRequest() # RepositoryConfigurationsCreateOrUpdateRequest | The repository information

    try:
        api_response = api_instance.repository_configurations_create_or_update(owner_name, app_name, repository_configurations_create_or_update_request)
        print("The response of BuildApi->repository_configurations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->repository_configurations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **repository_configurations_create_or_update_request** | [**RepositoryConfigurationsCreateOrUpdateRequest**](RepositoryConfigurationsCreateOrUpdateRequest.md)| The repository information | 

### Return type

[**BranchConfigurationsDelete200Response**](BranchConfigurationsDelete200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repository_configurations_delete**
> BranchConfigurationsDelete200Response repository_configurations_delete(owner_name, app_name)



Removes the configuration for the repository

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.branch_configurations_delete200_response import BranchConfigurationsDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.repository_configurations_delete(owner_name, app_name)
        print("The response of BuildApi->repository_configurations_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->repository_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**BranchConfigurationsDelete200Response**](BranchConfigurationsDelete200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **repository_configurations_list**
> List[RepositoryConfigurationsList200ResponseInner] repository_configurations_list(owner_name, app_name, include_inactive=include_inactive)



Returns the repository build configuration status of the app

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.repository_configurations_list200_response_inner import RepositoryConfigurationsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BuildApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    include_inactive = True # bool | Include inactive configurations if none are active (optional)

    try:
        api_response = api_instance.repository_configurations_list(owner_name, app_name, include_inactive=include_inactive)
        print("The response of BuildApi->repository_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->repository_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **include_inactive** | **bool**| Include inactive configurations if none are active | [optional] 

### Return type

[**List[RepositoryConfigurationsList200ResponseInner]**](RepositoryConfigurationsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of repository configurations |  -  |
**0** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

