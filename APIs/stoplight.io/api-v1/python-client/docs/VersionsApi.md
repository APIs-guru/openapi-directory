# openapi_client.VersionsApi

All URIs are relative to *https://api.stoplight.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**g_et_versions_version_id_export_format**](VersionsApi.md#g_et_versions_version_id_export_format) | **GET** /versions/{versionId}/export/{format} | Export
[**p_ost_versions_version_id_publish**](VersionsApi.md#p_ost_versions_version_id_publish) | **POST** /versions/{versionId}/publish | Publish
[**p_ut_versions_version_id_import**](VersionsApi.md#p_ut_versions_version_id_import) | **PUT** /versions/{versionId}/import | Import
[**p_ut_versions_version_id_unpublish**](VersionsApi.md#p_ut_versions_version_id_unpublish) | **PUT** /versions/{versionId}/unpublish | Unpublish


# **g_et_versions_version_id_export_format**
> g_et_versions_version_id_export_format(version_id, format)

Export

Export a version to your choice of API specification.  ### Allowed Formats:  - oas.json - oas.yaml - raml08.yaml - raml10.yaml - stoplight.json - stoplight.yaml  The stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are exporting with the intent on importing back into Stoplight, this export format preserves the most information.  ### Example URL:  `https://api.stoplight.io/v1/versions/123/export/oas.json`

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stoplight.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.stoplight.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VersionsApi(api_client)
    version_id = '' # str | This is the unique identifier for the version. (default to '')
    format = oas.json # str | The specification / format that you want to export. (default to oas.json)

    try:
        # Export
        api_instance.g_et_versions_version_id_export_format(version_id, format)
    except Exception as e:
        print("Exception when calling VersionsApi->g_et_versions_version_id_export_format: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **str**| This is the unique identifier for the version. | [default to &#39;&#39;]
 **format** | **str**| The specification / format that you want to export. | [default to oas.json]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/yaml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **p_ost_versions_version_id_publish**
> POSTVersionsVersionIdPublish200Response p_ost_versions_version_id_publish(version_id)

Publish

Re-publish an API version in Stoplight. This will re-publish the given API version, with whatever publish settings have already been setup in the app.  This will only work with APIs that have previously been published at least once.  This works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous integration processes, and automatically re-publish your documentation when certain events happen. Once such scenario is:  1. Swagger is generated from your codebase, and pushed up to Github. 2. A simple script that you write sends a request to the Stoplight API to import the new specification, passing in the URL to the swagger file on Github. 3. After the import succeeds, and your API in Stoplight is up to date, the script sends a request to the Stoplight API (this endpoint) to re-publish your documentation.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.post_versions_version_id_publish200_response import POSTVersionsVersionIdPublish200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stoplight.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.stoplight.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VersionsApi(api_client)
    version_id = 'version_id_example' # str | This is the unique identifier for the version.

    try:
        # Publish
        api_response = api_instance.p_ost_versions_version_id_publish(version_id)
        print("The response of VersionsApi->p_ost_versions_version_id_publish:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VersionsApi->p_ost_versions_version_id_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **str**| This is the unique identifier for the version. | 

### Return type

[**POSTVersionsVersionIdPublish200Response**](POSTVersionsVersionIdPublish200Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **p_ut_versions_version_id_import**
> PUTVersionsVersionIdImport200Response p_ut_versions_version_id_import(version_id, put_versions_version_id_import_request=put_versions_version_id_import_request)

Import

Import the given specification into an existing version.   **Warning, this is a destructive action! Any resources present in both the existing version, and the specification being imported, will be overwritten.**  This endpoint is particularly useful when you manage a specification file (Swagger or RAML) outside of Stoplight, and want to keep your Stoplight API version up to date as that specification changes.  By default, a \"merge\" is performed when importing. If a resource exists in the specification that you are importing, and in the Stoplight API, the resource will be overwritten. If a resource exists in the Stoplight API, but not in the spefication that you are importing, the resource will be left alone (and not deleted).  You can include an optional `options` property in the request body, to indicate if you would like to perform more of a replacement (instead of a merge). The options are documented in full in the response definition below these notes.  Take this request + request body for example:  `PUT https://api.stoplight.io/v1/versions/123/import` ```json {   \"url\": \"http://petstore.swagger.io/v2/swagger.json\",   \"options\": {     \"removeExtraEndpoints\": true,     \"removeExtraSchemas\": true   } } ```  This request will grab the swagger specification described at `http://petstore.swagger.io/v2/swagger.json`, and import it into the Stoplight API version with id `123`. Additionally, it will delete any existing endpoints or models that are not described in the petstore swagger being imported.  Instead of a URL, you can provide the actual specification to be imported, either as a string (in the case of YAML) or an object (in the case of JSON). That request would look something like this:  `PUT https://api.stoplight.io/v1/versions/123/import` ```json {   \"specData\": {     \"swagger\": \"2.0\",     \"info\": {}     ... rest of spec   } } ```

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.put_versions_version_id_import200_response import PUTVersionsVersionIdImport200Response
from openapi_client.models.put_versions_version_id_import_request import PUTVersionsVersionIdImportRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stoplight.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.stoplight.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VersionsApi(api_client)
    version_id = 'version_id_example' # str | This is the unique identifier for the version.
    put_versions_version_id_import_request = openapi_client.PUTVersionsVersionIdImportRequest() # PUTVersionsVersionIdImportRequest |  (optional)

    try:
        # Import
        api_response = api_instance.p_ut_versions_version_id_import(version_id, put_versions_version_id_import_request=put_versions_version_id_import_request)
        print("The response of VersionsApi->p_ut_versions_version_id_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VersionsApi->p_ut_versions_version_id_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **str**| This is the unique identifier for the version. | 
 **put_versions_version_id_import_request** | [**PUTVersionsVersionIdImportRequest**](PUTVersionsVersionIdImportRequest.md)|  | [optional] 

### Return type

[**PUTVersionsVersionIdImport200Response**](PUTVersionsVersionIdImport200Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **p_ut_versions_version_id_unpublish**
> PUTVersionsVersionIdUnpublish200Response p_ut_versions_version_id_unpublish(version_id)

Unpublish

Unpublish the documentation associated with the given API version.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.put_versions_version_id_unpublish200_response import PUTVersionsVersionIdUnpublish200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.stoplight.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.stoplight.io/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VersionsApi(api_client)
    version_id = 'version_id_example' # str | This is the unique identifier for the version.

    try:
        # Unpublish
        api_response = api_instance.p_ut_versions_version_id_unpublish(version_id)
        print("The response of VersionsApi->p_ut_versions_version_id_unpublish:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VersionsApi->p_ut_versions_version_id_unpublish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_id** | **str**| This is the unique identifier for the version. | 

### Return type

[**PUTVersionsVersionIdUnpublish200Response**](PUTVersionsVersionIdUnpublish200Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

