# openapi_client.ShowbackRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**showback_rule_create_update_rule**](ShowbackRulesApi.md#showback_rule_create_update_rule) | **PUT** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/showbackRules/{ruleName} | 
[**showback_rule_get_billing_account_id**](ShowbackRulesApi.md#showback_rule_get_billing_account_id) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/showbackRules/{ruleName} | 
[**showback_rules_list**](ShowbackRulesApi.md#showback_rules_list) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.CostManagement/showbackRules | 


# **showback_rule_create_update_rule**
> ShowbackRule showback_rule_create_update_rule(api_version, billing_account_id, rule_name, showback_rule)



Create/Update showback rule for billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.showback_rule import ShowbackRule
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
    api_instance = openapi_client.ShowbackRulesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    rule_name = 'rule_name_example' # str | Showback rule name
    showback_rule = openapi_client.ShowbackRule() # ShowbackRule | Showback rule to create or update.

    try:
        api_response = api_instance.showback_rule_create_update_rule(api_version, billing_account_id, rule_name, showback_rule)
        print("The response of ShowbackRulesApi->showback_rule_create_update_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShowbackRulesApi->showback_rule_create_update_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **rule_name** | **str**| Showback rule name | 
 **showback_rule** | [**ShowbackRule**](ShowbackRule.md)| Showback rule to create or update. | 

### Return type

[**ShowbackRule**](ShowbackRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **showback_rule_get_billing_account_id**
> ShowbackRule showback_rule_get_billing_account_id(api_version, billing_account_id, rule_name)



Gets the showback rule by rule name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.showback_rule import ShowbackRule
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
    api_instance = openapi_client.ShowbackRulesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID
    rule_name = 'rule_name_example' # str | Showback rule name

    try:
        api_response = api_instance.showback_rule_get_billing_account_id(api_version, billing_account_id, rule_name)
        print("The response of ShowbackRulesApi->showback_rule_get_billing_account_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShowbackRulesApi->showback_rule_get_billing_account_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **billing_account_id** | **str**| BillingAccount ID | 
 **rule_name** | **str**| Showback rule name | 

### Return type

[**ShowbackRule**](ShowbackRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **showback_rules_list**
> ShowbackRuleListResult showback_rules_list(api_version, billing_account_id)



Get list all Showback Rules.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.showback_rule_list_result import ShowbackRuleListResult
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
    api_instance = openapi_client.ShowbackRulesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    billing_account_id = 'billing_account_id_example' # str | BillingAccount ID

    try:
        api_response = api_instance.showback_rules_list(api_version, billing_account_id)
        print("The response of ShowbackRulesApi->showback_rules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShowbackRulesApi->showback_rules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **billing_account_id** | **str**| BillingAccount ID | 

### Return type

[**ShowbackRuleListResult**](ShowbackRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

