# openapi_client.RulesApi

All URIs are relative to *https://api.ritc.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_rule**](RulesApi.md#add_rule) | **POST** /rules | 
[**get_rule**](RulesApi.md#get_rule) | **GET** /rules/{rule_id} | 
[**list_rules**](RulesApi.md#list_rules) | **GET** /rules | 
[**remove_rule**](RulesApi.md#remove_rule) | **DELETE** /rules/{rule_id} | 
[**run_rule**](RulesApi.md#run_rule) | **POST** /rules/{rule_id}/run | 
[**update_rule**](RulesApi.md#update_rule) | **PATCH** /rules/{rule_id} | 


# **add_rule**
> RuleFullResponse add_rule(rule_object)



Create a new rule

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.rule import Rule
from openapi_client.models.rule_full_response import RuleFullResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
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
    api_instance = openapi_client.RulesApi(api_client)
    rule_object = openapi_client.Rule() # Rule | Rule information

    try:
        api_response = api_instance.add_rule(rule_object)
        print("The response of RulesApi->add_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->add_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_object** | [**Rule**](Rule.md)| Rule information | 

### Return type

[**RuleFullResponse**](RuleFullResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A rule was created |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rule**
> List[RuleFullResponse] get_rule(rule_id)



Get a rule

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.rule_full_response import RuleFullResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
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
    api_instance = openapi_client.RulesApi(api_client)
    rule_id = 'rule_id_example' # str | Id of rule

    try:
        api_response = api_instance.get_rule(rule_id)
        print("The response of RulesApi->get_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->get_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| Id of rule | 

### Return type

[**List[RuleFullResponse]**](RuleFullResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about a rule |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_rules**
> List[RuleShortResponse] list_rules()



List rules

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.rule_short_response import RuleShortResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
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
    api_instance = openapi_client.RulesApi(api_client)

    try:
        api_response = api_instance.list_rules()
        print("The response of RulesApi->list_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->list_rules: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[RuleShortResponse]**](RuleShortResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of rules in an app |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_rule**
> remove_rule(rule_id)



Delete a rule

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
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
    api_instance = openapi_client.RulesApi(api_client)
    rule_id = 'rule_id_example' # str | Id of rule

    try:
        api_instance.remove_rule(rule_id)
    except Exception as e:
        print("Exception when calling RulesApi->remove_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| Id of rule | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rule was successfully removed |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_rule**
> object run_rule(rule_id, initial_data=initial_data)



Run a rule

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
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
    api_instance = openapi_client.RulesApi(api_client)
    rule_id = 'rule_id_example' # str | Id of rule
    initial_data = None # object | Initial data (optional)

    try:
        api_response = api_instance.run_rule(rule_id, initial_data=initial_data)
        print("The response of RulesApi->run_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->run_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| Id of rule | 
 **initial_data** | **object**| Initial data | [optional] 

### Return type

**object**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A rule ran successfully |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_rule**
> RuleFullResponse update_rule(rule_id, rule_object)



Update information about a specific rule

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.rule import Rule
from openapi_client.models.rule_full_response import RuleFullResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
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
    api_instance = openapi_client.RulesApi(api_client)
    rule_id = 'rule_id_example' # str | Id of user
    rule_object = openapi_client.Rule() # Rule | Rule information

    try:
        api_response = api_instance.update_rule(rule_id, rule_object)
        print("The response of RulesApi->update_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->update_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id** | **str**| Id of user | 
 **rule_object** | [**Rule**](Rule.md)| Rule information | 

### Return type

[**RuleFullResponse**](RuleFullResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the rule was updated successfully |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

