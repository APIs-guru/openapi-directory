# openapi_client.TestApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_composer_json__composer_lock_file**](TestApi.md#test_composer_json__composer_lock_file) | **POST** /test/composer | Test composer.json &amp; composer.lock file
[**test_dep_graph**](TestApi.md#test_dep_graph) | **POST** /test/dep-graph | Test Dep Graph
[**test_for_issues_in_a_public_gem_by_name_and_version**](TestApi.md#test_for_issues_in_a_public_gem_by_name_and_version) | **GET** /test/rubygems/{gemName}/{version} | Test for issues in a public gem by name and version
[**test_for_issues_in_a_public_package_by_group_id_artifact_id_and_version**](TestApi.md#test_for_issues_in_a_public_package_by_group_id_artifact_id_and_version) | **GET** /test/maven/{groupId}/{artifactId}/{version} | Test for issues in a public package by group id, artifact id and version
[**test_for_issues_in_a_public_package_by_group_name_and_version**](TestApi.md#test_for_issues_in_a_public_package_by_group_name_and_version) | **GET** /test/gradle/{group}/{name}/{version} | Test for issues in a public package by group, name and version
[**test_for_issues_in_a_public_package_by_name_and_version**](TestApi.md#test_for_issues_in_a_public_package_by_name_and_version) | **GET** /test/npm/{packageName}/{version} | Test for issues in a public package by name and version
[**test_gemfile_lock_file**](TestApi.md#test_gemfile_lock_file) | **POST** /test/rubygems | Test gemfile.lock file
[**test_gopkg_toml__gopkg_lock_file**](TestApi.md#test_gopkg_toml__gopkg_lock_file) | **POST** /test/golangdep | Test Gopkg.toml &amp; Gopkg.lock File
[**test_gradle_file**](TestApi.md#test_gradle_file) | **POST** /test/gradle | Test gradle file
[**test_maven_file**](TestApi.md#test_maven_file) | **POST** /test/maven | Test maven file
[**test_package_json__package_lock_json_file**](TestApi.md#test_package_json__package_lock_json_file) | **POST** /test/npm | Test package.json &amp; package-lock.json File
[**test_package_json__yarn_lock_file**](TestApi.md#test_package_json__yarn_lock_file) | **POST** /test/yarn | Test package.json &amp; yarn.lock File
[**test_pip_package_name_version_get**](TestApi.md#test_pip_package_name_version_get) | **GET** /test/pip/{packageName}/{version} | Test for issues in a public package by name and version
[**test_requirements_txt_file**](TestApi.md#test_requirements_txt_file) | **POST** /test/pip | Test requirements.txt file
[**test_sbt_file**](TestApi.md#test_sbt_file) | **POST** /test/sbt | Test sbt file
[**test_sbt_group_id_artifact_id_version_get**](TestApi.md#test_sbt_group_id_artifact_id_version_get) | **GET** /test/sbt/{groupId}/{artifactId}/{version} | Test for issues in a public package by group id, artifact id and version
[**test_vendor_json_file**](TestApi.md#test_vendor_json_file) | **POST** /test/govendor | Test vendor.json File


# **test_composer_json__composer_lock_file**
> test_composer_json__composer_lock_file(test_composer_json_composer_lock_file_request=test_composer_json_composer_lock_file_request)

Test composer.json & composer.lock file

You can test your Composer packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a \"target\" `composer.json` and a `composer.lock`.

### Example


```python
import openapi_client
from openapi_client.models.test_composer_json_composer_lock_file_request import TestComposerJsonComposerLockFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    test_composer_json_composer_lock_file_request = openapi_client.TestComposerJsonComposerLockFileRequest() # TestComposerJsonComposerLockFileRequest |  (optional)

    try:
        # Test composer.json & composer.lock file
        api_instance.test_composer_json__composer_lock_file(test_composer_json_composer_lock_file_request=test_composer_json_composer_lock_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_composer_json__composer_lock_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_composer_json_composer_lock_file_request** | [**TestComposerJsonComposerLockFileRequest**](TestComposerJsonComposerLockFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_dep_graph**
> test_dep_graph(org=org, test_dep_graph_request=test_dep_graph_request)

Test Dep Graph

Use this endpoint to find issues in a [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata).

### Example


```python
import openapi_client
from openapi_client.models.test_dep_graph_request import TestDepGraphRequest
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
    api_instance = openapi_client.TestApi(api_client)
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)
    test_dep_graph_request = openapi_client.TestDepGraphRequest() # TestDepGraphRequest |  (optional)

    try:
        # Test Dep Graph
        api_instance.test_dep_graph(org=org, test_dep_graph_request=test_dep_graph_request)
    except Exception as e:
        print("Exception when calling TestApi->test_dep_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 
 **test_dep_graph_request** | [**TestDepGraphRequest**](TestDepGraphRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_for_issues_in_a_public_gem_by_name_and_version**
> test_for_issues_in_a_public_gem_by_name_and_version(gem_name, version, org=org)

Test for issues in a public gem by name and version

You can test `rubygems` packages for issues according to their name and version.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.TestApi(api_client)
    gem_name = 'rails-html-sanitizer' # str | The gem name.
    version = '1.0.3' # str | The gem version to test.
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)

    try:
        # Test for issues in a public gem by name and version
        api_instance.test_for_issues_in_a_public_gem_by_name_and_version(gem_name, version, org=org)
    except Exception as e:
        print("Exception when calling TestApi->test_for_issues_in_a_public_gem_by_name_and_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gem_name** | **str**| The gem name. | 
 **version** | **str**| The gem version to test. | 
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 

### Return type

void (empty response body)

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

# **test_for_issues_in_a_public_package_by_group_id_artifact_id_and_version**
> test_for_issues_in_a_public_package_by_group_id_artifact_id_and_version(group_id, artifact_id, version, org=org, repository=repository)

Test for issues in a public package by group id, artifact id and version

You can test `maven` packages for issues according to their [coordinates](https://maven.apache.org/pom.html#Maven_Coordinates): group ID, artifact ID and version. The repository hosting the package may also be customized (see the `repository` query parameter).

### Example


```python
import openapi_client
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
    api_instance = openapi_client.TestApi(api_client)
    group_id = 'org.apache.flex.blazeds' # str | The package's group ID.
    artifact_id = 'blazeds' # str | The package's artifact ID.
    version = '4.7.2' # str | The package version to test.
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)
    repository = 'https://repo1.maven.org/maven2' # str | The Maven repository hosting this package. The default value is Maven Central. More than one value is supported, in order. (optional)

    try:
        # Test for issues in a public package by group id, artifact id and version
        api_instance.test_for_issues_in_a_public_package_by_group_id_artifact_id_and_version(group_id, artifact_id, version, org=org, repository=repository)
    except Exception as e:
        print("Exception when calling TestApi->test_for_issues_in_a_public_package_by_group_id_artifact_id_and_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The package&#39;s group ID. | 
 **artifact_id** | **str**| The package&#39;s artifact ID. | 
 **version** | **str**| The package version to test. | 
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 
 **repository** | **str**| The Maven repository hosting this package. The default value is Maven Central. More than one value is supported, in order. | [optional] 

### Return type

void (empty response body)

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

# **test_for_issues_in_a_public_package_by_group_name_and_version**
> test_for_issues_in_a_public_package_by_group_name_and_version(group, name, version, org=org, repository=repository)

Test for issues in a public package by group, name and version

You can test `gradle` packages for issues according to their group, name and version. This is done via the maven endpoint (for Java), since the packages are hosted on maven central or a compatible repository. See \"Maven\" above for details.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.TestApi(api_client)
    group = 'org.apache.flex.blazeds' # str | The package's group ID.
    name = 'blazeds' # str | The package's artifact ID.
    version = '4.7.2' # str | The package version to test.
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)
    repository = 'https://repo1.maven.org/maven2' # str | The repository hosting this package. The default value is Maven Central. More than one value is supported, in order. (optional)

    try:
        # Test for issues in a public package by group, name and version
        api_instance.test_for_issues_in_a_public_package_by_group_name_and_version(group, name, version, org=org, repository=repository)
    except Exception as e:
        print("Exception when calling TestApi->test_for_issues_in_a_public_package_by_group_name_and_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **str**| The package&#39;s group ID. | 
 **name** | **str**| The package&#39;s artifact ID. | 
 **version** | **str**| The package version to test. | 
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 
 **repository** | **str**| The repository hosting this package. The default value is Maven Central. More than one value is supported, in order. | [optional] 

### Return type

void (empty response body)

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

# **test_for_issues_in_a_public_package_by_name_and_version**
> test_for_issues_in_a_public_package_by_name_and_version(package_name, version, org=org)

Test for issues in a public package by name and version

You can test `npm` packages for issues according to their name and version.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.TestApi(api_client)
    package_name = 'ms' # str | The package name. For scoped packages, **must** be url-encoded, so to test \"@angular/core\" version 4.3.2, one should `GET /test/npm/%40angular%2Fcore/4.3.2`.
    version = '0.7.0' # str | The Package version to test.
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)

    try:
        # Test for issues in a public package by name and version
        api_instance.test_for_issues_in_a_public_package_by_name_and_version(package_name, version, org=org)
    except Exception as e:
        print("Exception when calling TestApi->test_for_issues_in_a_public_package_by_name_and_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| The package name. For scoped packages, **must** be url-encoded, so to test \&quot;@angular/core\&quot; version 4.3.2, one should &#x60;GET /test/npm/%40angular%2Fcore/4.3.2&#x60;. | 
 **version** | **str**| The Package version to test. | 
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 

### Return type

void (empty response body)

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

# **test_gemfile_lock_file**
> test_gemfile_lock_file(test_gemfile_lock_file_request=test_gemfile_lock_file_request)

Test gemfile.lock file

You can test your rubygems applications for issues according to their lockfile using this action. It takes a JSON object containing a the \"target\" `Gemfile.lock`.

### Example


```python
import openapi_client
from openapi_client.models.test_gemfile_lock_file_request import TestGemfileLockFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    test_gemfile_lock_file_request = openapi_client.TestGemfileLockFileRequest() # TestGemfileLockFileRequest |  (optional)

    try:
        # Test gemfile.lock file
        api_instance.test_gemfile_lock_file(test_gemfile_lock_file_request=test_gemfile_lock_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_gemfile_lock_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_gemfile_lock_file_request** | [**TestGemfileLockFileRequest**](TestGemfileLockFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gopkg_toml__gopkg_lock_file**
> test_gopkg_toml__gopkg_lock_file(org=org, test_gopkg_toml_gopkg_lock_file_request=test_gopkg_toml_gopkg_lock_file_request)

Test Gopkg.toml & Gopkg.lock File

You can test your Go dep packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a \"target\" `Gopkg.toml` and a `Gopkg.lock`.

### Example


```python
import openapi_client
from openapi_client.models.test_gopkg_toml_gopkg_lock_file_request import TestGopkgTomlGopkgLockFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)
    test_gopkg_toml_gopkg_lock_file_request = openapi_client.TestGopkgTomlGopkgLockFileRequest() # TestGopkgTomlGopkgLockFileRequest |  (optional)

    try:
        # Test Gopkg.toml & Gopkg.lock File
        api_instance.test_gopkg_toml__gopkg_lock_file(org=org, test_gopkg_toml_gopkg_lock_file_request=test_gopkg_toml_gopkg_lock_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_gopkg_toml__gopkg_lock_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 
 **test_gopkg_toml_gopkg_lock_file_request** | [**TestGopkgTomlGopkgLockFileRequest**](TestGopkgTomlGopkgLockFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gradle_file**
> test_gradle_file(test_gradle_file_request=test_gradle_file_request)

Test gradle file

You can test your Gradle packages for issues according to their manifest file using this action. It takes a JSON object containing the \"target\" `build.gradle`.

### Example


```python
import openapi_client
from openapi_client.models.test_gradle_file_request import TestGradleFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    test_gradle_file_request = openapi_client.TestGradleFileRequest() # TestGradleFileRequest |  (optional)

    try:
        # Test gradle file
        api_instance.test_gradle_file(test_gradle_file_request=test_gradle_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_gradle_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_gradle_file_request** | [**TestGradleFileRequest**](TestGradleFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_maven_file**
> test_maven_file(org=org, repository=repository, test_maven_file_request=test_maven_file_request)

Test maven file

You can test your Maven packages for issues according to their manifest file using this action. It takes a JSON object containing a the \"target\" `pom.xml`.  Additional manifest files, if they are needed, like parent `pom.xml` files, child poms, etc., according the the definitions in the target `pom.xml` file, should be supplied in the `additional` body parameter.

### Example


```python
import openapi_client
from openapi_client.models.test_maven_file_request import TestMavenFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)
    repository = 'https://repo1.maven.org/maven2' # str | The Maven repository hosting this package. The default value is Maven Central. More than one value is supported, in order. (optional)
    test_maven_file_request = openapi_client.TestMavenFileRequest() # TestMavenFileRequest |  (optional)

    try:
        # Test maven file
        api_instance.test_maven_file(org=org, repository=repository, test_maven_file_request=test_maven_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_maven_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 
 **repository** | **str**| The Maven repository hosting this package. The default value is Maven Central. More than one value is supported, in order. | [optional] 
 **test_maven_file_request** | [**TestMavenFileRequest**](TestMavenFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_package_json__package_lock_json_file**
> test_package_json__package_lock_json_file(test_package_json_package_lock_json_file_request=test_package_json_package_lock_json_file_request)

Test package.json & package-lock.json File

You can test your npm packages for issues according to their manifest file & optional lockfile using this action. It takes a JSON object containing a \"target\" `package.json` and optionally a `package-lock.json`.

### Example


```python
import openapi_client
from openapi_client.models.test_package_json_package_lock_json_file_request import TestPackageJsonPackageLockJsonFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    test_package_json_package_lock_json_file_request = openapi_client.TestPackageJsonPackageLockJsonFileRequest() # TestPackageJsonPackageLockJsonFileRequest |  (optional)

    try:
        # Test package.json & package-lock.json File
        api_instance.test_package_json__package_lock_json_file(test_package_json_package_lock_json_file_request=test_package_json_package_lock_json_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_package_json__package_lock_json_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_package_json_package_lock_json_file_request** | [**TestPackageJsonPackageLockJsonFileRequest**](TestPackageJsonPackageLockJsonFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_package_json__yarn_lock_file**
> test_package_json__yarn_lock_file(test_package_json_yarn_lock_file_request=test_package_json_yarn_lock_file_request)

Test package.json & yarn.lock File

You can test your yarn packages for issues according to their manifest file & lockfile using this action. It takes a JSON object containing a \"target\" `package.json` and a `yarn.lock`.

### Example


```python
import openapi_client
from openapi_client.models.test_package_json_yarn_lock_file_request import TestPackageJsonYarnLockFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    test_package_json_yarn_lock_file_request = openapi_client.TestPackageJsonYarnLockFileRequest() # TestPackageJsonYarnLockFileRequest |  (optional)

    try:
        # Test package.json & yarn.lock File
        api_instance.test_package_json__yarn_lock_file(test_package_json_yarn_lock_file_request=test_package_json_yarn_lock_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_package_json__yarn_lock_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_package_json_yarn_lock_file_request** | [**TestPackageJsonYarnLockFileRequest**](TestPackageJsonYarnLockFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_pip_package_name_version_get**
> test_pip_package_name_version_get(package_name, version, org=org)

Test for issues in a public package by name and version

You can test `pip` packages for issues according to their name and version.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.TestApi(api_client)
    package_name = 'rsa' # str | The package name.
    version = '3.3' # str | The Package version to test.
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)

    try:
        # Test for issues in a public package by name and version
        api_instance.test_pip_package_name_version_get(package_name, version, org=org)
    except Exception as e:
        print("Exception when calling TestApi->test_pip_package_name_version_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **package_name** | **str**| The package name. | 
 **version** | **str**| The Package version to test. | 
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 

### Return type

void (empty response body)

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

# **test_requirements_txt_file**
> test_requirements_txt_file(test_requirements_txt_file_request=test_requirements_txt_file_request)

Test requirements.txt file

You can test your pip packages for issues according to their manifest file using this action. It takes a JSON object containing a the \"target\" `requirements.txt`.

### Example


```python
import openapi_client
from openapi_client.models.test_requirements_txt_file_request import TestRequirementsTxtFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    test_requirements_txt_file_request = openapi_client.TestRequirementsTxtFileRequest() # TestRequirementsTxtFileRequest |  (optional)

    try:
        # Test requirements.txt file
        api_instance.test_requirements_txt_file(test_requirements_txt_file_request=test_requirements_txt_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_requirements_txt_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_requirements_txt_file_request** | [**TestRequirementsTxtFileRequest**](TestRequirementsTxtFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_sbt_file**
> test_sbt_file(test_sbt_file_request=test_sbt_file_request)

Test sbt file

You can test your `sbt` packages for issues according to their manifest file using this action. It takes a JSON object containing a the \"target\" `build.sbt`.

### Example


```python
import openapi_client
from openapi_client.models.test_sbt_file_request import TestSbtFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    test_sbt_file_request = openapi_client.TestSbtFileRequest() # TestSbtFileRequest |  (optional)

    try:
        # Test sbt file
        api_instance.test_sbt_file(test_sbt_file_request=test_sbt_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_sbt_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_sbt_file_request** | [**TestSbtFileRequest**](TestSbtFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_sbt_group_id_artifact_id_version_get**
> test_sbt_group_id_artifact_id_version_get(group_id, artifact_id, version, org=org, repository=repository)

Test for issues in a public package by group id, artifact id and version

You can test `sbt` packages for issues according to their group ID, artifact ID and version. This is done via the maven endpoint (for Java), since the packages are hosted on maven central or a compatible repository. See \"Maven\" above for details.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.TestApi(api_client)
    group_id = 'org.apache.flex.blazeds' # str | The package's group ID.
    artifact_id = 'blazeds' # str | The package's artifact ID.
    version = '4.7.2' # str | The package version to test.
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)
    repository = 'https://repo1.maven.org/maven2' # str | The repository hosting this package. The default value is Maven Central. More than one value is supported, in order. (optional)

    try:
        # Test for issues in a public package by group id, artifact id and version
        api_instance.test_sbt_group_id_artifact_id_version_get(group_id, artifact_id, version, org=org, repository=repository)
    except Exception as e:
        print("Exception when calling TestApi->test_sbt_group_id_artifact_id_version_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The package&#39;s group ID. | 
 **artifact_id** | **str**| The package&#39;s artifact ID. | 
 **version** | **str**| The package version to test. | 
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 
 **repository** | **str**| The repository hosting this package. The default value is Maven Central. More than one value is supported, in order. | [optional] 

### Return type

void (empty response body)

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

# **test_vendor_json_file**
> test_vendor_json_file(test_vendor_json_file_request=test_vendor_json_file_request)

Test vendor.json File

You can test your Go vendor packages for issues according to their manifest file using this action. It takes a JSON object containing a \"target\" `vendor.json`.

### Example


```python
import openapi_client
from openapi_client.models.test_vendor_json_file_request import TestVendorJsonFileRequest
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
    api_instance = openapi_client.TestApi(api_client)
    test_vendor_json_file_request = openapi_client.TestVendorJsonFileRequest() # TestVendorJsonFileRequest |  (optional)

    try:
        # Test vendor.json File
        api_instance.test_vendor_json_file(test_vendor_json_file_request=test_vendor_json_file_request)
    except Exception as e:
        print("Exception when calling TestApi->test_vendor_json_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_vendor_json_file_request** | [**TestVendorJsonFileRequest**](TestVendorJsonFileRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

