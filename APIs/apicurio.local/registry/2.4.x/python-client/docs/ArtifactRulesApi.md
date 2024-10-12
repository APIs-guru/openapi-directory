# openapi_client.ArtifactRulesApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_artifact_rule**](ArtifactRulesApi.md#create_artifact_rule) | **POST** /groups/{groupId}/artifacts/{artifactId}/rules | Create artifact rule
[**delete_artifact_rule**](ArtifactRulesApi.md#delete_artifact_rule) | **DELETE** /groups/{groupId}/artifacts/{artifactId}/rules/{rule} | Delete artifact rule
[**delete_artifact_rules**](ArtifactRulesApi.md#delete_artifact_rules) | **DELETE** /groups/{groupId}/artifacts/{artifactId}/rules | Delete artifact rules
[**get_artifact_rule_config**](ArtifactRulesApi.md#get_artifact_rule_config) | **GET** /groups/{groupId}/artifacts/{artifactId}/rules/{rule} | Get artifact rule configuration
[**list_artifact_rules**](ArtifactRulesApi.md#list_artifact_rules) | **GET** /groups/{groupId}/artifacts/{artifactId}/rules | List artifact rules
[**test_update_artifact**](ArtifactRulesApi.md#test_update_artifact) | **PUT** /groups/{groupId}/artifacts/{artifactId}/test | Test update artifact
[**update_artifact_rule_config**](ArtifactRulesApi.md#update_artifact_rule_config) | **PUT** /groups/{groupId}/artifacts/{artifactId}/rules/{rule} | Update artifact rule configuration


# **create_artifact_rule**
> create_artifact_rule(group_id, artifact_id, rule)

Create artifact rule

Adds a rule to the list of rules that get applied to the artifact when adding new versions.  All configured rules must pass to successfully add a new artifact version.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * Rule (named in the request body) is unknown (HTTP error `400`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.rule import Rule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArtifactRulesApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    rule = openapi_client.Rule() # Rule | 

    try:
        # Create artifact rule
        api_instance.create_artifact_rule(group_id, artifact_id, rule)
    except Exception as e:
        print("Exception when calling ArtifactRulesApi->create_artifact_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **rule** | [**Rule**](Rule.md)|  | 

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
**204** | The rule was added. |  -  |
**400** | Common response for all operations that can return a &#x60;400&#x60; error. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_artifact_rule**
> delete_artifact_rule(group_id, artifact_id, rule)

Delete artifact rule

Deletes a rule from the artifact.  This results in the rule no longer applying for this artifact.  If this is the only rule configured for the artifact, this is the  same as deleting **all** rules, and the globally configured rules now apply to this artifact.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArtifactRulesApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    rule = 'rule_example' # str | The unique name/type of a rule.

    try:
        # Delete artifact rule
        api_instance.delete_artifact_rule(group_id, artifact_id, rule)
    except Exception as e:
        print("Exception when calling ArtifactRulesApi->delete_artifact_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **rule** | **str**| The unique name/type of a rule. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The rule was successfully deleted. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_artifact_rules**
> delete_artifact_rules(group_id, artifact_id)

Delete artifact rules

Deletes all of the rules configured for the artifact.  After this is done, the global rules apply to the artifact again.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArtifactRulesApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.

    try:
        # Delete artifact rules
        api_instance.delete_artifact_rules(group_id, artifact_id)
    except Exception as e:
        print("Exception when calling ArtifactRulesApi->delete_artifact_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The rules were successfully deleted. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_artifact_rule_config**
> Rule get_artifact_rule_config(group_id, artifact_id, rule)

Get artifact rule configuration

Returns information about a single rule configured for an artifact.  This is useful when you want to know what the current configuration settings are for a specific rule.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.rule import Rule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArtifactRulesApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    rule = 'rule_example' # str | The unique name/type of a rule.

    try:
        # Get artifact rule configuration
        api_response = api_instance.get_artifact_rule_config(group_id, artifact_id, rule)
        print("The response of ArtifactRulesApi->get_artifact_rule_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactRulesApi->get_artifact_rule_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **rule** | **str**| The unique name/type of a rule. | 

### Return type

[**Rule**](Rule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about a rule. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_artifact_rules**
> List[RuleType] list_artifact_rules(group_id, artifact_id)

List artifact rules

Returns a list of all rules configured for the artifact.  The set of rules determines how the content of an artifact can evolve over time.  If no rules are configured for an artifact, the set of globally configured rules are used.  If no global rules  are defined, there are no restrictions on content evolution.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`)

### Example


```python
import openapi_client
from openapi_client.models.rule_type import RuleType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArtifactRulesApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.

    try:
        # List artifact rules
        api_response = api_instance.list_artifact_rules(group_id, artifact_id)
        print("The response of ArtifactRulesApi->list_artifact_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactRulesApi->list_artifact_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 

### Return type

[**List[RuleType]**](RuleType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the names of the rules configured for the artifact. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_update_artifact**
> test_update_artifact(group_id, artifact_id, body)

Test update artifact

Tests whether an update to the artifact's content *would* succeed for the provided content. Ultimately, this applies any rules configured for the artifact against the given content to determine whether the rules would pass or fail, but without actually updating the artifact content.  The body of the request should be the raw content of the artifact.  This is typically in  JSON format for *most* of the supported types, but may be in another format for a few  (for example, `PROTOBUF`).  The update could fail for a number of reasons including:  * Provided content (request body) was empty (HTTP error `400`) * No artifact with the `artifactId` exists (HTTP error `404`) * The new content violates one of the rules configured for the artifact (HTTP error `409`) * The provided artifact type is not recognized (HTTP error `404`) * A server error occurred (HTTP error `500`)  When successful, this operation simply returns a *No Content* response.  This response indicates that the content is valid against the configured content rules for the  artifact (or the global rules if no artifact rules are enabled).

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArtifactRulesApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    body = None # bytearray | The content of the artifact being tested. This is often, but not always, JSON data representing one of the supported artifact types:  * Avro (`AVRO`) * Protobuf (`PROTOBUF`) * JSON Schema (`JSON`) * Kafka Connect (`KCONNECT`) * OpenAPI (`OPENAPI`) * AsyncAPI (`ASYNCAPI`) * GraphQL (`GRAPHQL`) * Web Services Description Language (`WSDL`) * XML Schema (`XSD`) 

    try:
        # Test update artifact
        api_instance.test_update_artifact(group_id, artifact_id, body)
    except Exception as e:
        print("Exception when calling ArtifactRulesApi->test_update_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **body** | **bytearray**| The content of the artifact being tested. This is often, but not always, JSON data representing one of the supported artifact types:  * Avro (&#x60;AVRO&#x60;) * Protobuf (&#x60;PROTOBUF&#x60;) * JSON Schema (&#x60;JSON&#x60;) * Kafka Connect (&#x60;KCONNECT&#x60;) * OpenAPI (&#x60;OPENAPI&#x60;) * AsyncAPI (&#x60;ASYNCAPI&#x60;) * GraphQL (&#x60;GRAPHQL&#x60;) * Web Services Description Language (&#x60;WSDL&#x60;) * XML Schema (&#x60;XSD&#x60;)  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | When successful, returns \&quot;No Content\&quot; to indicate that the rules passed, and the content was not updated. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**409** | Common response used when an input conflicts with existing data. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_artifact_rule_config**
> Rule update_artifact_rule_config(group_id, artifact_id, rule, rule2)

Update artifact rule configuration

Updates the configuration of a single rule for the artifact.  The configuration data is specific to each rule type, so the configuration of the `COMPATIBILITY` rule  is in a different format from the configuration of the `VALIDITY` rule.  This operation can fail for the following reasons:  * No artifact with this `artifactId` exists (HTTP error `404`) * No rule with this name/type is configured for this artifact (HTTP error `404`) * Invalid rule type (HTTP error `400`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.rule import Rule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArtifactRulesApi(api_client)
    group_id = 'group_id_example' # str | The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
    artifact_id = 'artifact_id_example' # str | The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
    rule = 'rule_example' # str | The unique name/type of a rule.
    rule2 = openapi_client.Rule() # Rule | 

    try:
        # Update artifact rule configuration
        api_response = api_instance.update_artifact_rule_config(group_id, artifact_id, rule, rule2)
        print("The response of ArtifactRulesApi->update_artifact_rule_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactRulesApi->update_artifact_rule_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts. | 
 **artifact_id** | **str**| The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier. | 
 **rule** | **str**| The unique name/type of a rule. | 
 **rule2** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rule configuration was updated. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

