# openapi_client.MemberJoiningRulesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**member_joining_rules_create**](MemberJoiningRulesApi.md#member_joining_rules_create) | **POST** /member-joining-rules | 
[**member_joining_rules_destroy**](MemberJoiningRulesApi.md#member_joining_rules_destroy) | **DELETE** /member-joining-rules/{id} | 
[**member_joining_rules_list**](MemberJoiningRulesApi.md#member_joining_rules_list) | **GET** /member-joining-rules | 
[**member_joining_rules_partial_update**](MemberJoiningRulesApi.md#member_joining_rules_partial_update) | **PATCH** /member-joining-rules/{id} | 
[**member_joining_rules_read**](MemberJoiningRulesApi.md#member_joining_rules_read) | **GET** /member-joining-rules/{id} | 
[**member_joining_rules_update**](MemberJoiningRulesApi.md#member_joining_rules_update) | **PUT** /member-joining-rules/{id} | 


# **member_joining_rules_create**
> MemberJoiningRule member_joining_rules_create(member_joining_rule_request=member_joining_rule_request)



Create a member joining rule

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.member_joining_rule import MemberJoiningRule
from openapi_client.models.member_joining_rule_request import MemberJoiningRuleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MemberJoiningRulesApi(api_client)
    member_joining_rule_request = openapi_client.MemberJoiningRuleRequest() # MemberJoiningRuleRequest | Polymorphic Member Joining Rule Request (optional)

    try:
        api_response = api_instance.member_joining_rules_create(member_joining_rule_request=member_joining_rule_request)
        print("The response of MemberJoiningRulesApi->member_joining_rules_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberJoiningRulesApi->member_joining_rules_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **member_joining_rule_request** | [**MemberJoiningRuleRequest**](MemberJoiningRuleRequest.md)| Polymorphic Member Joining Rule Request | [optional] 

### Return type

[**MemberJoiningRule**](MemberJoiningRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Polymorphic Member Joining Rule |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **member_joining_rules_destroy**
> MemberJoiningRule member_joining_rules_destroy(id)



Delete a joining rule

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.member_joining_rule import MemberJoiningRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MemberJoiningRulesApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.member_joining_rules_destroy(id)
        print("The response of MemberJoiningRulesApi->member_joining_rules_destroy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberJoiningRulesApi->member_joining_rules_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**MemberJoiningRule**](MemberJoiningRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Member Joining Rule |  -  |
**400** | UnableToFulfill |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **member_joining_rules_list**
> List[MemberJoiningRule] member_joining_rules_list(id=id, network_service=network_service)



Get a list of joining rules

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.member_joining_rule import MemberJoiningRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MemberJoiningRulesApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    network_service = 'network_service_example' # str | Filter by network_service (optional)

    try:
        api_response = api_instance.member_joining_rules_list(id=id, network_service=network_service)
        print("The response of MemberJoiningRulesApi->member_joining_rules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberJoiningRulesApi->member_joining_rules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **network_service** | **str**| Filter by network_service | [optional] 

### Return type

[**List[MemberJoiningRule]**](MemberJoiningRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Polymorphic Member Joining Rule |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **member_joining_rules_partial_update**
> MemberJoiningRule member_joining_rules_partial_update(id, member_joining_rule_update_partial=member_joining_rule_update_partial)



Partially update a joining rule

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.member_joining_rule import MemberJoiningRule
from openapi_client.models.member_joining_rule_update_partial import MemberJoiningRuleUpdatePartial
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MemberJoiningRulesApi(api_client)
    id = 'id_example' # str | Get by id
    member_joining_rule_update_partial = openapi_client.MemberJoiningRuleUpdatePartial() # MemberJoiningRuleUpdatePartial | Polymorphic Member Joining Rule Update (optional)

    try:
        api_response = api_instance.member_joining_rules_partial_update(id, member_joining_rule_update_partial=member_joining_rule_update_partial)
        print("The response of MemberJoiningRulesApi->member_joining_rules_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberJoiningRulesApi->member_joining_rules_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **member_joining_rule_update_partial** | [**MemberJoiningRuleUpdatePartial**](MemberJoiningRuleUpdatePartial.md)| Polymorphic Member Joining Rule Update | [optional] 

### Return type

[**MemberJoiningRule**](MemberJoiningRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Member Joining Rule |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **member_joining_rules_read**
> MemberJoiningRule member_joining_rules_read(id)



Get a single rule

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.member_joining_rule import MemberJoiningRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MemberJoiningRulesApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.member_joining_rules_read(id)
        print("The response of MemberJoiningRulesApi->member_joining_rules_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberJoiningRulesApi->member_joining_rules_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**MemberJoiningRule**](MemberJoiningRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Member Joining Rule |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **member_joining_rules_update**
> MemberJoiningRule member_joining_rules_update(id, member_joining_rule_update=member_joining_rule_update)



Update a joining rule

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.member_joining_rule import MemberJoiningRule
from openapi_client.models.member_joining_rule_update import MemberJoiningRuleUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MemberJoiningRulesApi(api_client)
    id = 'id_example' # str | Get by id
    member_joining_rule_update = openapi_client.MemberJoiningRuleUpdate() # MemberJoiningRuleUpdate | Polymorphic Member Joining Rule Update (optional)

    try:
        api_response = api_instance.member_joining_rules_update(id, member_joining_rule_update=member_joining_rule_update)
        print("The response of MemberJoiningRulesApi->member_joining_rules_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MemberJoiningRulesApi->member_joining_rules_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **member_joining_rule_update** | [**MemberJoiningRuleUpdate**](MemberJoiningRuleUpdate.md)| Polymorphic Member Joining Rule Update | [optional] 

### Return type

[**MemberJoiningRule**](MemberJoiningRule.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Polymorphic Member Joining Rule |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

