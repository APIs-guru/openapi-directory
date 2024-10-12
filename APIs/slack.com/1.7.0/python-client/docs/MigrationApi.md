# openapi_client.MigrationApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**migration_exchange**](MigrationApi.md#migration_exchange) | **GET** /migration.exchange | 


# **migration_exchange**
> MigrationExchangeSuccessSchema migration_exchange(token, users, team_id=team_id, to_old=to_old)



For Enterprise Grid workspaces, map local user IDs to global user IDs

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.migration_exchange_success_schema import MigrationExchangeSuccessSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MigrationApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `tokens.basic`
    users = 'users_example' # str | A comma-separated list of user ids, up to 400 per request
    team_id = 'team_id_example' # str | Specify team_id starts with `T` in case of Org Token (optional)
    to_old = True # bool | Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`. (optional)

    try:
        api_response = api_instance.migration_exchange(token, users, team_id=team_id, to_old=to_old)
        print("The response of MigrationApi->migration_exchange:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MigrationApi->migration_exchange: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;tokens.basic&#x60; | 
 **users** | **str**| A comma-separated list of user ids, up to 400 per request | 
 **team_id** | **str**| Specify team_id starts with &#x60;T&#x60; in case of Org Token | [optional] 
 **to_old** | **bool**| Specify &#x60;true&#x60; to convert &#x60;W&#x60; global user IDs to workspace-specific &#x60;U&#x60; IDs. Defaults to &#x60;false&#x60;. | [optional] 

### Return type

[**MigrationExchangeSuccessSchema**](MigrationExchangeSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response when mappings exist for the specified user IDs |  -  |
**0** | Typical error response when there are no mappings to provide |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

