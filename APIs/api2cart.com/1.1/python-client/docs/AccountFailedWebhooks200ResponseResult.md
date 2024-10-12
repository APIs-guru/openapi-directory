# AccountFailedWebhooks200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_failed_webhook** | **str** |  | [optional] 
**webhook** | [**List[AccountFailedWebhooks200ResponseResultWebhookInner]**](AccountFailedWebhooks200ResponseResultWebhookInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_failed_webhooks200_response_result import AccountFailedWebhooks200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of AccountFailedWebhooks200ResponseResult from a JSON string
account_failed_webhooks200_response_result_instance = AccountFailedWebhooks200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(AccountFailedWebhooks200ResponseResult.to_json())

# convert the object into a dict
account_failed_webhooks200_response_result_dict = account_failed_webhooks200_response_result_instance.to_dict()
# create an instance of AccountFailedWebhooks200ResponseResult from a dict
account_failed_webhooks200_response_result_from_dict = AccountFailedWebhooks200ResponseResult.from_dict(account_failed_webhooks200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


