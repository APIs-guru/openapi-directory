# openapi_client.JiraExpressionsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyse_expression**](JiraExpressionsApi.md#analyse_expression) | **POST** /rest/api/3/expression/analyse | Analyse Jira expression
[**evaluate_jira_expression**](JiraExpressionsApi.md#evaluate_jira_expression) | **POST** /rest/api/3/expression/eval | Evaluate Jira expression


# **analyse_expression**
> JiraExpressionsAnalysis analyse_expression(jira_expression_for_analysis, check=check)

Analyse Jira expression

Analyses and validates Jira expressions.  As an experimental feature, this operation can also attempt to type-check the expressions.  Learn more about Jira expressions in the [documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/).  **[Permissions](#permissions) required**: None.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.jira_expression_for_analysis import JiraExpressionForAnalysis
from openapi_client.models.jira_expressions_analysis import JiraExpressionsAnalysis
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
    api_instance = openapi_client.JiraExpressionsApi(api_client)
    jira_expression_for_analysis = {"contextVariables":{"listOfStrings":"List<String>","record":"{ a: Number, b: String }","value":"User"},"expressions":["issues.map(issue => issue.properties['property_key'])"]} # JiraExpressionForAnalysis | The Jira expressions to analyse.
    check = syntax # str | The check to perform:   *  `syntax` Each expression's syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression's length.  *  `type` EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don't exist or passing the wrong number of arguments to functions. Also performs the syntax check.  *  `complexity` EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute. (optional) (default to syntax)

    try:
        # Analyse Jira expression
        api_response = api_instance.analyse_expression(jira_expression_for_analysis, check=check)
        print("The response of JiraExpressionsApi->analyse_expression:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JiraExpressionsApi->analyse_expression: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jira_expression_for_analysis** | [**JiraExpressionForAnalysis**](JiraExpressionForAnalysis.md)| The Jira expressions to analyse. | 
 **check** | **str**| The check to perform:   *  &#x60;syntax&#x60; Each expression&#39;s syntax is checked to ensure the expression can be parsed. Also, syntactic limits are validated. For example, the expression&#39;s length.  *  &#x60;type&#x60; EXPERIMENTAL. Each expression is type checked and the final type of the expression inferred. Any type errors that would result in the expression failure at runtime are reported. For example, accessing properties that don&#39;t exist or passing the wrong number of arguments to functions. Also performs the syntax check.  *  &#x60;complexity&#x60; EXPERIMENTAL. Determines the formulae for how many [expensive operations](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#expensive-operations) each expression may execute. | [optional] [default to syntax]

### Return type

[**JiraExpressionsAnalysis**](JiraExpressionsAnalysis.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | 400 response |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**404** | 404 response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **evaluate_jira_expression**
> JiraExpressionResult evaluate_jira_expression(jira_expression_eval_request_bean, expand=expand)

Evaluate Jira expression

Evaluates a Jira expression and returns its value.  This resource can be used to test Jira expressions that you plan to use elsewhere, or to fetch data in a flexible way. Consult the [Jira expressions documentation](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/) for more details.  #### Context variables ####  The following context variables are available to Jira expressions evaluated by this resource. Their presence depends on various factors; usually you need to manually request them in the context object sent in the payload, but some of them are added automatically under certain conditions.   *  `user` ([User](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user)): The current user. Always available and equal to `null` if the request is anonymous.  *  `app` ([App](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#app)): The [Connect app](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) that made the request. Available only for authenticated requests made by Connect Apps (read more here: [Authentication for Connect apps](https://developer.atlassian.com/cloud/jira/platform/security-for-connect-apps/)).  *  `issue` ([Issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): The current issue. Available only when the issue is provided in the request context object.  *  `issues` ([List](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#list) of [Issues](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue)): A collection of issues matching a JQL query. Available only when JQL is provided in the request context object.  *  `project` ([Project](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#project)): The current project. Available only when the project is provided in the request context object.  *  `sprint` ([Sprint](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#sprint)): The current sprint. Available only when the sprint is provided in the request context object.  *  `board` ([Board](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#board)): The current board. Available only when the board is provided in the request context object.  *  `serviceDesk` ([ServiceDesk](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#servicedesk)): The current service desk. Available only when the service desk is provided in the request context object.  *  `customerRequest` ([CustomerRequest](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#customerrequest)): The current customer request. Available only when the customer request is provided in the request context object.  Also, custom context variables can be passed in the request with their types. Those variables can be accessed by key in the Jira expression. These variable types are available for use in a custom context:   *  `user`: A [user](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#user) specified as an Atlassian account ID.  *  `issue`: An [issue](https://developer.atlassian.com/cloud/jira/platform/jira-expressions-type-reference#issue) specified by ID or key. All the fields of the issue object are available in the Jira expression.  *  `json`: A JSON object containing custom content.  *  `list`: A JSON list of `user`, `issue`, or `json` variable types.  This operation can be accessed anonymously.  **[Permissions](#permissions) required**: None. However, an expression may return different results for different users depending on their permissions. For example, different users may see different comments on the same issue.   Permission to access Jira Software is required to access Jira Software context variables (`board` and `sprint`) or fields (for example, `issue.sprint`).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.jira_expression_eval_request_bean import JiraExpressionEvalRequestBean
from openapi_client.models.jira_expression_result import JiraExpressionResult
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
    api_instance = openapi_client.JiraExpressionsApi(api_client)
    jira_expression_eval_request_bean = {"context":{"board":10100,"custom":{"config":{"type":"json","value":{"userId":"10002"}},"issuesList":[{"key":"ACJIRA-1471","type":"issue"},{"id":100001,"type":"issue"}],"myUser":{"accountId":"100001","type":"user"},"nullField":{"type":"json"}},"customerRequest":1450,"issue":{"key":"ACJIRA-1470"},"issues":{"jql":{"maxResults":100,"query":"project = HSP","startAt":0,"validation":"strict"}},"project":{"key":"ACJIRA"},"serviceDesk":10023,"sprint":10001},"expression":"{ key: issue.key, type: issue.issueType.name, links: issue.links.map(link => link.linkedIssue.id), listCustomVariable: issuesList.includes(issue), customVariables: myUser.accountId == config.userId}"} # JiraExpressionEvalRequestBean | The Jira expression and the evaluation context.
    expand = 'expand_example' # str | Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. (optional)

    try:
        # Evaluate Jira expression
        api_response = api_instance.evaluate_jira_expression(jira_expression_eval_request_bean, expand=expand)
        print("The response of JiraExpressionsApi->evaluate_jira_expression:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JiraExpressionsApi->evaluate_jira_expression: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jira_expression_eval_request_bean** | [**JiraExpressionEvalRequestBean**](JiraExpressionEvalRequestBean.md)| The Jira expression and the evaluation context. | 
 **expand** | **str**| Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;meta.complexity&#x60; that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. | [optional] 

### Return type

[**JiraExpressionResult**](JiraExpressionResult.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the evaluation results in a value. The result is a JSON primitive value, list, or object. |  -  |
**400** | Returned if:   *  the request is invalid, that is:           *  invalid data is provided, such as a request including issue ID and key.      *  the expression is invalid and can not be parsed.  *  evaluation fails at runtime. This may happen for various reasons. For example, accessing a property on a null object (such as the expression &#x60;issue.id&#x60; where &#x60;issue&#x60; is &#x60;null&#x60;). In this case an error message is provided. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**404** | Returned if any object provided in the request context is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

